import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
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
import "./staffing-fms.css";

export const metadata: Metadata = {
  title: "Staffing & FMS Facility Management Services",
  description:
    "IT staffing and Facility Management Services (FMS) from CoreGenix — skilled engineers, helpdesk and managed facility upkeep for offices, data centers and enterprises.",
  keywords: [
    "IT staffing services India",
    "facility management services Mumbai",
    "FMS services",
    "IT manpower outsourcing",
    "managed facility services",
  ],
  alternates: { canonical: "/staffing-fms-facility-management" },
  openGraph: {
    title: "Staffing & FMS Facility Management Services — CoreGenix",
    description:
      "IT staffing and Facility Management Services (FMS) from CoreGenix — skilled engineers, helpdesk and managed facility upkeep for offices, data centers and enterprises.",
    url: `${SITE.url}/staffing-fms-facility-management`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Staffing & FMS Facility Management Services — CoreGenix",
    description:
      "IT staffing and Facility Management Services (FMS) from CoreGenix — skilled engineers, helpdesk and managed facility upkeep.",
  },
};

const heroStats = [
  { value: "18+", label: "Years of Experience" },
  { value: "120+", label: "Engineers Deployed" },
  { value: "55+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const offerings = [
  {
    icon: UserIcon,
    title: "IT Staffing Services",
    desc: "Skilled engineers and IT professionals deployed on-site or remote — for short-term projects, long-term support or permanent hiring needs.",
  },
  {
    icon: ServerIcon,
    title: "Facility Management Services (FMS)",
    desc: "End-to-end upkeep of your office and IT facilities — power, cooling, cabling, safety and infrastructure checks on a managed schedule.",
  },
  {
    icon: ActivityIcon,
    title: "Helpdesk & End-User Support",
    desc: "A single point of contact for all IT and facility issues — incident logging, tracking, escalation and real-time user communication.",
  },
  {
    icon: LayersIcon,
    title: "Managed Asset & Vendor Coordination",
    desc: "We track your assets, coordinate with vendors, monitor SLAs and manage inventories so everything you rely on is accounted for.",
  },
  {
    icon: ShieldIcon,
    title: "Compliance & Audit-Ready Records",
    desc: "Documented maintenance logs, staffing records and facility reports you can present to management and auditors with confidence.",
  },
  {
    icon: DatabaseIcon,
    title: "Backup, DR & Business Continuity",
    desc: "Backup strategy, monitoring, integrity verification and disaster recovery planning so your business never stops.",
  },
];

const staffingModels = [
  { title: "On-Site Engineers", desc: "Dedicated IT and facility engineers stationed at your premises, aligned to your working hours." },
  { title: "Remote / Hybrid Staffing", desc: "Cost-effective remote support combined with periodic on-site visits — the right mix for your budget." },
  { title: "Project-Based Staffing", desc: "Skilled professionals for migrations, rollouts, audits and short-term initiatives — scaled up or down as needed." },
  { title: "Managed FMS Teams", desc: "A full facility management team that owns maintenance, housekeeping coordination and infrastructure health end to end." },
];

const industries = [
  { title: "Government / PSU", desc: "On-site staffing and facility upkeep for secure, compliant environments." },
  { title: "Banking & Finance", desc: "24/7 staffing, facility monitoring and compliance-ready maintenance." },
  { title: "Manufacturing", desc: "Facility engineers and FMS for plants, offices and control rooms." },
  { title: "IT / Technology", desc: "Flexible IT staffing and full facility management for tech offices." },
  { title: "Healthcare", desc: "Reliable staffing, backup and facility continuity for critical operations." },
];

const faqs = [
  { q: "What does Staffing & FMS Facility Management include?", a: "It combines IT and facility staffing — on-site engineers, helpdesk and support staff — with Facility Management Services (FMS) covering power, cooling, cabling and infrastructure upkeep on a managed schedule." },
  { q: "What is the difference between staffing and FMS?", a: "Staffing provides the skilled people you need (on-site, remote or project-based), while FMS manages the facility itself — maintenance, health checks and infrastructure operations. CoreGenix delivers both as one managed engagement." },
  { q: "Can you staff for short-term projects?", a: "Yes. We scale engineering teams up or down for migrations, rollouts, audits and other time-bound initiatives, with the same quality as long-term deployments." },
  { q: "Do you provide services across India?", a: "Yes! CoreGenix delivers staffing and FMS in Mumbai, Delhi, Bangalore and across India with PAN-India operations." },
  { q: "What is your uptime guarantee?", a: "We back our services with a 99.9% uptime guarantee and proactive monitoring to prevent issues before they occur." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Staffing & FMS Facility Management Services",
  description:
    "IT staffing and Facility Management Services (FMS) from CoreGenix — skilled engineers, helpdesk and managed facility upkeep for offices, data centers and enterprises.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: `${SITE.url}/images/coregenix/logo.png` },
  areaServed: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Mumbai, Delhi, Bangalore", addressCountry: "India" } },
  url: `${SITE.url}/staffing-fms-facility-management`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Staffing & FMS Facility Management", item: `${SITE.url}/staffing-fms-facility-management` },
  ],
};

export default function StaffingFmsPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="section sf-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-2" aria-hidden="true" />
          <div className="container sf-hero-grid">
            <div className="sf-hero-content">
              <Reveal as="span" className="eyebrow" delay={1}>
                Staffing & FMS Facility Management
              </Reveal>
              <Reveal delay={2}>
                <h1 className="section-title sf-hero-title">
                  Skilled People, Managed Facilities, <span className="grad">One Partner</span>
                </h1>
              </Reveal>
              <Reveal as="p" className="sf-hero-desc" delay={3}>
                Keep your workforce productive and your infrastructure healthy. CoreGenix combines IT and
                facility staffing with comprehensive Facility Management Services (FMS) — so your people,
                offices and technology run without interruption.
              </Reveal>
              <Reveal as="div" className="sf-hero-actions" delay={4}>
                <Link href="/contact" className="btn btn-grad">
                  Get Free Consultation
                  <ArrowRightIcon />
                </Link>
                <Link href="/services/amc" className="btn btn-hero-secondary">
                  Explore Maintenance Services
                </Link>
              </Reveal>
            </div>
            <Reveal className="sf-hero-media" delay={3}>
              <div className="sf-hero-img">
                <Image
                  src="/images/coregenix/service-2.jpg"
                  alt="Staffing and FMS Facility Management services"
                  width={900}
                  height={600}
                  className="main-img"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="sf-stats" aria-label="Staffing & FMS by the numbers">
          <div className="container">
            <div className="sf-stats-grid">
              {heroStats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="sf-stat">
                    <span className="sf-stat-value">{stat.value}</span>
                    <span className="sf-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section sf-problem">
          <div className="container">
            <SectionHeading
              center
              eyebrow="The Problem"
              title={
                <>
                  Hiring and Facilities Keep You <span className="grad">Away From Core Work</span>
                </>
              }
              desc="Recruiting skilled IT staff and keeping facilities running eats time, budget and focus. When people or infrastructure fail, your business feels it."
            />
            <div className="sf-problem-grid">
              {[
                "Hard to find and retain skilled engineers",
                "Facility failures that disrupt daily operations",
                "High cost of emergency fixes and ad-hoc hiring",
                "No single partner accountable for people + facilities",
                "Compliance and documentation gaps",
                "Constantly firefighting instead of growing",
              ].map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="sf-check-item">
                    <span className="ce-check">
                      <CheckIcon />
                    </span>
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="sf-problem-outro" delay={3}>
              Think of Staffing & FMS as one accountable partner for your people and your premises — skilled
              staff when you need them, and facilities that just work.
            </Reveal>
          </div>
        </section>

        <section className="section sf-offerings section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow="What We Offer"
              title={
                <>
                  Complete Staffing & Facility <span className="grad">Management Portfolio</span>
                </>
              }
              desc="From skilled engineering teams to end-to-end facility upkeep — everything under one roof."
            />
            <div className="sf-offering-grid">
              {offerings.map((o, i) => (
                <Reveal key={o.title} delay={(i % 3) + 1}>
                  <div className="sf-offering-card">
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

        <section className="section sf-models">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Staffing Models"
              title={
                <>
                  Flexible Engagement <span className="grad">For Every Need</span>
                </>
              }
              desc="Choose the model that fits — dedicated, hybrid, project-based or fully managed."
            />
            <div className="wwp-grid sf-models-grid">
              {staffingModels.map((m, i) => (
                <Reveal key={m.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card sf-model-card">
                    <div className="wwp-card-inner">
                      <h3>{m.title}</h3>
                      <p>{m.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section sf-industries">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Industries We Serve"
              title={
                <>
                  Staffing & FMS Solutions for <span className="grad">Every Sector</span>
                </>
              }
            />
            <div className="wwp-grid sf-industries-grid">
              {industries.map((ind, i) => (
                <Reveal key={ind.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card sf-industry-card">
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

        <section className="section sf-faq">
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
            <div className="sf-faq-list">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <div className="sf-faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
