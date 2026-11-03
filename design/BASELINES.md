# BASELINES

Registro de los baselines de página de `design/design-system.pen` (reglas en `DESIGN-RULES.md`, sección 1.2).

Cada fila es una ruta pública del sitio. Un baseline se dibuja **al tocar** la ruta (antes de diseñar su cambio), no todos de golpe.

**Estados**: `pendiente` (sin frame) · `dibujado` (frame al día con el commit indicado) · `desactualizado` (el código cambió después del commit indicado) · `n/a` (no lleva baseline).

**Móvil**: todas las rutas públicas llevan frame móvil (390 px) además de escritorio (1440 px).

---

## Rutas

| Frame | Archivo | Estado | Commit | Deuda |
|---|---|---|---|---|
| `PG/index` | `app/[locale]/page.tsx` | dibujado | `d29a0c7` | Fondo del hero es WebGL (`PlasmaField`): en el `.pen` se aproxima con un gradiente radial. Logos de clientes en escala de grises (`grayscale`) en código, a color en el `.pen`. Títulos de `capabilities` y `cases` (`text-2xl`, `text-lg`) fuera de la escala global de headings. |
| `PG/about` | `app/[locale]/about/page.tsx` | pendiente | — | — |
| `PG/contact` | `app/[locale]/contact/page.tsx` | pendiente | — | Dibujar estados del formulario: base, enviando, enviado, error. |
| `PG/careers` | `app/[locale]/careers/page.tsx` | pendiente | — | — |
| `PG/careers/[id]` | `app/[locale]/careers/[id]/page.tsx` | pendiente | — | — |
| `PG/posts` | `app/[locale]/posts/page.tsx` | desactualizado | `54e8880` | Estados dibujados: con resultados y sin resultados (escritorio y móvil). Textos quemados en inglés ("Blog", "post(s) found", "Search posts...", "Reset Filters", "No posts found") aunque existen las claves `blog.*` en `es.json`; contador fijo (`total: 1`); filtros y búsqueda no filtran (`POSTS` sin filtrar), así que el estado sin resultados no se alcanza hoy. Typo "eonctraron" en `filter.tsx`. `PostCard` con fecha en `en-US` y `bg-accent/30` (en el `.pen` va `accent` sólido). `el-error-mas-caro-en-un-proyecto-de-datos.png` no existe en `public/blog/` (en el `.pen` se dibuja sin imagen). Rediseño en `CH-blog-rediseno` (rama `feat/blog-rediseno`): al mergear, reemplazar este baseline por esos frames y borrar el contenedor `CH`. |
| `PG/posts/[slug]` | `app/[locale]/posts/[slug]/page.tsx` | desactualizado | `54e8880` | Dibujado con `infraestructura-que-no-esta-lista-para-ia` (artículo truncado). Hex sueltos (`bg-[#0000d3]`, `from-[#0000d3]/10`): migrar a `bg-primary` / `from-primary/10`. Dos `h1` por página (hero + `#` del MDX). `MdxLayout` fuerza `prose-headings:text-black` y tamaños propios (h1 48, h3 30) fuera de la escala. Fecha en `en-US`. Sidebar: tuteo/voseo ("Contáctanos", "Dejanos tu información", "Tu nombre") contra la guía de tono; labels a 11 px (`text-[11px]`) fuera de la escala; claves `blog.postSidebar` de `es.json` sin usar. Meta line del MDX muestra códigos internos ("D2 · Infraestructura"). Rediseño en `CH-blog-rediseno` (rama `feat/blog-rediseno`): al mergear, reemplazar este baseline por esos frames y borrar el contenedor `CH`. |
| `PG/privacidad` | `app/[locale]/privacidad/page.tsx` | pendiente | — | — |
| `PG/services` | `app/[locale]/services/page.tsx` | pendiente | — | Hex sueltos en `_components` de services (6 archivos, sin contar ilustraciones). |
| `PG/services/data-consulting` | `app/[locale]/services/data-consulting/page.tsx` | pendiente | — | — |
| `PG/services/data-health-check` | `app/[locale]/services/data-health-check/page.tsx` | pendiente | — | — |
| `PG/services/data-analytics-use-case` | `app/[locale]/services/data-analytics-use-case/page.tsx` | pendiente | — | — |
| `PG/services/digital-product` | `app/[locale]/services/digital-product/page.tsx` | pendiente | — | — |
| `PG/services/product-design-discovery` | `app/[locale]/services/product-design-discovery/page.tsx` | pendiente | — | — |
| `PG/services/application-development` | `app/[locale]/services/application-development/page.tsx` | pendiente | — | — |
| `PG/services/dashboards-analytics-interfaces` | `app/[locale]/services/dashboards-analytics-interfaces/page.tsx` | pendiente | — | — |
| `PG/services/data-engineering` | `app/[locale]/services/data-engineering/page.tsx` | pendiente | — | — |
| `PG/services/custom-ai-agents` | `app/[locale]/services/custom-ai-agents/page.tsx` | pendiente | — | — |
| `PG/services/ai-readiness-assessment` | `app/[locale]/services/ai-readiness-assessment/page.tsx` | pendiente | — | Hex sueltos en `_components`. |
| `PG/ruta-ia` | `app/ruta-ia/page.tsx` | pendiente | — | Fuera de `[locale]` (solo español). Hex y gradientes en línea en 5 archivos: migrar a `.text-gradient-cabana` / tokens. |

## Sin baseline

| Ruta | Motivo |
|---|---|
| `app/[locale]/_disabled-case-studies/*` | Desactivada (prefijo `_`). Dibujar solo si se reactiva. |
| `/api/og`, `/api/contact` | Endpoints, no páginas. |
| Nav, footer, menú móvil | Componentes del design system (`Components` → `Layout Blocks`), no rutas. |

## Deuda global

Afecta a todo el sitio. Se resuelve con un cambio propio, no al dibujar baselines.

- `h4` usa `--heading-sm-size` / `--heading-sm-line-height`, que no están definidos en `globals.css`.
- Footer compacto (fondo `cabana-dark`): textos en `slate-300`/`slate-400` y divisor `white/10` sin token en el `.pen` (hex sueltos).
- El logo en el `.pen` es texto; falta la imagen del logo real.
- Componentes del código sin par en el `.pen`: `Accordion`, `Carousel`, `Drawer`, `Sheet`, `Pagination`, `NavigationMenu`, `DropdownMenu`, `Stat`.

---

Último repaso del registro: commit `82016ec` (2026-10-24).
