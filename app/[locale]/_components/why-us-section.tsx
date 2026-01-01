import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

// Reason keys for iteration
const reasonKeys = ["strategic", "googleCloud", "futureProof"];

export function WhyUsSection() {
  const t = useTranslations("whyUs");

  return (
    <Section className="light:bg-white dark:bg-section-dark-2 py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Section Header */}
            <div className="flex flex-col gap-5">
              {/* Tagline */}
              <h4>{t("tagline")}</h4>

              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}
                <br />
                <span className="text-cabana-blue">{t("headlineHighlight")}</span>
              </h2>
            </div>

            {/* Accordion Items */}
            <div className="flex flex-col">
              {reasonKeys.map((key) => (
                <div key={key} className="border-b border-border py-4">
                  <h3 className="text-sm font-bold text-foreground">
                    {t(`reasons.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {t(`reasons.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
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
          </div>

          {/* Right Column - Logo Ship Illustration */}
          <div className="relative hidden aspect-square w-full max-w-md lg:block">
            <Image
              src="/home/rocket.svg"
              alt="Cabana Data Logo Ship"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
