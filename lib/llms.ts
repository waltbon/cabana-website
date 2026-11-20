/**
 * Shared content for /llms.txt and /llms-full.txt (B-046).
 *
 * Every link text and description comes from the titles and meta
 * descriptions already published in messages/*.json, so these files never
 * carry copy that the pages do not show. Add a route here when it ships.
 */
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import { AREAS, type AreaSlug } from "@/app/[locale]/lo-que-hacemos/[area]/_components/areas";
import { localizedHref } from "@/lib/localized-paths";
import { siteConfig } from "@/site.config";

type Locale = "es" | "en";
type Meta = { title: string; description: string };
/** Only the keys these files read; es.json and en.json differ elsewhere. */
type Messages = {
  inicio: { meta: Meta };
  rutaIa: { meta: Meta };
  aiFirstMove: { meta: Meta };
  loQueHacemos: { meta: Meta };
  areasImpacto: Record<AreaSlug, { meta: Meta }>;
  comoTrabajamos: { meta: Meta };
  contact: { seo: { title: string } };
};

const MESSAGES: Record<Locale, Messages> = { es, en };

const TITLE_SUFFIX = " | Cabana Data";

function url(path: string, locale: Locale) {
  const localized = localizedHref(path, locale);
  const prefixed = locale === "es" ? localized : `/en${localized === "/" ? "" : localized}`;
  return `${siteConfig.site_domain}${prefixed === "/" ? "" : prefixed}`;
}

function entry(path: string, locale: Locale, meta: Meta) {
  const title = meta.title.endsWith(TITLE_SUFFIX)
    ? meta.title.slice(0, -TITLE_SUFFIX.length)
    : meta.title;
  return `- [${title}](${url(path, locale)}): ${meta.description}`;
}

/** Page list for one locale. Ruta IA is Spanish-only (no /en page). */
function pages(locale: Locale) {
  const m = MESSAGES[locale];
  const lines = [
    entry("/", locale, m.inicio.meta),
    ...(locale === "es" ? [entry("/ruta-ia", locale, m.rutaIa.meta)] : []),
    entry("/ai-first-move", locale, m.aiFirstMove.meta),
    entry("/lo-que-hacemos", locale, m.loQueHacemos.meta),
    ...AREAS.map(({ slug }) =>
      entry(`/lo-que-hacemos/${slug}`, locale, m.areasImpacto[slug].meta),
    ),
    entry("/como-trabajamos", locale, m.comoTrabajamos.meta),
    `- [Blog](${url("/posts", locale)})`,
    `- [${m.contact.seo.title}](${url("/contact", locale)})`,
  ];
  return lines.join("\n");
}

/** Header and page sections shared by both files. */
export function llmsBody() {
  return `# ${siteConfig.site_name}

> ${es.inicio.meta.description}

## Español

${pages("es")}

## English

${pages("en")}
`;
}

export const LLMS_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=3600",
};
