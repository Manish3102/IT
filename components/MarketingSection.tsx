import { TrendingUp } from "lucide-react";
import { marketingServices } from "@/data/content";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./SectionHeading";

export function MarketingSection() {
  return (
    <section aria-labelledby="marketing-title" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Digital growth</Eyebrow>
          <h2 id="marketing-title" className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
            Grow Your Business <span className="text-gradient-dark">Beyond Development</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            A great product needs to be found. Techscalify&apos;s digital marketing team helps you attract the right audience,
            generate qualified leads and measure what&apos;s working — all aligned with the technology we build for you.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Because development and marketing sit under one roof, your website is built SEO-ready, campaigns land on pages
            designed to convert, and tracking is set up correctly from day one.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/digital-marketing" arrow>
              Grow Your Online Presence
            </ButtonLink>
            <ButtonLink href="/seo" variant="outline">
              Explore SEO
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-brand-gradient opacity-[0.08] blur-2xl" />
          <div className="relative rounded-[2rem] border border-line bg-white p-5 shadow-[var(--shadow-lift)] sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Growth toolkit</p>
                <p className="mt-1 font-display text-lg font-semibold">Everything you need to scale</p>
              </div>
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <TrendingUp aria-hidden className="size-5" />
              </span>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {marketingServices.map((m) => {
                const Icon = m.icon;
                return (
                  <li
                    key={m.title}
                    className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white"
                  >
                    <Icon aria-hidden className="size-5 text-signal-600 transition-colors group-hover:text-brand-700" strokeWidth={1.8} />
                    <span className="text-sm font-semibold leading-snug">{m.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
