import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";
import type { CapabilityKey } from "./config";

type Item = { title: string; body: string };

export async function ServicesSection({
  capability,
  icons,
  proofIcon: ProofIcon,
  proofKey,
  showStack = false,
}: {
  capability: CapabilityKey;
  icons: LucideIcon[];
  proofIcon: LucideIcon;
  /** Message key (under the capability) for the line below the list */
  proofKey: string;
  showStack?: boolean;
}) {
  const [t, tPage, tCommon] = await Promise.all([
    getTranslations(`capacidades.${capability}.services`),
    getTranslations(`capacidades.${capability}`),
    getTranslations("capacidades.common"),
  ]);
  const items = t.raw("items") as Item[];
  const intro = t.has("intro") ? t("intro") : null;

  return (
    <section className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-16">
          <h2 className="text-foreground md:w-[32rem] md:shrink-0">
            {t("title")}
          </h2>
          {intro && <p className="text-lg text-muted-foreground">{intro}</p>}
        </div>
        <ol className="flex flex-col gap-3">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li
                key={item.title}
                className="flex flex-col gap-3 rounded-xl bg-card p-6 md:flex-row md:items-center md:gap-8 md:px-8 md:py-7"
              >
                <span className="text-3xl font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="icon-wrapper icon-wrapper-md shrink-0">
                  <Icon className="size-6 text-white" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground md:w-[22.5rem] md:shrink-0">
                  {item.title}
                </h3>
                <p className="text-muted-foreground md:text-[17px]">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ol>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-12">
          <p className="flex items-center gap-3 text-[17px] font-semibold text-foreground">
            <ProofIcon className="size-5 shrink-0 text-primary" aria-hidden />
            {tPage(proofKey)}
          </p>
          {showStack && (
            <p className="text-[15px] text-muted-foreground">
              {tCommon("stackLabel")}: {tPage("stack")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
