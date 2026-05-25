"use client";

import { Cloud, Sparkles, PlaneIcon, AppWindowIcon, ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Card } from "@/components/ui/card";

// Service configuration (non-translated data)
const services = [
  { key: "dataStrategy", icon: PlaneIcon },
  { key: "dataEngineering", icon: Cloud },
  { key: "customDevelopment", icon: AppWindowIcon },
  { key: "aiMl", icon: Sparkles },
];

export function SolutionSection() {
  const t = useTranslations("solution");

  return (
    <div className="bg-cabana-dark">
      <Section className=" text-white dark:bg-section-dark-2 py-12">
        <Container className="max-w-7xl px-6">
          <div className="flex flex-col items-center gap-12">
            {/* Section Header */}
            <FadeIn>
              <div className="flex max-w-xl flex-col items-center gap-5 text-center">
                {/* Tagline */}
                <h4>{t("tagline")}</h4>

                {/* Headline */}
                <h2 className="text-3xl font-bold leading-12 tracking-tight md:text-5xl">
                  {t("headline")}
                  <br />
                  <span className="text-gradient-cabana">{t("headlineHighlight")}</span>
                </h2>

                {/* Description */}
                <p className="text-base text-white/70">
                  {t("description")}
                </p>
              </div>
            </FadeIn>

            {/* Services Grid */}
            <StaggerChildren className="grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
              {services.map((service) => (
                <StaggerItem
                  key={service.key}
                  className="flex flex-col gap-5"
                >
                  <Card className="px-8 py-10 space-y-4 bg-gradient-cabana dark border border-gray-800 shadow-sm shadow-gray-50">

                    {/* Content */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-3xl font-semibold text-white">
                        {t(`services.${service.key}.title`)}
                      </h3>
                      <p className="text-base leading-relaxed text-white/80">
                        {t(`services.${service.key}.description`)}
                      </p>

                      <span className="leading-relaxed uppercase text-sm font-bold mt-2 text-gradient-cabana">
                        {t(`whatYouGet`)}
                      </span>
                      <ul className="list-none flex flex-col text-white/80">
                        {t(`services.${service.key}.whatYouGetList.wyg1`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg1`)}</span></li>}
                        {t(`services.${service.key}.whatYouGetList.wyg2`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg2`)}</span></li>}
                        {t(`services.${service.key}.whatYouGetList.wyg3`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg3`)}</span></li>}
                        {t(`services.${service.key}.whatYouGetList.wyg4`) && <li className="flex flex-row items-center gap-2 space-x-1.5`"><ArrowRight className="text-muted-foreground" size={12} /> <span>{t(`services.${service.key}.whatYouGetList.wyg4`)}</span></li>}
                      </ul>
                      <span className="leading-relaxed uppercase text-sm font-bold mt-2 text-gradient-cabana">
                        {t(`outcome`)}
                      </span>
                      <p className="text-white/80">{t(`services.${service.key}.outcome`)}</p>

                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </Section>
    </div>
  );
}
