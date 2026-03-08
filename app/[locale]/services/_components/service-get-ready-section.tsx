"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const phaseKeys = ["phase1", "phase2", "phase3", "phase4"];
const itemKeys = ["item1", "item2", "item3", "item4"];

const checklistKeys = [
  "discovery",
  "engineering",
  "design",
  "ai",
] as const;

export function ServiceGetReadySection() {
  const t = useTranslations("services.getReady");
  const tServices = useTranslations("services");

  return (
    <Section className="py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Heading */}
            <FadeIn>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-[40px]">
                {t("headlineDark")}
                <br />
                <span className="text-cabana-blue">{t("headlineBlue")}</span>
              </h2>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("description")}
              </p>
            </FadeIn>

            {/* Checklist */}
            <FadeIn delay={0.2}>
              <ul className="flex flex-col gap-3">
                {checklistKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-cabana-blue">
                      <Check className="size-5" strokeWidth={2.5} />
                    </span>
                    <p className="text-base leading-relaxed">
                      <strong className="font-semibold text-foreground">
                        {t(`items.${key}.title`)}
                      </strong>
                      {" – "}
                      <span className="text-muted-foreground">
                        {t(`items.${key}.description`)}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.3}>
              <Button
                asChild
                className="w-fit rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
              >
                <Link href="/contact">{t("cta")}</Link>
              </Button>
            </FadeIn>
          </div>

          {/* Right Column - Image */}
          <FadeIn direction="left" className="w-full shrink-0 lg:w-[45%]">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                src="/services/service-why-section-1.png"
                alt={t("imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

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
                    {tServices(`phases.${key}.badge`)}
                  </div>
                  <h3 className="mb-1 text-xl font-bold">
                    {tServices(`phases.${key}.title`)}
                  </h3>
                  <p className="mb-3 text-xs text-muted-foreground">
                    {tServices(`phases.${key}.duration`)}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-foreground">
                    {tServices(`phases.${key}.description`)}
                  </p>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {tServices("whatHappens")}
                  </p>
                  <ul className="mb-4 flex flex-col gap-1.5">
                    {itemKeys.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="size-4 shrink-0 text-cabana-blue" />
                        {tServices(`phases.${key}.${item}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xs border-l-4 border-cabana-blue bg-gradient-cabana px-4 py-3 text-sm">
                    <span className="font-extrabold">{tServices("youReceive")}</span>{" "}
                    {tServices(`phases.${key}.outcome`)}
                  </div>
                </div>

                {/* Phase image */}
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-xl md:w-64 lg:w-90 ">
                  <Image
                    src={`/home/phase-${index + 1}.jpg`}
                    alt={tServices(`phases.${key}.title`)}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
