import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
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

export default function DisasterRecoveryLanding({ service }: Props) {
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
              IT Infrastructure Solutions
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
              <Link href="/solutions" className="btn btn-hero-secondary">
                View All Solutions
              </Link>
            </Reveal>
          </div>
          <Reveal className="brr-hero-media" delay={3}>
            <div className="brr-hero-img">
              <Image
                src="/images/coregenix/service-4.jpg"
                alt="Disaster recovery and business continuity"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Disaster recovery by the numbers">
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

      {/* What is */}
      <section className="section brr-what">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Disaster Recovery & BCP"
            title={
              <>
                What is <span className="grad">disaster recovery and business continuity?</span>
              </>
            }
            desc="Disaster recovery and business continuity planning ensures your business can survive and recover from any disruption — cyber attack, natural disaster, power failure, or system outage. CoreGenix builds tested DR/BCP plans with defined RPO/RTO, failover procedures, and incident playbooks so you know exactly what to do when something goes wrong."
          />
          <div className="brr-check-grid">
            {[
              "DR strategy design",
              "Recovery architecture",
              "Business continuity planning",
              "Backup integration",
              "Tested failover",
              "Incident playbooks",
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

      {/* Challenge */}
      <section className="section brr-challenge section-dark">
        <div className="container">
          <SectionHeading
            center
            light
            eyebrow="The Problem We Solve"
            title={
              <>
                When disaster hits, <span className="grad">most businesses are unprepared</span>
              </>
            }
            desc="When disaster hits — fire, flood, cyber attack, power failure — most businesses are caught unprepared. Systems go down, data is at risk, and nobody has a tested plan to recover."
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
          <Reveal as="div" className="brr-challenge-note" delay={3}>
            <p>Every hour of downtime costs money and reputation. <strong>The businesses that survive disruption are the ones that planned for it before it happened.</strong></p>
          </Reveal>
        </div>
      </section>

      {/* Deliver */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What We Deliver"
            title={
              <>
                Complete DR & BCP <span className="grad">Engagements</span>
              </>
            }
            desc="A complete DR and BCP engagement — strategy, architecture, testing, and playbooks, under one accountable team."
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
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Recovery Objectives"
            title={
              <>
                Understanding <span className="grad">RPO and RTO</span>
              </>
            }
            desc="RPO and RTO define how much data you can lose and how fast you need to recover."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>RPO</th>
                  <th>RTO</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {rpoRtoData.map((row) => (
                  <tr key={row.rpo}>
                    <td><strong>{row.rpo}</strong></td>
                    <td>{row.rto}</td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hot vs Warm vs Cold */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="DR Site Types"
            title={
              <>
                Hot vs. warm <span className="grad">vs. cold DR sites</span>
              </>
            }
            desc="The right DR site type depends on your RTO and budget."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Site Type</th>
                  <th>Description</th>
                  <th>RTO</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {hotWarmCold.map((row) => (
                  <tr key={row.type}>
                    <td><strong>{row.type}</strong></td>
                    <td>{row.description}</td>
                    <td>{row.rto}</td>
                    <td>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DR vs BCP */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="DR vs. BCP"
            title={
              <>
                DR vs. <span className="grad">BCP</span>
              </>
            }
            desc="These two work together but serve different purposes."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Disaster Recovery</th>
                  <th>Business Continuity</th>
                </tr>
              </thead>
              <tbody>
                {drVsBcp.map((row) => (
                  <tr key={row.factor}>
                    <td><strong>{row.factor}</strong></td>
                    <td>{row.dr}</td>
                    <td>{row.bcp}</td>
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
                DR & BCP <span className="grad">for every sector</span>
              </>
            }
            desc="Recovery and continuity plans tuned to the compliance and uptime needs of your industry."
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
              desc="What you get from properly designed and tested DR/BCP."
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
              desc="What sets our DR/BCP delivery apart."
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
            desc="Straight answers about disaster recovery and business continuity."
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
      <section className="brr-closing">
        <div className="container brr-closing-inner">
          <Reveal>
            <h2 className="section-title">Don&apos;t plan for disaster <span className="grad">during a disaster</span></h2>
            <p className="brr-closing-sub">{service.cta}</p>
            <div className="brr-closing-meta">
              <span>Call <a href="tel:+918355958119">+91 83559 58119</a></span>
              <span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span>
              <span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span>
            </div>
            <Link href="/contact" className="btn btn-grad">
              Get Free Consultation
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
