// Impact areas under /lo-que-hacemos. Texts live in messages under
// `areasImpacto.<slug>` (copy: docs/copy-web-v2/6M-02.3.1 … 6M-02.3.5).
export type AreaSlug =
  | "modernizacion-de-datos"
  | "conocimiento-empresarial"
  | "ciencia-de-datos-y-machine-learning"
  | "automatizacion-con-agentes-de-ia"
  | "productos-digitales";

export type AreaConfig = {
  slug: AreaSlug;
  /** Dark illustration for the hero (drawn on the section navy). */
  heroImage?: string;
  /** Light illustration (transparent) under "Lo que cambia". */
  changeImage?: string;
};

export const AREAS: AreaConfig[] = [
  {
    slug: "modernizacion-de-datos",
    heroImage: "/capacidades/hero-ingenieria-de-datos.webp",
    changeImage: "/ai-first-move/deliverable-machine.webp",
  },
  {
    slug: "conocimiento-empresarial",
    heroImage: "/capacidades/hero-consultoria-de-datos.webp",
  },
  // No illustration fits yet (pending a new one).
  { slug: "ciencia-de-datos-y-machine-learning" },
  {
    slug: "automatizacion-con-agentes-de-ia",
    heroImage: "/capacidades/hero-agentes-ia-a-medida.webp",
  },
  {
    slug: "productos-digitales",
    heroImage: "/capacidades/hero-producto-digital.webp",
  },
];

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
