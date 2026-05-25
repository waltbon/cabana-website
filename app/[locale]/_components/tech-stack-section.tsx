"use client";

import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

// Tech stack logos
const techStack = [
  {
    id: 1,
    name: "Amazon Web Services",
    logo: "/logos/aws.png",
    width: 80,
    height: 48,
    description: "Secondary cloud for multi-cloud client environments",
  },
  {
    id: 2,
    name: "Google Cloud",
    logo: "/logos/gcp.png",
    width: 150,
    height: 48,
    description: "Our primary cloud platform for every engagement",
  },
  {
    id: 3,
    name: "Google BigQuery",
    logo: "/logos/google-bigquery.png",
    width: 110,
    height: 48,
    description: "Serverless data warehouse at the core of our analytics stack",
  },
  {
    id: 4,
    name: "Microsoft Power BI",
    logo: "/logos/powerbi.png",
    width: 130,
    height: 48,
    description: "Enterprise-grade BI and self-service reporting layer",
  },
  {
    id: 5,
    name: "PostgreSQL",
    logo: "/logos/postgresql.png",
    width: 70,
    height: 48,
    description: "Reliable relational engine for transactional workloads",
  },
  {
    id: 6,
    name: "Docker",
    logo: "/logos/docker.png",
    width: 110,
    height: 48,
    description: "Containerized deployments for reproducible environments",
  },
];

export function TechStackSection() {
  return (
    <Section className="border-t border-dashed border-border light:bg-white dark:bg-section-dark-2 py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16">
          {/* Section Header */}
          <FadeIn>
            <div className="flex max-w-xl flex-col items-center gap-5 text-center">
              {/* Tagline */}
              <h4>
                Technology Stack
              </h4>

              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Core Technology Partners
              </h2>

              {/* Description */}
              <p className="text-base text-muted-foreground">
                The platforms and tools at the center of every engagement.
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
                    alt={tech.name}
                    width={tech.width}
                    height={tech.height}
                    className="object-contain"
                  />
                  <p className="text-xs text-center text-muted-foreground max-w-[130px]">{tech.description}</p>
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
