import { NextResponse } from "next/server";
import { siteConfig } from "@/site.config";
import { POSTS } from "@/data/blog";

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const recentPosts = [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10); // Get 10 most recent posts

  const postsSection = recentPosts
    .map((post) => {
      const excerpt = post.excerpt.trim().slice(0, 150);
      return `- [${post.title}](${siteConfig.site_domain}/posts/${post.slug}): ${excerpt}...`;
    })
    .join("\n");

  const content = `# Cabana Data

> End-to-end data strategy, engineering, and AI solutions that transform your data into competitive advantage.

${siteConfig.site_description}

Cabana Data helps businesses unlock the power of their data through expert data engineering, analytics, and AI implementation. We partner with organizations to build scalable data infrastructure, implement machine learning solutions, and create data-driven cultures.

## Main Pages

- [Home](${siteConfig.site_domain}): Overview of Cabana Data services and value proposition
- [About](${siteConfig.site_domain}/about): Company mission, team, and values
- [Services](${siteConfig.site_domain}/services): Data engineering, analytics, and AI services
- [Blog](${siteConfig.site_domain}/posts): Insights on data strategy and engineering
- [Contact](${siteConfig.site_domain}/contact): Get in touch with our team

## Services

### Data Strategy & Consulting
Strategic guidance to align your data initiatives with business goals. We help you define your data vision, assess current capabilities, and create actionable roadmaps for data maturity.

### Data Engineering & Architecture
Build scalable, efficient data pipelines and infrastructure. We design and implement modern data platforms on AWS, GCP, and Azure using best practices for data quality, governance, and security.

### Custom Application Development
Tailored solutions that leverage your data assets. We build data applications, dashboards, and tools that empower your teams to make data-driven decisions.

### AI & Machine Learning Solutions
Implement intelligent systems that drive business value. From predictive analytics to natural language processing, we help you harness the power of AI to automate processes and uncover insights.

## Recent Blog Posts

${postsSection}

## FAQ

**What data services does Cabana Data offer?**
We offer end-to-end data solutions including Data Strategy & Consulting, Data Engineering & Architecture, Custom Application Development, and AI & Machine Learning Solutions.

**Do you work with cloud platforms like AWS, GCP, and Azure?**
Yes, we have deep expertise across all major cloud platforms including Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.

**How do you ensure data security and compliance?**
Data security is fundamental to our approach. We implement industry best practices for data governance, encryption, access controls, and audit logging. We help clients meet compliance requirements including GDPR, HIPAA, SOC 2, and other relevant regulations.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
