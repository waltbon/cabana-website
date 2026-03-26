"use client";

import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

const highlights = [
  "A product is only as good as its data foundation.",
  "Reactive pipelines turn static reports into living intelligence.",
  "Data architecture is a product decision, not a backend detail.",
];

export function TakeawaySection() {
  return (
    <Section className="bg-section-slate py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Reflection
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Key Takeaway
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                PersonalyticS didn&apos;t just need a dashboard — it needed a data
                product mindset applied end-to-end. By treating the data layer as a
                first-class product component, London Media was able to ship faster,
                scale smarter, and compete on a fundamentally different level.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The lesson is universal: before you can build intelligent products,
                you need intelligent data infrastructure. That&apos;s what Cabana Data
                delivers.
              </p>
            </div>
          </FadeIn>

          {/* Right — highlights */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-4">
              {highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="rounded-xl border-l-4 border-cabana-blue bg-white px-6 py-4 shadow-sm"
                >
                  <p className="text-base font-semibold leading-snug text-foreground">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
