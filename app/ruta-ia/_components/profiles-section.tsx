"use client";

import { motion } from "framer-motion";
import { profiles } from "../data/profiles";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";

export function ProfilesSection() {
  return (
    <section id="profiles" className="py-16">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 space-y-3"
        >
          <Badge variant='pretitle' className="mb-2">Enfoque de esta Hoja de Ruta</Badge>
          <h2 className="text-foreground">¿Para Quién es Ruta IA?</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              variants={cardFadeUp}
              className="rounded-xl border border-border bg-card p-5 space-y-2"
            >
              <p className="text-lg font-bold text-primary uppercase tracking-wide">
                {profile.role}
              </p>
              <p className="text-sm leading-[1.65]">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 space-y-3 text-center"
        >
          <span className="text-muted-foreground italic text-2xl font-light text-center items-center content-center">
            Trabajamos con tu equipo de forma no invasiva. Sin interrumpir operaciones, sin acceso innecesario a sistemas. Realizamos entrevistas técnicas y revisiones de arquitectura necesarias para darte un diagnóstico honesto.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
