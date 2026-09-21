"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Briefcase, CalendarCheck2, ChartColumnIncreasing, Check, CheckSquare, HammerIcon, Lightbulb, LightbulbIcon, MapIcon, PcCaseIcon, Pencil, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Deliverable = { icon: ReactNode; label: string; sub: string };

const tiers = [
  {
    label: "Para empresas en evaluación inicial",
    title: "Ruta IA · Essentials",
    featured: false,
    features: [
      "Hasta 1 unidad de negocio",
      "2 semanas de duración",
      "Top 3 casos de uso viables con prerrequisitos",
      "Reporte de madurez en 6 dimensiones",
      "Taller Ejecutivo de Decisión",
      "Roadmap documentado (12 meses)",
    ],
    investment: {
      amount: "USD 4,000 – 6,000",
      terms: "Pago 30% al firmar / 70% contra entrega",
      isCustom: false,
    },
    deliverables: [
      { icon: <Briefcase />, label: "Reporte de Madurez", sub: "12-18 páginas" },
      { icon: <MapIcon />, label: "Roadmap priorizado", sub: "Con matriz de impacto" },
      { icon: <Lightbulb />, label: "Top 3 Casos de Uso", sub: "Con prerrequisitos" },
      { icon: <CheckSquare />, label: "Top 5 Remediaciones", sub: "Priorizadas" },
      { icon: <Presentation />, label: "Taller Ejecutivo de Decisión", sub: "90 minutos" },
    ] satisfies Deliverable[],
    description:
      "Ideal para empresas medianas que están evaluando IA por primera vez y quieren validar el camino antes de profundizar.",
  },
  {
    label: "El más solicitado ⭐",
    title: "Ruta IA · Standard",
    featured: true,
    features: [
      "1 a 2 unidades de negocio",
      "3 semanas de duración",
      "5 a 7 casos de uso priorizados con prerrequisitos",
      "Revisión de arquitectura de datos",
      "Plan de remediación por dimensión",
      "Taller Ejecutivo de Decisión + grabación",
      "Roadmap documentado (18 meses)",
    ],
    investment: {
      amount: "USD 9,000 – 12,000",
      terms: "Pago 30% al firmar / 70% contra entrega",
      isCustom: true,
    },
    deliverables: [
      { icon: <ChartColumnIncreasing />, label: "Reporte Ejecutivo", sub: "25-40 páginas" },
      { icon: <MapIcon />, label: "Roadmap priorizado", sub: "Con matriz de impacto" },
      { icon: <HammerIcon />, label: "Plan de Remediación", sub: "Por dimensión" },
      { icon: <LightbulbIcon />, label: "Backlog Casos de Uso Priorizados", sub: "5-7 con prerrequisitos" },
      { icon: <Presentation />, label: "Taller Ejecutivo de Decisión", sub: "Medio día + grabación" },
    ] satisfies Deliverable[],
    description:
      "Para medianas y grandes empresas con un dominio operativo claro que necesitan un diagnóstico ejecutable.",
  },
  {
    label: "Para organizaciones complejas",
    title: "Ruta IA · Enterprise",
    featured: false,
    features: [
      "Múltiples unidades de negocio",
      "3 semanas con equipo extendido",
      "Análisis comparativo entre áreas",
      "Business case ejecutivo",
      "Workshop de validación cruzada entre unidades",
      "Taller Ejecutivo de Decisión con el comité",
      "Roadmap documentado (24 meses)",
    ],
    investment: {
      amount: "Consultar en discovery",
      terms: "Adaptado al alcance específico de tu caso",
      isCustom: false,
    },
    deliverables: [
      { icon: <ChartColumnIncreasing />, label: "Reporte Extendido", sub: "40-60 páginas" },
      { icon: <MapIcon />, label: "Roadmap priorizado", sub: "Con matriz de impacto" },
      { icon: <HammerIcon />, label: "Plan de Remediación", sub: "Multi-unidad" },
      { icon: <Lightbulb />, label: "Backlog + Comparativa", sub: "Casos por unidad" },
      { icon: <PcCaseIcon />, label: "Business Case", sub: "Ejecutivo" },
      { icon: <Presentation />, label: "Taller Ejecutivo de Decisión", sub: "Medio día + grabación" },
    ] satisfies Deliverable[],
    description:
      "Para corporativos grandes, multi-país o multi-área que necesitan alinear inversión en IA a nivel de comité directivo.",
  },
];

// Grid class per deliverable count: 4→2×2, 5→3+2 (6-col trick), 6→3×2
function deliverableGridClass(count: number) {
  if (count === 4) return "grid grid-cols-2 gap-2";
  if (count === 5) return "grid grid-cols-2 md:grid-cols-6 gap-2";
  return "grid grid-cols-2 md:grid-cols-3 gap-2";
}

// Per-item col class for the 5-item 3+2 centered layout
function deliverableItemClass(count: number, index: number) {
  if (count !== 5) return "";
  const map: Record<number, string> = {
    0: "md:col-span-2",
    1: "md:col-span-2",
    2: "md:col-span-2",
    3: "md:col-start-2 md:col-span-2",
    4: "md:col-start-4 md:col-span-2",
  };
  return map[index] ?? "md:col-span-2";
}

export function TiersSection() {
  const calendarUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#contact";

  return (
    <section className="py-20 bg-section-light">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 space-y-3"
        >
          <Badge variant='pretitle' className="mb-2">Adaptado a tu realidad</Badge>
          <h2 className="text-foreground">Ruta IA se ajusta al tamaño y complejidad de tu empresa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-7">
            No todas las empresas necesitan el mismo nivel de profundidad. Por eso Ruta IA viene en tres formatos. En la llamada de discovery te recomendamos cuál aplica a tu caso.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.title}
              variants={cardFadeUp}
              className={[
                "rounded-xl border p-6 flex flex-col gap-4 transition-transform duration-200",
                tier.featured
                  ? "border-primary bg-card shadow-lg md:scale-[1.05] ring-2 ring-primary"
                  : "border-border bg-card",
              ].join(" ")}
            >
              <div>
                <span
                  className={[
                    "text-xs font-semibold uppercase tracking-widest",
                    tier.featured ? "text-primary" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {tier.label}
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{tier.title}</h3>
              </div>

              <ul className="space-y-2" aria-label={`Características de ${tier.title}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={[
                  "rounded-lg border px-4 py-3",
                  tier.featured
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-muted/40",
                ].join(" ")}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                  Inversión
                </p>
                <p
                  className={[
                    "text-lg font-bold leading-tight",
                    tier.investment.isCustom ? "text-primary" : "text-foreground",
                  ].join(" ")}
                >
                  {tier.investment.amount}
                </p>
                <p className="text-xs text-accent-foreground mt-0.5">{tier.investment.terms}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Qué recibes
                </p>
                <div className={deliverableGridClass(tier.deliverables.length)}>
                  {tier.deliverables.map((item, i) => (
                    <div
                      key={item.label}
                      className={cn(
                        "rounded-md border flex flex-col items-center justify-center gap-1 min-h-[90px] px-1.5 py-2.5 text-center",
                        "hover:shadow-md hover:scale-[1.03] transition-all duration-200 cursor-default",
                        tier.featured
                          ? "bg-primary/5 border-primary/20"
                          : "bg-muted/30 border-border",
                        deliverableItemClass(tier.deliverables.length, i),
                      )}
                    >
                      <span className="text-2xl leading-none text-primary" aria-hidden="true">
                        {item.icon}
                      </span>
                      <p className="text-xs font-semibold text-foreground leading-tight">
                        {item.label}
                      </p>
                      <p className="text-[12px] text-muted-foreground leading-tight">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-[1.65] border-t border-border pt-4 my-auto">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 mx-auto max-w-180 rounded-lg bg-muted/50 border border-border px-6 py-4 text-center"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            Las inversiones mostradas reflejan el rango habitual del servicio según el alcance específico de cada cliente.
            En la llamada de discovery te confirmamos cuál tier aplica y la inversión exacta para tu caso.
            Adicionalmente,{" "}
            <strong className="text-foreground font-semibold">
              el 50% de la inversión de Ruta IA se acredita contra un proyecto de implementación
            </strong>{" "}
            contratado dentro de los 90 días posteriores.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 text-center space-y-3"
        >
          <p className="text-accent-foreground pt-4">¿No estás seguro cuál aplica?</p>

          <div className="flex flex-col md:flex-row gap-2 w-full self-center justify-center">

            <Button
              asChild
              size="lg"
              className="font-semibold px-8"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("cta_click", { detail: { source: "tiers_section" } }));
                }
              }}
            >
              <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
                <CalendarCheck2 />
                Agendar con un experto
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant={'secondary'}
              className="font-semibold px-8 border"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("cta_click", { detail: { source: "tiers_section" } }));
                }
              }}
            >
              <Link href={'#contact'} rel="noopener noreferrer">
                <Pencil />
                Contactar por correo
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
