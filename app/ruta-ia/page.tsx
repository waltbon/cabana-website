import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/hero-section";
import { ProblemSection } from "./_components/problem-section";
import { TheSolutionSection } from "./_components/the-solution-section";
import { DimensionsSection } from "./_components/dimensions-section";
import { HowItWorksSection } from "./_components/how-it-works-section";
import { TiersSection } from "./_components/tiers-section";
import { ProfilesSection } from "./_components/profiles-section";
import { WorkshopsSection } from "./_components/workshops-section";
import { FinalCTASection } from "./_components/final-cta-section";
import { ClientsSection } from "./_components/clients-section";
import { CaseStudiesSection } from "./_components/case-studies-section";
import { FaqSection } from "./_components/faq-section";
import { SampleReportSection } from "./_components/sample-report-section";
import { dimensions } from "./data/dimensions";
import { faqItems } from "./data/faq";
import { ORGANIZATION_ID, AUTHOR_ID } from "./layout";

const SITE_URL = "https://cabanadata.com/ruta-ia";
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Ruta IA",
  url: SITE_URL,
  inLanguage: "es",
  publisher: { "@id": ORGANIZATION_ID },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": WEBPAGE_ID,
  name: "Ruta IA: Diagnóstico, Preparación y Planificación Empresarial",
  url: SITE_URL,
  inLanguage: "es",
  isPartOf: { "@id": WEBSITE_ID },
  datePublished: "2026-03-30",
  dateModified: "2026-09-20",
  author: { "@id": AUTHOR_ID },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  isPartOf: { "@id": WEBPAGE_ID },
  mainEntity: [
    ...dimensions.map((d) => ({
      "@type": "Question",
      name: d.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: d.description,
      },
    })),
    ...faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  ],
};

export default function RutaIAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <TheSolutionSection />
        <DimensionsSection />
        <SampleReportSection />
        <HowItWorksSection />
        <TiersSection />
        <ClientsSection />
        <CaseStudiesSection />
        <FaqSection />
        <ProfilesSection />
        <WorkshopsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
