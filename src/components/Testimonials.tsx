"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { QuoteIcon } from "./Icons";

const testimonials = [
  {
    text: "The CoreGenix team completely transformed our IT infrastructure. Their support and professionalism are outstanding — and they directly contributed to our business growth.",
    name: "Manish Mehta",
    role: "Client",
    avatar: "/images/coregenix/testi-1.png",
  },
  {
    text: "For cyber security solutions, you can't find a better partner than CoreGenix. They fully secured our data and gave us peace of mind with real-time monitoring.",
    name: "Yashwant",
    role: "Client",
    avatar: "/images/coregenix/testi-2.jpg",
  },
  {
    text: "Cloud migration and backup solutions went very smoothly. Their team is always ready to resolve any issue quickly. Highly recommended!",
    name: "Client",
    role: "Satisfied Customer",
    avatar: "/images/coregenix/testi-3.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              Hear It from Our <span className="grad">Happy Customers</span>
            </>
          }
        />

        <div className="tst-stars" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <div className="tst-wrapper">
          <div className="tst-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t) => (
              <div className="tst-slide" key={t.name}>
                <div className="tst-card">
                  <span className="tst-quote">
                    <QuoteIcon />
                  </span>
                  <p className="tst-text">{t.text}</p>
                  <div className="tst-person">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={58}
                      height={58}
                      className="tst-avatar"
                    />
                    <span>
                      <span className="tst-name">{t.name}</span>
                      <br />
                      <span className="tst-role">{t.role}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tst-nav">
            <button className="tst-arrow" aria-label="Previous" onClick={() => go(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
            </button>
            <div className="tst-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`tst-dot ${i === index ? "active" : ""}`}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button className="tst-arrow" aria-label="Next" onClick={() => go(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
