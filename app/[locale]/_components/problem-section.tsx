"use client";

import { Section, Container } from "@/components/craft";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";

// Pain point configuration (non-translated data)
const painPoints = [
  {
    key: "dataChaos",
    alignment: "left" as const,
    imageSrc: "/home/problem-2.jpg",
  },
  {
    key: "inefficientProcesses",
    alignment: "right" as const,
    imageSrc: "/home/data-chaos.png",
  },
  {
    key: "uncertainFuture",
    alignment: "left" as const,
    imageSrc: "/home/problem-3.jpg",
  },
];

// Alignment mapping
const alignmentClasses = {
  left: "items-start order-first",
  right: "items-end order-last text-right",
  center: "items-center text-center",
};

export function ProblemSection() {
  const t = useTranslations("problem");

  return (
    <Section className="light:bg-section-light dark:bg-section-dark py-12">
      <Container className="max-w-7xl">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <FadeIn>
            <div className="flex max-w-xl flex-col items-center gap-2 text-center">
              {/* Tagline */}
              <h4>{t("tagline")}</h4>

              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}
                <br />
                <span className="text-cabana-blue">{t("headlineHighlight")}</span>
              </h2>

              {/* Description */}
              <p className="text-base text-muted-foreground">
                {t("description")}
              </p>
            </div>
          </FadeIn>

          {/* Pain Points */}
          <div className="relative mx-auto w-full max-w-2xl">
            {/* Vertical connecting line */}
            <div
              className="hidden md:visible absolute left-1/2 top-0 h-full w-2"
              aria-hidden="true"
            >
              <Image src="/home/line.svg" width={6} height={1} alt="line" />
            </div>

            {/* Pain point items */}
            <div className="relative flex flex-col gap-12">
              {painPoints.map((point, index) => (
                <FadeIn
                  key={point.key}
                  direction={point.alignment === "left" ? "left" : "right"}
                  delay={index * 0.15}
                >
                  <div className={`flex flex-row space-x-1 items-center`}>
                    <div
                      className={`flex flex-col ${alignmentClasses[point.alignment]}`}
                    >
                      {/* Content */}
                      <div
                        className={`flex max-w-xs flex-col gap-2 ${
                          point.alignment === "right" ? "md:ml-auto" : ""
                        } "mx-auto max-w-lg`}
                      >
                        <h3 className="text-2xl font-semibold text-foreground">
                          {t(`items.${point.key}.title`)}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {t(`items.${point.key}.description`)}
                        </p>
                      </div>
                    </div>

                    <div className="mx-auto">
                      <Image
                        src={point.imageSrc}
                        className="self-center text-center"
                        width={230}
                        height={100}
                        alt={t(`items.${point.key}.title`)}
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
