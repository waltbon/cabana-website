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
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
