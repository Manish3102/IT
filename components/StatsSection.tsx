"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/site";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section aria-labelledby="trust-title" className="relative bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">Why it matters</p>
            <h2 id="trust-title" className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Technology That Helps Businesses <span className="text-gradient-dark">Move Forward</span>
            </h2>
            <p className="mt-4 text-muted">
              We combine engineering depth with business understanding — so what we build is reliable, scalable and actually
              moves your numbers.
            </p>
          </Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="flex flex-col bg-white p-6 sm:p-7">
                <dt className="order-2 mt-2 text-sm leading-snug text-muted">{s.label}</dt>
                <dd className="order-1 font-display text-4xl font-semibold text-brand-700 sm:text-[2.6rem]">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
