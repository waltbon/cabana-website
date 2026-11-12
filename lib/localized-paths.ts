/**
 * Routes whose slug differs by locale (D-009). Keys are the Spanish path;
 * the English slug is provisional until the English keyword map lands.
 * next.config.ts redirects the cross-locale variants with a 301.
 */
const LOCALIZED_PATHS: Record<string, { en: string }> = {
  "/como-trabajamos": { en: "/how-we-work" },
};

/** Path to pass to next-intl's `Link` (without the locale prefix). */
export function localizedHref(href: string, locale: string) {
  return locale === "en" ? (LOCALIZED_PATHS[href]?.en ?? href) : href;
}
