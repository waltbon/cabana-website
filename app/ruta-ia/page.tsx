import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/hero-section";
import { MomentSection } from "./_components/moment-section";
import { PromiseSection } from "./_components/promise-section";
import { DeliverablesSection } from "./_components/deliverables-section";
import { ProcessSection } from "./_components/process-section";
import { ClientTimeSection } from "./_components/client-time-section";
import { PricingSection } from "./_components/pricing-section";
import { NotForSection } from "./_components/not-for-section";
import { FaqSection, type FaqItem } from "./_components/faq-section";
import { FinalCTASection } from "./_components/final-cta-section";
import { getRutaIaTranslations } from "./lib/i18n";
import { ORGANIZATION_ID, AUTHOR_ID, SERVICE_ID } from "./layout";

const SITE_ORIGIN = "https://cabanadata.com";
const SITE_URL = `${SITE_ORIGIN}/ruta-ia`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

export default async function RutaIAPage() {
  const [tMeta, tNav, tFaq] = await Promise.all([
    getRutaIaTranslations("meta"),
    getRutaIaTranslations("nav"),
    getRutaIaTranslations("faq"),
  ]);
  const faqItems = tFaq.raw("items") as FaqItem[];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Ruta IA",
      url: SITE_URL,
      inLanguage: "es",
      publisher: { "@id": ORGANIZATION_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      name: tMeta("title"),
      description: tMeta("description"),
      url: SITE_URL,
      inLanguage: "es",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": SERVICE_ID },
      datePublished: "2026-03-30",
      dateModified: "2026-10-25",
      author: { "@id": AUTHOR_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "Ruta IA",
      serviceType: tMeta("serviceType"),
      description: tMeta("description"),
      provider: { "@id": ORGANIZATION_ID },
      areaServed: ["Costa Rica", "Latinoamérica"],
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        price: "12000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "12000",
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      isPartOf: { "@id": WEBPAGE_ID },
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
          item: SITE_ORIGIN,
        },
        { "@type": "ListItem", position: 2, name: "Ruta IA", item: SITE_URL },
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
      <Navbar
        labels={{
          cta: tNav("cta"),
          contact: tNav("contact"),
          toggleMenu: tNav("toggleMenu"),
        }}
      />
      <main>
        <HeroSection />
        <MomentSection />
        <PromiseSection />
        <DeliverablesSection />
        <ProcessSection />
        <ClientTimeSection />
        <PricingSection />
        <NotForSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
