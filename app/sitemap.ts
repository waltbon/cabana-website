import { MetadataRoute } from "next";
import { POSTS } from "@/data/blog";
import { siteConfig } from "@/site.config";

const domain = siteConfig.site_domain;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = POSTS;

  const staticUrls: MetadataRoute.Sitemap = [
    // Spanish (default locale, no prefix)
    { url: `${domain}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${domain}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/services/data-analytics-use-case`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/data-health-check`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/capacidades`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/capacidades/consultoria-de-datos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/capacidades/ingenieria-de-datos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/capacidades/producto-digital`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/capacidades/agentes-ia-a-medida`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/careers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${domain}/ruta-ia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/ai-first-move`, changeFrequency: "monthly", priority: 0.8 },
    // case-studies not yet approved by customer — omit until launched
    { url: `${domain}/posts`, changeFrequency: "weekly", priority: 0.8 },
    // English locale (/en/ prefix)
    { url: `${domain}/en`, changeFrequency: "monthly", priority: 1 },
    { url: `${domain}/en/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/en/ai-first-move`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/data-analytics-use-case`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/data-health-check`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/capacidades`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/en/capacidades/consultoria-de-datos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/capacidades/ingenieria-de-datos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/capacidades/producto-digital`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/capacidades/agentes-ia-a-medida`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/careers`, changeFrequency: "weekly", priority: 0.7 },
    // case-studies not yet approved by customer — omit until launched
    { url: `${domain}/en/posts`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${domain}/posts/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticUrls, ...postUrls];
}
