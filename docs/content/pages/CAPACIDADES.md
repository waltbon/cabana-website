# Copy web · Capacidades (v1 borrador)

Oct 25, 2026 · @Walter Bonilla

## Cómo leer este borrador

Copy de cinco páginas: el hub `/capacidades` y sus cuatro subpáginas. Claves `capacidades.<seccion>` para el hub y `capacidades.<capacidad>.<seccion>.<elemento>` para cada subpágina.

- **Fuentes:** brief de Marketing v1.0 (§1.1 y §5), guía de tono, keyword map `es`, brief SEO `capacidades.es.md`, `redirects.csv` y las páginas `/services/*` actuales.
- **Términos SEO:** hub "consultoría de datos e IA"; subpáginas "consultoría de datos", "ingeniería de datos Costa Rica" (la mejor oportunidad del sitio), "desarrollo de aplicaciones a la medida" y "agentes de IA a medida para empresas".
- **Regla de títulos (recomendada, por confirmar):** nombre en inglés como marca y término en español en title y H1, por ejemplo "Data Engineering · Ingeniería de datos en Costa Rica".
- **Sin precio** en ninguna de las cinco páginas. Todas cierran con "Agendar una conversación" para cotizar.
- **Estructura de cada subpágina:** qué resolvemos → qué hacemos → con qué → un caso con cifra → cómo se cotiza → CTA.

## Hub · /capacidades

### Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `capacidades.meta.title` | Consultoría de datos e IA a medida \| Cabana Data | 48 caracteres |
| `capacidades.meta.description` | Data Consulting, Data Engineering, Digital Product y Custom AI Agents: proyectos de datos e IA a medida para empresas con decisión y presupuesto. | 145 caracteres |
| `capacidades.meta.ogTitle` | Capacidades de Cabana Data: datos, aplicaciones y agentes de IA |  |
| `capacidades.meta.ogDescription` | Proyectos de datos e IA cotizados a medida, con el mismo equipo de Ruta IA y AI First Move. |  |
| Slug | `/capacidades` | 301 desde `/services` |
| H1 | Capacidades: consultoría de datos e IA para proyectos a medida |  |

### Apertura

| Clave | Texto |
| --- | --- |
| `capacidades.hero.eyebrow` | Proyectos a medida |
| `capacidades.hero.title` | Capacidades: consultoría de datos e IA para proyectos a medida |
| `capacidades.hero.body` | Si ya sabe qué quiere construir y tiene el presupuesto aprobado, lo cotizamos a medida. Es el mismo equipo que entrega Ruta IA y AI First Move. |
| `capacidades.hero.proof` | Más de 50 flujos de datos (pipelines) en Google BigQuery funcionando en producción. |

### Las cuatro capacidades

| Clave | Texto |
| --- | --- |
| `capacidades.items[0].name` | Data Consulting |
| `capacidades.items[0].term` | Consultoría de datos |
| `capacidades.items[0].body` | Gobierno, calidad y arquitectura de sus datos, y una hoja de ruta de inversión en datos. |
| `capacidades.items[1].name` | Data Engineering |
| `capacidades.items[1].term` | Ingeniería de datos |
| `capacidades.items[1].body` | Integración de sus sistemas, data warehouse, flujos automáticos y dashboards en Power BI o Looker. |
| `capacidades.items[2].name` | Digital Product |
| `capacidades.items[2].term` | Aplicaciones a la medida |
| `capacidades.items[2].body` | Plataformas web y móviles construidas desde su proceso real, listas para producción. |
| `capacidades.items[3].name` | Custom AI Agents |
| `capacidades.items[3].term` | Agentes de IA a medida |
| `capacidades.items[3].body` | Agentes conectados a sus datos que preparan el trabajo. Su equipo aprueba lo que se ejecuta. |
| `capacidades.items[*].link` | Ver la capacidad |

### Puente a los servicios

| Clave | Texto |
| --- | --- |
| `capacidades.bridge.title` | ¿Todavía no tiene decisión o presupuesto? |
| `capacidades.bridge.items[0]` | Si no sabe por dónde empezar con IA, empiece con Ruta IA: 4 semanas y precio fijo. |
| `capacidades.bridge.items[1]` | Si ya eligió la idea y le falta la aprobación de la junta, AI First Move la lleva a producción en 10 semanas, con precio fijo. |

### Tecnologías (reemplaza "Socios Tecnológicos Clave")

Logos agrupados, con menos peso visual que los bloques de capacidades.

| Clave | Texto |
| --- | --- |
| `capacidades.stack.title` | Las tecnologías con que trabajamos |
| `capacidades.stack.intro` | Elegimos la tecnología según su operación. Google Cloud es nuestro estándar. |
| `capacidades.stack.groups[0]` | Datos y analítica: Google BigQuery, Power BI, Looker |
| `capacidades.stack.groups[1]` | Nube: Google Cloud, Azure, AWS, Vercel |
| `capacidades.stack.groups[2]` | Backend: Node.js, NestJS, Python, .NET, TypeScript |
| `capacidades.stack.groups[3]` | Frontend y móvil: React, Next.js, Angular, React Native |
| `capacidades.stack.groups[4]` | Agentes de IA: LangChain |

### Cómo cotizamos y CTA

Estos cuatro textos se reutilizan en las cuatro subpáginas.

| Clave | Texto |
| --- | --- |
| `capacidades.pricing.title` | Cómo cotizamos |
| `capacidades.pricing.body` | Cada proyecto se cotiza a medida, después de entender el alcance con su equipo. No hay precio de lista ni paquetes. |
| `capacidades.cta.title` | Cuéntenos qué quiere construir |
| `capacidades.cta.body` | En una conversación de 20 minutos con quien decide la inversión, revisamos el alcance y le explicamos cómo lo cotizaríamos. |
| `capacidades.cta.button` | Agendar una conversación |

## Data Consulting · /capacidades/consultoria-de-datos

**Posicionamiento:** hoy esta página ofrece "evaluación de preparación para IA" y "diagnóstico de datos", que son la promesa de Ruta IA. Se retiran y Data Consulting queda para un problema de datos ya identificado: gobierno, calidad, arquitectura y métricas. La pregunta "¿por dónde empiezo con IA?" siempre lleva a Ruta IA.

### Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `capacidades.dataConsulting.meta.title` | Data Consulting · Consultoría de datos \| Cabana Data | 52 caracteres |
| `capacidades.dataConsulting.meta.description` | Consultoría de datos en Costa Rica: gobierno y calidad de datos, arquitectura objetivo y una hoja de ruta de inversión en datos. Cotización a medida. | 150 caracteres |
| Slug | `/capacidades/consultoria-de-datos` | 301 desde `/services/data-consulting` y `/services/data-strategy` |
| H1 | Data Consulting · Consultoría de datos para decidir con números confiables |  |

### Copy

| Clave | Texto |
| --- | --- |
| `capacidades.dataConsulting.hero.title` | Data Consulting · Consultoría de datos para decidir con números confiables |
| `capacidades.dataConsulting.hero.subtitle` | Cuando cada área llega a un número distinto, el problema no es la herramienta. Ordenamos sus datos para que la empresa decida con una sola versión de los números. |
| `capacidades.dataConsulting.problems.title` | Cuándo hace falta una consultoría de datos |
| `capacidades.dataConsulting.problems.items[0].title` | Cada área tiene su versión de los números |
| `capacidades.dataConsulting.problems.items[0].body` | Las reuniones se van en discutir qué cifra es la correcta, no en qué hacer. |
| `capacidades.dataConsulting.problems.items[1].title` | Se compran herramientas antes de ordenar los datos |
| `capacidades.dataConsulting.problems.items[1].body` | Un tablero o una plataforma nueva hereda los mismos problemas que tenía la anterior. |
| `capacidades.dataConsulting.problems.items[2].title` | Los datos no tienen dueño ni definición |
| `capacidades.dataConsulting.problems.items[2].body` | Nadie sabe quién responde por cada dato ni qué decisión debería habilitar. |
| `capacidades.dataConsulting.services.title` | Qué hacemos |
| `capacidades.dataConsulting.services.items[0].title` | Gobierno y calidad de datos |
| `capacidades.dataConsulting.services.items[0].body` | Definimos dueños, reglas y controles de calidad, con base en el estándar internacional DAMA-DMBOK. |
| `capacidades.dataConsulting.services.items[1].title` | Arquitectura de datos objetivo |
| `capacidades.dataConsulting.services.items[1].body` | Diseñamos cómo deben conectarse sus sistemas para tener una sola fuente de verdad. |
| `capacidades.dataConsulting.services.items[2].title` | Definición de métricas |
| `capacidades.dataConsulting.services.items[2].body` | Acordamos con sus áreas qué significa cada indicador y de qué sistema sale. |
| `capacidades.dataConsulting.services.items[3].title` | Hoja de ruta de inversión en datos |
| `capacidades.dataConsulting.services.items[3].body` | Qué construir primero y por qué, según esfuerzo e impacto. |
| `capacidades.dataConsulting.how` | Trabajamos con entrevistas y talleres con sus áreas, y con acceso de lectura a sus sistemas. No interrumpimos su operación. |
| `capacidades.dataConsulting.vsRutaIa.title` | ¿Data Consulting o Ruta IA? |
| `capacidades.dataConsulting.vsRutaIa.body` | Si su pregunta es por dónde empezar con IA, el punto de partida es Ruta IA: 4 semanas y precio fijo. Data Consulting resuelve un problema de datos que usted ya identificó, y se cotiza a medida. |
| `capacidades.dataConsulting.next` | Si decide construir lo que define la hoja de ruta, el siguiente paso es un proyecto de Data Engineering. |

Cómo cotizamos y CTA: reutilizan `capacidades.pricing.*` y `capacidades.cta.*`. Sin caso publicado por ahora (ver Pendientes).

## Data Engineering · /capacidades/ingenieria-de-datos

La mejor oportunidad SEO del sitio: "ingeniería de datos Costa Rica" lo ocupan noticias de empresas de nearshore, no páginas de servicio para empresas locales. "Dashboards y analítica" vive aquí como una de las capas.

### Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `capacidades.dataEngineering.meta.title` | Data Engineering · Ingeniería de datos en Costa Rica \| Cabana Data | 66 caracteres; si se corta, quitar "\| Cabana Data" |
| `capacidades.dataEngineering.meta.description` | Ingeniería de datos en Costa Rica: integramos sus sistemas en un data warehouse, automatizamos la carga de datos y construimos sus dashboards. | 143 caracteres |
| Slug | `/capacidades/ingenieria-de-datos` | 301 desde `/services/data-engineering` y `/services/dashboards-analytics-interfaces` |
| H1 | Data Engineering · Ingeniería de datos en Costa Rica |  |

### Copy

| Clave | Texto |
| --- | --- |
| `capacidades.dataEngineering.hero.title` | Data Engineering · Ingeniería de datos en Costa Rica |
| `capacidades.dataEngineering.hero.subtitle` | Una sola fuente de verdad para su empresa. Integramos sus sistemas, automatizamos la carga de datos y la llevamos a dashboards que su equipo usa para decidir. |
| `capacidades.dataEngineering.problems.title` | Cuando cada sistema tiene su propia versión de la verdad |
| `capacidades.dataEngineering.problems.items[0].title` | Sistemas que no se hablan |
| `capacidades.dataEngineering.problems.items[0].body` | CRM, ERP y hojas de cálculo con datos distintos sobre el mismo cliente o la misma venta. |
| `capacidades.dataEngineering.problems.items[1].title` | Reportes armados a mano |
| `capacidades.dataEngineering.problems.items[1].body` | Alguien exporta, cruza y limpia datos cada semana, con errores que nadie detecta a tiempo. |
| `capacidades.dataEngineering.problems.items[2].title` | Reportes que colapsan al crecer |
| `capacidades.dataEngineering.problems.items[2].body` | Lo que funcionaba con mil registros deja de funcionar con un millón. |
| `capacidades.dataEngineering.problems.items[3].title` | Modelos predictivos sobre datos sucios |
| `capacidades.dataEngineering.problems.items[3].body` | Se invierte en predicción antes de tener una base confiable que la sostenga. |
| `capacidades.dataEngineering.services.title` | Qué construimos |
| `capacidades.dataEngineering.services.intro` | Cuatro capas que suelen combinarse. El alcance se define con usted. |
| `capacidades.dataEngineering.services.items[0].title` | Arquitectura y almacenamiento |
| `capacidades.dataEngineering.services.items[0].body` | Data warehouse, data lake o data marts diseñados para crecer con su operación. |
| `capacidades.dataEngineering.services.items[1].title` | Integración y transformación |
| `capacidades.dataEngineering.services.items[1].body` | Flujos automáticos (pipelines) que extraen, limpian y cargan sus datos sin trabajo manual. |
| `capacidades.dataEngineering.services.items[2].title` | Dashboards y analítica |
| `capacidades.dataEngineering.services.items[2].body` | Tableros interactivos en Power BI o Looker, con actualización automática y acceso según el rol de cada usuario. |
| `capacidades.dataEngineering.services.items[3].title` | Modelos predictivos |
| `capacidades.dataEngineering.services.items[3].body` | Si el caso lo requiere, modelos de demanda, fraude o recomendación en producción. |
| `capacidades.dataEngineering.proof` | Más de 50 pipelines de Google BigQuery en producción, operando todos los días. |
| `capacidades.dataEngineering.stack` | Google BigQuery, Google Cloud, Python, Power BI y Looker. |
| `capacidades.dataEngineering.case.industry` | Publicidad digital |
| `capacidades.dataEngineering.case.body` | Su reportería dependía de hojas de cálculo con cientos de fórmulas, y los filtros tardaban hasta 4 minutos. La reemplazamos con flujos automáticos en Google BigQuery. |
| `capacidades.dataEngineering.case.metrics[0]` | 40 horas por \[semana o mes: POR CONFIRMAR\] de trabajo manual eliminado |
| `capacidades.dataEngineering.case.metrics[1]` | 45 entidades de 8 plataformas digitales automatizadas |
| `capacidades.dataEngineering.case.link` | Ver el caso |
| `capacidades.dataEngineering.how` | Trabajamos con acceso de lectura a sus fuentes. No interrumpimos sus sistemas en producción mientras construimos. |

### Preguntas frecuentes

| Clave | Pregunta | Respuesta |
| --- | --- | --- |
| `capacidades.dataEngineering.faq[0]` | ¿Incluye dashboards? | Sí. Los dashboards y la analítica son parte de Data Engineering. Los construimos sobre datos ya integrados, para que el número sea el mismo en todos los reportes. |
| `capacidades.dataEngineering.faq[1]` | ¿Tengo que hacer Ruta IA antes? | No. Si ya sabe cuál es su brecha de datos, puede empezar directamente aquí. Si su pregunta es por dónde empezar con IA, el punto de partida es Ruta IA. |
| `capacidades.dataEngineering.faq[2]` | ¿Trabajan solo con Google Cloud? | Google Cloud es nuestro estándar. También trabajamos con Azure y AWS cuando su operación ya está ahí. |

Cómo cotizamos y CTA: reutilizan `capacidades.pricing.*` y `capacidades.cta.*`.

## Digital Product · /capacidades/producto-digital

Reemplaza "Aplicaciones a la medida" y absorbe "Product design & discovery".

### Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `capacidades.digitalProduct.meta.title` | Digital Product · Aplicaciones a la medida \| Cabana Data | 56 caracteres |
| `capacidades.digitalProduct.meta.description` | Desarrollo de aplicaciones a la medida en Costa Rica: plataformas web y móviles construidas desde su proceso real, listas para producción. | 141 caracteres |
| Slug | `/capacidades/producto-digital` | 301 desde `/services/application-development`, `/services/digital-product` y `/services/product-design-discovery` |
| H1 | Digital Product · Desarrollo de aplicaciones a la medida |  |

### Copy

| Clave | Texto |
| --- | --- |
| `capacidades.digitalProduct.hero.title` | Digital Product · Desarrollo de aplicaciones a la medida |
| `capacidades.digitalProduct.hero.subtitle` | Cuando la operación vive en correos, hojas de cálculo y personas clave, construimos la plataforma que su equipo necesita, a partir de cómo trabaja realmente. |
| `capacidades.digitalProduct.problems.title` | Cuando la operación depende de personas, no de sistemas |
| `capacidades.digitalProduct.problems.items[0].title` | Procesos que solo alguien sabe hacer |
| `capacidades.digitalProduct.problems.items[0].body` | Si esa persona falta, la operación se detiene. Y escalar es imposible. |
| `capacidades.digitalProduct.problems.items[1].title` | Software genérico para un problema específico |
| `capacidades.digitalProduct.problems.items[1].body` | Plantillas que no reflejan la lógica real de su negocio y se adaptan a medias. |
| `capacidades.digitalProduct.problems.items[2].title` | Actualizar el sistema es un riesgo |
| `capacidades.digitalProduct.problems.items[2].body` | Despliegues manuales, sin entornos de prueba ni monitoreo. |
| `capacidades.digitalProduct.services.title` | Qué hacemos |
| `capacidades.digitalProduct.services.items[0].title` | Descubrimiento y diseño |
| `capacidades.digitalProduct.services.items[0].body` | Estudio de factibilidad, talleres de Design Thinking y diseño UX/UI, validados con su proceso real. |
| `capacidades.digitalProduct.services.items[1].title` | Construcción web y móvil |
| `capacidades.digitalProduct.services.items[1].body` | Aplicaciones en la nube, con interfaces en React, Next.js, Angular o React Native y servicios en Node.js, NestJS, Python o .NET. |
| `capacidades.digitalProduct.services.items[2].title` | Despliegue y monitoreo |
| `capacidades.digitalProduct.services.items[2].body` | Despliegue continuo, entornos separados de prueba y producción, y alertas para detectar errores antes que sus usuarios. |
| `capacidades.digitalProduct.case.industry` | Bebidas y distribución |
| `capacidades.digitalProduct.case.body` | Una plataforma a la medida para seguir la cuota de ventas, con inicio de sesión único y datos sincronizados cada día. |
| `capacidades.digitalProduct.case.metrics[0]` | De 3 fuentes de datos a 1 modelo único |
| `capacidades.digitalProduct.case.metrics[1]` | 98.6 % del checklist de ciberseguridad del cliente |
| `capacidades.digitalProduct.case.metrics[2]` | 4 niveles de visibilidad: agente, supervisor, área y gerencia |
| `capacidades.digitalProduct.case.link` | Ver el caso |
| `capacidades.digitalProduct.how` | Entregamos por partes y validamos con su equipo en cada entrega, no al final de meses de trabajo. |

Cómo cotizamos y CTA: reutilizan `capacidades.pricing.*` y `capacidades.cta.*`. Sin FAQ por ahora: las respuestas actuales sobre soporte posterior y diseño previo no están en el material (ver Pendientes).

## Custom AI Agents · /capacidades/agentes-ia-a-medida

**Propuesta frente a "autónomo":** la página no compite por "agentes autónomos". Compite por "agentes de IA a medida para empresas" y convierte el control humano en el argumento de venta: el agente hace el trabajo pesado y su equipo firma. La demanda de "agentes autónomos" se capta con el artículo 6 del blog, que explica sus riesgos y enlaza aquí. La palabra "autónomo" no aparece en la página; donde hace falta nombrar la idea se dice "actuar por sí solo", siempre en negativo.

### Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `capacidades.customAiAgents.meta.title` | Custom AI Agents · Agentes de IA a medida \| Cabana Data | 55 caracteres |
| `capacidades.customAiAgents.meta.description` | Agentes de IA a medida para empresas: conectados a sus datos y sistemas, preparan el trabajo y su equipo aprueba cada acción con efecto. | 138 caracteres |
| Slug | `/capacidades/agentes-ia-a-medida` | 301 desde `/services/custom-ai-agents` |
| H1 | Custom AI Agents · Agentes de IA a medida para empresas |  |

### Copy

| Clave | Texto |
| --- | --- |
| `capacidades.customAiAgents.hero.title` | Custom AI Agents · Agentes de IA a medida para empresas |
| `capacidades.customAiAgents.hero.subtitle` | Agentes que conocen sus datos y sus procesos. Reúnen la información, recomiendan y redactan; su equipo decide qué se ejecuta. |
| `capacidades.customAiAgents.problems.title` | Cuando la IA genérica no alcanza |
| `capacidades.customAiAgents.problems.items[0].title` | La IA genérica no conoce su empresa |
| `capacidades.customAiAgents.problems.items[0].body` | Responde con generalidades porque no tiene acceso a sus datos reales. |
| `capacidades.customAiAgents.problems.items[1].title` | La información está repartida en muchas herramientas |
| `capacidades.customAiAgents.problems.items[1].body` | Cada tarea vive en un sistema distinto y nadie tiene la historia completa. |
| `capacidades.customAiAgents.problems.items[2].title` | Nadie controla lo que hace la IA |
| `capacidades.customAiAgents.problems.items[2].body` | Sin registro ni aprobación, nadie puede explicar una acción en una auditoría o en junta. |
| `capacidades.customAiAgents.services.title` | Qué construimos |
| `capacidades.customAiAgents.services.items[0].title` | Agentes conectados a sus datos |
| `capacidades.customAiAgents.services.items[0].body` | Leen sus sistemas y su base de conocimiento, y responden con su información, no con generalidades. |
| `capacidades.customAiAgents.services.items[1].title` | Agentes especializados que trabajan coordinados |
| `capacidades.customAiAgents.services.items[1].body` | Un agente principal entiende la solicitud y la delega en el especialista correcto. |
| `capacidades.customAiAgents.services.items[2].title` | Aprobación y bitácora |
| `capacidades.customAiAgents.services.items[2].body` | Una persona de su equipo aprueba antes de enviar, modificar registros o mover dinero. Cada acción queda registrada. |
| `capacidades.customAiAgents.principle.title` | La IA propone, su equipo decide |
| `capacidades.customAiAgents.principle.body` | Es la forma de poner agentes en producción sin abrir riesgos con sus clientes, sus registros o su dinero. El agente hace el trabajo pesado; su equipo firma. |
| `capacidades.customAiAgents.stack` | LangChain, Python y Google BigQuery. |
| `capacidades.customAiAgents.case.industry` | Marketing y publicidad |
| `capacidades.customAiAgents.case.body` | Un agente principal y 8 agentes especializados sobre LangChain, en una plataforma que une la información de 7 departamentos. |
| `capacidades.customAiAgents.case.metrics[0]` | De 20 a 2 minutos para reunir el historial de campañas |
| `capacidades.customAiAgents.case.metrics[1]` | 100 % de las acciones de los usuarios bajo control y en bitácora |
| `capacidades.customAiAgents.case.link` | Ver el caso |
| `capacidades.customAiAgents.bridge` | ¿Es su primer caso de IA y necesita la aprobación de la junta? AI First Move lo lleva a producción en 10 semanas, con precio fijo. |

### Preguntas frecuentes

| Clave | Pregunta | Respuesta |
| --- | --- | --- |
| `capacidades.customAiAgents.faq[0]` | ¿El agente puede actuar por sí solo? | No en acciones con efecto. El agente lee, recomienda y redacta; una persona de su equipo aprueba antes de enviar, modificar registros o mover dinero. |
| `capacidades.customAiAgents.faq[1]` | ¿Construyen chatbots para atender a sus clientes? | No. Los agentes que construimos los usan personas de su empresa, no el público ni terceros. \[POR CONFIRMAR: ver Pendientes\] |
| `capacidades.customAiAgents.faq[2]` | ¿Necesito tener mis datos ordenados? | El agente es tan bueno como los datos a los que accede. Si no están listos, conviene empezar por Data Engineering o, si no sabe por dónde empezar, por Ruta IA. |

Cómo cotizamos y CTA: reutilizan `capacidades.pricing.*` y `capacidades.cta.*`.

## Datos estructurados y pendientes

### Datos estructurados (JSON-LD)

Un `Service` por subpágina, sin `offers` (no hay precio). Plantilla para Data Engineering; las otras tres cambian `name`, `serviceType` y `url`.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Engineering",
  "serviceType": "Ingeniería de datos",
  "description": "<capacidades.dataEngineering.meta.description>",
  "url": "https://cabanadata.com/capacidades/ingenieria-de-datos",
  "provider": { "@type": "Organization", "name": "Cabana Data", "url": "https://cabanadata.com" },
  "areaServed": ["Costa Rica", "Latinoamérica"]
}
```

`serviceType` por subpágina: "Consultoría de datos", "Ingeniería de datos", "Desarrollo de aplicaciones a la medida", "Agentes de IA a medida". El hub lleva `CollectionPage` con los cuatro como `hasPart`. Todas llevan `BreadcrumbList` (Inicio → Capacidades → subpágina).

### Pendientes para dirección

- [ ] **Regla de títulos:** ¿se aprueba "nombre en inglés · término en español" en title y H1? Si no, los H1 quedan solo con el nombre en inglés y el término baja al subtítulo, con pérdida SEO.
- [ ] **Alcance de Data Consulting:** se propone gobierno y calidad, arquitectura objetivo, métricas y hoja de ruta de inversión en datos, y se retiran "evaluación de preparación para IA" y "diagnóstico de datos". Confirmar. Tampoco hay un caso de Data Consulting para publicar.
- [ ] **Chatbots para clientes en Custom AI Agents:** el brief limita a uso interno solo a AI First Move. ¿La capacidad también excluye agentes que atienden al público? Si no, se elimina `faq[1]`.
- [ ] **Aprobación y bitácora como práctica general:** `services.items[2]` las presenta como parte de todo agente. Confirmar que aplica a todos los proyectos, no solo al caso publicado.
- [ ] **Unidad del caso de reportería:** "40 horas por semana" o "por mes". No se publica hasta confirmar.
- [ ] **FAQ de Digital Product:** faltan las respuestas sobre soporte después del lanzamiento y sobre si se necesita el diseño listo antes de empezar.
- [ ] **Titles de 66 caracteres:** Data Engineering; mismo criterio que AI First Move.

Revisado contra el checklist de la guía: usted en todo el texto; sin precio, "desde", planes ni paquetes; sin "agente autónomo" ni "automatización total"; sin códigos internos (se retiraron DHC y DUC de Data Consulting); sin nombres de clientes (se retiró la mención de un cliente y su producto en Custom AI Agents); "oportunidades" y "diagnóstico" quedan solo para Ruta IA; cada subpágina responde una intención y enlaza a su servicio relacionado.
