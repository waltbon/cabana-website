"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/contact/LeadFormCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PostSidebar() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="lg:sticky lg:top-20"
    >
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div>
          <Badge variant="green" className="mb-2 text-xs font-semibold uppercase tracking-widest">
            Converse con un experto
          </Badge>
          <h3 className="text-xl font-bold text-foreground leading-snug mb-2">
            Contáctanos
          </h3>
          <p className="text-sm text-muted-foreground leading-5">
            Dejanos tu información y uno de nuestros expertos se pondrá en contacto para conversar sobre tu iniciativa.
          </p>
        </div>

        <LeadCaptureForm submitLabel="Quiero hablar con un experto →" />

        <p className="text-xs text-muted-foreground text-center leading-[1.6]">
          Sin compromiso · Pronta respuesta
        </p>
      </div>
    </motion.div>
  );
}
