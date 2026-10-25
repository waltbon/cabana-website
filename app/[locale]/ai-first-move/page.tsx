import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/site.config";
import { HeroSection } from "./_components/hero-section";
import { MomentSection } from "./_components/moment-section";
import { PromiseSection } from "./_components/promise-section";
import { DeliverablesSection } from "./_components/deliverables-section";
import { ProcessSection } from "./_components/process-section";
import { PrincipleSection } from "./_components/principle-section";
import { ClientTimeSection } from "./_components/client-time-section";
import { PricingSection } from "./_components/pricing-section";
import { NotForSection } from "./_components/not-for-section";
import { FaqSection, type FaqItem } from "./_components/faq-section";
import { FinalCTASection } from "./_components/final-cta-section";

const PATH = "/ai-first-move";

function localePath(locale: string, path = "") {
  return locale === "es" ? path || "/" : `/${locale}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aiFirstMove.meta" });
  const url = `${siteConfig.site_domain}${localePath(locale, PATH)}`;

  return {
    // The copy's title already ends in "| Cabana Data"; skip the layout template
    title: { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: localePath(locale, PATH),
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url,
    },
    twitter: {
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default async function AIFirstMovePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [tMeta, tFaq] = await Promise.all([
    getTranslations({ locale, namespace: "aiFirstMove.meta" }),
    getTranslations({ locale, namespace: "aiFirstMove.faq" }),
  ]);
  const faqItems = tFaq.raw("items") as FaqItem[];
  const homeUrl = `${siteConfig.site_domain}${localePath(locale)}`;
  const pageUrl = `${siteConfig.site_domain}${localePath(locale, PATH)}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI First Move",
      serviceType: tMeta("serviceType"),
      description: tMeta("description"),
      provider: {
        "@type": "Organization",
        name: "Cabana Data",
        url: siteConfig.site_domain,
      },
      areaServed: ["Costa Rica", "Latinoamérica"],
      url: pageUrl,
      offers: {
        "@type": "Offer",
        price: "24500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "24500",
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: tMeta("breadcrumbHome"),
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI First Move",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HeroSection />
      <MomentSection />
      <PromiseSection />
      <DeliverablesSection />
      <ProcessSection />
      <PrincipleSection />
      <ClientTimeSection />
      <PricingSection />
      <NotForSection />
      <FaqSection />
      <FinalCTASection />
    </>
  );
}
