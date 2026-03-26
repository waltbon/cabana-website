export interface CaseStudy {
    id: string;
    name: string;
    client: string;
    title: string;
    description: string;
    href: string;
    style: {
        colorFrom: string;
        colorTo: string;
    },
    images: {
        hero1: string;
        hero2: string;
    },
    featured: boolean;
    tag: string;
    product: string;
    workInProgress: boolean;
    stats: {
        label: string;
        value: string;
    }[]
}

export const getCaseStudyById = (id: string): CaseStudy | null => {
    return CASE_STUDIES.find(cs => cs.id === id) || null;
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'personalytics',
        name: 'Marketing Intelligence',
        title: "Crafting a One-of-a-Kind Media Planning Platform",
        product: "Personalytics",
        description:
        "We designed the data architecture and reactive pipelines behind PersonalyticS — giving London Media a proprietary planning product powered by unified, real-time audience intelligence.",
        featured: true,
        href: "/case-studies/personalytics",
        tag: "Reactive Data Analysis",
        client: 'London Media',
        style: {
            colorFrom: 'from-cabana-blue/90',
            colorTo: 'to-cabana-navy/90'
        },
        images: {
            hero1: '/case-studies/personalytics/hero-1.jpg',
            hero2: '/case-studies/personalytics/hero-2.jpg',
        },
        workInProgress: true,
        stats: [{ label: "Data sources unified", value: "8+" }, { label: "Manual work reduction", value: "24×" }],
    }
];