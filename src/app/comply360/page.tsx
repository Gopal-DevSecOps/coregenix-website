import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import {
  ShieldIcon,
  ShieldCheckIcon,
  ShieldAlertIcon,
  ClipboardCheckIcon,
  UserIcon,
  ScanIcon,
  DatabaseIcon,
  NetworkIcon,
  BugIcon,
  FileTextIcon,
  SearchIcon,
  ClockIcon,
  LayersIcon,
  RouteIcon,
  RefreshIcon,
  SettingsIcon,
  ActivityIcon,
  BankIcon,
  HeartIcon,
  BoxIcon,
  FactoryIcon,
  CloudIcon,
  GlobeIcon,
  CpuIcon,
  CheckIcon,
  CloseIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./comply360.css";

export const metadata: Metadata = {
  title: "Comply360 — Unified Compliance Platform for DPDP",
  description:
    "Comply360 by CoreGenix is an AI-native DPDP compliance platform — consent, DSAR, gap assessment, PIA, ROPA, TPRM, breach management and policy store in one system of record.",
  keywords: [
    "Comply360",
    "DPDP compliance platform",
    "DPDP Act 2023",
    "consent management",
    "DSAR software",
    "ROPA",
    "privacy impact assessment",
    "TPRM",
    "breach management",
    "privacy governance",
    "data protection India",
  ],
  alternates: { canonical: "/comply360" },
  openGraph: {
    title: "Comply360 — Unified Compliance Platform — CoreGenix",
    description:
      "AI-native DPDP compliance platform — consent, rights, assessments, ROPA, vendors and breach response in one system of record.",
    url: `${SITE.url}/comply360`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Comply360 — Unified Compliance Platform",
    description:
      "AI-native DPDP compliance platform — consent, rights, assessments, ROPA, vendors and breach response in one system of record.",
  },
};

const heroStats = [
  { value: "₹250 Cr", label: "Maximum penalty per instance" },
  { value: "72 Hrs", label: "Breach notification window" },
  { value: "13 Nov 2026", label: "Consent Manager registration opens" },
  { value: "13 May 2027", label: "Full compliance deadline" },
];

const phases = [
  {
    tag: "Phase I",
    title: "Live since 13 Nov 2025",
    desc: "Data Protection Board of India constituted; core provisions in force.",
  },
  {
    tag: "Phase II",
    title: "13 Nov 2026",
    desc: "Consent Manager registration opens; technical and financial conditions apply.",
  },
  {
    tag: "Phase III",
    title: "13 May 2027",
    desc: "Notices, breach reporting, DPO duties and penalties fully enforceable.",
  },
];

const blockers = [
  {
    icon: SearchIcon,
    title: "Blind data estate",
    desc: "Personal data sprawls across cloud, SaaS, files and on-prem. Teams cannot prove what they hold.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Manual consent & rights",
    desc: "Notices, preferences, DSARs and withdrawals live in tickets. Audit trails break under scrutiny.",
  },
  {
    icon: RouteIcon,
    title: "Vendor & transfer risk",
    desc: "Processors and cross-border flows sit in contract folders — not linked to the live data map.",
  },
  {
    icon: ClockIcon,
    title: "Assessment bottleneck",
    desc: "Gap assessments and PIAs take weeks of interviews. Evidence is scattered at sign-off.",
  },
  {
    icon: LayersIcon,
    title: "Tool & spreadsheet sprawl",
    desc: "Four or more point solutions mean four inventories and endless reconciliation before every board pack.",
  },
  {
    icon: UserIcon,
    title: "Talent drain",
    desc: "Privacy, security and legal burn cycles on discovery grunt work instead of risk decisions.",
  },
];

const modules = [
  {
    icon: ClipboardCheckIcon,
    title: "Consent",
    desc: "Purpose-bound, withdrawable, audit-ready consent across channels.",
  },
  {
    icon: UserIcon,
    title: "DSAR",
    desc: "Intake, verify and fulfil Data Principal rights with tracked SLAs.",
  },
  {
    icon: ScanIcon,
    title: "Gap Assessment",
    desc: "Benchmark controls against the DPDP Act; own remediation.",
  },
  {
    icon: ShieldAlertIcon,
    title: "PIA",
    desc: "Structured impact assessments with risk scoring and sign-off.",
  },
  {
    icon: DatabaseIcon,
    title: "ROPA",
    desc: "Living records linked to systems, vendors, purposes and retention.",
  },
  {
    icon: NetworkIcon,
    title: "TPRM",
    desc: "Onboard, assess and monitor processors continuously.",
  },
  {
    icon: BugIcon,
    title: "Breach Management",
    desc: "Triage incidents, statutory clocks, defensible trails.",
  },
  {
    icon: FileTextIcon,
    title: "Policy Store",
    desc: "AI-drafted policies — edit, approve, map to controls.",
  },
];

const archInputs = [
  {
    title: "Regulatory Inputs",
    desc: "DPDP Act 2023 & Rules 2025 · global privacy laws · industry standards · regulatory updates",
  },
  {
    title: "Enterprise Data Sources",
    desc: "Cloud & SaaS apps · databases & servers · files, docs & email · APIs & third-party systems",
  },
];

const archEngine = [
  { title: "Discovery & Classification", desc: "Automated, AI-tagged" },
  { title: "Assessments", desc: "Gap, PIA, ROPA" },
  { title: "Consent & DSAR", desc: "Capture to fulfilment" },
  { title: "Breach Management", desc: "Detect, respond, comply" },
];

const archOutcomes = [
  "DPDP compliance, met with confidence",
  "Faster privacy operations",
  "Reduced regulatory risk",
  "Audit readiness, always",
  "Executive visibility",
];

const approachSteps = [
  {
    icon: SearchIcon,
    title: "Discover",
    desc: "Find personal data with agents or agentless scans across systems and files.",
  },
  {
    icon: LayersIcon,
    title: "Classify",
    desc: "Label structured and unstructured data so sensitivity and purpose are clear.",
  },
  {
    icon: ScanIcon,
    title: "Map & Assess",
    desc: "Build ROPA, run gap assessments and PIAs on real processing activity.",
  },
  {
    icon: UserIcon,
    title: "Operate Rights",
    desc: "Manage consent, DSAR and third-party risk from one workspace.",
  },
  {
    icon: FileTextIcon,
    title: "AI Policies",
    desc: "Generate, review and publish policies in the Policy Store, linked to controls.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Govern & Prove",
    desc: "Monitor risk, respond to breaches and stay audit-ready with a living trail.",
  },
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: "Regulatory Readiness",
    points: [
      "Single system of record across consent, ROPA, PIA, TPRM and breach",
      "Faster response to Board / Data Protection Board queries",
      "Evidence packs instead of war-room assemblies",
    ],
  },
  {
    icon: ShieldAlertIcon,
    title: "Risk Reduction",
    points: [
      "Living map of personal data — structured and unstructured",
      "Vendor and transfer exposure linked to real assets",
      "High-risk processing assessed before launch",
    ],
  },
  {
    icon: ActivityIcon,
    title: "Operational Leverage",
    points: [
      "One login for privacy, legal, security and business",
      "Discovery feeds every workflow automatically",
      "Less tool sprawl, less spreadsheet reconciliation",
    ],
  },
];

const aiBenefits = [
  {
    icon: RefreshIcon,
    value: "70%",
    title: "Faster assessment cycles",
    desc: "AI pre-fills questionnaires from existing ROPA and evidence — analysts review instead of rewrite.",
  },
  {
    icon: FileTextIcon,
    value: "10X",
    title: "Faster policy drafts",
    desc: "First-draft privacy, retention and vendor policies tailored to your processing profile, in minutes.",
  },
  {
    icon: SettingsIcon,
    value: "40%",
    title: "Lower programme cost",
    desc: "Fewer consultant hours, less manual coordination, one system replacing tool sprawl.",
  },
];

const responsibleAI = [
  "AI-recommended, actionable insights",
  "Intelligent gap detection before findings appear",
  "AI usage view & token savings",
  "Evidence summarisation for decision-ready reviews",
  "Human-in-the-loop by design",
  "Context-aware drafts from your ROPA",
];

const buildPoints = [
  "18–36 months to cover consent, discovery, ROPA, PIA, TPRM and breach",
  "Ongoing engineering for connectors, classifiers and policy engines",
  "Regulation and rule changes force a perpetual backlog",
  "Opportunity cost: core product talent diverted",
  "Hidden cost: 8–15 FTEs across engineering, privacy and SecOps",
];

const buyPoints = [
  "Months to first demonstrable posture — not years",
  "India-aligned DPDP modules out of the box",
  "AI assessments, policies and gap detection from day one",
  "Vendor roadmap absorbs Act and rule updates",
  "Your team configures and governs — doesn't reinvent plumbing",
];

const roadmap = [
  {
    phase: "Phase 0",
    title: "Foundation",
    items: ["Scope & data domains", "Connect systems", "Baseline discovery", "Team onboarding"],
    goal: "Onboard — first inventory signal",
  },
  {
    phase: "Phase 1",
    title: "Control Plane Live",
    items: ["Classification tuned", "Consent + DSAR live", "First Gap / PIA run", "Board posture view"],
    goal: "Get Ready — unified posture narrative",
  },
  {
    phase: "Phase 2",
    title: "Extend the Suite",
    items: ["ROPA industrialised", "TPRM inventory", "Policy Store live", "AI-assisted ops habit"],
    goal: "Set — full suite adoption",
  },
  {
    phase: "Phase 3",
    title: "Operate & Optimise",
    items: ["Continuous monitoring", "Breach playbooks", "KPI dashboards", "Programme cost-down"],
    goal: "Go — AI-assisted operations",
  },
];

const sectors = [
  {
    icon: BankIcon,
    title: "BFSI",
    desc: "KYC data, transaction records and high-volume consent flows.",
  },
  {
    icon: HeartIcon,
    title: "Healthcare",
    desc: "Patient data, provider networks and sensitive-processing rigor.",
  },
  {
    icon: BoxIcon,
    title: "E-commerce & Retail",
    desc: "Marketing consent, loyalty programmes and cross-border catalogues.",
  },
  {
    icon: FactoryIcon,
    title: "Manufacturing & Hitech",
    desc: "Children's data, guardian verification and campus systems.",
  },
  {
    icon: CloudIcon,
    title: "SaaS & IT Services",
    desc: "Multi-tenant data, sub-processor chains and DPA management.",
  },
  {
    icon: GlobeIcon,
    title: "Government & PSU",
    desc: "Citizen data, legacy systems and public-accountability reporting.",
  },
];

const whyCoreGenix = [
  {
    icon: ShieldIcon,
    title: "Security Pedigree",
    desc: "Built by a cybersecurity-first team, so consent, discovery and evidence pipelines are engineered to hold up under scrutiny — not just look good in a demo.",
  },
  {
    icon: GlobeIcon,
    title: "India-First Design",
    desc: "Modules map directly to the DPDP Act 2023 and DPDP Rules 2025 — not retrofitted from GDPR templates.",
  },
  {
    icon: CpuIcon,
    title: "AI With a Human in the Loop",
    desc: "Automation speeds up drafts and detection; your privacy, legal and security leads stay the decision-makers.",
  },
  {
    icon: RefreshIcon,
    title: "Partner, Not Just Vendor",
    desc: "Guided rollout, working sessions and a roadmap that absorbs future Act and Rule updates for you.",
  },
];

const faqs = [
  {
    q: "What is Comply360?",
    a: "Comply360 is an AI-native unified compliance platform for India's DPDP Act. It brings consent, DSAR, gap assessment, PIA, ROPA, third-party risk, breach management and a policy store into one system of record.",
  },
  {
    q: "Which DPDP deadlines should organisations plan for?",
    a: "Phase I has been live since 13 November 2025, Consent Manager registration opens on 13 November 2026, and full operational compliance — notices, breach reporting, DPO duties and penalties — applies from 13 May 2027.",
  },
  {
    q: "How does Comply360 use AI?",
    a: "AI pre-fills assessment questionnaires from existing ROPA and evidence, drafts policies, detects gaps early and summarises evidence. It is human-in-the-loop by design — privacy, legal and security leads remain the decision-makers.",
  },
  {
    q: "Should we build a compliance platform in-house or buy Comply360?",
    a: "An internal build typically takes 18–36 months and 8–15 FTEs across engineering, privacy and SecOps. Comply360 delivers India-aligned DPDP modules out of the box, with demonstrable posture in months and a roadmap that absorbs future Act and rule updates.",
  },
  {
    q: "Which industries does Comply360 support?",
    a: "Comply360 supports BFSI, healthcare, e-commerce and retail, manufacturing and hitech, SaaS and IT services, and government and PSU organisations — each tuned to sector-specific data and consent patterns.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Comply360 Unified Compliance Platform",
  description:
    "AI-native DPDP compliance platform unifying consent, DSAR, gap assessment, PIA, ROPA, TPRM, breach management and policy store in one system of record.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: "IN",
  url: `${SITE.url}/comply360`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Comply360", item: `${SITE.url}/comply360` },
  ],
};

export default function Comply360Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero cy-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-3" aria-hidden="true" />
          <span className="cy-hero-shield" aria-hidden="true">
            <ShieldCheckIcon />
          </span>
          <div className="container">
            <span className="cy-hero-badge">
              <ShieldCheckIcon />
              The Unified Compliance Platform
            </span>
            <h1 className="page-hero-title">
              Privacy Governance, <span className="grad">Unified</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              Complete visibility, governance and automation for end-to-end privacy management —
              consent, rights, assessments, ROPA, vendors and breach response in one system of record.
            </Reveal>
            <Reveal className="cy-hero-actions" delay={2}>
              <Link href="/contact" className="btn btn-grad">
                Request a Demo
                <ArrowRightIcon />
              </Link>
              <Link href="#platform" className="btn btn-hero-secondary">
                Explore Platform
              </Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-hero-secondary">
                Talk to an Expert
              </a>
            </Reveal>
          </div>
        </section>

        <section className="cy-strip" aria-label="Comply360 at a glance">
          <div className="container">
            <div className="cy-strip-grid">
              {heroStats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="cy-strip-item">
                    <span className="cy-strip-num">{stat.value}</span>
                    <span className="cy-strip-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-dpdp">
          <div className="container">
            <SectionHeading
              center
              eyebrow="DPDP Act"
              title={
                <>
                  Why the DPDP Act <span className="grad">Matters Now</span>
                </>
              }
              desc="The law is live and the enforcement runway is closing. Three phases, one closing window."
            />
            <div className="cy-timeline-grid">
              {phases.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) + 1}>
                  <article className="cy-phase">
                    <span className="cy-phase-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-blockers section-dark cy-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="The Problem"
              title={
                <>
                  Where Privacy Programmes <span className="grad">Get Stuck</span>
                </>
              }
              desc="Six recurring failure points we hear from privacy, security and legal teams."
            />
            <div className="cy-grid-3">
              {blockers.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) + 1}>
                  <article className="cy-card cy-card--dark">
                    <span className="icon-box">
                      <b.icon />
                    </span>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={2}>
              <p className="cy-note">
                <strong>Core pain:</strong> accountability under DPDP needs one story — purpose, consent,
                location, processors and impact — but most organisations still assemble it by hand.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="platform" className="section cy-platform">
          <div className="container">
            <SectionHeading
              center
              eyebrow="The Platform"
              title={
                <>
                  About <span className="grad">Comply360</span>
                </>
              }
              desc="An AI-native compliance platform for India's DPDP Act — eight modules, one system of record."
            />
            <div className="cy-grid-4">
              {modules.map((m, i) => (
                <Reveal key={m.title} delay={(i % 4) + 1}>
                  <article className="cy-card">
                    <span className="icon-box">
                      <m.icon />
                    </span>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-architecture section-dark cy-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="Architecture"
              title={
                <>
                  Platform <span className="grad">Architecture</span>
                </>
              }
              desc="One engine, fed by every source of truth, driving measurable business outcomes."
            />
            <div className="cy-arch-grid">
              <Reveal delay={1}>
                <div className="cy-arch-col">
                  <div className="cy-arch-title">Inputs</div>
                  <ul className="cy-arch-list">
                    {archInputs.map((item) => (
                      <li key={item.title}>
                        <CheckIcon />
                        <span>
                          <strong>{item.title}</strong>
                          <span>{item.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="cy-arch-col cy-arch-col--engine">
                  <div className="cy-arch-title">Comply360 Engine</div>
                  <div className="cy-arch-engine-name">Privacy Governance Engine</div>
                  <div className="cy-arch-tags">
                    <span className="cy-arch-tag">AI-powered</span>
                    <span className="cy-arch-tag">Intelligent</span>
                    <span className="cy-arch-tag">Automated</span>
                    <span className="cy-arch-tag">Integrated</span>
                  </div>
                  <ul className="cy-arch-list">
                    {archEngine.map((item) => (
                      <li key={item.title}>
                        <CheckIcon />
                        <span>
                          <strong>{item.title}</strong>
                          <span>{item.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="cy-arch-col">
                  <div className="cy-arch-title">Business Outcomes</div>
                  <ul className="cy-arch-list">
                    {archOutcomes.map((item) => (
                      <li key={item}>
                        <CheckIcon />
                        <span>
                          <strong>{item}</strong>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <Reveal delay={3}>
              <p className="cy-note">
                <strong>One platform.</strong> Complete privacy lifecycle. Built for DPDP and beyond.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section cy-approach">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Approach"
              title={
                <>
                  The Comply360 <span className="grad">Guided Approach</span>
                </>
              }
              desc="Six connected steps — from finding personal data to proving you protect it. A continuous loop, not a one-time project."
            />
            <div className="cy-steps-grid">
              {approachSteps.map((s, i) => (
                <Reveal key={s.title} delay={(i % 6) + 1}>
                  <article className="cy-step">
                    <span className="cy-step-num">{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-benefits section-dark cy-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="Business Case"
              title={
                <>
                  Benefits of <span className="grad">Comply360</span>
                </>
              }
              desc="Three ways a unified platform changes how the organisation runs privacy."
            />
            <div className="cy-grid-3">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) + 1}>
                  <article className="cy-card cy-card--dark">
                    <span className="icon-box">
                      <b.icon />
                    </span>
                    <h3>{b.title}</h3>
                    <ul className="cy-arch-list">
                      {b.points.map((point) => (
                        <li key={point}>
                          <CheckIcon />
                          <span>
                            <strong>{point}</strong>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={2}>
              <p className="cy-note">
                <strong>Management takeaway:</strong> Comply360 turns DPDP from a recurring scramble into a
                governed operating system — with clear owners, measurable posture and reusable evidence.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section cy-ai">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Artificial Intelligence"
              title={
                <>
                  What Benefits from <span className="grad">AI</span>
                </>
              }
              desc="Human-in-the-loop automation across the compliance workflow."
            />
            <div className="cy-ai-grid">
              {aiBenefits.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) + 1}>
                  <article className="cy-ai-card">
                    <span className="cy-ai-num">{a.value}</span>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={3}>
              <p className="cy-note">
                <strong>Responsible AI, by design:</strong> automation accelerates the work — your privacy,
                legal and security leads stay the decision-makers.
              </p>
            </Reveal>
            <ul className="cy-ai-list">
              {responsibleAI.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section cy-build section-dark cy-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="The Decision"
              title={
                <>
                  Build <span className="grad">vs. Buy</span>
                </>
              }
              desc="What it actually takes to cover consent, discovery, ROPA, PIA, TPRM and breach in-house."
            />
            <div className="cy-build-grid">
              <Reveal delay={1}>
                <div className="cy-build-col cy-build-col--build">
                  <div className="cy-build-head">
                    <CloseIcon />
                    <div>
                      <h3>Build</h3>
                      <span className="cy-build-sub">Internal Platform</span>
                    </div>
                  </div>
                  <ul className="cy-build-list">
                    {buildPoints.map((point) => (
                      <li key={point}>
                        <CloseIcon />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="cy-build-col cy-build-col--buy">
                  <div className="cy-build-head">
                    <CheckIcon />
                    <div>
                      <h3>Buy Comply360</h3>
                      <span className="cy-build-sub">Purpose-Built AI Platform</span>
                    </div>
                  </div>
                  <ul className="cy-build-list">
                    {buyPoints.map((point) => (
                      <li key={point}>
                        <CheckIcon />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section cy-roadmap">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Roadmap"
              title={
                <>
                  Implementation <span className="grad">Roadmap</span>
                </>
              }
              desc="Four phases from foundation to AI-assisted, steady-state operations."
            />
            <div className="cy-roadmap-grid">
              {roadmap.map((r, i) => (
                <Reveal key={r.phase} delay={(i % 4) + 1}>
                  <article className="cy-roadmap-card">
                    <span className="cy-roadmap-phase">{r.phase}</span>
                    <h3>{r.title}</h3>
                    <ul className="cy-roadmap-list">
                      {r.items.map((item) => (
                        <li key={item}>
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="cy-roadmap-goal">{r.goal}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-sectors section-dark cy-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="Sectors"
              title={
                <>
                  Built to Fit <span className="grad">Your Sector</span>
                </>
              }
              desc="The same core platform, tuned to sector-specific data and consent patterns."
            />
            <div className="cy-grid-3">
              {sectors.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) + 1}>
                  <article className="cy-sector-card">
                    <span className="icon-box">
                      <s.icon />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-why">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Why CoreGenix"
              title={
                <>
                  A Security-First Team <span className="grad">Behind the Platform</span>
                </>
              }
              desc="Comply360 is powered by a team that lives in privacy and security engineering — not a compliance checklist bolted onto generic software."
            />
            <div className="cy-grid-4">
              {whyCoreGenix.map((w, i) => (
                <Reveal key={w.title} delay={(i % 4) + 1}>
                  <article className="cy-card">
                    <span className="icon-box">
                      <w.icon />
                    </span>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-faq section-dark cy-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="FAQ"
              title={
                <>
                  Comply360 <span className="grad">FAQ</span>
                </>
              }
            />
            <div className="cy-faq-list">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <div className="cy-faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section cy-cta">
          <div className="container">
            <Reveal>
              <div className="cy-cta-box">
                <div>
                  <h2>Adopt Comply360 as your DPDP system of record</h2>
                  <p>
                    Unify consent, rights, assessments, ROPA, vendors and breach response. Let AI multiply
                    your team. Request a demo and a tailored ROI worksheet.
                  </p>
                </div>
                <Link href="/contact" className="btn btn-light">
                  Request a Demo
                  <ArrowRightIcon />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
