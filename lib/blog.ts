import { POSTS } from "@/data/blog";
import { CATEGORIES, PostCategoryType } from "@/data/blog/categories.data";
import { PostCategory } from "@/types/blog/category";
import { type Post } from "@/types/blog/post";

export const getCategoryBySlug = (slug: PostCategoryType): PostCategory | undefined => 
    CATEGORIES.find(c => c.slug === slug);

export const getAllPostSlugs = (): { slug: string }[] => {
    return POSTS.map(p => ({ slug: p.slug }));
}

export const getPostBySlug = (slug: string): Post | undefined => {
    return POSTS.find(p => p.slug === slug);
}