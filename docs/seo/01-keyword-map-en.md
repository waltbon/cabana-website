# Mapa de keywords · en-US (Estados Unidos)

Fecha: 25 oct 2026 · Alcance: Fase 1 de `docs/instructions/01-investigacion-seo.md`, solo inglés (EE. UU.) · Mercado tratado como propio, no como traducción del español.

## 0. Calidad de los datos (leer primero)

- **Sin DataForSEO.** No hay volumen, dificultad (KD) ni tendencia medidos.
- **Keyword Planner no disponible:** `keyword_planner.py` falla (falta la librería `google-ads`) y `~/.config/claude-seo/google-api.json` no tiene developer token de Google Ads ni customer ID. Aunque se instale la librería, sin token no corre.
- **Fuente usada:** WebSearch (resultados de EE. UU.) sobre las semillas y sus expansiones. La herramienta devuelve los ~9 primeros resultados orgánicos, no el layout completo del SERP (no muestra AI Overview, People Also Ask ni anuncios). Por eso el tipo de página en el SERP se infiere de los URLs y títulos devueltos.
- **Todas las estimaciones de volumen y dificultad son cualitativas**: "estimado, sin DataForSEO". Escala: Alto / Medio / Bajo / Muy bajo (nicho). No se inventan cifras.
- **Clustering:** el solapamiento de SERP se juzgó comparando los dominios y URLs del top ~9 de cada consulta, no con la comparación por pares de 10 URLs que pide el método `seo-cluster`. Es indicativo.
- Para validar antes de salir en vivo: correr DataForSEO (o Keyword Planner con token) sobre la lista de la sección 6.

## 1. Hallazgos clave

1. **El mercado de EE. UU. usa "AI readiness assessment" y "AI opportunity assessment" como nombre genérico de lo que es Ruta IA.** Hay oferta abundante de diagnósticos de precio fijo de 2 a 8 semanas (Redapt, LuMay, Brennan IT, Sopra Steria en Azure Marketplace, Clarista, Alice Labs). Ruta IA compite en una categoría reconocida; su diferencial tiene que ser el "si sus datos lo soportan" y el precio publicado.
2. **El SERP de "AI readiness assessment" es mixto y sesgado a informativo** (guías, checklists descargables, frameworks: Make, Acumatica, Atlan, 8th Light). El de **"AI opportunity assessment" es transaccional** (páginas de servicio y listados de marketplace). Recomendación: la página de servicio ataca "AI opportunity assessment"; "AI readiness" va a un artículo/checklist del blog (coincide con el lead magnet del brief §7).
3. **"AI pilot to production" es una conversación muy activa en EE. UU.** ("pilot purgatory", "why AI pilots fail", estadísticas MIT NANDA / IDC / S&P). El SERP es 100% informativo (blogs, revistas). Es la mejor puerta de contenido hacia AI First Move, pero el brief prohíbe "pilot" y "PoC" como descripción del servicio → conflicto registrado (sección 7).
4. **"Mid-market" es el término de EE. UU., no "mid-sized".** Los listados ("best AI consulting firms for mid-market companies") lo usan de forma dominante y definen mid-market como USD 50M–1B de ingresos. Recomendación: usar "mid-market" y "mid-sized" como variantes, con "mid-market" en títulos.
5. **Los términos de capacidades son muy competidos y dominados por listicles** ("top data engineering consulting companies", "15 top AI agent development companies"). Cabana no tiene autoridad para competir por la cabeza; apuntar a long tail con calificador (mid-market, fixed-price, for ERP/CRM data).
6. **GEO: Cabana Data no aparece** en ningún resultado para los términos principales. La única huella en EE. UU. es un perfil en The Manifest que la describe como "big data analytics company" de 2–9 personas, sin mención de IA. Esa descripción desactualizada es la que tiende a leer un LLM.

## 2. Mapa por página

Leyenda de intención: T = transaccional/comercial, I = informativa, N = navegacional.

### 2.1 Home

| Campo | Valor |
|---|---|
| Término principal | **AI consulting for mid-market companies** |
| Secundarios | AI and data consulting firm; where to start with AI (como promesa, no como objetivo de ranking); AI strategy and implementation; mid-sized companies |
| Intención | Comercial (investigación de proveedor) |
| Tipo de página en SERP | Mixto: listicles "best/top firms" (Perceptive Analytics, DataToBiz, Sombra, Phos AI Labs) + home/landing de consultoras (Wipfli, Eric Brown) |
| Volumen / KD | Medio / Alta (estimado, sin DataForSEO) |
| Recomendación | La home se optimiza para marca + el término comercial, con las dos puertas. "Where to start with AI" es informativo (SERP: Salesforce, Entrepreneur, Amii, Substack) → va al blog. Conseguir presencia en los listicles mid-market (outreach) vale más que rankear la home por la cabeza. |
| Slug | `/en` (raíz del locale) |

### 2.2 Ruta IA

| Campo | Valor |
|---|---|
| Término principal | **AI opportunity assessment** |
| Secundarios | AI readiness assessment (variante, peso en blog); AI data readiness assessment; AI strategy assessment fixed price; AI roadmap consulting; where to start with AI (puente desde blog) |
| Intención | Transaccional/comercial |
| Tipo de página en SERP | Páginas de servicio de consultoras y listados de marketplace (Redapt, Decode, Quisitive, Azure/AWS Marketplace, Upwork). Coincide con página de servicio. |
| Volumen / KD | Bajo-medio / Media (estimado, sin DataForSEO). "AI readiness assessment": Medio / Media-alta, pero intención mixta. |
| Recomendación | Página de servicio con la estructura fija. El término "opportunity" calza exactamente con el glosario (Ruta IA entrega oportunidades). Atención: varios competidores describen su entregable como "ranked list of use cases" o "business case"; la página de Cabana no puede copiar ese vocabulario. |
| Slug propuesto | `/en/ai-opportunity-assessment` si se decide nombre en inglés; `/en/ruta-ia` si se conserva la marca. Ver pregunta abierta P1. |

### 2.3 AI First Move

| Campo | Valor |
|---|---|
| Término principal | **first AI use case in production** (formulación del comprador: "get AI into production") |
| Secundarios | AI in production; AI implementation for mid-market; AI investment case for the board; production AI consulting; fixed-price AI implementation |
| Intención | Comercial, con mucha investigación informativa alrededor |
| Tipo de página en SERP | "AI in production"/"pilot to production": artículos y guías (MindStudio, RaftLabs, BizTech, SoftwareSeni). Pocas páginas de servicio. |
| Volumen / KD | Bajo / Media (estimado, sin DataForSEO). El volumen real está en "AI pilot to production" y "why AI pilots fail" (Medio, informativo). |
| Recomendación | Página de servicio dirigida a marca + "first AI use case in production" + "AI investment case". La demanda informativa ("pilot to production", "AI proof of concept vs production") va al blog con enlace al servicio. "Use case" sí está permitido aquí. |
| Slug propuesto | `/en/ai-first-move` (marca en inglés, coincide con el slug en español; sin decisión pendiente) |

### 2.4 How we work

| Campo | Valor |
|---|---|
| Término principal | **human-in-the-loop AI implementation** (principio "AI proposes, a person decides") |
| Secundarios | AI consulting approach; evidence-based AI strategy; AI governance for mid-market |
| Intención | Navegacional/de confianza (el visitante ya está en el sitio). "Human in the loop AI" global es informativo (Medio, sin DataForSEO). |
| Tipo de página en SERP | Para "human in the loop AI": artículos y glosarios. No hay SERP propio para "how we work". |
| Recomendación | Página de confianza sin ambición de rankear la cabeza; optimizarla para citabilidad en LLMs (método explicado en hechos). Un artículo de blog "Human-in-the-loop AI: AI proposes, your team decides" captura la demanda informativa. |
| Slug propuesto | `/en/how-we-work` (patrón estándar en EE. UU.; "approach" es alternativa más corta pero "how we work" coincide con lo que la gente navega) |

### 2.5 Capabilities (+4)

| Página | Término principal | Secundarios | SERP | Vol./KD (estimado, sin DataForSEO) | Slug |
|---|---|---|---|---|---|
| Hub | **AI and data consulting services** | custom AI and data projects; data and AI services mid-market | Listicles + páginas de servicio | Medio / Alta | `/en/capabilities` |
| Data Consulting | **data strategy consulting** | data consulting services; data analytics consulting mid-market | Páginas de servicio + "top firms" | Medio / Alta | `/en/capabilities/data-consulting` |
| Data Engineering | **data engineering consulting** | data pipeline consulting; data engineering services mid-sized companies | Listicles "top data engineering companies" (Beyond Key, Cygnet) + servicios (Mphasis, Trigent) | Medio / Alta | `/en/capabilities/data-engineering` |
| Digital Product | **custom software development for data products** | digital product development; internal tools development | Agencias y directorios (Clutch, DesignRush) | Alto / Muy alta | `/en/capabilities/digital-product` |
| Custom AI Agents | **custom AI agent development** | AI agent development services; human-in-the-loop AI agents | Listicles (ClickUp, LowCode Agency) + agencias offshore. SERP lleno de "autonomous" | Medio-alto / Alta | `/en/capabilities/custom-ai-agents` |

Recomendación: "Capabilities" es el término que pide el brief; en EE. UU. "Services" es más buscado, pero "services" confundiría los tres niveles de la oferta (los servicios son Ruta IA y AI First Move). Se mantiene `capabilities`. Los nombres de capacidad ya están en inglés, los slugs salen directos. Custom AI Agents: el SERP premia "autonomous agents"; Cabana debe diferenciarse por "human-in-the-loop" (ver conflicto C3).

### 2.6 Cases

| Campo | Valor |
|---|---|
| Término principal | **AI consulting case studies** |
| Secundarios | data engineering case study; AI in production results; mid-market AI results |
| Intención | Comercial (validación) |
| Tipo de página en SERP | Páginas de casos de consultoras + artículos de blog con resultados (TomorrowToday, ViitorCloud, AE Studio) |
| Volumen / KD | Bajo / Media (estimado, sin DataForSEO) |
| Recomendación | Índice de casos + una URL por caso con cifra verificable en el title ("Cut X hours per week…"). Las cifras con unidad son lo que citan los LLMs. |
| Slug propuesto | `/en/case-studies` (en EE. UU. "case studies" es el término dominante; "cases" no se usa en inglés con ese sentido) |

## 3. Clusters (pilar + satélites)

| Cluster | Pilar (página) | Satélites (blog) | Solapamiento observado |
|---|---|---|---|
| A. Saber por dónde empezar | Ruta IA (`ai-opportunity-assessment`) | "Where to start with AI in a mid-market company"; "AI readiness assessment: checklist" (lead magnet); "Is your data ready for AI?"; "AI use cases for mid-market companies" (C1) | "AI opportunity assessment" y "AI roadmap consulting fixed price" comparten tipo de resultado (servicio). "AI readiness" y "data readiness" comparten checklists (Atlan, 8th Light) → mismo satélite o dos muy enlazados |
| B. Empezar bien / producción | AI First Move | "AI pilot to production: why most stall"; "AI proof of concept vs production" (C2); "How to build an AI investment case for the board"; "How to measure AI ROI with your own numbers" (C1) | "pilot to production" y "PoC vs production" comparten dominios (RaftLabs, SoftwareSeni, MindStudio) → un solo artículo pilar de blog con secciones |
| C. Método y gobierno | How we work | "Human-in-the-loop AI: AI proposes, your team decides" | Débil; independiente |
| D. Capacidades | Capabilities hub + 4 | "Data engineering for AI in mid-market companies"; "Custom AI agents with human approval" | Listicles compartidos entre data engineering y "AI & data analytics consulting mid-market" (Cygnet) |
| E. Proveedor | Home | "How to choose an AI consulting firm for a mid-market company" (vs. MBB y freelancers) | Listicles "best AI consulting firms mid-market" |

Enlazado interno: cada satélite enlaza a su pilar en el primer tercio; A → B con el puente "Ruta IA told you where to start. AI First Move is starting." (adaptado al nombre final de Ruta IA).

## 4. Competidores en SERPs de EE. UU.

| Tipo | Ejemplos | Dónde aparecen |
|---|---|---|
| Diagnóstico de IA a precio fijo | Redapt (AI Opportunity Assessment), LuMay (4 semanas, precio fijo), Clarista (fixed-bid desde USD 50K), Alice Labs, Brennan IT / Sopra Steria / T4G / Penthara (Azure Marketplace) | AI opportunity assessment, AI roadmap fixed price |
| Consultoras mid-market de EE. UU. | Wipfli, Eric Brown, Centric Consulting, Slalom, RTS Labs, Perceptive Analytics, Phos AI Labs, Mobio Solutions, TomorrowToday | AI strategy consulting mid-market, best firms lists |
| Contenido "pilot to production" | MindStudio, RaftLabs, SoftwareSeni, Entagl, BizTech | AI in production / pilot to production |
| Desarrollo de agentes / data engineering | LowCode Agency, BotsCrew, Intuz, Markovate, Trigent, Mphasis, Beyond Key | Capacidades |
| Contenido de readiness | Make, Acumatica, Atlan, 8th Light, CAI | AI readiness / data readiness |

Lectura: los competidores directos son consultoras mid-market con un diagnóstico empaquetado. Casi ninguno publica precio (Clarista es excepción con "from", que Cabana no puede usar). Publicar "USD 12,000" fijo sería un diferencial claro en EE. UU. (refuerza la opción (a) de la decisión pendiente de precio del brief §5).

## 5. GEO (visibilidad en respuestas de IA)

- **Método y límite:** no hubo acceso a AI Overviews, ChatGPT ni Perplexity en vivo ni a herramientas de LLM mentions (DataForSEO). Se usó como proxy el motor de búsqueda con resumen de la herramienta WebSearch. Esto **no** equivale a medir AI Overviews.
- **Resultado:** Cabana Data no aparece en ninguna respuesta para AI opportunity assessment, AI readiness assessment, AI strategy consulting mid-market, AI pilot to production, data engineering consulting ni custom AI agent development.
- **Quién aparece:** listicles de proveedores (Perceptive Analytics, DataToBiz, Sombra, Phos AI Labs, ClickUp), marketplaces (Azure, AWS) y blogs con estadísticas citables (MIT NANDA 95%, IDC 4 de 33, S&P 46%, RAND 80%).
- **Búsqueda de marca "Cabana Data AI consulting":** solo The Manifest, con descripción antigua (BI, big data, software a medida; sin IA). Otros resultados son homónimos.
- **Acciones GEO:** actualizar perfiles de The Manifest, Clutch, LinkedIn y G2 con la nueva oferta; `llms.txt` con servicios, precio, duración y entregables como hechos (lo ve Fase 0); bloques de respuesta de 40–60 palabras con el término principal; datos propios citables (p. ej. cifras de casos con unidad y periodo); pedir inclusión en listicles mid-market.

## 6. Recomendaciones de blog (incluye términos prohibidos en páginas)

| Artículo (título de trabajo) | Término objetivo | Enlaza a | Nota |
|---|---|---|---|
| Where to start with AI in a mid-market company | where to start with AI | Ruta IA | Promesa central |
| AI readiness checklist for mid-market companies | AI readiness assessment / checklist | Ruta IA | Lead magnet del brief §7 |
| Is your data ready for AI? | data readiness for AI | Ruta IA | |
| AI use cases for mid-market companies | AI use cases | AI First Move (no Ruta IA) | C1: término prohibido en Ruta IA |
| AI pilot to production: why most pilots stall | AI pilot to production | AI First Move | C2 |
| AI proof of concept vs production | AI proof of concept | AI First Move | C2 |
| How to build an AI investment case your board will fund | AI business case / AI investment case | AI First Move | "business case" prohibido en Ruta IA, no en blog |
| How to measure AI ROI with numbers from your own operation | AI ROI | AI First Move | C1 |
| Human-in-the-loop AI: AI proposes, your team decides | human in the loop AI | How we work | |
| How to choose an AI consulting firm (mid-market) | AI consulting firm mid-market | Home | |

Lista para medir cuando haya DataForSEO: todos los términos de las secciones 2 y 6, más "AI strategy consulting", "AI readiness assessment cost", "AI consulting pricing", "fractional AI consultant" (alternativa que compite por el mismo comprador).

## 7. Conflictos con el brief o la guía (registrados, no resueltos)

- **C1 · "use cases", "business case", "ROI" (prohibidos en Ruta IA):** tienen demanda real en EE. UU. y el propio SERP de "AI opportunity assessment" describe entregables como "use cases" y "business case". Se respetan: van al blog y enlazan a AI First Move, no a Ruta IA.
- **C2 · "pilot", "PoC", "proof of concept" (prohibidos como descripción de AI First Move):** "AI pilot to production" es la conversación con más tracción en EE. UU. Propuesta: la página puede decir "not a proof of concept" como diferenciador (el brief §4.3 lo usa así), pero no describirse como piloto; la demanda va a artículos del blog. Validar con dirección si "not a pilot" en la página es aceptable.
- **C3 · "autonomous agent":** el SERP de "custom AI agent development" premia "autonomous/agentic". Cabana no puede prometerlo; se posiciona con "human-in-the-loop". Implica menos volumen capturable.
- **C4 · La guía de tono no cubre inglés** ("la versión en inglés se trabajará aparte"). Los briefs en-US asumen: "you" directo, profesional, mismas reglas de cifras y glosario traducido. Falta una guía de tono en inglés.
- **C5 · Precio con impuesto:** "USD X + IVA" no tiene sentido para un comprador de EE. UU. (no hay IVA; sales tax normalmente no aplica a servicios profesionales B2B transfronterizos). Hace falta decidir la forma: "USD 12,000, fixed price (plus applicable taxes)". Pregunta para dirección/finanzas.
- **C6 · Perfil del cliente:** el brief define cliente en Latinoamérica. Para EE. UU. no hay definición de mercado objetivo (¿hispanos en EE. UU.? ¿empresas de EE. UU. con operación en LATAM? ¿mid-market de EE. UU. en general?). Afecta todos los briefs.
- **C7 · Capacidad:** brief §8 dice un cliente por servicio a la vez. Pautar en EE. UU. puede generar volumen que no se puede atender.

## 8. Preguntas abiertas

- **P1. Nombre de Ruta IA en inglés.** Opciones: (a) mantener "Ruta IA" (el brief dice que es la única excepción a los nombres en inglés, decidido para español); en EE. UU. no tiene significado ni búsqueda y "IA" se lee como error de "AI". (b) Nombre en inglés propio (p. ej. "AI Route" o descriptor "AI Opportunity Assessment"). (c) Híbrido: marca "Ruta IA" + descriptor fijo "AI Opportunity Assessment" en H1/title, slug descriptivo. Recomendación SEO: (c) con slug `/en/ai-opportunity-assessment`. Decide dirección.
- P2. ¿El sitio en inglés apunta a EE. UU. (en-US) o a inglés general? Define hreflang (`en-US` vs `en`) — coordinar con Fase 0.
- P3. ¿Hay casos publicables con cliente de EE. UU. o en inglés? Sin ellos la página de casos tiene poco peso para ese mercado.
- P4. Forma del precio para EE. UU. (C5) y si se publica.
- P5. ¿Aceptable "not a proof of concept / not a pilot" como frase de contraste en AI First Move? (C2)
