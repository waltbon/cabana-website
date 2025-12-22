import { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.site_name,
    short_name: "Cabana Data",
    description: siteConfig.site_description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0048ff",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "technology", "productivity"],
  };
}
