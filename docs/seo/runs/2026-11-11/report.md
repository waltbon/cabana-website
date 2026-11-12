# Corrida semanal SEO — 2026-11-11

**Estado:** etapa 1 (base técnica e indexación). **Mejor** que la corrida anterior (2026-11-03): 7/7 páginas objetivo indexadas, advertencias de lint 47 → 16, impresiones ×3,4. Aún 0 clics no-marca.

## KPIs

| KPI | Anterior (11-03) | Actual | Meta |
|---|---|---|---|
| lint_errors | 0 | 0 | 0 |
| lint_warnings | 47 | 16 | ↓ |
| hreflang_pages / sitemap_pages | 33 / 33 | 31 / 32 | todas |
| redirects_applied / total | 15 / 37 | 15 / 37 | 37 |
| target_indexed / target_pages | 6 / 7 | **7 / 7** | 7 / 7 |
| gsc_clicks_7d | 2 | 5 | ↑ |
| gsc_impressions_7d | 101 | 347 | ↑ |
| gsc_nonbrand_clicks_7d | 0 | 0 | > 0 |
| gsc_nonbrand_impressions_7d | 32 | 175 | ↑ |
| gsc_avg_position_7d (consultas visibles) | 43,0 | 57,4 | ↓ |
| drift_regressions | 0 | 0 | 0 |

Ventanas GSC: actual 2026-11-02 → 11-08; anterior 2026-10-26 → 11-01 (recalculada en esta corrida; la fila del 11-03 usaba 25-31 oct). La posición empeora por volumen: entran 28 consultas nuevas, la mayoría no-marca en posiciones 40–90.

## Regresiones

Ninguna. Sin errores de lint nuevos, sin hallazgos nuevos, todas las páginas del sitemap responden 200, ninguna página objetivo perdió indexación. Drift: las 7 URLs solo disparan `content_hash_changed` (INFO), explicado por #51, #58, #60, #62 y #63 (rediseños de home, capacidades e ilustraciones). Baselines recapturadas al cierre.

## Indexación de páginas objetivo

| URL | verdict | coverage_state | Último rastreo | Canónica respetada |
|---|---|---|---|---|
| / | PASS | Submitted and indexed | 2026-11-07 | sí |
| /en | PASS | Submitted and indexed | 2026-11-07 | sí |
| /ruta-ia | PASS | Submitted and indexed | 2026-11-04 | sí |
| /ai-first-move | PASS | Submitted and indexed | 2026-10-31 | sí |
| /en/ai-first-move | PASS | Submitted and indexed | 2026-10-31 | sí |
| /capacidades | PASS | Submitted and indexed | 2026-11-01 | sí |
| /en/capacidades | PASS | Submitted and indexed | 2026-10-31 | sí |

/ruta-ia pasó de "Discovered - currently not indexed" a indexada (rastreo 11-04), coherente con el enlazado interno de B-025 (#35).

## Lo que mejoró

- **Lint −31 advertencias:** titles/descriptions de mensajes y posts (B-010 #42, B-011 #39), voseo y tuteo en posts (B-026 #46–#52), /careers (B-030 #45, B-031 #44).
- **Sitemap 33 → 32, hreflang 31/32:** /en/careers fuera del sitemap con canónica a /careers (B-016 #43). La única página sin hreflang es la que reporta `hreflang-missing`.
- **Indexación 6/7 → 7/7:** /ruta-ia (B-025 #35).

## Advertencias persistentes (16)

- 10 × `sitemap-redirected`: el sitemap lista /about, /services/data-*, /contact, /posts y sus pares /en, que el mapa redirige a rutas aún pendientes.
- 2 × `benchmark` en messages/es.json; 1 × `ruta-ia-validada` ("confirmed") en messages/en.json.
- 1 × `redirect-temporary`: /case-studies con 307 (mapa pide 301 a /casos, ruta pendiente).
- 1 × `description-length` (163 caracteres) y 1 × `hreflang-missing` en vivo.

## Oportunidades de GSC

- **Consultas no-marca en posición 4–20** (volumen aún bajo, 1–2 impresiones): "custom ia" (8,0), "dataconsulting" (9,0), "ingenieria de datos" (10,0; 1 → 1), "consultoria data centers" (10,0), "data engineering consulting" (13,0), "consultoria data" (18,0).
- **Páginas con impresiones y CTR 0:** /capacidades/consultoria-de-datos (81 imp., pos. 43,8), /en/capacidades/consultoria-de-datos (87 imp., pos. 81,4), /capacidades/agentes-ia-a-medida (34 imp., pos. 36,7), /capacidades (21 imp., pos. 65).
- **Canibalización / URLs viejas:** /about (13 imp.), /services (12 imp.), /contact, /posts, /en/services/data-analytics-use-case todavía reciben impresiones; dependen de los redirects pendientes. "ingenieria de datos" cae en la ficha correcta solo si apunta a /capacidades/ingenieria-de-datos (3 imp.); verificar.
- **Subdominio ruta-ai.cabanadata.com** aparece con 4 impresiones (pos. 8,8): compite con /ruta-ia.
- Las fichas EN usan slugs en español (/en/capacidades/...) y rankean en posición 56–81: refuerza la decisión pendiente de slugs propios en inglés.

## Fuentes sin datos

- **Core Web Vitals:** sin API key de PageSpeed Insights; drift con `--skip-cwv`.
- Todo lo demás (lint en vivo, GSC query/page, URL Inspection, drift) respondió sin errores.
