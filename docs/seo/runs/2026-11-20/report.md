# Corrida SEO · 2026-11-20

**Estado:** etapa de reajuste (web v2 publicado hoy con #79 y #80). Igual que la semana anterior en tráfico. Esta corrida es la línea base posterior al cambio de arquitectura; el efecto en GSC se verá desde la corrida del 27 nov.

## KPIs

| KPI | 2026-11-15 | 2026-11-20 | Meta (STRATEGY) |
|---|---|---|---|
| lint_errors | 0 | 0 | 0 |
| lint_warnings | 12 | 48 | ↓ |
| hreflang_pages / sitemap_pages | 39 / 40 | 41 / 42 | todas menos las solo-es |
| redirects_applied / total | 17 / 37 | 23 / 43 | ↑ |
| target_indexed / target_pages | 7 / 7 | 7 / 11 | todas |
| gsc_clicks_7d | 4 | 6 | ↑ |
| gsc_impressions_7d | 321 | 296 | ↑ |
| gsc_nonbrand_clicks_7d | 0 | 0 | >0 |
| gsc_nonbrand_impressions_7d | 135 | 159 | ↑ |
| gsc_avg_position_7d | 44.9 | 45.7 | ↓ |
| drift_regressions | 0 | 0 | 0 |

Ventanas GSC: 11–17 nov (actual) y 4–10 nov (anterior). Todavía no incluyen web v2.

## Regresiones

Ninguna. Todas las páginas objetivo responden 200 (o 301 donde corresponde), sin errores de lint y sin páginas que dejaran de estar indexadas.

## Indexación de páginas objetivo

| URL | verdict | coverage_state | Último rastreo | Canónica respetada |
|---|---|---|---|---|
| / | PASS | Submitted and indexed | 2026-11-20 | sí |
| /en | PASS | Submitted and indexed | 2026-11-07 | sí |
| /ruta-ia | PASS | Submitted and indexed | 2026-11-04 | sí |
| /ai-first-move | PASS | Submitted and indexed | 2026-10-31 | sí |
| /en/ai-first-move | PASS | Submitted and indexed | 2026-10-31 | sí |
| /como-trabajamos | PASS | Submitted and indexed | 2026-11-19 | sí |
| /en/how-we-work | PASS | Submitted and indexed | 2026-11-19 | sí |
| /lo-que-hacemos | NEUTRAL | URL is unknown to Google | — | — |
| /en/lo-que-hacemos | NEUTRAL | URL is unknown to Google | — | — |
| /lo-que-hacemos/modernizacion-de-datos | NEUTRAL | URL is unknown to Google | — | — |
| /lo-que-hacemos/automatizacion-con-agentes-de-ia | NEUTRAL | URL is unknown to Google | — | — |
| /capacidades | — | error de la API (timeout) | — | — |

Las páginas de `/lo-que-hacemos` se publicaron hoy: es esperado que Google aún no las conozca. Acción manual: reenviar el sitemap y pedir indexación en Search Console. `/ruta-ia` y `/ai-first-move` se rastrearon por última vez antes del cambio: el snippet en Google todavía muestra precio y "diagnóstico" hasta el próximo rastreo.

## Lo que cambió y qué PR lo explica

- **Drift esperado** en `/`, `/en`, `/ruta-ia`, `/ai-first-move`, `/en/ai-first-move`, `/como-trabajamos`, `/en/how-we-work` (title, meta description, H1/H2, contenido): copy web v2 (#79, #80). `/capacidades` ahora es 301 a `/lo-que-hacemos` (#80). Baselines recapturadas para estas URLs y para las 5 áreas nuevas.
- **Redirects aplicados:** 17 → 23 (`/capacidades/*` → áreas, `/en/ruta-ia`, `/services/*` sin cadena) (#80).
- **Advertencias de lint 12 → 48:** las nuevas vienen del copy web v2 y chocan con GUIA-TONO v2 (`ia-dosis-encabezados` 18, `ia-dosis-title-hero` 6, `title-length` 6, ver DECISIONS C17, C19, C20, Q17); `i18n-parity` en `rutaIa.clientTime.items` (Ruta IA es solo español; la estructura en `en.json` quedó con la forma anterior); `hreflang-missing` en `/ruta-ia` (esperado, solo español).
- **No-marca:** impresiones 135 → 159, posición 55,1 → 48,9 (ventana previa al cambio).

## Oportunidades y riesgos de GSC

- **Riesgo de pérdida de relevancia:** la mayor parte de las impresiones no-marca de la semana cae en `/capacidades/consultoria-de-datos` (114 imp., pos. 40,6) con consultas de "consultoría de datos", "arquitectura de datos", "calidad de datos" e "ingeniería de datos" (7–26 imp. cada una, pos. 24–70). Desde hoy esa URL hace 301 a `/lo-que-hacemos/modernizacion-de-datos`, cuyo copy no usa esos términos. Vigilar en las próximas dos corridas; candidato a ajustar el keyword map (C18).
- `/capacidades/agentes-ia-a-medida` (54 imp., pos. 54,2): "agentes de ia personalizados" 31 imp., pos. 63,3. Ahora redirige a Automatización con agentes de IA; B-035 debe moverse a esa página.
- "data consulting" 26 imp., pos. 23,7 (en): cae en `/en/capacidades/consultoria-de-datos`, ahora 301 a `/en/lo-que-hacemos/modernizacion-de-datos` (slug en español, B-008).
- `/case-studies` responde 307 (temporal); el mapa pide 301 a `/casos`, que aún no existe.

## Fuentes sin datos

- URL Inspection de `/capacidades`: timeout de la API (la URL es 301; no afecta).
- CWV: omitido (`--skip-cwv`), como en corridas anteriores.
