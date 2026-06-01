import { PostTypeType } from "@/data/blog/post-type.data";

export interface PostType {
    slug: PostTypeType;
    name: string;
    description: string;
}
