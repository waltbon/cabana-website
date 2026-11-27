import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Spanish-only pages: /en/posts/<slug> 301s back to /posts/<slug>
// (next.config.ts), so browser-language detection must not send English
// visitors there or they loop between the two URLs.
const spanishOnlyMiddleware = createMiddleware({
  ...routing,
  localeDetection: false,
});
const SPANISH_ONLY = /^\/posts\/[^/]+\/?$/;

// Q22 (C): the language is never chosen from Accept-Language, only from the
// NEXT_LOCALE cookie, so every URL answers the same to crawlers and people.
// English-preferring visitors get a suggestion instead (LanguageSuggestion).
// The header is pinned to the default locale rather than removed: without it
// next-intl negotiates "en" and would set NEXT_LOCALE=es on every first visit.
function withoutAcceptLanguage(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("accept-language", routing.defaultLocale);
  return new NextRequest(request, { headers });
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/ruta-ia")) {
    return;
  }
  const intlRequest = withoutAcceptLanguage(request);
  if (SPANISH_ONLY.test(request.nextUrl.pathname)) {
    return spanishOnlyMiddleware(intlRequest);
  }
  return intlMiddleware(intlRequest);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next (Next.js internals)
    // - static files (with extensions)
    // - llms.txt files
    // - ruta-ia (standalone landing page, outside next-intl routing)
    "/((?!api|_next|.*\\.[^/]+$|llms\\.txt|llms-full\\.txt|ruta-ia).*)",
  ],
};
