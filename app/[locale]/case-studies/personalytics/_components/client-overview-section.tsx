"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

export function ClientOverviewSection() {
  const t = useTranslations("caseStudies.personalytics.clientOverview");

  const details = [
    { label: t("labelClient"), value: "London Media" },
    { label: t("labelProduct"), value: "PersonalyticS" },
    { label: t("labelIndustry"), value: t("valueIndustry") },
    { label: t("labelService"), value: t("valueService") },
    { label: t("labelYear"), value: "2024" },
  ];

  return (
    <Section className="bg-white py-24 border-b border-border">
      <Container className="max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Description */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                London Media
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("description1")}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("description2")}
              </p>
            </div>
          </FadeIn>

          {/* Right — Details + Logos */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-8">
              {/* Logos */}
              <div className="flex items-center gap-8">
                <Image
                  src="/clients/london-media.png"
                  alt="London Media"
                  width={130}
                  height={44}
                  className="object-contain"
                />
              </div>

              {/* Details grid */}
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8">
                {details.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
