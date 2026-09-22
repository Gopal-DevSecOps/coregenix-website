import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CtaSection from "./CtaSection";
import {
  RefreshIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
} from "./Icons";
import type { ServicePage } from "@/data/services";

interface Props {
  service: ServicePage;
}

const heroStats = [
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
  },
];

const backupTypes = [
  { type: "Full Backup", copies: "All data, every time", backupSpeed: "Slowest", backupClass: "slow", restoreSpeed: "Fastest", restoreNote: "single copy needed", restoreClass: "fast", recommended: false },
  { type: "Incremental Backup", copies: "Only changes since the last backup of any type", backupSpeed: "Fastest", backupClass: "fast", restoreSpeed: "Slowest", restoreNote: "needs full + every increment", restoreClass: "slow", recommended: false },
  { type: "Differential Backup", copies: "All changes since the last full backup", backupSpeed: "Moderate", backupClass: "moderate", restoreSpeed: "Moderate", restoreNote: "needs full + latest differential", restoreClass: "moderate", recommended: true },
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
    <>
      {/* Hero */}
      <section className="brr-hero">
        <div className="float-shape float-shape-1" aria-hidden="true" />
        <div className="float-shape float-shape-2" aria-hidden="true" />
        <div className="container brr-hero-grid">
          <div className="brr-hero-content">
            <Reveal as="span" className="eyebrow" delay={1}>
              Cloud Managed Services
            </Reveal>
            <Reveal delay={2}>
              <h1 className="section-title brr-hero-title">
                {service.h1.split("—").map((part, i) =>
                  i === 0 ? part : <span key={i} className="grad"> — {part}</span>
                )}
              </h1>
            </Reveal>
            <Reveal as="p" className="brr-hero-desc" delay={3}>
              {service.intro}
            </Reveal>
            <Reveal as="div" className="brr-hero-actions" delay={4}>
              <Link href="/contact" className="btn btn-grad">
                Get Free Consultation
                <ArrowRightIcon />
              </Link>
              <Link href="/services" className="btn btn-hero-secondary">
                View All Services
              </Link>
            </Reveal>
          </div>
          <Reveal className="brr-hero-media" delay={3}>
            <div className="brr-hero-img">
              <Image
                src="/images/coregenix/hero-1.png"
                alt="Data backup and disaster recovery"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Backup & recovery by the numbers">
        <div className="container">
          <div className="brr-stats-grid">
            {heroStats.map((stat, i) => (
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

      {/* What is backup & recovery */}
      <section className="section brr-what">
        <div className="container">
          <SectionHeading
            center
            
            title={
              <>
                What is <span className="grad">data backup and recovery?</span>
              </>
            }
            desc="Data backup and recovery is the practice of copying business data to a safe, separate location and restoring it after loss — whether from ransomware, hardware failure, human error, or physical disaster.
            CoreGenix delivers this as a managed service across automated backup, offsite and cloud storage, disaster recovery planning with defined RPO/RTO, and regular restore testing, so recovery is proven, not assumed."
          />
        
        </div>
      </section>

      {/* Challenge - dark band */}
      <section className="section brr-challenge section-dark">
        <div className="container">
          <SectionHeading
            center
            light
            eyebrow="The Problem We Solve"
            title={
              <>
                Data loss happens to businesses that <span className="grad">thought they were covered</span>
              </>
            }
            desc="Ransomware, hardware failure, human error, or a fire in the server room — data loss happens to businesses that thought they were covered."
          />
          <div className="brr-challenge-grid">
            {challenges.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1}>
                <div className="brr-challenge-card">
                  <p>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {problem && (
            <Reveal as="div" className="brr-challenge-note" delay={3}>
              {problem.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* Deliver - What we deliver */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What We Deliver"
            title={
              <>
                Complete Backup &amp; Recovery <span className="grad">Solutions</span>
              </>
            }
            desc="A complete backup and recovery engagement — from daily backup jobs to a tested disaster recovery plan."
          />
          <div className="brr-deliver-grid">
            {deliverables.map((d, i) => (
              <Reveal key={d.num} delay={(i % 3) + 1}>
                <div className="brr-deliver-card">
                  <span className="brr-deliver-num">{d.num}</span>
                  <h3>{d.title}</h3>
                  <p className="brr-deliver-tag">{d.tag}</p>
                  <ul className="brr-deliver-list">
                    {d.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RPO vs RTO */}
      <section className="section brr-rpo section-dark">
        <div className="container">
          <SectionHeading
            center
            light
            eyebrow="RPO vs. RTO"
            title={
              <>
                The two numbers that define <span className="grad">your recovery plan</span>
              </>
            }
            desc="What 'acceptable loss' and 'acceptable downtime' actually mean for your business."
          />
          <div className="brr-rpo-grid">
            <Reveal className="brr-rpo-cell" delay={1}>
              <h3><ClockIcon className="brr-rpo-icon" /> RPO — Recovery Point Objective</h3>
              <p>The maximum acceptable amount of data loss, measured in time. If your RPO is 4 hours, your last good backup can be no more than 4 hours old when disaster strikes.</p>
              <p className="brr-rpo-axis">Answers: &quot;How much data can we afford to lose?&quot;</p>
            </Reveal>
            <Reveal className="brr-rpo-cell" delay={2}>
              <h3><RefreshIcon className="brr-rpo-icon" /> RTO — Recovery Time Objective</h3>
              <p>The maximum acceptable downtime before systems must be restored and operational again. If your RTO is 2 hours, operations must resume within 2 hours of an outage.</p>
              <p className="brr-rpo-axis">Answers: &quot;How long can we afford to be down?&quot;</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3-2-1 Rule */}
      <section className="section brr-rule">
        <div className="container">
          <SectionHeading
            center
            eyebrow="The 3-2-1 Backup Rule"
            title={
              <>
                Built to survive <span className="grad">ransomware &amp; disaster</span>
              </>
            }
            desc="The industry-standard approach CoreGenix builds every backup strategy around — designed specifically to survive ransomware and physical disasters."
          />
          <div className="brr-rule-grid">
            {[
              { num: "3", title: "Copies of your data", desc: "The original plus two backup copies — one failure never means total data loss." },
              { num: "2", title: "Different storage media", desc: "Spread across two different media types (e.g., disk and cloud) so one technology failure can't wipe out everything." },
              { num: "1", title: "Copy stored offsite", desc: "At least one copy geographically separate, protecting against fire, flood, theft, or site-wide ransomware." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={(i % 3) + 1}>
                <div className="brr-rule-item">
                  <span className="brr-rule-big">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Backup types table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Backup Methods"
            title={
              <>
                Full vs. incremental vs. <span className="grad">differential</span>
              </>
            }
            desc="The three core backup methods, and the trade-off each one makes between backup speed and restore speed."
          />
          <div className="brr-table-wrap">
            <table className="brr-table brr-method-table">
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
                  <tr key={b.type} className={b.recommended ? "brr-method-row brr-method-row-rec" : "brr-method-row"}>
                    <td className="brr-method-type">
                      <strong>{b.type}</strong>
                      {b.recommended && <span className="brr-method-badge">Recommended</span>}
                    </td>
                    <td className="brr-method-copies">{b.copies}</td>
                    <td className="brr-method-speed">
                      <span className={`brr-speed-pill brr-speed-${b.backupClass}`}>{b.backupSpeed}</span>
                    </td>
                    <td className="brr-method-restore">
                      <span className={`brr-speed-pill brr-speed-${b.restoreClass}`}>{b.restoreSpeed}</span>
                      <span className="brr-speed-note">{b.restoreNote}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DR Tiers table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Disaster Recovery Tiers"
            title={
              <>
                Not every system needs <span className="grad">the same speed</span>
              </>
            }
            desc="CoreGenix tiers systems by criticality to control cost without compromising what matters most."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong className="brr-tier">{t.tier}</strong></td>
                    <td>{t.criticality}</td>
                    <td>{t.rto}</td>
                    <td>{t.rpo}</td>
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
                Backup &amp; DR for <span className="grad">every sector</span>
              </>
            }
            desc="Recovery plans tuned to the compliance and continuity needs of your industry."
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

      {/* Outcomes */}
      {whatYouGet && (
        <section className="section brr-outcomes section-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="Outcomes"
              title={
                <>
                  Outcomes that <span className="grad">move your business</span>
                </>
              }
              desc="What you get once backup and recovery are actually managed, not just scheduled."
            />
            <div className="brr-outcome-grid">
              {whatYouGet.body.map((item, i) => (
                <Reveal key={item} delay={(i % 4) + 1}>
                  <div className="brr-outcome-item">
                    <span className="ce-check">
                      <CheckIcon />
                    </span>
                    <p>{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why choose */}
      {whyChoose && (
        <section className="section brr-why">
          <div className="container">
            <SectionHeading
              center
              eyebrow="The CoreGenix Difference"
              title={
                <>
                  Why teams choose <span className="grad">CoreGenix</span>
                </>
              }
              desc="What sets our backup and recovery delivery apart from 'set it and forget it.'"
            />
            <div className="brr-why-grid">
              {whyChoose.body.map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="brr-why-card">
                    <span className="brr-why-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{item}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
            desc="Straight answers about backup, disaster recovery, and RPO/RTO."
          />
          <div className="brr-faq-list">
            {service.faq.map((f) => (
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
      <CtaSection title="Test your backups before disaster tests you" />
    </>
  );
}