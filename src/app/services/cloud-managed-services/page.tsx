import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import "../[slug]/backup-recovery.css";
import "../[slug]/service-landing.css";

export const metadata: Metadata = {
  title: "Cloud Managed Services India | Strategy, Migration & Management | CoreGenix",
  description:
    "Strategy, migration, and ongoing management of your cloud environment — public, private, and hybrid — with cost control and security built in. CoreGenix covers the full cloud lifecycle.",
  keywords: [
    "cloud managed services India",
    "cloud strategy services",
    "cloud infrastructure management",
    "cloud migration services Mumbai",
    "hybrid cloud management",
  ],
  alternates: { canonical: "/services/cloud-managed-services" },
  openGraph: {
    title: "Cloud Managed Services — CoreGenix",
    description:
      "Cloud Strategy, Cloud Infrastructure Management and Backup & Recovery services from CoreGenix.",
    url: `${SITE.url}/services/cloud-managed-services`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Managed Services — CoreGenix",
    description: "Cloud strategy, management and backup services from CoreGenix.",
  },
};

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "119+", label: "Projects delivered" },
  { value: "75+", label: "Happy clients" },
  { value: "24×7", label: "Pan-India support" },
];

const lifecycle = [
  { stage: "Plan", title: "Cloud Strategy", desc: "Assess readiness, choose the right cloud, and build a phased migration roadmap before anything moves.", href: "/services/cloud-strategy" },
  { stage: "Run", title: "Cloud Infrastructure Management", desc: "24x7 monitoring, security, and cost optimization for the environment you're already running.", href: "/services/cloud-infrastructure-management" },
  { stage: "Protect", title: "Backup & Recovery", desc: "Automated backup and fast recovery so data loss and ransomware never become business-ending events.", href: "/services/backup-recovery" },
];

const subservices = [
  {
    stage: "Plan",
    title: "Cloud Strategy",
    desc: "A clear cloud roadmap aligned to your business goals — workload fit, migration planning, cost and risk assessment.",
    items: ["Cloud readiness assessment", "Migration roadmap & landing zones", "Cost & risk optimization"],
    href: "/services/cloud-strategy",
  },
  {
    stage: "Run",
    title: "Cloud Infrastructure Management",
    desc: "Ongoing management of cloud environments — provisioning, monitoring, patching, security, and optimization.",
    items: ["24/7 cloud monitoring", "Patch & configuration management", "Performance & cost optimization"],
    href: "/services/cloud-infrastructure-management",
  },
  {
    stage: "Protect",
    title: "Backup & Recovery",
    desc: "Automated, reliable backup and fast recovery for your critical data — on-premises and in the cloud.",
    items: ["Automated backup schedules", "Rapid restore & failover", "Backup security & compliance"],
    href: "/services/backup-recovery",
  },
];

const decisionData = [
  { situation: "Moving to the cloud for the first time", start: "Cloud Strategy" },
  { situation: "Planning a data center exit", start: "Cloud Strategy" },
  { situation: "Already on cloud but no one's managing it well", start: "Cloud Infrastructure Management" },
  { situation: "Want to know if you're overpaying for cloud", start: "Cloud Infrastructure Management" },
  { situation: "Need protection against data loss or ransomware", start: "Backup & Recovery" },
  { situation: "No tested disaster recovery plan in place", start: "Backup & Recovery" },
];

const industries = [
  { title: "BFSI", desc: "Compliant cloud strategy and management aligned to RBI and DPDPA norms." },
  { title: "Manufacturing", desc: "Managed cloud for ERP, plant systems, and connected operations." },
  { title: "Healthcare", desc: "Secure, backed-up cloud environments for patient and clinical data." },
  { title: "Retail & E-commerce", desc: "Elastic infrastructure management built for seasonal demand." },
  { title: "Government / PSU", desc: "Strategy and management aligned to data sovereignty requirements." },
];

const faqs = [
  { q: "What are cloud managed services?", a: "Cloud managed services cover the full cloud lifecycle — from Cloud Strategy (planning and migration), to Cloud Infrastructure Management (ongoing monitoring, security, and cost optimization), to Backup & Recovery (data protection and disaster recovery) — delivered as a single managed engagement." },
  { q: "What is the difference between cloud strategy and cloud infrastructure management?", a: "Cloud strategy is a one-time or periodic planning engagement that decides what moves to the cloud and how. Cloud infrastructure management is the ongoing, day-to-day operation of that cloud environment — monitoring, patching, security, and cost control — delivered continuously." },
  { q: "Do I need all three cloud managed services or can I choose one?", a: "You can engage CoreGenix for any single service — Cloud Strategy, Cloud Infrastructure Management, or Backup & Recovery — independently, or combine all three for full lifecycle coverage. Most businesses start with whichever matches their current cloud maturity stage." },
  { q: "What is included in cloud backup and recovery?", a: "CoreGenix's Backup & Recovery service includes automated backup scheduling for on-premises and cloud data, rapid restore and failover capability, and backup security and compliance controls to protect against data loss and ransomware." },
  { q: "Can CoreGenix manage multi-cloud and hybrid environments?", a: "Yes, CoreGenix provides cloud managed services across public cloud (Azure, AWS), private cloud, and hybrid environments, with a consistent approach to monitoring, security, and cost management regardless of platform mix." },
  { q: "How do I know which cloud managed service I need?", a: "If you haven't moved to the cloud yet, start with Cloud Strategy. If you're already on the cloud but it isn't actively managed, choose Cloud Infrastructure Management. If your priority is protecting against data loss, start with Backup & Recovery." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    { "@type": "ListItem", position: 3, name: "Cloud Managed Services", item: `${SITE.url}/services/cloud-managed-services` },
  ],
};

export default function CloudManagedServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        {/* Hero */}
        <section className="brr-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-2" aria-hidden="true" />
          <div className="container brr-hero-grid">
            <div className="brr-hero-content">
              <Reveal as="span" className="eyebrow" delay={1}>
                Services
              </Reveal>
              <Reveal delay={2}>
                <h1 className="section-title brr-hero-title">
                  Cloud managed services — <span className="grad">strategy, migration &amp; management</span>
                </h1>
              </Reveal>
              <Reveal as="p" className="brr-hero-desc" delay={3}>
                Strategy, migration, and ongoing management of your cloud environment — public, private, and hybrid — with cost control and security built in. CoreGenix covers the full cloud lifecycle under one accountable team.
              </Reveal>
              <Reveal as="div" className="brr-hero-actions" delay={4}>
                <Link href="/contact" className="btn btn-grad">
                  Get free consultation
                  <ArrowRightIcon />
                </Link>
                <Link href="/services" className="btn btn-hero-secondary">
                  View all services
                </Link>
              </Reveal>
            </div>
            <Reveal className="brr-hero-media" delay={3}>
              <div className="brr-hero-img">
                <Image
                  src="/images/coregenix/service-7.jpg"
                  alt="Cloud managed services"
                  width={900}
                  height={600}
                  className="main-img"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="brr-stats" aria-label="Cloud managed services by the numbers">
          <div className="container">
            <div className="brr-stats-grid">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="brr-stat">
                    <span className="brr-stat-value">{stat.value}</span>
                    <span className="brr-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Answer */}
        <section className="section brr-what">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Overview"
              title={
                <>
                  What are <span className="grad">cloud managed services?</span>
                </>
              }
              desc="Cloud managed services cover the full cloud lifecycle: Cloud Strategy for planning and migration, Cloud Infrastructure Management for ongoing monitoring, security, and cost optimization, and Backup & Recovery for data protection and disaster recovery."
            />
            <div className="brr-check-grid">
              {[
                "Cloud Strategy — planning & migration",
                "Cloud Infrastructure Management — ongoing operations",
                "Backup & Recovery — data protection & DR",
                "Public, private & hybrid cloud",
                "Cost control built in",
                "One accountable team",
              ].map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="brr-check-item">
                    <span className="ce-check">
                      <CheckIcon />
                    </span>
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Lifecycle */}
        <section className="section brr-deliver">
          <div className="container">
            <SectionHeading
              center
              eyebrow="The Lifecycle"
              title={
                <>
                  The cloud lifecycle <span className="grad">we manage</span>
                </>
              }
              desc="Every cloud environment moves through three stages — CoreGenix covers all of them, together or independently."
            />
            <div className="brr-deliver-grid">
              {lifecycle.map((item, i) => (
                <Reveal key={item.stage} delay={(i % 3) + 1}>
                  <div className="brr-deliver-card">
                    <span className="brr-deliver-num">{item.stage}</span>
                    <h3>{item.title}</h3>
                    <p className="brr-deliver-tag">{item.desc}</p>
                    <Link href={item.href} className="brr-deliver-link">
                      Learn more
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Subservices */}
        <section className="section brr-table-sec">
          <div className="container">
            <SectionHeading
              center
              eyebrow="What's Included"
              title={
                <>
                  A closer look at <span className="grad">each service</span>
                </>
              }
              desc="What CoreGenix delivers across strategy, management, and backup."
            />
            <div className="brr-table-wrap">
              <table className="brr-table">
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Service</th>
                    <th>What&apos;s included</th>
                  </tr>
                </thead>
                <tbody>
                  {subservices.map((s) => (
                    <tr key={s.title}>
                      <td><strong>{s.stage}</strong></td>
                      <td><strong>{s.title}</strong></td>
                      <td>
                        {s.items.map((item) => (
                          <span key={item} className="brr-cell-item">{item}</span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Decision table */}
        <section className="section brr-table-sec">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Find Your Fit"
              title={
                <>
                  Which cloud managed service <span className="grad">do you need?</span>
                </>
              }
              desc="A quick way to figure out where to start, based on your current situation."
            />
            <div className="brr-table-wrap">
              <table className="brr-table">
                <thead>
                  <tr>
                    <th>Your situation</th>
                    <th>Start with</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionData.map((row) => (
                    <tr key={row.situation}>
                      <td>{row.situation}</td>
                      <td><strong>{row.start}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section brr-audience">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Who Needs It"
              title={
                <>
                  Cloud managed services <span className="grad">for every sector</span>
                </>
              }
              desc="The right mix of strategy, management, and backup for the compliance and uptime needs of your industry."
            />
            <div className="wwp-grid">
              {industries.map((ind, i) => (
                <Reveal key={ind.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card brr-audience-card">
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

        {/* FAQ */}
        <section className="section brr-faq">
          <div className="container">
            <SectionHeading
              center
              eyebrow="FAQ"
              title={
                <>
                  Frequently asked <span className="grad">questions</span>
                </>
              }
              desc="Straight answers about how our cloud managed services fit together."
            />
            <div className="brr-faq-list">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <div className="brr-faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaSection title="Not sure which solution fits your business?" />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}