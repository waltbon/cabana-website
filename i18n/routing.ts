import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  // Q21 (2026-11-25): redirect first-time visitors to /en when the browser
  // prefers English. The NEXT_LOCALE cookie keeps a manual language choice.
  localeDetection: true,
});
