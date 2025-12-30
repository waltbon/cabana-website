import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section className="bg-slate-100 py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Section Header */}
            <div className="flex flex-col gap-6">
              {/* Tagline */}
              <h4>
                Our core services
              </h4>

              {/* Headline */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Everything we do is
                <br />
                <span className="text-cabana-blue">Data-Driven</span>
              </h1>

              {/* Description */}
              <p className="max-w-lg text-lg text-muted-foreground">
                We have 4 tiers of data services to support your company and
                enable you to make data-driven decisions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Button
                asChild
                className="rounded-lg bg-cabana-blue hover:bg-cabana-blue/90"
              >
                <Link href="/contact">Let&apos;s talk!</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-lg">
                <Link href="#services">View service tiers</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Concentric Circles Graphic */}
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative size-80 md:size-96">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border-2 border-cabana-blue/20" />
              {/* Second circle */}
              <div className="absolute inset-[10%] rounded-full border-2 border-cabana-blue/30" />
              {/* Third circle */}
              <div className="absolute inset-[25%] rounded-full border-2 border-cabana-blue/50" />
              {/* Inner circle */}
              <div className="absolute inset-[40%] rounded-full bg-cabana-blue/10 border-2 border-cabana-blue" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
