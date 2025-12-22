import Image from "next/image";
import {
  Handshake,
  Users,
  Database,
  Code,
  Figma,
} from "lucide-react";
import { Section, Container } from "@/components/craft";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Walter",
    role: "Tech Lead",
    icon: Handshake,
  },
  {
    id: 2,
    name: "Evelyn",
    role: "Admin Manager",
    icon: Users,
  },
  {
    id: 3,
    name: "Thomas",
    role: "Data Engineer",
    icon: Database,
  },
  {
    id: 4,
    name: "Eduardo",
    role: "Data Engineer",
    icon: Database,
  },
  {
    id: 5,
    name: "Melissa",
    role: "Developer",
    icon: Code,
  },
  {
    id: 6,
    name: "Sergio",
    role: "Senior Developer",
    icon: Code,
  },
  {
    id: 7,
    name: "Rebeca",
    role: "UX/UI Designer",
    icon: Figma,
  },
];

export function TeamSection() {
  return (
    <Section className="bg-white py-24">
      <Container className="max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
          {/* Left Column - Title and Team Grid */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Section Header */}
            <div className="flex max-w-lg flex-col gap-5">
              {/* Tagline */}
              <span className="text-sm font-medium text-muted-foreground">
                The team.
              </span>

              {/* Headline */}
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Get to know our
                <br />
                amazing team!
              </h2>

              {/* Description */}
              <p className="text-base text-muted-foreground">
                We are a team of data, development and design experts. Together,
                we create bold solutions that connect and inspire.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-4"
                >
                  <member.icon className="size-6 shrink-0 text-foreground" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-cabana-blue">
                      {member.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Team Photo */}
          <div className="relative aspect-[4/5] w-full max-w-xl overflow-hidden rounded-xl lg:flex-1">
            <Image
              src="/about/team.svg"
              alt="Cabana Data Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
