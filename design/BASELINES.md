# BASELINES

Registro de los baselines de página de `design/design-system.pen` (reglas en `DESIGN-RULES.md`, sección 1.2).

Cada fila es una ruta pública del sitio. Un baseline se dibuja **al tocar** la ruta (antes de diseñar su cambio), no todos de golpe.

**Estados**: `pendiente` (sin frame) · `dibujado` (frame al día con el commit indicado) · `desactualizado` (el código cambió después del commit indicado) · `n/a` (no lleva baseline).

**Móvil**: todas las rutas públicas llevan frame móvil (390 px) además de escritorio (1440 px).

---

## Rutas

| Frame | Archivo | Estado | Commit | Deuda |
|---|---|---|---|---|
| `PG/index` | `app/[locale]/page.tsx` | dibujado | `web-v2` | Web v2 (copy 6M-02.0): hero con tres pilares, sección de IA (recorrido + servicios), Lo que hacemos (cinco áreas), casos, método, clientes. Pilares y tarjetas de área dibujados a mano: aún no son componentes del DS. Logos de clientes en escala de grises en código, a color en el `.pen`. Diagonales decorativas con `clip-path` arbitrario en código. |
| `PG/como-trabajamos` | `app/[locale]/como-trabajamos/page.tsx` (y `how-we-work` en en) | dibujado | `web-v2` | Web v2 (copy 6M-02.4): recorrido de tres etapas, método, equipo, área de tecnología, principio, lo que no hacemos y CTA de tres puertas. Usa `Feature Item` (Numbered). El frame móvil se derivó del de escritorio. `/about` retirado con 301 (D-009). |
| `PG/lo-que-hacemos` | `app/[locale]/lo-que-hacemos/page.tsx` | dibujado | `web-v2` | Tarjetas de área en fila (número, momento → cambio, panel oscuro con la cifra) dibujadas a mano. Bloque de tecnologías con la lista de `/capacidades` hasta la decisión de logos (LEEME 5). |
| `PG/lo-que-hacemos/[area]` | `app/[locale]/lo-que-hacemos/[area]/page.tsx` | dibujado | `web-v2` | Un solo frame para las cinco áreas (dibujado con Modernización de datos). Ciencia de datos no tiene ilustración en el hero; producto digital repite la del hero de Lo que hacemos. Las imágenes viven en `public/capacidades/` y `public/ai-first-move/`. |
| `PG/contact` | `app/[locale]/contact/page.tsx` | pendiente | — | Dibujar estados del formulario: base, enviando, enviado, error. |
| `PG/careers` | `app/[locale]/careers/page.tsx` | pendiente | — | — |
| `PG/careers/[id]` | `app/[locale]/careers/[id]/page.tsx` | pendiente | — | — |
| `PG/posts` | `app/[locale]/posts/page.tsx` | dibujado | `2dab7f6` | Estados dibujados: con resultados y sin resultados (escritorio y móvil). Títulos de posts existentes con tuteo/voseo (fuera de alcance del rediseño). |
| `PG/posts/[slug]` | `app/[locale]/posts/[slug]/page.tsx` | dibujado | `2dab7f6` | Dibujado con `infraestructura-que-no-esta-lista-para-ia` (artículo truncado) y sidebar/CTA de Ruta IA; la variante de AI First Move no tiene frame. `MdxLayout` mantiene tamaños propios de headings (h2 36, h3 30) fuera de la escala global. |
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
| `PG/ruta-ia` | `app/ruta-ia/page.tsx` | dibujado | `web-v2` | Fuera de `[locale]` (solo español; `/en/ruta-ia` 301 a `/ruta-ia`). Usa el Nav y Footer compartidos. Copy web v2 (6M-02.1) con "Plazo y alcance claros" (tres tarjetas, sin precio) y "Cuánto tiempo pide a su equipo" con el rol en línea. Deuda: el frame no tiene el hero dividido ni las ilustraciones (hero, Promise, card destacado de Deliverables) que sí están en código; referencia en el frame `Ilustraciones`. Hex y gradientes en línea en 5 archivos. |
| `PG/ai-first-move` | `app/[locale]/ai-first-move/page.tsx` | dibujado | `web-v2` | Copy web v2 (6M-02.2) con "Plazo y alcance claros" (dos tarjetas, sin precio). Deuda: el frame no tiene el hero dividido ni las ilustraciones (hero, Promise, card destacado de Deliverables) que sí están en código; referencia en el frame `Ilustraciones`. |

## Cambios en curso

| Contenedor | Qué propone | Estado |
|---|---|---|
| `CH-posts-slug: pantallas` | Encabezado del post dividido (texto a la izquierda, imagen a la derecha) y barra lateral genérica en lugar del formulario de Ruta IA. Propuesta A (formulario compacto, en la página completa), B (solo CTA) y C (nombre y correo). El encabezado dividido ya está en código; falta elegir la barra lateral. | Propuestas dibujadas; al elegir y mergear, actualizar `PG/posts/[slug]` y borrar el `CH`. |

## Sin baseline

| Ruta | Motivo |
|---|---|
| `app/[locale]/_disabled-case-studies/*` | Desactivada (prefijo `_`). Dibujar solo si se reactiva. |
| `/api/og`, `/api/contact` | Endpoints, no páginas. |
| Nav, footer, menú móvil | Componentes del design system (`Components` → `Layout Blocks`), no rutas. |

## Ilustraciones

Frame `Ilustraciones` del `.pen`: las ilustraciones del home, Ruta IA, AI First Move y las cuatro capacidades, con su uso. Las imágenes del `.pen` apuntan a `design/images/illustrations/` (copias de las de `public/`, incluido el hero del home); si se regenera una, se reemplazan ambas. Estilo y prompts: `design/illustration-style-doodle.yaml` y `design/illustrations/*.yaml`.

`/capacidades` se retiró en web v2 (301 a `/lo-que-hacemos`) y su contenedor `CH-capacidades` se eliminó del `.pen`. Sus ilustraciones siguen en `public/capacidades/` porque las usan las páginas de área.

## Deuda global

Afecta a todo el sitio. Se resuelve con un cambio propio, no al dibujar baselines.

- `h4` usa `--heading-sm-size` / `--heading-sm-line-height`, que no están definidos en `globals.css`.
- Footer compacto (fondo `cabana-dark`): textos en `slate-300`/`slate-400` y divisor `white/10` sin token en el `.pen` (hex sueltos).
- El logo en el `.pen` es texto; falta la imagen del logo real.
- `Nav` y `Footer` del DS actualizados en web v2 (Inicio, Cómo trabajamos, Lo que hacemos, Blog, Contacto; footer con Ruta IA). Falta una variante móvil de `Nav` como componente; los frames móviles usan una instancia recortada.
- Componentes del código sin par en el `.pen`: `Accordion`, `Carousel`, `Drawer`, `Sheet`, `Pagination`, `NavigationMenu`, `DropdownMenu`, `Stat`.

---

Último repaso del registro: web v2 (2026-11-20).
