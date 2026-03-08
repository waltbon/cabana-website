"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const dimensionKeys = ["quality", "infrastructure", "governance", "maturity"] as const;

export function WhyUsSection() {
  const t = useTranslations("services.rutaIA");

  return (
    <Section className="bg-white py-24">
      <Container className="max-w-5xl px-6">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <FadeIn direction="up">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-cabana-blue">
                {t("hero.tagline")}
              </p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("hero.headline")}{" "}
                <span className="text-gradient-cabana">{t("hero.headlineHighlight")}</span>
              </h2>
              <p className="max-w-xl text-base text-muted-foreground">
                {t("hero.description")}
              </p>
            </div>
          </FadeIn>

          {/* Dimensions */}
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dimensionKeys.map((key) => (
              <StaggerItem key={key}>
                <div className="flex flex-col gap-2 rounded-xl border border-border bg-secondary p-5">
                  <p className="text-sm font-bold text-foreground">
                    {t(`dimensions.items.${key}.title`)}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {t(`dimensions.items.${key}.description`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Stats + CTA */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 shrink-0 text-cabana-blue" strokeWidth={1.5} />
                <span>
                  <strong className="font-semibold text-foreground">{t("timeline.duration")}</strong>
                  {" — "}{t("timeline.durationLabel")}
                </span>
              </div>

              <Button
                asChild
                className="w-fit gap-2 rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
              >
                <Link href="/services/ai-readiness-assessment">
                  {t("cta.button")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
