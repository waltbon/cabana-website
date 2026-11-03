import { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

const DISALLOW = ["/api/", "/admin/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      // AI Crawlers - explicitly allowed for LLM SEO. Named groups do not
      // inherit the "*" group, so each one repeats the disallow list.
      { userAgent: "GPTBot", allow: "/", disallow: DISALLOW },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: DISALLOW },
      { userAgent: "ChatGPT-User", allow: "/", disallow: DISALLOW },
      { userAgent: "ClaudeBot", allow: "/", disallow: DISALLOW },
      { userAgent: "PerplexityBot", allow: "/", disallow: DISALLOW },
      { userAgent: "Bytespider", allow: "/", disallow: DISALLOW },
      { userAgent: "Google-Extended", allow: "/", disallow: DISALLOW },
      { userAgent: "Cohere-AI", allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${siteConfig.site_domain}/sitemap.xml`,
  };
}
