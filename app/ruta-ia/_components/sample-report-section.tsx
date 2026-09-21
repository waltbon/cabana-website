"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";

interface SampleSlide {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const slides: SampleSlide[] = [
  {
    id: 1,
    src: "/ruta-ai/sample-report/slide-01-cover.png",
    alt: "Portada del reporte ejecutivo de Ruta IA",
    caption: "Portada",
  },
  {
    id: 2,
    src: "/ruta-ai/sample-report/slide-02-resumen.png",
    alt: "Resumen ejecutivo del diagnóstico con nivel de salud de datos, blockers críticos e iniciativas viables",
    caption: "Resumen ejecutivo",
  },
  {
    id: 3,
    src: "/ruta-ai/sample-report/slide-03-scoring.png",
    alt: "Radar de scoring por dimensión con puntaje y estado de cada una de las 6 dimensiones",
    caption: "Scoring por dimensión",
  },
  {
    id: 4,
    src: "/ruta-ai/sample-report/slide-05-roadmap.png",
    alt: "Roadmap priorizado por fases de remediación, fundamentos y escalamiento",
    caption: "Roadmap priorizado",
  },
];

export function SampleReportSection() {
  return (
    <section className="py-20 bg-section-light border-t border-dashed border-border">
      <div className="container max-w-5xl mx-auto flex flex-col gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Badge variant="pretitle" className="mb-2">
            Así se ve tu reporte
          </Badge>
          <h2 className="text-foreground max-w-xl">
            Un entregable real, no una plantilla genérica
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Extracto del formato de reporte ejecutivo que recibe cada cliente
            de Ruta IA — con nombre, industria y datos reales sustituidos por
            marcadores para esta vista previa.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {slides.map((slide) => (
            <motion.figure
              key={slide.id}
              variants={cardFadeUp}
              className="flex flex-col gap-2"
            >
              <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1862}
                  height={1049}
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="text-xs text-muted-foreground text-center uppercase tracking-wide">
                {slide.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
