import { industries } from "@/data/industries";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./SectionHeading";
import { IndustryCard } from "./IndustryCard";
import { ButtonLink } from "./ui/Button";

export function IndustriesSection() {
  return (
    <section aria-label="Industries we serve" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Industries"
            title={
              <>
                Industries <span className="text-gradient-dark">We Serve</span>
              </>
            }
            description="Every industry has its own rules, users and risks. We bring domain understanding to the technology we build."
          />
          <ButtonLink href="/industries" variant="outline" arrow className="shrink-0">
            Explore industries
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 5) * 0.05} className="h-full">
              <IndustryCard industry={ind} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
