import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  // Q22 (C, 2026-11-26): detection only follows the NEXT_LOCALE cookie
  // (a manual choice). proxy.ts strips Accept-Language before this runs, so
  // nobody is redirected by browser language; see LanguageSuggestion.
  localeDetection: true,
});
