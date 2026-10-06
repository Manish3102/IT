import { technologyGroups, type Tech } from "@/data/technologies";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./SectionHeading";

function TechBadge({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  // very dark brand colours (Next.js, Vercel, GitHub…) are shown in brand violet for contrast
  const dark = tech.hex && ["#000000", "#181717", "#2088FF".toLowerCase()].includes(tech.hex.toLowerCase());
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-line bg-white px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-soft)]">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface transition-colors group-hover:bg-brand-50">
        {tech.path ? (
          <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]" fill={dark ? "#3b1863" : tech.hex}>
            <path d={tech.path} />
          </svg>
        ) : Icon ? (
          <Icon aria-hidden className="size-[18px] text-brand-600" strokeWidth={1.9} />
        ) : null}
      </span>
      <span className="text-[14.5px] font-medium text-text">{tech.name}</span>
    </li>
  );
}

export function TechnologyGrid() {
  return (
    <section aria-label="Technologies" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our stack"
          title={
            <>
              Technologies <span className="text-gradient-dark">We Work With</span>
            </>
          }
          description="We choose proven, well-supported technologies — so your product is fast to build today and easy to maintain tomorrow."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={(i % 3) * 0.07}
              className={`rounded-[var(--radius-card)] border border-line bg-surface p-6 ${i === 0 ? "lg:row-span-2" : ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold">{g.title}</h3>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-muted ring-1 ring-line">
                  {g.items.length}
                </span>
              </div>
              <ul className={`mt-5 grid gap-2.5 ${i === 0 ? "sm:grid-cols-2 lg:grid-cols-1" : "sm:grid-cols-2"}`}>
                {g.items.map((t) => (
                  <TechBadge key={t.name} tech={t} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
