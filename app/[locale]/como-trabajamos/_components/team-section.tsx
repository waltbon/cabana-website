import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Member = { name: string; role: string };
type Proof = { value: string; label: string };

export async function TeamSection() {
  const t = await getTranslations("comoTrabajamos.team");
  const proof = t.raw("proof") as Proof[];
  const members = t.raw("members") as Member[];

  return (
    <section id="equipo" className="bg-section-light py-16 md:py-24">
      <div className="container flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-foreground">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("intro")}</p>
          </div>
          <dl className="flex gap-12">
            {proof.map((item) => (
              <div key={item.value} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-muted-foreground">{item.label}</dt>
                <dd className="text-4xl font-bold text-primary">{item.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="grid gap-4 sm:grid-cols-2">
            {members.map((member) => (
              <li key={member.name} className="flex flex-col">
                <span className="font-semibold text-foreground">{member.name}</span>
                <span className="text-sm text-muted-foreground">{member.role}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-120 self-center lg:flex-1">
          <Image
            src="/como-trabajamos/equipo-camino.webp"
            alt={t("imageAlt")}
            width={1434}
            height={1939}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
