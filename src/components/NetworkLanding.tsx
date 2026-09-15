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

export default function NetworkLanding({ service }: Props) {
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
                src="/images/coregenix/service-7.jpg"
                alt="Enterprise network infrastructure"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Network solutions by the numbers">
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
            eyebrow="Network Infrastructure"
            title={
              <>
                What are <span className="grad">network infrastructure services?</span>
              </>
            }
            desc="The design, deployment, security, and management of the networks a business runs on — including LAN, WAN, and SD-WAN architecture, structured cabling, enterprise Wi-Fi, network security, and 24x7 monitoring."
          />
          <div className="brr-check-grid">
            {[
              "Network design & architecture",
              "Structured cabling",
              "Wired & wireless",
              "Network security",
              "24x7 NOC monitoring",
              "Performance optimization",
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
                An outdated network slows <span className="grad">everything down</span>
              </>
            }
            desc="An outdated or poorly designed network slows every application, frustrates every employee, and exposes the whole business to risk."
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
            <p>Downtime, slow performance, and security gaps all trace back to network design. <strong>The right network is invisible — it just works.</strong></p>
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
                Complete Network <span className="grad">Engagements</span>
              </>
            }
            desc="Design, cabling, wireless, security, monitoring, and optimization — under one accountable team."
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

      {/* LAN vs WAN vs SD-WAN */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Networking Basics"
            title={
              <>
                LAN vs. WAN <span className="grad">vs. SD-WAN</span>
              </>
            }
            desc="Three terms that come up in every network conversation — here's what each actually means."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong>{row.term}</strong></td>
                    <td>{row.connects}</td>
                    <td>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cabling Table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Cabling Standards"
            title={
              <>
                Structured cabling <span className="grad">standards, compared</span>
              </>
            }
            desc="The cabling category determines your network's ceiling — CoreGenix specifies the right one for your actual needs."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong>{row.standard}</strong></td>
                    <td>{row.speed}</td>
                    <td>{row.distance}</td>
                    <td>{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security chips */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Security Built In"
            title={
              <>
                Network security <span className="grad">controls we implement</span>
              </>
            }
            desc="Security built into the network design, not bolted on as an afterthought."
          />
          <div className="brr-tags">
            {securityChips.map((chip, i) => (
              <Reveal key={chip} delay={(i % 4) + 1}>
                <span className="brr-tag">{chip}</span>
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
                Network infrastructure <span className="grad">for every sector</span>
              </>
            }
            desc="Design and security tuned to the connectivity needs of your industry."
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
              desc="What you get once your network is properly designed and managed."
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
              desc="What sets our network delivery apart."
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
            desc="Straight answers about network design, cabling, and security."
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
      <CtaSection title="Build a network that never holds you back" />
    </>
  );
}