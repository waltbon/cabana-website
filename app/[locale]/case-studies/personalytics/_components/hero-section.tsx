"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { cn, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { CaseStudy } from "@/data/case-studies";

interface HeroSectionProps {
  caseStudy: CaseStudy;
}

export function HeroSection({
  caseStudy
}: HeroSectionProps) {
  const t = useTranslations("caseStudies.personalytics.hero");

  return (
    <section className={cn('relative overflow-hidden bg-linear-to-br py-24', caseStudy.style.colorFrom, caseStudy.style.colorTo)}>
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-8">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              {t("backLink")}
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-cabana-green">
                {t("eyebrow")}
              </span>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.05]">
                {t("headline")}{" "}
                <span className="text-gradient-cabana">
                  {t("headlineHighlight")}
                </span>
              </h1>
            </div>
          </FadeIn>

          {/* Client logos */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-6">
              <Image
                src="/clients/london-media.png"
                alt="London Media"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <span className="text-white/30">×</span>
              <Image
                src="/case-study/personalytics/hero-2.jpg"
                alt="PersonalyticS"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-lg font-semibold text-white/80">
                PersonalyticS
              </span>
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
