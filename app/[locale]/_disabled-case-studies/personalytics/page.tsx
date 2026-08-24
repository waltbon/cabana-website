import { Metadata } from "next";
import { HeroSection } from "./_components/hero-section";
import { ClientOverviewSection } from "./_components/client-overview-section";
import { ChallengeSection } from "./_components/challenge-section";
import { ApproachSection } from "./_components/approach-section";
import { ResultsSection } from "./_components/results-section";
import { ImpactSection } from "./_components/impact-section";
import { TakeawaySection } from "./_components/takeaway-section";
import { MoreCasesSection } from "./_components/more-cases-section";
import { CTASection } from "../../_components/cta-section";
import { getCaseStudyById } from "@/data/_disabled-case-studies";
import NotFound from "../../not-found";

export const metadata: Metadata = {
  title:
    "Crafting a One-of-a-Kind Media Planning Platform — London Media & Personalytics | Cabana Data",
  description:
    "How Cabana Data helped London Media build Personalytics — a proprietary media planning platform powered by a unified, real-time data architecture.",
  alternates: {
    canonical: "/case-studies/personalytics-by-london",
  },
};

export default function PersonalyticsByLondonPage() {
  const caseStudy = getCaseStudyById('personalytics');

  if (!caseStudy) {
    return <NotFound />
  }

  return (
    <>
      <HeroSection caseStudy={caseStudy} />
      <ClientOverviewSection />
      <ChallengeSection {...caseStudy}  />
      <ApproachSection />
      <ResultsSection />
      <ImpactSection />
      <TakeawaySection />
      <MoreCasesSection />
      <CTASection />
    </>
  );
}
