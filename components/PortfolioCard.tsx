import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <div className="relative">
        <ProjectVisual visual={project.visual} className="h-52" />
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white">{project.industry}</span>
        {project.placeholder && (
          <span className="absolute right-4 top-4 rounded-full bg-amber-300/90 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-amber-950">
            Sample
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{project.summary}</p>
        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">
              {t}
            </li>
          ))}
        </ul>
        <Link
          href={`/portfolio/${project.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-line px-4 py-2 text-sm font-semibold text-text transition-all hover:border-brand-700 hover:bg-brand-700 hover:text-white"
        >
          View Case Study <span className="sr-only">: {project.title}</span>
          <ArrowUpRight aria-hidden className="size-4" />
        </Link>
      </div>
    </article>
  );
}
