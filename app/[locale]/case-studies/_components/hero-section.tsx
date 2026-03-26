"use client";

import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

export function HeroSection() {
  return (
    <Section className="bg-section-dark py-32">
      <Container className="max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-col items-center gap-5 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cabana-green">
              Portfolio
            </span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.05]">
              Real Work.{" "}
              <span className="text-gradient-cabana">Real Results.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              A look at the data challenges we&apos;ve solved — and the measurable
              impact we&apos;ve delivered for our clients.
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
