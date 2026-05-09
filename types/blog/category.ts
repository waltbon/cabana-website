import { PostCategoryType } from "@/data/blog/categories.data";

export interface PostCategory {
    slug: PostCategoryType;
    name: string;
    description: string;
}
