import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContactFormSection } from "./_components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/contact" : `/${locale}/contact`,
    },
  };
}

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
