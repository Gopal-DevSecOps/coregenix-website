"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

interface Stat {
  value: number;
  label: string;
}

const stats: Stat[] = [
  { value: 120, label: "Customers" },
  { value: 10, label: "Awards & Certifications" },
  { value: 75, label: "Trusted Clients" },
  { value: 18, label: "Years Of Experience" },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return active ? display : 0;
}

function StatCard({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const value = useCountUp(stat.value, active);
  return (
    <Reveal delay={delay}>
      <div className="about-stat">
        <span className="about-stat-num">{value}+</span>
        <span className="about-stat-label">{stat.label}</span>
      </div>
    </Reveal>
  );
}

export default function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-stats" ref={sectionRef} aria-label="CoreGenix achievements">
      <div className="container">
        <div className="about-stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={inView} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
