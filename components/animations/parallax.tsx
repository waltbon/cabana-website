"use client";

import { useRef, ReactNode } from "react";
import { m, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  /** Content that will have parallax effect (e.g., background image) */
  children: ReactNode;
  /** Static content that won't move (e.g., text, buttons) */
  staticContent?: ReactNode;
  /** How much the element moves relative to scroll (default: 30) */
  intensity?: number;
  /** Direction of parallax movement */
  direction?: "up" | "down";
  /** CSS classes for the outer wrapper */
  className?: string;
  /** CSS classes for the parallax-animated element */
  parallaxClassName?: string;
}

export function Parallax({
  children,
  staticContent,
  intensity = 30,
  direction = "down",
  className,
  parallaxClassName,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yValue = direction === "down" ? `${intensity}%` : `-${intensity}%`;
  const y = useTransform(scrollYProgress, [0, 1], ["0%", yValue]);

  return (
    <div ref={ref} className={className}>
      <m.div className={parallaxClassName} style={{ y }}>
        {children}
      </m.div>
      {staticContent}
    </div>
  );
}
