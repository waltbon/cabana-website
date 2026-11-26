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

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/ruta-ia")) {
    return;
  }
  if (SPANISH_ONLY.test(request.nextUrl.pathname)) {
    return spanishOnlyMiddleware(request);
  }
  return intlMiddleware(request);
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
