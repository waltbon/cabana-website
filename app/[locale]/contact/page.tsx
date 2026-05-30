import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContactFormSection } from "./_components";

export const metadata: Metadata = {
  title: "Contáctenos",
  description:
    "Te brindamos una sesión gratuita con nuestros expertos en tecnología. Analicemos cómo podemos ayudarte a transformar tu negocio con soluciones modernas.",
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
