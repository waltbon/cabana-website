import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { PostThumbnail } from "@/components/posts/post-card";
import { cn } from "@/lib/utils";
import type { Post } from "@/types/blog/post";

export function PostHeader({
  post,
  date,
  categoryName,
  backLabel,
}: {
  post: Post;
  date: string;
  categoryName?: string;
  backLabel: string;
}) {
  const hasImage = Boolean(post.featuredMediaSourceUrl);

  return (
    <section className="bg-section-light px-4 pt-10 pb-10 md:pt-16 md:pb-16">
      <div
        className={cn(
          "container gap-8 lg:gap-12",
          hasImage
            ? "max-w-6xl grid lg:grid-cols-[minmax(0,1fr)_minmax(0,45%)] lg:items-center"
            : "max-w-5xl flex flex-col",
        )}
      >
        <div className="flex flex-col gap-5 md:gap-6">
          <Link
            href="/posts"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {backLabel}
          </Link>

          {categoryName && (
            <Badge variant="outline" className="self-start">
              <Link
                href={{
                  pathname: "/posts",
                  query: { category: post.category },
                }}
              >
                {categoryName}
              </Link>
            </Badge>
          )}

          <h1
            className={cn(
              "text-3xl leading-tight",
              hasImage ? "md:text-5xl" : "md:text-6xl",
            )}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          {post.excerpt && (
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-3">
            <div
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cabana-navy text-sm font-bold text-white"
              aria-hidden="true"
            >
              {post.author?.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-foreground">
                {post.author}
              </span>
              <time dateTime={post.date} className="text-muted-foreground">
                {date}
              </time>
            </div>
          </div>
        </div>

        {hasImage && (
          <PostThumbnail
            post={post}
            className="aspect-video"
            sizes="(min-width: 1024px) 540px, 100vw"
            priority
          />
        )}
      </div>
    </section>
  );
}
