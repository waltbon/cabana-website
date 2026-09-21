"use client";

import { motion } from "framer-motion";
import {
  ChartColumnIncreasing,
  Map as MapIcon,
  Lightbulb,
  Hammer,
  Target,
  Gavel,
  X,
  Check,
  CalendarClock,
  PiggyBank,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";

const notIs = [
  "Una consultoría genérica",
  "Un reporte de benchmarking",
  "Un PDF que termina archivado",
];

const yesIs = [
  "Un diagnóstico honesto con metodología propia",
  "Sabes exactamente por dónde empezar",
  "Un plan que se ejecuta, involucrando a tu equipo",
];

const immediateDeliverables = [
  {
    icon: ChartColumnIncreasing,
    title: "Reporte ejecutivo de madurez",
    description:
      "Scoring en 6 dimensiones críticas, con los bloqueos reales identificados y evidencia por cada uno.",
  },
  {
    icon: Target,
    title: "Tu primer movimiento, definido",
    description:
      "El caso de uso viable que sí puedes ejecutar ahora, con sus prerrequisitos técnicos identificados y el esfuerzo estimado.",
  },
  {
    icon: Gavel,
    title: "Decisión ejecutiva tomada",
    description:
      "Taller de cierre con tu comité: no te presentamos hallazgos, definimos contigo qué se aprueba y qué se pospone.",
  },
];

const backingDeliverables = [
  {
    icon: MapIcon,
    title: "Roadmap priorizado",
    description:
      "Matriz de esfuerzo e impacto por iniciativa, con el horizonte completo (12 a 24 meses) documentado para tu planificación y tu presupuesto.",
  },
  {
    icon: Hammer,
    title: "Plan de remediación técnica",
    description: "Por dimensión, con dueños asignados, para que cada corrección tenga responsable y no quede en el aire.",
  },
  {
    icon: Lightbulb,
    title: "Backlog de casos de uso",
    description: "De 3 a 7 casos viables priorizados, listos para entrar en ejecución cuando tu organización esté lista para cada uno.",
  },
];

export function TheSolutionSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-cabana-dark">
      {/* Decorative gradient accents */}
      <div
        className="pointer-events-none absolute -top-32 -left-20 size-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #57ff8f 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 size-[520px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #0048ff 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Top accent stripe to signal the solution reveal */}
      <div
        className="absolute top-0 left-0 h-1 w-full"
        style={{ background: "linear-gradient(to right, #0048ff, #57ff8f)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 container max-w-6xl">
        {/* Hero block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl space-y-5"
        >
          <Badge variant="pretitle">La solución</Badge>
          <h2 className="text-white text-4xl md:text-5xl leading-[1.1]">
            Ruta IA: el diagnóstico que convierte la{" "}
            <span className="text-gradient-cabana-light">incertidumbre</span> en un plan ejecutable
          </h2>
          <p className="text-lg text-white/80 leading-7">
            Un proceso estructurado de <strong className="text-white">2 a 3 semanas</strong> en el
            que nuestro equipo trabaja directamente con el tuyo para evaluar en qué punto real está
            tu organización — y entregarte un plan concreto, priorizado y ejecutable para adoptar
            IA de forma sostenible.
          </p>
        </motion.div>

        {/* No es / Sí es contrast */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <motion.div
            variants={cardFadeUp}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
              No es
            </p>
            <ul className="space-y-3">
              {notIs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <X className="size-3 text-white/60" aria-hidden="true" />
                  </span>
                  <span className=" text-white/60 line-through decoration-white/30">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={cardFadeUp}
            className="rounded-xl border border-cabana-green/40 bg-cabana-green/[0.06] p-6 space-y-4"
          >
            <p className="font-semibold uppercase tracking-widest text-cabana-green">
              Sí es
            </p>
            <ul className="space-y-3">
              {yesIs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cabana-green/20">
                    <Check className="size-3 text-cabana-green" aria-hidden="true" />
                  </span>
                  <span className=" text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 mb-6"
        >
          <h3 className="text-white text-2xl md:text-4xl">
            Qué tienes en la mano al terminar
          </h3>
        </motion.div>

        {/* Bloque A — En 3 semanas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cabana-green">
            Lo que recibes al cierre
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {immediateDeliverables.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                variants={cardFadeUp}
                className="relative rounded-xl border border-cabana-green/40 bg-cabana-green/[0.08] p-6 flex flex-col gap-3 hover:border-cabana-green/60 hover:bg-cabana-green/[0.12] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-cabana-green/20 text-cabana-green">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-2xl text-white/80">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="text-white font-semibold leading-snug normal-case text-2xl">
                  {d.title}
                </h4>
                <p className="text-base text-white/90 leading-6">{d.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bloque B — En los 90 días siguientes */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 mb-4"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
            El respaldo para sostener la decisión
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {backingDeliverables.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                variants={cardFadeUp}
                className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-3 hover:border-white/20 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-white/70">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xl text-white/50">
                    0{i + 4}
                  </span>
                </div>
                <h4 className="text-white/90 font-semibold leading-snug normal-case text-xl">
                  {d.title}
                </h4>
                <p className="text-sm text-white/70 leading-6">{d.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Twin commitments */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <motion.div
            variants={cardFadeUp}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-6 flex items-start gap-4"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-cabana-blue/20 text-white">
              <CalendarClock className="size-5" aria-hidden="true" />
            </span>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                + 30 días de seguimiento
              </p>
              <p className="text-[15px] text-white/85 leading-[1.65]">
                No te dejamos solo con un PDF. Seguimos contigo después de la entrega para
                asegurar que <strong className="text-white">la decisión se ejecuta</strong> — no
                que se archiva.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardFadeUp}
            className="rounded-xl border border-cabana-green/30 bg-cabana-green/[0.07] p-6 flex items-start gap-4"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-cabana-green/20 text-cabana-green">
              <PiggyBank className="size-5" aria-hidden="true" />
            </span>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-cabana-green">
                50% acreditable
              </p>
              <p className="text-[15px] text-white/85 leading-[1.65]">
                El <strong className="text-white">50% de tu inversión en Ruta IA</strong> se
                acredita contra el proyecto de implementación si decides seguir adelante con
                nosotros dentro de los 90 días posteriores.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
