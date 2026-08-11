"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { QuoteIcon } from "./Icons";

const testimonials = [
  {
    text: "Services at CGCE are excellent, and they perfectly aligned with us for Cloud and software licenses. The renewal process was smooth, and they always adhered to timelines. We had a hassle-free and pleasant experience. Highly recommend CGCE for all IT needs!",
    name: "Yashwant",
    role: "Head IT",
    avatar: "/images/coregenix/yashwant.jpg",
  },
  {
    text: "CGCE is a game-changer! Their digital transformation services exceeded our expectations with impeccable service, adhering to timelines without any hassle. Their proactive response to challenges proved their commitment to customer satisfaction. From start to finish, CGCE proved to be the ultimate one-stop shop for all our IT needs. We're thrilled with the results and highly recommend their services to all businesses seeking reliable IT solutions.",
    name: "Mahindra & Mahindra",
    role: "Verified Client",
    avatar: "/images/coregenix/mahindra.png",
    isLogo: true,
  },
  {
    text: "CGCE, the IT company we recently collaborated with to purchase few firewall. Their service was truly outstanding, from start to finish. The team demonstrated remarkable professionalism and a keen understanding of our needs, resulting in a seamless and hassle-free process. What impressed us most was their adherence to timelines– they delivered the firewall promptly. Moreover their proactive response to potential issues showcased their commitment to customer satisfaction. We couldn't be happier with CGCE's expertise and dedication. They are definitely our go-to IT solution provider!",
    name: "Manish Mehta",
    role: "Head IT (India)",
    avatar: "/images/coregenix/manish.png",
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
          desc="Trusted by businesses for reliable, secure, and scalable IT solutions."
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
                  <span className="tst-card-deco" aria-hidden="true">
                    &ldquo;
                  </span>
                  <span className="tst-quote">
                    <QuoteIcon />
                  </span>
                  <p className="tst-text">{t.text}</p>
                  <div className="tst-person">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={t.isLogo ? 64 : 58}
                      height={t.isLogo ? 44 : 58}
                      className={t.isLogo ? "tst-logo" : "tst-avatar"}
                    />
                    <span className="tst-id">
                      <span className="tst-name">{t.name}</span>
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
