import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const wordpressHostname = process.env.WORDPRESS_HOSTNAME;
const wordpressUrl = process.env.WORDPRESS_URL;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: wordpressHostname
      ? [
        {
          protocol: "https",
          hostname: wordpressHostname,
          port: "",
          pathname: "/**",
        },
      ]
      : [],
  },
  async redirects() {
    if (!wordpressUrl) {
      return [];
    }
    return [
      {
        source: "/admin",
        destination: `${wordpressUrl}/wp-admin`,
        permanent: true,
      },
    ];
  },
};


const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
})

export default withNextIntl(withMDX(nextConfig));