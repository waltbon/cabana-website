import { getTranslations } from "next-intl/server";
import { CirclePause, Lightbulb, MessagesSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Item = { title: string; body: string };

const icons = [Lightbulb, MessagesSquare, CirclePause];

export async function SymptomsSection() {
  const t = await getTranslations("inicio.symptoms");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-4">
          <Badge variant="pretitle" className="self-start">
            {t("eyebrow")}
          </Badge>
          <h2 className="text-foreground max-w-3xl">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("intro")}</p>
        </div>
        <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="flex flex-col gap-4">
                <span className="h-0.75 w-12 bg-primary" aria-hidden />
                <Icon className="size-6 text-primary" aria-hidden />
                <h3 className="text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
