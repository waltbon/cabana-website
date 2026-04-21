"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, MapPin, Wifi, Layers } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { CAREERS, Career } from "@/data/careers";

export function JobsListSection() {
  const activeJobs = CAREERS.filter((c: Career) => c.active);

  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-cabana-blue">
              Posiciones abiertas
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {activeJobs.length}{" "}
              {activeJobs.length === 1 ? "vacante disponible" : "vacantes disponibles"}
            </h2>
          </div>
        </FadeIn>

        {activeJobs.length === 0 ? (
          <FadeIn>
            <div className="rounded-2xl border border-border bg-cabana-slate p-12 text-center">
              <p className="text-base text-muted-foreground">
                No hay vacantes abiertas en este momento. Volvé pronto.
              </p>
            </div>
          </FadeIn>
        ) : (
          <StaggerChildren className="flex flex-col gap-4">
            {activeJobs.map((job) => (
              <StaggerItem key={job.id}>
                <Link
                  href={`/careers/${job.id}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:border-cabana-blue/40 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-cabana-blue/10 px-3 py-1 text-xs font-semibold text-cabana-blue">
                        {job.department}
                      </span>
                      <span className="rounded-full bg-cabana-green/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {job.level}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-cabana-blue">
                      {job.title}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {job.shortDescription}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Wifi className="size-3.5" />
                        {job.modality}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-3.5" />
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-cabana-blue">
                    Ver detalle
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </Container>
    </Section>
  );
}
