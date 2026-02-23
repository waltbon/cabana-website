import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

interface OfferingItem {
  title: string;
  whatIsIt: string;
  whoIsItFor: string;
}

interface ServiceOfferingsProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  items: OfferingItem[];
}

export function ServiceOfferings({
  tagline,
  headlineDark,
  headlineBlue,
  items,
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
                  <h3 className="text-3xl font-bold leading-tight tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-3 text-base leading-relaxed">
                    <p>
                      <strong className="font-semibold text-foreground">
                        What is it?{" "}
                      </strong>
                      <span className="text-muted-foreground">
                        {item.whatIsIt}
                      </span>
                    </p>
                    <p>
                      <strong className="font-semibold text-foreground">
                        Who is this for?{" "}
                      </strong>
                      <span className="text-muted-foreground">
                        {item.whoIsItFor}
                      </span>
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
