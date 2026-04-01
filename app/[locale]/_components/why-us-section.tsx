"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const dimensionKeys = ["quality", "infrastructure", "governance", "maturity", "strategy", "talent"] as const;

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
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dimensionKeys.map((key) => (
              <StaggerItem key={key}>
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-secondary p-6 h-96">
                  <span className="font-mono font-semibold text-cabana-blue text-3xl">
                    {t(`dimensions.items.${key}.num`)}
                  </span>
                  <p className="font-bold text-foreground text-2xl">
                    {t(`dimensions.items.${key}.title`)}
                  </p>
                  <p className="font-medium text-foreground/70 italic">
                    {t(`dimensions.items.${key}.question`)}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
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
                <Link href="https://ruta-ai.cabanadata.com">
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
