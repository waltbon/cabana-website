"use client";

import { MapPin, Wifi, Layers } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { Career } from "@/data/careers";

interface JobHeroSectionProps {
  career: Career;
}

export function JobHeroSection({ career }: JobHeroSectionProps) {
  return (
    <Section className="bg-section-dark py-32">
      <Container className="max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cabana-blue/20 px-3 py-1 text-xs font-semibold text-cabana-green">
                {career.department}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                {career.level}
              </span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {career.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              {career.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <MapPin className="size-4" />
                {career.location}
              </span>
              <span className="flex items-center gap-2">
                <Wifi className="size-4" />
                {career.modality}
              </span>
              <span className="flex items-center gap-2">
                <Layers className="size-4" />
                {career.department}
              </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
