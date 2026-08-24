"use client";

import { useTranslations } from "next-intl";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

export function ResultsSection() {
  const t = useTranslations("caseStudies.personalytics.results");

  const stats = [
    {
      label: t("stat1Label"),
      value: t("stat1Value"),
      description: t("stat1Description"),
    },
    {
      label: t("stat2Label"),
      value: t("stat2Value"),
      description: t("stat2Description"),
    },
    {
      label: t("stat3Label"),
      value: t("stat3Value"),
      description: t("stat3Description"),
    },
  ];

  return (
    <Section className="bg-section-dark py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-16">
          <FadeIn>
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
                {t("eyebrow")}
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                {t("title")}
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
