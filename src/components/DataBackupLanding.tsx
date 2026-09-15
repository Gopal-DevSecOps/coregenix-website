import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CtaSection from "./CtaSection";
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

export default function DataBackupLanding({ service }: Props) {
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
                src="/images/coregenix/service-1.jpg"
                alt="Data backup solutions"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Data backup solutions by the numbers">
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
            eyebrow="Data Backup & Recovery"
            title={
              <>
                What are <span className="grad">data backup solutions?</span>
              </>
            }
            desc="Data backup solutions protect your business data through automated, tested, and verified backup — on-premise and in the cloud. CoreGenix builds 3-2-1 backup strategies with regular restore testing, so you know your backups work before disaster strikes."
          />
          <div className="brr-check-grid">
            {[
              "Automated backup",
              "On-premise backup",
              "Cloud backup",
              "3-2-1 strategy",
              "Restore testing",
              "Monitoring & alerting",
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
                Most businesses discover their backup <span className="grad">was never working</span>
              </>
            }
            desc="Most businesses discover their backup was never working — the day they need it. Failed jobs, untested restores, and data spread across systems with no single plan."
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
            <p>Data loss isn&apos;t an &quot;if.&quot; It&apos;s a &quot;when.&quot; <strong>Backups that actually restore are the only answer</strong> — and the only way to know is to test them.</p>
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
                Complete Backup <span className="grad">Engagements</span>
              </>
            }
            desc="A complete backup engagement — automated backup, 3-2-1 strategy, restore testing, and monitoring, under one accountable team."
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

      {/* On-premise vs cloud */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Backup Locations"
            title={
              <>
                On-premise <span className="grad">vs. cloud backup</span>
              </>
            }
            desc="How the two backup locations compare."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>On-Premise</th>
                  <th>Cloud</th>
                </tr>
              </thead>
              <tbody>
                {onPremVsCloud.map((row) => (
                  <tr key={row.factor}>
                    <td><strong>{row.factor}</strong></td>
                    <td>{row.onPrem}</td>
                    <td>{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3-2-1 chips */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="3-2-1 Backup Rule"
            title={
              <>
                The industry standard for <span className="grad">data protection</span>
              </>
            }
            desc="The industry standard for data protection — CoreGenix implements and manages it for you."
          />
          <div className="brr-tags">
            {gfsChips.map((chip, i) => (
              <Reveal key={chip} delay={(i % 4) + 1}>
                <span className="brr-tag">{chip}</span>
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
                Data backup <span className="grad">for every sector</span>
              </>
            }
            desc="Backup strategies tuned to the compliance and recovery needs of your industry."
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
              desc="What you get from properly designed and tested backup."
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
              desc="What sets our backup delivery apart."
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
            desc="Straight answers about backup strategy, cost, and testing."
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
      <CtaSection title="Get a backup solution that actually restores" />
    </>
  );
}
