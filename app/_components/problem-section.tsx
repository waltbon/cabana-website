import { Section, Container } from "@/components/craft";

// Pain point data
const painPoints = [
  {
    id: 1,
    title: "Data Chaos",
    description:
      "Your data is siloed and disorganized. Your teams can't trust the numbers, and insights are buried, slowing down critical decisions.",
    iconSize: "sm" as const,
    alignment: "left" as const,
  },
  {
    id: 2,
    title: "Inefficient Processes",
    description:
      "You're held back by manual workarounds and off-the-shelf software that doesn't fit your unique needs, draining time and resources.",
    iconSize: "md" as const,
    alignment: "right" as const,
  },
  {
    id: 3,
    title: "Uncertain Future",
    description:
      "You know you need to adopt AI and modern technology to stay competitive, but you don't have a clear roadmap or the technical foundation to get there.",
    iconSize: "lg" as const,
    alignment: "center" as const,
  },
];

// Icon sizes mapping
const iconSizes = {
  sm: "size-6",
  md: "size-12",
  lg: "size-20",
};

// Alignment mapping
const alignmentClasses = {
  left: "items-start text-left",
  right: "items-end text-right",
  center: "items-center text-center",
};

export function ProblemSection() {
  return (
    <Section className="bg-section-light py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <div className="flex max-w-xl flex-col items-center gap-5 text-center">
            {/* Tagline */}
            <span className="text-sm font-medium text-muted-foreground">
              The problem.
            </span>

            {/* Headline */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Stop Reacting.
              <br />
              <span className="text-[#0048ff]">Start Building.</span>
            </h2>

            {/* Description */}
            <p className="text-base text-muted-foreground">
              You have the data, but you&apos;re not in control.
              <br />
              Do any of these challenges sound familiar?
            </p>
          </div>

          {/* Pain Points */}
          <div className="relative mx-auto w-full max-w-2xl">
            {/* Vertical connecting line */}
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#16364d]/20"
              aria-hidden="true"
            />

            {/* Pain point items */}
            <div className="relative flex flex-col gap-8">
              {painPoints.map((point) => (
                <div
                  key={point.id}
                  className={`flex flex-col gap-5 ${alignmentClasses[point.alignment]}`}
                >
                  {/* Icon wrapper */}
                  <div
                    className={`icon-wrapper ${iconSizes[point.iconSize]} relative z-10`}
                  />

                  {/* Content */}
                  <div
                    className={`flex max-w-xs flex-col gap-2 ${
                      point.alignment === "right" ? "md:ml-auto" : ""
                    } ${point.alignment === "center" ? "mx-auto max-w-lg" : ""}`}
                  >
                    <h3 className="text-2xl font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
