import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IndustryCard } from "@/components/IndustryCard";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Techscalify builds software, apps and digital solutions for fintech, healthcare, e-commerce, education, real estate, logistics, manufacturing, retail, startups and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Industry Knowledge, <span className="text-gradient">Built Into the Technology</span>
          </>
        }
        description="Every sector has its own users, regulations and workflows. We bring that understanding into the products we design and build."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />
      <section aria-label="Industries" className="bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 3) * 0.06} className="h-full">
                <IndustryCard industry={ind} detailed />
              </Reveal>
            ))}
            <Reveal delay={0.12} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-brand-gradient p-7 text-white">
                <div>
                  <h2 className="text-xl font-semibold">Don&apos;t see your industry?</h2>
                  <p className="mt-3 leading-relaxed text-white/85">
                    Our engineering and discovery process adapts to any domain. Tell us about your business and we&apos;ll show you
                    how technology can help.
                  </p>
                </div>
                <a href="/contact" className="mt-6 inline-flex h-11 items-center justify-center self-start rounded-full bg-white px-5 text-sm font-semibold text-brand-800 hover:bg-brand-50">
                  Talk to us
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
