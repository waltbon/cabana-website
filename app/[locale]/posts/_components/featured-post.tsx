import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { PostThumbnail } from "@/components/posts/post-card";
import { getCategoryBySlug, formatPostDate } from "@/lib/blog";
import type { Post } from "@/types/blog/post";

export async function FeaturedPost({ post, locale }: { post: Post; locale: string }) {
  const t = await getTranslations("blog");
  const category = getCategoryBySlug(post.category);

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group grid items-center gap-6 lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-12"
    >
      <PostThumbnail
        post={post}
        className="aspect-video [&_svg]:size-12"
        sizes="(min-width: 1024px) 640px, 100vw"
        priority
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="green">{t("featured")}</Badge>
          {category && <Badge variant="outline">{category.name}</Badge>}
        </div>
        <h2
          className="text-2xl md:text-4xl group-hover:text-primary transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <p className="text-base md:text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center gap-6 text-sm">
          <time dateTime={post.date} className="text-muted-foreground">
            {formatPostDate(post.date, locale)}
          </time>
          <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
            {t("readArticle")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
