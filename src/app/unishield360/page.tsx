import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import {
  ShieldIcon,
  LockIcon,
  CloudIcon,
  MonitorIcon,
  SettingsIcon,
  DatabaseIcon,
  RadarIcon,
  NetworkIcon,
  CpuIcon,
  EyeIcon,
  ClipboardCheckIcon,
  ShieldCheckIcon,
  BugIcon,
  ScanIcon,
  ActivityIcon,
  RefreshIcon,
  MailIcon,
  EmailTrapIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./unishield360.css";

export const metadata: Metadata = {
  title: "UniShield360 — Unified Cyber Assurance Platform",
  description:
    "UniShield360 by CoreGenix — a self-healing, military-grade unified cyber assurance platform (UCAP) with 30+ security products, NOC, SOC, TOC and NextGen vulnerability management in a single pane of glass.",
  keywords: [
    "UniShield360",
    "unified cyber assurance platform",
    "managed SOC",
    "network operations center",
    "threat operation center",
    "vulnerability management",
    "cyber security products",
  ],
  alternates: { canonical: "/unishield360" },
  openGraph: {
    title: "UniShield360 — Unified Cyber Assurance Platform — CoreGenix",
    description:
      "UniShield360 UCAP — 30+ security products built-in, NOC, SOC, TOC and NGVA unified in a single pane of glass.",
    url: `${SITE.url}/unishield360`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "UniShield360 — Unified Cyber Assurance Platform",
    description:
      "UniShield360 UCAP — 30+ security products built-in, NOC, SOC, TOC and NGVA unified in a single pane of glass.",
  },
};

const uspStats = [
  { value: "10X", label: "Increase in security coverage" },
  { value: "2HRS", label: "Deployment time" },
  { value: "100%", label: "Data locality" },
  { value: "4X", label: "Faster resolution" },
  { value: "90%", label: "Reduction in cyber assurance cost" },
];

const platformPoints = [
  {
    icon: ClipboardCheckIcon,
    title: "Centralized Management",
    desc: "UniShield consolidates security operations, simplifying management and monitoring with a unified interface.",
  },
  {
    icon: RadarIcon,
    title: "Actionable Insights",
    desc: "Proactive threat intelligence reveals vulnerabilities and guides strategic defense enhancements through data analysis.",
  },
  {
    icon: CloudIcon,
    title: "Scalability and Flexibility",
    desc: "Scalable and adaptable security solutions tailored to businesses of all sizes, ensuring growth-aligned protection.",
  },
];

const products = [
  {
    icon: NetworkIcon,
    title: "Network Flow Management",
    desc: "Real-time visibility into network traffic flows to spot anomalies and keep your infrastructure healthy.",
    href: "https://unishield360.com/portfolio/item/network-flow-management/",
  },
  {
    icon: RadarIcon,
    title: "Network Intrusion Detection System",
    desc: "Swift threat detection with real-time monitoring and customizable policies for proactive defense.",
    href: "https://unishield360.com/portfolio/item/network-intrusion-detection-system/",
  },
  {
    icon: ActivityIcon,
    title: "Network Behaviour Anomaly Detection",
    desc: "Anomaly identification and proactive defense against evolving cyber threats across diverse industries.",
    href: "https://unishield360.com/portfolio/item/network-behavior-anomaly-detection/",
  },
  {
    icon: MonitorIcon,
    title: "End-point Detection & Response",
    desc: "Vulnerability detection, patch management and threat detection aligned with the MITRE ATT&CK matrix.",
    href: "https://unishield360.com/portfolio/item/end-point-detection-response/",
  },
  {
    icon: ShieldIcon,
    title: "Web Application Firewall",
    desc: "Real-time threat detection, DDoS mitigation and compliance with OWASP Top 10 and SANS 25.",
    href: "https://unishield360.com/portfolio/item/web-application-firewall/",
  },
  {
    icon: CpuIcon,
    title: "System Performance Management",
    desc: "Real-time monitoring, resource optimization and customizable alerts for seamless operations.",
    href: "https://unishield360.com/portfolio/item/system-performance-management",
  },
  {
    icon: RefreshIcon,
    title: "Business Continuity Management",
    desc: "Keep operations running through disruption with integrated continuity and recovery controls.",
    href: "https://unishield360.com/portfolio/item/business-continuity-management/",
  },
  {
    icon: DatabaseIcon,
    title: "Log-Management System",
    desc: "Centralized log collection, correlation and retention for security and compliance visibility.",
    href: "https://unishield360.com/portfolio/item/xiotz-log-management-system/",
  },
  {
    icon: EyeIcon,
    title: "Deception and Decoy Management",
    desc: "Strategic decoys and deception tactics to thwart threats and gain insight into attacker strategies.",
    href: "https://unishield360.com/portfolio/item/deception-and-decoy-management/",
  },
  {
    icon: MailIcon,
    title: "Business Email Compromise",
    desc: "Detect and block BEC, CEO fraud and phishing attempts targeting your employees and vendors.",
    href: "https://unishield360.com/portfolio/item/business-email-compromise/",
  },
  {
    icon: EmailTrapIcon,
    title: "Email Trap Analyzer",
    desc: "Advanced phishing and spam defense with threat detection and malware mitigation for sensitive data.",
    href: "https://unishield360.com/portfolio/item/xiotz-email-trap-analyzer/",
  },
];

const solutions = [
  {
    icon: ShieldCheckIcon,
    title: "Security Operation Center",
    desc: "24x7 security monitoring, detection and response delivered from a single, unified SOC.",
    href: "https://unishield360.com/security-operation-center/",
  },
  {
    icon: NetworkIcon,
    title: "Network Operation Center",
    desc: "Continuous network monitoring and management for performance, availability and resilience.",
    href: "https://unishield360.com/network-operation-center/",
  },
  {
    icon: RadarIcon,
    title: "Threat Operation Center",
    desc: "Proactive threat hunting, deception and incident management to neutralize attacks early.",
    href: "https://unishield360.com/threat-operation-center/",
  },
  {
    icon: BugIcon,
    title: "Vulnerability Management",
    desc: "Continuous scanning, prioritization and remediation tracking to shrink your attack surface.",
    href: "https://unishield360.com/vulnerability-management/",
  },
  {
    icon: ScanIcon,
    title: "Compromise Assessment",
    desc: "Deep investigation of your environment to find hidden compromises and persistent threats.",
    href: "https://unishield360.com/compromise-assessment/",
  },
];

const accomplishments = [
  { image: "/images/unishield360/idex.svg", title: "Winner of iDEX Indian Navy Challenge", desc: "Recognized for innovative cyber defense technology by the Indian Navy." },
  { image: "/images/unishield360/ncoe.svg", title: "Accelerated by NCoE, DSCI NASSCOM", desc: "National Centre of Excellence for cyber security acceleration." },
  { image: "/images/unishield360/national-tech-awards.svg", title: "National Technology Awards 2023 Winner", desc: "Awarded for breakthrough technology innovation in cybersecurity." },
  { image: "/images/unishield360/ddti.svg", title: "Defence Design and Technology Incubator of India", desc: "Incubated under India's defence design and technology program." },
  { image: "/images/unishield360/c3ihub.svg", title: "Incubated at C3i-Hub, SIIC, IIT-Kanpur", desc: "Backed by the prestigious C3i-Hub at IIT Kanpur." },
];

const aboutPoints = [
  { icon: ShieldCheckIcon, title: "Holistic Approach", desc: "UniShield adopts a holistic approach, recognizing the interconnected nature of digital systems." },
  { icon: SettingsIcon, title: "Simplified Solutions", desc: "Simplicity without compromising effectiveness in a world of complex security products." },
  { icon: LockIcon, title: "Trusted Customer Advocate", desc: "Become a trusted advisor by helping customers build unmatched capabilities." },
];

const team = [
  { name: "Maj. S K Goyal", role: "MD & CFO", image: "/images/coregenix/team-1.jpg" },
  { name: "Alka", role: "Director", image: "/images/coregenix/team-2.jpg" },
  { name: "Monika", role: "Director Sales", image: "/images/coregenix/team-3.jpg" },
  { name: "Yusuf", role: "Cyber Security SME & Technical Director", image: "/images/coregenix/team-4.jpg" },
  { name: "Sheltan", role: "Tech & Innovation Head", image: "/images/coregenix/team-5.jpg" },
];

const faqs = [
  { q: "What is UniShield360?", a: "UniShield360 is a Unified Cyber Assurance Platform (UCAP) — a self-healing, military-grade solution built on an Edge-Cloud platform providing 30+ security products built-in and integrated with SIEM for cyber safety and data assurance." },
  { q: "What is the eXtended Operation Centre (XOC)?", a: "XOC unifies the Network Operation Centre (NOC), Security Operation Centre (SOC), Threat Operation Centre (TOC) and NextGen Vulnerability Assessment (NGVA) in a single pane of glass." },
  { q: "How many security products does UniShield360 include?", a: "UniShield360 includes 30+ security products covering network, endpoint, email, deception, performance, continuity and compliance management." },
  { q: "How quickly can UniShield360 be deployed?", a: "UniShield360 can be deployed in as little as 2 hours, with 100% data locality and a 90% reduction in cyber assurance cost." },
  { q: "What compliance standards does UniShield360 support?", a: "UniShield360 supports NIST, ISO 27001, PCI DSS, HIPAA, GDPR and SOC 2 aligned controls." },
];

const objectives = [
  { icon: ShieldCheckIcon, title: "Safeguard Digital Trust", desc: "Counter cyber threats and secure a safer digital future for every customer." },
  { icon: RadarIcon, title: "Simplify Cyber Defense", desc: "Replace tool-juggling with one seamless, affordable platform." },
  { icon: CloudIcon, title: "Innovate Continuously", desc: "Keep the Unified CyberAssurance Platform ahead of evolving threats." },
];

const clients = [
  { name: "Deloitte", image: "/images/unishield360/clients/deloitte.png" },
  { name: "Aditya Birla Group", image: "/images/unishield360/clients/aditya-birla.png" },
  { name: "Nutreco", image: "/images/unishield360/clients/nutreco.png" },
  { name: "Locuz", image: "/images/unishield360/clients/locuz.jpg" },
  { name: "Indevia Accounting", image: "/images/unishield360/clients/indevia.svg" },
  { name: "Society", image: "/images/unishield360/clients/society.gif" },
  { name: "VVF", image: "/images/unishield360/clients/vvf.jpg" },
  { name: "DSK", image: "/images/unishield360/clients/dsk.jpg" },
  { name: "Protiviti", image: "/images/unishield360/clients/protiviti.jpg" },
  { image: "/images/unishield360/clients/client-1.jpg" },
  { image: "/images/unishield360/clients/client-2.jpg" },
  { image: "/images/unishield360/clients/client-3.jpg" },
  { image: "/images/unishield360/clients/client-4.jpg" },
  { image: "/images/unishield360/clients/client-5.jpg" },
  { image: "/images/unishield360/clients/client-6.jpg" },
  { image: "/images/unishield360/clients/client-7.jpg" },
  { image: "/images/unishield360/clients/client-8.jpg" },
  { image: "/images/unishield360/clients/client-9.jpg" },
  { image: "/images/unishield360/clients/client-10.jpg" },
  { image: "/images/unishield360/clients/client-11.svg" },
  { image: "/images/unishield360/clients/client-12.jpg" },
];

const complianceBadges = [
  "ISO 27001",
  "PCI DSS",
  "NIST",
  "HIPAA",
  "GDPR",
  "SOC 2",
  "OpenSCAP",
];

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "https://unishield360.com/about-unishield/" },
      { label: "Partners", href: "https://unishield360.com/partners/" },
      { label: "Careers", href: "https://unishield360.com/careers/" },
      { label: "Product Support", href: "https://unishield360.com/product-support/" },
      { label: "Eula", href: "https://unishield360.com/eula/" },
      { label: "Terms", href: "https://unishield360.com/terms/" },
      { label: "Contact Us", href: "https://unishield360.com/contact-us/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Security Operation Center", href: "https://unishield360.com/security-operation-center/" },
      { label: "Network Operation Center", href: "https://unishield360.com/network-operation-center/" },
      { label: "Threat Operation Center", href: "https://unishield360.com/threat-operation-center/" },
      { label: "Vulnerability Management", href: "https://unishield360.com/vulnerability-management/" },
      { label: "Compromise Assessment", href: "https://unishield360.com/compromise-assessment/" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Network Flow Management", href: "https://unishield360.com/portfolio/item/network-flow-management/" },
      { label: "Network Intrusion Detection System", href: "https://unishield360.com/portfolio/item/network-intrusion-detection-system/" },
      { label: "Network Behaviour Anomaly Detection", href: "https://unishield360.com/portfolio/item/network-behavior-anomaly-detection/" },
      { label: "End-Point Detection & Response", href: "https://unishield360.com/portfolio/item/end-point-detection-response/" },
      { label: "Web Application Firewall", href: "https://unishield360.com/portfolio/item/web-application-firewall/" },
      { label: "System Performance Management", href: "https://unishield360.com/portfolio/item/system-performance-management" },
      { label: "Business Continuity Management", href: "https://unishield360.com/portfolio/item/business-continuity-management/" },
      { label: "Log-Management System", href: "https://unishield360.com/portfolio/item/xiotz-log-management-system/" },
      { label: "Deception and Decoy Management", href: "https://unishield360.com/portfolio/item/deception-and-decoy-management/" },
      { label: "Business Email Compromise", href: "https://unishield360.com/portfolio/item/business-email-compromise/" },
      { label: "Email Trap Analyzer", href: "https://unishield360.com/portfolio/item/xiotz-email-trap-analyzer/" },
      { label: "Domain Vulnerability Management", href: "https://unishield360.com/domain-vulnerability-management/" },
      { label: "Web Vulnerability Management", href: "https://unishield360.com/web-vulnerability-management/" },
      { label: "System Vulnerability Management", href: "https://unishield360.com/system-vulnerability-management/" },
    ],
  },
  {
    title: "Other Links",
    links: [
      { label: "Offering", href: "https://unishield360.com/offering/" },
      { label: "Create a Ticket", href: "https://unishield360.com/create-a-ticket/" },
      { label: "Cyber Emergency", href: "https://unishield360.com/unishield-cyber-aid/" },
      { label: "Privacy Policy", href: "https://unishield360.com/privacy-policy/" },
      { label: "Cookie Policy", href: "https://unishield360.com/cookie-policy/" },
    ],
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UniShield360 Unified Cyber Assurance Platform",
  description:
    "Self-healing, military-grade unified cyber assurance platform with 30+ security products, NOC, SOC, TOC and NGVA in a single pane of glass.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: "IN",
  url: `${SITE.url}/unishield360`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "UniShield360", item: `${SITE.url}/unishield360` },
  ],
};

export default function UniShield360Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero uni-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-3" aria-hidden="true" />
          <span className="uni-hero-shield" aria-hidden="true">
            <ShieldIcon />
          </span>
          <div className="container">
            <span className="uni-hero-badge">
              <ShieldCheckIcon />
              Unified Cyber Assurance Platform
            </span>
            <h1 className="page-hero-title">
              Your Shield in the <span className="grad">Digital Storm</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              A self-healing, military-grade unified cyber assurance platform with 30+ security products
              built-in — protecting your digital world, one byte at a time.
            </Reveal>
            <Reveal className="uni-hero-actions" delay={2}>
              <Link href="/contact" className="btn btn-grad">
                Get Free Consultation
                <ArrowRightIcon />
              </Link>
              <Link href="#products" className="btn btn-hero-secondary">
                Explore Products
              </Link>
              <a
                href="https://unishield360.com/about-unishield/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero-secondary"
              >
                About UniShield
              </a>
            </Reveal>
          </div>
        </section>

        <section className="uni-strip" aria-label="UniShield360 at a glance">
          <div className="container">
            <div className="uni-strip-grid">
              {uspStats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 5) + 1}>
                  <div className="uni-strip-item">
                    <span className="uni-strip-num">{stat.value}</span>
                    <span className="uni-strip-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-platform">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Unified"
              title={
                <>
                  One Platform, <span className="grad">Complete Cyber Assurance</span>
                </>
              }
              desc="UniShield eXtended Operation Centre unifies NOC, SOC, TOC and NextGen Vulnerability Assessment in a single pane of glass."
            />
            <div className="uni-platform-grid">
              {platformPoints.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) + 1}>
                  <article className="uni-platform-card">
                    <span className="icon-box">
                      <p.icon />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-about section-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="About UniShield"
              title={
                <>
                  Innovation Meets <span className="grad">Cybersecurity Excellence</span>
                </>
              }
              desc="Founded by a team of seasoned professional hackers with diverse backgrounds and extensive experience, UniShield is at the forefront of safeguarding digital trust."
            />
            <div className="uni-about-grid">
              {aboutPoints.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) + 1}>
                  <article className="uni-about-card">
                    <span className="icon-box">
                      <p.icon />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="uni-about-text" delay={3}>
              <p>
                With over 40 years of collective experience gained from leading multinational companies worldwide,
                our team of Cyber-Warriors is committed to safeguarding your digital trust. UniShield introduces a
                groundbreaking Unified CyberAssurance Platform designed to revolutionize the cybersecurity landscape —
                consolidating multiple products into one seamless, affordable and effective platform.
              </p>
            </Reveal>
            <Reveal className="uni-about-link" delay={4}>
              <a
                href="https://unishield360.com/about-unishield/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero-secondary"
              >
                Read More About UniShield
                <ArrowRightIcon />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section uni-objectives">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Objectives"
              title={
                <>
                  Defending with <span className="grad">Innovation</span>
                </>
              }
            />
            <div className="uni-objectives-grid">
              {objectives.map((o, i) => (
                <Reveal key={o.title} delay={(i % 3) + 1}>
                  <article className="uni-objective-card">
                    <span className="icon-box">
                      <o.icon />
                    </span>
                    <h3>{o.title}</h3>
                    <p>{o.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section uni-products">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Product"
              title={
                <>
                  UniShield <span className="grad">Products</span>
                </>
              }
              desc="A comprehensive suite of products delivering cyber assurance, email security, deception management, web application firewall protection and more."
            />
            <div className="uni-products-grid">
              {products.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) + 1}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uni-product-card uni-product-card--link"
                  >
                    <span className="icon-box">
                      <p.icon />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <span className="uni-card-link">View Product <ArrowRightIcon /></span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-solutions section-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="Solution"
              title={
                <>
                  Operation Centres & <span className="grad">Managed Services</span>
                </>
              }
              desc="Deploy mission-critical cyber operations delivered from a single, unified platform."
            />
            <div className="uni-solutions-grid">
              {solutions.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) + 1}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uni-solution-card uni-solution-card--link"
                  >
                    <span className="icon-box">
                      <s.icon />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="uni-card-link">View Solution <ArrowRightIcon /></span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-awards">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Accomplishments"
              title={
                <>
                  Pioneering <span className="grad">Innovations</span>
                </>
              }
              desc="UniShield's credibility speaks volumes beyond accolades, backed by esteemed partnerships and institutional support."
            />
            <div className="uni-awards-grid">
              {accomplishments.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) + 1}>
                  <article className="uni-award-card">
                    <span className="uni-award-logo">
                      <Image
                        src={a.image}
                        alt={a.title}
                        width={120}
                        height={60}
                        sizes="120px"
                        className="uni-award-img"
                      />
                    </span>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-clients section-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="Clients"
              title={
                <>
                  Keeping Clients <span className="grad">Safe Online</span>
                </>
              }
            />
            <div className="uni-clients-grid">
              {clients.map((c, i) => (
                <Reveal key={c.image} delay={(i % 3) + 1}>
                  <div className="uni-client-badge">
                    <span className="uni-client-logo">
                      <Image
                        src={c.image}
                        alt={c.name ?? "UniShield360 client"}
                        width={200}
                        height={80}
                        sizes="(max-width: 1100px) 25vw, 16vw"
                        className="uni-client-img"
                      />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-compliance">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Compliance"
              title={
                <>
                  Built to <span className="grad">Compliance Standards</span>
                </>
              }
            />
            <div className="uni-compliance-grid">
              {complianceBadges.map((b, i) => (
                <Reveal key={b} delay={(i % 4) + 1}>
                  <div className="uni-compliance-badge">
                    <ShieldCheckIcon />
                    {b}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-team">
          <div className="container">
            <SectionHeading
              center
              title={
                <>
                  Meet Our <span className="grad">Leadership Team</span>
                </>
              }
              desc="Experienced cyber-warriors steering UniShield360's mission of digital trust."
            />
            <div className="team-grid">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={(i % 5) + 1}>
                  <div className="team-card">
                    <div className="team-img">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={600}
                        height={600}
                        sizes="(max-width: 1024px) 50vw, 20vw"
                        loading="eager"
                      />
                    </div>
                    <div className="team-info">
                      <h3 className="team-name">{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-faq section-dark">
          <div className="container">
            <SectionHeading
              center
              light
              eyebrow="FAQ"
              title={
                <>
                  UniShield360 <span className="grad">FAQ</span>
                </>
              }
            />
            <div className="uni-faq-list">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <div className="uni-faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-links">
          <div className="container">
            <SectionHeading
              center
              title={
                <>
                  Explore <span className="grad">UniShield360</span>
                </>
              }
              desc="Browse the complete UniShield360 website — products, solutions, company and support pages."
            />
            <div className="uni-links-grid">
              {linkGroups.map((group) => (
                <div className="uni-links-col" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                          <ArrowRightIcon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section uni-cta">
          <div className="container">
            <Reveal>
              <div className="uni-cta-box">
                <div>
                  <h2>Ready to secure your digital world with UniShield360?</h2>
                  <p>
                    Talk to our cyber experts for a free consultation and a tailored UCAP assessment for your
                    business.
                  </p>
                </div>
                <Link href="/contact" className="btn btn-light">
                  Get Free Consultation
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
