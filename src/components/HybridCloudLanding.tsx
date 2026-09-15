import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CtaSection from "./CtaSection";
import { CheckIcon, ArrowRightIcon } from "./Icons";
import type { SolutionPage } from "@/data/solutionPages";

interface Props {
  service: SolutionPage;
}

const stats = [
  { value: "22+", label: "Years of Experience" },
  { value: "119+", label: "Projects Delivered" },
  { value: "75+", label: "Happy Clients" },
  { value: "24×7", label: "Pan-India Support" },
];

const challenges = [
  "Workloads split across on-premise and cloud with no deliberate strategy",
  "Different teams and tools managing each environment separately",
  "Security blind spots where on-premise and cloud policies don't align",
  "Duplicated effort maintaining two disconnected operating models",
  "Workloads placed in the wrong environment for cost or compliance reasons",
  "No single team accountable when something breaks across the boundary",
];

const phases = [
  {
    num: "01",
    title: "Hybrid Architecture",
    tag: "Decide what runs where, and why",
    items: [
      "Workload assessment against compliance and latency needs",
      "Deliberate placement decisions, documented and justified",
      "Architecture designed for both environments together",
    ],
  },
  {
    num: "02",
    title: "Connectivity",
    tag: "Secure links between on-premise and cloud",
    items: [
      "Site-to-site VPN or dedicated private connections",
      "Bandwidth and latency sized to workload needs",
      "Redundant links to avoid single points of failure",
    ],
  },
  {
    num: "03",
    title: "Unified Management",
    tag: "One operating model across both",
    items: [
      "Single pane of glass for monitoring and operations",
      "Consistent tooling across on-premise and cloud",
      "One accountable team, no finger-pointing between silos",
    ],
  },
  {
    num: "04",
    title: "Consistent Security",
    tag: "Same policies, everywhere",
    items: [
      "Unified identity and access management",
      "Consistent security policies across the boundary",
      "Centralized logging and threat visibility",
    ],
  },
  {
    num: "05",
    title: "Workload Placement",
    tag: "Data stays where compliance requires",
    items: [
      "Compliance-driven placement for regulated data",
      "Latency-sensitive workloads kept close to users",
      "Ongoing review as requirements change",
    ],
  },
  {
    num: "06",
    title: "Cost & Performance Balance",
    tag: "The best of both worlds",
    items: [
      "CAPEX efficiency on-premise, OPEX flexibility on cloud",
      "Burst to cloud for peak demand, stay lean otherwise",
      "Ongoing optimization across both environments",
    ],
  },
];

const comparison = [
  { factor: "Workload placement", accidental: "Wherever it landed historically", deliberate: "Decided by compliance, latency, and cost" },
  { factor: "Security policy", accidental: "Different rules in each environment", deliberate: "One consistent policy everywhere" },
  { factor: "Management", accidental: "Separate teams, separate tools", deliberate: "Unified operations, single pane of glass" },
  { factor: "Connectivity", accidental: "Ad hoc, sometimes unsecured", deliberate: "Purpose-built, redundant, secure links" },
  { factor: "Accountability", accidental: "No one owns cross-environment issues", deliberate: "One team accountable end to end" },
];

const placement = [
  { workload: "Core banking / regulated financial data", placement: "On-premise or Private Cloud" },
  { workload: "Customer-facing web and mobile apps", placement: "Public Cloud" },
  { workload: "ERP and legacy systems with tight latency needs", placement: "On-premise" },
  { workload: "Seasonal or variable-demand workloads", placement: "Public Cloud" },
  { workload: "Backup and disaster recovery copies", placement: "Public Cloud (offsite)" },
  { workload: "Analytics and dev/test environments", placement: "Public Cloud" },
];

const connectivity = [
  { title: "Site-to-Site VPN", desc: "An encrypted tunnel over the public internet — cost-effective and quick to set up, suited to moderate bandwidth and non-latency-critical workloads." },
  { title: "Dedicated Private Connection", desc: "A direct, private link such as Azure ExpressRoute or AWS Direct Connect — bypasses the public internet for higher bandwidth, lower latency, and more predictable performance." },
  { title: "SD-WAN Overlay", desc: "A software-defined network layer that intelligently routes traffic across multiple connection types, useful for multi-site businesses connecting several locations to cloud." },
];

const industries = [
  { title: "BFSI", desc: "Core systems on-premise, customer-facing apps scaled on cloud." },
  { title: "Manufacturing", desc: "Plant systems on-premise, analytics and ERP extended to cloud." },
  { title: "Healthcare", desc: "Patient records private, non-sensitive systems public cloud." },
  { title: "Retail & E-commerce", desc: "Core inventory on-premise, storefront elastic on public cloud." },
  { title: "Government / PSU", desc: "Sovereignty-bound data on-premise, services extended to cloud." },
];

const whys = [
  "Workloads placed where they belong — cost, control, compliance",
  "Secure links between on-premise and cloud",
  "One operating model across your whole estate",
  "Consistent security policies everywhere",
  "22+ years across on-premise and cloud environments",
  "Mumbai base, Pan-India delivery",
];

export default function HybridCloudLanding({ service }: Props) {
  const whatYouGet = service.sections.find((s) => s.heading === "What You Get");

  return (
    <>
      {/* Hero */}
      <section className="brr-hero">
        <div className="float-shape float-shape-1" aria-hidden="true" />
        <div className="float-shape float-shape-2" aria-hidden="true" />
        <div className="container brr-hero-grid">
          <div className="brr-hero-content">
            <Reveal as="span" className="eyebrow" delay={1}>
              Cloud Infrastructure Solutions
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
              <Link href="/solutions" className="btn btn-hero-secondary">
                View All Solutions
              </Link>
            </Reveal>
          </div>
          <Reveal className="brr-hero-media" delay={3}>
            <div className="brr-hero-img">
              <Image
                src="/images/coregenix/service-3.png"
                alt="Hybrid cloud solutions"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Hybrid cloud solutions by the numbers">
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
            eyebrow="What We Provide"
            title={
              <>
                What is a <span className="grad">hybrid cloud?</span>
              </>
            }
            desc="A hybrid cloud combines on-premise infrastructure with public or private cloud, connected and managed as a single environment. CoreGenix designs deliberate hybrid architectures — with defined workload placement, secure connectivity, and consistent security — rather than the accidental hybrid most businesses end up with by default."
          />
          <div className="brr-check-grid">
            {[
              "Hybrid architecture",
              "Secure connectivity",
              "Unified management",
              "Consistent security",
              "Deliberate workload placement",
              "Cost & performance balance",
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
                A hybrid environment <span className="grad">by accident</span>
              </>
            }
            desc="Most businesses already run a hybrid environment — by accident. Some workloads on-premise, some in cloud, different teams, different tools, no single strategy. That's not hybrid cloud, that's chaos."
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
            <p>The result is security blind spots, duplicated effort, and workloads in the wrong place. <strong>Hybrid cloud done right is deliberate and managed</strong> — not something that happens to you.</p>
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
                Complete Hybrid Cloud <span className="grad">Engagements</span>
              </>
            }
            desc="A complete hybrid cloud engagement — architecture, connectivity, management, and security, unified under one operating model."
          />
          <div className="brr-deliver-grid">
            {phases.map((p, i) => (
              <Reveal key={p.num} delay={(i % 3) + 1}>
                <div className="brr-deliver-card">
                  <span className="brr-deliver-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p className="brr-deliver-tag">{p.tag}</p>
                  <ul className="brr-deliver-list">
                    {p.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accidental vs deliberate */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="The Difference"
            title={
              <>
                Accidental hybrid <span className="grad">vs. deliberate hybrid</span>
              </>
            }
            desc="Most businesses already have a hybrid environment. The question is whether it happened on purpose."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Accidental Hybrid</th>
                  <th>Deliberate Hybrid</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.factor}>
                    <td><strong>{row.factor}</strong></td>
                    <td>{row.accidental}</td>
                    <td>{row.deliberate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Placement table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Workload Placement"
            title={
              <>
                Where should each <span className="grad">workload live?</span>
              </>
            }
            desc="A general guide to workload placement in a hybrid model — CoreGenix tailors this to your specific compliance and performance needs."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Workload type</th>
                  <th>Typical placement</th>
                </tr>
              </thead>
              <tbody>
                {placement.map((row) => (
                  <tr key={row.workload}>
                    <td><strong>{row.workload}</strong></td>
                    <td>{row.placement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Connectivity models */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Connectivity"
            title={
              <>
                How on-premise <span className="grad">connects to cloud</span>
              </>
            }
            desc="The three common ways to link on-premise infrastructure with your cloud environment."
          />
          <div className="brr-deliver-grid">
            {connectivity.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) + 1}>
                <div className="brr-deliver-card">
                  <h3>{c.title}</h3>
                  <p className="brr-deliver-tag">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid vs multi-cloud */}
      <section className="section brr-what">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Hybrid vs. Multi-Cloud"
            title={
              <>
                Hybrid cloud <span className="grad">vs. multi-cloud</span>
              </>
            }
            desc="These two terms are often used interchangeably, but they mean different things."
          />
          <Reveal as="div" className="brr-answer-copy" delay={2}>
            <p style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center", color: "var(--text-soft)", fontSize: "16px", lineHeight: "1.8" }}>
              <strong>Hybrid cloud</strong> combines on-premise infrastructure with one or more cloud environments. <strong>Multi-cloud</strong> means using two or more public cloud providers — such as Azure and AWS together — without necessarily including on-premise infrastructure at all. A business can run both hybrid and multi-cloud simultaneously: on-premise systems connected to workloads spread across Azure and AWS. CoreGenix designs for whichever combination fits your compliance and resilience needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="section brr-audience">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Who Needs It"
            title={
              <>
                Hybrid cloud <span className="grad">for every sector</span>
              </>
            }
            desc="Deliberate workload placement tuned to the compliance and performance needs of your industry."
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
              desc="What you get once hybrid cloud is deliberate, not accidental."
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
            desc="What sets our hybrid cloud delivery apart."
          />
          <div className="brr-why-grid">
            {whys.map((w, i) => (
              <Reveal key={w} delay={(i % 3) + 1}>
                <div className="brr-why-card">
                  <span className="brr-why-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{w}</h3>
                </div>
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
            desc="Straight answers about hybrid cloud, connectivity, and placement."
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
      <CtaSection title="Stop running your infrastructure by accident" />
    </>
  );
}