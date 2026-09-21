"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";

const phases = [
  {
    number: "0",
    title: "Pre-kickoff",
    description:
      "Identificamos a los entrevistados clave junto a tu sponsor, solicitamos la documentación previa y agendamos las sesiones. Llegamos al día 1 con todo listo para arrancar.",
  },
  {
    number: "1",
    title: "Descubrimiento",
    description:
      "Kickoff con tu equipo, entrevistas técnicas y revisión documental. Inmersión sin acceso a sistemas productivos.",
  },
  {
    number: "2",
    title: "Análisis y validación",
    description:
      "Aplicamos nuestro framework de scoring sobre las 6 dimensiones, identificamos casos de uso candidatos y validamos hallazgos preliminares contigo antes de redactar el reporte final.",
  },
  {
    number: "3",
    title: "Síntesis y decisión",
    description:
      "Cerramos con un taller ejecutivo junto a tu C-level — medio día en Standard y Enterprise, 90 minutos en Essentials. Repasamos el diagnóstico, alineamos el lenguaje sobre las 6 dimensiones y salimos de la sala con el primer movimiento aprobado, con dueño y con fecha. Te entregamos el reporte completo, el roadmap priorizado, el plan de remediación técnica y el backlog de casos de uso.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 space-y-3"
        >
          <Badge variant='pretitle' className="mb-2">Cómo funciona</Badge>
          <h2 className="text-foreground">Un proceso estructurado de 2 a 3 semanas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-7">
            No es un assessment genérico. Es una metodología validada con clientes reales, ejecutada con tu equipo de forma no invasiva.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {phases.map((phase) => (
            <motion.div
              key={phase.number}
              variants={cardFadeUp}
              className="rounded-xl border border-border bg-card p-6 space-y-3 flex flex-col"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center size-7 rounded-full bg-cabana-green text-primary font-mono font-bold shrink-0">
                  {phase.number}
                </span>
                <span className="text-sm text-accent-foreground uppercase tracking-widest">
                  Fase {phase.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
              <p className="text-sm text-accent-foreground leading-[1.7] flex-1">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 rounded-xl bg-cabana-light/40 border border-border p-6 max-w-3xl"
        >
          <p className="text-[15px] text-foreground leading-[1.75]">
            Y al cierre, no te dejamos solo: durante los 30 días posteriores damos seguimiento al equipo y al sponsor para asegurar que lo aprobado en la sala efectivamente arranca.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
