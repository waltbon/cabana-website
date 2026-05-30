import { Metadata } from "next";
import { HeroSection } from "./_components/hero-section";
import { ProblemSection } from "./_components/problem-section";
import { DimensionsSection } from "./_components/dimensions-section";
import { DeliverablesSection } from "./_components/deliverables-section";
import { TrustSignalSection } from "./_components/trust-signal-section";
import { TimelineSection } from "./_components/timeline-section";
import { PersonasSection } from "./_components/personas-section";
import { CTASection } from "./_components/cta-section";

export const metadata: Metadata = {
  title: "Cabana Data | Ruta IA: Diagnóstico de Preparación para Inteligencia Artificial",
  description:
    "Evalúa la madurez de tu infraestructura de datos para IA en 2-3 semanas. Ruta IA es el diagnóstico técnico de Cabana Data para empresas latinoamericanas que quieren implementar IA con base sólida.",
  alternates: {
    canonical: "/services/ai-readiness-assessment",
  },
};

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <DimensionsSection />
      <DeliverablesSection />
      <TrustSignalSection />
      <TimelineSection />
      <PersonasSection />
      <CTASection />
    </>
  );
}
