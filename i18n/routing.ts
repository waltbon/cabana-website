import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  // ES is the primary market/language — don't let the browser's
  // Accept-Language header bounce visitors to /en.
  localeDetection: false,
});
