import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { getCareerById, getCareerIds } from "@/data/careers";
import { JobHeroSection, JobDetailSection, ApplySection } from "./_components";

export function generateStaticParams() {
  return getCareerIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const career = getCareerById(id);

  if (!career) return {};

  return {
    title: `${career.title} — Carreras`,
    description: career.shortDescription,
    alternates: {
      canonical: `/careers/${career.id}`,
      // Job posts exist only in Spanish (same pattern as /posts/[slug])
      languages: {
        es: `/careers/${career.id}`,
        "x-default": `/careers/${career.id}`,
      },
    },
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const career = getCareerById(id);

  if (!career) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Carreras", href: "/careers" },
          { name: career.title, href: `/careers/${career.id}` },
        ]}
        className="sr-only"
      />
      <JobHeroSection career={career} />
      <JobDetailSection career={career} />
      <ApplySection career={career} />
    </>
  );
}
