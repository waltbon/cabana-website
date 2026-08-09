"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const checklistKeys = [
  "discovery",
  "engineering",
  "design",
  "ai",
] as const;

// Process blocks (non-translated data) — one per main service line
const processKeys = [
  { key: "dataConsulting", itemKeys: ["dhc", "duc"] },
  { key: "dataEngineering", itemKeys: null },
  { key: "appsDashboards", itemKeys: ["productDesign", "appDevelopment", "dashboards"] },
  { key: "aiSystems", itemKeys: ["rutaIa", "agentDevelopment"] },
] as const;

export function ServiceGetReadySection() {
  const t = useTranslations("services.getReady");
  const tProcess = useTranslations("services.process");

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

        {/* Process, by service */}
        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <FadeIn>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cabana-blue">
              {tProcess("tagline")}
            </h4>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
              {tProcess("headline")}{" "}
              <span className="text-cabana-blue">{tProcess("headlineHighlight")}</span>
            </h3>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-2xl text-sm text-muted-foreground">
              {tProcess("description")}
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="mt-12 flex flex-col">
          {processKeys.map(({ key, itemKeys: subItems }, index) => (
            <StaggerItem key={key} className="flex gap-6 md:gap-10">
              {/* Left: number + connector */}
              <div className="flex flex-col items-center">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cabana-blue text-sm font-bold text-white">
                  0{index + 1}
                </div>
                {index < processKeys.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>

              {/* Right: content */}
              <div className={`flex-1 ${index < processKeys.length - 1 ? "pb-12" : "pb-0"}`}>
                <h3 className="mb-4 text-xl font-bold">
                  {tProcess(`${key}.title`)}
                </h3>

                {subItems ? (
                  <div className="flex flex-col gap-4">
                    {subItems.map((item) => (
                      <div key={item} className="rounded-xs border-l-4 border-cabana-blue bg-gradient-cabana px-4 py-3">
                        <p className="mb-1 text-sm font-extrabold">
                          {tProcess(`${key}.items.${item}.subtitle`)}
                        </p>
                        <p className="text-sm leading-relaxed text-foreground">
                          {tProcess(`${key}.items.${item}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tProcess(`${key}.description`)}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
