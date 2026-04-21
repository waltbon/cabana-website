"use client";

import { CheckCircle2 } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { Career } from "@/data/careers";

interface JobDetailSectionProps {
  career: Career;
}

function SectionBlock({
  title,
  items,
  variant = "check",
}: {
  title: string;
  items: string[];
  variant?: "check" | "numbered";
}) {
  return (
    <FadeIn>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
          {title}
        </h2>
        <ul className="flex flex-col gap-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
              {variant === "numbered" ? (
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-cabana-blue/10 text-xs font-bold text-cabana-blue">
                  {i + 1}
                </span>
              ) : (
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cabana-blue" />
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

export function JobDetailSection({ career }: JobDetailSectionProps) {
  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Main content */}
          <div className="flex flex-col gap-14 lg:col-span-2">
            <FadeIn>
              <p className="text-base leading-relaxed text-muted-foreground">
                {career.intro}
              </p>
            </FadeIn>

            <SectionBlock title="¿Qué harás?" items={career.responsibilities} />
            <SectionBlock title="¿Qué buscamos?" items={career.requirements} />
            <SectionBlock title="¿Qué te diferenciará?" items={career.differentiators} />

            <FadeIn>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Proceso de selección
                </h2>
                <ol className="flex flex-col gap-3">
                  {career.selectionProcess.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-cabana-blue/10 text-xs font-bold text-cabana-blue">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-2 rounded-xl border border-cabana-blue/20 bg-cabana-blue/5 p-4 text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Una nota sobre el caso práctico:</strong>{" "}
                  nuestras preguntas están basadas en situaciones reales. No buscamos respuestas
                  perfectas — buscamos cómo pensás, cómo priorizás y cómo manejás la presión.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar — benefits */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="sticky top-24 rounded-2xl border border-border bg-cabana-slate p-8">
                <h3 className="mb-6 text-lg font-bold tracking-tight text-foreground">
                  ¿Qué ofrecemos?
                </h3>
                <ul className="flex flex-col gap-4">
                  {career.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cabana-blue" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
