#!/usr/bin/env node
// SEO and brand-copy guardrails for cabanadata.com.
//
// Rules live in docs/seo/rules.json (derived from docs/content/GUIA-TONO.md).
// No dependencies: runs in CI without `pnpm install`.
// The "content" check covers messages/*.json and the blog posts in data/blog
// (title, excerpt, cta; warnings only, see rules.blog).
//
// Usage:
//   node scripts/seo-lint.mjs                      # content + routes (static, CI)
//   node scripts/seo-lint.mjs --live https://cabanadata.com   # + live checks
//   node scripts/seo-lint.mjs --only content --json
//
// Exit code 1 when any finding has severity "error".

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const asJson = flag("--json");
const liveBase = option("--live")?.replace(/\/$/, "");
const only = option("--only")?.split(",");
const checks = only ?? ["content", "routes", ...(liveBase ? ["live"] : [])];

const rules = readJson("docs/seo/rules.json");
const findings = [];

function readJson(path) {
  return JSON.parse(readFileSync(join(ROOT, path), "utf8"));
}

function report(check, severity, message, extra = {}) {
  findings.push({ check, severity, message, ...extra });
}

// Letter-aware word boundaries: JS \b ignores accented letters.
function termRegex(term) {
  const flags = term.caseSensitive ? "gu" : "giu";
  return new RegExp(`(?<![\\p{L}\\p{N}])(?:${term.pattern})(?![\\p{L}\\p{N}])`, flags);
}

function* leaves(value, path) {
  if (typeof value === "string") yield [path, value];
  else if (Array.isArray(value)) {
    for (const [i, v] of value.entries()) yield* leaves(v, `${path}.${i}`);
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) yield* leaves(v, `${path}.${k}`);
  }
}

function* nestedMetas(value, path) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return;
  for (const [k, v] of Object.entries(value)) {
    if (k === "meta" && v && typeof v === "object" && typeof v.title === "string") yield [`${path}.meta`, v];
    else yield* nestedMetas(v, `${path}.${k}`);
  }
}

function isException(ruleId, key) {
  return rules.exceptions.some(
    (e) => e.rule === ruleId && (key === e.key || key.startsWith(`${e.key}.`))
  );
}

function excerpt(text, index, length) {
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + length + 40);
  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}

// ---------------------------------------------------------------------------
// content: glossary terms, meta lengths, es/en parity
// ---------------------------------------------------------------------------

function checkContent() {
  const locales = ["es", "en"];
  const messages = Object.fromEntries(
    locales.map((l) => [l, readJson(`messages/${l}.json`)])
  );
  const namespaces = Object.keys(rules.namespaces).filter((k) => !k.startsWith("$"));
  const terms = rules.terms.map((t) => ({ ...t, regex: termRegex(t) }));

  for (const locale of locales) {
    const file = `messages/${locale}.json`;
    const titles = new Map();

    for (const ns of namespaces) {
      const tree = messages[locale][ns];
      if (!tree) {
        report("content", "warning", `Namespace "${ns}" no existe`, { file, locale });
        continue;
      }

      for (const [key, text] of leaves(tree, ns)) {
        for (const term of terms) {
          if (!term.locales.includes(locale)) continue;
          if (!term.namespaces.includes("*") && !term.namespaces.includes(ns)) continue;
          for (const match of text.matchAll(term.regex)) {
            if (isException(term.id, key)) continue;
            report("content", term.severity, `"${match[0]}": ${term.reason} Usar: ${term.use}.`, {
              rule: term.id,
              file,
              locale,
              key,
              excerpt: excerpt(text, match.index, match[0].length),
            });
          }
        }
      }

      // Page meta: <ns>.meta and nested <ns>.<page>.meta (B-028) for page
      // namespaces, metadata.<page> for legacy ones
      const metas = ns === "metadata"
        ? Object.entries(tree).map(([k, v]) => [`metadata.${k}`, v])
        : [...nestedMetas(tree, ns)];
      for (const [key, meta] of metas) {
        checkMeta(file, locale, key, meta, titles);
      }

      // Missing translations
      if (locale === "es") {
        const enKeys = new Set([...leaves(messages.en[ns] ?? {}, ns)].map(([k]) => k));
        for (const [key] of leaves(tree, ns)) {
          if (!enKeys.has(key)) {
            report("content", "warning", "Clave sin traducción en en.json", {
              rule: "i18n-parity",
              file: "messages/en.json",
              locale: "en",
              key,
            });
          }
        }
      }
    }

    for (const [title, keys] of titles) {
      if (keys.length > 1) {
        report("content", "warning", `Título repetido en ${keys.join(", ")}: dos páginas compiten por la misma intención`, {
          rule: "duplicate-title",
          file,
          locale,
          excerpt: title,
        });
      }
    }
  }
}

// ---------------------------------------------------------------------------
// blog: title/excerpt/cta of each post in data/blog (TypeScript source, read
// without a TS toolchain). Everything is reported as warning (B-011).
// ---------------------------------------------------------------------------

const TS_STRING = /(\w+)\s*:\s*("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)/g;

function unquote(literal) {
  if (literal.startsWith('"')) return JSON.parse(literal);
  return literal.slice(1, -1).replace(/\\(.)/g, "$1");
}

function readPosts(file) {
  const src = readFileSync(join(ROOT, file), "utf8")
    .split("\n")
    .filter((line) => !/^\s*\/\//.test(line))
    .join("\n");
  // Each post starts at its `slug:`; a `cta: { ... }` block may follow.
  return src.split(/(?=\bslug\s*:)/).slice(1).map((chunk) => {
    const [main, cta] = chunk.split(/\bcta\s*:\s*\{/);
    const fields = (text) => {
      const out = {};
      for (const m of (text ?? "").matchAll(TS_STRING)) out[m[1]] ??= unquote(m[2]);
      return out;
    };
    const post = fields(main);
    if (cta) post.cta = fields(cta.split("}")[0]);
    return post;
  });
}

function checkBlog() {
  const { source: file, locale, titleSuffix = "" } = rules.blog;
  const { titleMax, descriptionMin, descriptionMax } = rules.meta;
  const terms = rules.terms
    .filter((t) => t.locales.includes(locale) && (t.namespaces.includes("*") || t.namespaces.includes("blog")))
    .map((t) => ({ ...t, regex: termRegex(t) }));

  for (const post of readPosts(file)) {
    const prefix = `posts.${post.slug}`;
    const texts = [
      [`${prefix}.title`, post.title],
      [`${prefix}.excerpt`, post.excerpt],
      [`${prefix}.cta.title`, post.cta?.title],
      [`${prefix}.cta.description`, post.cta?.description],
    ].filter(([, text]) => typeof text === "string");

    for (const [key, text] of texts) {
      for (const term of terms) {
        for (const match of text.matchAll(term.regex)) {
          if (isException(term.id, key)) continue;
          report("content", "warning", `"${match[0]}": ${term.reason} Usar: ${term.use}.`, {
            rule: term.id, file, locale, key,
            excerpt: excerpt(text, match.index, match[0].length),
          });
        }
      }
    }

    const base = { file, locale };
    if (typeof post.title === "string") {
      const rendered = `${post.title}${titleSuffix}`;
      if (rendered.length > titleMax) {
        report("content", "warning", `Title de ${rendered.length} caracteres con el sufijo "${titleSuffix.trim()}" (máx. ${titleMax}); Google lo corta`, {
          ...base, rule: "title-length", key: `${prefix}.title`, excerpt: rendered,
        });
      }
    }
    // The excerpt is the meta description (generateMetadata strips HTML)
    const description = post.excerpt?.replace(/<[^>]*>/g, "").trim();
    if (!description) {
      report("content", "warning", "Post sin excerpt: no tiene meta description", {
        ...base, rule: "description-missing", key: `${prefix}.excerpt`,
      });
    } else if (description.length > descriptionMax || description.length < descriptionMin) {
      report("content", "warning", `Meta description de ${description.length} caracteres (rango ${descriptionMin}–${descriptionMax})`, {
        ...base, rule: "description-length", key: `${prefix}.excerpt`, excerpt: description,
      });
    }
  }
}

function checkBlogBodies() {
  const { bodies: dir, locale } = rules.blog;
  if (!dir) return;
  const terms = rules.terms
    .filter((t) => t.locales.includes(locale) && (t.namespaces.includes("*") || t.namespaces.includes("blog")))
    .map((t) => ({ ...t, regex: termRegex(t) }));

  for (const name of readdirSync(join(ROOT, dir)).filter((f) => f.endsWith(".mdx")).sort()) {
    const file = `${dir}/${name}`;
    // Prose only: drop fenced code and link/image targets so URLs never match
    const text = readFileSync(join(ROOT, file), "utf8")
      .replace(/```[\s\S]*?```/g, (m) => m.replace(/[^\n]/g, " "))
      .replace(/\]\([^)]*\)/g, "]()");
    const key = `posts.${name.replace(/\.mdx$/, "")}.body`;
    for (const term of terms) {
      for (const match of text.matchAll(term.regex)) {
        if (isException(term.id, key)) continue;
        const line = text.slice(0, match.index).split("\n").length;
        report("content", "warning", `"${match[0]}" (línea ${line}): ${term.reason} Usar: ${term.use}.`, {
          rule: term.id, file, locale, key,
          excerpt: excerpt(text, match.index, match[0].length),
        });
      }
    }
  }
}

function checkMeta(file, locale, key, meta, titles) {
  const { titleMax, descriptionMin, descriptionMax } = rules.meta;
  const base = { file, locale, key };

  if (typeof meta.title === "string") {
    titles.set(meta.title, [...(titles.get(meta.title) ?? []), key]);
    if (meta.title.length > titleMax) {
      report("content", "warning", `Title de ${meta.title.length} caracteres (máx. ${titleMax}); Google lo corta`, {
        ...base, rule: "title-length", excerpt: meta.title,
      });
    }
  }

  if (typeof meta.description === "string") {
    const len = meta.description.length;
    if (len > descriptionMax || len < descriptionMin) {
      report("content", "warning", `Meta description de ${len} caracteres (rango ${descriptionMin}–${descriptionMax})`, {
        ...base, rule: "description-length", excerpt: meta.description,
      });
    }
  } else if (meta.title) {
    report("content", "error", "Página con title pero sin meta description", { ...base, rule: "description-missing" });
  }
}

// ---------------------------------------------------------------------------
// routes: sitemap ↔ pages, redirects map, hreflang, robots
// ---------------------------------------------------------------------------

function findPages(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (!name.startsWith("_")) findPages(full, acc);
    } else if (name === "page.tsx") {
      acc.push(full);
    }
  }
  return acc;
}

function routeOf(pageFile) {
  const segments = relative(join(ROOT, "app"), pageFile)
    .split(sep)
    .slice(0, -1)
    .filter((s) => s !== "[locale]" && !/^\(.*\)$/.test(s));
  return `/${segments.join("/")}`;
}

function routeRegex(route) {
  const body = route.replace(/\[[^\]]+\]/g, "[^/]+");
  return new RegExp(`^${body}$`);
}

function readRedirectsCsv() {
  const lines = readFileSync(join(ROOT, "docs/seo/redirects.csv"), "utf8").trim().split("\n").slice(1);
  return lines.map((line) => {
    const [origin, destination, ...reason] = line.split(",");
    return { origin, destination, reason: reason.join(",") };
  });
}

function checkRoutes() {
  const pages = findPages(join(ROOT, "app"));
  const routes = pages.map((p) => ({ file: relative(ROOT, p), route: routeOf(p) }));
  const matchers = routes.map((r) => routeRegex(r.route));

  // Sitemap entries must resolve to a page
  const sitemapFile = "app/sitemap.ts";
  const sitemapSrc = readFileSync(join(ROOT, sitemapFile), "utf8");
  const sitemapPaths = [...sitemapSrc.matchAll(/\$\{domain\}(\/[^`]*)`/g)].map((m) => m[1]);
  const redirects = readRedirectsCsv().filter(
    (r) => r.origin.startsWith("/") && !r.origin.includes(":") && r.origin !== r.destination
  );

  for (const path of sitemapPaths) {
    const bare = path.replace(/^\/en(?=\/|$)/, "") || "/";
    if (!matchers.some((re) => re.test(bare))) {
      report("routes", "error", `El sitemap lista ${path}, que no tiene page.tsx`, { file: sitemapFile, key: path });
    }
    const redirect = redirects.find((r) => r.origin === path);
    if (redirect) {
      report("routes", "warning", `El sitemap lista ${path}, que el mapa redirige a ${redirect.destination}`, {
        file: sitemapFile, key: path, rule: "sitemap-redirected",
      });
    }
  }

  const listed = new Set(sitemapPaths.map((p) => p.replace(/^\/en(?=\/|$)/, "") || "/"));
  for (const { route, file } of routes) {
    if (route.includes("[") || listed.has(route)) continue;
    if (redirects.some((r) => r.origin === route)) continue; // page on its way out
    report("routes", "warning", `${route} tiene página pero no está en el sitemap`, { file, rule: "sitemap-missing" });
  }

  // hreflang: pages that override `alternates` without `languages` drop the
  // layout's hreflang (00-baseline.md §1). Skip pages already redirected away.
  const nextConfig = readFileSync(join(ROOT, "next.config.ts"), "utf8");
  for (const { file, route } of routes) {
    if (nextConfig.includes(`"${route}"`)) continue;
    const src = readFileSync(join(ROOT, file), "utf8");
    if (/alternates\s*:/.test(src) && !/languages\s*:/.test(src)) {
      report("routes", "warning", `${route} sobrescribe alternates sin languages: no emite hreflang`, {
        file, rule: "hreflang-missing",
      });
    }
  }

  // robots.txt
  const robotsFile = "app/robots.ts";
  const robotsSrc = readFileSync(join(ROOT, robotsFile), "utf8");
  for (const agent of rules.robots.requiredAgents) {
    if (!robotsSrc.includes(`"${agent}"`)) {
      report("routes", "warning", `robots.txt no declara ${agent}`, { file: robotsFile, rule: "robots-agent" });
    }
  }
}

// ---------------------------------------------------------------------------
// live: crawl the sitemap of a deployed site and probe the redirect map
// ---------------------------------------------------------------------------

const attr = (tag, name) => tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`, "i"))?.[1];

function parseHead(html) {
  const tags = (re) => [...html.matchAll(re)].map((m) => m[0]);
  const metaDescription = tags(/<meta\b[^>]*>/gi).find((t) => /name\s*=\s*"description"/i.test(t));
  const robotsMeta = tags(/<meta\b[^>]*>/gi).find((t) => /name\s*=\s*"robots"/i.test(t));
  const links = tags(/<link\b[^>]*>/gi);
  return {
    title: html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim(),
    description: metaDescription && attr(metaDescription, "content"),
    robots: robotsMeta && attr(robotsMeta, "content"),
    canonical: links.filter((t) => /rel\s*=\s*"canonical"/i.test(t)).map((t) => attr(t, "href"))[0],
    hreflang: links
      .filter((t) => /hreflang\s*=/i.test(t))
      .map((t) => ({ lang: attr(t, "hreflang"), href: attr(t, "href") })),
    h1: (html.match(/<h1\b/gi) ?? []).length,
  };
}

async function pool(items, size, fn) {
  const results = [];
  let next = 0;
  const workers = Array.from({ length: size }, async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return results;
}

async function checkLive() {
  const sitemap = await fetch(`${liveBase}/sitemap.xml`).then((r) => r.text());
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const { titleMax, descriptionMin, descriptionMax } = rules.meta;

  const pages = await pool(urls, 5, async (url) => {
    // Sitemap URLs point at production; probe the same path on liveBase
    const target = `${liveBase}${new URL(url).pathname}`;
    const res = await fetch(target, { redirect: "manual" });
    const page = { url: target, status: res.status };
    if (res.status !== 200) {
      report("live", "error", `Sitemap URL responde ${res.status}`, { key: target, rule: "sitemap-status" });
      return page;
    }
    Object.assign(page, parseHead(await res.text()));
    const base = { key: target };
    if (page.robots?.includes("noindex")) report("live", "error", "Página del sitemap con noindex", { ...base, rule: "noindex" });
    if (!page.title) report("live", "error", "Sin <title>", { ...base, rule: "title-missing" });
    else if (page.title.length > titleMax) report("live", "warning", `Title de ${page.title.length} caracteres`, { ...base, rule: "title-length", excerpt: page.title });
    if (!page.description) report("live", "error", "Sin meta description", { ...base, rule: "description-missing" });
    else if (page.description.length > descriptionMax || page.description.length < descriptionMin) {
      report("live", "warning", `Meta description de ${page.description.length} caracteres`, { ...base, rule: "description-length" });
    }
    if (page.h1 !== 1) report("live", "warning", `${page.h1} etiquetas <h1>`, { ...base, rule: "h1-count" });
    if (!page.hreflang.length) report("live", "warning", "Sin hreflang", { ...base, rule: "hreflang-missing" });
    // Pages with an es/en pair must also declare x-default (B-018). Pages
    // without the pair are covered by hreflang-missing or are single-locale.
    const langs = new Set(page.hreflang.map((h) => h.lang?.toLowerCase()));
    if (langs.has("es") && langs.has("en") && !langs.has("x-default")) {
      report("live", "warning", "Hreflang es/en sin x-default", { ...base, rule: "hreflang-x-default-missing" });
    }
    if (page.canonical && new URL(page.canonical, target).pathname !== new URL(target).pathname) {
      report("live", "warning", `Canonical apunta a ${page.canonical}`, { ...base, rule: "canonical-mismatch" });
    }
    return page;
  });

  // Redirect map progress: which rows of redirects.csv are live as 301/308
  const rows = readRedirectsCsv().filter(
    (r) => r.origin.startsWith("/") && !r.origin.includes(":") && r.origin !== r.destination
  );
  const redirects = await pool(rows, 5, async (row) => {
    const res = await fetch(`${liveBase}${row.origin}`, { redirect: "manual" });
    const location = res.headers.get("location");
    const done = [301, 308].includes(res.status) && location && new URL(location, liveBase).pathname === row.destination;
    const status = done ? "applied" : [302, 307].includes(res.status) ? "temporary" : "pending";
    if (status === "temporary") {
      report("live", "warning", `${row.origin} redirige con ${res.status} (temporal); el mapa pide 301 a ${row.destination}`, {
        key: row.origin, rule: "redirect-temporary",
      });
    }
    return { ...row, status: res.status, location, state: status };
  });

  return { pages, redirects };
}

// ---------------------------------------------------------------------------

const live = {};
if (checks.includes("content")) {
  checkContent();
  if (rules.blog) {
    checkBlog();
    checkBlogBodies();
  }
}
if (checks.includes("routes")) checkRoutes();
if (checks.includes("live")) {
  if (!liveBase) {
    console.error("--only live requiere --live <url>");
    process.exit(2);
  }
  Object.assign(live, await checkLive());
}

const errors = findings.filter((f) => f.severity === "error").length;
const warnings = findings.length - errors;

if (asJson) {
  console.log(JSON.stringify({ checks, summary: { errors, warnings }, findings, ...live }, null, 2));
} else {
  for (const check of checks) {
    const group = findings.filter((f) => f.check === check);
    console.log(`\n## ${check} (${group.length})`);
    for (const f of group) {
      const where = [f.file, f.key].filter(Boolean).join(" · ");
      console.log(`${f.severity === "error" ? "✖" : "⚠"} ${f.rule ?? ""} ${where}\n  ${f.message}${f.excerpt ? `\n  › ${f.excerpt}` : ""}`);
    }
  }
  if (live.redirects) {
    const applied = live.redirects.filter((r) => r.state === "applied").length;
    console.log(`\nRedirects del mapa aplicados: ${applied}/${live.redirects.length}`);
  }
  console.log(`\n${errors} errores, ${warnings} advertencias`);
}

process.exit(errors > 0 ? 1 : 0);
