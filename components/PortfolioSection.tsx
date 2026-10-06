import { projects } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./SectionHeading";
import { PortfolioCard } from "./PortfolioCard";
import { ButtonLink } from "./ui/Button";

export function PortfolioSection({ limit = 3 }: { limit?: number }) {
  return (
    <section aria-label="Portfolio" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title={
              <>
                The Kind of Products <span className="text-gradient-dark">We Build</span>
              </>
            }
            description="A look at the types of platforms we design and engineer — from fintech operations to e-commerce and SaaS."
          />
          <ButtonLink href="/portfolio" variant="outline" arrow className="shrink-0">
            View all projects
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, limit).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <PortfolioCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
