import { Metadata } from "next";
import { PipedriveContactForm } from "./_components/pipedrive-contact-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/craft";

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
      <div className="relative container">

        <Section className="bg-white py-0">
          <div className="flex min-h-screen flex-col lg:flex-row">
            <PipedriveContactForm />
          </div>
        </Section>
      </div>
    </>
  );
}
