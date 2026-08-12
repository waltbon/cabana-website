import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
};


const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
})

export default withNextIntl(withMDX(nextConfig));