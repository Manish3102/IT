import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./SectionHeading";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: { name: string; path: string }[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <JsonLd data={breadcrumbJsonLd(all)} />
      <div aria-hidden className="bg-grid-dark mask-fade-b absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -left-32 -top-40 -z-10 size-[32rem] animate-drift rounded-full bg-brand-600/40 blur-[120px]" />
      <div aria-hidden className="absolute -right-24 top-10 -z-10 size-[26rem] animate-drift rounded-full bg-signal-500/25 blur-[120px] [animation-delay:-7s]" />
      <Container className={aside ? "grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]" : ""}>
        <div className="max-w-3xl">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
                {all.map((c, i) => (
                  <li key={c.path} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight aria-hidden className="size-3.5" />}
                    {i === all.length - 1 ? (
                      <span aria-current="page" className="text-white/85">
                        {c.name}
                      </span>
                    ) : (
                      <Link href={c.path} className="hover:text-white">
                        {c.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
          {eyebrow && (
            <Reveal delay={0.04} className="mt-6">
              <Eyebrow dark>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.5rem]">{title}</h1>
          </Reveal>
          {description && (
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
            </Reveal>
          )}
          {children && <Reveal delay={0.2}>{children}</Reveal>}
        </div>
        {aside && <Reveal delay={0.15}>{aside}</Reveal>}
      </Container>
    </section>
  );
}
