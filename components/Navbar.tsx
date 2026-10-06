"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { mainNav, megaMenu } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on navigation
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const solid = scrolled || megaOpen;
  const serviceRoutes = megaMenu.flatMap((c) => c.links.map((l) => l.href.split("#")[0]));
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) || (href === "/services" && serviceRoutes.includes(pathname));

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-line/80 bg-white/85 shadow-[0_6px_30px_-12px_rgb(20_17_31/0.15)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-700"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:h-20 lg:px-8">
        <Logo dark={!solid} />

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.mega ? (
              <li key={item.href} className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                <button
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="mega-menu"
                  onClick={() => setMegaOpen((v) => !v)}
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                    solid
                      ? isActive(item.href) || megaOpen
                        ? "text-brand-700"
                        : "text-text/80 hover:text-brand-700"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown aria-hidden className={`size-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                </button>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                    solid
                      ? isActive(item.href)
                        ? "text-brand-700"
                        : "text-text/80 hover:text-brand-700"
                      : isActive(item.href)
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.consultationUrl}
            className="group hidden h-11 items-center gap-2 rounded-full bg-brand-gradient px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgb(42_149_224/0.7)] transition-all hover:-translate-y-0.5 sm:inline-flex"
          >
            Get a Free Consultation
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={`inline-flex size-11 items-center justify-center rounded-full lg:hidden ${
              solid ? "bg-surface text-text" : "glass text-white"
            }`}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            id="mega-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="mx-auto max-w-7xl px-8">
              <div className="mt-2 grid grid-cols-[1fr_1fr_1fr_1.05fr] gap-2 overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-[var(--shadow-lift)]">
                {megaMenu.map((col) => (
                  <div key={col.title} className="rounded-2xl p-5">
                    <p className="font-display text-sm font-semibold text-text">{col.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{col.blurb}</p>
                    <ul className="mt-4 space-y-0.5">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            onClick={() => setMegaOpen(false)}
                            className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-text/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {l.label}
                            <ArrowRight aria-hidden className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink p-6 text-white">
                  <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-signal-500/30 blur-3xl" />
                  <div aria-hidden className="absolute -bottom-20 -left-10 size-48 rounded-full bg-brand-500/40 blur-3xl" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-300">Not sure where to start?</p>
                    <p className="mt-3 font-display text-lg font-semibold leading-snug">
                      Talk to an expert and get a clear plan for your project.
                    </p>
                  </div>
                  <div className="relative mt-6 space-y-3">
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
                    >
                      View all services <ArrowRight aria-hidden className="size-4" />
                    </Link>
                    <Link
                      href={siteConfig.consultationUrl}
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-brand-800 hover:bg-brand-50"
                    >
                      Book a free consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-ink text-white lg:hidden"
            >
              <div aria-hidden className="pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-signal-500/25 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-brand-500/35 blur-3xl" />
              <div className="relative flex h-[72px] items-center justify-between px-5">
                <Logo dark />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="glass inline-flex size-11 items-center justify-center rounded-full"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav aria-label="Mobile" className="relative flex-1 overflow-y-auto px-5 pb-6 pt-4">
                <ul className="space-y-1">
                  {mainNav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      {item.mega ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => setMobileServices((v) => !v)}
                            aria-expanded={mobileServices}
                            className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-display text-xl font-semibold"
                          >
                            {item.label}
                            <ChevronDown aria-hidden className={`size-5 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence initial={false}>
                            {mobileServices && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-4 px-3 pb-3 pt-1">
                                  {megaMenu.map((col) => (
                                    <div key={col.title}>
                                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal-300">{col.title}</p>
                                      <ul className="mt-2 grid grid-cols-1 gap-0.5">
                                        {col.links.map((l) => (
                                          <li key={l.label}>
                                            <Link href={l.href} onClick={() => setMobileOpen(false)} className="block rounded-lg py-1.5 text-[15px] text-white/75 hover:text-white">
                                              {l.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                  <Link href="/services" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-signal-300">
                                    All services <ArrowRight aria-hidden className="size-4" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={`block rounded-xl px-3 py-3 font-display text-xl font-semibold ${isActive(item.href) ? "text-signal-300" : "text-white"}`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="relative space-y-3 border-t border-white/10 p-5">
                <Link
                  href={siteConfig.consultationUrl}
                  onClick={() => setMobileOpen(false)}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient font-semibold"
                >
                  Get a Free Consultation <ArrowRight aria-hidden className="size-4" />
                </Link>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center gap-2 text-sm text-white/65">
                  <Mail aria-hidden className="size-4" /> {siteConfig.email}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
