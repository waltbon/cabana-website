"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardFadeUp } from "../lib/variants";
import { Badge } from "@/components/ui/badge";

const clients = [
  { id: 1, name: "London Media", logo: "/london-media.png" },
  { id: 2, name: "CIISA", logo: "/ciisa.png" },
  { id: 3, name: "FIFCO", logo: "/fifco.png" },
  { id: 4, name: "Huli", logo: "/huli.png" },
  { id: 5, name: "Siru", logo: "/siru.png" },
];

export function ClientsSection() {
  return (
    <section className="pt-20 pb-12 border-t border-dashed border-border">
      <div className="container max-w-5xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Badge variant='pretitle' className="mb-2">
            Hemos trabajado de la mano
          </Badge>
          <h2 className="text-foreground max-w-xl">
            Compañías que han confiado en nuestro trabajo
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 w-full"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={cardFadeUp}
              className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={130}
                height={48}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
