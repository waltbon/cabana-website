import { Metadata } from "next";
import {
  HeroSection,
  ServicesGridSection,
  ContactCTASection,
} from "./_components";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data Strategy & Consulting, Data Engineering & Architecture, Custom Application Development, and AI & Machine Learning Solutions. Everything we do is data-driven.",
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
      <ContactCTASection />
    </>
  );
}
