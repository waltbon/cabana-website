"use client";

import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

// Tech stack logos (non-translated data)
const techStack = [
  { id: 1, key: "nodeJs", logo: "/logos/node-js.svg", group: "Backend" },
  { id: 2, key: "nestJs", logo: "/logos/nest-js.svg", group: "Backend" },
  { id: 3, key: "python", logo: "/logos/python.svg", group: "Backend" },
  { id: 4, key: "dotNet", logo: "/logos/dot-net.svg", group: "Backend" },
  { id: 5, key: "typescriptBackend", logo: "/logos/typescript.svg", group: "Backend" },
  { id: 6, key: "reactNative", logo: "/logos/react-native.svg", group: "Mobile" },
  { id: 7, key: "react", logo: "/logos/react.svg", group: "Frontend" },
  { id: 8, key: "nextJs", logo: "/logos/next-js.svg", group: "Frontend" },
  { id: 9, key: "typescriptFrontend", logo: "/logos/typescript.svg", group: "Frontend" },
  { id: 10, key: "angular", logo: "/logos/angular.svg", group: "Frontend" },
  { id: 11, key: "gcpCloud", logo: "/logos/gcp.svg", group: "Cloud" },
  { id: 12, key: "azure", logo: "/logos/azure.svg", group: "Cloud" },
  { id: 13, key: "awsCloud", logo: "/logos/aws.svg", group: "Cloud" },
  { id: 14, key: "vercel", logo: "/logos/vercel.svg", group: "Cloud" },
];

// Groups in display order (2-column layout: Backend|Mobile, Frontend|Cloud)
const groups = ["Backend", "Mobile", "Frontend", "Cloud"] as const;

export function TechStackSection() {
  const t = useTranslations("techStack");

  return (
    <Section className="border-t border-dashed border-border light:bg-white dark:bg-section-dark-2 py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <FadeIn>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              {t("headline")}
            </h2>
          </FadeIn>

          {/* Grouped Logo Grid */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {groups.map((group) => {
              const items = techStack.filter((tech) => tech.group === group);
              if (items.length === 0) return null;

              return (
                <div key={group} className="flex flex-col gap-6">
                  <h4 className="text-sm font-semibold text-muted-foreground">
                    {group}
                  </h4>

                  <StaggerChildren className="flex flex-wrap gap-4">
                    {items.map((tech) => (
                      <StaggerItem
                        key={tech.id}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-section-slate">
                          <Image
                            src={tech.logo}
                            alt={t(`items.${tech.key}.name`)}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm text-center text-muted-foreground">
                          {t(`items.${tech.key}.name`)}
                        </p>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
