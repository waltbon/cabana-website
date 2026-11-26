# Corrida SEO · 2026-11-25

**Estado:** etapa de reajuste tras web v2 (#79, #80). **Mejor** que la semana anterior: advertencias de lint a la mitad (48 → 24), las 4 URL de `/lo-que-hacemos` pasaron de desconocidas a indexadas (11/11) y la posición no-marca subió de 46.2 a 38.6. Clics no-marca siguen en 0.

## KPIs

| KPI | 2026-11-20 | 2026-11-25 | Meta (STRATEGY) |
|---|---|---|---|
| lint_errors | 0 | 0 | 0 |
| lint_warnings | 48 | 24 | ↓ |
| hreflang_pages / sitemap_pages | 41 / 42 | 41 / 42 | todas menos las solo-es |
| redirects_applied / total | 23 / 43 | 23 / 43 | ↑ |
| target_indexed / target_pages | 7 / 11 | 11 / 11 | todas |
| gsc_clicks_7d | 4 | 5 | ↑ |
| gsc_impressions_7d | 313 | 376 | ↑ |
| gsc_nonbrand_clicks_7d | 0 | 0 | >0 |
| gsc_nonbrand_impressions_7d | 151 | 167 | ↑ |
| gsc_avg_position_7d | 43.2 | 36.8 | ↓ |
| drift_regressions | 0 | 0 | 0 |

Ventanas GSC: 16–22 nov (actual) y 9–15 nov (anterior), recalculadas con `gsc-summary.mjs` (la columna "anterior" es la ventana previa de esta corrida, no la fila del 20 nov). La ventana actual es la primera con web v2 publicado (desde el 20 nov).

## Regresiones

Ninguna.

- Lint: 0 errores, 0 hallazgos nuevos.
- Drift: todos los cambios tienen PR (ver abajo). Ninguna página objetivo dejó de responder 200 o 301.
- Indexación: ninguna página objetivo pasó a no indexada; robots, indexing y fetch en estado correcto en las 13 URL inspeccionadas.

## Indexación de páginas objetivo

| URL | verdict | coverage_state | Último rastreo | Canónica respetada |
|---|---|---|---|---|
| / | PASS | Submitted and indexed | 2026-11-24 | sí |
| /en | PASS | Submitted and indexed | 2026-11-21 | sí |
| /ruta-ia | PASS | Submitted and indexed | 2026-11-04 | sí |
| /ai-first-move | PASS | Submitted and indexed | 2026-11-25 | sí |
| /en/ai-first-move | PASS | Submitted and indexed | 2026-10-31 | sí |
| /lo-que-hacemos | PASS | Submitted and indexed | 2026-11-20 | sí |
| /en/lo-que-hacemos | PASS | Submitted and indexed | 2026-11-20 | sí |
| /lo-que-hacemos/modernizacion-de-datos | PASS | Submitted and indexed | 2026-11-25 | sí |
| /lo-que-hacemos/automatizacion-con-agentes-de-ia | PASS | Submitted and indexed | 2026-11-20 | sí |
| /como-trabajamos | PASS | Submitted and indexed | 2026-11-23 | sí |
| /en/how-we-work | PASS | Submitted and indexed | 2026-11-19 | sí |
| /capacidades (301 → /lo-que-hacemos) | PASS | Submitted and indexed | 2026-11-01 | sí (estado viejo) |
| /en/capacidades (301 → /en/lo-que-hacemos) | PASS | Submitted and indexed | 2026-10-31 | sí (estado viejo) |

`target_pages` = 11 (las de la corrida anterior). `/capacidades` y `/en/capacidades` ya redirigen; Google aún las tiene indexadas porque no las rastrea desde antes del 301. La lista de URL de `/seo-weekly` (skill) todavía nombra `/capacidades`; las 4 de `/lo-que-hacemos` se inspeccionaron aparte (`gsc-inspect-extra.json`). Conviene actualizar la skill.

## Lo que mejoró y qué PR lo explica

- **Lint −24 advertencias** (todas `ia-dosis-*`): #85 aplicó Q17, que reemplaza la "Dosis de IA" de GUIA-TONO v2 con el copy web v2.
- **Indexación 7/11 → 11/11**: las rutas de web v2 (#79) entraron al índice el 20–25 nov, con el sitemap y redirects de #80.
- **Drift esperado** en las 9 URL:
  - `/`, `/en`, `/ai-first-move`, `/en/ai-first-move`, `/como-trabajamos`, `/en/how-we-work`: `schema_modified` + `content_hash_changed`. #80 (makesOffer/OfferCatalog en layout, `page-schemas.ts`) se desplegó a producción después de la baseline del 20 nov (14:13 UTC).
  - `/ruta-ia`: solo `content_hash_changed` (#80).
  - `/capacidades`, `/en/capacidades`: canónica, title, H1, meta, H2 y schema cambian porque ahora redirigen a `/lo-que-hacemos` (#79). Esperado.
  - Baselines recapturadas al cierre, más las 4 URL de `/lo-que-hacemos`.
- **Posición media** 43.2 → 36.8 (no-marca 46.2 → 38.6), con 47 consultas visibles (antes 36).

## Oportunidades de GSC

- **"data consulting"** (24 imp., pos. 18.5) y **"consultora de datos"** (8 imp., nueva, pos. 15.2): términos de la vieja `/capacidades/consultoria-de-datos` (104 imp., CTR 0, pos. 36). Esa URL redirige hoy a `/lo-que-hacemos/modernizacion-de-datos` (10 imp., pos. 12.7). Seguir si el área hereda las impresiones; si no, es pérdida por redirect (riesgo ya anotado el 20 nov).
- **"data cleansing / data extraction consulting in latin america"** (4 y 6 imp., pos. 9.8 y 11.5, crecientes): intención en inglés sin página en-US propia de área; hoy cae en `/en/capacidades`. Candidato para el slug en inglés de B-008.
- **"ia empresa"** (5 imp., pos. 15.6) y la consulta larga "empresa mediana… por dónde comenzar" (3 imp., pos. 4.7): intención informativa → blog (`/posts/por-donde-empezar-con-ia`, 18 imp., pos. 9.7, CTR 0). Correcto según §3; revisar title/description del post.
- **"agentes de ia personalizados"** (21 imp., pos. 51.6): la página que sale es `/capacidades/agentes-ia-a-medida` (36 imp., redirige). Objetivo: `/lo-que-hacemos/automatizacion-con-agentes-de-ia`.
- **Páginas con impresiones y CTR 0** en posición alcanzable: `/en` (41 imp., pos. 7.1), `/posts/piloto-vs-produccion-ia` (16, pos. 4.7), `/en/capacidades` (14, pos. 5.3), `/ruta-ia` (12, pos. 7.2), `/about` (9, pos. 2.6). Revisar snippets.
- **Canibalización:** `https://ruta-ai.cabanadata.com/` (8 imp., pos. 6.8) compite con `/ruta-ia` por la marca Ruta IA.

## Fuentes sin datos

Ninguna. Todas las fuentes respondieron (lint en vivo, GSC query/page, drift, URL Inspection 13/13).
