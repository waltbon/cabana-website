import { siteConfig } from "@/site.config";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  slug: string;
  image?: string;
  wordCount?: number;
  inLanguage?: string;
  articleSection?: string;
  authorUrl?: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
  slug,
  image,
  wordCount,
  inLanguage = "es",
  articleSection,
  authorUrl,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified,
    inLanguage,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl && { url: authorUrl }),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.site_name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.site_domain}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.site_domain}/posts/${slug}`,
    },
    ...(image && { image }),
    ...(wordCount && { wordCount }),
    ...(articleSection && { articleSection }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
