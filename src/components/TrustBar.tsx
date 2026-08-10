"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 55, suffix: "+", label: "Client Satisfaction" },
  { value: 120, suffix: "+", label: "Projects" },
  { value: 18, suffix: "+", label: "Yrs of Experience" },
];

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
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
  }, [start, target, duration]);

  return display;
}

function MetricCard({ metric, start, delay }: { metric: Metric; start: boolean; delay: number }) {
  const value = useCountUp(metric.value, start);
  return (
    <Reveal className="trust-metric" delay={delay}>
      <div className="trust-num">
        {value.toLocaleString()}
        <span className="trust-suffix">{metric.suffix}</span>
      </div>
      <div className="trust-label">{metric.label}</div>
    </Reveal>
  );
}

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-bar" ref={sectionRef} aria-label="CoreGenix by the numbers">
      <div className="container">
        <div className="trust-metrics">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} start={started} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
