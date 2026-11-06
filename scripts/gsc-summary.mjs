#!/usr/bin/env node
// GSC KPIs for the weekly SEO run (/seo-weekly, step "Interpretar").
//
// The GSC API returns totals.position = 0, so the average position is
// computed here from the rows, weighted by impressions:
//   sum(rows[].position * rows[].impressions) / sum(rows[].impressions)
//
// Reads from a run folder (docs/seo/runs/<date>/):
//   gsc-query.json       required: position and brand / non-brand split
//   gsc-page.json        optional: site clicks and impressions (the query
//                        dimension hides anonymized queries, so its totals
//                        are lower than the real ones)
//   gsc-*-prev.json      optional: same figures for the previous window
//
// Non-brand excludes queries containing the terms in docs/seo/STRATEGY.md §2.
// The position covers visible queries only, not the anonymized remainder.
// No dependencies.
//
// Usage:
//   node scripts/gsc-summary.mjs docs/seo/runs/2026-11-03
//   node scripts/gsc-summary.mjs docs/seo/runs/2026-11-03 --json

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// docs/seo/STRATEGY.md §2: "No-marca" excluye consultas que contienen...
const BRAND_TERMS = ["cabana", "ruta ia", "ruta ai", "ai first move"];

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const dir = args.find((a) => !a.startsWith("--"));

if (!dir) {
  console.error("Uso: node scripts/gsc-summary.mjs <carpeta de corrida> [--json]");
  process.exit(2);
}

// Lowercase, strip accents (cabaña -> cabana) and turn punctuation into spaces
// (ai-first-move -> ai first move).
const normalize = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

const isBrand = (query) => BRAND_TERMS.some((t) => normalize(query).includes(t));

const round = (n, d = 1) => (n === null ? null : Math.round(n * 10 ** d) / 10 ** d);

function load(name) {
  const path = join(dir, `${name}.json`);
  if (!existsSync(path)) return { error: `no existe ${name}.json` };
  try {
    const data = JSON.parse(readFileSync(path, "utf8"));
    if (data.error) return { error: `${name}.json: ${data.error}` };
    return { data };
  } catch (e) {
    return { error: `${name}.json ilegible: ${e.message}` };
  }
}

function aggregate(rows) {
  let clicks = 0;
  let impressions = 0;
  let weighted = 0;
  for (const r of rows) {
    const imp = Number(r.impressions) || 0;
    clicks += Number(r.clicks) || 0;
    impressions += imp;
    weighted += (Number(r.position) || 0) * imp;
  }
  return {
    queries: rows.length,
    clicks,
    impressions,
    position: impressions > 0 ? round(weighted / impressions) : null,
  };
}

function summarize(suffix) {
  const q = load(`gsc-query${suffix}`);
  const p = load(`gsc-page${suffix}`);
  if (q.error) return { error: q.error };

  const rows = q.data.rows ?? [];
  const queryText = (r) => r.query ?? r.keys?.[0] ?? "";
  const visible = aggregate(rows);

  // Site totals: page dimension when available, else the query rows.
  const pageTotals = p.data?.totals;
  const site = pageTotals
    ? { source: "gsc-page", clicks: pageTotals.clicks ?? 0, impressions: pageTotals.impressions ?? 0 }
    : { source: "gsc-query", clicks: visible.clicks, impressions: visible.impressions };

  return {
    date_range: q.data.date_range ?? null,
    clicks: site.clicks,
    impressions: site.impressions,
    totals_source: site.source,
    ...(p.error && { page_error: p.error }),
    visible,
    brand: aggregate(rows.filter((r) => isBrand(queryText(r)))),
    nonbrand: aggregate(rows.filter((r) => !isBrand(queryText(r)))),
  };
}

const current = summarize("");
const previous = existsSync(join(dir, "gsc-query-prev.json")) ? summarize("-prev") : null;

if (current.error) {
  // Never estimate: report "sin datos" and fail so the run notes it.
  if (asJson) console.log(JSON.stringify({ current, previous }, null, 2));
  else console.error(`sin datos: ${current.error}`);
  process.exit(1);
}

if (asJson) {
  console.log(JSON.stringify({ current, previous }, null, 2));
} else {
  const fmt = (v) => (v === null || v === undefined ? "sin datos" : String(v));
  const line = (label, get) =>
    `${label.padEnd(36)} ${fmt(previous && !previous.error ? get(previous) : null).padStart(10)} ${fmt(get(current)).padStart(10)}`;
  const range = (w) => (w?.date_range ? `${w.date_range.start} → ${w.date_range.end}` : "sin datos");

  console.log(`Ventana actual:   ${range(current)}`);
  console.log(`Ventana anterior: ${previous?.error ? `sin datos (${previous.error})` : range(previous)}`);
  console.log("");
  console.log(`${"".padEnd(36)} ${"anterior".padStart(10)} ${"actual".padStart(10)}`);
  console.log(line(`Clics (${current.totals_source})`, (w) => w.clicks));
  console.log(line(`Impresiones (${current.totals_source})`, (w) => w.impressions));
  console.log(line("Posición media (consultas visibles)", (w) => w.visible.position));
  console.log(line("Consultas visibles", (w) => w.visible.queries));
  console.log(line("Impresiones visibles", (w) => w.visible.impressions));
  console.log(line("Clics no-marca", (w) => w.nonbrand.clicks));
  console.log(line("Impresiones no-marca", (w) => w.nonbrand.impressions));
  console.log(line("Posición no-marca", (w) => w.nonbrand.position));
  console.log(line("Clics marca", (w) => w.brand.clicks));
  console.log(line("Impresiones marca", (w) => w.brand.impressions));
  console.log(line("Posición marca", (w) => w.brand.position));
  if (current.page_error) console.log(`\nAviso: ${current.page_error}; clics e impresiones salen de las consultas visibles.`);
}
