"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import Image from "next/image";

const phaseKeys = ["phase1", "phase2", "phase3", "phase4"];
const itemKeys = ["item1", "item2", "item3", "item4"];

export function WhyUsSection() {
  const t = useTranslations("whyUs");

  return (
    <Section className="bg-white py-24">
      <Container className="max-w-4xl px-6">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="mb-16 flex flex-col gap-4 text-center">
            <h4>{t("eyebrow")}</h4>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {t("headline")}
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted-foreground">
              {t("subhead")}
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <StaggerChildren className="flex flex-col">
          {phaseKeys.map((key, index) => (
            <StaggerItem key={key} className="flex gap-6 md:gap-10">
              {/* Left: number + connector */}
              <div className="flex flex-col items-center">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cabana-blue text-sm font-bold text-white">
                  0{index + 1}
                </div>
                {index < phaseKeys.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>

              {/* Right: content + image */}
              <div className={`flex flex-1 flex-col gap-6 md:flex-row md:items-start md:gap-10 ${index < phaseKeys.length - 1 ? "pb-12" : "pb-0"}`}>
                {/* Text content */}
                <div className="flex-1">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-cabana-blue">
                    {t(`phases.${key}.badge`)}
                  </div>
                  <h3 className="mb-1 text-xl font-bold">
                    {t(`phases.${key}.title`)}
                  </h3>
                  <p className="mb-3 text-xs text-muted-foreground">
                    {t(`phases.${key}.duration`)}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-foreground">
                    {t(`phases.${key}.description`)}
                  </p>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("whatHappens")}
                  </p>
                  <ul className="mb-4 flex flex-col gap-1.5">
                    {itemKeys.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="size-4 shrink-0 text-cabana-blue" />
                        {t(`phases.${key}.${item}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xs border-l-4 border-cabana-blue bg-gradient-cabana px-4 py-3 text-sm">
                    <span className="font-extrabold">{t("youReceive")}</span>{" "}
                    {t(`phases.${key}.outcome`)}
                  </div>
                </div>

                {/* Phase image */}
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-xl md:w-64 lg:w-90 ">
                  <Image
                    src={`/home/phase-${index + 1}.jpg`}
                    alt={t(`phases.${key}.title`)}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* CTA Buttons */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-center gap-3">
            <Button
              asChild
              className="rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
            >
              <Link href="/contact">{t("ctaTalk")}</Link>
            </Button>
            <Button asChild variant="ghost" className="gap-2 rounded-lg">
              <Link href="/services">
                {t("ctaServices")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
