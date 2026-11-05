# Corrida SEO 2026-11-03 (segunda del día, tras #29–#33)

Reemplaza el reporte de las 14:41 (solo cubría #27; sigue en el historial de git). Esta corrida mide producción después de los merges #29–#33 y es la primera con URL Inspection.

**Estado:** etapa 1 (técnica), **mejor**. 0 errores de lint, hreflang en 33/33 páginas, 6 de 7 páginas objetivo indexadas. Sin regresiones.

Ventanas GSC: actual 2026-10-25 → 2026-10-31; anterior 2026-10-18 → 2026-10-24 (las mismas que la corrida de las 14:41, así que GSC no cambia hasta la próxima semana).

## 1 · KPIs

| Métrica | Anterior (11-03 14:41) | Actual | Meta |
|---|---|---|---|
| Errores de lint | 0 | 0 | 0 |
| Advertencias de lint | 35 | 47 | ≤ 5 justificadas |
| Páginas con hreflang | 30/31 | 33/33 | 100 % de las que tienen par |
| Redirects del mapa aplicados | 11/37 | 15/37 | 100 % de los confirmados |
| Páginas objetivo indexadas | sin medir | 6/7 | 100 % |
| Clics GSC 7d | 2 | 2 | n/a |
| Impresiones GSC 7d | 71 | 71 | n/a |
| Clics no-marca 7d | 0 | 0 | meta inicial 30/mes |
| Impresiones no-marca 7d | 2 | 2 | creciente |
| Regresiones de drift | 0 | 0 | 0 |

## 2 · Confirmado en producción

- **B-021 (#29):** `gsc_inspect.py` devolvió 7 resultados sin error (`pass 6, neutral 1`). Confirmado.
- **B-005 (#33):** `/privacidad` y `/en/privacidad` están en `sitemap.xml`; el lint ya no reporta `sitemap-missing`. Confirmado.
- **B-019 (#33):** los 4 `/en/posts/<slug>` responden 301 a `/posts/<slug>`; `/posts/<slug>` sigue en 200. Confirmado (redirects aplicados 11 → 15).

## 3 · Regresiones

Ninguna.

- **Lint:** 0 errores.
- **Drift:** las 7 páginas objetivo solo disparan `content_hash_changed` (INFO). Cero cambios en título, descripción, H1, canonical, robots o schema. El cambio de hash coincide con los merges #31–#33 y se toma como esperado. Se recapturó la baseline de las 7 URL.
- **Advertencia `hreflang-missing` en `/ruta-ia`:** la página no tiene par en inglés (`/en/ai-opportunity-assessment` es provisional y no existe; `/en/ruta-ia` responde 404). No es regresión, es consecuencia de que la ruta no tiene par.

### Lint: nuevos, resueltos, persistentes

- **Resuelto:** `sitemap-missing` de `/privacidad` (B-005).
- **Nuevos (+12):** todos en `data/blog/index.ts`, porque la parte técnica de B-011 (#30) ahora revisa los posts: 4 `title-length` (69–95 caracteres), 4 `description-length` (167–293) y 5 de voseo/tuteo ("sabés", "Estás", "querés", "podés", "Tu"). Es deuda que ya existía y ahora se ve; corregirla es copy visible y requiere tu aprobación.
- **Persistentes:** 13 de título/descripción en páginas, 10 `sitemap-redirected` (el sitemap lista rutas viejas cuyos destinos aún no existen), 2 `benchmark`, 1 `ruta-ia-validada` (`messages/en.json`, "confirmed"), 1 `redirect-temporary` (`/case-studies` responde 307; el mapa pide 301 a `/casos`).

## 4 · Indexación de páginas objetivo

| URL | Veredicto | Cobertura | Último rastreo | Canónica de Google |
|---|---|---|---|---|
| `/` | PASS | Submitted and indexed | 2026-11-03 | coincide |
| `/en` | PASS | Submitted and indexed | 2026-10-24 | coincide |
| `/ruta-ia` | NEUTRAL | **Discovered - currently not indexed** | nunca rastreada | sin dato |
| `/ai-first-move` | PASS | Submitted and indexed | 2026-10-31 | coincide |
| `/en/ai-first-move` | PASS | Submitted and indexed | 2026-10-31 | coincide |
| `/capacidades` | PASS | Submitted and indexed | 2026-11-01 | coincide |
| `/en/capacidades` | PASS | Submitted and indexed | 2026-10-31 | coincide |

Las indexadas tienen robots ALLOWED, indexing INDEXING_ALLOWED y fetch SUCCESSFUL. Es la primera medición, así que no hay páginas que hayan dejado de estar indexadas.

`/ruta-ia` es la página objetivo de "diagnóstico de IA para empresas": Google la descubrió pero no la rastreó. Está en el sitemap pero no en el menú ni en el footer, y los posts enlazan al subdominio viejo (B-025).

## 5 · Lo que mejoró

- hreflang 30/31 → 33/33 y redirects 11 → 15, por #33 (B-019, B-005).
- Primera medición de "páginas objetivo indexadas": 6/7.

## 6 · Oportunidades de GSC

Datos muy escasos (71 impresiones en 7 días, repartidas en 12 páginas): no alcanzan para priorizar por posición.

- **Consultas no-marca visibles (2):** "agentes ia personalizados" (1 impresión, posición 43, página `/capacidades/agentes-ia-a-medida`) y "data architecture consulting" (1 impresión, posición 90, `/en/capacidades/consultoria-de-datos`). Cada una cae en la página que le corresponde: sin canibalización.
- **Rutas viejas con impresiones:** `/services` (12, posición 41), `/contact` (7), `/about` (3) y `/en/services/data-analytics-use-case` (1). Siguen sin 301 porque sus destinos aún no existen.
- **Subdominio viejo:** `ruta-ai.cabanadata.com` (2 impresiones). Pendiente el acceso a Vercel para su 301.

## 7 · Fuentes sin datos

- **Core Web Vitals:** sin API key de PageSpeed Insights; el drift corre con `--skip-cwv`.
- **DataForSEO:** sin acceso; no hay posiciones top 10 por término principal.
- **Dominios de referencia:** sin Moz ni Bing Webmaster.
- **Leads y prospectos fuera del envase:** sin medir; falta definir la métrica con dirección.
