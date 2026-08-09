import { Fragment } from "react";
import Image from "next/image";
import { ArrowRight, GitBranch } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import type { OfferingItem } from "./service-offerings";

/**
 * Like ServiceOfferings, but for services whose sub-services aren't parallel
 * options — some form a sequential flow, one branches off separately.
 * e.g. Digital Product: Design & Discovery → Application Development (flow),
 * Dashboards & Analytics (independent branch).
 */
interface ServiceOfferingsFlowProps {
  tagline: string;
  headlineDark: string;
  headlineBlue: string;
  /** Rendered connected by an arrow, in order. */
  flow: OfferingItem[];
  /** Rendered separately below, visually detached from the flow. */
  branch: OfferingItem[];
  flowLabel: string;
  branchLabel: string;
  /** Optional footnote below the grid. */
  note?: string;
}

function OfferingCard({ item }: { item: OfferingItem }) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {(item.illustration || item.imageSrc) && (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-section-slate">
          {item.illustration ? (
            item.illustration
          ) : item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={item.imageAlt ?? ""}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
      )}
      <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground">
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
  );
}

export function ServiceOfferingsFlow({
  tagline,
  headlineDark,
  headlineBlue,
  flow,
  branch,
  flowLabel,
  branchLabel,
  note,
}: ServiceOfferingsFlowProps) {
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

          {/* Main flow — connected sequence */}
          <div className="flex flex-col gap-6">
            <span className="w-fit text-xs font-semibold uppercase tracking-wide text-cabana-blue">
              {flowLabel}
            </span>
            <StaggerChildren className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
              {flow.map((item, index) => (
                <Fragment key={index}>
                  <StaggerItem className="flex flex-1">
                    <OfferingCard item={item} />
                  </StaggerItem>
                  {index < flow.length - 1 && (
                    <div className="flex shrink-0 items-center justify-center text-cabana-blue lg:pt-24">
                      <ArrowRight className="hidden size-6 lg:block" strokeWidth={2} />
                      <ArrowRight className="size-6 rotate-90 lg:hidden" strokeWidth={2} />
                    </div>
                  )}
                </Fragment>
              ))}
            </StaggerChildren>
          </div>

          {/* Independent branch */}
          <div className="flex flex-col gap-6 border-t border-dashed pt-12">
            <span className="flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <GitBranch className="size-4" strokeWidth={2} />
              {branchLabel}
            </span>
            <StaggerChildren className="grid gap-12 sm:grid-cols-2">
              {branch.map((item, index) => (
                <StaggerItem key={index}>
                  <OfferingCard item={item} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

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
