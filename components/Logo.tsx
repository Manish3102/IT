import Image from "next/image";
import Link from "next/link";

/** Logo mark from the supplied brand file + live wordmark so it stays crisp on light and dark backgrounds. */
export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Techscalify — home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/logo-mark.png" alt="" width={40} height={40} priority className="size-9 sm:size-10" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.15rem] font-bold tracking-tight sm:text-[1.3rem] ${dark ? "text-white" : "text-text"}`}
        >
          TECH SCALIFY
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${dark ? "text-white/55" : "text-muted"}`}
        >
          IT Services
        </span>
      </span>
    </Link>
  );
}
