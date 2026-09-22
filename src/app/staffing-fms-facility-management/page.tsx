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
import "../services/[slug]/backup-recovery.css";

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

const whatWeCover = [
  "IT Infrastructure staffing",
  "Data center support staffing",
  "Cyber security staffing",
  "Helpdesk & end-user IT support",
  "Managed IT asset & vendor coordination",
  "Compliance & audit-ready documentation",
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
    items: ["Network Engineer (L1 / L2 / L3)", "Windows / Linux System Administrator", "NOC Engineer", "Storage & Virtualization Engineer", "IT Helpdesk & Desktop Support"],
  },
  {
    tag: "Data Center",
    items: ["Data Center Operations Engineer", "Remote Hands / Smart Hands Technician", "Rack, Stack & Cabling Technician", "DCIM & Environmental Monitoring Specialist", "Server & Storage Hardware Support"],
  },
  {
    tag: "Cyber Security",
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
        <section className="brr-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-2" aria-hidden="true" />
          <div className="container brr-hero-grid">
            <div className="brr-hero-content">
              <Reveal as="span" className="eyebrow" delay={1}>
                IT Managed Services
              </Reveal>
              <Reveal delay={2}>
                <h1 className="section-title brr-hero-title">
                  Skilled IT, data center &amp; cyber security staffing — <span className="grad">on demand</span>
                </h1>
              </Reveal>
              <Reveal as="p" className="brr-hero-desc" delay={3}>
                CoreGenix deploys skilled engineers for IT infrastructure, data center operations, and cyber security — on-site, remote, or project-based — so your technical teams are never short-staffed. 22+ years of experience placing the right people, fast.
              </Reveal>
              <Reveal as="div" className="brr-hero-actions" delay={4}>
                <Link href="/contact" className="btn btn-grad">
                  Get free consultation
                  <ArrowRightIcon />
                </Link>
                <a href="#models" className="btn btn-hero-secondary">
                  View staffing models
                </a>
              </Reveal>
            </div>
            <Reveal className="brr-hero-media" delay={3}>
              <div className="brr-hero-img">
                <Image
                  src="/images/coregenix/service-3.png"
                  alt="IT and cyber security staffing"
                  width={900}
                  height={600}
                  className="main-img"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="brr-stats" aria-label="IT staffing by the numbers">
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

        {/* What */}
        <section className="section brr-what">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Overview"
              title={
                <>
                  What IT staffing services does <span className="grad">CoreGenix provide?</span>
                </>
              }
              desc="CoreGenix provides IT staffing and technical manpower outsourcing for three core areas: IT infrastructure (network, systems, and helpdesk engineers), data center operations (DC support engineers, remote hands, and monitoring staff), and cyber security (SOC analysts, security engineers, and GRC/compliance staff). Engineers are deployed on-site, remote, hybrid, or on a project basis, across India."
            />
            <div className="brr-check-grid">
              {whatWeCover.map((item, i) => (
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

        {/* Challenge */}
        <section className="section brr-challenge section-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="The Problem We Solve"
              title={
                <>
                  Hiring skilled technical talent <span className="grad">shouldn&apos;t slow you down</span>
                </>
              }
              desc="Recruiting and retaining IT, data center, and cyber security professionals takes time, budget, and specialized screening most businesses can't spare."
            />
            <div className="brr-challenge-grid">
              {problems.map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="brr-challenge-card">
                    <p>{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal as="div" className="brr-challenge-note" delay={3}>
              <p>Think of CoreGenix as <strong>one accountable staffing partner across IT, data center, and cyber security</strong> — skilled technical talent, deployed when and where you need it.</p>
            </Reveal>
          </div>
        </section>

        {/* Offerings */}
        <section className="section brr-deliver">
          <div className="container">
            <SectionHeading
              center
              eyebrow="What We Deliver"
              title={
                <>
                  Complete IT, data center &amp; security <span className="grad">staffing portfolio</span>
                </>
              }
              desc="Skilled technical talent across three specialized areas — deployed under one accountable partner."
            />
            <div className="brr-deliver-grid">
              {offerings.map((o, i) => (
                <Reveal key={o.title} delay={(i % 3) + 1}>
                  <div className="brr-deliver-card">
                    <span className="brr-deliver-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{o.title}</h3>
                    <p className="brr-deliver-tag">{o.desc}</p>
                    <ul className="brr-deliver-list">
                      {o.roles.map((role) => <li key={role}>{role}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Roles table */}
        <section className="section brr-table-sec">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Roles We Staff"
              title={
                <>
                  Common roles <span className="grad">we place</span>
                </>
              }
              desc="A sample of the technical roles CoreGenix regularly staffs across IT, data center, and security functions — screened and vetted before deployment."
            />
            <div className="brr-table-wrap">
              <table className="brr-table">
                <thead>
                  <tr>
                    <th>Function</th>
                    <th>Roles we staff</th>
                  </tr>
                </thead>
                <tbody>
                  {rolesGrid.map((col) => (
                    <tr key={col.tag}>
                      <td><strong>{col.tag}</strong></td>
                      <td>
                        {col.items.map((item) => (
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

        {/* Process */}
        <section className="section brr-deliver">
          <div className="container">
            <SectionHeading
              center
              eyebrow="How It Works"
              title={
                <>
                  How we <span className="grad">deploy talent</span>
                </>
              }
              desc="A structured process that gets the right technical talent in place quickly, without compromising on quality."
            />
            <div className="brr-deliver-grid">
              {deploySteps.map((step, i) => (
                <Reveal key={step.num} delay={(i % 3) + 1}>
                  <div className="brr-deliver-card">
                    <span className="brr-deliver-num">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p className="brr-deliver-tag">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Models */}
        <section className="section brr-why" id="models">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Engagement Models"
              title={
                <>
                  Flexible engagement models for <span className="grad">every technical need</span>
                </>
              }
              desc="Choose the model that fits — dedicated, hybrid, project-based, or fully managed."
            />
            <div className="brr-deliver-grid">
              {models.map((m, i) => (
                <Reveal key={m.num} delay={(i % 3) + 1}>
                  <div className="brr-deliver-card">
                    <span className="brr-deliver-num">{m.num}</span>
                    <h3>{m.title}</h3>
                    <p className="brr-deliver-tag">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
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
                  IT, data center &amp; security staffing <span className="grad">for every sector</span>
                </>
              }
              desc="Technical staffing solutions tailored to the compliance and uptime needs of your industry."
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
              desc="Straight answers about our IT, data center, and security staffing services."
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
        <CtaSection title="Need skilled IT, DC, or security talent — fast?" />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}