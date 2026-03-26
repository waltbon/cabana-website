"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const clients = [
  // { id: 1, name: "Central Baterias HC", logo: "/clients/central-baterias-hc.png" },
  { id: 2, name: "CIISA", logo: "/clients/ciisa.png" },
  { id: 3, name: "FIFCO", logo: "/clients/fifco.png" },
  { id: 4, name: "London Media", logo: "/clients/london-media.png" },
  { id: 5, name: "Siru", logo: "/clients/siru.png" },
  { id: 6, name: "Zebol", logo: "/clients/zebol.png" },
  { id: 7, name: "Huli", logo: "/clients/huli.png" },
];

export function OurClientsSection() {
  const t = useTranslations("ourClients");

  return (
    <Section className="border-t border-dashed border-border bg-blue-50 dark:bg-section-dark-2 py-24 ">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16">
          {/* Section Header */}
          <FadeIn>
            <div className="flex max-w-xl flex-col items-center gap-5 text-center">
              <h4>{t("eyebrow")}</h4>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("headline")}
              </h2>
              <p className="text-base text-muted-foreground">
                {t("description")}
              </p>
            </div>
          </FadeIn>

          {/* Logo Grid */}
          <div className="relative w-full overflow-hidden">
            <StaggerChildren className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {clients.map((client) => (
                <StaggerItem
                  key={client.id}
                  className="flex shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={130}
                    height={48}
                    className="object-contain"
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </Section>
  );
}
