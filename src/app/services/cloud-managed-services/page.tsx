import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import "../services/[slug]/cloud-infra-mgmt.css";

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
        <section className="br-hero">
          <div className="container">
            <Reveal as="span" className="br-eyebrow" delay={1}>
              <span className="br-dot" />
              Services
            </Reveal>
            <Reveal delay={2}>
              <h1 className="br-hero-title">Cloud managed services — strategy, migration &amp; ongoing management</h1>
            </Reveal>
            <Reveal as="p" className="br-hero-desc" delay={3}>
              Strategy, migration, and ongoing management of your cloud environment — public, private, and hybrid — with cost control and security built in. CoreGenix covers the full cloud lifecycle under one accountable team.
            </Reveal>
            <Reveal as="div" className="br-hero-actions" delay={4}>
              <Link href="/contact" className="btn btn-grad">
                Get free consultation
                <ArrowRightIcon />
              </Link>
              <Link href="/services" className="btn btn-hero-secondary">
                View all services
              </Link>
            </Reveal>
            <div className="br-stat-bar">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="br-stat">
                    <span className="br-stat-num">{stat.value}</span>
                    <span className="br-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Answer Block */}
        <section className="br-answer">
          <div className="container br-answer-grid">
            <Reveal delay={1}>
              <h2>What are cloud managed services?</h2>
            </Reveal>
            <Reveal as="div" className="br-answer-copy" delay={2}>
              <p>Cloud managed services cover the full cloud lifecycle: Cloud Strategy for planning and migration, Cloud Infrastructure Management for ongoing monitoring, security, and cost optimization, and Backup &amp; Recovery for data protection and disaster recovery. CoreGenix delivers all three across public, private, and hybrid cloud environments for businesses across India.</p>
            </Reveal>
          </div>
        </section>

        {/* Cloud Lifecycle */}
        <section className="br-deliver">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>The cloud lifecycle we manage</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                Every cloud environment moves through three stages — CoreGenix covers all of them, together or independently.
              </Reveal>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 8 }}>
              {lifecycle.map((item, i) => (
                <Reveal key={item.stage} delay={(i % 3) + 1}>
                  <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border)", borderRadius: 12, padding: 28 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>{item.stage}</span>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "8px 0 12px" }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-soft)", margin: "0 0 16px", lineHeight: 1.6 }}>{item.desc}</p>
                    <Link href={item.href} style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
                      Learn more →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Subservices Detail */}
        <section className="br-answer">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>What&apos;s included in each service</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                A closer look at what CoreGenix delivers across strategy, management, and backup.
              </Reveal>
            </div>
            {subservices.map((s, i) => (
              <Reveal key={s.title} delay={1}>
                <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 32, padding: "28px 0", borderBottom: i < subservices.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>{s.stage}</span>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: "var(--navy)", margin: "4px 0 0" }}>{s.title}</h3>
                  </div>
                  <div>
                    <p style={{ fontSize: 15, color: "var(--text-soft)", margin: "0 0 12px", lineHeight: 1.6 }}>{s.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                      {s.items.map((item) => (
                        <li key={item} style={{ fontSize: 14, color: "var(--text-soft)", padding: "4px 0 4px 16px", position: "relative" as const }}>
                          <span style={{ position: "absolute", left: 0, top: 11, width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href={s.href} style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
                      Learn more about {s.title} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Decision Table */}
        <section className="br-rpo-rto">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>Which cloud managed service do you need?</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                A quick way to figure out where to start, based on your current situation.
              </Reveal>
            </div>
            <Reveal delay={3}>
              <div className="br-table-wrap">
                <table className="br-table">
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
                        <td>{row.start}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Industries */}
        <section className="br-industries">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>Cloud managed services for every sector</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                The right mix of strategy, management, and backup for the compliance and uptime needs of your industry.
              </Reveal>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 8 }}>
              {industries.map((ind, i) => (
                <Reveal key={ind.title} delay={(i % 3) + 1}>
                  <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--navy)", margin: "0 0 8px" }}>{ind.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-soft)", margin: 0 }}>{ind.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="br-faq">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>Frequently asked questions</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                Straight answers about how our cloud managed services fit together.
              </Reveal>
            </div>
            <div className="br-faq-list">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={(i % 3) + 1}>
                  <details className="br-faq-item" open={i === 0}>
                    <summary>
                      {f.q}
                      <span className="br-plus" />
                    </summary>
                    <div className="br-faq-answer">{f.a}</div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="br-closing">
          <div className="container">
            <Reveal>
              <div className="br-closing-inner">
                <h2>Not sure which solution fits your business?</h2>
                <p className="br-closing-sub">Talk to our experts for a free consultation and a tailored technology plan.</p>
                <Link href="/contact" className="btn btn-grad">
                  Get free consultation
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
