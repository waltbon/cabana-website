import { Metadata } from "next";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  WhyUsSection,
  TechStackSection,
  CTASection,
} from "./_components";

export const metadata: Metadata = {
  title: "Transform Your Data into Your Next Big Advantage",
  description:
    "Cabana Data helps enterprises turn messy data into strategic assets. End-to-end data strategy, engineering, architecture, and AI solutions.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyUsSection />
      <TechStackSection />
      <CTASection />
    </>
  );
}
