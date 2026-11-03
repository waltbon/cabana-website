# Backlog SEO

Lo mantiene `seo-strategist` después de cada `/seo-weekly`; lo consume `/seo-fix`. Un ítem por cambio que cabe en un PR.

- **Prioridad:** P0 bloquea indexación o rompe una regla de la guía · P1 impacto alto, esfuerzo bajo · P2 impacto medio · P3 mejora menor.
- **Gate:** `auto` (PR técnico, revisión normal) · `copy` (brand-guardian + aprobación humana antes del PR) · `dirección` (necesita una decisión en `DECISIONS.md`).
- **Estado:** `listo` · `bloqueado` (dice por qué) · `en PR` (con enlace) · `hecho` (con fecha).

`/seo-fix` sin argumentos toma el primer ítem `listo` de mayor prioridad con gate `auto`.

## Activos

| ID | Prioridad | Etapa | Ítem | Evidencia | Gate | Estado |
|---|---|---|---|---|---|---|
| B-021 | P1 | Técnica | Agregar URL Inspection de las páginas objetivo (STRATEGY §3) a `/seo-weekly` | "Páginas objetivo indexadas" es la única métrica de etapa 1 que sigue sin medir aunque el acceso existe (GSC configurado). Run 2026-11-03 §5–§6: no se corrió; GSC solo muestra algunas Capacidades ("indexadas al menos en parte"). Sube de P2 a P1 el 2026-11-03: con hreflang en 30/31, es lo que más falta para medir la etapa 1 y el esfuerzo es bajo | auto | listo |
| B-003 | P1 | Técnica | `/case-studies` responde 307; el mapa pide 301 a `/casos` | `seo-lint --live` redirect-temporary (sigue en 2026-11-03: 307 → `/`) | dirección | bloqueado: `/casos` no existe (Q7) |
| B-004 | P1 | Técnica | Sitemap lista URLs que el mapa redirige (`/services/data-*`, `/about`, `/contact`, `/posts` y sus pares en) | `seo-lint` sitemap-redirected (10 URLs, sigue en 2026-11-03). GSC 25–31 oct: `/contact` 7 imp. (pos. 22.6), `/about` 3 (pos. 13.7), `/en/services/data-analytics-use-case` 1 (pos. 7). `/contact/` hace 308 → `/contact`, cadena si `/contact` pasa a `/agendar`. Nota: las impresiones de `/services` (12) y `/services/data-consulting` (1) son residuales: esos 301 ya están aplicados (lint `redirects`, estado `applied`), no forman parte de este ítem | dirección | bloqueado: Q10, Q11 |
| B-007 | P1 | Técnica | `/en/ruta-ia` da 404 | 00-baseline §1; `seo-lint --live` 2026-11-03: `/ruta-ia` es la única página del sitemap sin hreflang (30/31), porque no tiene par en | dirección | bloqueado: Q2 |
| B-008 | P1 | Técnica | `pathnames` de next-intl para slugs propios en inglés | 00-baseline §1. 12 redirects `/en/services/*` siguen `pending` por slug provisional (hoy hacen 301 a `/en/capacidades/*`, con slug en español). GSC 25–31 oct: `/en/capacidades/producto-digital` (pos. 3) y `/en/capacidades/consultoria-de-datos` ("data architecture consulting", pos. 90) ya se indexan con slug en español; cuanto más tarde el cambio, más URLs habrá que redirigir | dirección | bloqueado: Q2, Q3; volúmenes de DataForSEO |
| B-009 | P1 | Técnica | 301 de `ruta-ai.cabanadata.com` → `/ruta-ia` | 00-baseline §1. GSC 25–31 oct: 2 imp. en el subdominio (`/` pos. 2, `/evaluation` pos. 8) | dirección | bloqueado: acceso al proyecto Vercel |
| B-011 | P1 | Contenido | Posts del blog: titles de 69–95 caracteres, descriptions de 167–293, voseo en títulos ("lo sabés"). Extender `seo-lint` a `data/blog` | `seo-lint --live` (4 posts, 8 advertencias; sigue en 2026-11-03). Es el bloque más grande de las 35 advertencias que quedan | copy | listo |
| B-012 | P1 | Contenido | Página Cómo trabajamos: el copy v1 está en Drive y falta en `docs/content/pages/` y en el sitio | Drive "Copy web · Cómo trabajamos (v1 borrador)" | copy | listo |
| B-015 | P1 | Medición | Accesos: DataForSEO, PageSpeed Insights API key, Moz o Bing Webmaster | STRATEGY §6; run 2026-11-03 §6 (CWV, dominios de referencia y DataForSEO sin datos) | dirección | bloqueado: cuentas |
| B-019 | P2 | Técnica | 301 de `/en/posts/<slug>` → `/posts/<slug>` (4 artículos que solo existen en español) | redirects.csv filas 41–47 (`pending`); lint `redirects` 2026-11-03: los 4 siguen en 200 duplicado con canonical a es; 00-baseline §3, hallazgo "Media" | auto | listo |
| B-005 | P2 | Técnica | Agregar `/privacidad` y `/en/privacidad` al sitemap | `seo-lint` sitemap-missing (sigue en 2026-11-03) | auto | listo |
| B-020 | P2 | Técnica | Excepciones en `rules.json` para usos correctos que el lint marca: "benchmark" en contraste ("no de un benchmark genérico", brief §3.3) en `inicio.method.body` y `rutaIa.process.method` (es y en), y "confirmed" en `rutaIa.deliverables.note` (en), que repite brief §3.4 | `seo-lint` 2026-11-03: siguen las 3 advertencias de contenido (benchmark ×2, ruta-ia-validada ×1). La meta de etapa 1 pide ≤ 5 advertencias, todas justificadas | dirección | bloqueado: D-002, D-003 |
| B-016 | P2 | Técnica | `/en/careers` con H1 en español | 03-resumen §1 | copy | listo |
| B-010 | P2 | Contenido | Titles largos: `inicio.meta` es (66), `aiFirstMove.meta` es (68) y en (70), `metadata.home` (66), meta de Data Engineering en Capacidades es (66) y en (63) | `seo-lint` title-length (4 estáticas) y `seo-lint --live` (5 URLs), siguen en 2026-11-03. `/` tiene 14 imp. y CTR 0 en pos. 10.5 (GSC 25–31 oct) | copy | listo |
| B-013 | P2 | Contenido | 8 artículos de blog (es) para términos con demanda prohibidos en servicio: casos de uso, ROI, business case, piloto/PoC, agentes | 03-resumen §1, C1 | copy | listo |
| B-014 | P2 | Autoridad | Perfiles de entidad: Clutch, Consultancy.org, actualizar The Manifest | 03-resumen §1 | dirección | bloqueado: Q9 |
| B-022 | P3 | Medición | Posición media en `/seo-weekly`: calcularla ponderada por impresiones desde las filas de GSC, porque la API devuelve 0 en el total | Run 2026-11-03 §1: se calculó a mano (29.5, solo consultas visibles); falta automatizarlo en el comando | auto | listo |
| B-017 | P3 | Contenido | `metadata.blog` en: description de 63 caracteres | `seo-lint` description-length (sigue en 2026-11-03) | copy | listo |
| B-023 | P3 | Contenido | `/about`: meta description de 163 caracteres. Solo aplica si `/about` no se redirige a `/como-trabajamos` | `seo-lint --live` 2026-11-03 description-length | copy | bloqueado: Q10, C12 |

## Hechos

| ID | Ítem | PR | Fecha |
|---|---|---|---|
| B-001 | hreflang `es`/`en`/`x-default` en páginas activas (`/ai-first-move`, `/about`, `/contact`, `/careers`, `/careers/[id]`, `/posts`, `/privacidad`, `/services/data-health-check`, `/services/data-analytics-use-case`). En vivo: hreflang 16 → 30 de 31; 23 `hreflang-missing` resueltos. Queda `/ruta-ia` (B-007) | [#27](https://github.com/waltbon/cabana-website/pull/27) | 2026-11-03 |
| B-002 | robots: `OAI-SearchBot` y `ClaudeBot` agregados; `Claude-Web` y `Anthropic-AI` quitados. 2 `robots-agent` resueltos | [#27](https://github.com/waltbon/cabana-website/pull/27) | 2026-11-03 |
| B-006 | 301 de `/portfolio-item/*` y `/area-item/*` → `/` (antes 308 → 404) | [#27](https://github.com/waltbon/cabana-website/pull/27) | 2026-11-03 |
| B-018 | `x-default` en páginas con hreflang: 4 → 30 de 31 | [#27](https://github.com/waltbon/cabana-website/pull/27) | 2026-11-03 |
| B-024 | robots: `Disallow: /api/` y `/admin/` en cada bot nombrado | [#27](https://github.com/waltbon/cabana-website/pull/27) | 2026-11-03 |
