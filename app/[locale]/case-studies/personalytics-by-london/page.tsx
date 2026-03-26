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

export const metadata: Metadata = {
  title:
    "Crafting a One-of-a-Kind Media Planning Platform — London Media & PersonalyticS | Cabana Data",
  description:
    "How Cabana Data helped London Media build PersonalyticS — a proprietary media planning platform powered by a unified, real-time data architecture.",
  alternates: {
    canonical: "/case-studies/personalytics-by-london",
  },
};

export default function PersonalyticsByLondonPage() {
  return (
    <>
      <HeroSection />
      <ClientOverviewSection />
      <ChallengeSection />
      <ApproachSection />
      <ResultsSection />
      <ImpactSection />
      <TakeawaySection />
      <MoreCasesSection />
      <CTASection />
    </>
  );
}
