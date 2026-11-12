# Estrategia SEO · ciclo de mejora continua

Este documento define a dónde vamos y cómo sabemos que llegamos. Lo leen las personas y los agentes del ciclo (`seo-strategist`, `seo-implementer`, `brand-guardian`) antes de proponer o cambiar nada.

Fuentes: `docs/content/BRIEF-MARKETING.md`, `docs/content/GUIA-TONO.md`, `docs/seo/03-resumen.md`. Si este documento contradice el brief o la guía, mandan ellos.

## 1 · Objetivo

Pocos leads bien calificados, no volumen (brief §8). El SEO está en su punto óptimo cuando:

- cada página objetivo es la respuesta de Google y de los motores de IA para su intención, en los dos idiomas;
- lo que llega por búsqueda calza con el envase: **prospectos fuera del envase ≤ 20 %** (brief §7).

El tráfico es un medio. Si sube el tráfico y baja la calificación, la segmentación de keywords está mal.

## 2 · Etapas y criterio de salida

El ciclo avanza por etapas. Una etapa se da por cumplida cuando todas sus metas se sostienen 4 semanas seguidas en `metrics.csv`. Las etapas se solapan: el contenido no espera a que la técnica termine, pero la técnica tiene prioridad en el backlog.

| Etapa | Métrica | Fuente | Base (2026-10-25) | Meta |
|---|---|---|---|---|
| **1 · Técnica** | Errores de `seo-lint` | `seo-lint` | 2 | 0 |
| | Advertencias de `seo-lint` (estático) | `seo-lint` | 39 | ≤ 5, todas justificadas |
| | Páginas del sitemap con hreflang | `seo-lint --live` | 0 | 100 % de las que tienen par |
| | Redirects del mapa aplicados como 301 | `seo-lint --live` | 11/37 | 100 % de los confirmados |
| | Core Web Vitals (LCP, INP, CLS) | PSI / CrUX | sin datos | verde en todas las páginas objetivo |
| | Páginas objetivo indexadas | GSC URL Inspection | sin medir | 100 % |
| **2 · Contenido** | Clics no-marca / mes | GSC | 0 | crecimiento mes a mes; meta inicial 30 |
| | Impresiones no-marca / mes | GSC | ~0 | crecimiento mes a mes |
| | Páginas objetivo en top 10 de su término principal (es) | GSC / DataForSEO | 0/6 | 6/6 |
| | Páginas objetivo en top 10 (en-US) | GSC / DataForSEO | 0/6 | 4/6 |
| | Artículos que cubren términos prohibidos en servicio | `data/blog` | 0/8 | 8/8 (es) |
| **3 · Autoridad** | Dominios de referencia | Moz / Bing / Common Crawl | 0 | ≥ 15 relevantes |
| | Menciones en respuestas de IA (términos principales) | `seo-geo` / DataForSEO | 0 | presente en ≥ 3 de 6 |
| | Perfiles de entidad (Clutch, The Manifest, Consultancy.org) | manual | 1 desactualizado | 3 al día |
| **Negocio** | Leads orgánicos calificados / mes | ClickUp (formulario de contacto) | sin medir | definir con dirección |
| | Prospectos fuera del envase | ClickUp | sin medir | ≤ 20 % |

"No-marca" excluye consultas que contienen: `cabana`, `ruta ia`, `ruta ai`, `ai first move`.

## 3 · Página → intención

Cada página responde una sola intención por idioma (GUIA-TONO, "SEO y visibilidad en LLMs"). Detalle y secundarios en `01-keyword-map-es.md`, `01-keyword-map-en.md` y `02-briefs/`.

| Página | Ruta es | Término principal es | Ruta en | Término principal en-US |
|---|---|---|---|---|
| Inicio | `/` | consultoría de inteligencia artificial Costa Rica | `/en` | AI consulting for mid-market companies |
| Ruta IA | `/ruta-ia` | diagnóstico de IA para empresas | `/en/ai-opportunity-assessment` (provisional) | AI opportunity assessment |
| AI First Move | `/ai-first-move` | primer caso de IA en producción; secundario: IA con supervisión humana (D-011) | `/en/ai-first-move` | first AI use case in production; secondary: human-in-the-loop AI implementation |
| Cómo trabajamos | `/como-trabajamos` (B-012) | cómo trabajamos, metodología de consultoría (D-011) | `/en/how-we-work` (provisional) | how we work, consulting methodology |
| Capacidades | `/capacidades` | consultoría de datos e IA | `/en/capabilities` (provisional) | AI and data consulting services |
| Casos | `/casos` (pendiente) | casos de éxito de IA | `/en/case-studies` | AI consulting case studies |

Los términos informativos ("por dónde empezar con IA", "AI readiness assessment", "casos de uso de IA", "ROI de IA", "piloto vs producción") van al **blog**, con enlace a la página de servicio. Nunca a la página de servicio.

## 4 · Reglas que el ciclo no puede cambiar

- Glosario, tratamiento (usted) y términos prohibidos: `docs/content/GUIA-TONO.md`. La versión ejecutable está en `docs/seo/rules.json` y la aplica `scripts/seo-lint.mjs`.
- Estructura de las páginas de servicio: momento → promesa → qué se lleva → cómo funciona → duración y precio → para quién no es → FAQ → CTA.
- El volumen de búsqueda nunca justifica romper la guía. Si un término prohibido tiene demanda, se registra como artículo de blog en el backlog.
- Conflictos entre SEO y brief o guía: se registran en `DECISIONS.md` y los resuelve dirección. Ningún agente los resuelve.

## 5 · El ciclo

| Cadencia | Qué | Cómo | Salida |
|---|---|---|---|
| Cada PR | Guardrails de copy y rutas | GitHub Action `seo-lint` | PR en rojo si hay errores |
| Semanal | Medir y detectar regresiones | `/seo-weekly` | `runs/AAAA-MM-DD/`, fila en `metrics.csv`, backlog actualizado |
| A demanda | Implementar el ítem de mayor prioridad | `/seo-fix [B-xxx]` | Un PR por ítem |
| Mensual (fase 2) | Auditoría completa, GEO, SXO | `/seo-monthly` | Repriorización del backlog |
| Trimestral (fase 2) | Keywords y briefs | `seo-cluster`, `seo-content-brief` | Mapas y briefs actualizados |

### Quién aprueba qué

| Tipo de cambio | Gate |
|---|---|
| Técnico (metadata técnica, hreflang, sitemap, robots, schema, redirects confirmados) | PR automático; una persona revisa y hace merge |
| Copy visible (titles, descriptions, textos en `messages/*.json`, blog) | `brand-guardian` + aprobación humana explícita antes del PR |
| Arquitectura (slugs nuevos, páginas nuevas, redirects por confirmar) | Decisión de dirección registrada en `DECISIONS.md` |
| Nada | Se despliega sin PR |

## 6 · Accesos que limitan la medición

Mientras falten, las métricas marcadas se reportan como "sin datos", nunca se estiman.

| Acceso | Desbloquea | Estado |
|---|---|---|
| Search Console + GA4 | Clics, impresiones, posiciones, landings orgánicas | ✅ configurado (`~/.config/claude-seo/google-api.json`) |
| DataForSEO | Volumen, dificultad, SERPs CR/MX/CO, visibilidad en IA | ❌ pendiente |
| PageSpeed Insights API key | Core Web Vitals de laboratorio | ❌ pendiente |
| Moz o Bing Webmaster | Dominios de referencia | ❌ pendiente |
| Proyecto Vercel de ruta-ai | 301 del subdominio | ❌ pendiente |
