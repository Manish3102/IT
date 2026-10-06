import { Plus } from "lucide-react";

/** Accessible, zero-JS accordion built on <details>. */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-text transition-colors hover:text-brand-700">
            {f.q}
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-brand-700 transition-transform duration-300 group-open:rotate-45">
              <Plus aria-hidden className="size-4" />
            </span>
          </summary>
          <p className="pb-6 pr-12 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
