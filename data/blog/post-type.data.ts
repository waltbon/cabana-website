import { PostType } from "@/types/blog/post-type";

export type PostTypeType = 
    'deep-dive' | 
    'success-stories' | 
    'tutorial' | 
    'opinion' |
    'postmortem'
;

export const POST_TYPES: PostType[] = [
    {
        slug: 'deep-dive',
        name: 'Deep Dive',
        description: ''
    },
    {
        slug: 'success-stories',
        name: 'Casos de Éxito',
        description: ''
    },
    {
        slug: 'tutorial',
        name: 'Tutorial',
        description: ''
    },
    {
        slug: 'opinion',
        name: 'Opinión',
        description: ''
    },
    {
        slug: 'postmortem',
        name: 'Post-Mortem',
        description: ''
    }
]