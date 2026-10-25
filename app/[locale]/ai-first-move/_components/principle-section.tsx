import { getTranslations } from "next-intl/server";
import { Building2, UserCheck } from "lucide-react";

const icons = [UserCheck, Building2];

export async function PrincipleSection() {
  const t = await getTranslations("aiFirstMove.principle");
  const items = t.raw("items") as string[];

  return (
    <section id="principio" className="scroll-mt-14 bg-background py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("body")}</p>
        </div>
        <ul className="flex flex-col gap-4">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl bg-section-light p-6 text-lg font-medium text-foreground md:items-center"
              >
                <span className="icon-wrapper icon-wrapper-md shrink-0">
                  <Icon className="size-6 text-white" aria-hidden />
                </span>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
