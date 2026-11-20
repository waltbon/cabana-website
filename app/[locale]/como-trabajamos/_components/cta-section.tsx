import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { ServiceLink } from "@/components/service-link";
import { calendarUrl } from "@/lib/calendar";

// Order matches `comoTrabajamos.cta.doors`
const doorHrefs = ["/ruta-ia", "/ai-first-move", "/lo-que-hacemos"];

/** Closing CTA (shared CTASection styling) with one door per service. */
export async function CTASection() {
  const t = await getTranslations("comoTrabajamos.cta");
  const doors = t.raw("doors") as string[];

  return (
    <section id="contact" className="bg-background px-4 py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-6 rounded-xl bg-section-dark px-6 py-14 text-center md:py-24">
          <h2 className="text-gradient-cabana-light max-w-3xl text-3xl md:text-5xl">{t("title")}</h2>
          <ul className="flex flex-col items-center gap-3">
            {doors.map((door, i) => (
              <li key={door}>
                <ServiceLink
                  href={doorHrefs[i]}
                  className="inline-flex items-center gap-2 text-balance border-b-2 border-cabana-green pb-1 font-semibold text-white transition-colors hover:text-cabana-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {door}
                </ServiceLink>
              </li>
            ))}
          </ul>
          <p className="max-w-2xl text-lg text-slate-300">{t("body")}</p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={calendarUrl} target="_blank" rel="noopener noreferrer">
              {t("button")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
