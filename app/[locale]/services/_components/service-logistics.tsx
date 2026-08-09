import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

interface LogisticsItem {
  label: string;
  description: string;
  /** Optional icon/illustration for this logistics card. */
  imageSrc?: string;
  imageAlt?: string;
}

interface ServiceLogisticsProps {
  tagline: string;
  items: LogisticsItem[];
}

export function ServiceLogistics({ tagline, items }: ServiceLogisticsProps) {
  return (
    <Section className="border-b border-dashed py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <FadeIn>
            <p className="text-sm font-medium text-muted-foreground">
              {tagline}
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-6 sm:grid-cols-2">
            {items.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-secondary p-6">
                  {item.imageSrc && (
                    <div className="relative h-10 w-10">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? ""}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wide text-cabana-blue">
                    {item.label}
                  </span>
                  <p className="text-base leading-relaxed text-muted-foreground">
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
