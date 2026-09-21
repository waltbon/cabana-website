"use client";

import { motion } from "framer-motion";
import { LeadCaptureForm } from "./lead-capture-form";
import { fadeUp } from "../lib/variants";

export function FinalCTASection() {
  return (
    <section id="contact" className="py-16 bg-section-light">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 max-w-2xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-8 space-y-3">
              <h2 className="text-foreground">
                Tu próximo paso en IA empieza con una decisión, no con una lista.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-[1.7] max-w-md mx-auto">
                Agenda una llamada de 30 minutos. Sin compromiso. Te escuchamos, evaluamos cuál de los tres formatos de Ruta IA aplica a tu empresa y te orientamos sobre los próximos pasos concretos.
              </p>
            </div>

            {/* Form */}
            <LeadCaptureForm
              submitLabel="Conectar por correo →"
              layout="grid"
            />

            <p className="text-[11px] text-muted-foreground text-center mt-4 leading-[1.6]">
              30 minutos · Sin compromiso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
