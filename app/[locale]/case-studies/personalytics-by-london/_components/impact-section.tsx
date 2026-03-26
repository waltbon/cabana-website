"use client";

import { CheckCircle2 } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const impacts = [
  "PersonalyticS launched as a fully functional product, with a data layer capable of scaling to thousands of campaigns.",
  "Media planners reduced manual data work by 95%, shifting from spreadsheet consolidation to real-time platform interaction.",
  "London Media gained a proprietary competitive advantage — a planning product no competitor offers in their market.",
  "The pipeline architecture now supports multi-client deployments, turning a single project into a scalable product line.",
  "Data governance and lineage were established from day one, setting the foundation for future AI and ML capabilities.",
];

export function ImpactSection() {
  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left */}
          <FadeIn>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Impact
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                World-changer{" "}
                <span className="text-gradient-cabana">Industry Impact</span>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Beyond the technical delivery, this engagement redefined how London
                Media operates — and opened a new product category in the media
                planning space.
              </p>
            </div>
          </FadeIn>

          {/* Right — impact list */}
          <StaggerChildren className="flex flex-col gap-4">
            {impacts.map((impact, i) => (
              <StaggerItem
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-section-light p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cabana-blue" />
                <p className="text-sm leading-relaxed text-foreground">{impact}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
