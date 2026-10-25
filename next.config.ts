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
  ["/services", "/capacidades"],
  ["/services/data-consulting", "/capacidades/consultoria-de-datos"],
  ["/services/data-strategy", "/capacidades/consultoria-de-datos"],
  ["/services/data-engineering", "/capacidades/ingenieria-de-datos"],
  ["/services/dashboards-analytics-interfaces", "/capacidades/ingenieria-de-datos"],
  ["/services/digital-product", "/capacidades/producto-digital"],
  ["/services/application-development", "/capacidades/producto-digital"],
  ["/services/product-design-discovery", "/capacidades/producto-digital"],
  ["/services/custom-ai-agents", "/capacidades/agentes-ia-a-medida"],
  ["/services/ai-readiness-assessment", "/ruta-ia"],
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
      // /services was replaced by /capacidades (docs/seo/redirects.csv).
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
      // Spanish is unprefixed; make /es a permanent redirect instead of
      // next-intl's 307 so search engines consolidate on "/".
      { source: "/es", destination: "/", statusCode: 301 },
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