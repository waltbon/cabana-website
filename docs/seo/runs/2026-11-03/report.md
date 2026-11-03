# Corrida SEO semanal · 2026-11-03 (validación del PR #27)

**Estado:** etapa 1 · Técnica. **Mejor** que el 2026-11-01. Los cinco ítems del PR #27 (B-001, B-002, B-006, B-018, B-024) quedaron confirmados en producción. Es una corrida de validación fuera de calendario, dos días después de la anterior.

Ventanas GSC: actual 2026-10-25 → 2026-10-31; anterior 2026-10-18 → 2026-10-24. Las ventanas se traslapan en parte con la corrida anterior, que usó 23–29 oct, así que las cifras de GSC no son comparables una a una.

## 1 · KPIs

| KPI | 2026-11-01 | Actual | Meta |
|---|---|---|---|
| Errores `seo-lint` | 0 | **0** | 0 |
| Advertencias `seo-lint` (estático + en vivo) | 60 | **35** | ≤ 5, todas justificadas |
| Páginas del sitemap con hreflang | 16 / 31 | **30 / 31** | 100 % de las que tienen par |
| Páginas con `x-default` | 4 / 31 | **30 / 31** | todas las que tienen hreflang |
| Redirects del mapa aplicados | 11 / 37 | 11 / 37 (25 pendientes, 1 temporal) | 100 % de los confirmados |
| Páginas del sitemap con 200 | 31 / 31 | 31 / 31 | 100 % |
| Clics GSC 7 d | 1 | 2 | — |
| Impresiones GSC 7 d (dimensión `page`) | 80 | 71 | — |
| Clics no-marca 7 d | 0 | 0 | 30 / mes |
| Impresiones no-marca 7 d (consultas visibles) | 0 | **2** | crecer |
| Posición media 7 d (ponderada, consultas visibles) | sin datos | 29.5 | — |
| Regresiones de drift | 0 | 0 | 0 |

Notas de lectura:
- La posición media se calculó ponderando por impresiones las filas visibles de `gsc-query.json`, porque la API devuelve 0 en el total. Excluye las consultas anonimizadas; es indicativa, no una medida del sitio.
- GSC anonimiza la mayoría de las consultas: con dimensión `query` se ven 28 impresiones y con `page` 71.

## 2 · Regresiones

Ninguna.
- Drift: 0 hallazgos en las 7 URLs contra la baseline del 2026-11-01.
- Lint: 0 hallazgos nuevos respecto a la corrida anterior.
- Las 31 páginas del sitemap responden 200.

## 3 · Lo que mejoró y qué PR lo explica

Todo viene del PR #27 (commit `747eb6a`), validado en vivo:

| Ítem | Qué se confirmó en producción |
|---|---|
| B-001 | hreflang 16 → 30 de 31 páginas. 23 hallazgos `hreflang-missing` resueltos |
| B-018 | `x-default` 4 → 30 de 31 páginas |
| B-002 | Los 2 hallazgos `robots-agent` resueltos; `robots.txt` lista `OAI-SearchBot` y `ClaudeBot` |
| B-024 | `robots.txt` repite `Disallow: /api/` y `/admin/` en cada bot nombrado (comprobado en `ClaudeBot`) |
| B-006 | `/portfolio-item/x` y `/area-item/y` responden 301 → `/` (antes 308 → 404) |

Advertencias: 60 → 35 (23 `hreflang-missing` y 2 `robots-agent` resueltas). La que sigue de `hreflang-missing` es `/ruta-ia`, que no tiene par en inglés (B-007).

## 4 · Drift (contexto)

Sin cambios en `/`, `/en`, `/ruta-ia`, `/ai-first-move`, `/en/ai-first-move`, `/capacidades` y `/en/capacidades`. No hace falta capturar baseline nueva. La advertencia de CTR por el cambio de title de `/` y `/en` sigue abierta: `/en` tuvo 2 clics y 28 impresiones (CTR 7 %, pos. 6.2), `/` 0 clics y 14 impresiones (pos. 10.5). Es volumen muy bajo.

## 5 · Oportunidades GSC

- **Primeras consultas no-marca visibles:** `agentes ia personalizados` (1 impresión, pos. 43) y `data architecture consulting` (1, pos. 90). Calzan con la página objetivo correcta: la primera cae en `/capacidades/agentes-ia-a-medida`, la segunda en `/en/capacidades/consultoria-de-datos`. No hay canibalización. Son muestras de una impresión: señal de indexación, no de ranking.
- **Posición 4–20 con impresiones crecientes:** ninguna consulta no-marca.
- **Páginas con impresiones y CTR 0:** `/` 14 (pos. 10.5), `/contact` 7 (pos. 22.6), `/services` 12 (pos. 41.2), `/about` 3.
- **URLs heredadas que aún reciben impresiones:** `/services` (12) y `/services/data-consulting` (1). Los dos ya responden 301 a `/capacidades*` (aplicados); las impresiones vienen del índice viejo de Google y no requieren acción. `/services/dashboards-analytics-interfaces` también hace 301, pero su destino sigue por confirmar (Q13). `ruta-ai.cabanadata.com` suma 2 impresiones (B-009, bloqueado por acceso a Vercel).
- **Nuevas en GSC:** `/en/capacidades/producto-digital` (pos. 3) y `/capacidades/agentes-ia-a-medida` ya aparecen: las páginas de Capacidades están indexadas al menos en parte.

## 6 · Fuentes sin datos

| Fuente | Motivo |
|---|---|
| Consultas no-marca completas | GSC anonimiza las de bajo volumen |
| Posición media oficial | La API devuelve 0 en el total (cifra ponderada arriba, indicativa) |
| Core Web Vitals | Sin API key de PageSpeed (B-015) |
| Indexación (URL Inspection) | No se corrió (B-021) |
| Dominios de referencia, DataForSEO | Sin acceso (B-015) |
