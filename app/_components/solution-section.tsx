import { Database, Cloud, Code, Sparkles } from "lucide-react";
import { Section, Container } from "@/components/craft";

// Service offerings data
const services = [
  {
    id: 1,
    title: "Data Strategy & Consulting",
    description:
      "Bring your online presence to life with intuitive, user-focused designs that captivate and convert.",
    icon: Database,
  },
  {
    id: 2,
    title: "Data Engineering & Architecture",
    description:
      "Craft a brand that stands out and resonates, building trust and recognition.",
    icon: Cloud,
  },
  {
    id: 3,
    title: "Custom Application Design & Development",
    description:
      "Boost engagement with tailored social media strategies that connect your brand to the right audience.",
    icon: Code,
  },
  {
    id: 4,
    title: "AI & Machine Learning Solutions",
    description:
      "Our marketing campaigns increase visibility and drive ROI with data-backed strategies.",
    icon: Sparkles,
  },
];

export function SolutionSection() {
  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <div className="flex max-w-xl flex-col items-center gap-5 text-center">
            {/* Tagline */}
            <span className="text-sm font-medium text-muted-foreground">
              The solution.
            </span>

            {/* Headline */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Your End-to-End
              <br />
              <span className="text-[#0048ff]">Data Partner</span>
            </h2>

            {/* Description */}
            <p className="text-base text-muted-foreground">
              From strategy to execution, we provide the clarity and technical
              expertise to make your data work for you.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center gap-5 text-center"
              >
                {/* Icon Wrapper */}
                <div className="icon-wrapper flex size-20 items-center justify-center">
                  <service.icon className="size-12 text-slate-100" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
