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
  title: "IT, Data Center & Cyber Security Staffing India | CoreGenix",
  description:
    "CoreGenix deploys skilled IT infrastructure, data center, and cyber security engineers — on-site, remote, or project-based — across India. 22+ years of experience.",
  keywords: [
    "IT staffing India",
    "data center staffing Mumbai",
    "cyber security staffing",
    "IT infrastructure engineers",
    "SOC analyst staffing",
    "technical manpower outsourcing",
  ],
  alternates: { canonical: "/staffing-fms-facility-management" },
  openGraph: {
    title: "IT, Data Center & Cyber Security Staffing — CoreGenix",
    description:
      "Skilled IT, DC, and cyber security engineers deployed on-site, remote, or project-based across India.",
    url: `${SITE.url}/staffing-fms-facility-management`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "IT, Data Center & Cyber Security Staffing — CoreGenix",
    description:
      "Skilled IT, DC, and cyber security engineers deployed on-site, remote, or project-based across India.",
  },
};

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "120+", label: "Engineers deployed" },
  { value: "75+", label: "Clients served" },
  { value: "99.9%", label: "SLA-backed uptime" },
];

const problems = [
  "Hard to find and retain skilled IT and security engineers",
  "Vacant technical roles that delay projects and slow support",
  "High cost of emergency hiring and short-term contractors",
  "No single partner accountable for IT, DC, and security staffing together",
  "Compliance and documentation gaps in technical operations",
  "Constantly firefighting instead of building your technical bench",
];

const offerings = [
  {
    title: "IT Infrastructure Staffing",
    desc: "Network engineers, system administrators, and IT support staff deployed on-site or remote — for short-term projects, long-term support, or permanent hiring needs.",
    roles: ["Network Engineer", "System Administrator", "L1/L2/L3 Support", "NOC Engineer"],
  },
  {
    title: "Data Center Support Staffing",
    desc: "DC operations engineers, remote hands and smart hands support, and infrastructure monitoring staff for server rooms and data center environments.",
    roles: ["DC Operations Engineer", "Remote/Smart Hands", "Rack & Cabling Technician", "DCIM Monitoring Specialist"],
  },
  {
    title: "Cyber Security Staffing",
    desc: "SOC analysts, security engineers, and GRC/compliance professionals to strengthen your security operations and meet audit requirements.",
    roles: ["SOC Analyst (L1/L2/L3)", "Security Engineer", "VAPT Analyst", "GRC/Compliance Analyst"],
  },
  {
    title: "Helpdesk & End-User IT Support",
    desc: "A single point of contact for IT incidents — logging, tracking, escalation, and real-time communication with end users.",
    roles: ["Helpdesk Executive", "Desktop Support Engineer", "Service Desk Analyst"],
  },
  {
    title: "Managed IT Asset & Vendor Coordination",
    desc: "Tracking of IT hardware and software assets, coordination with technology vendors, and SLA monitoring so your technical estate is fully accounted for.",
    roles: ["IT Asset Coordinator", "Vendor Management Executive"],
  },
  {
    title: "Compliance & Audit-Ready IT Documentation",
    desc: "Documented staffing records, maintenance logs, and technical reports you can present to management and auditors with confidence.",
    roles: ["Documentation Specialist", "IT Audit Support"],
  },
];

const rolesGrid = [
  {
    tag: "IT Infrastructure",
    title: "Network & Systems",
    items: ["Network Engineer (L1 / L2 / L3)", "Windows / Linux System Administrator", "NOC Engineer", "Storage & Virtualization Engineer", "IT Helpdesk & Desktop Support"],
  },
  {
    tag: "Data Center",
    title: "DC Operations",
    items: ["Data Center Operations Engineer", "Remote Hands / Smart Hands Technician", "Rack, Stack & Cabling Technician", "DCIM & Environmental Monitoring Specialist", "Server & Storage Hardware Support"],
  },
  {
    tag: "Cyber Security",
    title: "Security Operations",
    items: ["SOC Analyst (L1 / L2 / L3)", "Security Engineer / Administrator", "VAPT / Penetration Testing Analyst", "GRC & Compliance Analyst", "Identity & Access Management Specialist"],
  },
];

const deploySteps = [
  { num: "01", title: "Requirement Scoping", desc: "We understand the role, required skills, certifications, and engagement model before sourcing begins." },
  { num: "02", title: "Technical Screening", desc: "Candidates are vetted for technical skill, certifications, and role-fit through structured assessments." },
  { num: "03", title: "Deployment & Onboarding", desc: "Selected engineers are onboarded with clear SLAs, reporting lines, and documentation from day one." },
  { num: "04", title: "Ongoing Performance Management", desc: "Regular reviews, replacement guarantees, and escalation support keep every deployment on track." },
];

const models = [
  { num: "01", title: "On-Site Engineers", desc: "Dedicated IT, data center, and security engineers stationed at your premises, aligned to your working hours." },
  { num: "02", title: "Remote / Hybrid Staffing", desc: "Cost-effective remote support combined with periodic on-site visits — the right mix for your budget." },
  { num: "03", title: "Project-Based Staffing", desc: "Skilled technical professionals for migrations, rollouts, security audits, and short-term initiatives." },
  { num: "04", title: "Managed IT & DC Support Teams", desc: "A full technical team that owns IT infrastructure and data center health end to end — monitoring, maintenance, and response." },
];

const industries = [
  { title: "Government / PSU", desc: "On-site IT and security staffing for secure, compliant environments." },
  { title: "Banking & Finance", desc: "24/7 IT and SOC staffing with compliance-ready documentation." },
  { title: "Manufacturing", desc: "Data center and network engineers for plants, offices, and control rooms." },
  { title: "IT / Technology", desc: "Flexible technical staffing to extend in-house engineering teams." },
  { title: "Healthcare", desc: "Reliable IT and data center staffing to keep critical systems running." },
];

const faqs = [
  { q: "What does CoreGenix's IT staffing service include?", a: "CoreGenix provides skilled staffing across three areas: IT infrastructure (network and systems engineers), data center operations (DC support and remote hands), and cyber security (SOC analysts and compliance staff) — deployed on-site, remote, or project-based." },
  { q: "Does CoreGenix provide data center staffing?", a: "Yes, CoreGenix provides data center support staffing including DC operations engineers, remote/smart hands support, and infrastructure monitoring staff for server rooms and data center environments." },
  { q: "Can CoreGenix staff cyber security roles like SOC analysts?", a: "Yes, CoreGenix provides cyber security staffing including SOC analysts, security engineers, and GRC/compliance professionals to support security operations and audit requirements." },
  { q: "Can you staff for short-term IT projects?", a: "Yes. CoreGenix scales IT, data center, and security engineering teams up or down for migrations, rollouts, audits, and other time-bound technical initiatives." },
  { q: "Do you provide IT staffing services across India?", a: "Yes, CoreGenix delivers IT, data center, and cyber security staffing in Mumbai, Bengaluru, Jaipur, and across India with PAN-India operations." },
  { q: "What is the difference between on-site and remote IT staffing?", a: "On-site staffing places dedicated engineers at your premises during working hours, while remote/hybrid staffing combines remote support with periodic on-site visits — CoreGenix offers both models depending on your operational needs." },
  { q: "Are your engineers certified?", a: "Yes, depending on the role, engineers are screened for relevant certifications such as CCNA/CCNP for networking, CompTIA Server+/Linux+ for systems, and CEH, CISSP, or ISO 27001 Lead Auditor for security and compliance roles." },
  { q: "How quickly can CoreGenix deploy IT or security staff?", a: "Typical deployment timelines range from a few days for pre-vetted roles to 2–3 weeks for specialized security or niche technical positions, depending on the skill set and engagement model required." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT, Data Center & Cyber Security Staffing India",
  description:
    "CoreGenix deploys skilled IT infrastructure, data center, and cyber security engineers — on-site, remote, or project-based — across India.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  areaServed: ["IN"],
  url: `${SITE.url}/staffing-fms-facility-management`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    { "@type": "ListItem", position: 3, name: "IT Staffing", item: `${SITE.url}/staffing-fms-facility-management` },
  ],
};

export default function StaffingPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        {/* Hero */}
        <section className="br-hero">
          <div className="container">
            <Reveal as="span" className="br-eyebrow" delay={1}>
              <span className="br-dot" />
              IT Managed Services
            </Reveal>
            <Reveal delay={2}>
              <h1 className="br-hero-title">Skilled IT, data center &amp; cyber security staffing — on demand</h1>
            </Reveal>
            <Reveal as="p" className="br-hero-desc" delay={3}>
              CoreGenix deploys skilled engineers for IT infrastructure, data center operations, and cyber security — on-site, remote, or project-based — so your technical teams are never short-staffed. 22+ years of experience placing the right people, fast.
            </Reveal>
            <Reveal as="div" className="br-hero-actions" delay={4}>
              <Link href="/contact" className="btn btn-grad">
                Get free consultation
                <ArrowRightIcon />
              </Link>
              <a href="#models" className="btn btn-hero-secondary">
                View staffing models
              </a>
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
              <h2>What IT staffing services does CoreGenix provide?</h2>
            </Reveal>
            <Reveal as="div" className="br-answer-copy" delay={2}>
              <p>CoreGenix provides IT staffing and technical manpower outsourcing for three core areas: IT infrastructure (network, systems, and helpdesk engineers), data center operations (DC support engineers, remote hands, and monitoring staff), and cyber security (SOC analysts, security engineers, and GRC/compliance staff). Engineers are deployed on-site, remote, hybrid, or on a project basis, across India.</p>
            </Reveal>
          </div>
        </section>

        {/* Problem */}
        <section className="br-challenge">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>Hiring skilled technical talent shouldn&apos;t slow you down</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                Recruiting and retaining IT, data center, and cyber security professionals takes time, budget, and specialized screening most businesses can&apos;t spare.
              </Reveal>
            </div>
            <div className="br-challenge-grid">
              {problems.map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="br-challenge-item">
                    <span className="br-challenge-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4v5M8 11.5v.1" stroke="currentColor" strokeWidth="1.3"/></svg>
                    </span>
                    <p>{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal as="div" className="br-challenge-note" delay={3}>
              <p>Think of CoreGenix as <strong>one accountable staffing partner across IT, data center, and cyber security</strong> — skilled technical talent, deployed when and where you need it.</p>
            </Reveal>
          </div>
        </section>

        {/* Offerings */}
        <section className="br-deliver">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>Complete IT, data center &amp; security staffing portfolio</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                Skilled technical talent across three specialized areas — deployed under one accountable partner.
              </Reveal>
            </div>
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={1}>
                <div className="br-phase">
                  <span className="br-phase-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{o.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-soft)", margin: "4px 0 12px" }}>{o.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {o.roles.map((role) => (
                        <span key={role} style={{ background: "var(--bg-darker)", border: "1px solid var(--border)", borderRadius: 100, padding: "4px 14px", fontSize: 13, color: "var(--text-muted)" }}>{role}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Roles We Staff */}
        <section className="br-answer">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>Common roles we place</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                A sample of the technical roles CoreGenix regularly staffs across IT, data center, and security functions — screened and vetted before deployment.
              </Reveal>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 32 }}>
              {rolesGrid.map((col) => (
                <Reveal key={col.tag} delay={1}>
                  <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border)", borderRadius: 12, padding: 28 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>{col.tag}</span>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: "var(--navy)", margin: "8px 0 16px" }}>{col.title}</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {col.items.map((item) => (
                        <li key={item} style={{ fontSize: 14, color: "var(--text-soft)", padding: "6px 0", borderBottom: "1px solid var(--border)" }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Process */}
        <section className="br-deliver">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>How we deploy talent</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                A structured process that gets the right technical talent in place quickly, without compromising on quality.
              </Reveal>
            </div>
            {deploySteps.map((step) => (
              <Reveal key={step.num} delay={1}>
                <div className="br-phase">
                  <span className="br-phase-num">{step.num}</span>
                  <div>
                    <h3>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: "var(--text-soft)" }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Staffing Models */}
        <section className="br-deliver" id="models">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>Flexible engagement models for every technical need</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                Choose the model that fits — dedicated, hybrid, project-based, or fully managed.
              </Reveal>
            </div>
            {models.map((m) => (
              <Reveal key={m.num} delay={1}>
                <div className="br-phase">
                  <span className="br-phase-num">{m.num}</span>
                  <div>
                    <h3>{m.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: "var(--text-soft)" }}>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="br-industries">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>IT, data center &amp; security staffing for every sector</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                Technical staffing solutions tailored to the compliance and uptime needs of your industry.
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
                Straight answers about our IT, data center, and security staffing services.
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
                <h2>Need skilled IT, DC, or security talent — fast?</h2>
                <p className="br-closing-sub">Talk to us about your technical staffing needs and get a tailored deployment plan.</p>
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
