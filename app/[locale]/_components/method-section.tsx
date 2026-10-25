import { getTranslations } from "next-intl/server";
import { ArrowRight, UserCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";

// No /como-trabajamos page yet: the principle is explained on AI First Move
const PRINCIPLE_HREF = "/ai-first-move#principio";

export async function MethodSection() {
  const [tMethod, tPrinciple] = await Promise.all([
    getTranslations("inicio.method"),
    getTranslations("inicio.principle"),
  ]);

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-foreground">{tMethod("title")}</h2>
          <p className="text-lg text-muted-foreground">{tMethod("body")}</p>
        </div>
        <div className="flex flex-col gap-4 rounded-xl bg-section-dark p-6 md:p-10">
          <UserCheck className="size-7 text-cabana-green" aria-hidden />
          <h3 className="text-white">{tPrinciple("title")}</h3>
          <p className="text-slate-300">{tPrinciple("body")}</p>
          <Link
            href={PRINCIPLE_HREF}
            className="inline-flex items-center gap-2 self-start font-semibold text-cabana-green hover:underline focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {tPrinciple("link")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
