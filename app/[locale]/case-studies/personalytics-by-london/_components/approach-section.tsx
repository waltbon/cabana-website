"use client";

import { Database, LayoutTemplate, BarChart3 } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const steps = [
  {
    icon: Database,
    title: "Data Strategy & Auditing",
    description:
      "We mapped every data source London Media relied on — ad platforms, audience providers, CRM exports — and defined a consolidation strategy that eliminated silos without disrupting existing workflows.",
  },
  {
    icon: LayoutTemplate,
    title: "Defining Data Architecture",
    description:
      "We designed a cloud-native data pipeline on Google BigQuery, ingesting real-time and batch data from 8+ sources into a unified semantic layer that PersonalyticS could query reliably.",
  },
  {
    icon: BarChart3,
    title: "Decision Design & Outcomes",
    description:
      "With clean, structured data in place, we modeled the audience and performance entities that drive planning intelligence — giving media planners the signals they need, when they need them.",
  },
];

export function ApproachSection() {
  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          {/* Left — Visual placeholder */}
          <FadeIn>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cabana-navy/10 to-cabana-blue/20 lg:h-[460px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-cabana-navy/30">
                  <div className="size-14 rounded-xl border-2 border-cabana-navy/20 flex items-center justify-center">
                    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M6.75 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                    </svg>
                  </div>
                  <span className="text-sm">Image coming soon</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Steps */}
          <div className="flex flex-col gap-10">
            <FadeIn>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Strategy
                </span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Our Approach
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Rather than patching over existing chaos, we built the data
                  infrastructure PersonalyticS needed to be a world-class product.
                </p>
              </div>
            </FadeIn>

            <StaggerChildren className="flex flex-col gap-8">
              {steps.map((step) => (
                <StaggerItem key={step.title} className="flex gap-4">
                  <div className="icon-wrapper icon-wrapper-sm mt-1 shrink-0">
                    <step.icon className="size-4 text-cabana-blue" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </Section>
  );
}
