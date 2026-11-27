# Corrida SEO · 2026-11-26

**Estado:** etapa 1 (técnica) cerrándose, etapa 2 (contenido) sin clics no-marca todavía. **Mejor** que la semana anterior: indexación 14/14 en páginas objetivo, posición no-marca 48.4 → 36.1 e impresiones no-marca 153 → 172. Lint sin cambios (0 errores, 24 advertencias). Clics no-marca siguen en 0.

Nota: esta corrida va un día después de la del 25 nov. La ventana GSC (17–23 nov) comparte 6 de 7 días con la anterior; los cambios de GSC son casi los mismos de ayer. Lo nuevo de verdad es el efecto de #87 (Q21 y fixes B-035, B-049, B-052–B-055) en drift.

## KPIs

| KPI | 2026-11-25 | 2026-11-26 | Meta (STRATEGY) |
|---|---|---|---|
| lint_errors | 0 | 0 | 0 |
| lint_warnings | 24 | 24 | ≤ 5, todas justificadas |
| hreflang_pages / sitemap_pages | 41 / 42 | 41 / 42 | todas las que tienen par |
| redirects_applied / total | 23 / 43 | 23 / 43 | 100 % de los confirmados |
| target_indexed / target_pages | 11 / 11 | 14 / 14 | 100 % |
| gsc_clicks_7d | 5 | 5 | ↑ |
| gsc_impressions_7d | 376 | 384 | ↑ |
| gsc_nonbrand_clicks_7d | 0 | 0 | 30 / mes |
| gsc_nonbrand_impressions_7d | 167 | 172 | ↑ |
| gsc_avg_position_7d | 36.8 | 34.6 | ↓ |
| drift_regressions | 0 | 0 | 0 |

Ventanas GSC: 17–23 nov (actual) y 10–16 nov (anterior), con `gsc-summary.mjs`. En la ventana anterior de esta corrida: 6 clics, 325 impresiones, 153 no-marca, posición visible 45.3. Posición no-marca 48.4 → 36.1; marca 23.6 → 22.2.

`target_pages` sube de 11 a 14 porque la lista de inspección ahora incluye `/lo-que-hacemos`, `/en/lo-que-hacemos` y la quinta área (B-045, #87). `/en` falló en el primer intento ("Unable to find the server at searchconsole.googleapis.com") y pasó en el reintento (`gsc-inspect-retry.json`).

## Regresiones

Ninguna.

- **Lint:** 0 errores; 0 hallazgos nuevos y 0 resueltos frente al 25 nov.
- **Drift:** 9 hallazgos CRITICAL en páginas en español (`canonical_changed`, `h1_changed`): la canónica, el title y el H1 de `/`, `/ai-first-move`, `/lo-que-hacemos`, las 5 áreas y `/como-trabajamos` aparecen en inglés. **No es una regresión del sitio**: `fetch_page.py` del plugin envía `Accept-Language: en-US,en;q=0.5` fijo y, desde Q21 (`localeDetection: true`, 581af27 en #87), el sitio responde 307 a `/en/...`. Verificado con `curl` y `Accept-Language: es-CR`: las 9 páginas devuelven title, H1 y canónica en español, sin redirect. Sin `Accept-Language` también responden 200 en español (así rastrea Googlebot, según Q21).
- **Páginas que dejaron de responder 200:** ninguna sin `Accept-Language`.
- **Indexación:** ninguna página objetivo pasó a no indexada; robots, indexing y fetch correctos en las 14.

### Riesgos nuevos por Q21 (para backlog, no regresión)

1. **Drift ciego en español.** Mientras el plugin mande `en-US`, cada corrida verá `/en` en lugar de las páginas en español. No se recapturaron las baselines en español (se habrían guardado en inglés). Hace falta una forma de medir drift con `Accept-Language: es` o sin el encabezado.
2. **Crawlers que envían `Accept-Language` en inglés.** Con UA `Googlebot/2.1` + `Accept-Language: en-US`, `/lo-que-hacemos` responde 307 a `/en/lo-que-hacemos`. Googlebot no suele enviar el encabezado, pero otros bots (Bing, rastreadores de IA) pueden hacerlo y no ver nunca el español. Google recomienda no redirigir automáticamente por idioma. Vigilar en GSC (cobertura de páginas en español) y en Bing cuando haya acceso.
3. **Sin `Vary: Accept-Language`** en la respuesta 200 de `/`. Hoy la caché de Vercel no mezcla versiones (el proxy corre antes de la caché), pero una CDN intermedia sí podría.

## Indexación de páginas objetivo

| URL | verdict | coverage_state | Último rastreo | Canónica respetada |
|---|---|---|---|---|
| / | PASS | Submitted and indexed | 2026-11-24 | sí |
| /en | PASS | Submitted and indexed | 2026-11-21 | sí (reintento) |
| /ruta-ia | PASS | Submitted and indexed | 2026-11-04 | sí |
| /ai-first-move | PASS | Submitted and indexed | 2026-11-25 | sí |
| /en/ai-first-move | PASS | Submitted and indexed | 2026-10-31 | sí |
| /lo-que-hacemos | PASS | Submitted and indexed | 2026-11-20 | sí |
| /en/lo-que-hacemos | PASS | Submitted and indexed | 2026-11-20 | sí |
| /lo-que-hacemos/modernizacion-de-datos | PASS | Submitted and indexed | 2026-11-25 | sí |
| /lo-que-hacemos/automatizacion-con-agentes-de-ia | PASS | Submitted and indexed | 2026-11-20 | sí |
| /lo-que-hacemos/conocimiento-empresarial | PASS | Submitted and indexed | 2026-11-20 | sí |
| /lo-que-hacemos/ciencia-de-datos-y-machine-learning | PASS | Submitted and indexed | 2026-11-20 | sí |
| /lo-que-hacemos/productos-digitales | PASS | Submitted and indexed | 2026-11-26 | sí |
| /como-trabajamos | PASS | Submitted and indexed | 2026-11-23 | sí |
| /en/how-we-work | PASS | Submitted and indexed | 2026-11-19 | sí |

`/ruta-ia` no se rastrea desde el 4 nov; `/en/ai-first-move` desde el 31 oct. Ninguna tiene los cambios de #87 indexados todavía (B-054 cambió title y description de `/ruta-ia`).

## Lo que mejoró y qué PR lo explica

- **Drift esperado por #87** (merge a30853e):
  - `/en` y `/ruta-ia`: title y description nuevos → B-054 (488ea68).
  - `schema_modified` en las 14 URL → B-053 (78a0378, description de la Organization en el JSON-LD compartido).
  - Canónica, title y H1 en inglés en las páginas en español → artefacto de medición por Q21 (581af27), ver Regresiones.
- **Baselines recapturadas** (sin redirect por idioma): `/en`, `/ruta-ia`, `/en/ai-first-move`, `/en/lo-que-hacemos`, `/en/how-we-work`. Las 9 en español quedan con la baseline del 25 nov.
- **Indexación 14/14**, incluida `/lo-que-hacemos/productos-digitales` rastreada hoy.
- **Posición no-marca 48.4 → 36.1** (172 impresiones). `data consulting` pasa de 25.1 a 16.2 (24 impresiones).

## Oportunidades de GSC

Consultas no-marca en posición 4–20 o con impresiones crecientes (todas con 0 clics):

| Consulta | Impr. (ant.) | Posición (ant.) | Página objetivo (STRATEGY §3) |
|---|---|---|---|
| data consulting | 24 (23) | 16.2 (25.1) | `/en/lo-que-hacemos` → modernización de datos |
| consultora de datos | 8 (—) | 15.2 | `/lo-que-hacemos/modernizacion-de-datos` |
| data extraction consulting in latin america | 6 (2) | 11.5 (6.0) | `/en/lo-que-hacemos` |
| data cleansing consulting in latin america | 4 (1) | 9.8 (10.0) | `/en/lo-que-hacemos` |
| ia empresa | 5 (—) | 15.6 | `/` |
| somos una empresa mediana y queremos empezar con ia… ¿cuál es el primer paso? | 5 (—) | 5.2 | blog `por-donde-empezar-con-ia` (informativa, §3) |
| data modeling and architecture consulting | 7 (3) | 68.6 (83.0) | `/en/lo-que-hacemos` (fuera de rango) |
| contratar ingenieros de datos costa rica | 1 (1) | 7.0 (38.0) | `/lo-que-hacemos/modernizacion-de-datos` |

No se midió consulta × página en esta corrida, así que la canibalización no se puede confirmar. Señales por página:

- **Páginas con impresiones y CTR 0** que aún reciben tráfico por URL vieja: `/capacidades/consultoria-de-datos` (99 impr., pos. 34.3), `/capacidades/agentes-ia-a-medida` (35), `/capacidades` (18), `/en/capacidades` (13), `/en/capacidades/consultoria-de-datos` (7). Ya redirigen 301 (#79); Google aún no consolida.
- **Páginas nuevas o de servicio con CTR 0:** `/en` (40 impr., pos. 7.3), `/lo-que-hacemos/modernizacion-de-datos` (17, pos. 20.1), `/ruta-ia` (11, pos. 7.2), `/en/how-we-work` (6, pos. 5.0). `/en` y `/ruta-ia` ya tienen el fix de CTR (B-054) pero Google no los ha recrawleado.
- **Blog con CTR 0 en buena posición:** `/posts/piloto-vs-produccion-ia` (19 impr., pos. 4.8), `/posts/por-donde-empezar-con-ia` (22, pos. 8.9). B-055 tocó dos posts; confirmar si son estos.
- `/about` (8 impr., pos. 2.8) y `ruta-ai.cabanadata.com/` (8, pos. 6.8): fuera del sitemap y subdominio pendiente de 301.

## Fuentes sin datos

- **Core Web Vitals:** sin datos (sin API key de PageSpeed; drift con `--skip-cwv`).
- **Drift de páginas en español:** sin datos fiables (el plugin envía `Accept-Language: en-US` y Q21 redirige a `/en`).
- **GSC consulta × página:** no se recolectó; canibalización sin confirmar.
- **DataForSEO, Moz/Bing:** accesos pendientes (STRATEGY §6).
