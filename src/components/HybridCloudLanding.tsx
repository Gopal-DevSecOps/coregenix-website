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
  "Workloads split across on-premise and cloud with no deliberate strategy",
  "Different teams and tools managing each environment separately",
  "Security blind spots where on-premise and cloud policies don't align",
  "Duplicated effort maintaining two disconnected operating models",
  "Workloads placed in the wrong environment for cost or compliance reasons",
  "No single team accountable when something breaks across the boundary",
];

const deliverables = [
  { num: "01", title: "Hybrid Architecture", tag: "Decide what runs where, and why", items: ["Workload assessment against compliance and latency needs", "Deliberate placement decisions, documented and justified", "Architecture designed for both environments together"] },
  { num: "02", title: "Connectivity", tag: "Secure links between on-premise and cloud", items: ["Site-to-site VPN or dedicated private connections", "Bandwidth and latency sized to workload needs", "Redundant links to avoid single points of failure"] },
  { num: "03", title: "Unified Management", tag: "One operating model across both", items: ["Single pane of glass for monitoring and operations", "Consistent tooling across on-premise and cloud", "One accountable team, no finger-pointing between silos"] },
  { num: "04", title: "Consistent Security", tag: "Same policies, everywhere", items: ["Unified identity and access management", "Consistent security policies across the boundary", "Centralized logging and threat visibility"] },
  { num: "05", title: "Workload Placement", tag: "Data stays where compliance requires", items: ["Compliance-driven placement for regulated data", "Latency-sensitive workloads kept close to users", "Ongoing review as requirements change"] },
  { num: "06", title: "Cost & Performance Balance", tag: "The best of both worlds", items: ["CAPEX efficiency on-premise, OPEX flexibility on cloud", "Burst to cloud for peak demand, stay lean otherwise", "Ongoing optimization across both environments"] },
];

const comparisonData = [
  { factor: "Workload placement", accidental: "Wherever it ended up", deliberate: "Decided by compliance, latency, and cost" },
  { factor: "Security policy", accidental: "Different policies per environment", deliberate: "Consistent policies across the boundary" },
  { factor: "Management", accidental: "Different teams, different tools", deliberate: "Single team, unified tooling" },
  { factor: "Connectivity", accidental: "Ad hoc VPN, no redundancy", deliberate: "Designed links sized to workload needs" },
  { factor: "Accountability", accidental: "Nobody owns the boundary", deliberate: "One team accountable end-to-end" },
];

const workloadPlacementData = [
  { workload: "Core banking", placement: "On-premise", reason: "Regulatory mandates, data sovereignty, low-latency requirements" },
  { workload: "Customer-facing apps", placement: "Public cloud", reason: "Scalability for variable traffic, global CDN reach" },
  { workload: "ERP / legacy", placement: "On-premise", reason: "Dedicated resources, licensing constraints, integration needs" },
  { workload: "Seasonal workloads", placement: "Cloud burst", reason: "Peak demand handled on cloud, baseline on-premise" },
  { workload: "Backup / DR", placement: "Cloud", reason: "Offsite protection, cost-efficient retention, no second facility" },
  { workload: "Analytics / dev-test", placement: "Cloud", reason: "Elastic compute, pay-per-use, no production impact" },
];

const connectivityData = [
  { option: "Site-to-Site VPN", description: "Encrypted tunnels over the public internet — cost-effective for most workloads, quick to deploy, suitable for non-latency-critical traffic" },
  { option: "Dedicated Private Connection", description: "Private, low-latency links (AWS Direct Connect, Azure ExpressRoute) — predictable performance, not routed over the public internet, best for production workloads" },
  { option: "SD-WAN Overlay", description: "Intelligent routing across multiple WAN links — prioritizes critical traffic, aggregates bandwidth, provides visibility across all connectivity paths" },
];

const industries = [
  { title: "BFSI", desc: "Core banking on-premise, customer channels on cloud, managed as one." },
  { title: "Manufacturing", desc: "Plant systems on-premise, analytics and IoT on cloud, unified operations." },
  { title: "Healthcare", desc: "Patient data on-premise for compliance, scalable apps on cloud." },
  { title: "Retail & E-commerce", desc: "ERP on-premise, seasonal scaling on cloud, seamless customer experience." },
  { title: "Government / PSU", desc: "Sovereign workloads on-premise, citizen services on cloud, consistent governance." },
];

const faqs = [
  { q: "What is a hybrid cloud?", a: "A hybrid cloud combines on-premise infrastructure with public or private cloud, connected and managed as a single environment. It lets sensitive or latency-critical workloads stay on-premise while other workloads scale on cloud. CoreGenix designs deliberate hybrid architectures rather than the accidental hybrid most businesses end up with." },
  { q: "How is hybrid cloud different from multi-cloud?", a: "Hybrid cloud combines on-premise with cloud. Multi-cloud uses multiple public cloud providers (e.g., Azure and AWS together). They can overlap — a hybrid strategy can also be multi-cloud. CoreGenix clarifies which model fits your needs." },
  { q: "When should I use hybrid cloud instead of full public cloud?", a: "Use hybrid when compliance keeps certain workloads on-premise, when latency-sensitive systems can't move to the cloud, or when you want to keep existing on-premise investments while scaling new workloads on cloud. CoreGenix helps you decide what stays and what moves." },
  { q: "How do you connect on-premise and cloud securely?", a: "CoreGenix connects on-premise and cloud using site-to-site VPN, dedicated private connections (Direct Connect / ExpressRoute), or SD-WAN overlays — sized and redundant based on your workload requirements." },
  { q: "How do you manage security across both environments?", a: "CoreGenix implements unified identity and access management, consistent security policies across the boundary, and centralized logging and threat visibility — so on-premise and cloud are secured the same way." },
  { q: "What does hybrid cloud management look like in practice?", a: "One team, one set of tools, one accountability model. CoreGenix provides unified monitoring, consistent operations, and a single point of contact — so your hybrid environment runs as one, not two disconnected halves." },
];

export default function HybridCloudLanding({ service }: Props) {
  return (
    <main>
      <section className="br-hero">
        <div className="container">
          <Reveal as="span" className="br-eyebrow" delay={1}><span className="br-dot" />Cloud Infrastructure Solutions</Reveal>
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
          <Reveal delay={1}><h2>What is a hybrid cloud?</h2></Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>A hybrid cloud combines on-premise infrastructure with public or private cloud, connected and managed as a single environment. It lets sensitive or latency-critical workloads stay on-premise while other workloads scale on cloud. CoreGenix designs deliberate hybrid architectures — with defined workload placement, secure connectivity, and consistent security — rather than the &apos;accidental hybrid&apos; most businesses end up with by default.</p>
          </Reveal>
        </div>
      </section>

      <section className="br-challenge">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>The problem we solve</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Most businesses already run a hybrid environment — by accident. Some workloads on-premise, some in cloud, different teams, different tools, no single strategy.</Reveal>
          </div>
          <div className="br-challenge-grid">
            {challenges.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1}>
                <div className="br-challenge-item"><span className="br-challenge-icon"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4v5M8 11.5v.1" stroke="currentColor" strokeWidth="1.3"/></svg></span><p>{item}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="br-challenge-note" delay={3}>
            <p>The result is security blind spots, duplicated effort, and workloads in the wrong place. <strong>Hybrid cloud done right is deliberate and managed — not something that happens to you.</strong></p>
          </Reveal>
        </div>
      </section>

      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>What we deliver</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>A complete hybrid cloud engagement — architecture, connectivity, unified management, security, and cost optimization, under one accountable team.</Reveal>
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
            <Reveal delay={1}><h2>Accidental vs. deliberate hybrid</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Most businesses are here by accident. The difference between accidental and deliberate is outcomes.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Factor</th><th>Accidental Hybrid</th><th>Deliberate Hybrid</th></tr></thead>
                <tbody>{comparisonData.map((row) => <tr key={row.factor}><td>{row.factor}</td><td>{row.accidental}</td><td>{row.deliberate}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Workload placement decisions</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>What runs where — and why — depends on compliance, latency, and cost requirements.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Workload</th><th>Recommended placement</th><th>Reason</th></tr></thead>
                <tbody>{workloadPlacementData.map((row) => <tr key={row.workload}><td>{row.workload}</td><td>{row.placement}</td><td>{row.reason}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Connectivity options</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>How on-premise and cloud are connected — sized to workload needs and redundancy requirements.</Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 8 }}>
            {connectivityData.map((item, i) => (
              <Reveal key={item.option} delay={(i % 3) + 1}>
                <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--navy)", margin: "0 0 8px" }}>{item.option}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-soft)", margin: 0 }}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Hybrid cloud vs. multi-cloud</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>These terms get used interchangeably — they mean different things.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Model</th><th>Definition</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>Hybrid cloud</td><td>On-premise + one or more public clouds, connected and managed together</td><td>Data center + Azure, managed as one</td></tr>
                  <tr><td>Multi-cloud</td><td>Two or more public cloud providers, with no on-premise component required</td><td>AWS + Azure, no private data center</td></tr>
                  <tr><td>Hybrid multi-cloud</td><td>On-premise + multiple public clouds — combines both models</td><td>Data center + AWS + Azure, managed together</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Hybrid cloud for every sector</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Architecture and management tuned to the compliance and connectivity needs of your industry.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What you get from a properly designed and managed hybrid cloud.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What sets our hybrid cloud delivery apart.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>Straight answers about hybrid cloud architecture and management.</Reveal>
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
              <h2>Stop running your infrastructure by accident</h2>
              <p className="br-closing-sub">Get a free hybrid cloud assessment and a clear workload placement strategy.</p>
              <div className="br-closing-meta"><span>Call <a href="tel:+918355958119">+91 83559 58119</a></span><span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span><span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span></div>
              <Link href="/contact" className="btn btn-grad">Get free consultation<ArrowRightIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
