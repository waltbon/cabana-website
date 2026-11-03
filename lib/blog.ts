import { POSTS } from "@/data/blog";
import { CATEGORIES, PostCategoryType } from "@/data/blog/categories.data";
import { AUTHORS } from "@/data/blog/authors.data";
import { PostCategory } from "@/types/blog/category";
import { PostAuthor } from "@/types/blog/author";
import { type Post } from "@/types/blog/post";

export const getCategoryBySlug = (slug: PostCategoryType): PostCategory | undefined =>
    CATEGORIES.find(c => c.slug === slug);

export const getAuthorByName = (name: string): PostAuthor | undefined =>
    AUTHORS.find(a => a.name === name);

export const getAllPostSlugs = (): { slug: string }[] => {
    return POSTS.map(p => ({ slug: p.slug }));
}

export const getPostBySlug = (slug: string): Post | undefined => {
    return POSTS.find(p => p.slug === slug);
}

/** Posts sorted newest first, optionally narrowed by category and a text search over title and excerpt. */
export const getPosts = ({ category, search }: { category?: string; search?: string } = {}): Post[] => {
    const term = search?.trim().toLowerCase();
    return [...POSTS]
        .filter(p => !category || p.category === category)
        .filter(p => !term || `${p.title} ${p.excerpt}`.toLowerCase().includes(term))
        .sort((a, b) => b.date.localeCompare(a.date));
}

export const formatPostDate = (date: string, locale: string): string =>
    new Date(date).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });
