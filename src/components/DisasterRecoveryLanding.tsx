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
  "No defined RPO or RTO — recovery time is a guess",
  "DR plans that exist on paper but were never tested",
  "Backup without failover — data is safe, but systems aren't",
  "No incident playbooks — staff don't know what to do first",
  "Business continuity planning that ignores non-IT operations",
  "Compliance gaps — auditors asking for DR evidence you don't have",
];

const deliverables = [
  { num: "01", title: "DR Strategy Design", tag: "RPO and RTO defined for your business", items: ["Recovery objectives aligned to business impact", "Risk assessment and gap analysis", "DR tier recommendation matched to budget"] },
  { num: "02", title: "Recovery Architecture", tag: "Replicated systems, ready to fail over", items: ["Cross-site or cross-region replication", "Automated failover and failback procedures", "Standby infrastructure ready to activate"] },
  { num: "03", title: "Business Continuity Planning", tag: "Keep operations running", items: ["Non-IT process continuity plans", "Staff communication and role assignment", "Alternate site and vendor arrangements"] },
  { num: "04", title: "Backup Integration", tag: "DR layered on reliable backups", items: ["DR strategy built on verified backup foundation", "Consistent retention and recovery policies", "Unified monitoring across backup and DR"] },
  { num: "05", title: "Tested Failover", tag: "Regular DR drills, not just documentation", items: ["Scheduled failover tests with documented results", " tabletop exercises for incident response", "Continuous improvement based on test outcomes"] },
  { num: "06", title: "Incident Playbooks", tag: "Clear steps when disaster strikes", items: ["Role-based response procedures", "Communication templates and escalation paths", "Post-incident review and improvement process"] },
];

const rpoRtoData = [
  { rpo: "RPO 24h", rto: "RTO 4-8h", description: "Daily backup, next-business-day recovery — suitable for non-critical systems" },
  { rpo: "RPO 4h", rto: "RTO 2-4h", description: "Near-real-time replication, same-day recovery — suitable for important business systems" },
  { rpo: "RPO 1h", rto: "RTO <1h", description: "Continuous replication, rapid failover — suitable for critical production systems" },
  { rpo: "RPO 0", rto: "RTO <15min", description: "Zero data loss, instant failover — suitable for mission-critical, always-on systems" },
];

const hotWarmCold = [
  { type: "Hot Site", description: "Fully operational standby, ready to take over immediately", rto: "<15 minutes", cost: "Highest" },
  { type: "Warm Site", description: "Infrastructure ready, needs configuration before taking over", rto: "1-4 hours", cost: "Medium" },
  { type: "Cold Site", description: "Basic space with power and connectivity, no pre-installed systems", rto: "24-72 hours", cost: "Lowest" },
];

const drVsBcp = [
  { factor: "Focus", dr: "IT systems and data", bcp: "Wider business operations" },
  { factor: "Goal", dr: "Restore technology after disruption", bcp: "Keep business operating during disruption" },
  { factor: "Scope", dr: "Servers, applications, network, data", bcp: "People, processes, communication, facilities" },
  { factor: "Timeline", dr: "After the event (recovery)", bcp: "During the event (continuity)" },
];

const industries = [
  { title: "BFSI", desc: "Zero-tolerance DR for core banking with RBI compliance." },
  { title: "Healthcare", desc: "Clinical system availability and patient data protection." },
  { title: "Manufacturing", desc: "Production system DR with defined recovery windows." },
  { title: "Retail & E-commerce", desc: "Transaction continuity during peak trading periods." },
  { title: "Government / PSU", desc: "National continuity framework compliance." },
];

const faqs = [
  { q: "What is the difference between DR and BCP?", a: "Disaster recovery (DR) restores IT systems after disruption — servers, applications, and data. Business continuity planning (BCP) covers how the wider business keeps operating during disruption — including alternate processes, staff communication, and critical function continuity beyond just IT." },
  { q: "What are RPO and RTO?", a: "RPO (Recovery Point Objective) is how much data you can afford to lose — measured in time. RTO (Recovery Time Objective) is how fast you need systems back. CoreGenix helps you define both based on your business requirements, then builds recovery architecture to match." },
  { q: "How often should we test our DR plan?", a: "At least annually, and after any major infrastructure or application change. Regular testing — including full failover drills — is the only way to know your DR actually works under real conditions." },
  { q: "What is the difference between hot, warm, and cold DR sites?", a: "A hot site is fully operational and can take over immediately. A warm site has infrastructure ready but needs configuration. A cold site is basic space with power and connectivity but no pre-installed systems. The right choice depends on your RTO and budget." },
  { q: "Does my business need both DR and BCP?", a: "Yes. DR restores your IT systems. BCP ensures the wider business keeps operating — people, processes, and communication. Most regulatory frameworks require both." },
  { q: "How does CoreGenix approach DR for cloud environments?", a: "CoreGenix designs DR across public and private cloud using native replication, cross-region failover, and tested recovery procedures — ensuring cloud workloads have the same recovery confidence as on-premise systems." },
];

export default function DisasterRecoveryLanding({ service }: Props) {
  return (
    <main>
      <section className="br-hero">
        <div className="container">
          <Reveal as="span" className="br-eyebrow" delay={1}><span className="br-dot" />IT Infrastructure Solutions</Reveal>
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
          <Reveal delay={1}><h2>What is disaster recovery and business continuity?</h2></Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Disaster recovery and business continuity planning ensures your business can survive and recover from any disruption — cyber attack, natural disaster, power failure, or system outage. CoreGenix builds tested DR/BCP plans with defined RPO/RTO, failover procedures, and incident playbooks so you know exactly what to do when something goes wrong.</p>
          </Reveal>
        </div>
      </section>

      <section className="br-challenge">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>The problem we solve</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>When disaster hits — fire, flood, cyber attack, power failure — most businesses are caught unprepared. Systems go down, data is at risk, and nobody has a tested plan to recover.</Reveal>
          </div>
          <div className="br-challenge-grid">
            {challenges.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1}>
                <div className="br-challenge-item"><span className="br-challenge-icon"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4v5M8 11.5v.1" stroke="currentColor" strokeWidth="1.3"/></svg></span><p>{item}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="br-challenge-note" delay={3}>
            <p>Every hour of downtime costs money and reputation. <strong>The businesses that survive disruption are the ones that planned for it before it happened.</strong></p>
          </Reveal>
        </div>
      </section>

      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>What we deliver</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>A complete DR and BCP engagement — strategy, architecture, testing, and playbooks, under one accountable team.</Reveal>
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
            <Reveal delay={1}><h2>Understanding RPO and RTO</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>RPO and RTO define how much data you can lose and how fast you need to recover.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>RPO</th><th>RTO</th><th>Description</th></tr></thead>
                <tbody>{rpoRtoData.map((row) => <tr key={row.rpo}><td>{row.rpo}</td><td>{row.rto}</td><td>{row.description}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Hot vs. warm vs. cold DR sites</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>The right DR site type depends on your RTO and budget.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Site Type</th><th>Description</th><th>RTO</th><th>Cost</th></tr></thead>
                <tbody>{hotWarmCold.map((row) => <tr key={row.type}><td>{row.type}</td><td>{row.description}</td><td>{row.rto}</td><td>{row.cost}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>DR vs. BCP</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>These two work together but serve different purposes.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Factor</th><th>Disaster Recovery</th><th>Business Continuity</th></tr></thead>
                <tbody>{drVsBcp.map((row) => <tr key={row.factor}><td>{row.factor}</td><td>{row.dr}</td><td>{row.bcp}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>DR & BCP for every sector</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Recovery and continuity plans tuned to the compliance and uptime needs of your industry.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What you get from properly designed and tested DR/BCP.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What sets our DR/BCP delivery apart.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>Straight answers about disaster recovery and business continuity.</Reveal>
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
              <h2>Don&apos;t plan for disaster during a disaster</h2>
              <p className="br-closing-sub">Get a free DR & BCP assessment and a tested plan for what happens when something goes wrong.</p>
              <div className="br-closing-meta"><span>Call <a href="tel:+918355958119">+91 83559 58119</a></span><span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span><span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span></div>
              <Link href="/contact" className="btn btn-grad">Get free consultation<ArrowRightIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
