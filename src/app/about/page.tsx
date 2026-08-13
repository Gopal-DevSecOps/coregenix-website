import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import Leadership from "@/components/Leadership";
import SectionHeading from "@/components/SectionHeading";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CoreGenix is a trusted IT infrastructure and cyber security partner with 18+ years of experience delivering tailored technology solutions.",
  keywords: [
    "about CoreGenix",
    "IT company Mumbai",
    "cyber security company India",
    "IT infrastructure partner",
    "managed IT services company",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — CoreGenix",
    description:
      "CoreGenix is a trusted IT infrastructure and cyber security partner with 18+ years of experience.",
    url: `${SITE.url}/about`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — CoreGenix",
    description:
      "CoreGenix is a trusted IT infrastructure and cyber security partner with 18+ years of experience.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/coregenix/logo.png`,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE.url}/about` },
  ],
};

const pillars = [
  {
    title: "Our Mission",
    desc: "To empower businesses with secure, scalable and future-ready IT infrastructure through honest consultation, world-class engineering and relentless support.",
  },
  {
    title: "Our Vision",
    desc: "To be the most trusted technology partner of growing enterprises — recognized for reliability, innovation and an unshakable commitment to client success.",
  },
  {
    title: "Our Values",
    desc: "Integrity, ownership and excellence guide everything we do. We treat every client challenge as our own and every deliverable as a promise kept.",
  },
];

const stats = [
  { num: "18+", label: "Years of Experience" },
  { num: "120+", label: "Projects Delivered" },
  { num: "55+", label: "Happy Clients" },
  { num: "24/7", label: "Support Availability" },
];

const journey = [
  { period: "2007", title: "The Foundation", desc: "CoreGenix was founded with a simple belief — technology should solve business problems, not create them." },
  { period: "2012", title: "Building Expertise", desc: "Expanded into data center, cloud and managed support services with a growing team of specialists." },
  { period: "2018", title: "Cyber Security Focus", desc: "Launched dedicated IT & OT cyber security practice with audits, SOC and incident response capabilities." },
  { period: "Today", title: "A Trusted Partner", desc: "Serving 55+ clients across industries with end-to-end IT infrastructure, cloud and security solutions." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              About CoreGenix
            </Reveal>
            <h1 className="page-hero-title about-page-hero-title">
              Your Trusted Technology Partner <span className="grad">Since 2007</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              We are a team of skilled experts dedicated to delivering tailored IT solutions that help
              our clients meet their business goals — from IT infrastructure and cloud to cyber security.
            </Reveal>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <Reveal className="about-media">
              <Image
                src="/images/coregenix/Solving Business Problems With Technical Solutions.png"
                alt="Solving business problems with technical solutions"
                width={2752}
                height={1536}
                className="main-img"
              />
              <div className="float-card">
                <span className="num">18+</span>
                <span className="txt">
                  Years of
                  <br />
                  your trust
                </span>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                title={
                  <>
                    18+ Years of Your Trust & <span className="grad">Successful IT Services</span>
                  </>
                }
                lead="We provide IT Infrastructure & Cyber Security Services for your Business"
                desc="We are a team of skilled experts dedicated to delivering tailored IT solutions to support our clients in meeting their business goals. At CoreGenix, we pride ourselves on our commitment to resolving intricate technological hurdles through thorough planning and consultancy services. Rest assured, every project we undertake strictly adheres to the relevant standards and specifications."
              />
              <ul className="about-list">
                {[
                  "Dedicated consultation to understand your business needs",
                  "We turn challenges into opportunities",
                  "Expert team with 18+ years of industry experience",
                ].map((feature, i) => (
                  <Reveal as="li" key={feature} delay={i + 1}>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    {feature}
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={3}>
                <a href="#contact" className="btn btn-grad">
                  Request Consultation
                  <ArrowRightIcon />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section about-stats">
          <div className="container">
            <div className="about-stats-grid">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i + 1}>
                  <div className="about-stat">
                    <span className="about-stat-num">{stat.num}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-pillars section-dark">
          <div className="container">
            <Reveal as="span" className="eyebrow" delay={1}>
              What Drives Us
            </Reveal>
            <Reveal as="h2" className="about-section-title" delay={2}>
              Mission, Vision & <span className="grad">Values</span>
            </Reveal>
            <div className="about-pillars-grid">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i + 2}>
                  <div className="pillar-card">
                    <span className="pillar-num">0{i + 1}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-journey">
          <div className="container">
            <Reveal as="span" className="eyebrow" delay={1}>
              Our Journey
            </Reveal>
            <Reveal as="h2" className="about-section-title" delay={2}>
              The Road We&apos;ve <span className="grad">Walked</span>
            </Reveal>
            <div className="journey-grid">
              {journey.map((step, i) => (
                <Reveal key={step.period} delay={i + 1}>
                  <div className="journey-card">
                    <span className="journey-dot" />
                    <span className="journey-period">{step.period}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Leadership />

        <section className="section about-cta">
          <div className="container">
            <Reveal>
              <div className="about-cta-box">
                <div>
                  <h2>Let&apos;s solve your next technology challenge together.</h2>
                  <p>Talk to our experts and get a free consultation for your business.</p>
                </div>
                <Link href="/contact" className="btn btn-light">
                  Get Free Consultation
                  <ArrowRightIcon />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
