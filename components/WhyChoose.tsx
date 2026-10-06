import { whyChoose } from "@/data/content";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyChoose() {
  return (
    <section aria-label="Why choose Techscalify" className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden className="bg-grid-dark mask-radial absolute inset-0 -z-10" />
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-600/35 blur-[120px]" />
      <Container>
        <SectionHeading
          dark
          eyebrow="Why Techscalify"
          title={
            <>
              Why Businesses <span className="text-gradient">Choose Techscalify</span>
            </>
          }
          description="We're a technology partner that thinks like a business — focused on outcomes, honest about trade-offs, and committed long after launch."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal
                key={w.title}
                delay={(i % 3) * 0.07}
                className="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-gradient shadow-lg shadow-brand-900/50">
                  <Icon aria-hidden className="size-5.5 text-white" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">{w.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
