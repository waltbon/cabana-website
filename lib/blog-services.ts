import type { PostService } from "@/types/blog/post";

/** Message key and service page each post CTA points to. */
export const POST_SERVICES: Record<PostService, { key: "rutaIa" | "aiFirstMove"; href: string }> = {
  "ruta-ia": { key: "rutaIa", href: "/ruta-ia" },
  "ai-first-move": { key: "aiFirstMove", href: "/ai-first-move" },
};

export const getPostService = (service?: PostService) => POST_SERVICES[service ?? "ruta-ia"];
