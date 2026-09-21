"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";

interface CaseStudy {
  id: number;
  industry: string;
  date: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    industry: "Bebidas & Distribución",
    date: "Marzo 2025",
    title:
      "Visibilidad en tiempo real de quota de ventas con arquitectura transaccional escalable",
    description:
      "Cabana Data construyó una plataforma de seguimiento de quota de ventas que consolida 3 fuentes de datos en un único modelo, con autenticación SSO y reportería en tiempo real para agentes, supervisores y gerentes.",
    metrics: [
      { value: "3 → 1", label: "fuentes de verdad consolidadas" },
      { value: "98.6%", label: "cumplimiento de ciberseguridad" },
      { value: "4 niveles", label: "de visibilidad jerárquica" },
    ],
  },
  {
    id: 2,
    industry: "Marketing / Publicidad",
    date: "Enero 2026",
    title:
      "De tareas de marketing dispersas a un swarm de agentes de IA coordinados",
    description:
      "Implementamos un agente maestro a cargo de 8 subagentes especializados sobre LangChain, que interpreta la solicitud del usuario y delega automáticamente en el especialista correcto para investigar campañas, definir audiencias y producir contenido.",
    metrics: [
      { value: "20 min → 2 min", label: "en reunir historial de campañas" },
      { value: "7 departamentos", label: "sincronizados en una fuente" },
      { value: "100%", label: "de acciones bajo control y bitácora" },
    ],
  },
  {
    id: 3,
    industry: "Marketing / Publicidad digital",
    date: "Febrero 2025",
    title:
      "Automatización de reportería y 40 horas/semana recuperadas en análisis de datos",
    description:
      "Diseñamos una arquitectura de datos a la medida en Google BigQuery, automatizando 45 entidades de 8 plataformas distintas y reemplazando por completo la lógica manual de hojas de cálculo.",
    metrics: [
      { value: "40 horas/semana", label: "de trabajo manual erradicado" },
      { value: "45 × 8", label: "entidades y plataformas automatizadas" },
      { value: "0", label: "errores humanos remanentes" },
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 border-t border-dashed border-border">
      <div className="container max-w-5xl mx-auto flex flex-col gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Badge variant="pretitle" className="mb-2">
            Resultados reales
          </Badge>
          <h2 className="text-foreground max-w-xl">
            Proyectos reales. Impacto medible.
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Así es como Cabana Data convierte datos dispersos y procesos
            manuales en sistemas que sí llegan a producción.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={cardFadeUp}
              className="flex flex-col gap-3 rounded-lg border border-border p-6 bg-white"
            >
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {study.industry} · {study.date}
              </span>
              <h3 className="text-lg font-semibold text-foreground leading-snug">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {study.description}
              </p>
              <div className="mt-2 grid grid-cols-1 gap-2 border-t border-dashed border-border pt-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline gap-2">
                    <span className="font-semibold text-foreground">
                      {metric.value}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
