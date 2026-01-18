"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FadeIn, Parallax } from "@/components/animations";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <Parallax
      className="relative overflow-hidden bg-section-dark py-24 md:py-32"
      parallaxClassName="absolute inset-0 z-0"
      staticContent={
        <Container className="relative z-10 max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Tagline */}
            <FadeIn>
              <span className="text-sm font-medium uppercase text-white/80">
                {t("tagline")}
              </span>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn delay={0.1}>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl lg:leading-[1]">
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
      }
    >
      {/* Background Image with Parallax */}
      <Image
        src="/home/hero.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-cabana-dark/80" />
    </Parallax>
  );
}
