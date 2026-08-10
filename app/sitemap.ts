import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/wordpress";
import { siteConfig } from "@/site.config";

const domain = siteConfig.site_domain;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticUrls: MetadataRoute.Sitemap = [
    // Spanish (default locale, no prefix)
    { url: `${domain}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${domain}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/services/ai-readiness-assessment`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/careers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${domain}/case-studies`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/case-studies/personalytics`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${domain}/posts`, changeFrequency: "weekly", priority: 0.8 },
    // English locale (/en/ prefix)
    { url: `${domain}/en`, changeFrequency: "monthly", priority: 1 },
    { url: `${domain}/en/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/en/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${domain}/en/services/ai-readiness-assessment`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/careers`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${domain}/en/case-studies`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${domain}/en/case-studies/personalytics`, changeFrequency: "monthly", priority: 0.7 },
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
