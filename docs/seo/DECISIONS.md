# Decisiones SEO

Registro de conflictos entre SEO y el brief o la guía de tono, y de preguntas que solo dirección puede responder. Los agentes agregan filas con estado `abierta`; nunca las cierran. Una decisión cerrada se cita desde el backlog o desde `rules.json` por su ID.

Estados: `abierta` · `decidida` · `descartada`.

## Decisiones

| ID | Tema | Decisión | Estado | Fecha |
|---|---|---|---|---|
| D-001 | La FAQ de Ruta IA cita "business case" para negarlo | Permitido solo en la pregunta de la FAQ que lo niega (brief §3.6). Excepción en `rules.json` | decidida | 2026-10-30 |
| D-002 | "benchmark" usado en contraste ("no de un benchmark genérico") en `inicio.method.body` y `rutaIa.process.method`, es y en. La guía lo lista en "No usar"; el brief §3.3 usa la misma frase como mensaje clave del método. ¿Se permite en contraste y se registra como excepción en `rules.json` (como D-001), o se reescribe con "evidencia de su operación"? Manda la guía; la decide dirección. Bloquea B-020 | — | abierta | 2026-11-01 |
| D-003 | "confirmed" en `rutaIa.deliverables.note` (en): "Whether it can be built is confirmed in the next stage". Repite brief §3.4 (lo que se confirma después es la viabilidad, no la oportunidad) y el texto es no lo marca ("se confirma"). ¿Excepción en `rules.json` para esta clave, o se reformula? Manda la guía; la decide dirección. Bloquea B-020 | — | abierta | 2026-11-01 |
| D-004 | `/en/careers` está escrita en español con voseo y sin par en inglés (B-016). Opciones: (A) traducir la sección y las vacantes; (B) dejarla solo en español | B: la sección de carreras existe solo en español (mismo patrón que `/careers/[id]` y los posts). `/en/careers` sale del sitemap y declara canonical y hreflang a `/careers`. La corrección del texto a usted va en B-030 | decidida | 2026-11-06 |
| D-005 | Posts: autor de `inversion-en-ia` y cliente de `metodologia-aer` (B-026) | Autor: Walter Bonilla, con el cargo ya publicado "Fundador y Líder Técnico" (el MDX decía "Walter Campos" y "CEO & Co-fundador"). Cliente: sin permiso escrito, así que el post no lo hace identificable (sin sector, país, tecnología ni modelo de negocio) | decidida | 2026-11-06 |
| D-006 | Nombre del método en `metodologia-aer` (B-026): AER (slug) vs AEB (cuerpo) | Sin acrónimo: el cuerpo habla de "la evaluación de arquitectura" y no presenta el método como producto con sigla (BRIEF §1.1). El slug `metodologia-aer` no cambia. LinkedIn de Walter Bonilla: `https://www.linkedin.com/in/waltbon/` | decidida | 2026-11-06 |

## Conflictos heredados de la investigación (`03-resumen.md` §2)

| ID | Conflicto | Manda | Estado |
|---|---|---|---|
| C1 | El mercado llama "casos de uso", "ROI" y "business case" a lo que entrega Ruta IA | Guía: los términos van al blog | decidida |
| C2 | "No es una prueba de concepto" (brief) vs. término prohibido en AI First Move | — | abierta |
| C3 | Capacidades en inglés vs. búsquedas en español ("ingeniería de datos") | — | abierta |
| C4 | "Sponsor" en el brief vs. prohibido en texto público | Guía | decidida |
| C5 | "IA en producción" lleva a resultados de OT | Brief (perfil) | decidida |
| C6 | `/ai-first-move` no contiene términos buscados en español | Brief (marca) | decidida |
| C7 | Home con "tú" vs. "usted" | Guía | decidida |
| C8 | Falta ICP y voz para en-US | — | abierta |
| C9 | "USD X + IVA" no funciona en EE. UU. | — | abierta |
| C10 | SERPs premian "autonomous"; Cabana se posiciona en human-in-the-loop | Guía | decidida |
| C11 | Capacidad de un cliente por servicio vs. demanda en EE. UU. | — | abierta |
| C12 | `/about`, `/careers`, `/privacidad` fuera de la arquitectura objetivo | — | abierta |

## Preguntas abiertas para dirección (`03-resumen.md` §3)

| ID | Pregunta | Bloquea | Estado |
|---|---|---|---|
| Q1 | ¿Se publica el precio en la web? ¿Cómo se expresa para EE. UU.? | C9 | abierta |
| Q2 | Nombre y slug de Ruta IA en inglés (propuesta: "Ruta IA — AI Opportunity Assessment", `/en/ai-opportunity-assessment`) | B-007, B-008 | abierta |
| Q3 | ¿Mercado inglés en-US o inglés genérico? (define hreflang `en-US` vs. `en`) | B-008 | abierta |
| Q4 | ¿Qué frase reemplaza "no es una prueba de concepto / not a pilot"? | C2 | abierta |
| Q5 | ¿Término en español junto al nombre en inglés en títulos de capacidades? | C3 | abierta |
| Q6 | ¿Dónde queda "Dashboards y analítica"? | — | abierta |
| Q7 | ¿Permiso escrito para nombrar clientes en casos? ¿Casos publicables en inglés? | B-003 | abierta |
| Q8 | ¿Cuánto tiempo del equipo del cliente toma Ruta IA? | FAQ Ruta IA | abierta |
| Q9 | ¿Se crean perfiles en Clutch y Consultancy.org, y se actualiza The Manifest? | B-014 | abierta |
| Q10 | Redirects por confirmar: `data-health-check` → `/ruta-ia`, `data-analytics-use-case` → `/ai-first-move`, `dashboards-analytics-interfaces` → Data Engineering, `/about` → `/como-trabajamos` | B-004 | abierta |
| Q11 | ¿Se mueven los posts de `/posts/<slug>` a `/blog/<slug>`? | — | abierta |
| Q12 | Dominios de SmartGo360 y Novitec | Competencia | abierta |
| Q13 | `/services/dashboards-analytics-interfaces` ya responde 301 → `/capacidades/ingenieria-de-datos` en producción (lint `redirects` 2026-11-03, estado `applied`), pero Q10 lo lista como "por confirmar" y `redirects.csv` dice "alternativa: Digital Product; confirmar". ¿Se ratifica el destino Data Engineering o se cambia a Digital Product? Relacionada con Q6 (dónde queda "Dashboards y analítica"). Registrado el 2026-11-03 | Q10 (parte), Q6 | abierta |
