"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  // reducedMotion="user" respects the OS-level prefers-reduced-motion setting
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
