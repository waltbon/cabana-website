import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { HeroSection, JobsListSection } from "./_components";
import { CTASection } from "@/components/capacidades/cta-section";
import { siteConfig } from "@/site.config";

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
      // The careers section exists only in Spanish (same pattern as /careers/[id])
      canonical: "/careers",
      languages: {
        es: "/careers",
        "x-default": "/careers",
      },
    },
    openGraph: {
      url: `${siteConfig.site_domain}/careers`,
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
      <CTASection namespace="inicio.cta" />
    </>
  );
}
