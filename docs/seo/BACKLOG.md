# Backlog SEO

Lo mantiene `seo-strategist` después de cada `/seo-weekly`; lo consume `/seo-fix`. Un ítem por cambio que cabe en un PR.

- **Prioridad:** P0 bloquea indexación o rompe una regla de la guía · P1 impacto alto, esfuerzo bajo · P2 impacto medio · P3 mejora menor.
- **Gate:** `auto` (PR técnico, revisión normal) · `copy` (brand-guardian + aprobación humana antes del PR) · `dirección` (necesita una decisión en `DECISIONS.md`).
- **Estado:** `listo` · `bloqueado` (dice por qué) · `en PR` (con enlace) · `hecho` (con fecha).

`/seo-fix` sin argumentos toma el primer ítem `listo` de mayor prioridad con gate `auto`.

## Activos

| ID | Prioridad | Etapa | Ítem | Evidencia | Gate | Estado |
|---|---|---|---|---|---|---|
| B-001 | P0 | Técnica | hreflang `es`/`en`/`x-default` en páginas activas: `/ai-first-move`, `/about`, `/contact`, `/careers`, `/careers/[id]`, `/posts`, `/privacidad` | `seo-lint` hreflang-missing; 00-baseline §1 | auto | listo |
| B-002 | P1 | Técnica | robots: agregar `OAI-SearchBot` y `ClaudeBot`; quitar los nombres antiguos `Claude-Web` y `Anthropic-AI` | `seo-lint` robots-agent | auto | listo |
| B-006 | P1 | Técnica | 301 de residuos WordPress `/portfolio-item/*` y `/area-item/*` → `/` | redirects.csv; impresiones en GSC | auto | listo |
| B-005 | P2 | Técnica | Agregar `/privacidad` y `/en/privacidad` al sitemap | `seo-lint` sitemap-missing | auto | listo |
| B-016 | P2 | Técnica | `/en/careers` con H1 en español | 03-resumen §1 | copy | listo |
| B-010 | P2 | Contenido | Titles largos: `inicio.meta` es (66), `aiFirstMove.meta` es (68) y en (70), `metadata.home` (66) | `seo-lint` title-length | copy | listo |
| B-017 | P3 | Contenido | `metadata.blog` en: description de 63 caracteres | `seo-lint` description-length | copy | listo |
| B-011 | P1 | Contenido | Posts del blog: titles de 69–95 caracteres, descriptions de 167–293, voseo en títulos ("lo sabés"). Extender `seo-lint` a `data/blog` | `seo-lint --live` | copy | listo |
| B-012 | P1 | Contenido | Página Cómo trabajamos: el copy v1 está en Drive y falta en `docs/content/pages/` y en el sitio | Drive "Copy web · Cómo trabajamos (v1 borrador)" | copy | listo |
| B-013 | P2 | Contenido | 8 artículos de blog (es) para términos con demanda prohibidos en servicio: casos de uso, ROI, business case, piloto/PoC, agentes | 03-resumen §1, C1 | copy | listo |
| B-003 | P1 | Técnica | `/case-studies` responde 307; el mapa pide 301 a `/casos` | `seo-lint --live` redirect-temporary | dirección | bloqueado: `/casos` no existe (Q7) |
| B-004 | P1 | Técnica | Sitemap lista URLs que el mapa redirige (`/services/data-*`, `/about`, `/contact`, `/posts`) | `seo-lint` sitemap-redirected | dirección | bloqueado: Q10, Q11 |
| B-007 | P1 | Técnica | `/en/ruta-ia` da 404 | 00-baseline §1 | dirección | bloqueado: Q2 |
| B-008 | P1 | Técnica | `pathnames` de next-intl para slugs propios en inglés | 00-baseline §1 | dirección | bloqueado: Q2, Q3; volúmenes de DataForSEO |
| B-009 | P1 | Técnica | 301 de `ruta-ai.cabanadata.com` → `/ruta-ia` | 00-baseline §1 | dirección | bloqueado: acceso al proyecto Vercel |
| B-014 | P2 | Autoridad | Perfiles de entidad: Clutch, Consultancy.org, actualizar The Manifest | 03-resumen §1 | dirección | bloqueado: Q9 |
| B-015 | P1 | Medición | Accesos: DataForSEO, PageSpeed Insights API key, Moz o Bing Webmaster | STRATEGY §6 | dirección | bloqueado: cuentas |

## Hechos

| ID | Ítem | PR | Fecha |
|---|---|---|---|
