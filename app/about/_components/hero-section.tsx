import Link from "next/link";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section className="bg-section-dark py-24">
      <Container className="max-w-7xl px-6 pt-12">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - Headline */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-7xl">
              Building Software for
              <br />
              <span className="text-gradient-cabana">Enterprises</span>
            </h1>
          </div>

          {/* Right Column - Description & CTA */}
          <div className="flex flex-1 flex-col justify-end gap-8">
            <p className="text-lg leading-relaxed text-white/90">
              We transform ideas and business needs into impactful, data-driven
              solutions that help enterprises thrive in the digital age.
            </p>

            <div>
              <Button
                asChild
                className="rounded-lg bg-[#0048ff] hover:bg-[#0048ff]/90"
              >
                <Link href="/contact">Let&apos;s Talk!</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
