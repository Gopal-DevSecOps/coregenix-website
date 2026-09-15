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
  "Cloud bills that balloon with no governance or cost alerts in place",
  "Security misconfigurations left open on public-facing resources",
  "Workloads lifted-and-shifted without redesign, performing worse than before",
  "No landing zone — resources sprawled with no governance structure",
  "Vendor bias steering decisions toward one platform regardless of fit",
  "Nobody managing the environment after the migration project ends",
];

const phases = [
  {
    num: "01",
    title: "Cloud Architecture",
    tag: "Azure and AWS designed for your workloads",
    items: [
      "Workload-fit architecture design, not generic templates",
      "Compute, storage, and networking sized to actual usage",
      "High-availability and multi-region design where needed",
    ],
  },
  {
    num: "02",
    title: "Migration",
    tag: "Phased, low-risk moves with minimal disruption",
    items: [
      "Wave-based migration planning by priority and risk",
      "Pilot workloads before full-scale migration",
      "Rollback plans for every migration phase",
    ],
  },
  {
    num: "03",
    title: "Security",
    tag: "Identity, network, encryption & compliance controls",
    items: [
      "Identity and access management (IAM) hardening",
      "Network segmentation and security group configuration",
      "Encryption at rest and in transit by default",
    ],
  },
  {
    num: "04",
    title: "Cost Optimization",
    tag: "Right-sizing and savings on every bill",
    items: [
      "Right-sizing of over-provisioned resources",
      "Reserved instances and savings plan recommendations",
      "Automated cost alerts and budget governance",
    ],
  },
  {
    num: "05",
    title: "Landing Zones",
    tag: "Governed, secure foundations from day one",
    items: [
      "Account/subscription structure and naming standards",
      "Baseline security and compliance policies",
      "Centralized logging and monitoring setup",
    ],
  },
  {
    num: "06",
    title: "Ongoing Management",
    tag: "24x7 operations and optimization",
    items: [
      "24x7 monitoring, patching, and incident response",
      "Continuous cost and performance optimization",
      "Monthly reporting and roadmap reviews",
    ],
  },
];

const comparison = [
  { factor: "Best fit for", azure: "Microsoft-centric stacks (365, AD, .NET)", aws: "Broadest service catalog, startups & scale-ups" },
  { factor: "Enterprise integration", azure: "Deep Active Directory & Office 365 integration", aws: "Strong open-source and container ecosystem" },
  { factor: "Market position", azure: "Strong in enterprises already on Microsoft", aws: "Largest global market share, most mature services" },
  { factor: "Hybrid cloud", azure: "Azure Arc for consistent hybrid management", aws: "AWS Outposts for on-premises AWS infrastructure" },
  { factor: "Pricing model", azure: "Pay-as-you-go, reserved instances, hybrid benefit", aws: "Pay-as-you-go, reserved instances, savings plans" },
];

const landingItems = [
  "Account or subscription structure with clear ownership",
  "Baseline identity, networking, and security policies",
  "Centralized logging, monitoring, and cost visibility",
  "Guardrails that prevent common misconfigurations before they happen",
];

const costLevers = [
  "Right-sizing",
  "Reserved Instances",
  "Savings Plans",
  "Auto-scaling",
  "Spot / Low-priority instances",
  "Storage tiering",
  "Idle resource cleanup",
  "Budget alerts & governance",
];

const industries = [
  { title: "BFSI", desc: "Landing zones with compliance controls mapped to RBI and DPDPA." },
  { title: "Retail & E-commerce", desc: "Auto-scaling architecture built for seasonal demand spikes." },
  { title: "Manufacturing", desc: "Cloud-connected ERP and analytics for plant operations." },
  { title: "Healthcare", desc: "Secure, compliant public cloud for clinical applications." },
  { title: "Startups & SaaS", desc: "Cost-efficient, fast-scaling architecture from day one." },
];

export default function PublicCloudLanding({ service }: Props) {
  const whatYouGet = service.sections.find((s) => s.heading === "What You Get");
  const whyChoose = service.sections.find((s) => s.heading === "Why Choose CoreGenix");
  const whatWeProvide = service.sections.find((s) => s.heading === "What We Provide");

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
                src="/images/coregenix/service-7.jpg"
                alt="Public cloud solutions"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Public cloud solutions by the numbers">
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
            eyebrow="Cloud Infrastructure Solutions"
            title={
              <>
                What are <span className="grad">public cloud solutions?</span>
              </>
            }
            desc="Public cloud solutions cover the adoption, migration, and ongoing management of workloads on shared, multi-tenant infrastructure from providers like Microsoft Azure and Amazon Web Services (AWS), billed on actual usage. CoreGenix delivers vendor-neutral architecture, phased migration, security and landing zone design, cost optimization, and 24x7 management across both platforms."
          />
          <div className="brr-check-grid">
            {(whatWeProvide ? whatWeProvide.body : []).map((item, i) => (
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
                Poorly planned clouds slow <span className="grad">everything down</span>
              </>
            }
            desc="Public cloud offers scale and flexibility — but only if it's designed right. Poorly planned cloud estates lead to bill shock, security gaps, and workloads that perform worse than on-premise."
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
            <p>Moving to cloud isn&apos;t a destination — <strong>it&apos;s an ongoing operation.</strong> Without the right partner, you get the worst of both worlds: cloud complexity without cloud benefits.</p>
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
                A Complete Public Cloud <span className="grad">Engagement</span>
              </>
            }
            desc="Architecture, migration, security, cost, and ongoing management — all under one accountable team."
          />
          <div className="brr-deliver-grid">
            {phases.map((d, i) => (
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

      {/* Azure vs AWS */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Platforms Compared"
            title={
              <>
                Azure vs. AWS — <span className="grad">how they compare</span>
              </>
            }
            desc="Both are excellent platforms. Here's how they typically differ for businesses evaluating a first move to public cloud."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Microsoft Azure</th>
                  <th>Amazon Web Services (AWS)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.factor}>
                    <td><strong>{row.factor}</strong></td>
                    <td>{row.azure}</td>
                    <td>{row.aws}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Landing zone */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Landing Zones"
            title={
              <>
                What a cloud landing <span className="grad">zone includes</span>
              </>
            }
            desc="A pre-configured, secure environment that serves as the governed foundation for deploying workloads on Azure or AWS."
          />
          <div className="brr-check-grid">
            {landingItems.map((item, i) => (
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

      {/* Cost levers */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Cost Optimization"
            title={
              <>
                Cost optimization <span className="grad">levers we use</span>
              </>
            }
            desc="Specific techniques CoreGenix applies to keep public cloud spend predictable, not reactive."
          />
          <div className="brr-tags">
            {costLevers.map((lever, i) => (
              <Reveal key={lever} delay={(i % 4) + 1}>
                <span className="brr-tag">{lever}</span>
              </Reveal>
            ))}
          </div>
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
                Public cloud <span className="grad">for every sector</span>
              </>
            }
            desc="Architecture and governance tuned to the compliance and scaling needs of your industry."
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
              desc="What you get once public cloud is designed and managed the right way."
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
              desc="What sets our public cloud delivery apart."
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
            desc="Straight answers about Azure, AWS, and public cloud costs."
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
      <CtaSection title="Adopt public cloud the right way" />
    </>
  );
}