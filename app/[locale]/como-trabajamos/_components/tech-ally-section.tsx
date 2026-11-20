import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

export async function TechAllySection() {
  const t = await getTranslations("comoTrabajamos.techAlly");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[32.5rem_1fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <Badge variant="pretitle" className="self-start">
            {t("eyebrow")}
          </Badge>
          <h2 className="text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("body")}</p>
        </div>
        <ul className="flex flex-col border-b">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-5 border-t py-4.5">
              <span
                aria-hidden
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cabana-green text-cabana-dark"
              >
                <Check className="size-4" />
              </span>
              <span className="text-[17px] font-medium text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
