"use client";

import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";

export function HeroSection() {
  const t = useTranslations("about.hero");

  return (
    <Section className="bg-section-dark py-24">
      <Container className="max-w-7xl px-6 pt-12">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - Headline */}
          <FadeIn direction="right" className="flex-1">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-7xl">
              {t("headline")}
              <br />
              <span className="text-gradient-cabana">{t("headlineHighlight")}</span>
            </h1>
          </FadeIn>

          {/* Right Column - Description & CTA */}
          <div className="flex flex-1 flex-col justify-end gap-8">
            <FadeIn direction="left" delay={0.1}>
              <p className="text-lg leading-relaxed text-white/90">
                {t("description")}
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div>
                <Button
                  asChild
                  className="rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
                >
                  <Link href="/contact">{t("cta")}</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
