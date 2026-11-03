import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CATEGORIES } from "@/data/blog/categories.data";
import { cn } from "@/lib/utils";

export async function CategoryChips({
  selected,
  search,
}: {
  selected?: string;
  search?: string;
}) {
  const t = await getTranslations("blog");
  const chips = [{ slug: undefined, name: t("allCategories") }, ...CATEGORIES];

  return (
    <nav aria-label={t("categoriesLabel")} className="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:px-0">
      <ul className="flex gap-2 w-max">
        {chips.map(({ slug, name }) => {
          const isActive = selected === slug;
          const query = { ...(slug && { category: slug }), ...(search && { search }) };
          return (
            <li key={name}>
              <Link
                href={{ pathname: "/posts", query }}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center rounded-full border px-4 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-accent"
                )}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
