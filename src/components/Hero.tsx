"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

interface Slide {
  bg: string;
  line1: string;
  line2: string;
  desc: string;
}

const SLIDE_DURATION = 7000;

const slides: Slide[] = [
  {
    bg: "/images/coregenix/hero-1.png",
    line1: "A Strategy that",
    line2: "Creates Secure Solutions",
    desc: "We are a team of Security professionals delivering IT & OT Security.",
  },
  {
    bg: "/images/coregenix/hero-2.png",
    line1: "Your vision will",
    line2: "become a reality!",
    desc: "Let's have a perfect game plan",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

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
            className={`hero-slide ${i === active ? "active" : ""}`}
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
                  {slide.line1} <span className="grad">{slide.line2}</span>
                </h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-grad hero-cta-primary">
                    Get Free Consultation
                    <ArrowRightIcon />
                  </Link>
                  <Link href="/services" className="btn btn-hero-secondary">
                    View Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="hero-slider-nav"
        role="tablist"
        aria-label="Hero slides"
        style={{ "--hero-duration": `${SLIDE_DURATION}ms` } as CSSProperties}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-bar ${i === active ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            <span className="hero-bar-fill" aria-hidden="true" />
          </button>
        ))}
      </div>

      <a href="#services" className="hero-scroll" aria-label="Scroll down to explore">
        <span className="mouse" aria-hidden="true">
          <span className="mouse-wheel" />
        </span>
        <span className="hero-scroll-label">Scroll</span>
      </a>
    </section>
  );
}
