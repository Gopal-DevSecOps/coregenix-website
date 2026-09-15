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

const models = [
  { stage: "Dedicated", title: "Private Cloud", desc: "Dedicated, secure, compliant infrastructure — on-premise or hosted, with no shared tenancy.", href: "/solutions/private-cloud" },
  { stage: "Elastic", title: "Public Cloud (Azure & AWS)", desc: "Fast-scaling, pay-as-you-go infrastructure on the world's leading cloud platforms.", href: "/solutions/public-cloud" },
  { stage: "Blended", title: "Hybrid Cloud", desc: "The control of on-premise combined with the scale of cloud — managed as a single environment.", href: "/solutions/hybrid-cloud" },
];

const subservices = [
  {
    stage: "Dedicated",
    title: "Private Cloud",
    desc: "CoreGenix builds and manages private cloud environments that give you dedicated, secure, and compliant cloud infrastructure.",
    items: ["Private cloud architecture — design matched to your workloads", "On-premise & hosted private cloud — the choice that fits", "Virtualization platform — enterprise-grade compute"],
    href: "/solutions/private-cloud",
  },
  {
    stage: "Elastic",
    title: "Public Cloud (Azure & AWS)",
    desc: "CoreGenix helps you adopt Azure and AWS public cloud — the right architecture, migration, and ongoing management.",
    items: ["Cloud architecture — Azure and AWS designed for your workloads", "Migration — phased, low-risk moves with minimal disruption", "Security — identity, network, encryption, and compliance controls"],
    href: "/solutions/public-cloud",
  },
  {
    stage: "Blended",
    title: "Hybrid Cloud",
    desc: "CoreGenix builds hybrid cloud environments that combine the control of on-premise with the scale of cloud — managed as one.",
    items: ["Hybrid architecture — decide what runs where, and why", "Connectivity — secure links between on-premise and cloud", "Unified management — one operating model across both"],
    href: "/solutions/hybrid-cloud",
  },
];

const comparisonData = [
  { factor: "Tenancy", private: "Single organization, fully dedicated", public: "Shared, multi-tenant", hybrid: "Mix of dedicated and shared" },
  { factor: "Cost model", private: "CAPEX or hosted OPEX", public: "Pay-as-you-go (OPEX)", hybrid: "Blended CAPEX + OPEX" },
  { factor: "Scalability", private: "Limited by owned/leased capacity", public: "Near-instant, elastic scaling", hybrid: "Scale on public, stability on private" },
  { factor: "Compliance fit", private: "Strongest — dedicated environment", public: "Good, with correct configuration", hybrid: "Strong — sensitive data stays private" },
  { factor: "Typical adopters", private: "BFSI, government, healthcare", public: "Startups, digital-first businesses", hybrid: "Enterprises mid-migration" },
];

const decisionData = [
  { situation: "Strict data sovereignty or regulatory requirements", start: "Private Cloud" },
  { situation: "Highly variable or seasonal workloads", start: "Public Cloud" },
  { situation: "Fast-growing startup with limited capital budget", start: "Public Cloud" },
  { situation: "Some data must stay on-premise, rest can scale freely", start: "Hybrid Cloud" },
  { situation: "Mid-way through a data center exit", start: "Hybrid Cloud" },
  { situation: "Need dedicated performance with no shared tenants", start: "Private Cloud" },
];

const industries = [
  { title: "BFSI", desc: "Private or hybrid cloud aligned to RBI and DPDPA norms." },
  { title: "Manufacturing", desc: "Hybrid infrastructure connecting plant systems with cloud analytics." },
  { title: "Healthcare", desc: "Compliant private or hybrid cloud for patient data." },
  { title: "Retail & E-commerce", desc: "Elastic public cloud built for seasonal demand spikes." },
  { title: "Government / PSU", desc: "Private and hybrid cloud aligned to data sovereignty mandates." },
];

const faqs = [
  { q: "What is the difference between private, public, and hybrid cloud?", a: "Private cloud is dedicated infrastructure for a single organization. Public cloud is shared, multi-tenant infrastructure from providers like Azure or AWS, billed on usage. Hybrid cloud combines both, letting sensitive workloads stay private while others scale on public cloud." },
  { q: "Which cloud infrastructure model is right for my business?", a: "The right model depends on compliance needs, workload variability, and budget. Businesses with strict data sovereignty needs often choose private cloud; those needing fast scaling choose public cloud; and most enterprises mid-migration adopt hybrid cloud." },
  { q: "Does CoreGenix support both Azure and AWS?", a: "Yes, CoreGenix provides vendor-neutral public cloud solutions across both Microsoft Azure and Amazon Web Services (AWS), recommending the platform that best fits each client's workloads and existing technology stack." },
  { q: "Can I move between cloud infrastructure models later?", a: "Yes, cloud infrastructure is not a permanent decision. Many businesses start with public or private cloud and evolve into a hybrid model as compliance, cost, or performance requirements change over time." },
  { q: "What does cloud infrastructure architecture involve?", a: "Cloud infrastructure architecture involves designing compute, storage, and networking components matched to workload requirements, along with security controls, connectivity, and management processes appropriate to the chosen cloud model." },
  { q: "Is hybrid cloud more expensive than public or private cloud alone?", a: "Hybrid cloud cost depends on the workload split between environments. It can cost more than public cloud alone due to maintaining two environments, but often costs less than an all-private approach while still meeting compliance needs." },
];

export default function CloudInfraSolutionsLanding() {
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
                Cloud infrastructure solutions — <span className="grad">private, public &amp; hybrid, done right</span>
              </h1>
            </Reveal>
            <Reveal as="p" className="brr-hero-desc" delay={3}>
              Private, public (Azure &amp; AWS), and hybrid cloud — architecture, migration, security, and ongoing management, delivered by one team so nothing falls between the cracks.
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
                src="/images/coregenix/service-7.jpg"
                alt="Cloud infrastructure solutions"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="brr-stats" aria-label="Cloud infrastructure solutions by the numbers">
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
                What are <span className="grad">cloud infrastructure solutions?</span>
              </>
            }
            desc="The three ways a business can run cloud computing — Private Cloud, Public Cloud, and Hybrid Cloud — designed, migrated to, secured, and managed as one accountable engagement by CoreGenix."
          />
          <div className="brr-check-grid">
            {[
              "Private Cloud — dedicated infrastructure",
              "Public Cloud — Azure & AWS",
              "Hybrid Cloud — both, managed as one",
              "Architecture, migration & security",
              "Ongoing management included",
              "One accountable team",
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

      {/* Three Models */}
      <section className="section brr-deliver">
        <div className="container">
          <SectionHeading
            center
            eyebrow="The Models"
            title={
              <>
                Three cloud models, <span className="grad">one team</span>
              </>
            }
            desc="Whichever model fits your compliance, cost, and performance needs — CoreGenix designs, migrates, secures, and manages it end to end."
          />
          <div className="brr-deliver-grid">
            {models.map((item, i) => (
              <Reveal key={item.stage} delay={(i % 3) + 1}>
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

      {/* Subservices detail */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What's Included"
            title={
              <>
                A closer look at <span className="grad">each model</span>
              </>
            }
            desc="What CoreGenix delivers across private, public, and hybrid cloud."
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

      {/* Comparison table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Compare"
            title={
              <>
                Private vs. public vs. <span className="grad">hybrid cloud</span>
              </>
            }
            desc="How the three models compare on the factors that actually drive the decision."
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
                {comparisonData.map((row) => (
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

      {/* Decision table */}
      <section className="section brr-table-sec">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Find Your Fit"
            title={
              <>
                Which cloud model <span className="grad">do you need?</span>
              </>
            }
            desc="A quick way to figure out where to start, based on your situation."
          />
          <div className="brr-table-wrap">
            <table className="brr-table">
              <thead>
                <tr>
                  <th>Your situation</th>
                  <th>Consider</th>
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
                Cloud infrastructure <span className="grad">for every sector</span>
              </>
            }
            desc="The right cloud model for the compliance and performance needs of your industry."
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
            desc="Straight answers about choosing between private, public, and hybrid cloud."
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