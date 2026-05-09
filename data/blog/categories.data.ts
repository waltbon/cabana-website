import { PostCategory } from "@/types/blog/category";

export type PostCategoryType = 
    'data-strategy' | 
    'ai-readiness-assessment'
;

export const CATEGORIES: PostCategory[] = [
    {
        slug: 'data-strategy',
        name: 'Data Strategy',
        description: ''
    },
    {
        slug: 'ai-readiness-assessment',
        name: 'AI Readiness Assessment',
        description: ''
    }
]