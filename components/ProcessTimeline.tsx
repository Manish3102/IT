"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/data/content";
import { Container } from "./ui/Container";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section aria-label="Our process" className="relative bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our process"
          title={
            <>
              How We <span className="text-gradient-dark">Work</span>
            </>
          }
          description="A clear, collaborative delivery process — so you always know what's happening, what's next and why."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* track */}
          <div aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-line md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute bottom-6 left-6 top-6 w-px origin-top bg-gradient-to-b from-brand-600 to-signal-500 md:left-1/2 md:-translate-x-1/2"
          />
          <ol ref={ref} className="relative">
          {processSteps.map((s, i) => {
            const Icon = s.icon;
            const right = i % 2 === 1;
            return (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0 md:grid-cols-[1fr_3rem_1fr] md:gap-8`}
              >
                <div aria-hidden className={`hidden md:block ${right ? "md:order-1" : "md:order-3"}`} />
                <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-2xl border border-line bg-white text-brand-700 shadow-[var(--shadow-soft)] md:order-2">
                  <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                </span>
                <div
                  className={`group rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[var(--shadow-lift)] ${
                    right ? "md:order-3" : "md:order-1 md:text-right"
                  }`}
                >
                  <span className="font-display text-sm font-semibold text-signal-600">{s.step}</span>
                  <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.desc}</p>
                </div>
              </motion.li>
            );
          })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
