import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import { PostCard } from "@/components/posts/post-card";
import { SearchInput } from "@/components/posts/search-input";
import { CTASection } from "@/components/capacidades/cta-section";
import { getPosts } from "@/lib/blog";
import { POST_SERVICES } from "@/lib/blog-services";
import { siteConfig } from "@/site.config";

import { PostsHeader } from "./_components/posts-header";
import { CategoryChips } from "./_components/category-chips";
import { FeaturedPost } from "./_components/featured-post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale !== "es";
  return {
    title: isEn
      ? "Blog | Data Engineering & AI Insights"
      : "Blog | Ingeniería de Datos e IA",
    description: isEn
      ? "Articles on data engineering, AI adoption, and architecture from the Cabana Data team."
      : "Artículos sobre ingeniería de datos, adopción de IA y arquitectura del equipo de Cabana Data.",
    alternates: {
      canonical: locale === "es" ? "/posts" : `/${locale}/posts`,
      languages: {
        es: "/posts",
        en: "/en/posts",
        "x-default": "/posts",
      },
    },
    openGraph: {
      url: locale === "es" ? `${siteConfig.site_domain}/posts` : `${siteConfig.site_domain}/${locale}/posts`,
    },
  };
}

export const dynamic = "auto";
export const revalidate = 600;

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const { locale } = await params;
  const { category, search } = await searchParams;
  const t = await getTranslations("blog");

  const [featured, ...rest] = getPosts({ category, search });
  const cta = POST_SERVICES["ruta-ia"];

  return (
    <>
      <PostsHeader />

      <section className="px-4 pt-12 pb-16 md:pb-24">
        <div className="container flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:justify-between">
            <CategoryChips selected={category} search={search} />
            <SearchInput defaultValue={search} />
          </div>

          {featured ? (
            <>
              <FeaturedPost post={featured} locale={locale} />

              {rest.length > 0 && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl">{t("moreArticles")}</h2>
                  <div className="grid gap-8 md:grid-cols-3 md:gap-6">
                    {rest.map((post) => (
                      <PostCard key={post.slug} post={post} locale={locale} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex h-24 w-full items-center justify-center rounded-xl border bg-section-light">
              <p className="text-muted-foreground">{t("empty")}</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        namespace={`blog.cta.${cta.key}`}
        href={cta.href}
        className="bg-section-light"
      />
    </>
  );
}
