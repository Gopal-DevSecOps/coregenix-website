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
                src="/images/coregenix/service-7.jpg"
                alt="Managed cloud infrastructure"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Cloud management by the numbers">
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
            eyebrow="Cloud Infrastructure Management"
            title={
              <>
                What is <span className="grad">cloud infrastructure management?</span>
              </>
            }
            desc="The day-to-day operation, monitoring, security, and optimization of a cloud environment — delivered as a fully managed service across Azure, AWS, private, and hybrid cloud."
          />
          <div className="brr-check-grid">
            {[
              "24x7 monitoring & alerting",
              "Patching & access control",
              "Cost optimization & right-sizing",
              "Backup & disaster recovery",
              "Controlled change management",
              "Multi-cloud expertise",
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
                Cloud that runs itself — <span className="grad">until it doesn&apos;t</span>
              </>
            }
            desc="Migrating to the cloud is the easy part. Running it well is the hard part."
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
            <p>Without dedicated cloud management, <strong>you pay more, risk more, and spend your team&apos;s time babysitting infrastructure</strong> instead of running the business.</p>
          </Reveal>
        </div>
      </section>

      {/* Deliver */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What We Deliver"
            title={
              <>
                Complete Managed Cloud <span className="grad">Operations</span>
              </>
            }
            desc="Monitoring, security, cost, backup, and change control — all under one accountable team."
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

      {/* SLA table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="SLA"
            title={
              <>
                What&apos;s in a <span className="grad">managed cloud SLA</span>
              </>
            }
            desc="Cloud management is only as good as the response times behind it."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong>{row.severity}</strong></td>
                    <td>{row.definition}</td>
                    <td>{row.response}</td>
                    <td>{row.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="brr-table-note">Final SLA terms are confirmed per engagement based on workload criticality and support tier.</p>
        </div>
      </section>

      {/* Process */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="How It Works"
            title={
              <>
                How a managed cloud <span className="grad">engagement runs</span>
              </>
            }
            desc="A structured onboarding and operating rhythm — not a black box."
          />
          <div className="brr-deliver-grid">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={(i % 3) + 1}>
                <div className="brr-deliver-card">
                  <span className="brr-deliver-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p className="brr-deliver-tag">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Compare"
            title={
              <>
                In-house vs. managed <span className="grad">cloud operations</span>
              </>
            }
            desc="What changes when cloud operations move from an internal team to a dedicated managed service."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong>{row.factor}</strong></td>
                    <td>{row.inHouse}</td>
                    <td>{row.managed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Platforms & Tools"
            title={
              <>
                Tools we <span className="grad">work with</span>
              </>
            }
            desc="Native cloud tooling combined with dedicated monitoring and cost-management platforms."
          />
          <div className="brr-tags">
            {tools.map((tool, i) => (
              <Reveal key={tool} delay={(i % 4) + 1}>
                <span className="brr-tag">{tool}</span>
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
              desc="What you walk away with once your cloud is properly managed."
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
              desc="What sets our cloud management apart from a ticket-based support desk."
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
            desc="Straight answers about managed cloud, SLAs, and cost."
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
      <CtaSection title="Let your cloud work for you" />
    </>
  );
}