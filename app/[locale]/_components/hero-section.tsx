"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FadeIn, Parallax } from "@/components/animations";
import { PlasmaField } from "@/components/plasma-field";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden py-20 md:pb-12 md:pt-12 text-center">
      <PlasmaField className="absolute inset-0 w-full h-full" />
      <Container className="relative z-10 max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Tagline */}
          <FadeIn>
            <span className="text-sm font-extrabold uppercase text-white">
              {t("tagline")}
            </span>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={0.1}>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-none">
              {t("headline")} <br />
              <span className="text-gradient-cabana">
                {t("headlineHighlight")}
              </span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-lg text-white/90 md:text-xl">
              {t("description")}
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.3}>
            <Button
              asChild
              size="lg"
              className="mt-4 gap-2 rounded-lg bg-cabana-blue px-6 text-cabana-light hover:bg-cabana-blue/90"
            >
              <Link href="/contact">
                {t("cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
