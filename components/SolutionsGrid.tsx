import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/content";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./SectionHeading";

export function SolutionsGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section aria-label="Solutions" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Solutions"
            title={
              <>
                Solutions Built for <span className="text-gradient-dark">Modern Businesses</span>
              </>
            }
            description="Proven solution patterns we adapt to your processes — so you get to value faster without compromising on fit."
          />
        )}
        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${showHeading ? "mt-14" : ""}`}>
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.06} className="h-full">
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <Icon aria-hidden className="size-[18px]" strokeWidth={1.9} />
                    </span>
                    <h3 className="text-[15.5px] font-semibold leading-snug">{s.title}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Explore
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
