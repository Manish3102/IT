import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { services, getService, serviceCategories } from "@/data/services";
import { processSteps } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ service: string }> };

// Only the service slugs below are valid top-level routes (e.g. /web-development)
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return buildMetadata({ title: s.title, description: s.metaDescription, path: `/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug && x.category === s.category).slice(0, 4);
  const more = related.length < 4 ? services.filter((x) => x.slug !== s.slug && !related.includes(x)).slice(0, 4 - related.length) : [];

  return (
    <>
      <JsonLd data={[serviceJsonLd({ title: s.title, description: s.metaDescription, slug: s.slug }), faqJsonLd(s.faqs)]} />
      <PageHero
        eyebrow={serviceCategories[s.category]}
        title={s.headline}
        description={s.intro}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: s.title, path: `/${s.slug}` },
        ]}
        aside={
          <div className="glass rounded-[1.75rem] p-7 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient">
                <Icon aria-hidden className="size-6 text-white" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-300">What you get</p>
                <p className="font-display font-semibold">{s.title}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3.5">
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-[15px] text-white/80">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-signal-500/20 text-signal-300">
                    <Check aria-hidden className="size-3.5" strokeWidth={3} />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" arrow>
            Start Your Project
          </ButtonLink>
          <ButtonLink href={siteConfig.consultationUrl} variant="ghost-dark" size="lg">
            Book a Free Consultation
          </ButtonLink>
        </div>
      </PageHero>

      {/* Offerings */}
      <section aria-label={`${s.title} offerings`} className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title={
              <>
                {s.title} <span className="text-gradient-dark">Services</span>
              </>
            }
            description={`Everything you need from a ${s.title.toLowerCase()} partner — scoped to your goals, budget and timeline.`}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.06} className="h-full">
                <article
                  id={o.id}
                  className="group h-full scroll-mt-28 rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-lift)] target:border-signal-400 target:ring-4 target:ring-signal-100"
                >
                  <span className="font-display text-sm font-semibold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{o.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech + process */}
      <section aria-label="Technology and delivery" className="bg-surface py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="rounded-[var(--radius-card)] border border-line bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">Tools & technologies</p>
            <h2 className="mt-3 text-2xl font-semibold">What we build with</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.tech.map((t) => (
                <li key={t} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-text/80">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              We recommend tools based on your requirements, team and long-term costs — not trends.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[var(--radius-card)] bg-ink p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-300">How we deliver</p>
            <h2 className="mt-3 text-2xl font-semibold">A process built for clarity</h2>
            <ol className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {processSteps.map((p) => (
                <li key={p.step} className="flex gap-3.5">
                  <span className="font-display text-sm font-semibold text-signal-400">{p.step}</span>
                  <div>
                    <p className="font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* FAQ + related */}
      <section aria-label="Frequently asked questions" className="bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title={`${s.title}: Common Questions`} />
            <Reveal className="mt-10">
              <FAQ items={s.faqs} />
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <aside className="rounded-[var(--radius-card)] border border-line bg-surface p-7 lg:sticky lg:top-28">
              <h2 className="font-display text-base font-semibold">Related services</h2>
              <ul className="mt-4 divide-y divide-line">
                {[...related, ...more].map((r) => {
                  const RIcon = r.icon;
                  return (
                    <li key={r.slug}>
                      <Link href={`/${r.slug}`} className="group flex items-center gap-3 py-3.5">
                        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-line">
                          <RIcon aria-hidden className="size-4" />
                        </span>
                        <span className="flex-1 text-[15px] font-medium group-hover:text-brand-700">{r.title}</span>
                        <ArrowUpRight aria-hidden className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ButtonLink href="/services" variant="outline" size="sm" className="mt-5 w-full">
                View all services
              </ButtonLink>
            </aside>
          </Reveal>
        </Container>
      </section>

      <CTASection title={`Ready to Start Your ${s.title} Project?`} text="Share your goals and we'll come back with a clear plan, timeline and estimate." />
    </>
  );
}
