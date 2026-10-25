# Mapa de keywords · español (es-CR base + México y Colombia)

Fecha: 25 oct 2026 · Fases 1 y 2 · Solo investigación (no es copy final)

> **Calidad de datos, leer primero.** No hubo acceso a DataForSEO ni a Google Ads Keyword Planner (el script `keyword_planner.py` falla: falta la librería `google-ads` y no hay developer token confirmado). No hay volúmenes, dificultad ni tendencia medidos. Todo lo que dice "volumen" o "dificultad" en este documento es **estimado, sin DataForSEO**, cualitativo (alto / medio / bajo / casi nulo) e inferido de la composición de los SERPs. La herramienta de búsqueda disponible devuelve resultados **localizados en EE. UU.** aunque la consulta esté en español; los SERPs reales de Costa Rica, México y Colombia pueden diferir. No fue posible observar AI Overviews, ChatGPT ni Perplexity directamente. Ver §8.

---

## 1. Resumen por página

| Página (slug) | Término principal | Secundarios | Intención | Tipo de página que muestra el SERP | Recomendación |
|---|---|---|---|---|---|
| **Inicio** `/` | consultoría de inteligencia artificial Costa Rica | consultoría de IA para empresas; ingeniería de datos y consultoría de IA; consultoría de IA Latinoamérica | Comercial / navegacional de categoría | Mixto: noticias de ecosistema, directorios (Clutch, Consultancy.org, ensun), páginas de consultores individuales. Ninguna consultora local domina | Mantener en Inicio el término de categoría + país (el title actual ya lo usa). Es el único término comercial con geografía donde un sitio local puede competir. Variantes MX y CO no merecen páginas propias hoy (ver §6) |
| **Ruta IA** `/ruta-ia` | diagnóstico de IA para empresas | evaluación de preparación para IA; diagnóstico de datos para IA; hoja de ruta de IA; por dónde empezar con IA (puente desde blog) | Comercial (evaluar un servicio) | Mixto: páginas de servicio de consultoras (RSM Colombia "estrategia de datos e IA", gend.co, yourdevs, nordflux, Oracle) + artículos/glosarios ("modelo de madurez de IA") | Página de servicio con el término "diagnóstico de IA". "por dónde empezar con IA" es informativo: va al blog con enlace a Ruta IA. Evitar "madurez" como término principal: el SERP lo asocia a niveles tipo CMMI y Ruta IA no entrega un nivel de madurez |
| **AI First Move** `/ai-first-move` | llevar IA a producción | IA en producción (con contexto de empresa); primer caso de IA en producción; caso de inversión de IA; implementación de IA en empresas | Comercial | "IA en producción" a secas devuelve **manufactura / plantas** (Rockwell, Capgemini, INESEM): fuera de perfil (OT). "Piloto a producción" devuelve artículos (mayoría en inglés) | Página de servicio con "llevar IA a producción" / "primer caso de IA en producción". El término comparativo "piloto vs producción" va al blog (contiene "piloto/PoC", prohibidos en la página) |
| **Cómo trabajamos** `/como-trabajamos` | cómo implementar IA en una empresa (metodología) | la IA propone, una persona decide; IA con supervisión humana; método de implementación de IA | Informativa / evaluación de proveedor | Artículos y guías ("cómo implementar IA en tu empresa": itsitio, cyberclick, Vodafone) | No pelear el head term informativo con esta página. Optimizarla para marca + método ("cómo trabajamos con IA", "IA con supervisión humana") y dejar "cómo implementar IA en tu empresa" al artículo pilar del blog |
| **Capacidades** `/capacidades` (+4) | consultoría de datos e IA | ingeniería de datos Costa Rica; consultoría de datos; desarrollo de agentes de IA a medida; desarrollo de producto digital | Comercial | Páginas de servicio y noticias de empresas (Hakkoda, Altimetrik, Databricks, Rootstack). Agentes: listados "mejores agencias" + páginas de servicio | Hub con 4 subpáginas: cada subpágina toma su término ("ingeniería de datos" + Costa Rica, "consultoría de datos", "agentes de IA a medida", "desarrollo de producto digital"). Sin precio |
| **Casos** `/casos` | casos de éxito de inteligencia artificial en empresas | casos de IA en Latinoamérica; resultados de proyectos de datos | Informativa / prueba | Inventarios grandes (EY "100 casos rentables", Google Cloud "90 casos") y notas de prensa | No se puede ganar el head term con pocos casos. Optimizar cada caso como página propia con long tail (industria + problema + resultado), y la página índice como respaldo |

---

## 2. Semillas evaluadas

Volumen y dificultad: **estimado, sin DataForSEO**. Escala: alto / medio / bajo / casi nulo. "CR" es probable volumen casi nulo en casi todo; el brief pide no descartar por eso.

| Semilla / expansión | Vol. CR (est.) | Vol. MX+CO (est.) | Dificultad (est.) | Intención | Destino |
|---|---|---|---|---|---|
| por dónde empezar con IA (en mi empresa) | bajo | medio | media (blogs de medios y telcos) | Informativa | Blog pilar → Ruta IA |
| estrategia de IA para empresas | bajo | alto | alta (SAP, Salesforce, CIO, PwC) | Informativa | Blog pilar; Ruta IA como enlace |
| diagnóstico de datos para IA | casi nulo | bajo | baja-media | Comercial-informativa | Ruta IA (secundario) + blog "¿sus datos aguantan la IA?" |
| diagnóstico de IA / evaluación de preparación para IA | casi nulo | bajo-medio | media | Comercial | **Ruta IA (principal)** |
| evaluación de madurez de IA | casi nulo | bajo-medio | media | Comercial / informativa | No usar como principal (ver §1) |
| hoja de ruta de IA | casi nulo | bajo | media (SERP mayormente en inglés) | Comercial | Ruta IA (secundario) |
| datos listos para IA / preparación de datos para IA | casi nulo | medio | media (IBM, EY, datos.gob.es) | Informativa | Blog → Ruta IA |
| IA en producción | bajo | medio | n/a: SERP de manufactura | Ambigua (OT) | No usar a secas; usar "llevar IA a producción" |
| piloto vs producción IA / por qué fallan los PoC | casi nulo | bajo | baja en español (pocos resultados en español) | Informativa | **Blog** (oportunidad: hueco en español) → AI First Move |
| caso de negocio de IA / presentar IA a la junta | casi nulo | bajo | media (EY, Forbes AR, Genesys) | Informativa | **Blog** (término prohibido en Ruta IA) → AI First Move |
| consultoría de IA Costa Rica | bajo | n/a | **baja** (sin consultoras locales posicionadas) | Comercial | **Inicio** |
| consultoría de IA Latinoamérica | casi nulo | bajo | media (SERP de estudios, no proveedores) | Informativa de mercado | No page target; mención en Inicio |
| consultoría de IA México / Colombia | n/a | medio | media (directorios ensun, consultores independientes con páginas por ciudad) | Comercial local | Fuera de alcance por ahora (ver §6) |
| ingeniería de datos Costa Rica | bajo | n/a | baja (noticias de inversión extranjera, no páginas de servicio) | Comercial / empleo | Subpágina Data Engineering |
| agentes de IA a medida para empresas | bajo | medio | media-alta (listados "mejores agencias") | Comercial | Subpágina Custom AI Agents |
| casos de éxito IA empresas Latinoamérica | bajo | medio | alta (EY, Google) | Informativa | Casos (índice) + casos individuales |

Señal mixta en "consultoría de IA Costa Rica": el SERP también trae ofertas de empleo ("AI Strategy Consultant" en San José) y licitaciones (CAF/MTSS). Hay intención de empleo mezclada; no es un término 100 % de compra.

---

## 3. Clusters (por coincidencia de SERP observada)

Método: se compararon los dominios del top observado de cada consulta (no los 10 completos; la herramienta devuelve ~9 resultados y localizados en EE. UU.). Coincidencias registradas:

- `cio.com` aparece en: estrategia de IA, piloto vs producción, (implícito) caso de negocio → mismo universo de "liderazgo y gestión de IA".
- `ey.com` aparece en: caso de negocio/junta, datos listos para IA, casos de éxito.
- `gend.co` aparece en: por dónde empezar con IA y evaluación de madurez.
- `rsm.global/colombia` aparece en: diagnóstico de datos para IA; páginas de servicio tipo "estrategia de datos e IA" en el mismo SERP que "madurez".
- `itsitio.com` en: por dónde empezar y Latinoamérica.
- `andresospina.co` en: consultoría IA México y Colombia (patrón de páginas por ciudad).
- Hakkoda / Databricks / Rootstack en: ingeniería de datos CR y consultoría de datos CR.

Coincidencias de 2-3 dominios entre pares → "interlink" (no fusionar). Ningún par mostró ≥4 coincidencias observables, con una salvedad: con ~9 resultados y localización EE. UU., la medición es débil. Validar con DataForSEO.

### Cluster A · "Por dónde empezar" (pilar: blog) → servicio Ruta IA
- Pilar (blog): **¿Por dónde empezar con IA en su empresa?** (por dónde empezar con IA; cómo implementar IA en una empresa; estrategia de IA para empresas)
- Satélites (blog):
  - ¿Sus datos aguantan la IA? (datos listos para IA, preparación de datos para IA, diagnóstico de datos)
  - Por qué su idea favorita de IA puede no estar lista (priorizar oportunidades de IA)
  - Estrategia de IA para empresas medianas: decisiones, no herramientas
  - Checklist: ¿está su empresa lista para IA? (lead magnet del brief)
- Página de dinero: **/ruta-ia** (diagnóstico de IA para empresas)

### Cluster B · "Empezar bien / producción" (pilar: blog) → servicio AI First Move
- Pilar (blog): **Piloto vs. producción: por qué los PoC no consiguen presupuesto** (piloto vs producción IA, por qué fallan los PoC, prueba de concepto IA)
- Satélites (blog):
  - Cómo llevarle un caso de IA a la junta con números propios (caso de negocio de IA, business case IA, ROI de IA)
  - La IA propone, una persona decide (IA con supervisión humana, human-in-the-loop)
  - Qué significa poner IA en producción en una empresa mediana
- Página de dinero: **/ai-first-move** (llevar IA a producción)

### Cluster C · Capacidades (hub: /capacidades)
- /capacidades/data-engineering ← ingeniería de datos Costa Rica
- /capacidades/data-consulting ← consultoría de datos
- /capacidades/custom-ai-agents ← agentes de IA a medida (con el límite "la IA propone, una persona decide")
- /capacidades/digital-product ← desarrollo de producto digital / aplicaciones a la medida
- Slugs de subpáginas: proponer; el brief no los fija. Los nombres de capacidad van en inglés por regla de la guía, pero el término de búsqueda es en español: ver conflicto C3.

### Cluster D · Prueba (hub: /casos)
- Cada caso como página propia; índice /casos.

### Matriz de enlaces internos (mínimo)
| Desde | Hacia | Ancla sugerida |
|---|---|---|
| Blog pilar A y sus satélites | /ruta-ia | "diagnóstico de IA de 4 semanas" |
| Blog pilar B y sus satélites | /ai-first-move | "primer caso de IA en producción" |
| /ruta-ia | /ai-first-move | "AI First Move" (puente "Ruta IA le dijo por dónde empezar...") |
| /ai-first-move | /ruta-ia | "si aún no hay una idea elegida" (para quién no es) |
| /como-trabajamos | ambos servicios | nombres de servicio |
| /capacidades | 4 subpáginas + ambos servicios | nombre de capacidad |
| Cada caso | servicio o capacidad que lo produjo | nombre del servicio |
| Inicio | ambos servicios + /capacidades + /casos | las dos puertas |

---

## 4. SXO: tipo de página por término principal

| Término | Tipo dominante observado | Página propuesta | ¿Encaja? |
|---|---|---|---|
| consultoría de inteligencia artificial Costa Rica | Fragmentado (noticias, directorios, empleo) | Inicio | **Sí, con oportunidad**: no hay una página de servicio local dominante |
| diagnóstico de IA para empresas | Mixto servicio + glosario | Servicio (Ruta IA) | Sí |
| por dónde empezar con IA | Artículos | Blog | Sí (no usar como principal de Ruta IA) |
| estrategia de IA para empresas | Guías de grandes marcas | Blog | Sí (blog); servicio no ranquearía |
| llevar IA a producción | Artículos (en inglés mayormente) | Servicio (AI First Move) | **Parcial**: el SERP es informativo. Riesgo de mismatch; reforzar la página con una sección explicativa breve y apoyarla con el pilar B |
| IA en producción | Manufactura | — | **No**: intención OT, fuera de perfil |
| piloto vs producción | Artículos | Blog | Sí |
| caso de negocio de IA | Artículos / guías | Blog | Sí |
| cómo implementar IA en una empresa | Artículos | Blog (no Cómo trabajamos) | Sí |
| ingeniería de datos Costa Rica | Noticias de empresas + servicio | Subpágina capacidad | Sí |
| agentes de IA a medida | Listados "mejores" + servicio | Subpágina capacidad | Parcial: Google premia listados |
| casos de éxito IA | Inventarios grandes | Casos | Parcial: apostar al long tail |

---

## 5. Competidores en español

| Competidor | Dónde aparece | Posicionamiento | Lectura para Cabana |
|---|---|---|---|
| **Datasys Group** (CR, desde 1998, 9 países) | Prensa CR (La República, Summa, DPL News) | Integrador de soluciones TI; IA, RPA, NOC/SOC; fuerte en sector público y telecom (polémica de licitaciones 5G) | Compite en marca local, no en "diagnóstico de IA". Perfil de cliente distinto (gobierno, grandes) |
| **SmartGo360** | No apareció en ningún SERP consultado | — | Sin visibilidad orgánica observable. Confirmar dominio con dirección |
| **Novitec** | No apareció en ningún SERP consultado | — | Igual que el anterior. Confirmar dominio |
| **Opinosis Analytics** (Salt Lake City, EE. UU.) | G2, Thomasnet; no en SERPs en español | AI readiness assessment, roadmap, formación de líderes, soluciones a medida | Competidor del mercado en inglés; su oferta "readiness assessment" es el análogo directo de Ruta IA |
| **RSM Colombia** | SERP de diagnóstico de datos / estrategia de IA | "Evaluación de madurez en datos e IA" + hoja de ruta | El competidor de contenido más cercano a Ruta IA en español |
| **gend.co (versión es)** | por dónde empezar; madurez | "Asesoría en IA para líderes que necesitan claridad" | Mensaje muy parecido al de Ruta IA |
| **yourdevs.net, nordflux.de/es** | madurez de IA | 4 fases con "priorización de casos de uso por ROI" | Usan exactamente los términos que Ruta IA tiene prohibidos: diferencial claro |
| **Hakkoda, Altimetrik, Rootstack** | ingeniería / consultoría de datos CR | Nearshore de datos para EE. UU. (Hakkoda, Altimetrik); Rootstack BI | Ocupan "ingeniería de datos Costa Rica" con noticias, no con páginas de servicio orientadas a empresas locales |
| **BCG (oficina CR)** | consultoría de IA CR | Gran consultora regional | Fuera del segmento de precio; aparece por noticias |
| **Andrés Ospina** (consultor individual) | consultoría IA México / Colombia | Páginas por ciudad (Bogotá, Medellín, Barranquilla, CDMX) | Muestra que el SEO local por ciudad funciona en MX/CO con poca autoridad |
| **Directorios** (Clutch, Consultancy.org, ensun) | consultoría de IA CR / MX | Listados | Acción: tener perfil en Clutch y Consultancy.org (Costa Rica · AI) |

---

## 6. México y Colombia

- Los SERPs de "consultoría de IA México/Colombia" muestran directorios y consultores con páginas por ciudad. Hay intención comercial real (estimado: volumen medio, sin DataForSEO).
- Recomendación: **no crear páginas por país en esta fase**. La capacidad de entrega es de un cliente por servicio a la vez (brief §8) y el objetivo es pocos leads calificados. Mencionar "Costa Rica y Latinoamérica" en Inicio y en el schema `areaServed`. Reevaluar con datos de volumen.
- Vocabulario: en MX y CO se usa "inteligencia artificial" completo más que "IA" en títulos de proveedores; usar ambas formas en title + H1/primer párrafo.

---

## 7. GEO (visibilidad en respuestas de IA)

Límites honestos: no se pudo consultar ChatGPT, Perplexity ni ver AI Overviews. Lo observable es la respuesta sintetizada del buscador disponible y las fuentes que cita.

- **Cabana Data no aparece** en ninguna de las 20 consultas realizadas, ni en la consulta de marca "Cabana Data Costa Rica" (devuelve cabañas turísticas). Problema de entidad: "Cabana" es ambiguo; hay que reforzar la entidad (schema `Organization` con `sameAs` a LinkedIn, Clutch, perfiles de fundadores; nombre completo "Cabana Data" siempre junto).
- **Quién aparece en su lugar** en las respuestas sintetizadas: CIO.com (es), EY, SAP, Salesforce, IBM, Platzi, RSM Colombia, Cyberclick, Vodafone, itsitio, CAF/MICITT (contexto CR), Clutch y Consultancy.org (cuando se pregunta por proveedores en CR).
- Las respuestas sobre "por dónde empezar" repiten la receta "empiece con un caso de uso pequeño, haga un piloto y mida". Contradice el mensaje de Cabana (no PoC; oportunidades primero). Un artículo citable que diga explícitamente lo contrario, con datos (p. ej. la encuesta de Omdia: solo 9 % de empresas dice que más de la mitad de sus PoC llegó a producción), tiene buen potencial de cita.
- Para ser citable: los hechos de cada servicio (4 semanas, 5 oportunidades, USD 12,000 + IVA; 10 semanas, 1 caso en producción, USD 24,500 + IVA) en texto plano, frases autosuficientes, FAQ con respuestas de 2-3 frases. Coincide con la guía de tono.
- Revisar en Fase 0 que `robots.txt` no bloquee GPTBot, PerplexityBot, ClaudeBot, Google-Extended; evaluar `llms.txt`.

---

## 8. Artículos de blog recomendados (incluye términos prohibidos en páginas de servicio)

| # | Artículo | Términos que captura | Término prohibido que absorbe | Enlaza a |
|---|---|---|---|---|
| 1 | ¿Por dónde empezar con IA en su empresa? (pilar A) | por dónde empezar con IA, cómo implementar IA | — | Ruta IA |
| 2 | ¿Sus datos aguantan la IA? | datos listos para IA, diagnóstico de datos para IA | — | Ruta IA |
| 3 | Por qué su idea favorita de IA puede no estar lista | priorizar oportunidades de IA, **casos de uso de IA** | "casos de uso" (prohibido en Ruta IA) | Ruta IA, AI First Move |
| 4 | Piloto vs. producción: por qué los PoC no consiguen presupuesto (pilar B) | **piloto vs producción, prueba de concepto IA, PoC** | "PoC", "piloto", "prueba de concepto" (prohibidos en AI First Move) | AI First Move |
| 5 | Cómo llevarle un caso de IA a la junta con números propios | **caso de negocio de IA, business case IA, ROI de IA** | "business case", "ROI" (prohibidos en Ruta IA) | AI First Move |
| 6 | La IA propone, una persona decide | IA con supervisión humana, **agentes autónomos: riesgos** | "agente autónomo" (prohibido en AI First Move) | Cómo trabajamos, AI First Move |
| 7 | Estrategia de IA para empresas medianas | estrategia de IA para empresas | — | Ruta IA |
| 8 | Checklist: ¿está su empresa lista para IA? (lead magnet) | evaluación de preparación para IA | — | Ruta IA |

Los artículos 3, 4, 5 y 6 cumplen la regla de las instrucciones: el término prohibido se explica en el blog y enlaza al servicio, sin aparecer en la página de servicio.

---

## 9. Conflictos SEO vs. brief/guía (registrados, no resueltos)

- **C1 · "casos de uso" en Ruta IA.** Es como el mercado nombra lo que Ruta IA entrega (yourdevs, nordflux, Sayers, BDO: "priorización de casos de uso"). Manda la guía: Ruta IA dice "oportunidades". Mitigación: artículo 3.
- **C2 · "piloto/PoC".** El SERP de "piloto a producción" es donde está el comprador de AI First Move. Manda la guía. Mitigación: artículo 4.
- **C3 · Nombres de capacidades en inglés.** Data Engineering / Data Consulting se buscan en español ("ingeniería de datos", "consultoría de datos"). La guía exige el nombre en inglés. Propuesta para decidir: nombre en inglés como etiqueta y término en español en title, H1 descriptivo y primer párrafo ("Data Engineering: ingeniería de datos para..."). ¿Lo acepta dirección?
- **C4 · "Sponsor".** El brief usa "sponsor"; la guía lo prohíbe en texto público. No tiene valor SEO; usar "quien decide la inversión".
- **C5 · "IA en producción".** Semilla del brief, pero el SERP es de manufactura/OT (fuera de perfil). Recomendado: "llevar IA a producción". No es conflicto con la guía, sí con el supuesto del brief.
- **C6 · Precio publicado.** Decisión pendiente en el brief. Para GEO, publicar "USD 12,000 + IVA" como texto ayuda a ser citado en respuestas de "cuánto cuesta un diagnóstico de IA". Recomendación SEO: opción (a). Decide dirección.
- **C7 · Slug `/ai-first-move`.** El nombre en inglés no contiene ningún término buscado en español. Aceptable (marca), pero el title debe llevar "primer caso de IA en producción".

---

## 10. Faltantes de datos y accesos

- DataForSEO (volumen CR/MX/CO/LATAM, KD, tendencia, SERP localizado, LLM mentions).
- Google Ads developer token + `pip install google-ads` para el Keyword Planner (alternativa gratuita para volúmenes por país).
- Search Console de cabanadata.com y ruta-ai.cabanadata.com (lo cubre Fase 0): consultas reales con impresiones validarían o reemplazarían este mapa.
- Dominios de SmartGo360 y Novitec (no aparecieron en búsquedas).
- Acceso a ChatGPT/Perplexity para un muestreo GEO real.
