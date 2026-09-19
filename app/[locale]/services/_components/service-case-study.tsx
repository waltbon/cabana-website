import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudyAuthor {
  name: string;
  role: string;
  linkedin: string;
}

interface RelatedService {
  label: string;
  href: string;
}

interface ServiceCaseStudyProps {
  tagline: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: CaseStudyMetric[];
  relatedService: RelatedService;
  date: string;
  author: CaseStudyAuthor;
}

export function ServiceCaseStudy({
  tagline,
  industry,
  headline,
  summary,
  metrics,
  relatedService,
  date,
  author,
}: ServiceCaseStudyProps) {
  return (
    <Section className="bg-section-slate py-24">
      <Container className="max-w-4xl px-6">
        <FadeIn>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {tagline}
          </p>
        </FadeIn>
        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <div className="flex flex-col gap-6 p-8 md:p-10">
            <FadeIn delay={0.05}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cabana-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cabana-navy">
                  {industry}
                </span>
                <time
                  dateTime={date}
                  className="text-sm text-muted-foreground"
                >
                  {date}
                </time>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
                {headline}
              </h3>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {summary}
              </p>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <StaggerItem key={index}>
                  <div className="flex h-full flex-col gap-1 rounded-lg border border-border bg-secondary p-4">
                    <span className="flex items-start gap-2 text-xl font-bold text-cabana-blue">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
                      {metric.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeIn delay={0.2}>
              <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
                <Link
                  href={relatedService.href}
                  className="text-sm font-medium text-cabana-blue hover:underline"
                >
                  {relatedService.label} &rarr;
                </Link>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {author.name} · {author.role}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
