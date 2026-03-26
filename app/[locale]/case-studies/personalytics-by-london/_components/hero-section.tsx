"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-section-dark pt-32 pb-0">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-8">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              All Case Studies
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-cabana-green">
                Case Study
              </span>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.05]">
                Crafting a One-of-a-Kind{" "}
                <span className="text-gradient-cabana">
                  Media Planning Platform
                </span>
              </h1>
            </div>
          </FadeIn>

          {/* Client logos */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-6">
              <Image
                src="/clients/london-media.png"
                alt="London Media"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <span className="text-white/30">×</span>
              <Image
                src="/clients/personalytics.png"
                alt="PersonalyticS"
                width={120}
                height={40}
                className="object-contain brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-lg font-semibold text-white/80">
                PersonalyticS
              </span>
            </div>
          </FadeIn>

          {/* Cover image */}
          <FadeIn delay={0.3} className="mt-4">
            <div className="relative h-[420px] w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-cabana-blue/30 to-cabana-navy/60 md:h-[520px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-white/30">
                  <div className="size-16 rounded-2xl border-2 border-white/20 flex items-center justify-center">
                    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M6.75 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                    </svg>
                  </div>
                  <span className="text-sm">Cover image coming soon</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
