import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
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
  "Regulatory or data sovereignty rules that rule out shared public cloud tenancy",
  "Unpredictable performance from \"noisy neighbor\" workloads on shared infrastructure",
  "Complex virtualization, storage, and networking expertise required to build it right",
  "Even harder to operate and secure a private cloud well over the long term",
  "Audit and compliance reporting demands that shared clouds can't easily satisfy",
  "Uncertainty over choosing on-premise vs. hosted private cloud deployment",
];

const phases = [
  {
    num: "01",
    title: "Private Cloud Architecture & Design",
    tag: "Design matched to your workloads",
    items: [
      "Capacity planning based on real workload profiles",
      "Compute, storage, and network architecture design",
      "High-availability and redundancy planning",
    ],
  },
  {
    num: "02",
    title: "On-Premise & Hosted Private Cloud",
    tag: "The deployment model that fits",
    items: [
      "On-premise builds inside your own data center",
      "Hosted private cloud in a dedicated data center facility",
      "Migration support between deployment models",
    ],
  },
  {
    num: "03",
    title: "Virtualization Platform",
    tag: "Enterprise-grade compute",
    items: [
      "VMware, Microsoft Hyper-V, Nutanix, or OpenStack",
      "Resource pooling and workload isolation",
      "Automated provisioning and self-service portals",
    ],
  },
  {
    num: "04",
    title: "Storage & Networking",
    tag: "Built for performance and isolation",
    items: [
      "SAN/NAS storage design with tiered performance",
      "Software-defined networking and micro-segmentation",
      "Redundant connectivity and load balancing",
    ],
  },
  {
    num: "05",
    title: "Security & Compliance",
    tag: "Dedicated, auditable environments",
    items: [
      "Network segmentation and access controls",
      "Compliance mapping to ISO 27001, RBI, and DPDPA",
      "Audit-ready logging and reporting",
    ],
  },
  {
    num: "06",
    title: "Ongoing Management",
    tag: "24x7 operations and support",
    items: [
      "Proactive monitoring and capacity management",
      "Patch management and platform upgrades",
      "24x7 incident response and support",
    ],
  },
];

const models = [
  {
    title: "On-Premise Private Cloud",
    desc: "Deployed entirely within your own data center — maximum control over hardware, location, and physical access, ideal for the strictest compliance requirements.",
  },
  {
    title: "Hosted Private Cloud",
    desc: "Dedicated infrastructure hosted in a provider's data center — no capital investment in hardware, still fully isolated and dedicated to your organization alone.",
  },
  {
    title: "Virtual Private Cloud (VPC)",
    desc: "A logically isolated section within a public cloud provider's infrastructure — private-cloud-like isolation with the elasticity of public cloud underneath.",
  },
];

const comparison = [
  { factor: "Tenancy", private: "Single organization, fully dedicated", public: "Shared, multi-tenant", hybrid: "Mix of dedicated and shared" },
  { factor: "Best for", private: "Compliance-heavy, sensitive workloads", public: "Variable workloads, fast scaling", hybrid: "Gradual migration, mixed sensitivity" },
  { factor: "Cost model", private: "Upfront + maintenance (CAPEX), or hosted OPEX", public: "Pay-as-you-go (OPEX)", hybrid: "Blended CAPEX + OPEX" },
  { factor: "Performance", private: "Predictable — no noisy neighbors", public: "Variable, shared resource pools", hybrid: "Predictable where it matters most" },
  { factor: "Typical adopters", private: "BFSI, government, healthcare", public: "Startups, digital-first businesses", hybrid: "Enterprises mid-migration" },
];

const industries = [
  { title: "BFSI", desc: "RBI and DPDPA-aligned infrastructure for core banking and financial data." },
  { title: "Government / PSU", desc: "Data sovereignty and physical control requirements for sensitive workloads." },
  { title: "Healthcare", desc: "Dedicated, auditable environments for patient records and clinical systems." },
  { title: "Manufacturing", desc: "Predictable performance for ERP and plant-connected systems." },
  { title: "Legal & Professional Services", desc: "Client confidentiality requirements that rule out shared tenancy." },
];

export default function PrivateCloudLanding({ service }: Props) {
  const whatWeProvide = service.sections.find((s) => s.heading === "What We Provide");
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
                src="/images/coregenix/service-5.jpg"
                alt="Private cloud solutions"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Private cloud solutions by the numbers">
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
            eyebrow="Private Cloud"
            title={
              <>
                What is a <span className="grad">private cloud?</span>
              </>
            }
            desc="Cloud infrastructure dedicated to a single organization — offering the self-service, scalability, and automation of cloud computing, but with full isolation and control, unlike public cloud's shared, multi-tenant model."
          />
          {whatWeProvide && (
            <div className="brr-check-grid">
              {whatWeProvide.body.map((item, i) => (
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
          )}
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
                Public cloud isn&apos;t always <span className="grad">the right answer</span>
              </>
            }
            desc="Compliance, data sovereignty, and performance requirements can demand dedicated infrastructure that nobody else shares — but building and running a private cloud well takes serious expertise."
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
            <p><strong>CoreGenix builds and manages private cloud environments end to end</strong> — architecture, virtualization, storage, security, and ongoing operations — so dedicated infrastructure doesn&apos;t mean doing it all yourself.</p>
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
                Complete Private Cloud <span className="grad">Engagements</span>
              </>
            }
            desc="From architecture and build to security, compliance, and day-to-day operations."
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

      {/* Deployment models */}
      <section className="section brr-rule">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Deployment Models"
            title={
              <>
                Three ways to run a <span className="grad">private cloud</span>
              </>
            }
            desc="CoreGenix helps you pick the right one and builds it."
          />
          <div className="brr-rule-grid">
            {models.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) + 1}>
                <div className="brr-rule-item">
                  <span className="brr-rule-big">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
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
            eyebrow="Cloud Models"
            title={
              <>
                Private vs. public <span className="grad">vs. hybrid cloud</span>
              </>
            }
            desc="How the three models compare on the factors that matter most for compliance-driven businesses."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Private Cloud</th>
                  <th>Public Cloud</th>
                  <th>Hybrid Cloud</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.factor}>
                    <td><strong>{row.factor}</strong></td>
                    <td>{row.private}</td>
                    <td>{row.public}</td>
                    <td>{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                Private cloud <span className="grad">for every sector</span>
              </>
            }
            desc="Industries and use cases where dedicated infrastructure isn't optional."
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
              desc="What you get from a properly built and managed private cloud."
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
              desc="What sets our private cloud delivery apart."
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
            desc="Straight answers about private cloud, cost, and deployment."
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
      <section className="brr-closing">
        <div className="container brr-closing-inner">
          <Reveal>
            <h2 className="section-title">Get dedicated cloud infrastructure <span className="grad">built for compliance</span></h2>
            <p className="brr-closing-sub">{service.cta}</p>
            <div className="brr-closing-meta">
              <span>Call <a href="tel:+918355958119">+91 83559 58119</a></span>
              <span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span>
              <span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span>
            </div>
            <Link href="/contact" className="btn btn-grad">
              Get Free Consultation
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
