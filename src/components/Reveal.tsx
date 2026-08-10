"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type RevealAnimation = "up" | "right" | "left" | "zoom" | "scale" | "flip";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span" | "h2" | "h3" | "p";
  animation?: RevealAnimation;
}

const ANIMATION_NAMES: Record<RevealAnimation, string> = {
  up: "wowFadeInUp",
  right: "wowFadeInRight",
  left: "wowFadeInLeft",
  zoom: "wowZoomInSmall",
  scale: "wowScaleIn",
  flip: "wowFlipIn",
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  animation = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const show = () => setVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const delayMs = delay * 150;
  const name = ANIMATION_NAMES[animation];

  return (
    <Tag
      ref={ref as never}
      className={`wow-element ${visible ? "is-visible" : ""} ${className}`}
      data-wow-delay={`${delayMs}ms`}
      style={
        {
          visibility: visible ? "visible" : "hidden",
          animationName: visible ? name : undefined,
          animationDelay: `${delayMs}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
