"use client";

import Image from "next/image";
import {
  Handshake,
  Users,
  Database,
  Code,
  Figma,
} from "lucide-react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

// Team members data with role translation keys
const teamMembers = [
  { id: 1, name: "Walter", roleKey: "techLead", icon: Handshake },
  { id: 2, name: "Evelyn", roleKey: "adminManager", icon: Users },
  { id: 3, name: "Thomas", roleKey: "dataEngineer", icon: Database },
  { id: 4, name: "Eduardo", roleKey: "dataEngineer", icon: Database },
  { id: 5, name: "Melissa", roleKey: "developer", icon: Code },
  { id: 6, name: "Sergio", roleKey: "seniorDeveloper", icon: Code },
  { id: 7, name: "Rebeca", roleKey: "uxDesigner", icon: Figma },
];

export function TeamSection() {
  const t = useTranslations("about.team");

  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
          {/* Left Column - Title and Team Grid */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Section Header */}
            <FadeIn>
              <div className="flex max-w-lg flex-col gap-5">
                {/* Tagline */}
                <span className="text-sm font-medium text-muted-foreground">
                  {t("tagline")}
                </span>

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

            {/* Team Grid */}
            <StaggerChildren className="grid gap-6 sm:grid-cols-2">
              {teamMembers.map((member) => (
                <StaggerItem key={member.id} className="flex items-center gap-4">
                  <member.icon className="size-6 shrink-0 text-foreground" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-cabana-blue">
                      {member.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {t(`roles.${member.roleKey}`)}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Right Column - Team Photo */}
          <FadeIn direction="left" className="relative aspect-[4/5] w-full max-w-xl overflow-hidden rounded-xl lg:flex-1">
            <Image
              src="/about/team.png"
              alt="Cabana Data Team"
              fill
              className="object-cover"
              priority
            />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
