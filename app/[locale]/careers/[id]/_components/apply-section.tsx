"use client";

import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { Career } from "@/data/careers";

interface ApplySectionProps {
  career: Career;
}

export function ApplySection({ career }: ApplySectionProps) {
  return (
    <Section className="bg-section-dark-2 py-24">
      <Container className="max-w-7xl px-6">
        <FadeIn>
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-cabana-green">
                ¿Te identificás con este rol?
              </span>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Mandanos tu CV y contanos por qué sos la persona indicada
              </h2>
              <p className="mx-auto max-w-lg text-base text-white/70">
                No buscamos el perfil perfecto — buscamos a alguien con criterio,
                hambre de aprender y ganas de construir algo que importe.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-lg bg-cabana-blue px-6 hover:bg-cabana-blue/90"
            >
              <a href={process.env.NEXT_PUBLIC_CAREERS_APPLY_NOW_FORM} target="_blank">
                Aplicar ahora
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
