import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PrivacyContent } from "./_components/privacy-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacidad.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/privacidad" : `/${locale}/privacidad`,
    },
  };
}

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
