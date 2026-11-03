"use client";

import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "@/components/contact/LeadFormCapture";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PostSidebar({ serviceKey }: { serviceKey: "rutaIa" | "aiFirstMove" }) {
  const t = useTranslations("blog.postSidebar");

  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="lg:sticky lg:top-20"
    >
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div>
          <Badge variant="pretitle" className="mb-2">
            {t(`${serviceKey}.badge`)}
          </Badge>
          <h3 className="text-xl font-bold text-foreground leading-snug mb-2">
            {t(`${serviceKey}.heading`)}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t(`${serviceKey}.description`)}
          </p>
        </div>

        <LeadCaptureForm submitLabel={t("submitLabel")} qualify />

        <p className="text-xs text-muted-foreground text-center">
          {t("disclaimer")}
        </p>
      </div>
    </m.div>
  );
}
