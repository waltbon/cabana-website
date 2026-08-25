"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { CaseStudy } from "@/data/_disabled-case-studies";

export function ChallengeSection({
  images
}: CaseStudy) {
  const t = useTranslations("caseStudies.personalytics.challenge");

  return (
    <Section className="bg-section-light py-24">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left — Text */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              {/* Service badge */}
              <span className="inline-flex w-fit items-center rounded-full bg-cabana-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cabana-blue">
                {t("badge")}
              </span>

              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("title")}
              </h2>

              <p className="text-base leading-relaxed text-muted-foreground">
                {t("p1")}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("p2")}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("p3")}
              </p>
            </div>
          </FadeIn>

          {/* Right — Visual placeholder */}
          <FadeIn direction="left">
            <Image src={images.hero2} className="object-contain rounded-lg border shadow-xl"  width={500} alt="Hero 1" height={300} />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
