import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

interface PersonaItem {
  title: string;
  description: string;
  /** Optional avatar/illustration for this persona card. */
  imageSrc?: string;
  imageAlt?: string;
}

interface ServicePersonasProps {
  tagline: string;
  headline: string;
  items: PersonaItem[];
}

export function ServicePersonas({
  tagline,
  headline,
  items,
}: ServicePersonasProps) {
  return (
    <Section className="bg-section-slate py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {headline}
              </h2>
            </FadeIn>
          </div>

          <StaggerChildren className="grid gap-6 sm:grid-cols-3">
            {items.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 shadow-sm">
                  {item.imageSrc && (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
