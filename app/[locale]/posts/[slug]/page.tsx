
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { ArticleSchema } from "@/components/seo/article-schema";
import { siteConfig } from "@/site.config";

import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug, getCategoryBySlug, getAuthorByName } from "@/lib/blog";
import MdxLayout from "@/components/mdx-layout";
import { PostSidebar } from "./_components/post-sidebar";

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
  ogUrl.searchParams.append("title", post.title.rendered);
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim();
  ogUrl.searchParams.append("description", description);

  const postImage = post.featuredMediaSourceUrl
    ? `${siteConfig.site_domain}${post.featuredMediaSourceUrl}`
    : ogUrl.toString();

  const category = getCategoryBySlug(post.category);

  return {
    title: post.title.rendered,
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
      title: post.title.rendered,
      description: description,
      url: `${siteConfig.site_domain}/posts/${post.slug}`,
      siteName: siteConfig.site_name,
      locale: "es_ES",
      publishedTime: post.date,
      authors: [post.author],
      section: category?.name,
      images: [{ url: postImage, width: 1200, height: 630, alt: post.title.rendered }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: description,
      images: [postImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const { default: Post } = await import(`@/content/es/${slug}.mdx`)

  if (!post) {
    notFound();
  }

  const featuredMedia = post.featuredMediaSourceUrl;

  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = getCategoryBySlug(post.category);
  const author = getAuthorByName(post.author);

  // Strip HTML for plain text description
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim();

  return (
    <>
      <ArticleSchema
        headline={post.title.rendered}
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

      {/* ── Post Hero Header ── */}
      <div className="relative bg-cabana-dark overflow-hidden flex items-end min-h-[480px] md:min-h-[560px]">
        {featuredMedia ? (
          <>
            <Image
              src={featuredMedia}
              alt={post.title.rendered}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-cabana-dark via-cabana-dark/60 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-[#0048ff]/10 via-transparent to-cabana-green/5" />
        )}

        <Container className="relative z-10 py-16 md:py-24">
          {/* Category badge */}
          {category && (
            <div className="mb-5">
              <Link
                href={`/posts/?category=${post.category}`}
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-[#0048ff] text-white hover:bg-[#0048ff]/80 transition-colors"
              >
                {category.name}
              </Link>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </h1>

          {/* Excerpt */}
          {description && (
            <p className="text-base md:text-lg text-white/60 max-w-2xl mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {/* Author + Date */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#0048ff] flex items-center justify-center text-white font-bold text-xs shrink-0">
                {post.author?.charAt(0).toUpperCase()}
              </div>
              <Link
                href={`/posts/?author=${post.author}`}
                className="text-white/80 hover:text-white font-medium transition-colors"
              >
                {post.author}
              </Link>
            </div>
            <span className="text-white/25">·</span>
            <time dateTime={post.date} className="text-white/50">
              {date}
            </time>
          </div>
        </Container>
      </div>

      {/* ── Article Body ── */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            <MdxLayout><Post /></MdxLayout>
            <PostSidebar />
          </div>
        </Container>
      </Section>
    </>
  );
}
