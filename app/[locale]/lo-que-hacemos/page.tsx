import { CTASection } from "@/components/capacidades/cta-section";
import {
  HeroSection,
  AreasSection,
  StartSection,
  MethodSection,
  StackSection,
  FaqSection,
} from "./_components";

// Metadata, JSON-LD, sitemap and redirects come in the SEO pass (web v2).
export default function LoQueHacemosPage() {
  return (
    <>
      <HeroSection />
      <AreasSection />
      <StartSection />
      <MethodSection />
      <StackSection />
      <FaqSection />
      <CTASection namespace="loQueHacemos.cta" />
    </>
  );
}
