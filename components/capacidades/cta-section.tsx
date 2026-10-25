import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { calendarUrl } from "@/lib/calendar";
import { cn } from "@/lib/utils";

/** Dark closing CTA block; `namespace` points at a { title, body, button } message group. */
export async function CTASection({
  namespace = "capacidades.cta",
  className,
}: {
  namespace?: string;
  /** Overrides the section background (default `bg-background`) */
  className?: string;
}) {
  const t = await getTranslations(namespace);

  return (
    <section
      id="contact"
      className={cn("bg-background px-4 py-12 md:py-24", className)}
    >
      <div className="container">
        <div className="flex flex-col items-center gap-6 rounded-xl bg-section-dark px-6 py-14 text-center md:py-24">
          <h2 className="text-gradient-cabana-light text-3xl md:text-5xl max-w-3xl">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl">{t("body")}</p>
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
