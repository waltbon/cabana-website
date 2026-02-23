"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";

const checklistKeys = [
  "discovery",
  "engineering",
  "design",
  "ai",
] as const;

export function ServiceGetReadySection() {
  const t = useTranslations("services.getReady");

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
      </Container>
    </Section>
  );
}
