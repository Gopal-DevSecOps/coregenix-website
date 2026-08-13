import type { ReactElement } from "react";
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
} from "@/components/Icons";

export interface Service {
  icon: (props: { className?: string }) => ReactElement;
  title: string;
  desc: string;
  features: string[];
  href: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: (props: { className?: string }) => ReactElement;
  services: Service[];
}

export const categories: ServiceCategory[] = [
  {
    slug: "it-managed-services",
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
        title: "Staffing & FMS Facility Management",
        desc: "Skilled IT staffing and comprehensive Facility Management Services (FMS) — people and premises, fully managed.",
        features: ["On-site & remote staffing", "Facility upkeep & monitoring", "Helpdesk & vendor coordination"],
        href: "/staffing-fms-facility-management",
      },
    ],
  },
  {
    slug: "cloud-managed-services",
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
    slug: "audit-assessment",
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
    slug: "managed-security-services",
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

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
