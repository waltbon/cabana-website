import Image from "next/image";
import Link from "next/link";
import { ArrowDown, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** Split hero for service pages: dark block with copy on the left, photo on the right. */
export function ServiceHero({
  eyebrow,
  title,
  subtitle,
  facts,
  factIcons,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  facts: string[];
  factIcons: LucideIcon[];
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="bg-background px-3 pt-3 pb-8 md:px-6 md:pt-6 md:pb-12">
      <div className="flex flex-col overflow-hidden rounded-xl bg-section-dark lg:min-h-160 lg:flex-row">
        <div className="relative h-65 shrink-0 lg:order-last lg:h-auto lg:w-[42%] xl:w-165">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover lg:rounded-xl"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-5 px-6 pt-8 pb-10 md:gap-6 lg:py-16 lg:pr-14 lg:pl-20">
          <Badge variant="pretitle" className="self-start">
            {eyebrow}
          </Badge>
          <h1 className="text-4xl text-white md:text-[56px] md:leading-[1.05]">
            {title}
          </h1>
          <p className="text-[17px] text-slate-300 md:text-lg">{subtitle}</p>
          <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <Button asChild size="lg">
              <Link href={ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                {ctaPrimary}
              </Link>
            </Button>
            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center gap-2 rounded-sm px-2 py-2.5 font-semibold text-cabana-green hover:underline focus-visible:ring-2 focus-visible:ring-ring"
            >
              {ctaSecondary}
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
          <ul className="flex flex-col gap-2.5 pt-4">
            {facts.map((fact, i) => {
              const Icon = factIcons[i];
              return (
                <li key={fact} className="flex items-center gap-2.5 text-[15px] text-white">
                  <Icon className="size-4.5 shrink-0 text-cabana-green" aria-hidden />
                  {fact}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
