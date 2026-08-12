import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import {
  RadarIcon,
  NetworkIcon,
  CpuIcon,
  AppIcon,
  GlobeIcon,
  BugIcon,
  ShieldCheckIcon,
  BoxIcon,
  MailIcon,
  KeyIcon,
  LayersIcon,
  FactoryIcon,
  ActivityIcon,
  ScanIcon,
  AwardIcon,
  RefreshIcon,
  FingerprintIcon,
  LockIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/Icons";
import "./solutions.css";

export const metadata: Metadata = {
  title: "Cyber Security Solutions — CoreGenix",
  description:
    "VAPT, Security Operation Center (SOC), Threat Operation Center (TOC), OT Security, GRC & InfoSec audits, and X-as-a-Service cyber security solutions for IT & OT environments.",
};

const threatCoverage = [
  "Email Spoofing",
  "Domain Phishing",
  "Spear Attacks",
  "Content Management System",
  "Cookies",
  "Website Hosting",
  "Weak Encryption Standards",
  "Distributed Denial of Service (DDoS)",
  "Content Delivery Network",
  "IP Reputation",
  "Domain Blacklisting",
  "URL Blocking",
  "Content Filtering",
  "Zero-Day Attacks Mitigation",
  "Anomaly Detection",
];

const vaptGroups = [
  {
    icon: GlobeIcon,
    title: "Domain & DNS Intelligence",
    items: [
      "Who-Is Domain LookUp",
      "SubDomain Finder",
      "Reverse DNS",
      "DNS Security Extensions",
      "Sender Policy Framework (SPF)",
      "DMARC Authentication",
      "Corporate Espionage",
    ],
  },
  {
    icon: BugIcon,
    title: "Web & Application Testing",
    items: [
      "WAF Scanning",
      "Open Redirection Vulnerability",
      "Secure Socket Layer (SSL) Scan",
      "SSL Configuration Scan",
      "Web Technology Profiler",
      "Exposed Information Test",
      "JavaScript Vulnerability Scanner",
      "Template Based Vulnerability Scanner",
      "Website Crawling & Quality Audit",
    ],
  },
  {
    icon: ScanIcon,
    title: "Infrastructure & Endpoint Scanning",
    items: [
      "Servers Scanning",
      "End-Points Scanning",
      "Application Scanning",
      "Databases Scanning",
      "Network Devices Scanning",
      "Connected Devices Scanning",
    ],
  },
];

const socCenters = [
  {
    icon: NetworkIcon,
    title: "Network Security",
    items: [
      "Network Detection & Response (NDR)",
      "Network Flow Monitoring (NFM)",
      "Network Intrusion Detection Systems (NIDS)",
    ],
  },
  {
    icon: CpuIcon,
    title: "System Security",
    items: [
      "Endpoint Identification, Tracking, Reporting & Patching",
      "Host Intrusion Detection System (HIDS)",
      "Regulatory Compliances (PCI-DSS, HIPAA, GDPR, NIST, TSC SOC2)",
      "CVE & CWE Intelligence",
      "MITRE ATT&CK Threat Detection",
    ],
  },
  {
    icon: AppIcon,
    title: "Application Security",
    items: [
      "Web Application Firewall (WAF)",
      "Application Protocol Intrusion Detection System (APIDS)",
      "OWASP TOP 10",
      "DDoS Prevention",
    ],
  },
];

const tocCenters = [
  {
    icon: BoxIcon,
    title: "Enterprise Decoys",
    items: [
      "Network & System Decoys",
      "App & Database Decoys",
      "Email, RDP & SSH Decoys",
      "Mobile and Endpoints",
    ],
  },
  {
    icon: MailIcon,
    title: "Email Security",
    items: ["DMARC Analyzer", "DKIM Analyzer", "SPF Analyzer", "Email Trap Analyzer"],
  },
  {
    icon: GlobeIcon,
    title: "Sink-Hole DNS",
    items: [
      "Adware, Spyware & Ransomware Filtering",
      "Trojans, Rootkits, Worms & Keyloggers Blocking",
      "Agobot, SDBot, SpyBot, GT Bot Blocking",
      "Secure Private DNS with Custom Web Blocking",
    ],
  },
];

const xaasServices = [
  { icon: ScanIcon, title: "Vulnerability Management as-a-Service" },
  { icon: ShieldCheckIcon, title: "WAF as-a-Service" },
  { icon: LockIcon, title: "DLP as-a-Service" },
  { icon: MailIcon, title: "Email Security" },
  { icon: FactoryIcon, title: "OT Security Assessment" },
  { icon: RadarIcon, title: "CSOC" },
  { icon: FingerprintIcon, title: "FIM-as-a-Service" },
  { icon: ActivityIcon, title: "NDR-as-a-Service" },
  { icon: KeyIcon, title: "IDAM / PAM-as-a-Service" },
];

const systemAudits = [
  {
    title: "PPI Audits",
    desc: "Wallets & payment services under the Payment & Settlement Act",
  },
  {
    title: "Share Brokers / Trading Member",
    desc: "System audits for SEBI-registered brokers and members",
  },
  {
    title: "Data Centre Audits",
    desc: "Physical & logical security review of data center operations",
  },
  {
    title: "ERP Audits",
    desc: "End-to-end security and controls review of enterprise systems",
  },
  {
    title: "NBFC System Audits",
    desc: "IT system audits for NBFCs for RBI compliance",
  },
  {
    title: "HFC System Audits",
    desc: "System audits for Housing Finance Companies for NHB compliance",
  },
];

const regulatoryCompliance = [
  "UIDAI / NSDL / CDSL — Aadhaar Compliance & Certification",
  "CCA — eSignature Compliance Audit & Certification",
  "PSA — PPI Audits for Wallets & Payment Services",
  "NPCI — Payment System / UPI",
  "IRDA — ISNP Audits & System Audits",
  "SEBI / NSE / BSE — Share Brokers System Audits (CTCL / Algo / IBT / WT)",
  "RBI — PPI, NBFC IT Audit, CISA Audit, Digital Lending Audit",
  "NHB — Housing Finance Company IT Audit",
  "RBI / IRDA / UIDAI / SEBI Related IT / Cyber Security Compliance",
];

const beyondAudits = [
  {
    icon: AppIcon,
    title: "Mobile & Web Application Security",
    items: [
      "Web Application Security Assessment",
      "Mobile Application Security Assessment",
      "Source Code Review",
    ],
  },
  {
    icon: AwardIcon,
    title: "Standards & Processes",
    items: ["ISO 27001", "ISO 20000"],
  },
  {
    icon: RefreshIcon,
    title: "IT Risk & Continuity",
    items: [
      "IT Risk Assessment",
      "BCP / DR (Business Continuity & Disaster Recovery)",
      "Policy Drafting & IT Security Policies",
      "ISMS Cyber Security",
    ],
  },
];

const otPoints = [
  "Clear understanding of the IT vs OT distinction",
  "Addressing the challenges of OT-IT convergence",
  "Selecting the right security vendor & controls",
  "Security fabric approach for visibility, control & continuous monitoring",
];

const defenseStack = [
  {
    icon: NetworkIcon,
    title: "NOC — Network Operations Center",
    desc: "Proactive network monitoring, fault management and performance optimization for always-on availability.",
  },
  {
    icon: CpuIcon,
    title: "EDR — Endpoint Detection & Response",
    desc: "Real-time endpoint visibility, threat hunting and automated response against advanced malware.",
  },
  {
    icon: LayersIcon,
    title: "XDR — Extended Detection & Response",
    desc: "Unified detection across endpoints, networks, email and cloud for faster, smarter threat response.",
  },
];

const oemPartners = ["PaloAlto", "Fortinet", "CrowdStrike", "Safetica", "Microsoft", "Cisco"];

const stripStats = [
  { value: "24/7", label: "SOC & TOC Monitoring" },
  { value: "30+", label: "VAPT Scan Capabilities" },
  { value: "9+", label: "X-as-a-Service Offerings" },
  { value: "4+", label: "OEM Security Partners" },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero solutions-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-3" aria-hidden="true" />
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Our Solutions
            </Reveal>
            <h1 className="page-hero-title">
              We deal with the Aspect of <span className="grad">Cyber Security</span> for IT & OT environment
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              We specialize in providing comprehensive cybersecurity services to safeguard your
              business from evolving cyber threats. Our goal is to detect and prevent attacks to
              your company or business data.
            </Reveal>
            <Reveal className="solutions-hero-actions" delay={2}>
              <a href="#vapt" className="btn btn-grad">
                Know More
                <ArrowRightIcon />
              </a>
              <Link href="/contact" className="btn btn-outline btn-light">
                Get Free Consultation
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="solutions-strip">
          <div className="container">
            <div className="solutions-strip-grid">
              {stripStats.map((stat, i) => (
                <Reveal key={stat.label} delay={i + 1}>
                  <div className="solutions-strip-item">
                    <span className="solutions-strip-num">{stat.value}</span>
                    <span className="solutions-strip-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="vapt" className="section vapt section-dark">
          <div className="container">
            <div className="vapt-head">
              <Reveal as="span" className="eyebrow" delay={1}>
                Vulnerability Assessment
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                Vulnerability & <span className="grad">Cyber Security Assessment</span>
              </Reveal>
              <Reveal as="p" className="vapt-intro" delay={3}>
                Our assessment tooling addresses the advanced threats faced by industry — from
                email spoofing, domain phishing and spear attacks to weak encryption standards,
                distributed denial of service, IP reputation and domain blacklisting. We add
                content filtering, URL blocking and zero-day attack mitigation with anomaly
                detection, so no angle of your attack surface is left uncovered.
              </Reveal>
            </div>

            <div className="vapt-layout">
              <Reveal className="vapt-threats" delay={1}>
                <h3>Threats We Detect & Mitigate</h3>
                <div className="vapt-chips">
                  {threatCoverage.map((threat) => (
                    <span className="vapt-chip" key={threat}>
                      {threat}
                    </span>
                  ))}
                </div>
              </Reveal>

              <div className="vapt-groups">
                {vaptGroups.map((group, i) => (
                  <Reveal key={group.title} delay={i + 1}>
                    <div className="vapt-group-card">
                      <span className="vapt-group-icon">
                        <group.icon />
                      </span>
                      <div>
                        <h3>{group.title}</h3>
                        <ul className="vapt-group-list">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="soc" className="section soc">
          <div className="container">
            <div className="section-heading center">
              <Reveal as="span" className="eyebrow" delay={1}>
                Security Operation Center
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                Security Operation Center <span className="grad">(SOC)</span>
              </Reveal>
              <Reveal as="p" className="section-desc" delay={3}>
                Security Operations Centers play a pivotal role in safeguarding digital landscapes
                by proactively delivering comprehensive protection across networks, systems and
                applications. Through continuous monitoring, analysis and incident response, SOCs
                fortify organizations against evolving cyber threats, ensuring a resilient defense
                posture.
              </Reveal>
            </div>

            <div className="soc-grid">
              {socCenters.map((center, i) => (
                <Reveal key={center.title} delay={(i % 3) + 1}>
                  <article className="soc-card">
                    <span className="soc-icon">
                      <center.icon />
                    </span>
                    <h3>{center.title}</h3>
                    <ul>
                      {center.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="toc" className="section toc section-dark">
          <div className="container">
            <div className="section-heading center">
              <Reveal as="span" className="eyebrow" delay={1}>
                Threat Operation Center
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                Threat Operation Center <span className="grad">(TOC)</span>
              </Reveal>
              <Reveal as="p" className="section-desc" delay={3}>
                A Threat Operating Center employs enterprise decoys to actively deceive and divert
                potential threats, bolstering cybersecurity. By fortifying email security and
                implementing sinkhole DNS strategies, TOCs proactively neutralize malicious
                activities, ensuring robust protection for organizations in the digital realm.
              </Reveal>
            </div>

            <div className="toc-grid">
              {tocCenters.map((center, i) => (
                <Reveal key={center.title} delay={(i % 3) + 1}>
                  <article className="toc-card">
                    <span className="toc-icon">
                      <center.icon />
                    </span>
                    <h3>{center.title}</h3>
                    <ul>
                      {center.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="best-sec-banner" aria-label="We provide the best cyber security">
          <div className="container">
            <Reveal as="h2" className="best-sec-title">
              We provide the Best Cyber Security!
            </Reveal>
          </div>
        </section>

        <section id="xaas" className="section xaas">
          <div className="container">
            <div className="section-heading center">
              <Reveal as="span" className="eyebrow" delay={1}>
                Flexible Delivery
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                X-as-a-Service <span className="grad">Security Offerings</span>
              </Reveal>
              <Reveal as="p" className="section-desc" delay={3}>
                Subscribe to best-in-class security capabilities on demand. From vulnerability
                management and WAF to CSOC, NDR and identity access management — pick the exact
                defense layer your business needs, without heavy capital investment.
              </Reveal>
            </div>

            <div className="xaas-grid">
              {xaasServices.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) + 1}>
                  <div className="xaas-tile">
                    <span className="xaas-icon">
                      <service.icon />
                    </span>
                    <h3>{service.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="grc" className="section grc">
          <div className="container">
            <div className="section-heading center">
              <Reveal as="span" className="eyebrow" delay={1}>
                Governance, Risk & Compliance
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                GRC & <span className="grad">InfoSec Audits, Assessments</span>
              </Reveal>
              <Reveal as="p" className="section-desc" delay={3}>
                Independent, regulator-aligned audits and assessments that keep your systems secure,
                compliant and audit-ready — across banking, insurance, payments, securities and
                housing finance.
              </Reveal>
            </div>

            <div className="grc-layout">
              <Reveal className="grc-audits" delay={1}>
                <h3 className="grc-block-title">System Audits</h3>
                <div className="grc-audit-list">
                  {systemAudits.map((audit) => (
                    <div className="grc-audit-item" key={audit.title}>
                      <span className="grc-audit-check">
                        <CheckIcon />
                      </span>
                      <div>
                        <h4>{audit.title}</h4>
                        <p>{audit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="grc-compliance" delay={2}>
                <h3 className="grc-block-title">Regulatory Compliance</h3>
                <div className="grc-chip-list">
                  {regulatoryCompliance.map((item) => (
                    <span className="grc-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="grc-beyond">
              {beyondAudits.map((group, i) => (
                <Reveal key={group.title} delay={i + 1}>
                  <article className="grc-beyond-card">
                    <span className="grc-beyond-icon">
                      <group.icon />
                    </span>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="ot-security" className="section ot section-dark">
          <div className="container">
            <div className="ot-grid">
              <div className="ot-content">
                <Reveal as="span" className="eyebrow" delay={1}>
                  Operational Technology
                </Reveal>
                <Reveal as="h2" className="section-title" delay={2}>
                  OT Security for <span className="grad">Critical Infrastructure</span>
                </Reveal>
                <Reveal as="p" className="ot-text" delay={3}>
                  As operational technology becomes increasingly interconnected, OT security is
                  essential to protect critical infrastructure and ensure the integrity of
                  industrial processes. Implementing effective OT security measures requires
                  organizations to understand the distinction between IT and OT, address the
                  challenges of OT-IT convergence, and choose the right security vendor.
                </Reveal>
                <ul className="ot-list">
                  {otPoints.map((point, i) => (
                    <Reveal as="li" key={point} delay={400 + i * 80}>
                      <span className="ot-check">
                        <CheckIcon />
                      </span>
                      {point}
                    </Reveal>
                  ))}
                </ul>
              </div>

              <Reveal className="ot-features" delay={2}>
                <div className="ot-feature-card">
                  <span className="ot-feature-icon">
                    <FactoryIcon />
                  </span>
                  <h3>Security Fabric Approach</h3>
                  <p>
                    By adopting a comprehensive security fabric approach, organizations achieve the
                    necessary visibility, control and continuous monitoring to safeguard their OT
                    systems and mitigate potential risks.
                  </p>
                </div>
                <div className="ot-feature-card">
                  <span className="ot-feature-icon">
                    <RadarIcon />
                  </span>
                  <h3>Continuous OT Monitoring</h3>
                  <p>
                    Around-the-clock asset visibility and anomaly detection across industrial
                    control systems, SCADA, PLCs and connected operational devices.
                  </p>
                </div>
                <div className="ot-feature-card">
                  <span className="ot-feature-icon">
                    <ShieldCheckIcon />
                  </span>
                  <h3>IT & OT Convergence Security</h3>
                  <p>
                    Unified policies and segmentation that protect converged environments without
                    disrupting critical industrial processes.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="it-security" className="section itsec">
          <div className="container">
            <div className="section-heading center">
              <Reveal as="span" className="eyebrow" delay={1}>
                Defense Coverage
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                IT Security <span className="grad">Solutions</span>
              </Reveal>
              <Reveal as="p" className="section-desc" delay={3}>
                Discover our extensive IT security suite encompassing endpoint, perimeter and DLP
                solutions. With our expertise and innovative technologies, fortify your defense
                strategy and safeguard your digital assets proactively against evolving threats.
              </Reveal>
            </div>

            <div className="itsec-stack">
              {defenseStack.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) + 1}>
                  <article className="itsec-card">
                    <span className="itsec-icon">
                      <item.icon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="oem" delay={2}>
              <h3>Powered by Leading OEM Partners</h3>
              <div className="oem-strip">
                {oemPartners.map((partner) => (
                  <span className="oem-badge" key={partner}>
                    {partner}
                  </span>
                ))}
                <span className="oem-badge oem-more">+ many more</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section solutions-cta">
          <div className="container">
            <Reveal>
              <div className="solutions-cta-box">
                <div>
                  <h2>Need Free Consultation About Security Solutions?</h2>
                  <p>
                    Talk to our cyber security experts and build a tailored defense strategy for
                    your IT & OT environment.
                  </p>
                </div>
                <Link href="/contact" className="btn btn-light">
                  Contact Us
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
