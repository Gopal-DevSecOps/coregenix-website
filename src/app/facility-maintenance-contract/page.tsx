import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import {
  ServerIcon,
  ShieldIcon,
  DatabaseIcon,
  ActivityIcon,
  LayersIcon,
  UserIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./fmc-landing.css";

export const metadata: Metadata = {
  title: "Facility Maintenance Contract (FMC) Services — IT Infrastructure AMC & Support — CoreGenix",
  description:
    "Get comprehensive Facility Maintenance Contract (FMC) services for your IT infrastructure. Annual Maintenance Contracts, 24/7 support, and proactive monitoring. 18+ years experience. Get started!",
  alternates: { canonical: "/facility-maintenance-contract" },
  openGraph: {
    title: "Facility Maintenance Contract (FMC) Services — IT Infrastructure AMC & Support — CoreGenix",
    description:
      "Get comprehensive Facility Maintenance Contract (FMC) services for your IT infrastructure. Annual Maintenance Contracts, 24/7 support, and proactive monitoring. 18+ years experience. Get started!",
    url: `${SITE.url}/facility-maintenance-contract`,
    type: "website",
  },
};

const heroStats = [
  { value: "18+", label: "Years of Experience" },
  { value: "55+", label: "Clients Served" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const offerings = [
  {
    icon: ShieldIcon,
    title: "Annual Maintenance Contract (AMC)",
    desc: "Comprehensive or non-comprehensive AMC covering desktops, laptops, servers, printers and routers with rapid response times and 24/7 onsite & remote support.",
  },
  {
    icon: ServerIcon,
    title: "IT Infrastructure Management",
    desc: "End-to-end management of end-user computing, servers, storage, network, security infrastructure and communication systems.",
  },
  {
    icon: UserIcon,
    title: "Helpdesk & Support Services",
    desc: "A single point of contact for all IT issues — incident logging, tracking, escalation management and real-time user communication.",
  },
  {
    icon: ActivityIcon,
    title: "Vendor Management",
    desc: "We coordinate with your vendors, track SLAs, manage inventories and monitor performance so vendors deliver what they promise.",
  },
  {
    icon: LayersIcon,
    title: "IT Asset Management",
    desc: "Complete lifecycle tracking from procurement to disposal — warranties, configurations and maintenance history in one place.",
  },
  {
    icon: DatabaseIcon,
    title: "Disaster Recovery & Business Continuity",
    desc: "Backup strategy, monitoring, integrity verification, event log monitoring and DR planning so your business never stops.",
  },
];

const amcTypes = [
  { title: "Comprehensive AMC", desc: "Desktops, laptops, servers, printers, routers — full coverage with rapid response time." },
  { title: "Non-Comprehensive AMC", desc: "Select equipment with a defined scope — cost-effective for low-risk assets." },
  { title: "24/7 Support", desc: "Onsite and remote support — quick issue resolution anytime." },
  { title: "Proactive Maintenance", desc: "Security patching and performance monitoring — prevent issues before they occur." },
];

const industries = [
  { title: "Government / PSU", desc: "Comprehensive AMC and IT infrastructure maintenance." },
  { title: "Banking & Finance", desc: "Server administration, network security and compliance support." },
  { title: "Manufacturing", desc: "End-user computing, network management and disaster recovery." },
  { title: "IT / Technology", desc: "Complete IT infrastructure management." },
  { title: "Healthcare", desc: "Data backup, disaster recovery and compliance support." },
];

const testimonials = [
  {
    text: "Services at CGCE are excellent, and they perfectly aligned with us for Cloud and software licenses. The renewal process was smooth, and they always adhered to timelines. We had a hassle-free and pleasant experience. Highly recommend CGCE for all IT needs!",
    name: "Yashwant",
    role: "Head IT",
  },
  {
    text: "CGCE is a game-changer! Their digital transformation services exceeded our expectations with impeccable service, adhering to timelines without any hassle.",
    name: "Mahindra & Mahindra",
    role: "Verified Client",
  },
];

const faqs = [
  { q: "What is a Facility Maintenance Contract (FMC)?", a: "An FMC is a comprehensive agreement to manage and maintain your IT infrastructure proactively — covering everything from desktops and servers to networks and security devices for a predictable monthly fee." },
  { q: "How is FMC different from AMC?", a: "An AMC (Annual Maintenance Contract) is a key component of an FMC. The FMC is the broader program covering AMC, infrastructure management, helpdesk, vendor management, asset management and disaster recovery." },
  { q: "What does a comprehensive AMC cover?", a: "A comprehensive AMC covers desktops, laptops, servers, printers and routers with rapid response times, while a non-comprehensive AMC covers select equipment with a defined scope." },
  { q: "Do you provide support across India?", a: "Yes! CoreGenix delivers FMC and AMC services in Mumbai, Delhi, Bangalore and across India with PAN-India operations." },
  { q: "What is your uptime guarantee?", a: "We back our services with a 99.9% uptime guarantee and proactive monitoring to prevent issues before they occur." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Facility Maintenance Contract (FMC) Services",
  description:
    "Facility Maintenance Contract and Annual Maintenance Contract services for IT infrastructure — AMC, 24/7 support, proactive monitoring, asset management and disaster recovery.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: `${SITE.url}/images/coregenix/logo.png` },
  areaServed: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Mumbai, Delhi, Bangalore", addressCountry: "India" } },
  url: `${SITE.url}/facility-maintenance-contract`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Facility Maintenance Contract", item: `${SITE.url}/facility-maintenance-contract` },
  ],
};

export default function FmcLandingPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="section fmc-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-2" aria-hidden="true" />
          <div className="container fmc-hero-grid">
            <div className="fmc-hero-content">
              <Reveal as="span" className="eyebrow" delay={1}>
                Facility Maintenance Contract
              </Reveal>
              <Reveal delay={2}>
                <h1 className="section-title fmc-hero-title">
                  Your IT Infrastructure Deserves More Than <span className="grad">Break-Fix Support</span>
                </h1>
              </Reveal>
              <Reveal as="p" className="fmc-hero-desc" delay={3}>
                In 2026, the definition of a facility has expanded beyond physical walls to include the digital
                backbone that keeps a global workforce connected. That&apos;s why we offer comprehensive Facility
                Maintenance Contracts (FMC) that keep your IT running like clockwork.
              </Reveal>
              <Reveal as="div" className="fmc-hero-actions" delay={4}>
                <Link href="/contact" className="btn btn-grad">
                  Get Free Consultation
                  <ArrowRightIcon />
                </Link>
                <Link href="/services/amc" className="btn btn-hero-secondary">
                  Explore AMC Services
                </Link>
              </Reveal>
            </div>
            <Reveal className="fmc-hero-media" delay={3}>
              <div className="fmc-hero-img">
                <Image
                  src="/images/coregenix/service-2.jpg"
                  alt="Facility Maintenance Contract services"
                  width={900}
                  height={600}
                  className="main-img"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="fmc-stats" aria-label="FMC by the numbers">
          <div className="container">
            <div className="fmc-stats-grid">
              {heroStats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="fmc-stat">
                    <span className="fmc-stat-value">{stat.value}</span>
                    <span className="fmc-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section fmc-problem">
          <div className="container">
            <SectionHeading
              center
              eyebrow="The Problem"
              title={
                <>
                  Reactive IT Support Is <span className="grad">Outdated</span>
                </>
              }
              desc="Waiting for something to break before fixing it costs you money, productivity, and peace of mind."
            />
            <div className="fmc-problem-grid">
              {[
                "Unexpected downtime that disrupts operations",
                "High costs from emergency repairs",
                "Poor visibility into your IT assets",
                "Vendor coordination headaches",
                "Compliance risks from unmanaged systems",
                "Constantly fighting fires instead of growing your business",
              ].map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="fmc-check-item">
                    <span className="ce-check">
                      <CheckIcon />
                    </span>
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="fmc-problem-outro" delay={3}>
              Think of an FMC as a health insurance policy for your IT infrastructure — you pay a predictable
              monthly fee, and we ensure everything stays healthy and operational.
            </Reveal>
          </div>
        </section>

        <section className="section fmc-offerings section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow="What We Offer"
              title={
                <>
                  Complete IT Facility <span className="grad">Maintenance Portfolio</span>
                </>
              }
              desc="From Annual Maintenance Contracts to disaster recovery — everything your infrastructure needs under one roof."
            />
            <div className="fmc-offering-grid">
              {offerings.map((o, i) => (
                <Reveal key={o.title} delay={(i % 3) + 1}>
                  <div className="fmc-offering-card">
                    <span className="icon-box">
                      <o.icon />
                    </span>
                    <h3>{o.title}</h3>
                    <p>{o.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section fmc-amc">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Annual Maintenance Contract"
              title={
                <>
                  Complete Coverage for Your <span className="grad">IT Assets</span>
                </>
              }
              desc="AMCs are an inescapable reality in large organizations — losing time on maintenance is a major actual loss of money."
            />
            <div className="wwp-grid fmc-amc-grid">
              {amcTypes.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card fmc-amc-card">
                    <div className="wwp-card-inner">
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section fmc-industries">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Industries We Serve"
              title={
                <>
                  FMC Solutions for <span className="grad">Every Sector</span>
                </>
              }
            />
            <div className="wwp-grid fmc-industries-grid">
              {industries.map((ind, i) => (
                <Reveal key={ind.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card fmc-industry-card">
                    <div className="wwp-card-inner">
                      <h3>{ind.title}</h3>
                      <p>{ind.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section fmc-testimonials section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Client Stories"
              title={
                <>
                  What Our <span className="grad">Clients Say</span>
                </>
              }
            />
            <div className="fmc-testimonial-grid">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i + 1}>
                  <div className="fmc-testimonial-card">
                    <p>{t.text}</p>
                    <span className="fmc-testimonial-name">{t.name}</span>
                    <span className="fmc-testimonial-role">{t.role}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section fmc-faq">
          <div className="container">
            <SectionHeading
              center
              eyebrow="FAQ"
              title={
                <>
                  Frequently Asked <span className="grad">Questions</span>
                </>
              }
            />
            <div className="fmc-faq-list">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <div className="fmc-faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
