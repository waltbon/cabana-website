import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/ruta-ia")) {
    return;
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
