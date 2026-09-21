"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "./section-badge";
import { Button } from "@/components/ui/button";
import { fadeUpDelayed } from "../lib/variants";
import Link from "next/link";
import { CalendarCheck2 } from "lucide-react";
import { PlasmaField } from "./plasma-field";

export function HeroSection() {
  const calendarUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#";
  return (
    <section className="relative overflow-hidden py-20 md:pb-28 md:pt-20 text-center">
      {/* WebGL background */}
      <PlasmaField className="absolute inset-0 w-full h-full" />
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      <div className="relative z-10 container max-w-3xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          variants={fadeUpDelayed(0)}
          initial="hidden"
          animate="visible"
        >
          <SectionBadge label="Diagnóstico de preparación para IA" variant='filled' />
        </motion.div>

        <h1 className="text-white text-5xl md:text-6xl">
          Tu primera decisión de IA, tomada con <strong className="text-cabana-green">evidencia</strong>
        </h1>

        <motion.p
          variants={fadeUpDelayed(0.2)}
          initial="hidden"
          animate="visible"
          className="text-xl text-white leading-8 max-w-150 pb-4"
        >
          <strong className="text-cabana-green font-extrabold text-2xl"> Ruta IA </strong> evalúa 6 dimensiones de madurez de tu organización, identifica los bloqueos reales y define contigo el primer movimiento concreto — no una lista de pendientes para los próximos dos años.
        </motion.p>

        <motion.div
          variants={fadeUpDelayed(0.3)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3"
        >
          <div className="flex flex-col md:flex-row gap-1 md:gap-3">
            <Button
              asChild
              size="lg"
              variant={'default'}
              className="font-semibold px-8 h-11"
            >
              <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
                <CalendarCheck2 />
                Hablar con un experto
              </Link>
            </Button>
          </div>

          <p className=" text-white/80 w-96">
            Agenda una llamada de discovery <strong>(sin costo)</strong>, con una recomendación personalizada e inmediata.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
