import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { HeroSection } from "./_components/hero-section";
import { CasesGridSection } from "./_components/cases-grid-section";
import { CTASection } from "../_components/cta-section";

export const metadata: Metadata = {
  title: "Case Studies — Real Work, Real Results | Cabana Data",
  description:
    "Explore how Cabana Data has helped companies across Latin America solve complex data challenges — from reactive pipelines to AI-ready architectures.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Case Studies", href: "/case-studies" }]}
        className="sr-only"
      />
      <HeroSection />
      <CasesGridSection />
      <CTASection />
    </>
  );
}
