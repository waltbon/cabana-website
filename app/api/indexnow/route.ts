import { NextResponse } from "next/server";
import { siteConfig } from "@/site.config";
import sitemap from "@/app/sitemap";

const INDEXNOW_KEY = "ed6d9de3b3ec0c85279c1c8a9ab7dad6";

/**
 * Submits every URL currently in the sitemap to IndexNow (Bing, Yandex, Naver).
 * IndexNow fans a single submission out to all participating search engines,
 * so posting to api.indexnow.org is enough — no need to hit each engine.
 *
 * Trigger manually (GET) or wire into a deploy hook. Verification file lives
 * at /public/<key>.txt per the IndexNow spec.
 */
export async function GET() {
  const entries = await sitemap();
  const urlList = entries.map((entry) => entry.url);
  const host = new URL(siteConfig.site_domain).hostname;

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${siteConfig.site_domain}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return NextResponse.json({
    submitted: urlList.length,
    status: res.status,
    ok: res.ok,
  });
}
