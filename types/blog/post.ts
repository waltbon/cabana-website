import { PostCategoryType } from "@/data/blog/categories.data";
import { PostCategory } from "./category";
import { PostTypeType } from "@/data/blog/post-type.data";

export type PostService = "ruta-ia" | "ai-first-move";

export interface Post {                                                                                                    
    slug: string;                                                                                                 
    title: string;
    date: string;                                                                                                 
    modified: string;                                                                                             
    author: string;
    category: PostCategoryType;
    type: PostTypeType;
    featuredMediaSourceUrl: string | null;                                                                                                                                                                                              
    excerpt: string;
    /** Service the post's CTA and sidebar point to. Defaults to Ruta IA. */
    service?: PostService;
    cta?: {
      title: string;
      description: string;
      url: string;
    }
  }    