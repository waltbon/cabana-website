"use client";

import { useTranslations } from "next-intl";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

export function HeroSection() {
  const t = useTranslations("caseStudies.hero");

  return (
    <Section className="bg-section-dark py-32">
      <Container className="max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-col items-center gap-5 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cabana-green">
              {t("tagline")}
            </span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.05]">
              {t("headline")}{" "}
              <span className="text-gradient-cabana">{t("headlineHighlight")}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {t("description")}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
