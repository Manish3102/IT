import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-lift)]">
      {/* hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-signal-400/0 blur-3xl transition-colors duration-500 group-hover:bg-signal-400/20"
      />
      <div className="flex items-start justify-between">
        <span className="relative inline-flex size-13 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
          <Icon aria-hidden className="size-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.75} />
        </span>
        {typeof index === "number" && (
          <span className="font-display text-sm font-semibold text-line transition-colors group-hover:text-brand-200">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-text">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted">{service.short}</p>
      <Link
        href={`/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 after:absolute after:inset-0 after:content-['']"
      >
        Learn More
        <span className="sr-only"> about {service.title}</span>
        <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
