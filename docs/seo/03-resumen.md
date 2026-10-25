# 03 · Resumen de la investigación SEO (fases 0 a 2)

Fecha: 2026-10-25. Solo investigación: sin cambios en código, sin deploy.

Detalle en: `00-baseline.md`, `redirects.csv`, `01-keyword-map-es.md`, `01-keyword-map-en.md`, `02-briefs/`, `data/`.

## 1. Hallazgos clave

### Línea base
- **Tráfico orgánico casi nulo y de marca.** 16 meses (2025-06-26 a 2026-10-24): 111 clics y 3.812 impresiones en cabanadata.com y ruta-ai.cabanadata.com. Consultas con clics: "cabana ai", "cabana software", "ruta ia", "ruta ai". GA4: 192 sesiones orgánicas. Las páginas de servicio y los posts tienen 0 clics. **El rediseño casi no arriesga posiciones.**
- **Hreflang roto.** Cada página sobrescribe `alternates` solo con el canonical: en vivo ninguna página estática emite hreflang. El sitemap tampoco.
- **Inglés sin slugs propios.** next-intl no tiene `pathnames`, así que `/en` usa slugs en español. `/en/ruta-ia` da 404.
- **Landing duplicada.** `ruta-ai.cabanadata.com` (otro proyecto Vercel, fuera del repo) duplica `/ruta-ia`, y cada una tiene canonical propio.
- **Redirects temporales.** `/es/*` y `/case-studies` responden 307 en vez de 301; GSC sigue indexando `/es`.
- **URLs rotas.** Residuos de WordPress (`/portfolio-item/*`, `/area-item/*`) y `/services/data-strategy` dan 404.
- **Menores.** `/en/careers` con H1 en español; meta descriptions de hasta 293 caracteres; robots.txt sin OAI-SearchBot ni ClaudeBot.
- **Drift.** Línea base de 38 URLs guardada (`data/drift-baseline-2026-10-25.csv`).

### Keywords y tipo de página (estimados, sin volúmenes medidos)

| Página | es (término principal) | en-US (término principal · slug) |
|---|---|---|
| Inicio | consultoría de inteligencia artificial Costa Rica | AI consulting for mid-market companies · `/en` |
| Ruta IA | diagnóstico de IA para empresas | AI opportunity assessment · `/en/ai-opportunity-assessment` |
| AI First Move | llevar IA a producción / primer caso de IA en producción | first AI use case in production · `/en/ai-first-move` |
| Cómo trabajamos | marca + método ("IA con supervisión humana") | human-in-the-loop AI implementation · `/en/how-we-work` |
| Capacidades | consultoría de datos e IA; "ingeniería de datos Costa Rica" es la mejor oportunidad | AI and data consulting services · `/en/capabilities/*` |
| Casos | casos de éxito de IA (cola larga, una página por caso) | AI consulting case studies · `/en/case-studies` |

- **Lo informativo va al blog.** Los términos amplios de búsqueda informativa ("por dónde empezar con IA", "AI readiness assessment", "AI pilot to production", "cómo implementar IA") solo muestran artículos. Se recomiendan como artículos de blog que enlazan al servicio.
- **"IA en producción" (semilla del brief) lleva a resultados de manufactura y OT,** fuera de perfil. Hay que usar la variante con "llevar" o "primer caso".
- **Visibilidad nula como entidad.** Cabana Data no aparece en ninguna búsqueda ni respuesta de IA revisada. "Cabana Data Costa Rica" devuelve alquiler de cabañas. Solo existe un perfil desactualizado en The Manifest ("big data analytics", sin IA).
- **Competencia:**
  - Rivales directos en español: RSM Colombia, gend.co, yourdevs y nordflux.
  - Rivales directos en EE. UU.: Redapt, LuMay, Clarista, Wipfli, RTS Labs, Slalom y Centric.
  - Datasys Group no comparte el perfil de cliente. Opinosis compite en el mercado de EE. UU.
  - SmartGo360 y Novitec no aparecieron en los SERPs.
  - **Casi ningún competidor publica precio ni plazo fijo:** ahí hay un diferenciador claro.
- **Los términos prohibidos sí tienen demanda.** "Casos de uso", "ROI", "business case", "piloto/PoC" y "agente autónomo" tienen volumen en ambos idiomas, y la competencia los usa para describir exactamente lo que entrega Ruta IA. Se cubren con artículos de blog (8 en es; un set equivalente en en), nunca en la página de servicio.

## 2. Conflictos con el brief o la guía (registrados, no resueltos)

| # | Conflicto | Manda |
|---|---|---|
| C1 | El mercado llama "casos de uso", "ROI" y "business case" a lo que entrega Ruta IA. | Guía. Los términos van al blog. |
| C2 | El brief §4.3 dice "no es una prueba de concepto", pero las instrucciones prohíben ese término en AI First Move. | Por decidir |
| C3 | Los nombres de capacidades se mantienen en inglés, pero en español se busca "ingeniería de datos" y "consultoría de datos". | Por decidir |
| C4 | El brief usa "sponsor"; la guía lo prohíbe en texto público. | Guía |
| C5 | La semilla "IA en producción" lleva a búsquedas de OT (fuera de perfil). | Brief (perfil) |
| C6 | El slug `/ai-first-move` no contiene ningún término buscado en español. | Brief (marca) |
| C7 | La home actual usa "tú"; la guía exige "usted". | Guía |
| C8 | La guía de tono no cubre inglés y el brief define solo cliente latinoamericano: falta ICP y voz para EE. UU. | Por definir |
| C9 | "USD X + IVA" no funciona en EE. UU. | Por decidir |
| C10 | En agentes de IA, los SERPs premian "autonomous"; Cabana se posiciona en human-in-the-loop y pierde volumen. | Guía |
| C11 | La capacidad es de un cliente por servicio a la vez: mucha demanda de pago en EE. UU. podría superarla. | Por decidir |
| C12 | `/about`, `/careers` y `/privacidad` no están en la arquitectura objetivo (por ahora `/about` → `/como-trabajamos`; las otras dos se conservan). | Por confirmar |

## 3. Preguntas abiertas para dirección
1. ¿Se publica el precio en la web? En SEO y GEO conviene: casi nadie lo publica. ¿Cómo se expresa para EE. UU.?
2. Ruta IA en inglés: ¿se mantiene la marca? Recomendación: "Ruta IA — AI Opportunity Assessment" en title/H1, con slug `/en/ai-opportunity-assessment`.
3. ¿Mercado inglés en-US o inglés genérico? Define el hreflang.
4. ¿Qué frase reemplaza "no es una prueba de concepto / not a pilot" en AI First Move?
5. ¿Se puede poner el término en español junto al nombre en inglés en los títulos de capacidades?
6. ¿Dónde queda "Dashboards y analítica"? Hoy es un servicio y no está entre las 4 capacidades.
7. ¿Hay permiso escrito para nombrar clientes en los casos? ¿Hay casos publicables en inglés?
8. ¿Cuánto tiempo del equipo del cliente toma Ruta IA? La FAQ lo necesita.
9. ¿Se crean perfiles en Clutch y Consultancy.org, y se actualiza The Manifest, para construir la entidad de marca?
10. Redirects por confirmar: `data-health-check` → `/ruta-ia`, `data-analytics-use-case` → `/ai-first-move`, `dashboards-analytics-interfaces` → Data Engineering, `/about` → `/como-trabajamos`.
11. ¿Se mueven los posts de `/posts/<slug>` a `/blog/<slug>`? Hoy el costo es casi nulo.
12. ¿Cuáles son los dominios de SmartGo360 y Novitec?

## 4. Sin datos / accesos que faltan
| Falta | Impacto | Acceso necesario |
|---|---|---|
| DataForSEO | Sin volumen, dificultad ni tendencia reales; clusters indicativos | Cuenta y MCP de DataForSEO |
| Google Ads Keyword Planner | Mismo impacto que DataForSEO | Librería `google-ads`, developer token y customer ID |
| SERPs locales (CR, MX, CO) | Los resultados de búsqueda observados son de EE. UU. | DataForSEO con ubicación |
| AI Overviews, ChatGPT, Perplexity | GEO inferido, sin consulta directa | DataForSEO AI visibility o revisión manual |
| Moz y Bing Webmaster | Backlinks sin medir (Common Crawl: 0 dominios de referencia) | API keys |
| PageSpeed Insights | Timeout, sin datos de rendimiento | API key de PSI |
| CrUX | Sin datos por poco tráfico | No se resuelve con acceso |
| Enlaces de GSC | La API no los expone | Exportar manualmente desde la interfaz |
| GA4 de ruta-ai | No está en la propiedad 539625341 | ID de su propiedad |
| Repo/Vercel de ruta-ai | No se pueden aplicar sus 301 | Acceso al proyecto |

## 5. Siguiente paso sugerido
1. Dirección responde las preguntas 1–5 y 10.
2. Con DataForSEO, validar volúmenes y cerrar los slugs en inglés. En `redirects.csv` siguen marcados como PROVISIONAL, pero ya coinciden con `01-keyword-map-en.md`.
3. Arreglar lo técnico de bajo riesgo antes del rediseño: hreflang, 301 en `/es`, 404 de WordPress y robots.
