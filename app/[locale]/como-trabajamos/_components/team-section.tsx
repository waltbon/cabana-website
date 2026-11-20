import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

type Member = { name: string; role: string };

export async function TeamSection() {
  const t = await getTranslations("comoTrabajamos.team");
  const proof = t.raw("proof") as string[];
  const members = t.raw("members") as Member[];

  return (
    <>
      <section id="equipo" className="bg-section-light py-16 md:py-24">
        <div className="container flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Badge variant="pretitle" className="self-start">
                {t("eyebrow")}
              </Badge>
              <h2 className="text-foreground">{t("title")}</h2>
              <p className="text-lg text-muted-foreground">{t("intro")}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {proof.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-medium text-foreground">
                  <CircleCheck className="mt-0.5 size-4.5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1.5">
              {members.map((member) => (
                <li key={member.name} className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{member.name}</span> · {member.role}
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

      {/* Founder quote */}
      <section className="bg-background py-16 md:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
          <figure className="flex flex-col gap-6">
            <span aria-hidden className="h-0.75 w-12 bg-cabana-green" />
            <blockquote className="text-2xl font-medium leading-snug text-foreground lg:text-3xl">
              {t("quote")}
            </blockquote>
            <figcaption className="font-semibold text-foreground">{t("quoteAuthor")}</figcaption>
          </figure>
          <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-xl lg:w-50 lg:justify-self-end">
            <Image
              src="/como-trabajamos/walter-bonilla-retrato.webp"
              alt={t("founderImageAlt")}
              fill
              sizes="(min-width: 1024px) 200px, 160px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
