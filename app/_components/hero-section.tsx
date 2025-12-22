import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-section-dark py-24 md:py-32">
      {/* Background decorative element */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        aria-hidden="true"
      >
        <svg
          width="597"
          height="558"
          viewBox="0 0 597 558"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-[210deg]"
        >
          <path
            d="M298.5 0L597 558H0L298.5 0Z"
            fill="url(#hero-gradient)"
          />
          <defs>
            <linearGradient
              id="hero-gradient"
              x1="0"
              y1="0"
              x2="597"
              y2="558"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0048ff" />
              <stop offset="1" stopColor="#57ff8f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10 max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Tagline */}
          <span className="text-sm font-medium text-white/80">
            Build with purpose
          </span>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl lg:leading-[1]">
            Your data is your next{" "}
            <span className="text-gradient-cabana">Big Advantage</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg text-white/90 md:text-xl">
            Stop wrestling with messy data and start making it your most
            powerful asset.
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="mt-4 gap-2 rounded-lg bg-[#0048ff] px-6 hover:bg-[#0048ff]/90">
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
