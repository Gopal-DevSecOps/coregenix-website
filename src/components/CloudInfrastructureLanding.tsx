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
  "Configuration drift as environments change without oversight",
  "Unpatched systems and loosening access control over time",
  "Cloud bills that creep up with no one tracking waste",
  "Nobody notices issues until something breaks in production",
  "Backup and recovery plans that were never actually tested",
  "In-house teams spending time babysitting infrastructure, not the business",
];

const deliverables = [
  {
    num: "01",
    title: "24x7 Monitoring",
    tag: "Workloads, uptime & performance",
    items: ["Real-time infrastructure and application monitoring", "Automated alerting with defined escalation paths", "Performance baselining and anomaly detection"],
  },
  {
    num: "02",
    title: "Security Management",
    tag: "Patching, access control, vulnerability checks",
    items: ["Scheduled OS and application patch management", "Access control review and least-privilege enforcement", "Regular vulnerability scanning of cloud resources"],
  },
  {
    num: "03",
    title: "Cost Optimization",
    tag: "Right-sizing, savings recommendations",
    items: ["Right-sizing of over-provisioned resources", "Reserved instance and savings plan recommendations", "Idle resource identification and elimination"],
  },
  {
    num: "04",
    title: "Backup & Disaster Recovery",
    tag: "For your cloud workloads",
    items: ["Automated backup scheduling and retention policies", "Periodic recovery testing, not just backup jobs", "DR runbooks aligned to your RTO/RPO targets"],
  },
  {
    num: "05",
    title: "Change & Release Management",
    tag: "Done safely, every time",
    items: ["Change approval workflows before production releases", "Rollback plans for every significant change", "Documented change history for audit purposes"],
  },
  {
    num: "06",
    title: "Multi-Cloud Expertise",
    tag: "Azure & AWS, public, private & hybrid",
    items: ["Native expertise across Azure and AWS tooling", "Consistent management approach across private cloud", "Unified operations for hybrid environments"],
  },
];

const slaData = [
  { severity: "P1 — Critical", definition: "Production outage or complete service unavailability", response: "Under 15 minutes", resolution: "4 hours" },
  { severity: "P2 — High", definition: "Major functionality impaired, no workaround available", response: "Under 30 minutes", resolution: "8 hours" },
  { severity: "P3 — Medium", definition: "Partial impact with an available workaround", response: "Under 2 hours", resolution: "1 business day" },
  { severity: "P4 — Low", definition: "Minor issue or general service request", response: "Under 8 hours", resolution: "3 business days" },
];

const processSteps = [
  { num: "01", title: "Onboarding & Assessment", desc: "Audit your current environment, document configurations, and identify immediate risk areas." },
  { num: "02", title: "Monitoring & Baseline Setup", desc: "Deploy monitoring tools, set performance baselines, and configure alerting thresholds." },
  { num: "03", title: "Continuous Optimization", desc: "Ongoing patching, cost right-sizing, and security hardening based on real usage data." },
  { num: "04", title: "Reporting & Review", desc: "Monthly reports on uptime, cost, and security posture, with a review call to plan ahead." },
];

const comparisonData = [
  { factor: "Coverage", inHouse: "Business hours, on-call gaps", managed: "24x7x365 monitoring & response" },
  { factor: "Cost structure", inHouse: "Fixed salary cost regardless of workload", managed: "Scoped to actual workload and scale" },
  { factor: "Specialist depth", inHouse: "Limited to hired skill sets", managed: "Access to a full multi-cloud team" },
  { factor: "Cost optimization", inHouse: "Often reactive, after the bill arrives", managed: "Continuous right-sizing and review" },
  { factor: "Hiring risk", inHouse: "Attrition disrupts continuity", managed: "No single point of dependency" },
];

const tools = ["Azure Monitor", "AWS CloudWatch", "Terraform", "Datadog", "CloudHealth", "ServiceNow", "Azure Cost Management", "AWS Trusted Advisor"];

export default function CloudInfrastructureLanding({ service }: Props) {
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
            <h2>What is cloud infrastructure management?</h2>
          </Reveal>
          <Reveal as="div" className="br-answer-copy" delay={2}>
            <p>Cloud infrastructure management is the day-to-day operation, monitoring, security, and optimization of a cloud environment — including 24x7 monitoring, patching and access control, cost optimization, backup and disaster recovery, and controlled change management. CoreGenix delivers this as a fully managed service across Azure, AWS, private, and hybrid cloud, run from our own Network Operations Center with Pan-India support.</p>
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
              Migrating to the cloud is the easy part. Running it well is the hard part. Environments drift, security gets sloppy, and costs creep up until something breaks or the bill surprises you.
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
            <p>Without dedicated cloud management, <strong>you pay more, risk more, and spend your team&apos;s time babysitting infrastructure instead of running the business.</strong> CoreGenix takes that operational burden off your plate.</p>
          </Reveal>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>What we deliver</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A complete managed cloud engagement — monitoring, security, cost, backup, and change control, all under one accountable team.
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

      {/* SLA Table */}
      <section className="br-rpo-rto">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>What&apos;s in a managed cloud SLA</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Cloud management is only as good as the response times behind it. Here&apos;s how CoreGenix structures incident response by severity.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Severity</th>
                    <th>Definition</th>
                    <th>Response Time</th>
                    <th>Target Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  {slaData.map((row) => (
                    <tr key={row.severity}>
                      <td>{row.severity}</td>
                      <td>{row.definition}</td>
                      <td>{row.response}</td>
                      <td>{row.resolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--text-muted)" }}>Final SLA terms are confirmed per engagement based on workload criticality and support tier.</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="br-deliver">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>How a managed cloud engagement runs</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              A structured onboarding and operating rhythm — not a black box.
            </Reveal>
          </div>
          {processSteps.map((step) => (
            <Reveal key={step.num} delay={1}>
              <div className="br-phase">
                <span className="br-phase-num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                </div>
                <p style={{ fontSize: 15, color: "var(--text-soft)" }}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="br-compare">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>In-house vs. managed cloud operations</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              What changes when cloud operations move from an internal team to a dedicated managed service.
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="br-table-wrap">
              <table className="br-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>In-House Team</th>
                    <th>CoreGenix Managed Service</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.factor}>
                      <td>{row.factor}</td>
                      <td>{row.inHouse}</td>
                      <td>{row.managed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tools */}
      <section className="br-industries">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Platforms &amp; tools we work with</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Native cloud tooling combined with dedicated monitoring and cost-management platforms.
            </Reveal>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            {tools.map((tool) => (
              <Reveal key={tool} delay={1}>
                <span style={{ background: "var(--bg-darker)", border: "1px solid var(--border)", borderRadius: 100, padding: "8px 20px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>{tool}</span>
              </Reveal>
            ))}
          </div>
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
                What you walk away with once your cloud is properly managed.
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
                What sets our cloud management apart from a ticket-based support desk.
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

      {/* FAQ */}
      <section className="br-faq">
        <div className="container">
          <div className="br-section-head">
            <Reveal delay={1}>
              <h2>Frequently asked questions</h2>
            </Reveal>
            <Reveal as="p" className="br-sub" delay={2}>
              Straight answers about managed cloud, SLAs, and cost.
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
              <h2>Let your cloud work for you</h2>
              <p className="br-closing-sub">Get a free cloud infrastructure assessment and a clear view of where your environment stands today.</p>
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
