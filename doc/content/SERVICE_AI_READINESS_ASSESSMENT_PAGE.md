# Claude Code Guide: Ruta IA — AI Readiness Assessment Page

## Context

Cabana Data is a Costa Rica-based data engineering and AI implementation company targeting CTOs and COOs at mid-sized Latin American enterprises. The website already has three service pages (Data Governance & Engineering, Custom Web & Mobile Applications, AI Agents Development). This guide defines the content and structure for a **new dedicated page** for **Ruta IA**, Cabana Data's AI Readiness Assessment service.

The page must be consistent with the existing site (WordPress + Elementor, theme: Somentra, URL: cabanadata.com). All copy is in **Spanish**. Design language: light gray to tech blue gradients on white backgrounds. No purple.

---

## Page Goal

Convert skeptical CTOs and COOs into qualified leads for Ruta IA by:
1. Making them recognize their current AI readiness problem
2. Presenting Ruta IA as the structured, credible solution
3. Creating a clear, low-friction call to action

---

## URL

```
/ruta-ia
```

---

## Page Structure

### 1. Hero Section

**Headline:**
```
¿Tu empresa está lista para la IA? Descúbrelo antes de invertir.
```

**Subheadline:**
```
Ruta IA es nuestro diagnóstico técnico que evalúa tu infraestructura de datos, 
identifica los bloqueos reales para implementar IA, y te entrega un plan claro 
de acción — en 2 a 3 semanas.
```

**CTA Button:**
```
Agenda tu diagnóstico →
```

**Design note:** Full-width hero, tech blue gradient background, white text, single CTA button.

---

### 2. Problem Section — "El problema que nadie menciona"

**Section title:**
```
La mayoría de las iniciativas de IA fallan antes de empezar
```

**Body copy:**
```
No porque la tecnología no funcione. Sino porque la base de datos no está lista.

Datos fragmentados, pipelines inconsistentes, sin gobernanza, sin documentación de 
procesos — estos son los bloqueos reales que hacen que los proyectos de IA no 
entreguen resultados.

Antes de invertir en IA, necesitas saber exactamente dónde estás parado.
```

**Design note:** White background, left-aligned text, optional subtle icon or illustration.

---

### 3. What We Evaluate — "Qué evaluamos"

**Section title:**
```
4 dimensiones de madurez para IA
```

**Four cards (icon + title + one-line description each):**

| # | Title | Description |
|---|---|---|
| 1 | Calidad e integridad de datos | ¿Tus datos son confiables, completos y consistentes? |
| 2 | Infraestructura y pipelines | ¿Tu arquitectura soporta cargas de IA en producción? |
| 3 | Gobernanza y privacidad | ¿Tienes control sobre quién accede y cómo se usan tus datos? |
| 4 | Madurez de procesos | ¿Tus procesos están documentados y son reproducibles? |

**Design note:** 4-column card grid, tech blue icon accents, light gray card backgrounds.

---

### 4. What You Get — "Qué recibes"

**Section title:**
```
Tu Ruta IA: un entregable concreto, no un deck de consultoría
```

**Three deliverables (icon + title + description):**

**Diagnóstico de madurez**
```
Un reporte visual con tu puntaje actual en cada dimensión evaluada, 
con hallazgos específicos y evidencia técnica.
```

**Mapa de bloqueos**
```
Identificación clara de qué te impide implementar IA hoy, 
ordenado por impacto y urgencia.
```

**Hoja de ruta priorizada**
```
Un plan de acción con quick wins y pasos estratégicos, 
incluyendo el primer caso de uso recomendado para implementar.
```

**Design note:** Three-column layout, light background, each item with a distinct icon.

---

### 5. ISO 42001 Trust Signal — "Construido sobre estándares globales"

**Section title:**
```
Construido sobre los estándares más rigurosos de IA
```

**Body copy:**
```
Cabana Data está en proceso de certificación ISO 42001 — el estándar internacional 
para sistemas de gestión de IA. Esto significa que nuestra metodología de evaluación 
está alineada con los requisitos de gobernanza, transparencia y accountability que 
los reguladores y clientes empresariales exigirán en los próximos años.

Cuando contratas Ruta IA, no estás contratando un checklist. Estás contratando 
el rigor de un marco internacional adaptado a la realidad latinoamericana.
```

**Design note:** Subtle blue-tinted background section, ISO 42001 badge/logo if available, clean typography.

---

### 6. Investment & Timeline — "Inversión y tiempo"

**Section title:**
```
Claro, rápido y sin sorpresas
```

**Two stats side by side:**

```
⏱ 2 a 3 semanas          💰 Desde $5,000 USD
Diagnóstico completo      Precio introductorio
```

**Supporting copy:**
```
Trabajamos con tu equipo de forma no invasiva. Sin interrumpir operaciones, 
sin acceso innecesario a sistemas. Solo las entrevistas técnicas y revisiones 
de arquitectura necesarias para darte un diagnóstico honesto.
```

---

### 7. Who Is This For — "¿Para quién es Ruta IA?"

**Section title:**
```
Ruta IA es para ti si...
```

**Three persona cards:**

**CTO / Director de Tecnología**
```
Quieres implementar IA pero necesitas saber qué hay que resolver primero 
en tu infraestructura de datos antes de comprometer presupuesto.
```

**COO / Director de Operaciones**
```
Has escuchado sobre IA aplicada a operaciones pero no sabes si tu empresa 
tiene la base para que funcione realmente.
```

**Empresa de tecnología**
```
Quieres ofrecer capacidades de IA a tus clientes y necesitas un socio técnico 
que valide y construya la infraestructura correcta desde el inicio.
```

**Design note:** Three cards, subtle border, persona label as badge.

---

### 8. CTA Section — Final

**Headline:**
```
Tu próximo paso en IA empieza con claridad, no con apuestas.
```

**Subtext:**
```
Agenda una llamada de 30 minutos. Sin compromiso. 
Te decimos si Ruta IA tiene sentido para tu empresa.
```

**CTA Button:**
```
Quiero mi diagnóstico →
```

**Design note:** Full-width section, tech blue background, white text, prominent button.

---

## Technical Implementation Notes for Claude Code

- Match existing page layout, fonts, and component style from other service pages
- CTA buttons must link to the existing contact/calendar booking form or section
- The page must be mobile-responsive following existing site patterns
- No client names or logos on this page
- ISO 42001 section: do not claim certification, only state "en proceso de certificación"
- All Spanish copy above is final — do not translate or alter without instruction
- Add the page to the main navigation under "Servicios" alongside the three existing service pages

---

## SEO Basics

**Page title:** `Ruta IA — Diagnóstico de Preparación para Inteligencia Artificial | Cabana Data`

**Meta description:** `Evalúa la madurez de tu infraestructura de datos para IA en 2-3 semanas. Ruta IA es el diagnóstico técnico de Cabana Data para empresas latinoamericanas que quieren implementar IA con base sólida.`

**Primary keyword:** `diagnóstico de preparación para IA`

**Secondary keywords:** `madurez de datos para IA`, `consultoría IA Costa Rica`, `implementación de inteligencia artificial LATAM`