import { NextResponse } from "next/server";
import { siteConfig } from "@/site.config";
import { POSTS } from "@/data/blog";
import { LLMS_HEADERS, llmsBody } from "@/lib/llms";

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

  const content = `${llmsBody()}
## Blog

${postsSection}
`;

  return new NextResponse(content, { headers: LLMS_HEADERS });
}
