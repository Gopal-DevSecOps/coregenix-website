import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CtaSection from "./CtaSection";
import { CheckIcon, ArrowRightIcon, ClockIcon, RefreshIcon } from "./Icons";
import type { SolutionPage } from "@/data/solutionPages";

interface Props { service: SolutionPage; }

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "119+", label: "Projects delivered" },
  { value: "75+", label: "Happy clients" },
  { value: "24×7", label: "Pan-India support" },
];

const whatWeCover = [
  "DR strategy design",
  "Recovery architecture",
  "Business continuity planning",
  "Backup integration",
  "Tested failover",
  "Incident playbooks",
];

const challenges = [
  "A DR plan that exists only as a document nobody has tested",
  "No defined RPO or RTO — nobody knows how much data is at risk or how long recovery takes",
  "Backup exists, but no replicated systems ready to actually fail over",
  "IT recovery plans that ignore how the rest of the business keeps running",
  "No clear playbook — the first hour of a disaster spent figuring out who does what",
  "No board-ready documentation to satisfy auditors or insurers",
];

const deliverables = [
  { num: "01", title: "DR Strategy Design", tag: "RPO and RTO defined for your business", items: ["Business Impact Analysis to prioritize critical systems", "RPO and RTO defined per system, not one blanket target", "Recovery site strategy — hot, warm, or cold"] },
  { num: "02", title: "Recovery Architecture", tag: "Replicated systems, ready to fail over", items: ["Real-time or near-real-time replication for critical systems", "Failover and failback procedures documented and rehearsed", "Recovery infrastructure sized to actual RTO targets"] },
  { num: "03", title: "Business Continuity Planning", tag: "Keep operations running", items: ["Critical process mapping beyond IT systems", "Alternate operating procedures during downtime", "Staff and customer communication plans"] },
  { num: "04", title: "Backup Integration", tag: "DR layered on reliable backups", items: ["DR architecture built on top of tested backup systems", "Consistent RPO alignment between backup and DR", "Single view of both backup and recovery health"] },
  { num: "05", title: "Tested Failover", tag: "Regular DR drills, not just documentation", items: ["Scheduled failover drills, at least annually", "Tabletop exercises for business continuity scenarios", "Post-drill reports identifying gaps to fix"] },
  { num: "06", title: "Incident Playbooks", tag: "Clear steps when disaster strikes", items: ["Step-by-step runbooks by disaster scenario", "Defined roles and escalation paths", "Board-ready documentation for audits and insurers"] },
];

const hotWarmCold = [
  { label: "Fastest recovery", type: "Hot Site", description: "A fully replicated, ready-to-use environment that can take over almost instantly — highest cost, lowest RTO." },
  { label: "Balanced", type: "Warm Site", description: "Some infrastructure already in place, but final setup and data sync are needed before it's fully operational." },
  { label: "Lowest cost", type: "Cold Site", description: "Basic space and power with no pre-installed systems — lowest cost, but the longest time to activate." },
];

const drTiers = [
  { tier: "Tier 1", criticality: "Mission-critical (core banking, e-commerce checkout)", rto: "Under 1 hour", rpo: "Near-zero (continuous replication)" },
  { tier: "Tier 2", criticality: "Business-critical (ERP, email, CRM)", rto: "1–4 hours", rpo: "15 minutes – 1 hour" },
  { tier: "Tier 3", criticality: "Important (internal tools, file shares)", rto: "4–24 hours", rpo: "4–24 hours" },
  { tier: "Tier 4", criticality: "Non-critical (archives, dev/test systems)", rto: "72+ hours", rpo: "24–72 hours" },
];

const bcpComponents = [
  "Business Impact Analysis (BIA)",
  "Risk Assessment",
  "Emergency Response Plan",
  "Crisis Communication Plan",
  "Alternate Site/Process Procedures",
  "Roles & Escalation Matrix",
  "Regular Testing & Review",
];

const industries = [
  { title: "BFSI", desc: "Near-zero RPO for core banking, with regulator-ready DR documentation." },
  { title: "Manufacturing", desc: "Continuity plans that keep plant systems and ERP running." },
  { title: "Healthcare", desc: "DR for patient records with strict data protection compliance." },
  { title: "Retail & E-commerce", desc: "Fast recovery to protect revenue during peak trading periods." },
  { title: "Government / PSU", desc: "Business continuity planning aligned to public-sector mandates." },
];

const drVsBcp = "Disaster recovery restores IT systems and data after a disruption — servers, applications, and infrastructure back online. Business continuity is broader: it covers how the entire business keeps functioning during that disruption, including manual workarounds, staff communication, supplier coordination, and customer service continuity — regardless of whether IT is fully restored yet. A DR plan without a BCP leaves the business unable to operate even after systems come back; a BCP without DR has no technical foundation to recover to. CoreGenix builds both together as one coordinated plan.";

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
                Get free consultation
                <ArrowRightIcon />
              </Link>
              <Link href="/solutions" className="btn btn-hero-secondary">
                View all solutions
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
                What is <span className="grad">disaster recovery and business continuity planning?</span>
              </>
            }
            desc="Disaster recovery (DR) is the process of restoring IT systems and data after a disruption, while business continuity planning (BCP) covers how the wider business keeps operating during that disruption. CoreGenix delivers both together — DR strategy with defined RPO/RTO, replicated recovery architecture, tested failover through regular drills, and business continuity plans covering critical processes beyond IT."
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
            eyebrow="The problem we solve"
            title={
              <>
                When disaster hits — fire, flood, cyber attack, power failure — <span className="grad">most businesses are caught unprepared</span>
              </>
            }
            desc="Systems go down, data is at risk, and nobody has a tested plan to recover."
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
            eyebrow="What we deliver"
            title={
              <>
                A complete DR &amp; BCP <span className="grad">engagement</span>
              </>
            }
            desc="Strategy, architecture, planning, and testing, under one accountable team."
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
            desc="The two numbers that actually define your recovery plan."
          />
          <div className="brr-rpo-grid">
            <Reveal className="brr-rpo-cell" delay={1}>
              <h3><ClockIcon className="brr-rpo-icon" /> RPO — Recovery Point Objective</h3>
              <p>The maximum acceptable amount of data loss, measured in time. If your RPO is 4 hours, your last good backup or replica can be no more than 4 hours old when disaster strikes.</p>
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

      {/* Hot vs Warm vs Cold */}
      <section className="section brr-rule">
        <div className="container">
          <SectionHeading
            center
            eyebrow="DR Site Types"
            title={
              <>
                Hot site vs. warm site <span className="grad">vs. cold site</span>
              </>
            }
            desc="Three levels of recovery site readiness — the right one depends on your RTO and budget."
          />
          <div className="brr-rule-grid">
            {hotWarmCold.map((item, i) => (
              <Reveal key={item.type} delay={(i % 3) + 1}>
                <div className="brr-rule-item">
                  <span className="brr-site-label">{item.label}</span>
                  <h3>{item.type}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DR tiers table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="DR Tiers"
            title={
              <>
                DR tiers by <span className="grad">system criticality</span>
              </>
            }
            desc="Not every system needs the same recovery speed. CoreGenix tiers systems by criticality to control cost without compromising what matters most."
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

      {/* DR vs BCP paragraph */}
      <section className="section brr-what">
        <div className="container">
          <SectionHeading
            center
            eyebrow="DR vs. business continuity"
            title={
              <>
                DR restores, <span className="grad">BCP keeps you running</span>
              </>
            }
            desc={drVsBcp}
          />
        </div>
      </section>

      {/* BCP components */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="BCP Components"
            title={
              <>
                Core components of a <span className="grad">business continuity plan</span>
              </>
            }
            desc="What goes into a complete BCP, beyond the technical recovery plan."
          />
          <div className="brr-check-grid">
            {bcpComponents.map((item, i) => (
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

      {/* Industries */}
      <section className="section brr-audience">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Who Needs It"
            title={
              <>
                DR &amp; BCP <span className="grad">for every sector</span>
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
              desc="What you get once DR and BCP are actually planned and tested."
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
              eyebrow="The CoreGenix difference"
              title={
                <>
                  What sets our DR &amp; BCP <span className="grad">delivery apart</span>
                </>
              }
              desc="What sets our DR and BCP delivery apart from a document nobody has opened."
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
            desc="Straight answers about DR, BCP, RPO/RTO, and recovery sites."
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
      <CtaSection title="Don't plan for disaster during a disaster" desc={service.cta} />
    </>
  );
}