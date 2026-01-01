import { Database, Cloud, Code, Sparkles } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { useTranslations } from "next-intl";

// Service configuration (non-translated data)
const services = [
  { key: "dataStrategy", icon: Database },
  { key: "dataEngineering", icon: Cloud },
  { key: "customDevelopment", icon: Code },
  { key: "aiMl", icon: Sparkles },
];

export function SolutionSection() {
  const t = useTranslations("solution");

  return (
    <Section className="bg-white dark:bg-section-dark-2 py-12">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <div className="flex max-w-xl flex-col items-center gap-5 text-center">
            {/* Tagline */}
            <h4>{t("tagline")}</h4>

            {/* Headline */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {t("headline")}
              <br />
              <span className="text-cabana-blue">{t("headlineHighlight")}</span>
            </h2>

            {/* Description */}
            <p className="text-base text-muted-foreground">
              {t("description")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            {services.map((service) => (
              <div
                key={service.key}
                className="flex flex-col items-center gap-5 text-center"
              >
                {/* Icon Wrapper */}
                <div className="icon-wrapper flex size-20 items-center justify-center">
                  <service.icon className="size-12 text-slate-100" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {t(`services.${service.key}.description`)}
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
