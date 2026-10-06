import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost-dark" | "outline" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgb(42_149_224/0.6)] hover:shadow-[0_14px_36px_-10px_rgb(42_149_224/0.75)] hover:-translate-y-0.5",
  secondary: "bg-brand-700 text-white hover:bg-brand-800 hover:-translate-y-0.5",
  "ghost-dark": "glass text-white hover:bg-white/12 hover:-translate-y-0.5",
  outline: "border border-line bg-white text-text hover:border-brand-400 hover:text-brand-700 hover:-translate-y-0.5",
  white: "bg-white text-brand-800 hover:bg-brand-50 hover:-translate-y-0.5 shadow-lg shadow-black/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "h-10 px-4 text-sm", md: "h-12 px-6 text-[15px]", lg: "h-14 px-7 text-base" };
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizes[size]} ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
