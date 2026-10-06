import type { Metadata } from "next";
import { Info } from "lucide-react";
import { projects } from "@/data/portfolio";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio & Case Studies",
  description:
    "Explore the kinds of platforms Techscalify designs and builds — fintech platforms, business management systems, e-commerce, marketing websites and SaaS applications.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const hasSamples = projects.some((p) => p.placeholder);
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Products Engineered to <span className="text-gradient">Perform and Scale</span>
          </>
        }
        description="A look at the platforms, applications and websites we design and build — and the thinking behind them."
        crumbs={[{ name: "Portfolio", path: "/portfolio" }]}
      />
      <section aria-label="Projects" className="bg-surface py-20 sm:py-24">
        <Container>
          {hasSamples && (
            <p className="mb-10 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
              <Info aria-hidden className="mt-0.5 size-4 shrink-0" />
              Projects marked “Sample” are representative concepts showing the type of work we deliver. Detailed client case
              studies are shared on request, subject to confidentiality.
            </p>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.07} className="h-full">
                <PortfolioCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
