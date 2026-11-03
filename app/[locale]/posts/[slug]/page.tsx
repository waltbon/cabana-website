
import type { ComponentProps } from "react";
import { getTranslations } from "next-intl/server";
import { ArticleSchema } from "@/components/seo/article-schema";
import { siteConfig } from "@/site.config";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug, getCategoryBySlug, getAuthorByName, getPosts, formatPostDate } from "@/lib/blog";
import { getPostService } from "@/lib/blog-services";
import { PostCard, PostThumbnail } from "@/components/posts/post-card";
import { CTASection } from "@/components/capacidades/cta-section";
import MdxLayout from "@/components/mdx-layout";
import { PostSidebar } from "./_components/post-sidebar";
import { PostHeader } from "./_components/post-header";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
  ogUrl.searchParams.append("title", post.title);
  const description = post.excerpt.replace(/<[^>]*>/g, "").trim();
  ogUrl.searchParams.append("description", description);

  const postImage = post.featuredMediaSourceUrl
    ? `${siteConfig.site_domain}${post.featuredMediaSourceUrl}`
    : ogUrl.toString();

  const category = getCategoryBySlug(post.category);

  return {
    title: post.title,
    description: description,
    alternates: {
      canonical: `/posts/${slug}`,
      languages: {
        es: `/posts/${slug}`,
        "x-default": `/posts/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: description,
      url: `${siteConfig.site_domain}/posts/${post.slug}`,
      siteName: siteConfig.site_name,
      locale: "es_ES",
      publishedTime: post.date,
      authors: [post.author],
      section: category?.name,
      images: [{ url: postImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      images: [postImage],
    },
  };
}

/** The page header already renders the post title as h1; MDX headings start one level down. */
function MdxH1(props: ComponentProps<"h2">) {
  return <h2 {...props} />;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);
  const { default: Post } = await import(`@/content/es/${slug}.mdx`)

  if (!post) {
    notFound();
  }

  const t = await getTranslations("blog");
  const date = formatPostDate(post.date, locale);
  const category = getCategoryBySlug(post.category);
  const author = getAuthorByName(post.author);
  const service = getPostService(post.service);
  const related = getPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  // Strip HTML for plain text description
  const description = post.excerpt.trim();

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={description}
        datePublished={post.date}
        dateModified={post.modified}
        authorName={post.author || "Cabana Data"}
        slug={post.slug}
        image={post.featuredMediaSourceUrl ?? undefined}
        articleSection={category?.name}
        authorUrl={author ? `${siteConfig.site_domain}/authors/${author.slug}` : undefined}
        inLanguage="es"
      />

      <PostHeader post={post} date={date} categoryName={category?.name} backLabel={t("backToBlog")} />

      {post.featuredMediaSourceUrl && (
        <div className="bg-linear-to-b from-section-light from-50% to-background to-50% px-4">
          <div className="container max-w-5xl">
            <PostThumbnail
              post={post}
              className="aspect-video md:aspect-[1024/540]"
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
            />
          </div>
        </div>
      )}

      <section className="px-4 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[minmax(0,720px)_340px] lg:justify-between gap-12 items-start">
            <MdxLayout><Post components={{ h1: MdxH1 }} /></MdxLayout>
            <PostSidebar serviceKey={service.key} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-section-light px-4 py-16 md:py-24">
          <div className="container flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl">{t("keepReading")}</h2>
            <div className="grid gap-8 md:grid-cols-3 md:gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        namespace={`blog.cta.${service.key}`}
        href={service.href}
        className="bg-section-light pt-0 md:pt-0"
      />
    </>
  );
}
