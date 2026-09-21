"use client";

import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";

const workshops = [
  {
    title: "Taller · Gobernanza de Datos para IA",
    duration: "8 horas",
    audience: "TI, Data y Compliance",
    description:
      "Marcos de gobernanza aplicables (ISO 42001, GDPR), clasificación de datos y plan de 90 días para implementar gobernanza básica.",
  },
];

export function WorkshopsSection() {
  const mailtoHref =
    "mailto:hola@cabanadata.com?subject=Consulta%20sobre%20el%20Taller%20de%20Gobernanza%20de%20Datos";

  return (
    <section className="py-12 border-t border-dashed border-border">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 space-y-2"
        >
          <Badge variant='pretitle' className="mb-2">Otras formas de trabajar con nosotros</Badge>
          <h2 className="text-foreground text-2xl md:text-3xl">
            ¿No es momento de un diagnóstico completo? Empieza por un taller.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-7">
            Para equipos técnicos que necesitan poner orden en gobernanza antes de abrir la conversación de IA.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 max-w-xl"
        >
          {workshops.map((workshop) => (
            <motion.div
              key={workshop.title}
              variants={cardFadeUp}
              className="rounded-lg border border-border bg-card/60 p-5 space-y-2"
            >
              <h3 className="text-lg font-semibold text-foreground leading-snug">
                {workshop.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground up">
                <span className="flex items-center gap-1">
                  <Clock className="size-3" aria-hidden="true" />
                  {workshop.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="size-3" aria-hidden="true" />
                  {workshop.audience}
                </span>
              </div>
              <p className="text-sm text-accent-foreground leading-5">
                {workshop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-5"
        >
          <a
            href={mailtoHref}
            className="text-sm text-primary hover:underline font-medium"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("cta_click", { detail: { source: "workshops_band" } }));
              }
            }}
          >
            Conocer detalles del taller →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
