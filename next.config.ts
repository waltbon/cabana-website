import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// [old path, new path] — applied to "/" and "/en"
const SERVICES_REDIRECTS: [string, string][] = [
  ["/services", "/lo-que-hacemos"],
  ["/services/data-consulting", "/lo-que-hacemos/modernizacion-de-datos"],
  ["/services/data-strategy", "/lo-que-hacemos/modernizacion-de-datos"],
  ["/services/data-engineering", "/lo-que-hacemos/modernizacion-de-datos"],
  ["/services/dashboards-analytics-interfaces", "/lo-que-hacemos/modernizacion-de-datos"],
  ["/services/digital-product", "/lo-que-hacemos/productos-digitales"],
  ["/services/application-development", "/lo-que-hacemos/productos-digitales"],
  ["/services/product-design-discovery", "/lo-que-hacemos/productos-digitales"],
  ["/services/custom-ai-agents", "/lo-que-hacemos/automatizacion-con-agentes-de-ia"],
  ["/services/ai-readiness-assessment", "/ruta-ia"],
  // /capacidades was replaced by /lo-que-hacemos (web v2, copy 6M-02.3)
  ["/capacidades", "/lo-que-hacemos"],
  ["/capacidades/consultoria-de-datos", "/lo-que-hacemos/modernizacion-de-datos"],
  ["/capacidades/ingenieria-de-datos", "/lo-que-hacemos/modernizacion-de-datos"],
  ["/capacidades/producto-digital", "/lo-que-hacemos/productos-digitales"],
  ["/capacidades/agentes-ia-a-medida", "/lo-que-hacemos/automatizacion-con-agentes-de-ia"],
];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // www.cabanadata.com duplicates the apex under a different host —
      // force a permanent redirect so search engines index one canonical
      // domain instead of relying only on the <link rel="canonical"> tag.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cabanadata.com" }],
        destination: "https://cabanadata.com/:path*",
        permanent: true,
      },
      // The old Ruta IA subdomain consolidates into the main site (only
      // effective while ruta-ai.cabanadata.com points at this project).
      {
        source: "/:path*",
        has: [{ type: "host", value: "ruta-ai.cabanadata.com" }],
        destination: "https://cabanadata.com/ruta-ia",
        permanent: true,
      },
      // /services and /capacidades were replaced by /lo-que-hacemos
      // (docs/seo/redirects.csv).
      // Slugs stay in Spanish for /en until the English keyword map lands.
      ...SERVICES_REDIRECTS.flatMap(([source, destination]) => [
        { source, destination, statusCode: 301 },
        {
          source: `/en${source}`,
          destination: destination.startsWith("/ruta-ia")
            ? destination
            : `/en${destination}`,
          statusCode: 301,
        },
      ]),
      // Ruta IA is Spanish-only (outside [locale]); the language switcher's
      // EN link would otherwise 404.
      { source: "/en/ruta-ia", destination: "/ruta-ia", statusCode: 301 },
      // Spanish is unprefixed; make /es a permanent redirect instead of
      // next-intl's 307 so search engines consolidate on "/".
      { source: "/es", destination: "/", statusCode: 301 },
      // WordPress leftovers (docs/seo/redirects.csv); declared without the
      // locale prefix so they run before next-intl's proxy rewrites.
      { source: "/portfolio-item/:path*", destination: "/", statusCode: 301 },
      { source: "/area-item/:path*", destination: "/", statusCode: 301 },
      // Posts exist only in Spanish; /en/posts/<slug> was a duplicate with a
      // canonical to es (docs/seo/redirects.csv). The /en archive stays.
      { source: "/en/posts/:slug", destination: "/posts/:slug", statusCode: 301 },
      // /about retired in favor of Cómo trabajamos (D-009). Each locale has
      // its own slug, so the cross-locale variants redirect too.
      { source: "/about", destination: "/como-trabajamos", statusCode: 301 },
      { source: "/en/about", destination: "/en/how-we-work", statusCode: 301 },
      { source: "/how-we-work", destination: "/como-trabajamos", statusCode: 301 },
      { source: "/en/como-trabajamos", destination: "/en/how-we-work", statusCode: 301 },
      // case-studies pulled until customer approves content; keep any
      // indexed/bookmarked URLs from 404ing.
      {
        source: "/case-studies/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/en/case-studies/:path*",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};


const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
})

export default withNextIntl(withMDX(nextConfig));