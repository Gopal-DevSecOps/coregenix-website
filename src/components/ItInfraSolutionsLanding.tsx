import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CheckIcon, ArrowRightIcon } from "./Icons";

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
    <>
      {/* Hero */}
      <section className="brr-hero">
        <div className="float-shape float-shape-1" aria-hidden="true" />
        <div className="float-shape float-shape-2" aria-hidden="true" />
        <div className="container brr-hero-grid">
          <div className="brr-hero-content">
            <Reveal as="span" className="eyebrow" delay={1}>
              Solutions
            </Reveal>
            <Reveal delay={2}>
              <h1 className="section-title brr-hero-title">
                IT infrastructure solutions — <span className="grad">networks, data centers &amp; disaster recovery, built for uptime</span>
              </h1>
            </Reveal>
            <Reveal as="p" className="brr-hero-desc" delay={3}>
              Networks, data centers, data backup, and disaster recovery — designed, built, and managed for uptime and growth. CoreGenix covers the full infrastructure stack under one accountable team.
            </Reveal>
            <Reveal as="div" className="brr-hero-actions" delay={4}>
              <Link href="/contact" className="btn btn-grad">
                Get free consultation
                <ArrowRightIcon />
              </Link>
              <Link href="/solutions" className="btn btn-hero-secondary">
                View all solutions
              </Link>
            </Reveal>
          </div>
          <Reveal className="brr-hero-media" delay={3}>
            <div className="brr-hero-img">
              <Image
                src="/images/coregenix/service-2.jpg"
                alt="IT infrastructure solutions"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="IT infrastructure solutions by the numbers">
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
            eyebrow="Overview"
            title={
              <>
                What are <span className="grad">IT infrastructure solutions?</span>
              </>
            }
            desc="IT infrastructure solutions cover the physical and technical foundation a business runs on: Network Infrastructure (LAN, WAN, SD-WAN, and cabling), Data Center Solutions (design, build, and server/virtualization), Data Backup & Restore (automated, on-premise and cloud), and Disaster Recovery & Business Continuity (defined RPO/RTO with tested recovery plans). CoreGenix designs, builds, and manages all four for businesses across India."
          />
          <div className="brr-check-grid">
            {[
              "Network Infrastructure — LAN, WAN, SD-WAN & cabling",
              "Data Center Solutions — design, build & virtualization",
              "Data Backup & Restore — automated, on-premise & cloud",
              "Disaster Recovery & Business Continuity — defined RPO/RTO",
              "Design, build & manage under one team",
              "Delivered for businesses across India",
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

      {/* Four Pillars */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Four Pillars"
            title={
              <>
                Four pillars of a reliable <span className="grad">IT foundation</span>
              </>
            }
            desc="From the network that connects you to the recovery plan that saves you — CoreGenix builds and manages the whole stack."
          />
          <div className="brr-deliver-grid">
            {pillars.map((item, i) => (
              <Reveal key={item.stage} delay={(i % 4) + 1}>
                <div className="brr-deliver-card">
                  <span className="brr-deliver-num">{item.stage}</span>
                  <h3>{item.title}</h3>
                  <p className="brr-deliver-tag">{item.desc}</p>
                  <Link href={item.href} className="brr-deliver-link">
                    Learn more
                    <ArrowRightIcon />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subservices */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What's Included"
            title={
              <>
                What&apos;s included in <span className="grad">each solution</span>
              </>
            }
            desc="A closer look at what CoreGenix delivers across network, data center, backup, and disaster recovery."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Service</th>
                  <th>What&apos;s included</th>
                </tr>
              </thead>
              <tbody>
                {subservices.map((s) => (
                  <tr key={s.title}>
                    <td><strong>{s.stage}</strong></td>
                    <td><strong>{s.title}</strong></td>
                    <td>
                      {s.items.map((item) => (
                        <span key={item} className="brr-cell-item">{item}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Find Your Fit"
            title={
              <>
                Which IT infrastructure solution <span className="grad">do you need?</span>
              </>
            }
            desc="A quick way to figure out where to start, based on your current situation."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
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
                    <td><strong>{row.start}</strong></td>
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
                IT infrastructure <span className="grad">for every sector</span>
              </>
            }
            desc="The right mix of network, data center, backup, and recovery for the uptime and compliance needs of your industry."
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
            desc="Straight answers about network, data center, backup, and disaster recovery."
          />
          <div className="brr-faq-list">
            {faqs.map((f) => (
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
            <h2 className="section-title">Not sure which solution <span className="grad">fits your business?</span></h2>
            <p className="brr-closing-sub">Talk to our experts for a free consultation and a tailored technology plan.</p>
            <div className="brr-closing-meta">
              <span>Call <a href="tel:+918355958119">+91 83559 58119</a></span>
              <span>Email <a href="mailto:sales@cgcein.com">sales@cgcein.com</a></span>
              <span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai</span>
            </div>
            <Link href="/contact" className="btn btn-grad">
              Get free consultation
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
