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
  "No capacity planning — racks full, power maxed, cooling uneven",
  "Messy cabling that makes troubleshooting and upgrades painful",
  "Single points of failure in power or cooling",
  "No environmental monitoring — temperature, humidity, water leaks go unnoticed",
  "Server rooms that were never designed for the workload they carry",
  "No documented asset inventory or refresh plan",
];

const deliverables = [
  { num: "01", title: "Data Center Design & Planning", tag: "Capacity, cooling, power, layout", items: ["Capacity planning based on current and projected workloads", "Power and cooling architecture designed for redundancy", "Physical layout optimized for airflow and maintenance access"] },
  { num: "02", title: "Server Room Build-Out", tag: "Racks, cabling, UPS, cooling, fire safety", items: ["Standardized rack layout with proper cable management", "UPS and battery backup sized for actual load", "Fire suppression and environmental monitoring installed"] },
  { num: "03", title: "Server & Virtualization", tag: "Physical and virtual compute platforms", items: ["Physical server procurement and configuration", "Virtualization platform deployment (VMware, Hyper-V, Nutanix)", "Resource pooling and workload isolation"] },
  { num: "04", title: "Storage Solutions", tag: "SAN, NAS and software-defined storage", items: ["SAN/NAS design matched to performance tiers", "Software-defined storage for flexibility and scale", "Backup-integrated storage architecture"] },
  { num: "05", title: "Power & Cooling", tag: "UPS, battery backup, precision cooling", items: ["Redundant power paths (A+B feeds)", "Precision cooling matched to heat density", "Environmental monitoring for temperature and humidity"] },
  { num: "06", title: "DC Monitoring & Management", tag: "24x7 operations support", items: ["Real-time environmental and power monitoring", "Automated alerting on threshold breaches", "Backed by CoreGenix's own NOC"] },
];

const tierData = [
  { tier: "Tier I", availability: "99.671%", description: "Basic capacity, no redundancy" },
  { tier: "Tier II", availability: "99.741%", description: "Redundant components, partial redundancy" },
  { tier: "Tier III", availability: "99.982%", description: "Concurrently maintainable, fully redundant" },
  { tier: "Tier IV", availability: "99.995%", description: "Fault-tolerant, fully redundant" },
];

const comparisonData = [
  { factor: "Upfront cost", inHouse: "High (CAPEX)", colo: "Medium", cloud: "Low (OPEX)" },
  { factor: "Control", inHouse: "Full", colo: "Shared", cloud: "Limited" },
  { factor: "Scalability", inHouse: "Limited", colo: "Medium", cloud: "High" },
  { factor: "Compliance", inHouse: "Easiest", colo: "Good", cloud: "Varies" },
  { factor: "Operational burden", inHouse: "Highest", colo: "Shared", cloud: "Lowest" },
];

const industries = [
  { title: "BFSI", desc: "Tier III/IV data centers meeting RBI compliance mandates." },
  { title: "Healthcare", desc: "Secure, compliant infrastructure for patient data systems." },
  { title: "Manufacturing", desc: "Reliable server rooms connecting plant and office operations." },
  { title: "Retail & E-commerce", desc: "High-availability infrastructure for peak trading periods." },
  { title: "Government / PSU", desc: "Data sovereignty-aligned facility design and management." },
];

const faqs = [
  { q: "What are data center solutions?", a: "Data center solutions cover the design, construction, and management of the facilities that host your servers and critical applications — including power, cooling, racks, and virtualization. CoreGenix handles everything from a single server room to a full enterprise facility." },
  { q: "Should we build our own data center or use colocation?", a: "It depends on your scale, compliance requirements, and budget. CoreGenix advises objectively on in-house vs colocation vs cloud, then delivers whichever fits best — including hybrid approaches." },
  { q: "How much does data center design and build cost in India?", a: "Costs depend on facility size, power requirements, redundancy level, and compliance needs. CoreGenix provides a free assessment and detailed proposal before any commitment." },
  { q: "What is the difference between a server room and a data center?", a: "A server room is a smaller, often basic room housing IT equipment. A data center is a purpose-built facility with redundant power, cooling, fire suppression, and physical security designed for high availability." },
  { q: "How does CoreGenix approach data center power and cooling?", a: "CoreGenix designs power and cooling infrastructure with redundancy at every critical point — UPS, battery backup, precision cooling, and environmental monitoring — matched to your availability requirements." },
  { q: "Can CoreGenix upgrade an existing server room?", a: "Yes, CoreGenix assesses existing server rooms and performs targeted upgrades — cabling, power, cooling, racks, and monitoring — without requiring a full rebuild." },
  { q: "What tier rating should my data center aim for?", a: "Tier ratings range from basic capacity (Tier I) to fully redundant with fault tolerance (Tier IV). The right level depends on your uptime requirements and budget. CoreGenix helps design to the tier that matches your business needs." },
];

export default function DataCenterLanding({ service }: Props) {
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
            <h2>What are data center solutions?</h2>
          </Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Data center solutions cover the design, build, and management of the facilities that host your servers and critical applications — including power, cooling, virtualization, storage, and 24x7 monitoring. CoreGenix handles everything from a single server room to a full enterprise facility, designed and built for uptime and growth.</p>
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
              Business-critical applications need an environment that stays up — power, cooling, redundancy, and physical security. Most server rooms are pieced together over years: messy cabling, uneven cooling, no capacity planning.
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
            <p>When the infrastructure under your applications is fragile, <strong>every small failure becomes an outage — and an outage means lost business.</strong></p>
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
              A complete data center engagement — design, build, power, cooling, virtualization, and ongoing management, under one accountable team.
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

      {/* Tier Ratings */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Data center tier ratings</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Tier ratings define the redundancy and availability of a data center facility.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Availability</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {tierData.map((row) => (
                    <tr key={row.tier}>
                      <td>{row.tier}</td>
                      <td>{row.availability}</td>
                      <td>{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* In-House vs Colo vs Cloud */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>In-house vs. colocation vs. cloud</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              How the three hosting models compare.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>In-House</th>
                    <th>Colocation</th>
                    <th>Cloud</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.factor}>
                      <td>{row.factor}</td>
                      <td>{row.inHouse}</td>
                      <td>{row.colo}</td>
                      <td>{row.cloud}</td>
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
              <h2>Data center for every sector</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Design and management tuned to the compliance and uptime needs of your industry.
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
              What you get from a properly designed and managed data center.
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
              What sets our data center delivery apart.
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
              Straight answers about data center design, build, and management.
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
              <h2>Get a data center that your business can rely on</h2>
              <p className="br-closing-sub">Get a free data center assessment and a clear plan for the facility your business actually needs.</p>
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
