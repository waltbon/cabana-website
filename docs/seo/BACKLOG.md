# Backlog SEO

Lo mantiene `seo-strategist` después de cada `/seo-weekly`; lo consume `/seo-fix`. Un ítem por cambio que cabe en un PR.

- **Prioridad:** P0 bloquea indexación o rompe una regla de la guía · P1 impacto alto, esfuerzo bajo · P2 impacto medio · P3 mejora menor.
- **Gate:** `auto` (PR técnico, revisión normal) · `copy` (brand-guardian + aprobación humana antes del PR) · `dirección` (necesita una decisión en `DECISIONS.md`).
- **Estado:** `listo` · `bloqueado` (dice por qué) · `en PR` (con enlace) · `hecho` (con fecha).

`/seo-fix` sin argumentos toma el primer ítem `listo` de mayor prioridad con gate `auto`.

## Activos

| ID | Prioridad | Etapa | Ítem | Evidencia | Gate | Estado |
|---|---|---|---|---|---|---|
| B-001 | P0 | Técnica | hreflang `es`/`en`/`x-default` en páginas activas: `/ai-first-move`, `/about`, `/contact`, `/careers`, `/careers/[id]`, `/posts`, `/privacidad`, `/services/data-health-check`, `/services/data-analytics-use-case` (las dos últimas mientras Q10 no decida su redirect) | `seo-lint` hreflang-missing (2026-11-01: 9 rutas en estático, 18 URLs en vivo; hreflang en 16/31 del sitemap); 00-baseline §1. `/ruta-ia` no va aquí: no tiene par en (ver B-007) | auto | listo |
| B-002 | P1 | Técnica | robots: agregar `OAI-SearchBot` y `ClaudeBot`; quitar los nombres antiguos `Claude-Web` y `Anthropic-AI` | `seo-lint` robots-agent (sigue en 2026-11-01) | auto | en PR ([#25](https://github.com/waltbon/cabana-website/pull/25)) |
| B-003 | P1 | Técnica | `/case-studies` responde 307; el mapa pide 301 a `/casos` | `seo-lint --live` redirect-temporary (sigue en 2026-11-01) | dirección | bloqueado: `/casos` no existe (Q7) |
| B-004 | P1 | Técnica | Sitemap lista URLs que el mapa redirige (`/services/data-*`, `/about`, `/contact`, `/posts` y sus pares en) | `seo-lint` sitemap-redirected (10 URLs, 2026-11-01). GSC 23–29 oct: `/contact` 11 imp. (pos. 25), `/about` 1. `/contact/` hace 308 → `/contact`, cadena si `/contact` pasa a `/agendar` | dirección | bloqueado: Q10, Q11 |
| B-007 | P1 | Técnica | `/en/ruta-ia` da 404 | 00-baseline §1; `seo-lint --live` 2026-11-01. Por eso `/ruta-ia` sale sin hreflang en vivo: no tiene par | dirección | bloqueado: Q2 |
| B-008 | P1 | Técnica | `pathnames` de next-intl para slugs propios en inglés | 00-baseline §1. 2026-11-01: `/en/capacidades/*` ya están en vivo con slug en español y 12 redirects `/en/services/*` siguen `pending` por slug provisional; `/en/services/data-analytics-use-case` y `/en/services/product-design-discovery` con impresiones en GSC | dirección | bloqueado: Q2, Q3; volúmenes de DataForSEO |
| B-009 | P1 | Técnica | 301 de `ruta-ai.cabanadata.com` → `/ruta-ia` | 00-baseline §1. GSC 23–29 oct: 3 imp. en el subdominio (`/` pos. 4, `/evaluation` pos. 8) | dirección | bloqueado: acceso al proyecto Vercel |
| B-011 | P1 | Contenido | Posts del blog: titles de 69–95 caracteres, descriptions de 167–293, voseo en títulos ("lo sabés"). Extender `seo-lint` a `data/blog` | `seo-lint --live` (4 posts, sigue en 2026-11-01) | copy | listo |
| B-012 | P1 | Contenido | Página Cómo trabajamos: el copy v1 está en Drive y falta en `docs/content/pages/` y en el sitio | Drive "Copy web · Cómo trabajamos (v1 borrador)" | copy | listo |
| B-015 | P1 | Medición | Accesos: DataForSEO, PageSpeed Insights API key, Moz o Bing Webmaster | STRATEGY §6; run 2026-11-01 §6 (CWV, dominios de referencia y DataForSEO sin datos) | dirección | bloqueado: cuentas |
| B-018 | P2 | Técnica | `x-default` en las páginas que ya emiten hreflang `es`/`en` sin él: `/`, `/en`, `/capacidades` y las 4 capacidades, con sus pares en | `seo-lint --live` 2026-11-01, campo `pages`: 12 URLs con `es` y `en` pero sin `x-default` (los posts sí lo tienen) | auto | listo |
| B-019 | P2 | Técnica | 301 de `/en/posts/<slug>` → `/posts/<slug>` (4 artículos que solo existen en español) | redirects.csv filas 41–47 (`pending`, hoy 200 duplicado con canonical a es); 00-baseline §3, hallazgo "Media" | auto | listo |
| B-005 | P2 | Técnica | Agregar `/privacidad` y `/en/privacidad` al sitemap | `seo-lint` sitemap-missing (sigue en 2026-11-01) | auto | listo |
| B-006 | P2 | Técnica | 301 de residuos WordPress `/portfolio-item/*` y `/area-item/*` → `/` | redirects.csv; impresiones en GSC en la base. Baja de P1 a P2 el 2026-11-01: ninguna URL de WordPress aparece en GSC en 16–29 oct | auto | listo |
| B-020 | P2 | Técnica | Excepciones en `rules.json` para usos correctos que el lint marca: "benchmark" en contraste ("no de un benchmark genérico", brief §3.3) en `inicio.method.body` y `rutaIa.process.method` (es y en), y "confirmed" en `rutaIa.deliverables.note` (en), que repite brief §3.4 | `seo-lint` 2026-11-01: 3 advertencias de contenido (benchmark ×2, ruta-ia-validada ×1). La meta de etapa 1 pide ≤ 5 advertencias, todas justificadas | dirección | bloqueado: D-002, D-003 |
| B-016 | P2 | Técnica | `/en/careers` con H1 en español | 03-resumen §1 | copy | listo |
| B-021 | P2 | Medición | Agregar URL Inspection de las páginas objetivo (STRATEGY §3) a `/seo-weekly` | Run 2026-11-01 §6: indexación sin medir; métrica de etapa 1 "Páginas objetivo indexadas". El acceso a GSC ya está configurado | auto | listo |
| B-010 | P2 | Contenido | Titles largos: `inicio.meta` es (66), `aiFirstMove.meta` es (68) y en (70), `metadata.home` (66), meta de Data Engineering en Capacidades es (66) y en (63) | `seo-lint` title-length; `seo-lint --live` 2026-11-01 suma `/capacidades/ingenieria-de-datos` y `/en/capacidades/ingenieria-de-datos` | copy | listo |
| B-013 | P2 | Contenido | 8 artículos de blog (es) para términos con demanda prohibidos en servicio: casos de uso, ROI, business case, piloto/PoC, agentes | 03-resumen §1, C1 | copy | listo |
| B-014 | P2 | Autoridad | Perfiles de entidad: Clutch, Consultancy.org, actualizar The Manifest | 03-resumen §1 | dirección | bloqueado: Q9 |
| B-022 | P3 | Medición | Posición media en `/seo-weekly`: calcularla ponderada por impresiones desde las filas de GSC, porque la API devuelve 0 en el total | Run 2026-11-01 §1 y §6 (`totals.position` = 0 en `gsc-query.json` y `gsc-page.json`) | auto | listo |
| B-017 | P3 | Contenido | `metadata.blog` en: description de 63 caracteres | `seo-lint` description-length | copy | listo |
| B-023 | P3 | Contenido | `/about`: meta description de 163 caracteres. Solo aplica si `/about` no se redirige a `/como-trabajamos` | `seo-lint --live` 2026-11-01 description-length | copy | bloqueado: Q10, C12 |

## Hechos

| ID | Ítem | PR | Fecha |
|---|---|---|---|
