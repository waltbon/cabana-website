import { Metadata } from "next";
import { HeroSection, TeamSection, StorySection } from "./_components";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Cabana Data team. We are data, development, and design experts building software for enterprises and helping businesses become data-driven.",
  alternates: {
    canonical: "/about",
  },
};

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
