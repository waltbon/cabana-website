import { PostCategory } from "@/types/blog/category";

export type PostCategoryType = 
    'data-strategy' | 
    'ai' | 
    'software-architecture'
;

export const CATEGORIES: PostCategory[] = [
    {
        slug: 'data-strategy',
        name: 'Estrategia de Datos',
        description: ''
    },
    {
        slug: 'ai',
        name: 'Inteligencia Artificial',
        description: ''
    },
    {
        slug: 'software-architecture',
        name: 'Arquitectura de Software',
        description: ''
    }
]