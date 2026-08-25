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