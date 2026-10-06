import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Info } from "lucide-react";
import { projects, getProject } from "@/data/portfolio";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.title} — Case Study`, description: p.summary, path: `/portfolio/${p.slug}` });
}

export default async function CaseStudyPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={p.industry}
        title={p.title}
        description={p.summary}
        crumbs={[
          { name: "Portfolio", path: "/portfolio" },
          { name: p.title, path: `/portfolio/${p.slug}` },
        ]}
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <li key={t} className="glass rounded-full px-3 py-1.5 text-sm text-white/80">
              {t}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <Container className="max-w-5xl">
          {p.placeholder && (
            <p className="mb-10 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
              <Info aria-hidden className="mt-0.5 size-4 shrink-0" />
              This is a sample project concept illustrating our approach — not a specific client engagement. Replace with a real
              case study in <code className="font-mono">data/portfolio.ts</code>.
            </p>
          )}
          <Reveal>
            <ProjectVisual visual={p.visual} className="group h-64 rounded-[1.75rem] sm:h-96" />
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="text-2xl font-semibold">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted">{p.challenge}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-2xl font-semibold">Our approach</h2>
              <ul className="mt-4 space-y-3">
                {p.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3 leading-relaxed text-muted">
                    <CheckCircle2 aria-hidden className="mt-1 size-4.5 shrink-0 text-signal-600" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-12 rounded-[var(--radius-card)] border border-line bg-surface p-8">
            <h2 className="text-xl font-semibold">Key features</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[15px] ring-1 ring-line">
                  <span aria-hidden className="size-2 rounded-full bg-brand-gradient" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Link href="/portfolio" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline">
            <ArrowLeft aria-hidden className="size-4" /> Back to portfolio
          </Link>
        </Container>
      </section>

      <section aria-label="More projects" className="bg-surface py-20">
        <Container>
          <h2 className="text-2xl font-semibold">More projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <PortfolioCard key={o.slug} project={o} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
