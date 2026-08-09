import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

interface OfferingItem {
  title: string;
  whatIsIt: string;
  /** Optional — omitted when the source copy doesn't separate "who is this for" from the description. */
  whoIsItFor?: string;
  /** Optional illustration for this offering card. */
  imageSrc?: string;
  imageAlt?: string;
  /** Optional link to the offering's own sub-service page. Renders the card as a link when provided. */
  href?: string;
  linkLabel?: string;
}

interface ServiceOfferingsProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  items: OfferingItem[];
  /** Optional footnote below the grid — e.g. clarifying the offerings aren't sequential. */
  note?: string;
}

export function ServiceOfferings({
  tagline,
  headlineDark,
  headlineBlue,
  items,
  note,
}: ServiceOfferingsProps) {
  return (
    <Section className="border-b border-dashed py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-5 max-w-xl">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                {headlineDark}{" "}
                <span className="text-cabana-blue">{headlineBlue}</span>
              </h2>
            </FadeIn>
          </div>

          {/* Offerings Grid */}
          <StaggerChildren className="grid gap-12 sm:grid-cols-2">
            {items.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex flex-col gap-4">
                  {item.imageSrc && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-3xl font-bold leading-tight tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
                    <p>{item.whatIsIt}</p>
                    {item.whoIsItFor && (
                      <p>
                        <strong className="font-semibold text-foreground">
                          ¿Para quién es?{" "}
                        </strong>
                        {item.whoIsItFor}
                      </p>
                    )}
                  </div>
                  {item.href && (
                    <Link
                      href={item.href}
                      className="w-fit text-sm font-semibold text-cabana-blue hover:underline"
                    >
                      {item.linkLabel ?? "Ver más →"}
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {note && (
            <FadeIn delay={0.2}>
              <p className="text-sm italic text-muted-foreground">{note}</p>
            </FadeIn>
          )}
        </div>
      </Container>
    </Section>
  );
}
