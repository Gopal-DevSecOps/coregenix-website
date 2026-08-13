import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
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
  ArrowRightIcon,
  CheckIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import { solutionPages } from "@/data/solutionPages";
import "../services/services.css";

export const metadata: Metadata = {
  title: "Cyber Security Solutions",
  description:
    "Explore CoreGenix solutions: IT infrastructure, cloud, cyber security, and GRC & DPO — trusted by businesses across India.",
  keywords: [
    "cyber security solutions",
    "cyber security company Mumbai",
    "IT infrastructure solutions",
    "cloud solutions India",
    "GRC audit services",
    "managed SOC services",
    "VAPT services India",
    "identity access management",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Cyber Security Solutions — CoreGenix",
    description:
      "IT Infrastructure, Cloud, Cyber Security and GRC & DPO solutions from CoreGenix — trusted by businesses across India.",
    url: `${SITE.url}/solutions`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security Solutions — CoreGenix",
    description:
      "IT Infrastructure, Cloud, Cyber Security and GRC & DPO solutions from CoreGenix.",
  },
};

interface IconType {
  (props: { className?: string }): React.ReactElement;
}

const categoryMeta: {
  title: string;
  subtitle: string;
  desc: string;
  icon: IconType;
}[] = [
  {
    title: "IT Infrastructure Solutions",
    subtitle: "Foundation that never fails",
    desc: "Networks, data centers, backup and disaster recovery designed, built and managed for uptime and growth.",
    icon: NetworkIcon,
  },
  {
    title: "Cloud Infrastructure Solutions",
    subtitle: "Cloud that works for you",
    desc: "Private, public and hybrid cloud — architecture, migration, security and ongoing management, done right.",
    icon: CloudIcon,
  },
  {
    title: "Cyber Security Solutions",
    subtitle: "Defense that never sleeps",
    desc: "Identity, endpoint, data and network security — from IAM and zero trust to EDR, MDR and XDR.",
    icon: ShieldIcon,
  },
  {
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

const categories = categoryMeta.map((cat) => {
  const solutions = solutionPages
    .filter((p) => p.category === cat.title)
    .map((p) => {
      const provideSection = p.sections.find(
        (s) => s.heading.toLowerCase().includes("what we provide")
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

const allSolutions = categories.flatMap((c) => c.solutions);

const solutionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CoreGenix IT, Cloud & Cyber Security Solutions",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT, Cloud & Cyber Security Solutions",
    itemListElement: allSolutions.map((s) => ({
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
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={solutionsJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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
              Solutions & Services Built for <span className="grad">Your Business</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              IT infrastructure, cloud, cyber security and GRC & DPO solutions — designed, delivered and
              managed by one trusted partner.
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
                    {cat.solutions.map((solution, i) => (
                      <Reveal key={solution.title} delay={(i % 3) + 1}>
                        <article className="service-page-card">
                          <span className="icon-box">
                            <solution.icon />
                          </span>
                          <h3>{solution.title}</h3>
                          <p>{solution.desc}</p>
                          <ul className="service-features">
                            {solution.features.map((feature) => (
                              <li key={feature}>
                                <CheckIcon />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link href={solution.href} className="service-link">
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