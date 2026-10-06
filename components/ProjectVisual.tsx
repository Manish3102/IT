import type { Project } from "@/data/portfolio";

/** Generated cover art for placeholder projects. Swap for <Image> with a real screenshot later. */
export function ProjectVisual({ visual, className = "" }: { visual: Project["visual"]; className?: string }) {
  return (
    <div aria-hidden className={`relative overflow-hidden bg-ink ${className}`}>
      <div className="bg-grid-dark absolute inset-0 opacity-70" />
      <div className="absolute -left-10 -top-10 size-48 rounded-full bg-brand-500/50 blur-3xl" />
      <div className="absolute -bottom-12 -right-6 size-48 rounded-full bg-signal-500/40 blur-3xl" />
      <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-xl border border-b-0 border-white/15 bg-white/[0.06] p-3 backdrop-blur-sm transition-transform duration-700 group-hover:-translate-y-1.5">
        <div className="mb-3 flex gap-1">
          <span className="size-1.5 rounded-full bg-white/30" />
          <span className="size-1.5 rounded-full bg-white/30" />
          <span className="size-1.5 rounded-full bg-white/30" />
        </div>
        {visual === "dashboard" && (
          <div className="grid h-full grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-10 rounded-md bg-white/10 p-1.5">
                <div className="h-1.5 w-8 rounded bg-white/30" />
                <div className="mt-1.5 h-2.5 w-12 rounded bg-signal-400/70" />
              </div>
            ))}
            <svg viewBox="0 0 200 60" className="col-span-3 h-20 w-full">
              <path d="M0 50 C30 45 40 20 70 28 S120 10 140 18 S180 4 200 8 L200 60 L0 60Z" fill="rgb(79 176 238 / 0.18)" />
              <path d="M0 50 C30 45 40 20 70 28 S120 10 140 18 S180 4 200 8" fill="none" stroke="#4fb0ee" strokeWidth="2" />
            </svg>
          </div>
        )}
        {visual === "kanban" && (
          <div className="grid h-full grid-cols-3 gap-2">
            {[3, 2, 4].map((n, c) => (
              <div key={c} className="space-y-1.5 rounded-md bg-white/[0.06] p-1.5">
                <div className="h-1.5 w-10 rounded bg-white/35" />
                {Array.from({ length: n }).map((_, i) => (
                  <div key={i} className={`h-6 rounded ${i === 0 && c === 1 ? "bg-brand-400/60" : "bg-white/12"}`} />
                ))}
              </div>
            ))}
          </div>
        )}
        {visual === "store" && (
          <div className="grid h-full grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="rounded-md bg-white/[0.07] p-1.5">
                <div className={`h-9 rounded ${i % 3 === 1 ? "bg-signal-400/40" : "bg-brand-400/35"}`} />
                <div className="mt-1.5 h-1.5 w-10 rounded bg-white/30" />
                <div className="mt-1 h-1.5 w-6 rounded bg-white/50" />
              </div>
            ))}
          </div>
        )}
        {visual === "marketing" && (
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded bg-white/40" />
            <div className="h-3 w-1/2 rounded bg-white/25" />
            <div className="mt-3 flex gap-2">
              <div className="h-5 w-16 rounded-full bg-brand-gradient" />
              <div className="h-5 w-14 rounded-full bg-white/15" />
            </div>
            <div className="mt-3 flex h-14 items-end gap-1.5">
              {[30, 45, 38, 60, 52, 75, 88].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t bg-signal-400/60" />
              ))}
            </div>
          </div>
        )}
        {visual === "saas" && (
          <div className="grid h-full grid-cols-[2.5rem_1fr] gap-2">
            <div className="space-y-1.5 rounded-md bg-white/[0.06] p-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-2 rounded ${i === 1 ? "bg-signal-400/80" : "bg-white/20"}`} />
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="h-12 flex-1 rounded-md bg-brand-400/30" />
                <div className="h-12 flex-1 rounded-md bg-white/10" />
              </div>
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-2 rounded bg-white/[0.06] p-1.5">
                  <div className="size-3 rounded-full bg-white/30" />
                  <div className="h-1.5 flex-1 rounded bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
