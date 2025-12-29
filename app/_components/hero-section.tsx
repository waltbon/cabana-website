import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-section-dark py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-cabana-dark/80" />
      </div>

      <Container className="relative z-10 max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Tagline */}
          <span className="text-sm font-medium uppercase text-white/80">
            Build with purpose
          </span>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl lg:leading-[1]">
            Your data is your next <br />
            <span className="text-gradient-cabana">Big Advantage</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg text-white/90 md:text-xl">
            Stop wrestling with messy data and start making it your most
            powerful asset.
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="mt-4 gap-2 rounded-lg bg-cabana-blue text-cabana-light px-6 hover:bg-cabana-blue/90">
            <Link href="/contact">
              Start building!
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
