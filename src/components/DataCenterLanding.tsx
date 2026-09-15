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

export default function DataCenterLanding({ service }: Props) {
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
              IT Infrastructure Solutions
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
                src="/images/coregenix/service-2.jpg"
                alt="Data center solutions"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Data center solutions by the numbers">
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
            eyebrow="Data Center Solutions"
            title={
              <>
                What are <span className="grad">data center solutions?</span>
              </>
            }
            desc="Data center solutions cover the design, build, and management of the facilities that host your servers and critical applications — including power, cooling, virtualization, storage, and 24x7 monitoring. CoreGenix handles everything from a single server room to a full enterprise facility, designed and built for uptime and growth."
          />
          <div className="brr-check-grid">
            {whatWeProvide?.body.map((item, i) => (
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
                An under-built data center <span className="grad">puts everything at risk</span>
              </>
            }
            desc="Business-critical applications need an environment that stays up — power, cooling, redundancy, and physical security. Most server rooms are pieced together over years: messy cabling, uneven cooling, no capacity planning."
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
            <p>When the infrastructure under your applications is fragile, <strong>every small failure becomes an outage — and an outage means lost business.</strong></p>
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
                Complete Data Center <span className="grad">Engagements</span>
              </>
            }
            desc="A complete data center engagement — design, build, power, cooling, virtualization, and ongoing management, under one accountable team."
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

      {/* Tier Ratings */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Tier Ratings"
            title={
              <>
                Data center <span className="grad">tier ratings</span>
              </>
            }
            desc="Tier ratings define the redundancy and availability of a data center facility."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong>{row.tier}</strong></td>
                    <td>{row.availability}</td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* In-House vs Colo vs Cloud */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Hosting Models"
            title={
              <>
                In-house vs. colocation <span className="grad">vs. cloud</span>
              </>
            }
            desc="How the three hosting models compare."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong>{row.factor}</strong></td>
                    <td>{row.inHouse}</td>
                    <td>{row.colo}</td>
                    <td>{row.cloud}</td>
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
                Data centers <span className="grad">for every sector</span>
              </>
            }
            desc="Design and management tuned to the compliance and uptime needs of your industry."
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
              desc="What you get from a properly designed and managed data center."
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
              desc="What sets our data center delivery apart."
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
            desc="Straight answers about data center design, build, and management."
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
            <h2 className="section-title">Get a data center that <span className="grad">your business can rely on</span></h2>
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
