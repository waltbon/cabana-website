"use client";

import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchInput({ defaultValue }: { defaultValue?: string }) {
  const t = useTranslations("blog");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      type="search"
      name="search"
      aria-label={t("search")}
      placeholder={t("search")}
      defaultValue={defaultValue}
      onChange={(e) => handleSearch(e.target.value)}
      className="lg:w-80"
    />
  );
}
