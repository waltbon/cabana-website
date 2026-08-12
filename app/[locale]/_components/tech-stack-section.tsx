"use client";

import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

// Tech stack logos (non-translated data)
const techStack = [
  { id: 1, key: "aws", logo: "/logos/aws.png", width: 80, height: 48 },
  { id: 2, key: "gcp", logo: "/logos/gcp.png", width: 150, height: 48 },
  { id: 3, key: "bigquery", logo: "/logos/google-bigquery.png", width: 110, height: 48 },
  { id: 4, key: "powerbi", logo: "/logos/powerbi.png", width: 130, height: 48 },
  { id: 5, key: "postgresql", logo: "/logos/postgresql.png", width: 70, height: 48 },
  { id: 6, key: "docker", logo: "/logos/docker.png", width: 110, height: 48 },
];

export function TechStackSection() {
  const t = useTranslations("techStack");

  return (
    <Section className="border-t border-dashed border-border light:bg-white dark:bg-section-dark-2 py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16">
          {/* Section Header */}
          <FadeIn>
            <div className="flex max-w-xl flex-col items-center gap-5 text-center">
              {/* Tagline */}
              <h4>
                {t("tagline")}
              </h4>

              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}
              </h2>

              {/* Description */}
              <p className="text-base text-muted-foreground">
                {t("description")}
              </p>
            </div>
          </FadeIn>

          {/* Logo Grid */}
          <div className="relative w-full overflow-hidden">
            <StaggerChildren className="flex items-center justify-center gap-12 md:gap-16">
              {techStack.map((tech) => (
                <StaggerItem
                  key={tech.id}
                  className="flex shrink-0 flex-col items-center justify-center gap-2 grayscale transition-all hover:grayscale-0"
                >
                  <Image
                    src={tech.logo}
                    alt={t(`items.${tech.key}.name`)}
                    width={tech.width}
                    height={tech.height}
                    className="object-contain"
                  />
                  <p className="text-xs text-center text-muted-foreground max-w-[130px]">{t(`items.${tech.key}.description`)}</p>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Right fade gradient */}
            <div
              className="pointer-events-none absolute right-0 top-1/2 h-10 w-24 -translate-y-1/2 bg-gradient-to-l from-white to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
