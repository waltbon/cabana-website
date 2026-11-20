import { getRutaIaTranslations } from "../lib/i18n";

/** Each item reads "Rol: detalle" in the copy; the role is bolded in place
 * so the published text stays identical to it. */
function splitRole(item: string) {
  const i = item.indexOf(": ");
  return i === -1
    ? { role: "", body: item }
    : { role: item.slice(0, i + 1), body: item.slice(i + 1) };
}

export async function ClientTimeSection() {
  const t = await getRutaIaTranslations("clientTime");
  const items = (t.raw("items") as string[]).map(splitRole);

  return (
    <section className="bg-section-slate py-16 md:py-24">
      <div className="container grid gap-8 lg:grid-cols-[30rem_1fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground">{t("intro")}</p>
        </div>
        <ul className="divide-y">
          {items.map(({ role, body }) => (
            <li key={role + body} className="py-5 text-muted-foreground">
              <strong className="font-semibold text-foreground">{role}</strong>
              {body}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
