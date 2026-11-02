# Corrida SEO semanal · 2026-11-01

**Estado:** etapa 1 · Técnica. **Mejor** que la línea base (2026-10-25): 0 errores de lint (antes 2) y hreflang en 16 de 31 páginas del sitio (antes 0). Es la primera corrida, así que la comparación de GSC es contra la semana anterior (16–22 oct), no contra una corrida previa.

Ventanas GSC: actual 2026-10-23 → 2026-10-29; anterior 2026-10-16 → 2026-10-22.

## 1 · KPIs

| KPI | Anterior (2026-10-25) | Actual | Meta |
|---|---|---|---|
| Errores `seo-lint` | 2 | **0** | 0 |
| Advertencias `seo-lint` | 39 (estático) | 60 (estático + en vivo) | ≤ 5 |
| Páginas del sitemap con hreflang | 0 | **16 / 31** | 100 % de las que tienen par |
| Redirects del mapa aplicados | 11 / 37 | 11 / 37 (25 pendientes, 1 temporal) | 100 % de los confirmados |
| Páginas del sitemap con 200 | n/d | 31 / 31 | 100 % |
| Clics GSC 7 d | 2 (sem. previa) | 1 | — |
| Impresiones GSC 7 d | 95 (sem. previa) | 80 | — |
| Clics no-marca 7 d | 0 | 0 | 30 / mes |
| Impresiones no-marca 7 d | 0 | 0 | crecer |
| Posición media | sin datos | sin datos | — |
| Regresiones de drift | 0 | 0 (4 cambios esperados, ver §4) | 0 |

Notas de lectura:
- Las advertencias no son comparables: la base (39) era solo estática; esta corrida suma los chequeos en vivo (24 hreflang-missing, 10 sitemap-redirected, entre otras). La parte estática sola se obtiene con `node scripts/seo-lint.mjs`.
- GSC anonimiza la mayoría de las consultas. Con dimensión `query` solo se ven 31 impresiones (7 consultas), contra 80 con dimensión `page`. Las 7 consultas visibles son todas de marca (`cabana ai`, `cabana software`, `ruta ai`…). Una cifra no-marca de 0 significa "ninguna consulta no-marca visible", no "ninguna impresión no-marca".
- La API devuelve posición 0 en los totales; no se estima.

## 2 · Regresiones

Ninguna.
- Drift sin PR que lo explique: ninguno.
- Errores nuevos de lint: ninguno.
- Páginas que dejaron de responder 200: ninguna entre las 31 del sitemap.

Pendientes ya conocidos que siguen abiertos (están en el backlog, no son regresiones): `/en/ruta-ia` da 404 (B-007), `/case-studies` responde 307 en vez de 301 (B-003), `/contact/` responde 308.

## 3 · Lo que mejoró

- **hreflang 0 → 16**: lo explican #18 (Capacidades, 5 páginas × 2 idiomas), #19/#21 (Inicio, `/` y `/en`) y los 4 posts del blog. Siguen sin hreflang 15 páginas: `/ruta-ia`, `/ai-first-move`, `/en/ai-first-move`, `/about`, `/contact`, `/careers`, `/posts`, `/services/data-health-check`, `/services/data-analytics-use-case` y sus pares en. (B-001; el lint en vivo marca también `/ruta-ia`, que el backlog no lista.)
- **Errores de lint 2 → 0**.
- Inicio y Ruta IA ahora usan los términos principales de STRATEGY §3 en title y H1 (ver §4).

## 4 · Drift (contexto)

| URL | Hallazgos | Origen | Veredicto |
|---|---|---|---|
| `/` | H1, title, meta description, schema | #19 (nuevo Inicio, INICIO v1), #21 | Esperado |
| `/en` | H1, title, meta description, schema | #19, #21 | Esperado |
| `/ruta-ia` | H1, title, meta description, schema | reconstrucción desde RUTA-IA-v1 (267504f), #20 | Esperado |
| `/ai-first-move`, `/en/ai-first-move`, `/capacidades`, `/en/capacidades` | sin baseline previa | — | Primera baseline capturada hoy |

Se capturó baseline nueva de las 7 URLs.

Vigilar CTR de `/` y `/en` durante 2 semanas por el cambio de title (el drift lo pide). Con 17 y 30 impresiones por semana no hay señal estadística todavía.

## 5 · Oportunidades GSC

- **No-marca con posición 4–20 e impresiones crecientes:** ninguna visible (consultas anonimizadas). `quick_wins` de la API vacío.
- **Páginas con impresiones y CTR 0** (7 d): `/` 17 imp. (pos. 22), `/contact` 11 (pos. 25), `/services` 10 (pos. 58), `/services/data-consulting` 3, `/services/dashboards-analytics-interfaces` 2, `/en/services/data-analytics-use-case` 2, `ruta-ai.cabanadata.com/` 2.
- **Canibalización / URLs heredadas:** `/services`, `/services/data-consulting`, `/services/dashboards-analytics-interfaces` y `/en/services/*` aún reciben impresiones y deberían ir a `/capacidades/*` (STRATEGY §3). Sus redirects están `pending` en `redirects.csv` (B-004 / Q10–Q11 de DECISIONS). El subdominio `ruta-ai.cabanadata.com` suma 3 impresiones que deberían caer en `/ruta-ia` (B-009, bloqueado por acceso a Vercel).
- `/en` concentra 30 de 80 impresiones y 1 clic (CTR 3.3 %, pos. 6.0): es hoy la página más visible.
- La página `/about`, que la semana previa tuvo 1 clic, quedó sin clics ni nuevas impresiones relevantes (1).

## 6 · Fuentes sin datos

| Fuente | Motivo |
|---|---|
| Consultas no-marca | GSC anonimiza consultas de bajo volumen; el sitio tiene ~80 impresiones/semana |
| Posición media | La API devuelve 0 en el total |
| Core Web Vitals | Sin API key de PageSpeed (STRATEGY §6, B-015); drift con `--skip-cwv` |
| Indexación | No se corrió URL Inspection en esta corrida |
| Dominios de referencia, DataForSEO | Sin acceso (B-015) |
