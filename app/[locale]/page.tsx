import { Metadata } from "next";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  WhyUsSection,
  TechStackSection,
  CTASection,
} from "./_components";
import { OurClientsSection } from "./_components/our-clients-section";

export const metadata: Metadata = {
  title: "Cabana Data | Ingeniería de datos y Consultoría de IA en Costa Rica",
  description:
    "Consultoría especializada en ingeniería y ciencia de datos, software e IA para empresas en Costa Rica y Latam.",
  alternates: {
    canonical: "/",
  },
};

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
