"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <Section className="bg-section-dark py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Headline */}
          <FadeIn>
            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl lg:leading-[1.1]">
              {t("headline")}{" "}
              <span className="text-gradient-cabana">{t("headlineHighlight")}</span>
            </h2>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.2}>
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-lg bg-cabana-blue px-6 hover:bg-cabana-blue/90"
            >
              <Link href="/contact">
                {t("button")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
