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
    { url: `${domain}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/services/ai-readiness-assessment`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/application-development`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/custom-ai-agents`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/dashboards-analytics-interfaces`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/data-analytics-use-case`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/data-consulting`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/data-engineering`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/data-health-check`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/digital-product`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/services/product-design-discovery`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/careers`, changeFrequency: "weekly", priority: 0.7 },
    // case-studies not yet approved by customer — omit until launched
    { url: `${domain}/posts`, changeFrequency: "weekly", priority: 0.8 },
    // English locale (/en/ prefix)
    { url: `${domain}/en`, changeFrequency: "monthly", priority: 1 },
    { url: `${domain}/en/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/en/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/en/services/ai-readiness-assessment`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/application-development`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/custom-ai-agents`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/dashboards-analytics-interfaces`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/data-analytics-use-case`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/data-consulting`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/data-engineering`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/data-health-check`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/digital-product`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/services/product-design-discovery`, changeFrequency: "monthly", priority: 0.8 },
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
