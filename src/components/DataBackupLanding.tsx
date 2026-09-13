import Link from "next/link";
import Reveal from "./Reveal";
import { CheckIcon, ArrowRightIcon } from "./Icons";
import type { SolutionPage } from "@/data/solutionPages";

interface Props {
  service: SolutionPage;
}

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "119+", label: "Projects delivered" },
  { value: "75+", label: "Happy clients" },
  { value: "24×7", label: "Pan-India support" },
];

const challenges = [
  "Backup jobs that run but never get verified",
  "No offsite or cloud copy — local failure means total loss",
  "Retention policies that don't match compliance requirements",
  "Ransomware that encrypts backups along with production data",
  "No one owns backup — it falls between IT, ops, and the vendor",
  "Restore takes days when the business needs hours",
];

const deliverables = [
  { num: "01", title: "Automated Backup", tag: "Servers, databases, applications, endpoints", items: ["Scheduled backups with defined frequency and retention", "Application-consistent snapshots for databases and VMs", "Endpoint backup for laptops and mobile devices"] },
  { num: "02", title: "On-Premise Backup", tag: "Local, fast restore", items: ["Local backup storage for rapid recovery", "Deduplicated and compressed for efficiency", "Network-attached or SAN-based backup targets"] },
  { num: "03", title: "Cloud Backup", tag: "Offsite protection, always available", items: ["Encrypted cloud backup to geographically separate location", "Tiered storage for cost-efficient retention", "Always accessible regardless of local infrastructure status"] },
  { num: "04", title: "3-2-1 Strategy", tag: "Multiple copies, multiple locations", items: ["Three copies of data on two different media types", "One offsite copy for disaster protection", "Immutable copies to protect against ransomware"] },
  { num: "05", title: "Restore Testing", tag: "We verify your backups actually work", items: ["Regular test restores with documented results", "Recovery time validation against RPO/RTO targets", "Quarterly restore reports for audit and compliance"] },
  { num: "06", title: "Monitoring & Alerting", tag: "Backup health you can see", items: ["24x7 monitoring of backup job status", "Automated alerts on failures or missed windows", "Dashboard visibility into backup health and compliance"] },
];

const onPremVsCloud = [
  { factor: "Restore speed", onPrem: "Fastest — local network", cloud: "Dependent on bandwidth" },
  { factor: "Disaster protection", onPrem: "Limited — same location risk", cloud: "Strong — geographically separate" },
  { factor: "Cost model", onPrem: "Upfront hardware + maintenance", cloud: "Pay-as-you-go operational" },
  { factor: "Scalability", onPrem: "Limited by hardware capacity", cloud: "Elastic — scales with data growth" },
  { factor: "Compliance", onPrem: "Full control over data location", cloud: "Provider-dependent data residency" },
];

const gfsChips = ["Grandfather-Father-Son retention", "Daily, weekly, monthly rotation", "Yearly archival copies", "Custom retention policies", "Automated lifecycle management", "Immutable backup copies", "Air-gapped protection", "Ransomware-resilient architecture"];

const industries = [
  { title: "BFSI", desc: "Compliant backup with RBI-mandated retention and recovery testing." },
  { title: "Healthcare", desc: "Patient data protection with HIPAA/DPDPA-aligned backup." },
  { title: "Manufacturing", desc: "ERP and production system backup with defined RPO/RTO." },
  { title: "Retail & E-commerce", desc: "Transaction and customer data protection across systems." },
  { title: "Government / PSU", desc: "Data sovereignty-aligned backup with audit-ready documentation." },
];

const faqs = [
  { q: "What is the best backup strategy?", a: "A 3-2-1 strategy is the industry standard — at least three copies of your data, on two different media, with one copy offsite. CoreGenix designs, implements, and manages this for you, including regular restore testing." },
  { q: "How often should data be backed up?", a: "Backup frequency depends on how much data change your business can afford to lose. CoreGenix helps define the right schedule for each workload — daily, hourly, or real-time — based on your RPO requirements." },
  { q: "How much does a backup solution cost in India?", a: "Backup costs depend on data volume, retention period, and whether backup is on-premise, cloud, or both. CoreGenix provides a free backup assessment with a fixed-price proposal." },
  { q: "What is the difference between backup and disaster recovery?", a: "Backup copies your data so it can be restored after loss. Disaster recovery restores entire systems and operations — including servers, applications, and network — so the business can continue running after a major disruption." },
  { q: "How do I know if my backups would actually restore?", a: "The only way to know is to test them regularly. CoreGenix includes restore testing as part of every backup engagement, with documented proof that your backups work — not just that they ran." },
  { q: "Can ransomware encrypt my backups?", a: "Yes, if backups are on the same network or use the same credentials. CoreGenix implements immutable backups, air-gapped copies, and separate access controls to protect backup data from ransomware." },
  { q: "Should I use on-premise or cloud backup?", a: "Most businesses benefit from a combination — on-premise for fast local restore, cloud for offsite protection. CoreGenix designs the right mix based on your data volume, recovery time needs, and compliance requirements." },
];

export default function DataBackupLanding({ service }: Props) {
  return (
    <main>
      <section className="br-hero">
        <div className="container">
          <Reveal as="span" className="br-eyebrow" delay={1}>
            <span className="br-dot" />
            IT Infrastructure Solutions
          </Reveal>
          <Reveal delay={2}>
            <h1 className="br-hero-title">{service.h1}</h1>
          </Reveal>
          <Reveal as="p" className="br-hero-desc" delay={3}>{service.intro}</Reveal>
          <Reveal as="div" className="br-hero-actions" delay={4}>
            <Link href="/contact" className="btn btn-grad">Get free consultation<ArrowRightIcon /></Link>
            <Link href="/solutions" className="btn btn-hero-secondary">View all solutions</Link>
          </Reveal>
          <div className="br-stat-bar">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 4) + 1}>
                <div className="br-stat"><span className="br-stat-num">{stat.value}</span><span className="br-stat-label">{stat.label}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-answer">
        <div className="container br-answer-grid">
          <Reveal delay={1}><h2>What are data backup solutions?</h2></Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Data backup solutions protect your business data through automated, tested, and verified backup — on-premise and in the cloud. CoreGenix builds 3-2-1 backup strategies with regular restore testing, so you know your backups work before disaster strikes.</p>
          </Reveal>
        </div>
      </section>

      <section className="br-challenge">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>The problem we solve</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Most businesses discover their backup was never working — the day they need it. Failed jobs, untested restores, and data spread across systems with no single plan.</Reveal>
          </div>
          <div className="br-challenge-grid">
            {challenges.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1}>
                <div className="br-challenge-item"><span className="br-challenge-icon"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4v5M8 11.5v.1" stroke="currentColor" strokeWidth="1.3"/></svg></span><p>{item}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="br-challenge-note" delay={3}>
            <p>Data loss isn&apos;t an &quot;if.&quot; It&apos;s a &quot;when.&quot; <strong>Backups that actually restore are the only answer</strong> — and the only way to know is to test them.</p>
          </Reveal>
        </div>
      </section>

      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>What we deliver</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>A complete backup engagement — automated backup, 3-2-1 strategy, restore testing, and monitoring, under one accountable team.</Reveal>
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
            <Reveal delay={1}><h2>On-premise vs. cloud backup</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>How the two backup locations compare.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Factor</th><th>On-Premise</th><th>Cloud</th></tr></thead>
                <tbody>{onPremVsCloud.map((row) => <tr key={row.factor}><td>{row.factor}</td><td>{row.onPrem}</td><td>{row.cloud}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>3-2-1 backup rule</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>The industry standard for data protection — CoreGenix implements and manages it for you.</Reveal>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            {gfsChips.map((chip) => (
              <Reveal key={chip} delay={1}><span style={{ background: "var(--bg-darker)", border: "1px solid var(--border)", borderRadius: 100, padding: "8px 20px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>{chip}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Data backup for every sector</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Backup strategies tuned to the compliance and recovery needs of your industry.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What you get from properly designed and tested backup.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What sets our backup delivery apart.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>Straight answers about backup strategy, cost, and testing.</Reveal>
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
              <h2>Get a backup solution that actually restores</h2>
              <p className="br-closing-sub">Get a free backup assessment and find out whether your current backups would actually restore.</p>
              <div className="br-closing-meta"><span>Call <a href="tel:+918355958119">+91 83559 58119</a></span><span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span><span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span></div>
              <Link href="/contact" className="btn btn-grad">Get free consultation<ArrowRightIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
