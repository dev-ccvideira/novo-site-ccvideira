"use client";

import type { ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/utils";

type AnimatedSectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const offsets = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: ""
};

export function AnimatedSection({
  as: Tag = "section",
  children,
  className,
  delay = 0,
  direction = "up"
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cx(
        "transform-gpu transition-all duration-700 ease-out",
        visible ? "translate-x-0 translate-y-0 opacity-100" : `${offsets[direction]} opacity-0`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
