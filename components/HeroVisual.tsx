import { CheckCircle2, Cloud, GitBranch, Loader2 } from "lucide-react";

/**
 * Abstract "software architecture" visual — pure SVG + CSS animation (no JS, no images).
 * Animations stop automatically under prefers-reduced-motion (globals.css).
 */
const nodes = [
  { id: "web", x: 70, y: 60, label: "Web App" },
  { id: "mob", x: 70, y: 170, label: "Mobile" },
  { id: "api", x: 235, y: 115, label: "API Gateway", main: true },
  { id: "auth", x: 395, y: 40, label: "Auth" },
  { id: "svc", x: 400, y: 120, label: "Services" },
  { id: "pay", x: 395, y: 200, label: "Payments" },
  { id: "db", x: 165, y: 245, label: "Database" },
] as const;

const edges: [string, string][] = [
  ["web", "api"],
  ["mob", "api"],
  ["api", "auth"],
  ["api", "svc"],
  ["api", "pay"],
  ["api", "db"],
  ["svc", "db"],
];

const pos = (id: string) => nodes.find((n) => n.id === id)!;

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[1/1] w-full max-w-[560px] sm:aspect-[6/5]" aria-hidden>
      {/* main architecture panel */}
      <div className="glass absolute inset-x-0 top-[22%] bottom-[16%] rounded-[1.75rem] p-4 shadow-2xl shadow-black/40 sm:left-10 sm:right-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <span className="rounded-full bg-white/8 px-2.5 py-1 font-mono text-[10px] text-white/55">system-architecture.ts</span>
        </div>
        <svg viewBox="0 0 470 280" className="mt-2 h-[calc(100%-1.75rem)] w-full">
          <defs>
            <linearGradient id="edge" x1="0" x2="1">
              <stop offset="0" stopColor="#8f6bd0" />
              <stop offset="1" stopColor="#4fb0ee" />
            </linearGradient>
            <radialGradient id="nodeGlow">
              <stop offset="0" stopColor="#4fb0ee" stopOpacity="0.55" />
              <stop offset="1" stopColor="#4fb0ee" stopOpacity="0" />
            </radialGradient>
          </defs>
          {edges.map(([a, b]) => {
            const p = pos(a);
            const q = pos(b);
            return (
              <g key={a + b}>
                <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="rgb(255 255 255 / 0.08)" strokeWidth={2} />
                <line className="flow-line" x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="url(#edge)" strokeWidth={2} strokeLinecap="round" />
              </g>
            );
          })}
          {nodes.map((n) => (
            <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
              {"main" in n && n.main && (
                <>
                  <circle r={46} fill="url(#nodeGlow)" />
                  <circle r={22} fill="none" stroke="#4fb0ee" strokeWidth={1.5} className="pulse-ring" />
                </>
              )}
              <rect
                x={"main" in n && n.main ? -56 : -44}
                y={-17}
                width={"main" in n && n.main ? 112 : 88}
                height={34}
                rx={10}
                fill={"main" in n && n.main ? "#3b1863" : "rgb(255 255 255 / 0.07)"}
                stroke={"main" in n && n.main ? "#8f6bd0" : "rgb(255 255 255 / 0.18)"}
              />
              <text
                textAnchor="middle"
                dy={4.5}
                fontSize={13}
                fontWeight={600}
                fill="white"
                fillOpacity={"main" in n && n.main ? 1 : 0.8}
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* code card */}
      <div className="absolute left-0 top-0 z-10 w-[68%] animate-float rounded-2xl border border-white/12 bg-[#1a1030]/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/50 sm:w-[56%]">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-white/50">
          <GitBranch className="size-3.5" /> main
        </div>
        <pre className="overflow-hidden font-mono text-[10.5px] leading-[1.7] text-white/80 sm:text-[11.5px]">
          <span className="text-brand-400">const</span> product = <span className="text-brand-400">await</span> techscalify{"\n"}
          {"  "}.<span className="text-signal-300">design</span>(idea){"\n"}
          {"  "}.<span className="text-signal-300">build</span>({"{"} secure: <span className="text-emerald-300">true</span> {"}"}){"\n"}
          {"  "}.<span className="text-signal-300">scale</span>(<span className="text-amber-200">&quot;cloud&quot;</span>);
        </pre>
      </div>

      {/* pipeline card */}
      <div className="absolute bottom-0 right-0 z-10 w-[60%] animate-float rounded-2xl border border-white/12 bg-[#1a1030]/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/50 [animation-delay:-3.5s] sm:w-[46%]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">CI/CD Pipeline</p>
        <ul className="mt-3 space-y-2 text-[12px] text-white/85">
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" /> Build
            </span>
            <span className="h-1.5 w-16 rounded-full bg-emerald-400/70" />
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" /> Test
            </span>
            <span className="h-1.5 w-16 rounded-full bg-emerald-400/70" />
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin text-signal-400" /> Deploy
            </span>
            <span className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full w-2/3 rounded-full bg-signal-400" />
            </span>
          </li>
        </ul>
      </div>

      {/* cloud chip */}
      <div className="absolute right-0 top-[9%] z-10 flex border border-white/12 bg-[#1a1030]/95 items-center gap-2 rounded-full py-2 pl-2 pr-4 text-[12px] font-medium text-white/85 shadow-lg shadow-black/30 sm:right-4">
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-brand-gradient">
          <Cloud className="size-3.5 text-white" />
        </span>
        Auto-scaling
      </div>
    </div>
  );
}
