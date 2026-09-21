"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";

export function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-5xl flex">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5 flex-initial"
        >
          <Badge variant='pretitle'>
            El problema que nadie menciona
          </Badge>

          <h2 className="text-foreground text-4xl max-w-xl">
            La mayoría de las iniciativas de IA fallan antes de empezar
          </h2>

          <p className="text-lg leading-7 max-w-2xl">
            No porque la tecnología no funcione. <strong>Sino porque la base no está lista.</strong> Según un{" "}
            <Link
              href="https://www.rand.org/pubs/research_reports/RRA2680-1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              estudio de RAND Corporation
            </Link>
            , más del 80% de los proyectos de IA fracasan — el doble de la tasa de fracaso de proyectos de TI corporativos que no involucran IA. Las razones más comunes no son técnicas: son organizacionales. Datos fragmentados entre sistemas, pipelines inconsistentes o frágiles, gobernanza informal sin controles claros de acceso, y procesos operativos sin documentar son los bloqueos reales que hacen que los proyectos de IA no entreguen resultados medibles.
          </p>

          <p className="text-sm leading-[1.75] max-w-2xl">
            Un modelo técnicamente correcto sigue fallando si se construye sobre una base poco confiable. Antes de invertir en IA, necesitas saber exactamente dónde estás parado — y cuál es el primer movimiento que sí puedes ejecutar este trimestre.
          </p>

          <div className="flex items-center gap-4 max-w-2xl">
            <Image
              src="/walter-bonilla-b.png"
              alt="Walter Bonilla"
              width={60}
              height={60}
              className="rounded-full shrink-0 size-16 md:size-28 object-cover shadow-xl"
            />
            <blockquote className="border-l-[3px] border-foreground pl-5">
              <p className="text-muted-foreground leading-[1.75] italic">
                &ldquo;Cuando un proyecto de IA no tiene un diagnóstico previo, no solo
                quema presupuesto — erosiona la confianza del negocio en la capacidad
                técnica del equipo. Y esa confianza es mucho más difícil de recuperar que
                el dinero.&rdquo;
              </p>
              <footer className="mt-3 text-sm not-italic text-muted-foreground uppercase">
                <cite className="not-italic">
                  <span className="font-semibold text-foreground">Walter Bonilla</span>
                  <span aria-hidden="true"> – </span>
                  <span>Director de Cabana Data</span>
                </cite>
                <div className="mt-1 normal-case text-xs opacity-70">
                  Actualizado: septiembre 2026
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="sr-only flex-initial py-2 md:py-12"
        >
          <Image
            src="/ruta-ai/confusion.png" alt="Bridge"
            width={400} height={200}
            className="my-auto "
          />
        </motion.div>
      </div>
    </section>
  );
}
