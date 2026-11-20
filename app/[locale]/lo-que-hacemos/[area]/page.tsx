import { notFound } from "next/navigation";
import { CTASection } from "@/components/capacidades/cta-section";
import {
  AREAS,
  getArea,
  AreaHero,
  MomentSection,
  ChangeSection,
  ServicesSection,
  ProcessSection,
  CaseSection,
  BridgeSection,
  FaqSection,
} from "./_components";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map(({ slug }) => ({ area: slug }));
}

// Metadata, JSON-LD, sitemap and redirects come in the SEO pass (web v2).
export default async function AreaPage({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <AreaHero area={area} />
      <MomentSection slug={area.slug} />
      <ChangeSection area={area} />
      <ServicesSection slug={area.slug} />
      <ProcessSection slug={area.slug} />
      <CaseSection slug={area.slug} />
      <BridgeSection slug={area.slug} />
      <FaqSection slug={area.slug} />
      <CTASection namespace={`areasImpacto.${area.slug}.cta`} />
    </>
  );
}
