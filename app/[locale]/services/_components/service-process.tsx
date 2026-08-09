import { Section, Container } from "@/components/craft";
import { FadeIn } from "@/components/animations";
import { Check, LucideIcon } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  /** Optional per-step icon. Defaults to a checkmark. */
  icon?: LucideIcon;
}

interface ServiceProcessProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  steps: ProcessStep[];
}

export function ServiceProcess({
  tagline,
  headlineDark,
  headlineBlue,
  steps,
}: ServiceProcessProps) {
  return (
    <Section className="border-b border-dashed py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column - Heading */}
          <div className="flex shrink-0 flex-col gap-4 lg:w-[40%]">
            <FadeIn>
              <p className="text-sm font-medium text-muted-foreground">
                {tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-[56px]">
                {headlineDark}
                <br />
                <span className="text-cabana-blue">{headlineBlue}</span>
              </h2>
            </FadeIn>
          </div>

          {/* Right Column - Steps */}
          <FadeIn delay={0.2} className="flex flex-1 flex-col gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon ?? Check;
              return (
              <div key={index} className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 text-cabana-blue">
                  <Icon className="size-5" strokeWidth={2.5} />
                </span>
                <p className="text-base leading-relaxed">
                  <strong className="font-bold text-foreground">
                    {step.title}
                  </strong>
                  {" – "}
                  <span className="text-muted-foreground">
                    {step.description}
                  </span>
                </p>
              </div>
              );
            })}
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
