# 00 · Línea base SEO de cabanadata.com (Fase 0)

Fecha de captura: 2026-10-25. Ventana de datos: 16 meses (2025-06-26 a 2026-10-24).
Fuentes: código del repo (`main` @ 9b991df), sitio en vivo, Search Console (`sc-domain:cabanadata.com`), GA4 (`properties/539625341`), Common Crawl.
Datos crudos en `docs/seo/data/`. Mapa de redirects en `docs/seo/redirects.csv`.

## Resumen

- **El tráfico orgánico casi no existe y es de marca.** En 16 meses hubo 111 clics y 3.812 impresiones en los tres hosts. Las únicas consultas con clics son "cabana ai", "cabana software", "ruta ia" y "ruta ai". No hay ninguna consulta no-marca con clics. El rediseño no pone en riesgo tráfico orgánico relevante, así que la arquitectura se puede decidir por estrategia y no por miedo a perder posiciones.
- **Las URLs que concentran los clics son 5:** `/` (55), `ruta-ai.cabanadata.com/` (20), `/es` (12), `/about` (10) y `/en` (7). Las páginas de servicio y los artículos del blog tienen 0 clics.
- **No se encontraron backlinks externos verificables.** Common Crawl tiene el dominio rastreado, pero por debajo del umbral de ranking y sin dominios de referencia. No hubo acceso a Moz ni a Bing.
- **El hreflang está roto en casi todo el sitio.** El layout lo declara, pero cada página sobrescribe `alternates` solo con `canonical`. En vivo, ninguna página estática emite `<link rel="alternate" hreflang>`, y el sitemap tampoco lo declara.
- **Hay contenido duplicado entre hosts.** `ruta-ai.cabanadata.com/` y `cabanadata.com/ruta-ia` son la misma landing y cada una tiene canonical a sí misma. GSC procesa los sitemaps de los dos hosts.

## 1 · Configuración de Next.js e i18n

| Elemento | Estado actual | Fuente |
|---|---|---|
| Locales | `es` (por defecto) y `en`. `localePrefix: "as-needed"` y `localeDetection: false` | `i18n/config.ts`, `i18n/routing.ts` |
| Rutas ES | Sin prefijo (`/about`, `/services/...`) | — |
| Rutas EN | Prefijo `/en/...` con los **mismos slugs que ES**, que hoy están en inglés (`/services`, `/about`, `/contact`) | `app/[locale]/**` |
| `/es/*` | next-intl responde **307** (temporal) hacia la ruta sin prefijo. GSC aún muestra `/es`, `/es/about` y `/es/services` | proxy en vivo |
| Middleware | `proxy.ts` excluye `/ruta-ia`, `api`, `llms*.txt` y estáticos del middleware de next-intl | `proxy.ts` |
| `/ruta-ia` | Ruta independiente, fuera de `[locale]` (`app/ruta-ia/`), solo en español. **`/en/ruta-ia` da 404** | en vivo |
| Subdominio `ruta-ai.cabanadata.com` | Es otro proyecto en Vercel, que no está en este repo. Tiene `/` y `/evaluation`, su propio sitemap y robots, y canonical a sí mismo. Duplica `/ruta-ia` | en vivo y GSC |
| Canonical | Cada página declara un canonical a sí misma. `/en/posts/<slug>` responde 200 con canonical a `/posts/<slug>` (bien). `?author=` hace canonical a `/posts` (bien) | `generateMetadata` en cada página |
| hreflang | `app/[locale]/layout.tsx` declara `languages` solo para la home, pero las páginas lo **sobrescriben** con `alternates: { canonical }` y en vivo no queda ningún hreflang. Solo los posts emiten `es` y `x-default`, lo cual es correcto porque solo existen en ES | `app/[locale]/page.tsx`, `about`, `contact`, etc. |
| Sitemap | Hay 37 URLs escritas a mano en `app/sitemap.ts`. No declara alternates de hreflang. No incluye `/privacidad`, `/en/privacidad` ni `/careers/[id]`. Incluye todas las páginas de servicio antiguas | `app/sitemap.ts`, `data/sitemap-urls-2026-10-25.txt` |
| robots.txt | Permite todo salvo `/api/` y `/admin/`. Permite explícitamente varios bots de IA. Falta `OAI-SearchBot`, que el subdominio sí incluye. Además, `Claude-Web` y `Anthropic-AI` son nombres antiguos: el actual es `ClaudeBot` | `app/robots.ts` |
| Redirects | www → apex (308), http → https (308), barra final → sin barra (308), `/case-studies/*` → `/` (**307** temporal) | `next.config.ts` |
| Otros | `llms.txt` y `llms-full.txt` dinámicos, `/api/indexnow` y headers de seguridad. HSTS está activo | — |

### Qué falta
1. hreflang recíproco `es`/`en`/`x-default` en cada página que tenga par, idealmente generado desde un mapa de rutas compartido con el sitemap.
2. Slugs propios en inglés. Hoy EN reutiliza los slugs ES, porque next-intl no tiene `pathnames` configurado. Con la nueva arquitectura (`/como-trabajamos` frente a `/en/how-we-work`) hace falta `pathnames` en `defineRouting`.
3. Pasar `/es/*` a 301. Con `as-needed`, next-intl usa 307, así que la solución es una regla en `redirects()`.
4. Integrar `/ruta-ia` en i18n o darle un par EN, y eliminar el duplicado del subdominio con un 301.
5. Generar el sitemap a partir de la misma fuente que las rutas y agregar `alternates.languages`.
6. Aplicar los redirects de `redirects.csv` como 301 en `next.config.ts` y en el proyecto del subdominio.

## 2 · Search Console: 16 meses

Totales por host:

| Host | Clics | Impresiones |
|---|---:|---:|
| cabanadata.com | 91 | 3.544 |
| ruta-ai.cabanadata.com | 20 | 224 |
| www.cabanadata.com | 0 | 44 |

### Por URL (las que tienen clics o 30 impresiones o más)

| URL | Clics | Impr. | CTR | Pos. |
|---|---:|---:|---:|---:|
| https://cabanadata.com/ | 55 | 1.519 | 3,6 % | 14,0 |
| https://ruta-ai.cabanadata.com/ | 20 | 217 | 9,2 % | 5,8 |
| https://cabanadata.com/es | 12 | 66 | 18,2 % | 2,7 |
| https://cabanadata.com/about | 10 | 667 | 1,5 % | 11,4 |
| https://cabanadata.com/en | 7 | 403 | 1,7 % | 7,2 |
| https://cabanadata.com/services | 5 | 277 | 1,8 % | 13,2 |
| https://cabanadata.com/contact | 2 | 265 | 0,8 % | 8,6 |
| https://cabanadata.com/posts | 0 | 85 | 0 | 8,6 |
| https://cabanadata.com/services/data-consulting | 0 | 62 | 0 | 31,0 |
| https://cabanadata.com/case-studies | 0 | 37 | 0 | 6,8 |
| https://cabanadata.com/careers | 0 | 36 | 0 | 8,1 |

Otras URLs con impresiones: `ruta-ai.cabanadata.com/evaluation` (7), `/posts/metodologia-aer` (5 en apex y 11 en www), los residuos de WordPress `/portfolio-item/*` y `/area-item/footer/`, y varias `/en/services/*` con entre 1 y 12. El detalle está en `data/gsc-pages-16m.csv`.

### Por consulta (principales por impresiones)

| Consulta | Clics | Impr. | Pos. | Host con clics |
|---|---:|---:|---:|---|
| cabana ai | 7 | 142 | 5,9 | apex (6) y ruta-ai (1) |
| cabana software | 5 | 115 | 9,8 | apex |
| cabana solutions | 0 | 115 | 36,3 | — |
| cabana | 0 | 84 | 53,8 | — |
| ruta ia | 2 | 59 | 5,4 | ruta-ai |
| consultoria estratègica de dades | 0 | 54 | 24,3 | — (catalán, `/services/data-consulting`) |
| cabana booking software | 0 | 37 | 32,1 | — (otra marca) |
| ruta ai | 1 | 29 | 5,1 | ruta-ai |
| cabana tech | 0 | 19 | 6,8 | — |
| routeway ai | 0 | 9 | 5,4 | — |

Las consultas visibles suman solo 15 de 111 clics y 822 impresiones. El resto lo anonimiza Google porque son consultas de bajo volumen. Las únicas consultas no-marca con impresiones son "consultoria estratègica de dades", "servicio de visualización de datos y dashboards" y "equipo técnico externo arquitectura", todas con posición mayor a 24 y sin clics.

Search Console tiene registrados dos sitemaps, `https://cabanadata.com/sitemap.xml` y `https://ruta-ai.cabanadata.com/sitemap.xml`. Los dos están procesados y sin errores.

## 3 · GA4: páginas de destino orgánicas (16 meses)

En total hubo 192 sesiones orgánicas y 140 usuarios, con un promedio de 2,5 sesiones al día. La propiedad GA4 solo mide `cabanadata.com`: el subdominio ruta-ai no aparece y probablemente no tiene GA4 o usa otra propiedad.

| Landing | Sesiones | Usuarios | Engagement |
|---|---:|---:|---:|
| / | 103 | 28 | 66 % |
| /en | 41 | 35 | 39 % |
| (not set) | 14 | 9 | 0 % |
| /en/services/ai-readiness-assessment | 4 | 2 | 25 % |
| /posts/metodologia-aer | 4 | 3 | 50 % |
| /about | 3 | 3 | 100 % |
| /contact | 3 | 3 | 33 % |
| /en/about | 3 | 3 | 67 % |
| resto (14 URLs) | 1–2 c/u | | |

Aparece `/services/data-strategy`, que hoy responde 404. Es una URL antigua y está incluida en los redirects. Ver `data/ga4-organic-landing-16m.csv`.

## 4 · URLs con tráfico orgánico real o con backlinks

**Tráfico real**, con al menos 1 clic en GSC o al menos 3 sesiones en GA4: `/`, `/en`, `/es`, `/about`, `/en/about`, `/services`, `/contact`, `/en/services/ai-readiness-assessment`, `/posts/metodologia-aer` y `ruta-ai.cabanadata.com/`. Todas tienen destino en `redirects.csv`, y todas menos `/`, `/en` y los posts cambian de URL.

**Backlinks externos:** no se pudo identificar ninguno.
- Common Crawl (release cc-main-2026-jan-feb-mar): el dominio está en el crawl, pero por debajo del umbral de ranking, con 0 dominios de referencia en la muestra.
- Moz y Bing Webmaster: no hay API key (ver la última sección).
- Search Console tiene un informe de enlaces, pero la API no lo expone. Hay que exportarlo a mano desde Search Console > Enlaces > Exportar.

## 5 · Auditoría técnica del sitio en vivo (priorizada)

| Prioridad | Hallazgo | Evidencia | Acción |
|---|---|---|---|
| Crítica | No hay hreflang en las páginas estáticas ES/EN | El HTML de `/`, `/en` y `/about` no tiene `rel="alternate"` | Generar `alternates.languages` por página a partir de un mapa de rutas |
| Crítica | Landing duplicada entre `ruta-ai.cabanadata.com` y `cabanadata.com/ruta-ia`, cada una con canonical propio | Las dos dan 200 con el mismo título y H1 | 301 del subdominio a `/ruta-ia` (o, como mínimo, canonical cruzado) |
| Alta | `/es/*` responde 307 y no 301, y GSC sigue indexando `/es` (66 impresiones, 12 clics) | `curl` devuelve 307 | Regla 301 explícita |
| Alta | `/en/ruta-ia` da 404 y la oferta principal no tiene versión EN | — | Crear la página EN con un slug que salga de la investigación de keywords |
| Alta | Residuos de WordPress (`/portfolio-item/*`, `/area-item/*`) hacen 308 y luego 404, y `/services/data-strategy` da 404 | GSC y GA4 | 301 (ver redirects) o 410 |
| Media | `/case-studies` usa redirects 307 temporales hacia la home | `next.config.ts` | 301 hacia `/casos` cuando exista |
| Media | `/en/careers` tiene el H1 en español ("Construí algo que importe") | línea base de drift | Traducir |
| Media | El sitemap no tiene hreflang, omite `/privacidad`, y su lista escrita a mano puede desalinearse de las rutas | `app/sitemap.ts` | Generarlo a partir del mapa de rutas |
| Media | `/en/posts/<slug>` responde 200 con contenido en español (el canonical a ES lo mitiga) | — | 301 a `/posts/<slug>` |
| Baja | Varias meta descriptions son largas: 293 caracteres en `/posts/infraestructura-...` y entre 180 y 217 en varios servicios y posts | `data/drift-baseline-2026-10-25.csv` | Recortar a unos 155 caracteres al reescribir |
| Baja | En robots.txt faltan `OAI-SearchBot` y `ClaudeBot`, y quedan nombres de UA antiguos | robots.txt | Actualizar |
| Baja | Los H1 se concatenan sin espacio en el texto extraído ("tomada conevidencia"). Es por `<br>` o `<span>` sin espacio y puede afectar snippets o lectura por IA | drift | Revisar el marcado |
| Info | No hay datos de CrUX: el origen no tiene tráfico suficiente de Chrome | API de CrUX | — |
| Info | PageSpeed Insights hizo timeout en mobile y desktop (120 s), sin API key | `pagespeed_check.py` | Repetir con API key o con Lighthouse local. La respuesta directa del HTML tardó 0,39 s (208 KB, cache HIT de Vercel) |
| OK | HTTPS, HSTS, www → apex, headers de seguridad, `index, follow`, canonical en todas las páginas y JSON-LD en todas las páginas de la línea base | — | — |

## 6 · Línea base de drift

- Se capturaron 38 URLs el 2026-10-25 con `drift_baseline.py --skip-cwv`: las 37 del sitemap del apex más `ruta-ai.cabanadata.com/` y `/evaluation`. Se usó `--skip-cwv` porque no hay CrUX.
- Base de datos activa: `~/.cache/claude-seo/drift/baselines.db`, en la máquina local.
- Copia versionable: `docs/seo/data/drift-baselines-2026-10-25.db` y un resumen en `docs/seo/data/drift-baseline-2026-10-25.csv` con título, longitud de la meta, canonical, robots, H1, schema y hash del HTML.
- Para comparar después del cambio: `drift_compare.py <url>` con el skill `claude-seo:seo-drift`.

## 7 · Mapa de redirects

Ver `docs/seo/redirects.csv`, que tiene 60 filas y cubre los dos hosts y los dos locales. Las decisiones que requieren confirmación de dirección están marcadas en la columna `motivo`:
- `data-health-check` → `/ruta-ia` y `data-analytics-use-case` → `/ai-first-move`.
- `/about` → `/como-trabajamos`, porque la arquitectura objetivo no tiene página "Nosotros".
- `dashboards-analytics-interfaces` → Data Engineering; la alternativa es Digital Product.
- `ruta-ai.cabanadata.com/evaluation` → `/ruta-ia`; la alternativa es migrar el checklist como recurso.
- Slugs propuestos para Capacidades: `/capacidades/consultoria-de-datos`, `/capacidades/ingenieria-de-datos`, `/capacidades/producto-digital` y `/capacidades/agentes-ia-a-medida`.
- Todos los slugs en inglés están marcados como "PROVISIONAL — pendiente keyword map en": `/en/ai-opportunity-assessment`, `/en/ai-first-move`, `/en/how-we-work`, `/en/capabilities/*`, `/en/case-studies`, `/en/blog` y `/en/book-a-call`.
- **Nota sobre el blog:** el archivo pasa a `/blog`, pero los artículos mantienen `/posts/<slug>`, como se pidió. Mover todo a `/blog/<slug>` daría URLs más coherentes y hoy el costo es casi nulo (0 clics, salvo 4 sesiones en `metodologia-aer`). Queda como decisión pendiente.

## Sin datos / accesos faltantes

| Fuente | Resultado | Acceso necesario |
|---|---|---|
| Moz Link Explorer (`moz_api.py`) | Falló: "No Moz API key configured" | API key de Moz, configurada con `backlinks_auth.py --setup` |
| Bing Webmaster Tools (`bing_webmaster.py`) | Falló: "No Bing Webmaster API key configured" | Verificar cabanadata.com en Bing Webmaster y generar una API key |
| PageSpeed Insights | Timeout de 120 s en mobile y desktop | API key de Google (PSI) en `google-api.json` o en el entorno, y volver a correr |
| CrUX y CrUX History | No hay datos para el origen (poco tráfico de Chrome) | Ninguno: es una limitación de volumen |
| Enlaces de Search Console | La API no lo expone | Exportación manual desde la interfaz de GSC (Enlaces) |
| GA4 del subdominio ruta-ai | No aparece en la propiedad 539625341 | Confirmar si tiene GA4 propio y dar acceso a la cuenta de servicio |
| Código del subdominio ruta-ai | No está en este repo | Acceso al proyecto de Vercel o al repo para aplicar los 301 |
| DataForSEO | No está instalado (no se usó en la Fase 0) | Necesario para la Fase 1 (volúmenes y SERPs) |
| Consultas de GSC | El 86 % de los clics está anonimizado | Ninguno: es una limitación de Google |
