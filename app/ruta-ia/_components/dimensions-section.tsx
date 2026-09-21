"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dimensions } from "../data/dimensions";
import { fadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DimensionsSection() {
  const calendarUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#contact";

  return (
    <section id="dimensions" className="py-16 bg-linear-to-br from-white via-gray-50 to-cabana-green">
      <div className="container ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10"
        >
          <Badge variant='pretitle' className="mb-2">
            Qué evaluamos
          </Badge>
          <h2 className="text-foreground">6 dimensiones de madurez para IA</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* Left: Accordion */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {dimensions.map((dim, i) => (
                <AccordionItem key={i} value={`dim-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-4 hover:no-underline group cursor-pointer">
                    <div className="flex items-baseline gap-3 text-left">
                      <span className="font-mono text-md text-muted-foreground min-w-[18px] shrink-0">
                        {dim.num}
                      </span>
                      <div>
                        <p className="text-lg font-bold text-foreground group-hover:text-foreground">
                          {dim.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5 font-normal">
                          {dim.question}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-[30px]">
                    <p className="text-sm leading-[1.7]">
                      {dim.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right: Sticky discovery-call CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:sticky lg:top-20"
          >
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div>
                <Badge variant={'pretitle'} className="mb-2">
                  Diagnóstico personalizado
                </Badge>
                <h3 className="text-2xl font-bold text-foreground leading-snug mb-2">
                  ¿En cuál de las 6 dimensiones está tu bloqueo?
                </h3>
                <p className="text-muted-foreground mt-2 leading-6">
                  Agenda una llamada de discovery y te ayudamos a ubicar en qué punto real está tu organización — antes de comprometer presupuesto en IA.
                </p>
              </div>

              <Button
                asChild
                variant='default'
                size='lg'
                className="w-full"
              >
                <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck2 />
                  Agendar diagnóstico
                </Link>
              </Button>

              <p className="text-xs text-muted-foreground text-center leading-[1.6]">
                Sin costo · Llamada de 30 minutos · Recomendación inmediata.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
