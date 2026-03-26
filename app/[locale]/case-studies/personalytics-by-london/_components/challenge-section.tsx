"use client";

import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

export function ChallengeSection() {
  return (
    <Section className="bg-section-light py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left — Text */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              {/* Service badge */}
              <span className="inline-flex w-fit items-center rounded-full bg-cabana-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cabana-blue">
                Reactive Data Analysis
              </span>

              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                The Challenge
              </h2>

              <p className="text-base leading-relaxed text-muted-foreground">
                London Media was operating across multiple disconnected data sources —
                ad platforms, CRM tools, spreadsheet exports, and third-party audience
                providers. Campaign planners spent hours manually consolidating data
                before any meaningful analysis could begin.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The absence of a unified data layer made it impossible to build a
                reliable, real-time planning product. PersonalyticS needed a solid data
                foundation before a single feature could be shipped.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The team needed a partner who could design the data architecture from
                scratch, integrate heterogeneous sources, and deliver a reactive pipeline
                that could power a product used daily by media planners.
              </p>
            </div>
          </FadeIn>

          {/* Right — Visual placeholder */}
          <FadeIn direction="left">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cabana-blue/20 to-cabana-navy/40 lg:h-[420px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-cabana-navy/40">
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
        </div>
      </Container>
    </Section>
  );
}
