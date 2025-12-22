import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Accordion items data
const reasons = [
  {
    id: 1,
    title: "Strategic & Technical",
    description:
      "We are architects, not just coders. We speak both business and tech to ensure every solution is not only technically sound but also directly tied to driving business value.",
  },
  {
    id: 2,
    title: "Google Cloud Experts",
    description:
      "As dedicated GCP specialists, we bring elite, focused expertise in BigQuery, Dataform, and the entire modern data stack to build solutions that are powerful, cost-effective, and scalable.",
  },
  {
    id: 3,
    title: "Built for the Future",
    description:
      "We don't deliver short-term fixes. We build future-proof foundations and applications designed to grow with your business and support your most ambitious AI and analytics goals.",
  },
];

export function WhyUsSection() {
  return (
    <Section className="light:bg-white dark:bg-section-dark-2 py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Section Header */}
            <div className="flex flex-col gap-5">
              {/* Tagline */}
              <span className="text-sm font-medium text-muted-foreground">
                The Process.
              </span>

              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Why
                <br />
                <span className="text-cabana-blue">Cabana Data?</span>
              </h2>
            </div>

            {/* Accordion Items */}
            <div className="flex flex-col">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="border-b border-border py-4"
                >
                  <h3 className="text-sm font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Button asChild className="rounded-lg bg-cabana-blue hover:bg-cabana-blue/90">
                <Link href="/contact">Let&apos;s talk!</Link>
              </Button>
              <Button asChild variant="ghost" className="gap-2 rounded-lg">
                <Link href="/services">
                  View Services
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Logo Ship Illustration */}
          <div className="relative hidden aspect-square w-full max-w-md lg:block">
            <Image
              src="/logo-ship.svg"
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
