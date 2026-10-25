import {
  FileText,
  Info,
  Map,
  PhoneCall,
  Presentation,
  Route,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getRutaIaTranslations } from "../lib/i18n";

type Deliverable = { title: string; body: string };

const icons: LucideIcon[] = [Map, FileText, Route, Presentation, PhoneCall];

function DeliverableCard({
  item,
  icon: Icon,
  featured,
}: {
  item: Deliverable;
  icon: LucideIcon;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border p-6",
        featured ? "bg-cabana-light md:justify-end md:p-8" : "bg-card"
      )}
    >
      <span className="icon-wrapper icon-wrapper-md">
        <Icon className="size-6 text-white" aria-hidden />
      </span>
      <h3 className="text-foreground">{item.title}</h3>
      <p className="text-muted-foreground">{item.body}</p>
    </div>
  );
}

export async function DeliverablesSection() {
  const t = await getRutaIaTranslations("deliverables");
  const [featured, ...rest] = t.raw("items") as Deliverable[];

  return (
    <section id="incluye" className="bg-background py-16 md:py-24 scroll-mt-14">
      <div className="container flex flex-col gap-12">
        <h2 className="text-foreground">{t("title")}</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <DeliverableCard item={featured} icon={icons[0]} featured />
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((item, i) => (
              <DeliverableCard key={item.title} item={item} icon={icons[i + 1]} />
            ))}
          </div>
        </div>
        <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          {t("note")}
        </p>
      </div>
    </section>
  );
}
