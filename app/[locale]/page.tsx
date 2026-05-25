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
  title: "Data Engineering & AI Consulting in Costa Rica | CabanaData",
  description:
    "Specialized Data Engineering and AI consulting for mid-market companies in Costa Rica and LATAM. Built on Google Cloud.",
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
