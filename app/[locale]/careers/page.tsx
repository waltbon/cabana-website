import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { HeroSection, JobsListSection } from "./_components";
import { CTASection } from "../_components/cta-section";

export const metadata: Metadata = {
  title: "Carreras — Únete al equipo | Cabana Data",
  description:
    "Explorá las vacantes abiertas en Cabana Data. Trabajamos rápido, con estándares altos y con clientes que dependen de lo que hacemos.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Carreras", href: "/careers" }]}
        className="sr-only"
      />
      <HeroSection />
      <JobsListSection />
      <CTASection />
    </>
  );
}
