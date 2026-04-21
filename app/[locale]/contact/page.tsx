import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/craft";
import { ContactFormSection } from "./_components";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free 30-minute Data Strategy Session with our tech leaders. Let's discuss how we can help transform your business with data-driven solutions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Contact Us", href: "/contact" }]}
        className="sr-only"
      />
      <ContactFormSection />
    </>
  );
}
