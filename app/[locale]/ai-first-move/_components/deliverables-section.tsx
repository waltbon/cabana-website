import {
  FileCheck,
  Presentation,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

type Deliverable = { title: string; body: string };

const icons: LucideIcon[] = [Rocket, FileCheck, TrendingUp, Presentation];

function DeliverableCard({
  item,
  icon: Icon,
  featured,
  className,
}: {
  item: Deliverable;
  icon: LucideIcon;
  featured?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border p-6",
        featured ? "bg-cabana-light md:justify-end md:p-8" : "bg-card",
        className
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
  const t = await getTranslations("aiFirstMove.deliverables");
  const [featured, ...rest] = t.raw("items") as Deliverable[];

  return (
    <section id="incluye" className="bg-background py-16 md:py-24 scroll-mt-14">
      <div className="container flex flex-col gap-12">
        <h2 className="text-foreground">{t("title")}</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <DeliverableCard item={featured} icon={icons[0]} featured />
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((item, i) => (
              <DeliverableCard
                key={item.title}
                item={item}
                icon={icons[i + 1]}
                className={i === rest.length - 1 ? "sm:col-span-2" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
