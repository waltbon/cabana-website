import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PrivacyContent } from "./_components/privacy-content";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo Cabana Data recopila, usa y protege tus datos personales de acuerdo con el RGPD, CCPA y las leyes de protección de datos aplicables.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Política de Privacidad", href: "/privacidad" }]}
        className="sr-only"
      />
      <PrivacyContent />
    </>
  );
}
