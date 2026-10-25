# Copy web · Inicio (v1 borrador)

Oct 25, 2026 · @Walter Bonilla

## Cómo leer este borrador

Este es el copy completo de la página `/`, con la misma estructura y convención de claves que Ruta IA y AI First Move (`inicio.<seccion>.<elemento>`).

- **Fuentes:** brief de Marketing v1.0, guía de comunicación y tono, keyword map `es`, brief SEO `inicio.es.md`, copys aprobados de Ruta IA y AI First Move, y el sitio actual.
- **Término principal SEO:** "consultoría de inteligencia artificial Costa Rica". Aparece en title, primer párrafo y un H2. El H1 lleva la promesa, no el término.
- En cada tabla, la columna "Texto" es lo que se publica; la columna "Clave" no se ve en la página.

## Metadatos SEO

| Clave | Texto | Nota |
| --- | --- | --- |
| `inicio.meta.title` | Consultoría de inteligencia artificial en Costa Rica \| Cabana Data | 66 caracteres; mismo criterio que AI First Move: si se corta, quitar "\| Cabana Data" |
| `inicio.meta.description` | Consultoría de IA para empresas medianas en Costa Rica y Latinoamérica: sepa por dónde empezar con IA en 4 semanas y lleve su primer caso a producción. | 152 caracteres. Usa "inteligencia artificial" en el title e "IA" aquí, para cubrir ambas formas |
| `inicio.meta.ogTitle` | Cabana Data: sepa por dónde empezar con IA y empiece bien | Para LinkedIn y redes |
| `inicio.meta.ogDescription` | Ruta IA le dice por dónde empezar. AI First Move pone su primer caso de IA en producción. Con evidencia de su operación, no opiniones. |  |
| Slug | `/` | Sin cambio. 301 desde `/es` (hoy 307) |
| H1 | Sepa por dónde empezar con IA. Y empiece bien. | Ver Hero. El término SEO va en el primer párrafo y en el H2 de Método |

## Hero, síntomas y recorrido

### Hero con las dos puertas

Las dos puertas tienen el mismo peso visual: mismo tamaño, mismo estilo de botón. Ninguna es la "principal".

| Clave | Texto |
| --- | --- |
| `inicio.hero.eyebrow` | Consultoría de IA para empresas medianas |
| `inicio.hero.title` | Sepa por dónde empezar con IA. Y empiece bien. |
| `inicio.hero.subtitle` | Somos una consultoría de inteligencia artificial en Costa Rica para empresas medianas de Latinoamérica. Le ayudamos a elegir por dónde empezar, con evidencia de su operación, y a poner el primer caso en producción. |
| `inicio.hero.doors[0].label` | No sé por dónde empezar |
| `inicio.hero.doors[0].hint` | Ruta IA · 4 semanas |
| `inicio.hero.doors[0].href` | `/ruta-ia` |
| `inicio.hero.doors[1].label` | Ya tengo la idea |
| `inicio.hero.doors[1].hint` | AI First Move · 10 semanas |
| `inicio.hero.doors[1].href` | `/ai-first-move` |

### Síntomas

Se conserva la estructura problema → consecuencia del sitio actual, apuntando al problema que resuelven los servicios.

| Clave | Texto |
| --- | --- |
| `inicio.symptoms.eyebrow` | Tres síntomas, un problema de fondo |
| `inicio.symptoms.title` | El problema casi nunca es la falta de ideas de IA |
| `inicio.symptoms.intro` | Lo que falta es saber cuál conviene primero, si sus datos la soportan y cómo llevarla a producción. |
| `inicio.symptoms.items[0].title` | Cada área tiene su idea de IA |
| `inicio.symptoms.items[0].body` | Y nadie sabe cuál conviene primero ni si los datos alcanzan para alguna. |
| `inicio.symptoms.items[1].title` | La junta pide avanzar con IA |
| `inicio.symptoms.items[1].body` | Y en la reunión, la respuesta a "¿por dónde empezamos?" es una opinión. |
| `inicio.symptoms.items[2].title` | Las iniciativas de IA no llegan a producción |
| `inicio.symptoms.items[2].body` | Y sin algo funcionando en su operación, nadie aprueba presupuesto para lo siguiente. |

### El recorrido

Se muestra como diagrama horizontal de cuatro pasos. La nota de entrada directa va visible, no en letra pequeña.

| Clave | Texto |
| --- | --- |
| `inicio.journey.title` | Un recorrido con dos puntos de entrada |
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

### Los dos servicios

Dos tarjetas del mismo tamaño. Sin cifra de precio en Inicio: el precio completo vive en cada página de servicio (ver Pendientes).

| Clave | Texto |
| --- | --- |
| `inicio.services.title` | Dos servicios, cada uno con precio y plazo fijos |
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

El H2 lleva el término SEO. El principio se presenta como criterio de calidad, con el mismo texto base de AI First Move.

| Clave | Texto |
| --- | --- |
| `inicio.method.title` | Una consultoría de IA en Costa Rica que trabaja con evidencia |
| `inicio.method.body` | Cada recomendación sale de entrevistas a su gente y de la revisión directa de sus sistemas, no de un benchmark genérico. Si una idea no está lista, se lo decimos, con lo que hay que resolver. |
| `inicio.principle.title` | La IA propone, su equipo decide |
| `inicio.principle.body` | En el primer caso, la IA lee, recomienda o redacta, y una persona de su equipo aprueba antes de cualquier acción con efecto. Así llega a producción sin abrir un riesgo que después tenga que explicar en junta. |
| `inicio.principle.link` | Ver cómo trabajamos |

### Casos

Se conserva el hilo del sitio actual. Tres tarjetas anónimas con la cifra grande. Mientras los casos no estén publicados, cada una enlaza a la sección de caso de su capacidad (agentes → Custom AI Agents, reportería → Data Engineering, cuota de ventas → Digital Product); después, a su página en `/casos`.

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

### Capacidades (respaldo)

Más abajo y con menos peso visual que los servicios: lista compacta, sin íconos grandes ni imágenes.

| Clave | Texto |
| --- | --- |
| `inicio.capabilities.title` | Si ya tiene decisión y presupuesto |
| `inicio.capabilities.intro` | Cotizamos proyectos a medida con el mismo equipo que entrega Ruta IA y AI First Move. |
| `inicio.capabilities.items[0].name` | Data Engineering |
| `inicio.capabilities.items[0].body` | Ingeniería de datos: integración de sistemas, data warehouse y dashboards. |
| `inicio.capabilities.items[1].name` | Data Consulting |
| `inicio.capabilities.items[1].body` | Consultoría de datos: gobierno, calidad y arquitectura de sus datos. |
| `inicio.capabilities.items[2].name` | Digital Product |
| `inicio.capabilities.items[2].body` | Aplicaciones a la medida de su operación, web y móvil. |
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
| `inicio.cta.title` | ¿En qué punto está su empresa con la IA? |
| `inicio.cta.body` | En una conversación de 20 minutos con quien decide la inversión, revisamos cuál es el punto de partida correcto: Ruta IA, AI First Move o un proyecto a medida. |
| `inicio.cta.button` | Agendar una conversación |

### Datos estructurados (JSON-LD)

Prioridad alta: hoy "Cabana Data Costa Rica" no se reconoce como entidad. La `description` usa la frase de definición en tercera persona, que no va en el cuerpo de la página (ver Pendientes).

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "Cabana Data",
  "url": "https://cabanadata.com",
  "logo": "https://cabanadata.com/logo-horizontal-light.svg",
  "description": "<footer.tagline>",
  "foundingDate": "2021",
  "email": "info@cabanadata.com",
  "telephone": "+506 8511-5245",
  "address": { "@type": "PostalAddress", "addressLocality": "San José", "addressCountry": "CR" },
  "areaServed": ["Costa Rica", "Latinoamérica"],
  "sameAs": ["https://linkedin.com/company/cabanadata"],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ruta IA", "url": "https://cabanadata.com/ruta-ia" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI First Move", "url": "https://cabanadata.com/ai-first-move" } }
  ]
}
```

Además: un bloque `WebSite` con `name` y `url`. Cuando existan perfiles en Clutch o Consultancy.org, se agregan a `sameAs`.

## Qué cambia respecto al Inicio actual

| Hoy en el sitio | Qué pasa |
| --- | --- |
| Hero "Modernizamos la forma en que las organizaciones operan…" | Se reemplaza por la promesa y las dos puertas |
| "Servicios que ofrecemos": 5 capacidades al mismo nivel | Dos servicios arriba; las 4 capacidades abajo, como respaldo |
| Sección de Ruta IA con 6 dimensiones, "2 a 3 semanas" y enlace a `ruta-ai.cabanadata.com` | Se elimina. La tarjeta de Ruta IA enlaza a `/ruta-ia` |
| "Socios Tecnológicos Clave" (logos de tecnologías) | Sale de Inicio. Pasa a `/capacidades` como "Las tecnologías con que trabajamos" |
| Bloque de equipo | Sale de Inicio. Pasa a Cómo trabajamos o a Nosotros, según decida dirección |
| Casos en tercera persona ("Cabana Data redujo…") | Tarjetas anónimas con cifra; el detalle vive en `/casos` |
| Síntomas de datos, procesos e IA | Se conserva la estructura; se reorientan al problema de los servicios |
| Tuteo ("¿Tu empresa está lista?", "Descúbrelo") | Usted en toda la página |
| Meta keywords en inglés | Se eliminan |
| "Agendar Consulta", "¡Conversemos! Habla con un experto hoy" | "Agendar una conversación" |

## Pendientes para dirección

- [x] **Logos de clientes:** DECIDIDO, se mantienen. La anonimidad aplica al texto de los casos: ningún caso lleva el nombre ni la marca del cliente.
- [x] **Métrica del caso de reportería:** DECIDIDO, se quita "40 horas" y se usa "45 entidades de 8 plataformas", que es más realista.
- [x] **Precio en Inicio:** DECIDIDO, sin precios. El precio es exclusivo de las páginas de servicio.
- [x] **Enlaces de los casos:** DECIDIDO, hay un caso por capacidad. Inicio va primero; los casos se trabajan después y, mientras tanto, las tarjetas enlazan a la sección de caso de cada capacidad.
- [ ] **Frase de definición (GEO):** "Cabana Data es una consultoría de datos e IA en Costa Rica…" está en tercera persona, que la guía evita en el cuerpo. Se propone usarla solo en footer, schema y meta.
- [ ] **Title de 66 caracteres:** mismo caso que AI First Move. Confirmar si se acepta o se quita "| Cabana Data".

Revisado contra el checklist de la guía: usted en todo el texto; "oportunidades" para Ruta IA y "caso de uso" solo para AI First Move; sin business case, ROI, PoC, piloto ni agentes autónomos; sin precio parcial ni "desde"; sin códigos internos ni nombres de clientes en los casos; cada sección abre con su punto; una sola intención de búsqueda, con enlaces a ambos servicios.
