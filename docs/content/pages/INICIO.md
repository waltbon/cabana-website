# Copy web · Inicio (v2 borrador)

Oct 25, 2026 · @Walter Bonilla

## Cómo leer este borrador

Este es el copy completo de la página /, con la misma estructura y convención de claves que Ruta IA y AI First Move (inicio.<seccion>.<elemento>).

Fuentes: brief de Marketing v1.1, guía de comunicación y tono, keyword map es, brief SEO inicio.es.md, copys aprobados de Ruta IA y AI First Move, y el sitio actual.

Término principal SEO: "consultoría de IA", acompañado de software y datos. Aparece en el title, el meta description y el primer párrafo del hero. El H1 lleva la promesa de fundamentos, no el término.

En cada tabla, la columna "Texto" es lo que se publica; la columna "Clave" no se ve en la página.

Orden de la página: hero → síntomas → capacidades → sección de IA (recorrido y servicios, ancla #ia) → método y principio → casos → logos de clientes → CTA final. Las secciones de este documento no siguen ese orden; manda esta línea.

## Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `inicio.meta.title` | Consultoría de IA, software y datos en Costa Rica \| Cabana Data | 61 caracteres. Término principal en su forma corta, acompañado de software y datos (guía, Dosis de IA) |
| `inicio.meta.description` | Software a la medida, arquitectura de datos y consultoría de IA en Costa Rica. Especificamos, construimos y entregamos en producción. | Nombra las tres líneas de trabajo: software, datos e IA |
| `inicio.meta.ogTitle` | Cabana Data: primero una base sólida, después IA que funciona | Para LinkedIn y redes |
| `inicio.meta.ogDescription` | Aplicaciones a la medida y datos confiables para decidir. Sobre esa base, IA que llega a producción. |  |
| Slug | / | Sin cambio. 301 desde /es (hoy 307) |
| H1 | Primero una base sólida. Después, IA que funciona. | Ver Hero. "Consultoría de IA" va en el title, el meta description y el primer párrafo |

## Hero, síntomas y recorrido

### Hero con las tres puertas

Las tres puertas tienen el mismo peso visual: mismo tamaño, mismo estilo de botón. Ninguna es la "principal". La tercera lleva a la sección de IA de esta misma página, donde se elige entre Ruta IA y AI First Move. La tira de cifras del hero se mantiene.

| Clave | Texto |
| --- | --- |
| `inicio.hero.eyebrow` | Ingeniería de software y datos para empresas |
| `inicio.hero.title` | Primero una base sólida. Después, IA que funciona. |
| `inicio.hero.subtitle` | Somos una consultoría de IA, software y datos en Costa Rica. Diseñamos aplicaciones a la medida y arquitecturas de datos profesionales y, sobre esa base, llevamos la IA a producción. |
| `inicio.hero.doors[0].label` | Modernizar un sistema |
| `inicio.hero.doors[0].hint` | Aplicaciones a la medida |
| `inicio.hero.doors[0].href` | /capacidades/producto-digital |
| `inicio.hero.doors[1].label` | Ordenar mis datos |
| `inicio.hero.doors[1].hint` | Arquitectura e ingeniería de datos |
| `inicio.hero.doors[1].href` | /capacidades/consultoria-de-datos |
| `inicio.hero.doors[2].label` | Empezar con IA |
| `inicio.hero.doors[2].hint` | Ruta IA y AI First Move |
| `inicio.hero.doors[2].href` | #ia |

### Síntomas

Se conserva la estructura problema → consecuencia del sitio actual. Un síntoma por cada puerta: el sistema, los datos y la IA.

| Clave | Texto |
| --- | --- |
| `inicio.symptoms.eyebrow` | Tres síntomas, un problema de fondo |
| `inicio.symptoms.title` | Las decisiones dependen de sistemas que ya no dan abasto |
| `inicio.symptoms.intro` | Antes de cualquier tecnología nueva, conviene que sus sistemas y sus datos sostengan la operación. |
| `inicio.symptoms.items[0].title` | Su sistema ya no sigue el ritmo de la operación |
| `inicio.symptoms.items[0].body` | Y cada cambio cuesta más que el anterior, porque nadie documentó cómo funciona. |
| `inicio.symptoms.items[1].title` | Cada área tiene su propia versión de los números |
| `inicio.symptoms.items[1].body` | Y en la reunión se discute cuál dato es el correcto en lugar de decidir. |
| `inicio.symptoms.items[2].title` | La junta pide avanzar con IA |
| `inicio.symptoms.items[2].body` | Y nadie sabe si los datos dan para alguna idea. |

### Sección de IA: recorrido

Va después de Capacidades, con el ancla #ia. Se muestra como diagrama horizontal de cuatro pasos. La nota de entrada directa va visible, no en letra pequeña.

| Clave | Texto |
| --- | --- |
| `inicio.ai.eyebrow` | Consultoría de IA |
| `inicio.journey.title` | Cuando la base está lista, IA con precio y plazo fijos |
| `inicio.journey.intro` | Primero se sabe por dónde empezar. Después se empieza, con un caso en producción. |
| `inicio.journey.steps[0].label` | Punto de partida |
| `inicio.journey.steps[0].title` | Ideas sueltas |
| `inicio.journey.steps[0].body` | Cada área tiene la suya y nadie las ha ordenado. |
| `inicio.journey.steps[1].label` | 4 semanas |
| `inicio.journey.steps[1].title` | Ruta IA |
| `inicio.journey.steps[1].body` | Sus 5 mejores oportunidades de IA, ordenadas, y cuáles soportan hoy sus datos. |
| `inicio.journey.steps[2].label` | 10 semanas |
| `inicio.journey.steps[2].title` | AI First Move |
| `inicio.journey.steps[2].body` | El primer caso de uso en producción y el caso de inversión para la junta. |
| `inicio.journey.steps[3].label` | Después |
| `inicio.journey.steps[3].title` | Proyecto de implementación |
| `inicio.journey.steps[3].body` | Los siguientes casos, con presupuesto aprobado sobre evidencia propia. |
| `inicio.journey.directEntry` | Si quien decide ya eligió la idea, puede entrar directo a AI First Move. Ruta IA no es un paso obligatorio. |

## Servicios, método, casos y capacidades

### Sección de IA: servicios

Dos tarjetas del mismo tamaño, debajo del recorrido. Sin cifra de precio en Inicio: el precio completo vive en cada página de servicio. El título de la sección es journey.title.

| Clave | Texto |
| --- | --- |
| `inicio.services.items[0].door` | No sé por dónde empezar |
| `inicio.services.items[0].name` | Ruta IA |
| `inicio.services.items[0].summary` | El diagnóstico que le dice por cuáles oportunidades de IA empezar y si sus datos las soportan. |
| `inicio.services.items[0].facts[0]` | 4 semanas + 30 días de seguimiento |
| `inicio.services.items[0].facts[1]` | Precio fijo, sin "depende" |
| `inicio.services.items[0].cta` | Ver Ruta IA |
| `inicio.services.items[1].door` | Ya tengo la idea |
| `inicio.services.items[1].name` | AI First Move |
| `inicio.services.items[1].summary` | El primer caso de IA en producción, con el caso de inversión que financia los siguientes. |
| `inicio.services.items[1].facts[0]` | 10 semanas, en dos ciclos |
| `inicio.services.items[1].facts[1]` | Precio fijo, sin "depende" |
| `inicio.services.items[1].cta` | Ver AI First Move |

### Método y principio

El H2 habla del método de ingeniería. El principio se presenta como criterio de calidad, con el mismo texto base de AI First Move.

| Clave | Texto |
| --- | --- |
| `inicio.method.title` | Especificamos antes de construir |
| `inicio.method.body` | Cada proyecto parte de entrevistas a su gente y de la revisión directa de sus sistemas. Documentamos la lógica de negocio, construimos con su equipo y entregamos en producción. Si algo no está listo, se lo decimos, con lo que hay que resolver. |
| `inicio.principle.title` | La IA propone, su equipo decide |
| `inicio.principle.body` | En el primer caso, la IA lee, recomienda o redacta, y una persona de su equipo aprueba antes de cualquier acción con efecto. Así llega a producción sin abrir un riesgo que después tenga que explicar en junta. |
| `inicio.principle.link` | Ver cómo trabajamos |

### Casos

Se conserva el hilo del sitio actual. Tres tarjetas anónimas con la cifra grande. Mientras los casos no estén publicados, cada una enlaza a la sección de caso de su capacidad (agentes → Custom AI Agents, reportería → Data Engineering, cuota de ventas → Digital Product); después, a su página en /casos.

| Clave | Texto |
| --- | --- |
| `inicio.cases.eyebrow` | En producción, no en presentaciones |
| `inicio.cases.title` | Resultados medibles en la operación de nuestros clientes |
| `inicio.cases.items[0].industry` | Marketing y publicidad |
| `inicio.cases.items[0].title` | Agentes de IA que reúnen el historial de campañas |
| `inicio.cases.items[0].metric` | De 20 a 2 minutos |
| `inicio.cases.items[0].metricLabel` | para reunir el historial de campañas antes de diseñar una nueva |
| `inicio.cases.items[1].industry` | Publicidad digital |
| `inicio.cases.items[1].title` | Reportería automatizada en Google BigQuery |
| `inicio.cases.items[1].metric` | 45 entidades de 8 plataformas |
| `inicio.cases.items[1].metricLabel` | digitales automatizadas en Google BigQuery |
| `inicio.cases.items[2].industry` | Bebidas y distribución |
| `inicio.cases.items[2].title` | Seguimiento de cuota de ventas en una sola plataforma |
| `inicio.cases.items[2].metric` | De 3 fuentes a 1 |
| `inicio.cases.items[2].metricLabel` | un único modelo de datos para agentes, supervisores y gerencia |
| `inicio.cases.cta` | Ver todos los casos |

### Capacidades: lo que construimos

Va justo después de Síntomas. Cuatro tarjetas del mismo tamaño que las de servicio, cada una con enlace a su página. Se cotizan a medida, sin precio.

| Clave | Texto |
| --- | --- |
| `inicio.capabilities.title` | Lo que construimos |
| `inicio.capabilities.intro` | Proyectos de software y datos especificados desde su proceso real, entregados en producción y documentados para que su equipo los opere. Se cotizan a medida. |
| `inicio.capabilities.items[0].name` | Digital Product |
| `inicio.capabilities.items[0].body` | Aplicaciones a la medida con la lógica de su negocio. Ideal para reemplazar sistemas legacy sin perder lo que ya funciona. |
| `inicio.capabilities.items[1].name` | Data Consulting |
| `inicio.capabilities.items[1].body` | Arquitectura y gobierno de datos para que la dirección decida con información propia y confiable. |
| `inicio.capabilities.items[2].name` | Data Engineering |
| `inicio.capabilities.items[2].body` | Integramos sus sistemas en un data warehouse y lo convertimos en dashboards que su equipo usa a diario. |
| `inicio.capabilities.items[3].name` | Custom AI Agents |
| `inicio.capabilities.items[3].body` | Agentes de IA a medida, conectados a sus datos y con aprobación de su equipo. |
| `inicio.capabilities.cta` | Ver capacidades |

### Logos de clientes (decidido: se mantienen)

| Clave | Texto |
| --- | --- |
| `inicio.clients.title` | Empresas que ya trabajan con nosotros |

## CTA final y datos estructurados

### CTA final

| Clave | Texto |
| --- | --- |
| `inicio.cta.title` | ¿Qué necesita resolver primero? |
| `inicio.cta.body` | En una conversación de 20 minutos con quien decide la inversión, revisamos por dónde empezar: un sistema, sus datos o la IA. |
| `inicio.cta.button` | Agendar una conversación |

### Datos estructurados (JSON-LD)

Prioridad alta: hoy "Cabana Data Costa Rica" no se reconoce como entidad. La description usa la frase de definición en tercera persona, que no va en el cuerpo de la página (ver Pendientes).

{  "@context": "https://schema.org",  "@type": ["Organization", "ProfessionalService"],  "name": "Cabana Data",  "url": "https://cabanadata.com",  "logo": "https://cabanadata.com/logo-horizontal-light.svg",  "description": "<footer.tagline>",  "foundingDate": "2021",  "email": "info@cabanadata.com",  "telephone": "+506 8511-5245",  "address": { "@type": "PostalAddress", "addressLocality": "San José", "addressCountry": "CR" },  "areaServed": ["Costa Rica", "Latinoamérica"],  "sameAs": ["https://linkedin.com/company/cabanadata"],  "makesOffer": [    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ruta IA", "url": "https://cabanadata.com/ruta-ia" } },    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI First Move", "url": "https://cabanadata.com/ai-first-move" } }  ]}

Además: un bloque WebSite con name y url. Cuando existan perfiles en Clutch o Consultancy.org, se agregan a sameAs. En makesOffer se agregan también las cuatro capacidades como Service con su URL: /capacidades/producto-digital, /capacidades/consultoria-de-datos, /capacidades/ingenieria-de-datos y /capacidades/agentes-ia-a-medida.

## Qué cambia respecto al Inicio actual

| Hoy en el sitio | Qué pasa |
| --- | --- |

Hero "Modernizamos la forma en que las organizaciones operan…" | Se reemplaza por la promesa de fundamentos y las tres puertas

"Servicios que ofrecemos": 5 capacidades al mismo nivel | Capacidades arriba, con voz propia; los dos servicios en la sección de IA

Sección de Ruta IA con 6 dimensiones, "2 a 3 semanas" y enlace a ruta-ai.cabanadata.com | Se elimina. La tarjeta de Ruta IA enlaza a /ruta-ia

"Socios Tecnológicos Clave" (logos de tecnologías) | Sale de Inicio. Pasa a /capacidades como "Las tecnologías con que trabajamos"

Bloque de equipo | Sale de Inicio. Pasa a Cómo trabajamos o a Nosotros, según decida dirección

Casos en tercera persona ("Cabana Data redujo…") | Tarjetas anónimas con cifra; el detalle vive en /casos

Síntomas de datos, procesos e IA | Se conserva la estructura; un síntoma por puerta: sistema, datos e IA

Tuteo ("¿Tu empresa está lista?", "Descúbrelo") | Usted en toda la página

Meta keywords en inglés | Se eliminan

"Agendar Consulta", "¡Conversemos! Habla con un experto hoy" | "Agendar una conversación"

## Pendientes para dirección

- [x] Logos de clientes: DECIDIDO, se mantienen. La anonimidad aplica al texto de los casos: ningún caso lleva el nombre ni la marca del cliente.
- [x] Métrica del caso de reportería: DECIDIDO, se quita "40 horas" y se usa "45 entidades de 8 plataformas", que es más realista.
- [x] Precio en Inicio: DECIDIDO, sin precios. El precio es exclusivo de las páginas de servicio.
- [x] Enlaces de los casos: DECIDIDO, hay un caso por capacidad. Inicio va primero; los casos se trabajan después y, mientras tanto, las tarjetas enlazan a la sección de caso de cada capacidad.
- [ ] Frase de definición (GEO): se propone "Cabana Data es una consultoría de IA, software y datos en Costa Rica". Está en tercera persona, que la guía evita en el cuerpo, así que se usa solo en footer, schema y meta.
- [x] Title: RESUELTO. El nuevo title tiene 61 caracteres y se publica completo.
- [ ] Destino de "Ordenar mis datos": se propone Data Consulting por ser la puerta de entrada. Confirmar o cambiar a Data Engineering.
- [ ] Keyword map: el término principal pasa de "consultoría de inteligencia artificial Costa Rica" a "consultoría de IA" con software y datos. Revisar contra el brief SEO de Drive antes de publicar.
Revisado contra el checklist de la guía: usted en todo el texto; "oportunidades" para Ruta IA y "caso de uso" solo para AI First Move; sin business case, ROI, PoC, piloto ni agentes autónomos; sin precio parcial ni "desde"; sin códigos internos ni nombres de clientes en los casos; cada sección abre con su punto; una sola intención de búsqueda; "IA" solo en el title, el hero, el síntoma 3, la sección de IA, Custom AI Agents y un caso.

