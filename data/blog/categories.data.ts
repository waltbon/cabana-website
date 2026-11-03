import { PostCategory } from "@/types/blog/category";

export type PostCategoryType = 
    'data-strategy' | 
    'ai' | 
    'software-architecture'
;

export const CATEGORIES: PostCategory[] = [
    {
        slug: 'data-strategy',
        name: 'Estrategia de datos',
        description: ''
    },
    {
        slug: 'ai',
        name: 'Inteligencia artificial',
        description: ''
    },
    {
        slug: 'software-architecture',
        name: 'Arquitectura de software',
        description: ''
    }
]