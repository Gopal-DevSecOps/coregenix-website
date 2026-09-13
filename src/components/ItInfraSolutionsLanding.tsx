import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./Icons";

const stats = [
  { value: "22+", label: "Years of experience" },
  { value: "119+", label: "Projects delivered" },
  { value: "75+", label: "Happy clients" },
  { value: "24×7", label: "Pan-India support" },
];

const pillars = [
  { stage: "Connect", title: "Network", desc: "Reliable, scalable, secure connectivity across your business.", href: "/solutions/network" },
  { stage: "Host", title: "Data Center", desc: "From a single rack to a full enterprise facility, planned and built right.", href: "/solutions/data-center" },
  { stage: "Protect", title: "Data Backup", desc: "Automated backup that restores fast when disaster strikes.", href: "/solutions/data-backup" },
  { stage: "Recover", title: "DR & Business Continuity", desc: "Defined recovery plans that keep the business running through disruption.", href: "/solutions/disaster-recovery-bcp" },
];

const subservices = [
  {
    stage: "Connect",
    title: "Network Infrastructure",
    desc: "CoreGenix designs, builds, and manages network infrastructure that is reliable, scalable, and secure — so your business stays connected, fast, and protected.",
    items: ["Network design & architecture — LAN, WAN, SD-WAN, and data center networking", "Structured cabling — copper and fiber, office and data center", "Wired & wireless — enterprise Wi-Fi with secure access"],
    href: "/solutions/network",
  },
  {
    stage: "Host",
    title: "Data Center Solutions",
    desc: "CoreGenix plans, builds, and manages data centers and server rooms — from a single rack to a full enterprise facility.",
    items: ["Data center design & planning — capacity, cooling, power, layout", "Server room build-out — racks, cabling, UPS, cooling, fire safety", "Server & virtualization — physical and virtual compute platforms"],
    href: "/solutions/data-center",
  },
  {
    stage: "Protect",
    title: "Data Backup & Restore",
    desc: "CoreGenix builds automated backup solutions that protect your data and restore it quickly when disaster strikes.",
    items: ["Automated backup — servers, databases, applications, endpoints", "On-premise backup — local, fast restore", "Cloud backup — offsite protection, always available"],
    href: "/solutions/data-backup",
  },
  {
    stage: "Recover",
    title: "DR & Business Continuity",
    desc: "CoreGenix builds disaster recovery and business continuity plans that keep your business running — through outages, disasters, and ransomware.",
    items: ["DR strategy design — RPO and RTO defined for your business", "Recovery architecture — replicated systems, ready to fail over", "Business continuity planning — keep operations running"],
    href: "/solutions/disaster-recovery-bcp",
  },
];

const decisionData = [
  { situation: "Slow, unreliable, or unsecured office/site connectivity", start: "Network Infrastructure" },
  { situation: "Building or expanding a server room or data center", start: "Data Center Solutions" },
  { situation: "No confidence your backups would actually restore", start: "Data Backup & Restore" },
  { situation: "No defined recovery time if systems go down", start: "DR & Business Continuity" },
  { situation: "Planning a new office or facility from scratch", start: "Network + Data Center Solutions" },
  { situation: "Preparing for a compliance or insurance audit", start: "DR & Business Continuity" },
];

const industries = [
  { title: "BFSI", desc: "Resilient infrastructure with near-zero RPO for core systems." },
  { title: "Manufacturing", desc: "Reliable networks and server rooms connecting plant and office." },
  { title: "Healthcare", desc: "Secure, backed-up infrastructure for patient and clinical data." },
  { title: "Retail & E-commerce", desc: "High-availability networks and DR built for peak trading periods." },
  { title: "Government / PSU", desc: "On-premise infrastructure aligned to data sovereignty mandates." },
];

const faqs = [
  { q: "What is IT infrastructure?", a: "IT infrastructure is the combined set of hardware, networking, facilities, and processes that support an organization's technology environment — including networks, servers, data centers, storage, and the backup and recovery systems that protect them." },
  { q: "What is the difference between data backup and disaster recovery?", a: "Data backup restores individual files or datasets after loss. Disaster recovery restores entire systems, applications, and operations at scale following a major disruption, using a defined recovery plan. Most businesses need both working together." },
  { q: "Should IT infrastructure be on-premise or in the cloud?", a: "The right choice depends on compliance, latency, and cost requirements. Many businesses run a mix — core, compliance-sensitive infrastructure on-premise, with backup, DR, and variable workloads extended to the cloud." },
  { q: "What is included in data center design and build?", a: "Data center design and build includes capacity planning, power and cooling design, physical layout, rack and cabling infrastructure, UPS and fire safety systems, and server or virtualization platform setup — scaled from a single server room to a full enterprise facility." },
  { q: "How does CoreGenix approach network infrastructure design?", a: "CoreGenix designs network infrastructure covering LAN, WAN, and SD-WAN architecture, structured cabling for both copper and fiber, and secure wired and wireless connectivity, built to be reliable, scalable, and secure from the start." },
  { q: "Do I need a business continuity plan in addition to disaster recovery?", a: "Yes. Disaster recovery restores IT systems, while business continuity planning covers how the wider business keeps operating during a disruption — including alternate processes, staff communication, and critical function continuity beyond just IT." },
];

export default function ItInfraSolutionsLanding() {
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
            <h1 className="br-hero-title">IT infrastructure solutions — networks, data centers &amp; disaster recovery, built for uptime</h1>
          </Reveal>
          <Reveal as="p" className="br-hero-desc" delay={3}>
            Networks, data centers, data backup, and disaster recovery — designed, built, and managed for uptime and growth. CoreGenix covers the full infrastructure stack under one accountable team.
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
            <h2>What are IT infrastructure solutions?</h2>
          </Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>IT infrastructure solutions cover the physical and technical foundation a business runs on: Network Infrastructure (LAN, WAN, SD-WAN, and cabling), Data Center Solutions (design, build, and server/virtualization), Data Backup &amp; Restore (automated, on-premise and cloud), and Disaster Recovery &amp; Business Continuity (defined RPO/RTO with tested recovery plans). CoreGenix designs, builds, and manages all four for businesses across India.</p>
          </Reveal>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Four pillars of a reliable IT foundation</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              From the network that connects you to the recovery plan that saves you — CoreGenix builds and manages the whole stack.
            </Reveal>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 8 }}>
            {pillars.map((item, i) => (
              <Reveal key={item.stage} delay={(i % 4) + 1}>
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
              <h2>What&apos;s included in each solution</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A closer look at what CoreGenix delivers across network, data center, backup, and disaster recovery.
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

      {/* Decision Table */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Which IT infrastructure solution do you need?</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A quick way to figure out where to start, based on your current situation.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Your situation</th>
                    <th>Start with</th>
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
              <h2>IT infrastructure for every sector</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              The right mix of network, data center, backup, and recovery for the uptime and compliance needs of your industry.
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
              Straight answers about network, data center, backup, and disaster recovery.
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
