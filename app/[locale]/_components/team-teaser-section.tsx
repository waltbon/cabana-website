"use client";

import Image from "next/image";
import { ArrowRight, Handshake, Users, Database, Code, Figma } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

// Subset of the full team (see about/_components/team-section.tsx for the complete roster)
// roleKey values map to the shared "about.team.roles" translations
const featuredMembers = [
  { id: 1, name: "Walter", roleKey: "techLead", icon: Handshake },
  { id: 2, name: "Evelyn", roleKey: "adminManager", icon: Users },
  { id: 3, name: "Thomas", roleKey: "dataEngineer", icon: Database },
  { id: 4, name: "Eduardo", roleKey: "dataEngineer", icon: Database },
  { id: 5, name: "Melissa", roleKey: "developer", icon: Code },
  { id: 6, name: "Rebeca", roleKey: "uxDesigner", icon: Figma },
];

export function TeamTeaserSection() {
  const t = useTranslations("teamTeaser");
  const tRoles = useTranslations("about.team.roles");

  return (
    <Section className="bg-section-slate py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Team Photo */}
          <FadeIn direction="right" className="relative aspect-[4/5] w-full max-w-sm shrink-0 overflow-hidden rounded-xl">
            <Image
              src="/about/team.png"
              alt="Cabana Data Team"
              fill
              className="object-cover"
            />
          </FadeIn>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-8">
            <FadeIn>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-widest text-cabana-blue">
                  {t("tagline")}
                </span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  {t("headline")}
                </h2>
                <p className="max-w-lg text-base text-muted-foreground">
                  {t("description")}
                </p>
              </div>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-2 gap-6">
              {featuredMembers.map((member) => (
                <StaggerItem key={member.id} className="flex items-center gap-3">
                  <member.icon className="size-5 shrink-0 text-cabana-blue" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">{member.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {tRoles(member.roleKey)}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeIn delay={0.1}>
              <Button asChild className="w-fit gap-2">
                <Link href="/about#team">
                  {t("cta")}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
