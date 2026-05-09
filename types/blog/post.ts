import { PostCategoryType } from "@/data/blog/categories.data";
import { PostCategory } from "./category";

export interface Post {                                                                                                    
    slug: string;                                                                                                 
    date: string;                                                                                                 
    modified: string;                                                                                             
    author: string;
    category: PostCategoryType,
    featuredMediaSourceUrl: string | null;                                                                           
    categories: number[];                                                                                         
                                                                                                                  
    title: {                                                                                                      
      rendered: string;                                                                                           
    };                                                                                                            
                                                                                                                
    excerpt: {
      rendered: string;
    };

    content: {
      rendered: string;
    };              

  }    