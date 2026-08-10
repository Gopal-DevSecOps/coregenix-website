"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type WowAnimation = "up" | "right" | "left" | "zoom" | "scale" | "flip";

interface WowProps {
  children: ReactNode;
  animation?: WowAnimation;
  delay?: number;
  as?: ElementType;
  className?: string;
}

const ANIMATION_NAMES: Record<WowAnimation, string> = {
  up: "wowFadeInUp",
  right: "wowFadeInRight",
  left: "wowFadeInLeft",
  zoom: "wowZoomInSmall",
  scale: "wowScaleIn",
  flip: "wowFlipIn",
};

export default function Wow({
  children,
  animation = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}: WowProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"hidden" | "show">("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      const t = setTimeout(() => setState("show"), 0);
      return () => clearTimeout(t);
    }

    const show = () => setState("show");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const name = ANIMATION_NAMES[animation];
  const Comp = Tag;

  return (
    <Comp
      ref={ref as never}
      className={`wow-element ${className}`}
      data-wow-delay={`${delay}ms`}
      style={
        {
          visibility: state === "show" ? "visible" : "hidden",
          animationName: state === "show" ? name : undefined,
          animationDelay: `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Comp>
  );
}
