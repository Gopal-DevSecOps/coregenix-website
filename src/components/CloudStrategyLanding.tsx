import Link from "next/link";
import Reveal from "./Reveal";
import { CheckIcon, ArrowRightIcon } from "./Icons";
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
            <h2>What is cloud strategy consulting?</h2>
          </Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Cloud strategy consulting is the process of assessing an organization&apos;s current IT environment, determining which workloads are ready to move to the cloud, selecting the right cloud model — public (Azure, AWS), private, or hybrid — and building a phased migration roadmap with cost modeling and governance planned in advance. CoreGenix delivers this as a structured, vendor-neutral engagement for businesses across India.</p>
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
              The cloud promise is real — flexibility, scale, lower cost. But moving without a plan is how businesses end up with orphaned workloads, bill shock, and security gaps.
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
          <Reveal as="div" className="br-challenge-note" delay={3}>
            <p>Wrong choices at the start are expensive later. <strong>CoreGenix answers the hard questions first</strong> — which workloads move, public or private or hybrid, and what it will actually cost — before a single workload is touched.</p>
          </Reveal>
        </div>
      </section>

      {/* What We Do — Phases */}
      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>End-to-end cloud strategy, in six phases</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A structured engagement that takes you from current state to a confident, low-risk cloud roadmap — with a concrete deliverable at every stage.
            </Reveal>
          </div>
          {phases.map((d) => (
            <Reveal key={d.num} delay={1}>
              <div className="br-phase">
                <span className="br-phase-num">{d.num}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p className="br-phase-tag">{d.tag}</p>
                </div>
                <ul className="br-phase-list">
                  {d.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6 Rs */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>The 6 Rs of cloud migration</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Every workload gets classified into one of six migration strategies during the readiness analysis phase — this determines effort, cost, and timeline.
            </Reveal>
          </div>
          <div className="br-rpo-rto-grid">
            {sixRs.map((r, i) => (
              <Reveal key={r.name} className="br-rpo-cell" delay={(i % 2) + 1}>
                <h3>{r.name} <span style={{ fontWeight: 400, fontSize: "14px", color: "var(--text-muted)" }}>— {r.sub}</span></h3>
                <p>{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Comparison Table */}
      <section className="br-compare">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Which cloud model fits your business?</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Public, private, and hybrid cloud each solve different problems — the right fit depends on workload, compliance, and cost.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Public Cloud (Azure / AWS)</th>
                    <th>Private Cloud</th>
                    <th>Hybrid Cloud</th>
                  </tr>
                </thead>
                <tbody>
                  {cloudComparison.map((row) => (
                    <tr key={row.factor}>
                      <td>{row.factor}</td>
                      <td>{row.public}</td>
                      <td>{row.private}</td>
                      <td>{row.hybrid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
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
                What you walk away with at the end of the engagement.
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
                What sets our cloud strategy consulting apart from a typical reseller pitch.
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

      {/* Industries */}
      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Cloud strategy for regulated &amp; growth-stage sectors</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Migration plans built around the compliance and uptime needs of your industry.
            </Reveal>
          </div>
          <div className="br-ind-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 3) + 1}>
                <div className="br-ind-cell">
                  <h4>{ind.title}</h4>
                  <p>{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="br-faq">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Frequently asked questions</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Straight answers about cloud strategy, migration, and cost.
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
              <h2>Ready to build a cloud strategy that actually fits?</h2>
              <p className="br-closing-sub">Get a free cloud readiness assessment and a clear, honest view of what migration would look like for your business.</p>
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
