"use client";

import { useTranslations } from "next-intl";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

export function TakeawaySection() {
  const t = useTranslations("caseStudies.personalytics.takeaway");

  const highlights = [
    t("highlight1"),
    t("highlight2"),
    t("highlight3"),
  ];

  return (
    <Section className="bg-section-slate py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {t("eyebrow")}
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("title")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("p1")}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("p2")}
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
