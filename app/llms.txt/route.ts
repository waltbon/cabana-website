import { NextResponse } from "next/server";
import { siteConfig } from "@/site.config";

export async function GET() {
  const content = `# Cabana Data

> End-to-end data strategy, engineering, and AI solutions that transform your data into competitive advantage.

${siteConfig.site_description}

## Main Pages

- [Home](${siteConfig.site_domain}): Overview of Cabana Data services and value proposition
- [About](${siteConfig.site_domain}/about): Company mission, team, and values
- [Services](${siteConfig.site_domain}/services): Data engineering, analytics, and AI services
- [Blog](${siteConfig.site_domain}/posts): Insights on data strategy and engineering
- [Contact](${siteConfig.site_domain}/contact): Get in touch with our team

## Services

- Data Strategy & Consulting: Strategic guidance to align your data initiatives with business goals
- Data Engineering & Architecture: Build scalable, efficient data pipelines and infrastructure
- Custom Application Development: Tailored solutions that leverage your data assets
- AI & Machine Learning Solutions: Implement intelligent systems that drive business value

## Optional

- [Categories](${siteConfig.site_domain}/posts/categories): Blog post categories
- [Authors](${siteConfig.site_domain}/posts/authors): Blog authors
- [Tags](${siteConfig.site_domain}/posts/tags): Blog post tags
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
