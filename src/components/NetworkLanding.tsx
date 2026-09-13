import Link from "next/link";
import Reveal from "./Reveal";
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
  "Slow, inconsistent performance across offices and applications",
  "Ad hoc cabling and Wi-Fi added over time with no real design",
  "Flat networks with no segmentation between critical and guest traffic",
  "Outages nobody notices until users start calling the helpdesk",
  "Multi-site connectivity that's expensive, slow, or unreliable",
  "No documentation of what's actually connected to what",
];

const deliverables = [
  { num: "01", title: "Network Design & Architecture", tag: "LAN, WAN, SD-WAN and data center networking", items: ["Topology design matched to site size and growth plans", "Redundant paths to eliminate single points of failure", "SD-WAN design for multi-site connectivity"] },
  { num: "02", title: "Structured Cabling", tag: "Copper and fiber, office and data center", items: ["Category-rated copper cabling (Cat6/Cat6a) for offices", "Fiber backbone for data center and inter-floor links", "Labeled, documented, and tested to standard"] },
  { num: "03", title: "Wired & Wireless", tag: "Enterprise Wi-Fi with secure access", items: ["Wi-Fi site survey for coverage and capacity planning", "Guest network isolation from corporate traffic", "Enterprise authentication (802.1X) where required"] },
  { num: "04", title: "Network Security", tag: "Firewalls, segmentation, access control", items: ["Perimeter and internal firewall configuration", "VLAN segmentation by function and sensitivity", "Role-based network access control (NAC)"] },
  { num: "05", title: "Network Monitoring", tag: "24x7 visibility backed by our NOC", items: ["Real-time uptime and bandwidth monitoring", "Automated alerting on outages and anomalies", "Backed by CoreGenix's own Network Operations Center"] },
  { num: "06", title: "Optimization", tag: "Bandwidth planning and performance tuning", items: ["Traffic shaping and QoS for priority applications", "Capacity planning ahead of growth, not after", "Periodic performance reviews and tuning"] },
];

const lanWanData = [
  { term: "LAN", connects: "Devices within a single site", use: "Office network, data center network" },
  { term: "WAN", connects: "Multiple sites over long distances", use: "Connecting branch offices to HQ or cloud" },
  { term: "SD-WAN", connects: "Multiple WAN links, intelligently managed", use: "Multi-site businesses needing performance and cost control" },
];

const cablingData = [
  { standard: "Cat6", speed: "Up to 10 Gbps", distance: "~55m at 10 Gbps", best: "Standard office networks" },
  { standard: "Cat6a", speed: "10 Gbps", distance: "100m at full speed", best: "Future-proofed office and data center runs" },
  { standard: "Multimode Fiber", speed: "10–100 Gbps", distance: "Up to 550m (depending on speed)", best: "Data center backbone, inter-floor links" },
  { standard: "Single-mode Fiber", speed: "10–100+ Gbps", distance: "Several km", best: "Long-haul and inter-building connections" },
];

const securityChips = ["Perimeter Firewalls", "VLAN Segmentation", "Network Access Control", "Intrusion Detection", "Guest Network Isolation", "802.1X Authentication", "DDoS Protection"];

const industries = [
  { title: "BFSI", desc: "Segmented, monitored networks meeting regulatory audit needs." },
  { title: "Manufacturing", desc: "Reliable connectivity linking plant floor and office systems." },
  { title: "Healthcare", desc: "Segmented networks isolating clinical systems from guest Wi-Fi." },
  { title: "Retail & E-commerce", desc: "Multi-site SD-WAN connecting stores to central systems." },
  { title: "Education", desc: "Enterprise Wi-Fi built for high-density campus environments." },
];

const faqs = [
  { q: "What are network infrastructure services?", a: "Network infrastructure services cover the design, deployment, security, and management of the networks a business runs on — including switching, routing, Wi-Fi, structured cabling, and ongoing connectivity monitoring." },
  { q: "How much does network infrastructure setup cost in India?", a: "Network infrastructure costs depend on site size, number of users, and requirements such as redundancy and security. CoreGenix provides a free site assessment and a transparent quote before work begins." },
  { q: "Why does my business need structured cabling?", a: "Structured cabling provides a clean, organized, high-performance foundation for a network, making it faster, more reliable, and far easier to troubleshoot and maintain than ad hoc cabling." },
  { q: "What is the difference between LAN, WAN, and SD-WAN?", a: "A LAN (Local Area Network) connects devices within a single site. A WAN (Wide Area Network) connects multiple sites over long distances, often via leased lines or the internet. SD-WAN (Software-Defined WAN) manages WAN connections intelligently across multiple links, improving performance and reducing cost compared to traditional WAN." },
  { q: "What is network segmentation and why does it matter?", a: "Network segmentation divides a network into isolated zones so that a security breach in one segment cannot easily spread to others. It limits the blast radius of an attack and is a core part of modern network security design." },
  { q: "Does CoreGenix design enterprise Wi-Fi networks?", a: "Yes, CoreGenix designs and deploys enterprise Wi-Fi with secure access controls, including site surveys for coverage planning, guest network isolation, and integration with existing network security policies." },
  { q: "What is included in network monitoring?", a: "Network monitoring includes 24x7 visibility into uptime, bandwidth utilization, and device health, with automated alerting on outages or performance degradation, backed by a Network Operations Center for rapid response." },
];

export default function NetworkLanding({ service }: Props) {
  return (
    <main>
      {/* Hero */}
      <section className="br-hero">
        <div className="container">
          <Reveal as="span" className="br-eyebrow" delay={1}>
            <span className="br-dot" />
            IT Infrastructure Solutions
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
            <h2>What are network infrastructure services?</h2>
          </Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Network infrastructure services cover the design, deployment, security, and management of the networks a business runs on — including LAN, WAN, and SD-WAN architecture, structured cabling, enterprise Wi-Fi, network security, and 24x7 monitoring. CoreGenix delivers all of this as a single, accountable engagement for businesses across India.</p>
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
              An outdated or poorly designed network slows every application, frustrates every employee, and exposes the whole business to risk — but most businesses don&apos;t have the in-house expertise to plan and run enterprise-grade networks.
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
            <p>Downtime, slow performance, and security gaps all trace back to network design. <strong>The right network is invisible — it just works.</strong> Getting there takes specialists.</p>
          </Reveal>
        </div>
      </section>

      {/* Deliver */}
      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>What we deliver</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A complete network engagement — design, cabling, wireless, security, monitoring, and optimization, under one accountable team.
            </Reveal>
          </div>
          {deliverables.map((d) => (
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

      {/* LAN vs WAN vs SD-WAN */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>LAN vs. WAN vs. SD-WAN</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Three terms that come up in every network conversation — here&apos;s what each actually means.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Term</th>
                    <th>What it connects</th>
                    <th>Typical use case</th>
                  </tr>
                </thead>
                <tbody>
                  {lanWanData.map((row) => (
                    <tr key={row.term}>
                      <td>{row.term}</td>
                      <td>{row.connects}</td>
                      <td>{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cabling Table */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Structured cabling standards, compared</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              The cabling category determines your network&apos;s ceiling — CoreGenix specifies the right one for your actual needs, not the cheapest one.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Standard</th>
                    <th>Max speed</th>
                    <th>Typical distance</th>
                    <th>Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {cablingData.map((row) => (
                    <tr key={row.standard}>
                      <td>{row.standard}</td>
                      <td>{row.speed}</td>
                      <td>{row.distance}</td>
                      <td>{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Security Chips */}
      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Network security controls we implement</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Security built into the network design, not bolted on as an afterthought.
            </Reveal>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            {securityChips.map((chip) => (
              <Reveal key={chip} delay={1}>
                <span style={{ background: "var(--bg-darker)", border: "1px solid var(--border)", borderRadius: 100, padding: "8px 20px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>{chip}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Network infrastructure for every sector</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Design and security tuned to the connectivity needs of your industry.
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

      {/* Outcomes */}
      <section className="br-outcomes">
        <div className="container">
          <div className="br-section-head br-section-head-light">
            <Reveal delay={1}>
              <h2>Outcomes that move your business</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              What you get once your network is properly designed and managed.
            </Reveal>
          </div>
          <div className="br-outcome-grid">
            {service.sections.find((s) => s.heading === "What You Get")?.body.map((item, i) => (
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

      {/* Why Choose */}
      <section className="br-why">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>The CoreGenix difference</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              What sets our network delivery apart.
            </Reveal>
          </div>
          <div className="br-why-grid">
            {service.sections.find((s) => s.heading === "Why Choose CoreGenix")?.body.map((item, i) => (
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

      {/* FAQ */}
      <section className="br-faq">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Frequently asked questions</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Straight answers about network design, cabling, and security.
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
              <h2>Build a network that never holds your business back</h2>
              <p className="br-closing-sub">Get a free network assessment and a clear view of what your infrastructure needs.</p>
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
