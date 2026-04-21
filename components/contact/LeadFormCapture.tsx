"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const calendarUrl = process.env.NEXT_PUBLIC_DISCOVERY_CALENDAR_URL ?? "#";

// ─── Industries ───────────────────────────────────────────────────────────────

const INDUSTRIES = [
  "Agricultura y Ganadería",
  "Alimentación y Bebidas",
  "Automotriz",
  "Banca y Finanzas",
  "Bienes Raíces",
  "Comercio Electrónico",
  "Comercio Minorista / Retail",
  "Construcción",
  "Educación",
  "Energía y Servicios Públicos",
  "Entretenimiento y Medios",
  "Hospitalidad y Turismo",
  "Manufactura e Industria",
  "Salud y Farmacéutica",
  "Sector Público y Gobierno",
  "Seguros",
  "Servicios Profesionales",
  "Tecnología de la Información (TI)",
  "Telecomunicaciones",
  "Transporte y Logística",
  "Otro",
] as const;

// ─── Schema ───────────────────────────────────────────────────────────────────

const FREE_DOMAINS = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "icloud.com"];

const leadSchema = z
  .object({
    fullName: z.string().min(2, "Ingresa tu nombre completo."),
    corporateEmail: z
      .string()
      .email("Ingresa un email válido.")
      .refine(
        (v) => !FREE_DOMAINS.some((d) => v.toLowerCase().endsWith(`@${d}`)),
        { message: "Por favor usa tu email corporativo." }
      ),
    company: z.string().min(2, "Ingresa el nombre de tu empresa."),
    role: z.string().min(2, "Ingresa tu rol o cargo."),
    industry: z.string().min(1, "Selecciona tu industria."),
    customIndustry: z.string().optional(),
  })
  .refine(
    (data) =>
      data.industry !== "Otro" ||
      (data.customIndustry !== undefined && data.customIndustry.trim().length >= 2),
    { message: "Describe tu industria.", path: ["customIndustry"] }
  );

type LeadFormValues = z.infer<typeof leadSchema>;

// ─── Props ────────────────────────────────────────────────────────────────────

interface LeadCaptureFormProps {
  submitLabel: string;
  layout?: "stacked" | "grid";
  onSubmitSuccess?: () => void;
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LeadCaptureForm({
  submitLabel,
  layout = "stacked",
  onSubmitSuccess,
  className,
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      corporateEmail: "",
      company: "",
      role: "",
      industry: "",
      customIndustry: "",
    },
  });

  const selectedIndustry = form.watch("industry");

  async function onSubmit(values: LeadFormValues) {
    const resolvedIndustry =
      values.industry === "Otro" ? (values.customIndustry ?? "Otro") : values.industry;

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: values.fullName,
        corporateEmail: values.corporateEmail,
        company: values.company,
        role: values.role,
        industry: resolvedIndustry,
      }),
    });

    setSubmittedName(values.fullName.trim().split(" ")[0]);
    setSubmitted(true);
    onSubmitSuccess?.();
    form.reset();
  }

  const selectClass = cn(
    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
    "ring-offset-background focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  );

  if (submitted) {
    return (
      <div className={cn("space-y-4", className)}>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 shrink-0 text-green-500" size={20} />
          <div>
            <p className="text-sm font-semibold text-foreground">
              ¡Gracias{submittedName ? `, ${submittedName}` : ""}!
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Recibimos tu información. Uno de nuestros expertos se pondrá en contacto contigo en las próximas 24 horas.
            </p>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full font-medium border-foreground text-foreground"
        >
          <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
            <CalendarDays size={15} />
            Agendar reunión ahora
          </a>
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-3", className)}>
        <div
          className={cn(
            layout === "grid" && "grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0 space-y-0",
            layout === "stacked" && "space-y-3"
          )}
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className={cn(layout === "grid" && "space-y-1 mb-3")}>
                <FormLabel className="text-[11px] font-medium text-muted-foreground">
                  Nombre completo
                </FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" className="h-9 text-sm" {...field} />
                </FormControl>
                <FormMessage className="text-[11px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="corporateEmail"
            render={({ field }) => (
              <FormItem className={cn(layout === "grid" && "space-y-1 mb-3")}>
                <FormLabel className="text-[11px] font-medium text-muted-foreground">
                  Email corporativo
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@empresa.com"
                    className="h-9 text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[11px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className={cn(layout === "grid" && "space-y-1 mb-3")}>
                <FormLabel className="text-[11px] font-medium text-muted-foreground">
                  Empresa
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de tu empresa" className="h-9 text-sm" {...field} />
                </FormControl>
                <FormMessage className="text-[11px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className={cn(layout === "grid" && "space-y-1 mb-3")}>
                <FormLabel className="text-[11px] font-medium text-muted-foreground">
                  Rol / Cargo
                </FormLabel>
                <FormControl>
                  <Input placeholder="Tu rol" className="h-9 text-sm" {...field} />
                </FormControl>
                <FormMessage className="text-[11px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem className={cn(layout === "grid" && "space-y-1 mb-3", "col-span-full")}>
                <FormLabel className="text-[11px] font-medium text-muted-foreground">
                  Industria
                </FormLabel>
                <FormControl>
                  <select {...field} className={selectClass}>
                    <option value="" disabled>Selecciona tu industria</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage className="text-[11px]" />
              </FormItem>
            )}
          />

          {selectedIndustry === "Otro" && (
            <FormField
              control={form.control}
              name="customIndustry"
              render={({ field }) => (
                <FormItem className={cn(layout === "grid" && "space-y-1 mb-3", "col-span-full")}>
                  <FormLabel className="text-[11px] font-medium text-muted-foreground">
                    ¿Cuál es tu industria?
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Describe tu industria" className="h-9 text-sm" {...field} />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm h-10"
        >
          {submitLabel}
        </Button>
      </form>
    </Form>
  );
}
