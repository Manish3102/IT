import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, serviceCategories, type ServiceCategory } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, servicesItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IT Services",
  description:
    "Explore Techscalify IT services: software, web and mobile app development, UI/UX design, cloud & DevOps, IT consulting, IT support, digital marketing and SEO.",
  path: "/services",
  keywords: [
    "Techscalify services",
    "IT services Techscalify",
    "software development services",
    "web development services India",
    "SEO services",
  ],
});

const order: ServiceCategory[] = ["development", "technology", "growth"];
const blurbs: Record<ServiceCategory, string> = {
  development: "Custom software, websites, mobile apps, APIs and commerce — engineered to scale.",
  technology: "Design, cloud infrastructure, strategy and support that keep your systems reliable.",
  growth: "Search, social and performance marketing that turns visibility into revenue.",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesItemListJsonLd()} />
      <PageHero
        eyebrow="Services"
        title={
          <>
            End-to-End Technology & <span className="text-gradient">Digital Services</span>
          </>
        }
        description="From building powerful software to growing your digital presence, Techscalify provides end-to-end technology solutions designed around your business goals."
        crumbs={[{ name: "Services", path: "/services" }]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" arrow>
            Start Your Project
          </ButtonLink>
          <ButtonLink href="/contact#consultation" variant="ghost-dark" size="lg">
            Get a Free Consultation
          </ButtonLink>
        </div>
      </PageHero>

      {order.map((cat, ci) => {
        const list = services.filter((s) => s.category === cat);
        return (
          <section
            key={cat}
            aria-labelledby={`cat-${cat}`}
            className={`${ci % 2 === 0 ? "bg-white" : "bg-surface"} py-20 sm:py-24`}
          >
            <Container className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-14">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <p className="font-display text-sm font-semibold text-signal-600">0{ci + 1}</p>
                <h2 id={`cat-${cat}`} className="mt-2 text-3xl font-semibold">
                  {serviceCategories[cat]}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{blurbs[cat]}</p>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                {list.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.slug} delay={(i % 2) * 0.06} className="h-full">
                      <Link
                        href={`/${s.slug}`}
                        className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-lift)]"
                      >
                        <div className="flex items-start justify-between">
                          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white">
                            <Icon aria-hidden className="size-6" strokeWidth={1.75} />
                          </span>
                          <ArrowUpRight aria-hidden className="size-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.short}</p>
                        <ul className="mt-5 space-y-1.5 border-t border-line pt-5 text-sm text-text/75">
                          {s.offerings.slice(0, 3).map((o) => (
                            <li key={o.title} className="flex items-center gap-2">
                              <span aria-hidden className="size-1.5 rounded-full bg-signal-500" />
                              {o.title}
                            </li>
                          ))}
                        </ul>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      })}

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
