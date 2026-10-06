import type { Industry } from "@/data/industries";

export function IndustryCard({ industry, detailed = false }: { industry: Industry; detailed?: boolean }) {
  const Icon = industry.icon;
  return (
    <article className="group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-lift)]">
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal-50 text-signal-600 ring-1 ring-signal-100 transition-colors duration-500 group-hover:bg-brand-700 group-hover:text-white group-hover:ring-brand-700">
        <Icon aria-hidden className="size-5" strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 text-base font-semibold">{industry.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{industry.desc}</p>
      {detailed && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {industry.examples.map((e) => (
            <li key={e} className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-text/70 ring-1 ring-line">
              {e}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
