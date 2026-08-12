import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection, TeamSection, StorySection } from "./_components";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.seo" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/about" : `/${locale}/about`,
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "About Us", href: "/about" }]}
        className="sr-only"
      />
      <HeroSection />
      <TeamSection />
      <StorySection />
    </>
  );
}
