import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
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
  return (
    <section className="bg-section-light px-4 pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="container max-w-5xl flex flex-col gap-5 md:gap-6">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {backLabel}
        </Link>

        {categoryName && (
          <Badge variant="outline" className="self-start">
            <Link href={{ pathname: "/posts", query: { category: post.category } }}>
              {categoryName}
            </Link>
          </Badge>
        )}

        <h1
          className="text-3xl md:text-6xl leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        {post.excerpt && (
          <p className="text-base md:text-xl text-muted-foreground max-w-4xl">{post.excerpt}</p>
        )}

        <div className="flex items-center gap-3">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cabana-navy text-sm font-bold text-white"
            aria-hidden="true"
          >
            {post.author?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-foreground">{post.author}</span>
            <time dateTime={post.date} className="text-muted-foreground">
              {date}
            </time>
          </div>
        </div>
      </div>
    </section>
  );
}
