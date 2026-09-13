import Link from "next/link";
import Reveal from "./Reveal";
import { CheckIcon, ArrowRightIcon } from "./Icons";
import type { SolutionPage } from "@/data/solutionPages";

interface Props { service: SolutionPage; }

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "119+", label: "Projects delivered" },
  { value: "75+", label: "Happy clients" },
  { value: "24×7", label: "Pan-India support" },
];

const challenges = [
  "Cloud bills that balloon with no governance or cost alerts in place",
  "Security misconfigurations left open on public-facing resources",
  "Workloads lifted-and-shifted without redesign, performing worse than before",
  "No landing zone — resources sprawled with no governance structure",
  "Vendor bias steering decisions toward one platform regardless of fit",
  "Nobody managing the environment after the migration project ends",
];

const deliverables = [
  { num: "01", title: "Cloud Architecture", tag: "Azure and AWS designed for your workloads", items: ["Workload-fit architecture design, not generic templates", "Compute, storage, and networking sized to actual usage", "High-availability and multi-region design where needed"] },
  { num: "02", title: "Migration", tag: "Phased, low-risk moves with minimal disruption", items: ["Wave-based migration planning by priority and risk", "Pilot workloads before full-scale migration", "Rollback plans for every migration phase"] },
  { num: "03", title: "Security", tag: "Identity, network, encryption & compliance controls", items: ["Identity and access management (IAM) hardening", "Network segmentation and security group configuration", "Encryption at rest and in transit by default"] },
  { num: "04", title: "Cost Optimization", tag: "Right-sizing and savings on every bill", items: ["Right-sizing of over-provisioned resources", "Reserved instances and savings plan recommendations", "Automated cost alerts and budget governance"] },
  { num: "05", title: "Landing Zones", tag: "Governed, secure foundations from day one", items: ["Account/subscription structure and naming standards", "Baseline security and compliance policies", "Centralized logging and monitoring setup"] },
  { num: "06", title: "Ongoing Management", tag: "24x7 operations and optimization", items: ["24x7 monitoring, patching, and incident response", "Continuous cost and performance optimization", "Monthly reporting and roadmap reviews"] },
];

const comparisonData = [
  { factor: "Best fit for", azure: "Microsoft-heavy enterprises, .NET workloads", aws: "Broad service catalog, custom architectures" },
  { factor: "Enterprise integration", azure: "Deep Microsoft 365 / Active Directory integration", aws: "Broad third-party and open-source ecosystem" },
  { factor: "Market position", azure: "Strong enterprise and government adoption", aws: "Largest public cloud market share globally" },
  { factor: "Hybrid cloud", azure: "Azure Arc, Azure Stack — mature hybrid story", aws: "Outposts for hybrid — newer but capable" },
  { factor: "Pricing model", azure: "Enterprise Agreement discounts, hybrid benefit", aws: "Reserved instances, savings plans, spot pricing" },
];

const landingZoneChips = ["Account & subscription structure", "Baseline security policies", "Network hub & spoke topology", "Centralized logging & monitoring", "Identity federation & IAM", "Tagging & naming standards", "Cost management & budgeting", "Compliance guardrails"];

const costOptChips = ["Right-sizing", "Reserved Instances", "Savings Plans", "Auto-scaling", "Spot / Low-priority instances", "Storage tiering", "Idle resource cleanup", "Budget alerts & governance"];

const industries = [
  { title: "BFSI", desc: "Regulated cloud adoption with RBI compliance and data residency." },
  { title: "Retail & E-commerce", desc: "Elastic infrastructure for peak traffic and seasonal scaling." },
  { title: "Manufacturing", desc: "Cloud-native analytics and IoT integration for smart factories." },
  { title: "Healthcare", desc: "DPDPA-aligned cloud for patient data and clinical workloads." },
  { title: "Startups & SaaS", desc: "Rapid scaling with optimized cloud spend from day one." },
];

const faqs = [
  { q: "What are public cloud solutions?", a: "Public cloud solutions cover the adoption, migration, and ongoing management of workloads on shared, multi-tenant infrastructure from providers like Microsoft Azure and Amazon Web Services (AWS), billed on actual usage. CoreGenix delivers vendor-neutral architecture, phased migration, security and landing zone design, cost optimization, and 24x7 management across both platforms." },
  { q: "Should I choose Azure or AWS?", a: "It depends on your existing technology stack, compliance needs, and workload requirements. Azure fits best for Microsoft-heavy enterprises, while AWS offers the broadest service catalog. CoreGenix provides vendor-neutral advice and recommends the platform that fits your workloads — not the one that pays the highest commission." },
  { q: "How much does public cloud migration cost in India?", a: "Migration costs depend on the number of workloads, complexity, and whether redesign is needed. CoreGenix provides a fixed-price migration plan after a free assessment, including ongoing management pricing — so there are no surprises." },
  { q: "What is a cloud landing zone?", a: "A landing zone is a pre-configured, governed foundation for your cloud environment — including account structure, security policies, networking, and monitoring. CoreGenix deploys landing zones on Azure and AWS so your cloud is secure and organized from day one, not retrofitted later." },
  { q: "How do you control cloud costs?", a: "CoreGenix implements cost governance through right-sizing, reserved instances, savings plans, auto-scaling, budget alerts, and monthly cost reviews. We measure success not just by uptime, but by whether your cloud spend is optimized." },
  { q: "What happens after the migration is done?", a: "Most cloud problems start after migration. CoreGenix provides ongoing 24x7 management — monitoring, patching, cost optimization, security hardening, and monthly reporting — so your cloud keeps performing after the project ends." },
  { q: "Can you migrate workloads from on-premise to cloud without downtime?", a: "CoreGenix plans migration in waves with pilot testing before each phase. While zero downtime isn't always possible for every workload, we minimize disruption through off-hours scheduling, phased cutover, and rollback plans for every migration." },
];

export default function PublicCloudLanding({ service }: Props) {
  return (
    <main>
      <section className="br-hero">
        <div className="container">
          <Reveal as="span" className="br-eyebrow" delay={1}><span className="br-dot" />Cloud Infrastructure Solutions</Reveal>
          <Reveal delay={2}><h1 className="br-hero-title">{service.h1}</h1></Reveal>
          <Reveal as="p" className="br-hero-desc" delay={3}>{service.intro}</Reveal>
          <Reveal as="div" className="br-hero-actions" delay={4}>
            <Link href="/contact" className="btn btn-grad">Get free consultation<ArrowRightIcon /></Link>
            <Link href="/solutions" className="btn btn-hero-secondary">View all solutions</Link>
          </Reveal>
          <div className="br-stat-bar">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 4) + 1}><div className="br-stat"><span className="br-stat-num">{stat.value}</span><span className="br-stat-label">{stat.label}</span></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-answer">
        <div className="container br-answer-grid">
          <Reveal delay={1}><h2>What are public cloud solutions?</h2></Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Public cloud solutions cover the adoption, migration, and ongoing management of workloads on shared, multi-tenant infrastructure from providers like Microsoft Azure and Amazon Web Services (AWS), billed on actual usage. CoreGenix delivers vendor-neutral architecture, phased migration, security and landing zone design, cost optimization, and 24x7 management across both platforms.</p>
          </Reveal>
        </div>
      </section>

      <section className="br-challenge">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>The problem we solve</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Public cloud offers scale and flexibility — but only if it&apos;s designed right. Poorly planned cloud estates lead to bill shock, security gaps, and workloads that perform worse than on-premise.</Reveal>
          </div>
          <div className="br-challenge-grid">
            {challenges.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1}>
                <div className="br-challenge-item"><span className="br-challenge-icon"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4v5M8 11.5v.1" stroke="currentColor" strokeWidth="1.3"/></svg></span><p>{item}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="br-challenge-note" delay={3}>
            <p>Moving to cloud isn&apos;t a destination — it&apos;s an ongoing operation. <strong>Without the right partner, you get the worst of both worlds: cloud complexity without cloud benefits.</strong></p>
          </Reveal>
        </div>
      </section>

      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>What we deliver</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>A complete public cloud engagement — architecture, migration, security, cost optimization, and ongoing management, under one accountable team.</Reveal>
          </div>
          {deliverables.map((d) => (
            <Reveal key={d.num} delay={1}>
              <div className="br-phase"><span className="br-phase-num">{d.num}</span><div><h3>{d.title}</h3><p className="br-phase-tag">{d.tag}</p></div><ul className="br-phase-list">{d.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Azure vs. AWS</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Both platforms are enterprise-grade — the right choice depends on your stack and workload fit.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Factor</th><th>Microsoft Azure</th><th>Amazon Web Services</th></tr></thead>
                <tbody>{comparisonData.map((row) => <tr key={row.factor}><td>{row.factor}</td><td>{row.azure}</td><td>{row.aws}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>What is a landing zone?</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>A landing zone is the governed foundation your cloud environment runs on — deployed before workloads move, not after.</Reveal>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            {landingZoneChips.map((chip) => (
              <Reveal key={chip} delay={1}><span style={{ background: "var(--bg-darker)", border: "1px solid var(--border)", borderRadius: 100, padding: "8px 20px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>{chip}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Cost optimization levers</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Cloud costs are manageable — when someone is actually managing them.</Reveal>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            {costOptChips.map((chip) => (
              <Reveal key={chip} delay={1}><span style={{ background: "var(--bg-darker)", border: "1px solid var(--border)", borderRadius: 100, padding: "8px 20px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>{chip}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Public cloud for every sector</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Architecture and migration tuned to the compliance and scaling needs of your industry.</Reveal>
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

      <section className="br-outcomes">
        <div className="container">
          <div className="br-section-head br-section-head-light">
            <Reveal delay={1}><h2>Outcomes that move your business</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>What you get from properly architected and managed public cloud.</Reveal>
          </div>
          <div className="br-outcome-grid">
            {service.sections.find((s) => s.heading === "What You Get")?.body.map((item, i) => (
              <Reveal key={item} delay={(i % 4) + 1}><div className="br-outcome-item"><CheckIcon className="br-outcome-check" /><p>{item}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-why">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>The CoreGenix difference</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>What sets our public cloud delivery apart.</Reveal>
          </div>
          <div className="br-why-grid">
            {service.sections.find((s) => s.heading === "Why Choose CoreGenix")?.body.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1}><div className="br-why-cell"><span className="br-why-num">{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-faq">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Frequently asked questions</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Straight answers about public cloud adoption, migration, and management.</Reveal>
          </div>
          <div className="br-faq-list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) + 1}>
                <details className="br-faq-item" open={i === 0}><summary>{f.q}<span className="br-plus" /></summary><div className="br-faq-answer">{f.a}</div></details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-closing">
        <div className="container">
          <Reveal>
            <div className="br-closing-inner">
              <h2>Adopt public cloud the right way</h2>
              <p className="br-closing-sub">Get a free cloud assessment and a clear view of what migration and management should look like.</p>
              <div className="br-closing-meta"><span>Call <a href="tel:+918355958119">+91 83559 58119</a></span><span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span><span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span></div>
              <Link href="/contact" className="btn btn-grad">Get free consultation<ArrowRightIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
