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
  "Compliance mandates that prohibit shared infrastructure",
  "Performance requirements that public cloud can't consistently deliver",
  "Data sovereignty rules that keep data within specific boundaries",
  "Security policies that demand full environmental control",
  "Predictable costs that pay-as-you-go models can't guarantee",
  "Legacy applications that need dedicated compute and storage",
];

const deliverables = [
  { num: "01", title: "Private Cloud Architecture & Design", tag: "Design matched to your workloads", items: ["Capacity planning based on real workload profiles", "Compute, storage, and network architecture design", "High-availability and redundancy planning"] },
  { num: "02", title: "On-Premise & Hosted Private Cloud", tag: "The deployment model that fits", items: ["On-premise builds inside your own data center", "Hosted private cloud in a dedicated data center facility", "Migration support between deployment models"] },
  { num: "03", title: "Virtualization Platform", tag: "Enterprise-grade compute", items: ["VMware, Microsoft Hyper-V, Nutanix, or OpenStack", "Resource pooling and workload isolation", "Automated provisioning and self-service portals"] },
  { num: "04", title: "Storage & Networking", tag: "Built for performance and isolation", items: ["SAN/NAS storage design with tiered performance", "Software-defined networking and micro-segmentation", "Redundant connectivity and load balancing"] },
  { num: "05", title: "Security & Compliance", tag: "Dedicated, auditable environments", items: ["Network segmentation and access controls", "Compliance mapping to ISO 27001, RBI, and DPDPA", "Audit-ready logging and reporting"] },
  { num: "06", title: "Ongoing Management", tag: "24x7 operations and support", items: ["Proactive monitoring and capacity management", "Patch management and platform upgrades", "24x7 incident response and support"] },
];

const deploymentModels = [
  { model: "On-Premise Private Cloud", description: "Deployed entirely within your own data center — maximum control over hardware, location, and physical access" },
  { model: "Hosted Private Cloud", description: "Dedicated infrastructure hosted in a provider's data center — no capital investment in hardware, still fully isolated" },
  { model: "Virtual Private Cloud (VPC)", description: "A logically isolated section within a public cloud provider's infrastructure — private-cloud-like isolation with elasticity" },
];

const comparisonData = [
  { factor: "Tenancy", privateCloud: "Dedicated to one organization", publicCloud: "Shared multi-tenant", hybridCloud: "Dedicated + shared combined" },
  { factor: "Best for", privateCloud: "Compliance, performance, control", publicCloud: "Scalability, speed, low upfront cost", hybridCloud: "Mixed workloads with varied needs" },
  { factor: "Cost model", privateCloud: "Predictable CAPEX or hosted OPEX", publicCloud: "Pay-as-you-go variable", hybridCloud: "Blend of CAPEX and OPEX" },
  { factor: "Performance", privateCloud: "Consistent, no noisy neighbors", publicCloud: "Variable, shared resources", hybridCloud: "Optimized per workload" },
  { factor: "Typical adopters", privateCloud: "BFSI, Government, Healthcare", publicCloud: "Startups, SaaS, general enterprise", hybridCloud: "Large enterprises, regulated industries" },
];

const industries = [
  { title: "BFSI", desc: "Dedicated infrastructure meeting RBI data localization and audit mandates." },
  { title: "Government / PSU", desc: "Sovereign infrastructure with full physical and logical isolation." },
  { title: "Healthcare", desc: "HIPAA and DPDPA-aligned environments for sensitive patient data." },
  { title: "Manufacturing", desc: "High-performance compute for ERP, MES, and production workloads." },
  { title: "Legal & Professional Services", desc: "Confidential client data on fully isolated infrastructure." },
];

const faqs = [
  { q: "What is a private cloud?", a: "A private cloud is cloud infrastructure dedicated to a single organization — offering the self-service, scalability, and automation of cloud computing, but with full isolation and control. CoreGenix designs, builds, and manages private cloud environments across on-premise and hosted deployments." },
  { q: "When should I choose private cloud over public cloud?", a: "Choose private cloud when compliance mandates prohibit shared infrastructure, when you need consistent performance without noisy neighbors, or when data sovereignty rules require data to stay within specific boundaries. Public cloud is better for variable, non-sensitive workloads." },
  { q: "How much does a private cloud cost in India?", a: "Private cloud costs depend on deployment model (on-premise vs hosted), hardware requirements, and compliance needs. CoreGenix provides a free assessment comparing on-premise, hosted, and public cloud options with transparent pricing for each." },
  { q: "What is the difference between private cloud and on-premise?", a: "On-premise infrastructure is traditional IT hosted in your own facility. Private cloud adds cloud-native capabilities — self-service provisioning, automation, resource pooling, and elastic scaling — on dedicated infrastructure. CoreGenix delivers both as a managed service." },
  { q: "Can I combine private and public cloud?", a: "Yes — that's hybrid cloud. CoreGenix designs deliberate hybrid architectures where sensitive workloads stay on private cloud and scalable workloads run on public cloud, connected and managed as one environment." },
  { q: "What compliance frameworks does private cloud support?", a: "Private cloud infrastructure supports ISO 27001, NIST CSF, RBI data localization, DPDPA, HIPAA, and other frameworks that require dedicated, auditable environments. CoreGenix maps your compliance requirements to the right architecture." },
  { q: "Does CoreGenix manage private cloud infrastructure after deployment?", a: "Yes — CoreGenix provides end-to-end lifecycle management including monitoring, patching, capacity planning, security hardening, and 24x7 incident response. Your private cloud runs on our operations, not yours." },
];

export default function PrivateCloudLanding({ service }: Props) {
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
          <Reveal delay={1}><h2>What is a private cloud?</h2></Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>A private cloud is cloud infrastructure dedicated to a single organization — offering the self-service, scalability, and automation of cloud computing, but with full isolation and control, unlike public cloud&apos;s shared, multi-tenant model. CoreGenix designs, builds, and manages private cloud environments across on-premise and hosted deployments.</p>
          </Reveal>
        </div>
      </section>

      <section className="br-challenge">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>The problem we solve</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Public cloud isn&apos;t always the right answer. Compliance, data sovereignty, and performance requirements can demand dedicated infrastructure that nobody else shares.</Reveal>
          </div>
          <div className="br-challenge-grid">
            {challenges.map((item, i) => (
              <Reveal key={item} delay={(i % 3) + 1}>
                <div className="br-challenge-item"><span className="br-challenge-icon"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4v5M8 11.5v.1" stroke="currentColor" strokeWidth="1.3"/></svg></span><p>{item}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="br-challenge-note" delay={3}>
            <p>CoreGenix builds and manages private cloud environments end to end — architecture, virtualization, storage, security, and ongoing operations — so dedicated infrastructure doesn&apos;t mean doing it all yourself.</p>
          </Reveal>
        </div>
      </section>

      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>What we deliver</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>A complete private cloud engagement — architecture, virtualization, storage, security, and ongoing management, under one accountable team.</Reveal>
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
            <Reveal delay={1}><h2>Deployment models</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Three ways to run a private cloud — each with different control, cost, and compliance characteristics.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Model</th><th>Description</th></tr></thead>
                <tbody>{deploymentModels.map((row) => <tr key={row.model}><td>{row.model}</td><td>{row.description}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Private vs. public vs. hybrid cloud</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>How the three cloud models compare.</Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead><tr><th>Factor</th><th>Private Cloud</th><th>Public Cloud</th><th>Hybrid Cloud</th></tr></thead>
                <tbody>{comparisonData.map((row) => <tr key={row.factor}><td>{row.factor}</td><td>{row.privateCloud}</td><td>{row.publicCloud}</td><td>{row.hybridCloud}</td></tr>)}</tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}><h2>Private cloud for every sector</h2></Reveal>
            <Reveal as="p" className="br-sub" delay={2}>Dedicated infrastructure tuned to the compliance and control needs of your industry.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What you get from a properly designed and managed private cloud.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>What sets our private cloud delivery apart.</Reveal>
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
            <Reveal as="p" className="br-sub" delay={2}>Straight answers about private cloud architecture and management.</Reveal>
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
              <h2>Get dedicated cloud infrastructure built for compliance and performance</h2>
              <p className="br-closing-sub">Get a free private cloud assessment and a clear comparison of on-premise, hosted, and hybrid options.</p>
              <div className="br-closing-meta"><span>Call <a href="tel:+918355958119">+91 83559 58119</a></span><span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span><span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span></div>
              <Link href="/contact" className="btn btn-grad">Get free consultation<ArrowRightIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
