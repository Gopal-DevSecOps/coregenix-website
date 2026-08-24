"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

interface Slide {
  bg: string;
  line1: string;
  line2: string;
  desc: string;
  actionLabel: string;
  actionHref: string;
}

const SLIDE_DURATION = 7000;
const SLIDE_TRANSITION = 1900;

const slides: Slide[] = [
  {
    bg: "/images/coregenix/hero-1.png",
    line1: "A Strategy that",
    line2: "Creates Secure Solutions",
    desc: "We are a team of Security professionals delivering IT & OT Security.",
    actionLabel: "View Solutions",
    actionHref: "/solutions",
  },
  {
    bg: "/images/coregenix/hero-2.png",
    line1: "Your vision will",
    line2: "become a reality!",
    desc: "Let's have a perfect game plan",
    actionLabel: "View Services",
    actionHref: "/services",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const activeRef = useRef(0);

  const goTo = useCallback((next: number) => {
    const target = ((next % slides.length) + slides.length) % slides.length;
    if (target === activeRef.current) return;
    setPrev(activeRef.current);
    activeRef.current = target;
    setActive(target);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(activeRef.current + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [goTo]);

  useEffect(() => {
    if (prev === null) return;
    const timer = setTimeout(() => setPrev(null), SLIDE_TRANSITION);
    return () => clearTimeout(timer);
  }, [prev]);

  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = viewport.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);
        const bgs = viewport.querySelectorAll<HTMLElement>(".hero-slide .bg");
        bgs.forEach((bg) => {
          bg.style.transform = `scale(1.06) translateY(${progress * 60}px)`;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-label="CoreGenix highlights">
      <link rel="preload" as="image" href={slides[0].bg} fetchPriority="high" />

      <div className="hero-floats" aria-hidden="true">
        <span className="float-shape float-shape-1" />
        <span className="float-shape float-shape-2" />
        <span className="float-shape float-shape-3" />
      </div>

      <div className="hero-viewport" ref={viewportRef}>
        {slides.map((slide, i) => (
          <div
            key={slide.bg}
            className={`hero-slide ${i === active ? "active" : ""} ${i === prev ? "prev" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${slides.length}`}
            aria-hidden={i !== active}
          >
            <div
              className="bg"
              style={{ backgroundImage: `url(${slide.bg})` }}
              role="img"
              aria-label={`${slide.line1} ${slide.line2}`}
            />

            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="hero-mask m1">
                    <span className="hero-line">{slide.line1}</span>
                  </span>
                  <span className="hero-mask m2">
                    <span className="hero-line grad">{slide.line2}</span>
                  </span>
                </h1>
                <div className="hero-mask m3">
                  <p className="hero-desc">{slide.desc}</p>
                </div>
                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-grad hero-cta-primary">
                    Get Free Consultation
                    <ArrowRightIcon />
                  </Link>
                  <Link href={slide.actionHref} className="btn btn-hero-secondary">
                    {slide.actionLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="hero-progress"
        aria-hidden="true"
        style={{ "--hero-duration": `${SLIDE_DURATION}ms` } as CSSProperties}
      >
        <span key={active} className="hero-progress-fill" />
      </div>

    </section>
  );
}
