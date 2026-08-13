import type { ReactElement } from "react";
import {
  NetworkIcon,
  ServerIcon,
  DatabaseIcon,
  RefreshIcon,
  CloudIcon,
  GlobeIcon,
  LayersIcon,
  ShieldIcon,
  KeyIcon,
  FingerprintIcon,
  LockIcon,
  ShieldCheckIcon,
  EyeIcon,
  CpuIcon,
  ClipboardCheckIcon,
  ActivityIcon,
  AwardIcon,
  ScanIcon,
  ShieldAlertIcon,
  BugIcon,
  FileTextIcon,
  BoxIcon,
  RouteIcon,
} from "@/components/Icons";
import { solutionPages } from "@/data/solutionPages";

type IconType = (props: { className?: string }) => ReactElement;

export interface SolutionCategory {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: IconType;
  solutions: {
    icon: IconType;
    title: string;
    desc: string;
    features: string[];
    href: string;
  }[];
}

const categoryMeta: {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: IconType;
}[] = [
  {
    slug: "it-infrastructure-solutions",
    title: "IT Infrastructure Solutions",
    subtitle: "Foundation that never fails",
    desc: "Networks, data centers, backup and disaster recovery designed, built and managed for uptime and growth.",
    icon: NetworkIcon,
  },
  {
    slug: "cloud-infrastructure-solutions",
    title: "Cloud Infrastructure Solutions",
    subtitle: "Cloud that works for you",
    desc: "Private, public and hybrid cloud — architecture, migration, security and ongoing management, done right.",
    icon: CloudIcon,
  },
  {
    slug: "cyber-security-solutions",
    title: "Cyber Security Solutions",
    subtitle: "Defense that never sleeps",
    desc: "Identity, endpoint, data and network security — from IAM and zero trust to EDR, MDR and XDR.",
    icon: ShieldIcon,
  },
  {
    slug: "grc-dpo",
    title: "Governance, Risk & Compliance & Data Protection Officer",
    subtitle: "Governance you can prove",
    desc: "GRC & cyber audits, risk management, compliance and DPO services that keep you audit-ready and trusted.",
    icon: ClipboardCheckIcon,
  },
];

const solutionIcons: Record<string, IconType> = {
  network: NetworkIcon,
  "data-center": ServerIcon,
  "data-backup": DatabaseIcon,
  "disaster-recovery-bcp": RefreshIcon,
  "private-cloud": CloudIcon,
  "public-cloud": GlobeIcon,
  "hybrid-cloud": LayersIcon,
  "infrastructure-security": ShieldIcon,
  "identity-access-management": KeyIcon,
  "single-sign-on": FingerprintIcon,
  "privileged-access-management": LockIcon,
  "zero-trust": ShieldCheckIcon,
  "data-loss-prevention": EyeIcon,
  "edr-mdr-xdr": CpuIcon,
  "grc-cyber-audits": ClipboardCheckIcon,
  "risk-management": ActivityIcon,
  compliance: AwardIcon,
  "risk-compliance-assessment": ScanIcon,
  "nist-cybersecurity-framework": ShieldAlertIcon,
  "it-risk-assessment": BugIcon,
  "it-policy-security-policy": FileTextIcon,
  "isms-cyber-security": BoxIcon,
  "bcp-dr": RouteIcon,
};

const solutionTitles: Record<string, string> = {
  network: "Network Infrastructure",
  "data-center": "Data Center Solutions",
  "data-backup": "Data Backup & Restore",
  "disaster-recovery-bcp": "DR & Business Continuity",
  "private-cloud": "Private Cloud",
  "public-cloud": "Public Cloud (Azure & AWS)",
  "hybrid-cloud": "Hybrid Cloud",
  "infrastructure-security": "Infrastructure Security",
  "identity-access-management": "Identity & Access Management",
  "single-sign-on": "Single Sign-On (SSO)",
  "privileged-access-management": "Privileged Access Management",
  "zero-trust": "Zero Trust Security",
  "data-loss-prevention": "Data Loss Prevention (DLP)",
  "edr-mdr-xdr": "EDR / MDR / XDR",
  "grc-cyber-audits": "GRC & Cyber Audits",
  "risk-management": "IT Risk Management",
  compliance: "IT Compliance Services",
  "risk-compliance-assessment": "Risk & Compliance Assessment",
  "nist-cybersecurity-framework": "NIST CSF Services",
  "it-risk-assessment": "IT Risk Assessment",
  "it-policy-security-policy": "IT & Security Policies",
  "isms-cyber-security": "ISMS & ISO 27001",
  "bcp-dr": "BCP & Disaster Recovery",
};

export const solutionCategories: SolutionCategory[] = categoryMeta.map((cat) => {
  const solutions = solutionPages
    .filter((p) => p.category === cat.title)
    .map((p) => {
      const provideSection = p.sections.find((s) =>
        s.heading.toLowerCase().includes("what we provide")
      );
      return {
        icon: solutionIcons[p.slug] ?? ShieldIcon,
        title: solutionTitles[p.slug] ?? p.h1,
        desc: p.intro,
        features: (provideSection?.body ?? []).slice(0, 3),
        href: `/solutions/${p.slug}`,
      };
    });
  return { ...cat, solutions };
});

export function getSolutionCategory(slug: string) {
  return solutionCategories.find((c) => c.slug === slug);
}
