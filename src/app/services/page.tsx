import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import {
  SettingsIcon,
  CloudIcon,
  ScanIcon,
  ShieldIcon,
  NetworkIcon,
  MonitorIcon,
  CpuIcon,
  LayersIcon,
  DatabaseIcon,
  ClipboardCheckIcon,
  BugIcon,
  TerminalIcon,
  FileTextIcon,
  RadarIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  LockIcon,
  EmailTrapIcon,
  FactoryIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./services.css";

export const metadata: Metadata = {
  title: "Solutions & Services",
  description:
    "Explore CoreGenix services: managed IT services, cloud management, audit & assessment, and managed security services — trusted by businesses across India.",
  keywords: [
    "IT services company Mumbai",
    "managed IT services",
    "cyber security services",
    "cloud services India",
    "NOC services",
    "AMC services",
    "VAPT services",
    "managed SOC",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Solutions & Services — CoreGenix",
    description:
      "IT Managed Services, Cloud Managed Services, Audit & Assessment and Managed Security Services from CoreGenix.",
    url: `${SITE.url}/services`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions & Services — CoreGenix",
    description:
      "IT Managed Services, Cloud Managed Services, Audit & Assessment and Managed Security Services from CoreGenix.",
  },
};

interface Service {
  icon: (props: { className?: string }) => React.ReactElement;
  title: string;
  desc: string;
  features: string[];
  href: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  desc: string;
  icon: (props: { className?: string }) => React.ReactElement;
  services: Service[];
}

const categories: ServiceCategory[] = [
  {
    title: "IT Managed Services",
    subtitle: "Keep IT running, always",
    desc: "Proactive monitoring, maintenance and support that keep your infrastructure available, secure and performing — with clear SLAs and 24/7 coverage.",
    icon: SettingsIcon,
    services: [
      {
        icon: NetworkIcon,
        title: "Network Operations Center",
        desc: "24x7x365 network monitoring and management with rapid incident detection and response for enterprise networks.",
        features: ["24x7x365 proactive monitoring", "Incident detection under 2 minutes", "RCA within 24 hours"],
        href: "/network-operations-center",
      },
      {
        icon: MonitorIcon,
        title: "Annual Maintenance Contract",
        desc: "Preventive and corrective maintenance for servers, networks and IT assets with SLA-backed response times.",
        features: ["Preventive & corrective maintenance", "Priority support & SLAs", "Predictable annual costs"],
        href: "/annual-maintenance-contract",
      },
      {
        icon: CpuIcon,
        title: "Facility Maintenance Contract",
        desc: "Comprehensive upkeep of your IT infrastructure and facilities — from hardware to helpdesk, fully managed.",
        features: ["End-to-end infrastructure upkeep", "Onsite & remote support", "Proactive maintenance & patching"],
        href: "/facility-maintenance-contract",
      },
    ],
  },
  {
    title: "Cloud Managed Services",
    subtitle: "Cloud that works for you",
    desc: "Strategy, migration and ongoing management of your cloud environment — public, private and hybrid — with cost control and security built in.",
    icon: CloudIcon,
    services: [
      {
        icon: CloudIcon,
        title: "Cloud Strategy",
        desc: "A clear cloud roadmap aligned to your business goals — workload fit, migration planning, cost and risk assessment.",
        features: ["Cloud readiness assessment", "Migration roadmap & landing zones", "Cost & risk optimization"],
        href: "/services/cloud-strategy",
      },
      {
        icon: LayersIcon,
        title: "Cloud Infrastructure Management",
        desc: "Ongoing management of cloud environments — provisioning, monitoring, patching, security and optimization.",
        features: ["24/7 cloud monitoring", "Patch & configuration management", "Performance & cost optimization"],
        href: "/services/cloud-infrastructure-management",
      },
      {
        icon: DatabaseIcon,
        title: "Backup & Recovery",
        desc: "Automated, reliable backup and fast recovery for your critical data — on-premises and in the cloud.",
        features: ["Automated backup schedules", "Rapid restore & failover", "Backup security & compliance"],
        href: "/services/backup-recovery",
      },
    ],
  },
  {
    title: "Audit & Assessment",
    subtitle: "Know your security posture",
    desc: "Independent audits, penetration testing and risk assessments that reveal real exposure before attackers do.",
    icon: ScanIcon,
    services: [
      {
        icon: ClipboardCheckIcon,
        title: "GRC & Data Protection Officer",
        desc: "Governance, risk and compliance advisory plus DPO services to meet data protection and regulatory obligations.",
        features: ["Compliance gap assessment", "Policy & framework implementation", "DPO-as-a-service"],
        href: "/services/grc-dpo",
      },
      {
        icon: BugIcon,
        title: "Vulnerability Assessment & Penetration Testing",
        desc: "Real-world testing of your applications, networks and infrastructure to find and fix exploitable weaknesses.",
        features: ["Web, mobile & network testing", "Remediation guidance", "Detailed vulnerability reports"],
        href: "/services/vapt",
      },
      {
        icon: TerminalIcon,
        title: "Red Teaming",
        desc: "Adversary simulation that tests your people, processes and technology against realistic attack scenarios.",
        features: ["Adversary simulation", "Attack surface mapping", "Executive risk reporting"],
        href: "/services/red-teaming",
      },
      {
        icon: FileTextIcon,
        title: "Audit",
        desc: "Systematic audits of your IT environment — from data centres and ERP to NBFC and share-broker systems.",
        features: ["Infrastructure & system audits", "Regulatory & standards audits", "Actionable audit reports"],
        href: "/services/audit",
      },
    ],
  },
  {
    title: "Managed Security Services",
    subtitle: "Security that never sleeps",
    desc: "Continuous threat detection, vulnerability management and specialized defenses that protect your business around the clock.",
    icon: ShieldIcon,
    services: [
      {
        icon: RadarIcon,
        title: "Managed Security Operations Center (SOC)",
        desc: "24/7 security monitoring, threat detection and incident response delivered as a fully managed service.",
        features: ["24/7 threat monitoring", "SIEM & SOAR operations", "Incident response & containment"],
        href: "/services/soc-mss",
      },
      {
        icon: ShieldAlertIcon,
        title: "Vulnerability Management as a Service",
        desc: "Continuous scanning, prioritization and remediation tracking to keep your attack surface small.",
        features: ["Continuous vulnerability scanning", "Risk-based prioritization", "Remediation tracking"],
        href: "/services/vulnerability-management",
      },
      {
        icon: ShieldCheckIcon,
        title: "Web Application Firewall as a Service",
        desc: "Managed WAF that blocks web attacks before they reach your applications — configured, tuned and monitored.",
        features: ["OWASP Top 10 protection", "Managed rules & tuning", "DDoS & bot mitigation"],
        href: "/services/waf-as-a-service",
      },
      {
        icon: LockIcon,
        title: "Data Loss Prevention as a Service",
        desc: "Protect sensitive data from leaks and exfiltration with policy-based monitoring across endpoints and network.",
        features: ["Sensitive data discovery", "Policy enforcement", "Endpoint & network DLP"],
        href: "/services/dlp-as-a-service",
      },
      {
        icon: EmailTrapIcon,
        title: "Email Security",
        desc: "Advanced protection against phishing, BEC, spam and malware targeting your employees' inboxes.",
        features: ["Phishing & BEC defense", "Malware & spam filtering", "Email authentication (DMARC)"],
        href: "/services/email-security",
      },
      {
        icon: FactoryIcon,
        title: "Operational Technology Security",
        desc: "Specialized security for industrial and OT environments — protecting ICS/SCADA from modern threats.",
        features: ["OT network segmentation", "ICS/SCADA monitoring", "OT incident response"],
        href: "/services/ot-security",
      },
    ],
  },
];

const allServices = categories.flatMap((c) => c.services);

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CoreGenix IT & Cyber Security Services",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT & Cyber Security Services",
    itemListElement: allServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.desc, url: `${SITE.url}${s.href}` },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Our Services
            </Reveal>
            <h1 className="page-hero-title">
              Solutions & Services Built for <span className="grad">Your Business</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              From managed IT and cloud operations to cyber security and audits — one trusted partner for your
              entire technology estate.
            </Reveal>
          </div>
        </section>

        <section className="section services-catalog">
          <div className="container">
            <div className="services-cat">
              {categories.map((cat) => (
                <div key={cat.title} className="services-cat-block">
                  <Reveal>
                    <div className="services-cat-head">
                      <span className="icon-box">
                        <cat.icon />
                      </span>
                      <div>
                        <span className="services-cat-sub">{cat.subtitle}</span>
                        <h2>{cat.title}</h2>
                      </div>
                    </div>
                    <p className="services-cat-desc">{cat.desc}</p>
                  </Reveal>
                  <div className="services-cat-grid">
                    {cat.services.map((service, i) => (
                      <Reveal key={service.title} delay={(i % 3) + 1}>
                        <article className="service-page-card">
                          <span className="icon-box">
                            <service.icon />
                          </span>
                          <h3>{service.title}</h3>
                          <p>{service.desc}</p>
                          <ul className="service-features">
                            {service.features.map((feature) => (
                              <li key={feature}>
                                <CheckIcon />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link href={service.href} className="service-link">
                            Learn More
                            <ArrowRightIcon />
                          </Link>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-cta">
          <div className="container">
            <Reveal>
              <div className="services-cta-box">
                <div>
                  <h2>Not sure which solution fits your business?</h2>
                  <p>Talk to our experts for a free consultation and a tailored technology plan.</p>
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