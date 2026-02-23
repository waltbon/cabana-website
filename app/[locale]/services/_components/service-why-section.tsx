"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/animations";

export function ServiceWhySection() {
  const t = useTranslations("services.why");

  return (
    <Section className="py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Image */}
          <FadeIn direction="right" className="w-full shrink-0 lg:w-[45%]">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl">
              <Image
                src="/services/service-why-section.png"
                alt={t("imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right Column - Content */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Heading */}
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-[40px]">
                <span className="text-cabana-blue">{t("headlineBlue")}</span>
                <br />
                {t("headlineDark")}
              </h2>
            </FadeIn>

            {/* Body */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>{t("description1")}</p>
                <p>{t("description2")}</p>
              </div>
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
        </div>
      </Container>
    </Section>
  );
}
