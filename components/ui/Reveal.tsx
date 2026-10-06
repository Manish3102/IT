"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li";
};

/** Fade + slide-up on scroll. Motion is disabled automatically for prefers-reduced-motion (see Providers). */
export function Reveal({ delay = 0, y = 24, as = "div", children, ...rest }: Props) {
  const anim = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
  return as === "li" ? (
    <motion.li {...anim} {...rest}>
      {children}
    </motion.li>
  ) : (
    <motion.div {...anim} {...rest}>
      {children}
    </motion.div>
  );
}
