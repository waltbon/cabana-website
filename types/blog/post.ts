import { PostCategoryType } from "@/data/blog/categories.data";
import { PostCategory } from "./category";
import { PostTypeType } from "@/data/blog/post-type.data";

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
    cta?: {
      title: string;
      description: string;
      url: string;
    }
  }    