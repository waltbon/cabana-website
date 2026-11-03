import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

export async function PostsHeader() {
  const t = await getTranslations("blog");

  return (
    <section className="bg-section-light px-4 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="container flex flex-col items-center gap-4 text-center">
        <Badge variant="pretitle">{t("pretitle")}</Badge>
        <h1 className="text-4xl md:text-7xl max-w-4xl">{t("heading")}</h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
