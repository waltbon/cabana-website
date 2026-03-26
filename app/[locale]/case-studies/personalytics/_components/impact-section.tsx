"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

export function ImpactSection() {
  const t = useTranslations("caseStudies.personalytics.impact");

  const impacts = [
    t("impact1"),
    t("impact2"),
    t("impact3"),
    t("impact4"),
    t("impact5"),
  ];

  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left */}
          <FadeIn>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {t("eyebrow")}
              </span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("title")}{" "}
                <span className="text-gradient-cabana">{t("titleHighlight")}</span>
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("description")}
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
