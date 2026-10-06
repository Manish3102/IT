import type { ReactNode } from "react";
import { Reveal } from "./ui/Reveal";

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
        dark ? "glass text-signal-300" : "bg-brand-50 text-brand-600 ring-1 ring-brand-100"
      }`}
    >
      <span aria-hidden className={`size-1.5 rounded-full ${dark ? "bg-signal-400" : "bg-signal-500"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  as?: "h1" | "h2";
}) {
  const center = align === "center";
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <Tag
        className={`mt-4 text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : "text-text"}`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-muted"}`}>{description}</p>
      )}
    </Reveal>
  );
}
