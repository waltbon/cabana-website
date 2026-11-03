import Image from "next/image";
import { FileText } from "lucide-react";
import { Link } from "@/i18n/navigation";

import { Badge } from "@/components/ui/badge";
import { Post } from "@/types/blog/post";
import { getCategoryBySlug, formatPostDate } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function PostThumbnail({
  post,
  className,
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority,
}: {
  post: Post;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-cabana-dark flex items-center justify-center",
        className
      )}
    >
      {post.featuredMediaSourceUrl ? (
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          src={post.featuredMediaSourceUrl}
          alt={post.title}
          fill
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <FileText className="size-8 text-cabana-green" aria-hidden="true" />
      )}
    </div>
  );
}

export function PostCard({ post, locale }: { post: Post; locale: string }) {
  const category = getCategoryBySlug(post.category);

  return (
    <Link href={`/posts/${post.slug}`} className="group flex flex-col gap-4 not-prose">
      <PostThumbnail post={post} className="aspect-video" />
      <div className="flex flex-col gap-2">
        {category && (
          <Badge variant="outline" className="self-start">
            {category.name}
          </Badge>
        )}
        <h3
          className="text-xl leading-snug group-hover:text-primary transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <time dateTime={post.date} className="text-xs text-muted-foreground">
          {formatPostDate(post.date, locale)}
        </time>
      </div>
    </Link>
  );
}
