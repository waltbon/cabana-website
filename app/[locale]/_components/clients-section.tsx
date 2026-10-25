import Image from "next/image";
import { getTranslations } from "next-intl/server";

const clients = [
  { name: "CIISA", logo: "/clients/ciisa.png" },
  { name: "FIFCO", logo: "/clients/fifco.png" },
  { name: "London Media", logo: "/clients/london-media.png" },
  { name: "Siru", logo: "/clients/siru.png" },
  { name: "Zebol", logo: "/clients/zebol.png" },
  { name: "Huli", logo: "/clients/huli.png" },
];

export async function ClientsSection() {
  const t = await getTranslations("inicio.clients");

  return (
    <section className="bg-section-light py-10 md:py-14">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-sm font-semibold text-muted-foreground">
          {t("title")}
        </h2>
        <ul className="grid grid-cols-2 items-center justify-items-center gap-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-16">
          {clients.map((client) => (
            <li key={client.name} className="grayscale transition-all hover:grayscale-0">
              <Image
                src={client.logo}
                alt={client.name}
                width={130}
                height={48}
                className="h-12 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
