import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  ShieldIcon,
  RefreshIcon,
  MonitorIcon,
  ClockIcon,
  CheckIcon,
  AwardIcon,
  LayersIcon,
  FactoryIcon,
  ArrowRightIcon,
} from "./Icons";
import type { ServicePage } from "@/data/services";

interface Props {
  service: ServicePage;
}

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "119+", label: "Projects delivered" },
  { value: "75+", label: "Happy clients" },
  { value: "24×7", label: "Pan-India support" },
];

const challenges = [
  "Backups scheduled but never tested for actual restore",
  "Silent backup failures nobody noticed for weeks",
  "Ransomware encrypting both production data and its backups",
  "No defined recovery time — nobody knows how long downtime will last",
  "A single point of physical failure — fire, flood, or theft — with no offsite copy",
  "No business continuity plan for operations during a major disruption",
];

const deliverables = [
  {
    num: "01",
    title: "Automated Backup",
    tag: "Servers, databases, applications, endpoints",
    items: [
      "Scheduled backup jobs across your entire estate",
      "Application-consistent backups for databases",
      "Endpoint backup for laptops and workstations",
    ],
    Icon: ServerIcon,
  },
  {
    num: "02",
    title: "Offsite & Cloud Backup",
    tag: "Protection even if your office is lost",
    items: [
      "Geographically separate backup copies",
      "Cloud storage tiers matched to retention needs",
      "Encrypted transfer and storage at rest",
    ],
    Icon: CloudIcon,
  },
  {
    num: "03",
    title: "Disaster Recovery Planning",
    tag: "Defined RPO/RTO with a clear recovery path",
    items: [
      "RPO and RTO defined per system criticality",
      "Documented, step-by-step recovery runbooks",
      "Failover and failback procedures",
    ],
    Icon: RefreshIcon,
  },
  {
    num: "04",
    title: "Business Continuity Plans",
    tag: "Keep operations running through disruption",
    items: [
      "Critical process mapping and dependencies",
      "Alternate operating procedures during downtime",
      "Communication plans for staff and customers",
    ],
    Icon: ShieldIcon,
  },
  {
    num: "05",
    title: "Regular Restore Testing",
    tag: "We verify your backups actually restore",
    items: [
      "Scheduled test restores, not just backup jobs",
      "Full and partial recovery drills",
      "Written proof of recoverability for audits",
    ],
    Icon: RefreshIcon,
  },
  {
    num: "06",
    title: "24x7 Monitoring & Alerting",
    tag: "Of backup jobs, with alerting",
    items: [
      "Real-time job success/failure monitoring",
      "Immediate alerting on failed or missed backups",
      "Monthly backup health and compliance reports",
    ],
    Icon: MonitorIcon,
  },
];

const backupTypes = [
  { type: "Full Backup", copies: "All data, every time", backupSpeed: "Slowest", restoreSpeed: "Fastest — single copy needed" },
  { type: "Incremental Backup", copies: "Only changes since the last backup of any type", backupSpeed: "Fastest", restoreSpeed: "Slowest — needs full + every increment" },
  { type: "Differential Backup", copies: "All changes since the last full backup", backupSpeed: "Moderate", restoreSpeed: "Moderate — needs full + latest differential" },
];

const drTiers = [
  { tier: "Tier 1", criticality: "Mission-critical (core banking, e-commerce checkout)", rto: "Under 1 hour", rpo: "Near-zero (continuous replication)" },
  { tier: "Tier 2", criticality: "Business-critical (ERP, email, CRM)", rto: "1–4 hours", rpo: "15 minutes – 1 hour" },
  { tier: "Tier 3", criticality: "Important (internal tools, file shares)", rto: "4–24 hours", rpo: "4–24 hours" },
  { tier: "Tier 4", criticality: "Non-critical (archives, dev/test systems)", rto: "72+ hours", rpo: "24–72 hours" },
];

const industries = [
  { title: "BFSI", desc: "Near-zero RPO for core banking, with regulator-ready audit trails." },
  { title: "Manufacturing", desc: "Continuity plans that keep plant systems and ERP running." },
  { title: "Healthcare", desc: "Backup for patient records with strict data protection compliance." },
  { title: "Retail & E-commerce", desc: "Fast recovery to protect revenue during peak trading periods." },
  { title: "Government / PSU", desc: "Business continuity planning aligned to public-sector mandates." },
];

export default function BackupRecoveryLanding({ service }: Props) {
  const problem = service.sections.find((s) => s.heading === "The Problem");
  const whatYouGet = service.sections.find((s) => s.heading === "What You Get");
  const whyChoose = service.sections.find((s) => s.heading === "Why Choose CoreGenix");

  return (
    <main>
      {/* Hero */}
      <section className="br-hero">
        <div className="container">
          <Reveal as="span" className="br-eyebrow" delay={1}>
            <span className="br-dot" />
            Cloud Managed Services
          </Reveal>
          <Reveal delay={2}>
            <h1 className="br-hero-title">{service.h1}</h1>
          </Reveal>
          <Reveal as="p" className="br-hero-desc" delay={3}>
            {service.intro}
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
            <h2>What is data backup and recovery?</h2>
          </Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Data backup and recovery is the practice of copying business data to a safe, separate location and restoring it after loss — whether from ransomware, hardware failure, human error, or physical disaster. CoreGenix delivers this as a managed service across automated backup, offsite and cloud storage, disaster recovery planning with defined RPO/RTO, and regular restore testing, so recovery is proven, not assumed.</p>
          </Reveal>
        </div>
      </section>

      {/* Challenge */}
      <section className="br-challenge">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>The problem we solve</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Ransomware, hardware failure, human error, or a fire in the server room — data loss happens to businesses that &quot;thought they were covered.&quot;
            </Reveal>
          </div>
          <div className="br-challenge-grid">
            {challenges.map((item, i) => (
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
          {problem && (
            <Reveal as="div" className="br-challenge-note" delay={3}>
              {problem.body.map((line) => {
                const parts = line.split(". ");
                if (parts.length > 1) {
                  const first = parts[0] + ".";
                  const rest = parts.slice(1).join(". ");
                  return <p key={line}>{first} <strong>{rest}</strong></p>;
                }
                return <p key={line}>{line}</p>;
              })}
            </Reveal>
          )}
        </div>
      </section>

      {/* What We Deliver */}
      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>What we deliver</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A complete backup and recovery engagement — from daily backup jobs to a tested disaster recovery plan.
            </Reveal>
          </div>
          {deliverables.map((d) => (
            <Reveal key={d.num} delay={1}>
              <div className="br-phase">
                <span className="br-phase-num">{d.num}</span>
                <div className="br-phase-header">
                  <d.Icon className="br-phase-icon" />
                  <div>
                    <h3>{d.title}</h3>
                    <p className="br-phase-tag">{d.tag}</p>
                  </div>
                </div>
                <ul className="br-phase-list">
                  {d.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RPO vs RTO */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>RPO vs. RTO, explained</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              The two numbers that actually define your recovery plan — and what &quot;acceptable loss&quot; and &quot;acceptable downtime&quot; mean for your business.
            </Reveal>
          </div>
          <div className="br-rpo-rto-grid">
            <Reveal className="br-rpo-cell" delay={1}>
              <h3><ClockIcon className="br-rpo-icon" /> RPO — Recovery Point Objective</h3>
              <p>The maximum acceptable amount of data loss, measured in time. If your RPO is 4 hours, your last good backup can be no more than 4 hours old when disaster strikes.</p>
              <p className="br-rpo-axis">Answers: &quot;How much data can we afford to lose?&quot;</p>
            </Reveal>
            <Reveal className="br-rpo-cell" delay={2}>
              <h3><RefreshIcon className="br-rpo-icon" /> RTO — Recovery Time Objective</h3>
              <p>The maximum acceptable downtime before systems must be restored and operational again. If your RTO is 2 hours, operations must resume within 2 hours of an outage.</p>
              <p className="br-rpo-axis">Answers: &quot;How long can we afford to be down?&quot;</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3-2-1 Rule */}
      <section className="br-rule">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>The 3-2-1 backup rule</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              The industry-standard approach CoreGenix builds every backup strategy around — designed specifically to survive ransomware and physical disasters.
            </Reveal>
          </div>
          <div className="br-rule-grid">
            {[
              { num: "3", title: "Copies of your data", desc: "The original plus two backup copies — one failure never means total data loss." },
              { num: "2", title: "Different storage media", desc: "Spread across two different media types (e.g., disk and cloud) so one technology failure can't wipe out everything." },
              { num: "1", title: "Copy stored offsite", desc: "At least one copy geographically separate, protecting against fire, flood, theft, or site-wide ransomware." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={(i % 3) + 1}>
                <div className="br-rule-item">
                  <span className="br-rule-big">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Backup Types Table */}
      <section className="br-compare">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Full vs. incremental vs. differential backup</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              The three core backup methods, and the trade-off each one makes between backup speed and restore speed.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>What it copies</th>
                    <th>Backup speed</th>
                    <th>Restore speed</th>
                  </tr>
                </thead>
                <tbody>
                  {backupTypes.map((b) => (
                    <tr key={b.type}>
                      <td>{b.type}</td>
                      <td>{b.copies}</td>
                      <td>{b.backupSpeed}</td>
                      <td>{b.restoreSpeed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DR Tiers Table */}
      <section className="br-tiers">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Disaster recovery tiers</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Not every system needs the same recovery speed. CoreGenix tiers systems by criticality to control cost without compromising what matters most.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table br-table-tiers">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Criticality</th>
                    <th>Typical RTO</th>
                    <th>Typical RPO</th>
                  </tr>
                </thead>
                <tbody>
                  {drTiers.map((t) => (
                    <tr key={t.tier}>
                      <td className="br-tier-label">{t.tier}</td>
                      <td>{t.criticality}</td>
                      <td>{t.rto}</td>
                      <td>{t.rpo}</td>
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
              <h2>Backup & DR for every sector</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Recovery plans tuned to the compliance and continuity needs of your industry.
            </Reveal>
          </div>
          <div className="br-ind-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 3) + 1}>
                <div className="br-ind-cell">
                  <FactoryIcon className="br-ind-icon" />
                  <h4>{ind.title}</h4>
                  <p>{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      {whatYouGet && (
        <section className="br-outcomes">
          <div className="container">
            <div className="br-section-head br-section-head-light">
              <Reveal delay={1}>
                <h2>Outcomes that move your business</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                What you get once backup and recovery are actually managed, not just scheduled.
              </Reveal>
            </div>
            <div className="br-outcome-grid">
              {whatYouGet.body.map((item, i) => (
                <Reveal key={item} delay={(i % 4) + 1}>
                  <div className="br-outcome-item">
                    <CheckIcon className="br-outcome-check" />
                    <p>{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose */}
      {whyChoose && (
        <section className="br-why">
          <div className="container">
            <div className="br-section-head">
              <Reveal delay={1}>
                <h2>The CoreGenix difference</h2>
              </Reveal>
              <Reveal as="p" className="br-sub" delay={2}>
                What sets our backup and recovery delivery apart from &quot;set it and forget it.&quot;
              </Reveal>
            </div>
            <div className="br-why-grid">
              {whyChoose.body.map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="br-why-cell">
                    <span className="br-why-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{item}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="br-faq">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Frequently asked questions</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Straight answers about backup, disaster recovery, and RPO/RTO.
            </Reveal>
          </div>
          <div className="br-faq-list">
            {service.faq.map((f, i) => (
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
              <h2>Test your backups before disaster tests you</h2>
              <p className="br-closing-sub">Get a free backup assessment and find out whether your current backups would actually restore.</p>
              <div className="br-closing-meta">
                <span>Call <a href="tel:+918355958119">+91 83559 58119</a></span>
                <span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span>
                <span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span>
              </div>
              <Link href="/contact" className="btn btn-grad">
                Get free consultation
                <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
