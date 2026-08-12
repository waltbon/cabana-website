import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { HeroSection, JobsListSection } from "./_components";
import { CTASection } from "../_components/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "careers.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/careers" : `/${locale}/careers`,
    },
  };
}

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
