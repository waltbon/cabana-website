"use client";

import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const stats = [
  {
    label: "The Goal",
    value: "1 Platform",
    description:
      "Unify 8+ fragmented data sources into a single, queryable layer powering all of PersonalyticS's planning features.",
  },
  {
    label: "The Numbers",
    value: "24×",
    description:
      "Reduction in time spent manually consolidating data — from days to hours, freeing planners to focus on strategy.",
  },
  {
    label: "The Achievement",
    value: "Real-Time",
    description:
      "Audience and performance signals now flow reactively into PersonalyticS, enabling live campaign adjustments without engineering bottlenecks.",
  },
];

export function ResultsSection() {
  return (
    <Section className="bg-section-dark py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-16">
          <FadeIn>
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
                Outcomes
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Results That Moved the Needle
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  {stat.label}
                </span>
                <span className="text-5xl font-bold leading-none tracking-tight text-gradient-cabana">
                  {stat.value}
                </span>
                <p className="text-sm leading-relaxed text-white/70">
                  {stat.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
