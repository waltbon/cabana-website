import type { Metadata } from "next";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  WhyUsSection,
  TechStackSection,
  CTASection,
} from "./_components";
import { OurClientsSection } from "./_components/our-clients-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs
      ? "Cabana Data | Ingeniería de Datos y Consultoría de IA en Costa Rica"
      : "Cabana Data | Data Engineering & AI Consulting in Costa Rica",
    description: isEs
      ? "Consultoría especializada en ingeniería y ciencia de datos, software e IA para empresas en Costa Rica y Latam."
      : "Specialized Data Engineering and AI consulting for mid-market companies in Costa Rica and LATAM.",
    alternates: {
      canonical: isEs ? "/" : "/en",
    },
    openGraph: {
      title: isEs
        ? "Cabana Data | Ingeniería de Datos y Consultoría de IA en Costa Rica"
        : "Cabana Data | Data Engineering & AI Consulting in Costa Rica",
      description: isEs
        ? "Consultoría especializada en ingeniería y ciencia de datos, software e IA para empresas en Costa Rica y Latam."
        : "Specialized Data Engineering and AI consulting for mid-market companies in Costa Rica and LATAM.",
    },
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurClientsSection />
      <ProblemSection />
      <SolutionSection />
      <WhyUsSection />
      <TechStackSection />
      <CTASection />
    </>
  );
}
