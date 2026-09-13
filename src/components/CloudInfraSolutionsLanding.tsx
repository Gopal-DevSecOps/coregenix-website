import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./Icons";

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "119+", label: "Projects delivered" },
  { value: "75+", label: "Happy clients" },
  { value: "24×7", label: "Pan-India support" },
];

const models = [
  { stage: "Dedicated", title: "Private Cloud", desc: "Dedicated, secure, compliant infrastructure — on-premise or hosted, with no shared tenancy.", href: "/solutions/private-cloud" },
  { stage: "Elastic", title: "Public Cloud (Azure & AWS)", desc: "Fast-scaling, pay-as-you-go infrastructure on the world's leading cloud platforms.", href: "/solutions/public-cloud" },
  { stage: "Blended", title: "Hybrid Cloud", desc: "The control of on-premise combined with the scale of cloud — managed as a single environment.", href: "/solutions/hybrid-cloud" },
];

const subservices = [
  {
    stage: "Dedicated",
    title: "Private Cloud",
    desc: "CoreGenix builds and manages private cloud environments that give you dedicated, secure, and compliant cloud infrastructure.",
    items: ["Private cloud architecture — design matched to your workloads", "On-premise & hosted private cloud — the choice that fits", "Virtualization platform — enterprise-grade compute"],
    href: "/solutions/private-cloud",
  },
  {
    stage: "Elastic",
    title: "Public Cloud (Azure & AWS)",
    desc: "CoreGenix helps you adopt Azure and AWS public cloud — the right architecture, migration, and ongoing management.",
    items: ["Cloud architecture — Azure and AWS designed for your workloads", "Migration — phased, low-risk moves with minimal disruption", "Security — identity, network, encryption, and compliance controls"],
    href: "/solutions/public-cloud",
  },
  {
    stage: "Blended",
    title: "Hybrid Cloud",
    desc: "CoreGenix builds hybrid cloud environments that combine the control of on-premise with the scale of cloud — managed as one.",
    items: ["Hybrid architecture — decide what runs where, and why", "Connectivity — secure links between on-premise and cloud", "Unified management — one operating model across both"],
    href: "/solutions/hybrid-cloud",
  },
];

const comparisonData = [
  { factor: "Tenancy", private: "Single organization, fully dedicated", public: "Shared, multi-tenant", hybrid: "Mix of dedicated and shared" },
  { factor: "Cost model", private: "CAPEX or hosted OPEX", public: "Pay-as-you-go (OPEX)", hybrid: "Blended CAPEX + OPEX" },
  { factor: "Scalability", private: "Limited by owned/leased capacity", public: "Near-instant, elastic scaling", hybrid: "Scale on public, stability on private" },
  { factor: "Compliance fit", private: "Strongest — dedicated environment", public: "Good, with correct configuration", hybrid: "Strong — sensitive data stays private" },
  { factor: "Typical adopters", private: "BFSI, government, healthcare", public: "Startups, digital-first businesses", hybrid: "Enterprises mid-migration" },
];

const decisionData = [
  { situation: "Strict data sovereignty or regulatory requirements", start: "Private Cloud" },
  { situation: "Highly variable or seasonal workloads", start: "Public Cloud" },
  { situation: "Fast-growing startup with limited capital budget", start: "Public Cloud" },
  { situation: "Some data must stay on-premise, rest can scale freely", start: "Hybrid Cloud" },
  { situation: "Mid-way through a data center exit", start: "Hybrid Cloud" },
  { situation: "Need dedicated performance with no shared tenants", start: "Private Cloud" },
];

const industries = [
  { title: "BFSI", desc: "Private or hybrid cloud aligned to RBI and DPDPA norms." },
  { title: "Manufacturing", desc: "Hybrid infrastructure connecting plant systems with cloud analytics." },
  { title: "Healthcare", desc: "Compliant private or hybrid cloud for patient data." },
  { title: "Retail & E-commerce", desc: "Elastic public cloud built for seasonal demand spikes." },
  { title: "Government / PSU", desc: "Private and hybrid cloud aligned to data sovereignty mandates." },
];

const faqs = [
  { q: "What is the difference between private, public, and hybrid cloud?", a: "Private cloud is dedicated infrastructure for a single organization. Public cloud is shared, multi-tenant infrastructure from providers like Azure or AWS, billed on usage. Hybrid cloud combines both, letting sensitive workloads stay private while others scale on public cloud." },
  { q: "Which cloud infrastructure model is right for my business?", a: "The right model depends on compliance needs, workload variability, and budget. Businesses with strict data sovereignty needs often choose private cloud; those needing fast scaling choose public cloud; and most enterprises mid-migration adopt hybrid cloud." },
  { q: "Does CoreGenix support both Azure and AWS?", a: "Yes, CoreGenix provides vendor-neutral public cloud solutions across both Microsoft Azure and Amazon Web Services (AWS), recommending the platform that best fits each client's workloads and existing technology stack." },
  { q: "Can I move between cloud infrastructure models later?", a: "Yes, cloud infrastructure is not a permanent decision. Many businesses start with public or private cloud and evolve into a hybrid model as compliance, cost, or performance requirements change over time." },
  { q: "What does cloud infrastructure architecture involve?", a: "Cloud infrastructure architecture involves designing compute, storage, and networking components matched to workload requirements, along with security controls, connectivity, and management processes appropriate to the chosen cloud model." },
  { q: "Is hybrid cloud more expensive than public or private cloud alone?", a: "Hybrid cloud cost depends on the workload split between environments. It can cost more than public cloud alone due to maintaining two environments, but often costs less than an all-private approach while still meeting compliance needs." },
];

export default function CloudInfraSolutionsLanding() {
  return (
    <main>
      {/* Hero */}
      <section className="br-hero">
        <div className="container">
          <Reveal as="span" className="br-eyebrow" delay={1}>
            <span className="br-dot" />
            Solutions
          </Reveal>
          <Reveal delay={2}>
            <h1 className="br-hero-title">Cloud infrastructure solutions — private, public &amp; hybrid, done right</h1>
          </Reveal>
          <Reveal as="p" className="br-hero-desc" delay={3}>
            Private, public (Azure &amp; AWS), and hybrid cloud — architecture, migration, security, and ongoing management, delivered by one team so nothing falls between the cracks.
          </Reveal>
          <Reveal as="div" className="br-hero-actions" delay={4}>
            <Link href="/contact" className="btn btn-grad">
              Get free consultation
              <ArrowRightIcon />
            </Link>
            <Link href="/solutions" className="btn btn-hero-secondary">
              View all solutions
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
            <h2>What are cloud infrastructure solutions?</h2>
          </Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Cloud infrastructure solutions cover the three ways a business can run cloud computing: Private Cloud (dedicated infrastructure for one organization), Public Cloud (shared infrastructure on Azure or AWS, billed on usage), and Hybrid Cloud (a combination of both, managed as one environment). CoreGenix designs, migrates to, secures, and manages all three models for businesses across India.</p>
          </Reveal>
        </div>
      </section>

      {/* Three Models */}
      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Three cloud models, one team</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Whichever model fits your compliance, cost, and performance needs — CoreGenix designs, migrates, secures, and manages it end to end.
            </Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 8 }}>
            {models.map((item, i) => (
              <Reveal key={item.stage} delay={(i % 3) + 1}>
                <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border)", borderRadius: 12, padding: 28 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>{item.stage}</span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "var(--navy)", margin: "8px 0 12px" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-soft)", margin: "0 0 16px", lineHeight: 1.6 }}>{item.desc}</p>
                  <Link href={item.href} style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
                    Learn more →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subservice Details */}
      <section className="br-answer">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>What&apos;s included in each model</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A closer look at what CoreGenix delivers across private, public, and hybrid cloud.
            </Reveal>
          </div>
          {subservices.map((s, i) => (
            <Reveal key={s.title} delay={1}>
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 32, padding: "28px 0", borderBottom: i < subservices.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>{s.stage}</span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: "var(--navy)", margin: "4px 0 0" }}>{s.title}</h3>
                </div>
                <div>
                  <p style={{ fontSize: 15, color: "var(--text-soft)", margin: "0 0 12px", lineHeight: 1.6 }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                    {s.items.map((item) => (
                      <li key={item} style={{ fontSize: 14, color: "var(--text-soft)", padding: "4px 0 4px 16px", position: "relative" as const }}>
                        <span style={{ position: "absolute", left: 0, top: 11, width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)", textDecoration: "none" }}>
                    Learn more about {s.title} →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Private vs. public vs. hybrid cloud</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              How the three models compare on the factors that actually drive the decision.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Private Cloud</th>
                    <th>Public Cloud</th>
                    <th>Hybrid Cloud</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.factor}>
                      <td>{row.factor}</td>
                      <td>{row.private}</td>
                      <td>{row.public}</td>
                      <td>{row.hybrid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Decision Table */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Which cloud model do you need?</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A quick way to figure out where to start.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Your situation</th>
                    <th>Consider</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionData.map((row) => (
                    <tr key={row.situation}>
                      <td>{row.situation}</td>
                      <td>{row.start}</td>
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
              <h2>Cloud infrastructure for every sector</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              The right cloud model for the compliance and performance needs of your industry.
            </Reveal>
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

      {/* FAQ */}
      <section className="br-faq">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Frequently asked questions</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Straight answers about choosing between private, public, and hybrid cloud.
            </Reveal>
          </div>
          <div className="br-faq-list">
            {faqs.map((f, i) => (
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
              <h2>Not sure which solution fits your business?</h2>
              <p className="br-closing-sub">Talk to our experts for a free consultation and a tailored technology plan.</p>
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
