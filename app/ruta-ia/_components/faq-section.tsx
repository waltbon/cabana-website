"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";
import { faqItems } from "../data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="py-20 bg-white border-t border-dashed border-border">
      <div className="container max-w-3xl mx-auto flex flex-col gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Badge variant="pretitle" className="mb-2">
            Preguntas frecuentes
          </Badge>
          <h2 className="text-foreground max-w-xl">
            Precio, tiempos y proceso de Ruta IA
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={cardFadeUp}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-[1.75]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
