import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";

interface ProblemItem {
  title: string;
  description: string;
}

interface ServiceProblemProps {
  tagline: string;
  headline: string;
  description: string;
  items: ProblemItem[];
}

export function ServiceProblem({
  tagline,
  headline,
  description,
  items,
}: ServiceProblemProps) {
  return (
    <Section className="py-24 bg-secondary">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-5 max-w-2xl">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-bold tracking-tight text-cabana-blue md:text-[56px]">
                {headline}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </FadeIn>
          </div>

          {/* Problem Items Grid */}
          <FadeIn delay={0.3}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
