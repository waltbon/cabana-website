import { Metadata } from "next";
import {
  HeroSection,
  ServicesGridSection,
  FAQSection,
  ContactCTASection,
} from "./_components";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ServiceWhySection } from "./_components/service-why-section";
import { ServiceGetReadySection } from "./_components/service-get-ready-section";

export const metadata: Metadata = {
  title: "Cabana Data | Ingeniería de datos y Consultoría de IA",
  description:
    "Ayudamos a empresas de América Latina y Estados Unidos a crear flujos de datos escalables y profesionales",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Services", href: "/services" }]}
        className="sr-only"
      />
      <HeroSection />
      <ServicesGridSection />
      <ServiceWhySection />
      <ServiceGetReadySection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}
