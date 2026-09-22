import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CtaSection from "./CtaSection";
import { CheckIcon, ArrowRightIcon } from "./Icons";
import type { ServicePage } from "@/data/services";

interface Props {
  service: ServicePage;
}

const stats = [
  { value: "22+", label: "Years of Experience" },
  { value: "119+", label: "Projects Delivered" },
  { value: "75+", label: "Happy Clients" },
  { value: "24×7", label: "Pan-India Support" },
];

const challenges = [
  "Workloads moved without a plan, left orphaned and unmanaged",
  "Unpredictable cloud bills with no cost governance in place",
  "Security and compliance gaps introduced during rushed migration",
  "Vendor lock-in from choosing a platform before assessing fit",
  "No clear answer on which workloads should move, and which shouldn't",
  "Migration delays caused by undiscovered application dependencies",
];

const phases = [
  {
    num: "01",
    title: "Current-State Assessment",
    tag: "Deliverable: Current-State Assessment Report",
    items: ["Full workload and application inventory", "Dependency and integration mapping", "Technical debt and end-of-life risk review"],
  },
  {
    num: "02",
    title: "Cloud Readiness Analysis",
    tag: "Deliverable: Readiness Scorecard",
    items: ["Application compatibility and complexity scoring", "6 Rs classification for every workload", "Risk flags for compliance-sensitive systems"],
  },
  {
    num: "03",
    title: "Cloud Selection",
    tag: "Deliverable: Platform Recommendation",
    items: ["Azure vs AWS vs private vs hybrid comparison", "Matched to compliance, latency, and cost needs", "Vendor-neutral — no reseller bias"],
  },
  {
    num: "04",
    title: "Migration Roadmap",
    tag: "Deliverable: Phased Migration Plan",
    items: ["Wave planning by priority and risk", "Pilot migration before full rollout", "Rollback plans for every phase"],
  },
  {
    num: "05",
    title: "Cost Modeling",
    tag: "Deliverable: TCO & Cost Projection",
    items: ["Total cost of ownership analysis", "Reserved instance & commitment planning", "FinOps guardrails to prevent bill shock"],
  },
  {
    num: "06",
    title: "Governance & Security",
    tag: "Deliverable: Landing Zone & Policy Framework",
    items: ["Landing zone design and access controls", "Policy-as-code and tagging standards", "Compliance mapping to ISO 27001 & DPDPA"],
  },
];

const sixRs = [
  { name: "Rehost", sub: "Lift-and-shift", desc: "Move the workload to the cloud as-is, with minimal changes. Fastest path to migration, ideal for time-boxed data center exits." },
  { name: "Replatform", sub: "Lift, tinker & shift", desc: "Make small optimizations during migration — such as moving to a managed database — without changing the core architecture." },
  { name: "Repurchase", sub: "Move to SaaS", desc: "Replace an existing application with a SaaS equivalent, reducing infrastructure and maintenance overhead entirely." },
  { name: "Refactor", sub: "Re-architect", desc: "Redesign the application to be cloud-native — highest effort, but unlocks scalability, resilience, and cost efficiency." },
  { name: "Retain", sub: "Keep on-premises", desc: "Some workloads stay put — due to compliance, latency, or cost reasons — and are revisited in a later phase." },
  { name: "Retire", sub: "Decommission", desc: "Unused or redundant systems are switched off entirely, removing cost and risk from the environment before migration." },
];

const cloudComparison = [
  { factor: "Best for", public: "Variable workloads, fast scaling", private: "Sensitive data, strict compliance", hybrid: "Mixed workloads, gradual migration" },
  { factor: "Cost model", public: "Pay-as-you-go (OPEX)", private: "Upfront + maintenance (CAPEX)", hybrid: "Blended CAPEX + OPEX" },
  { factor: "Control", public: "Shared responsibility model", private: "Full infrastructure control", hybrid: "Control where it matters most" },
  { factor: "Compliance fit", public: "Good, with configuration", private: "Strongest, dedicated environment", hybrid: "Strong — sensitive data stays on-prem" },
  { factor: "Typical adopters", public: "Startups, digital-first businesses", private: "BFSI, government, healthcare", hybrid: "Enterprises mid-way through migration" },
];

const cloudColumns: { key: "public" | "private" | "hybrid"; title: string }[] = [
  { key: "public", title: "Public Cloud" },
  { key: "private", title: "Private Cloud" },
  { key: "hybrid", title: "Hybrid Cloud" },
];

const industries = [
  { title: "BFSI", desc: "Hybrid strategies that keep sensitive data compliant with RBI and DPDPA norms." },
  { title: "Manufacturing", desc: "Cloud roadmaps that connect plant systems with modern ERP and analytics." },
  { title: "Healthcare", desc: "Compliant cloud environments for patient data and clinical systems." },
  { title: "Retail & E-commerce", desc: "Elastic, cost-efficient cloud built for seasonal demand spikes." },
  { title: "Government / PSU", desc: "Private and hybrid cloud strategies aligned to data sovereignty requirements." },
];

export default function CloudStrategyLanding({ service }: Props) {
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
                src="/images/coregenix/hero-2.png"
                alt="Cloud strategy consulting"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Cloud strategy by the numbers">
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
            eyebrow="Cloud Strategy Consulting"
            title={
              <>
                What is <span className="grad">cloud strategy consulting?</span>
              </>
            }
            desc="Assessing your current IT environment, determining which workloads are ready to move, selecting the right cloud model, and building a phased migration roadmap with cost modeling and governance planned in advance."
          />
          <div className="brr-check-grid">
            {[
              "Current-state assessment",
              "Cloud readiness analysis",
              "Vendor-neutral platform selection",
              "Phased migration roadmap",
              "Honest TCO & cost modeling",
              "Governance & security from day one",
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
                The cloud promise is real — <span className="grad">but only with a plan</span>
              </>
            }
            desc="Moving without a plan is how businesses end up with orphaned workloads, bill shock, and security gaps."
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
            <p>Wrong choices at the start are expensive later. <strong>CoreGenix answers the hard questions first</strong> — which workloads move, public or private or hybrid, and what it will actually cost.</p>
          </Reveal>
        </div>
      </section>

      {/* Phases */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="How We Work"
            title={
              <>
                End-to-end cloud strategy, <span className="grad">in six phases</span>
              </>
            }
            desc="A structured engagement that takes you from current state to a confident, low-risk cloud roadmap — with a concrete deliverable at every stage."
          />
          <div className="brr-deliver-grid">
            {phases.map((d, i) => (
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

      {/* 6 Rs */}
      <section className="section brr-rpo section-dark">
        <div className="container">
          <SectionHeading
            center
            light
            eyebrow="The 6 Rs"
            title={
              <>
                The 6 Rs of <span className="grad">cloud migration</span>
              </>
            }
            desc="Every workload gets classified into one of six migration strategies during the readiness analysis phase."
          />
          <div className="brr-rpo-grid brr-rpo-grid--six">
            {sixRs.map((r, i) => (
              <Reveal key={r.name} className="brr-rpo-cell" delay={(i % 2) + 1}>
                <h3>{r.name} <span className="brr-rpo-sub">— {r.sub}</span></h3>
                <p>{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="cloud-comparison">
        <div className="cloud-container">
          <SectionHeading
            center
            eyebrow="Compare"
            title={
              <>
                Which cloud model <span className="grad">fits your business?</span>
              </>
            }
            desc="Public, private, and hybrid cloud each solve different problems — the right fit depends on workload, compliance, and cost."
          />

          <Reveal delay={3}>
            <div className="comparison-shell">
              <div className="comparison-scroll">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      {cloudColumns.map((col) => (
                        <th key={col.key}>{col.title}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cloudComparison.map((row) => (
                      <tr key={row.factor}>
                        <td className="factor-cell">
                          <span className="factor-title">{row.factor}</span>
                        </td>
                        {cloudColumns.map((col) => (
                          <td key={col.key}>
                            <span className="comparison-value">{row[col.key]}</span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="scroll-hint">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                Swipe horizontally to compare cloud models
              </div>
            </div>
          </Reveal>
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
              desc="What you walk away with at the end of the engagement."
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
              desc="What sets our cloud strategy consulting apart from a typical reseller pitch."
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

      {/* Industries */}
      <section className="section brr-audience">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Who Needs It"
            title={
              <>
                Cloud strategy for <span className="grad">regulated sectors</span>
              </>
            }
            desc="Migration plans built around the compliance and uptime needs of your industry."
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
            desc="Straight answers about cloud strategy, migration, and cost."
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
      <CtaSection title="Ready to build a cloud strategy that actually fits?" />
    </>
  );
}