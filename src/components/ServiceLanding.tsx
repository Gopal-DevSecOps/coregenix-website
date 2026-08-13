import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  ShieldIcon,
  ServerIcon,
  CloudIcon,
  MonitorIcon,
  DatabaseIcon,
  SettingsIcon,
  LockIcon,
  ScanIcon,
  KeyIcon,
  EyeIcon,
  RadarIcon,
  NetworkIcon,
  CheckIcon,
  ArrowRightIcon,
} from "./Icons";
import type { ServicePage } from "@/data/services";

interface Props {
  service: ServicePage;
  viewAllLabel?: string;
  viewAllHref?: string;
}

const stats = [
  { value: "18+", label: "Years of Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "55+", label: "Happy Clients" },
  { value: "24x7", label: "Pan-India Support" },
];

const featureIcons = [
  ShieldIcon,
  ServerIcon,
  CloudIcon,
  MonitorIcon,
  DatabaseIcon,
  SettingsIcon,
  LockIcon,
  ScanIcon,
  KeyIcon,
  EyeIcon,
  RadarIcon,
  NetworkIcon,
];

const heroImages: Record<string, string> = {
  "cloud-infrastructure-management": "/images/coregenix/service-7.jpg",
  "backup-recovery": "/images/coregenix/service-1.jpg",
  "grc-dpo": "/images/coregenix/service-5.jpg",
  vapt: "/images/coregenix/service-6.jpg",
  "red-teaming": "/images/coregenix/service-6.jpg",
  audit: "/images/coregenix/service-4.jpg",
  "soc-mss": "/images/coregenix/hero-1.png",
  "vulnerability-management": "/images/coregenix/service-6.jpg",
  "waf-as-a-service": "/images/coregenix/service-7.jpg",
  "dlp-as-a-service": "/images/coregenix/service-1.jpg",
  "email-security": "/images/coregenix/service-3.png",
  "ot-security": "/images/coregenix/service-6.jpg",
};

const eyebrowLabels: Record<string, string> = {
  "cloud-infrastructure-management": "Cloud Infrastructure Management",
  "backup-recovery": "Data Backup & Recovery",
  "grc-dpo": "GRC & DPO",
  vapt: "Vulnerability Assessment & Penetration Testing",
  "red-teaming": "Red Teaming",
  audit: "Cyber Security Audit",
  "soc-mss": "Managed Security Operations Center",
  "vulnerability-management": "Vulnerability Management",
  "waf-as-a-service": "Web Application Firewall as a Service",
  "dlp-as-a-service": "Data Loss Prevention as a Service",
  "email-security": "Email Security",
  "ot-security": "Operational Technology Security",
  network: "IT Infrastructure Solutions",
  "data-center": "IT Infrastructure Solutions",
  "data-backup": "IT Infrastructure Solutions",
  "disaster-recovery-bcp": "IT Infrastructure Solutions",
  "private-cloud": "Cloud Infrastructure Solutions",
  "public-cloud": "Cloud Infrastructure Solutions",
  "hybrid-cloud": "Cloud Infrastructure Solutions",
  "infrastructure-security": "Cyber Security Solutions",
  "identity-access-management": "Cyber Security Solutions",
  "single-sign-on": "Cyber Security Solutions",
  "privileged-access-management": "Cyber Security Solutions",
  "zero-trust": "Cyber Security Solutions",
  "data-loss-prevention": "Cyber Security Solutions",
  "edr-mdr-xdr": "Cyber Security Solutions",
  "grc-cyber-audits": "GRC & DPO",
  "risk-management": "GRC & DPO",
  compliance: "GRC & DPO",
  "risk-compliance-assessment": "GRC & DPO",
  "nist-cybersecurity-framework": "GRC & DPO",
  "it-risk-assessment": "GRC & DPO",
  "it-policy-security-policy": "GRC & DPO",
  "isms-cyber-security": "GRC & DPO",
  "bcp-dr": "GRC & DPO",
};

const solutionHeroImages: Record<string, string> = {
  network: "/images/coregenix/service-7.jpg",
  "data-center": "/images/coregenix/service-2.jpg",
  "data-backup": "/images/coregenix/service-1.jpg",
  "disaster-recovery-bcp": "/images/coregenix/service-4.jpg",
  "private-cloud": "/images/coregenix/service-7.jpg",
  "public-cloud": "/images/coregenix/service-7.jpg",
  "hybrid-cloud": "/images/coregenix/service-7.jpg",
  "infrastructure-security": "/images/coregenix/service-6.jpg",
  "identity-access-management": "/images/coregenix/service-5.jpg",
  "single-sign-on": "/images/coregenix/service-5.jpg",
  "privileged-access-management": "/images/coregenix/service-5.jpg",
  "zero-trust": "/images/coregenix/service-6.jpg",
  "data-loss-prevention": "/images/coregenix/service-1.jpg",
  "edr-mdr-xdr": "/images/coregenix/service-3.png",
  "grc-cyber-audits": "/images/coregenix/service-4.jpg",
  "risk-management": "/images/coregenix/service-4.jpg",
  compliance: "/images/coregenix/service-4.jpg",
  "risk-compliance-assessment": "/images/coregenix/service-4.jpg",
  "nist-cybersecurity-framework": "/images/coregenix/service-5.jpg",
  "it-risk-assessment": "/images/coregenix/service-4.jpg",
  "it-policy-security-policy": "/images/coregenix/service-5.jpg",
  "isms-cyber-security": "/images/coregenix/service-5.jpg",
  "bcp-dr": "/images/coregenix/service-4.jpg",
};

function splitItem(item: string) {
  const idx = item.indexOf(" — ");
  if (idx === -1) return { title: item, desc: "" };
  return { title: item.slice(0, idx), desc: item.slice(idx + 3) };
}

export default function ServiceLanding({
  service,
  viewAllLabel = "View All Services",
  viewAllHref = "/services",
}: Props) {
  const slug = service.slug;
  const eyebrow = eyebrowLabels[slug] ?? service.title;
  const heroImage = solutionHeroImages[slug] ?? heroImages[slug] ?? "/images/coregenix/service-2.jpg";

  const problem = service.sections.find((s) => s.heading.toLowerCase().includes("problem"));
  const features = service.sections.find(
    (s) =>
      s.heading.toLowerCase().includes("what we") || s.heading.toLowerCase().includes("what's included")
  );
  const whatYouGet = service.sections.find((s) => s.heading.toLowerCase().includes("what you get"));
  const whyChoose = service.sections.find((s) => s.heading.toLowerCase().includes("why choose"));

  const otherSections = service.sections.filter(
    (s) => s !== problem && s !== features && s !== whatYouGet && s !== whyChoose
  );

  return (
    <main>
      <section className="section sl-hero">
        <div className="float-shape float-shape-1" aria-hidden="true" />
        <div className="float-shape float-shape-2" aria-hidden="true" />
        <div className="container sl-hero-grid">
          <div className="sl-hero-content">
            <Reveal as="span" className="eyebrow" delay={1}>
              {eyebrow}
            </Reveal>
            <Reveal delay={2}>
              <h1 className="section-title sl-hero-title">{service.h1}</h1>
            </Reveal>
            <Reveal as="p" className="sl-hero-desc" delay={3}>
              {service.intro}
            </Reveal>
            <Reveal as="div" className="sl-hero-actions" delay={4}>
              <Link href="/contact" className="btn btn-grad">
                Get Free Consultation
                <ArrowRightIcon />
              </Link>
              <Link href={viewAllHref} className="btn btn-hero-secondary">
                {viewAllLabel}
              </Link>
            </Reveal>
          </div>
          <Reveal className="sl-hero-media" delay={3}>
            <div className="sl-hero-img">
              <Image
                src={heroImage}
                alt={`${service.title} — CoreGenix`}
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sl-stats" aria-label="By the numbers">
        <div className="container">
          <div className="sl-stats-grid">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 4) + 1}>
                <div className="sl-stat">
                  <span className="sl-stat-value">{stat.value}</span>
                  <span className="sl-stat-label">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {problem && (
        <section className="section sl-problem">
          <div className="container">
            <SectionHeading
              center
              eyebrow="The Challenge"
              title={
                <>
                  The Problem <span className="grad">We Solve</span>
                </>
              }
            />
            <Reveal as="div" className="sl-problem-body" delay={2}>
              {problem.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {features && (
        <section className="section sl-features section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow={features.heading}
              title={
                <>
                  What We <span className="grad">Deliver</span>
                </>
              }
            />
            <div className="sl-feature-grid">
              {features.body.map((item, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                const { title, desc } = splitItem(item);
                return (
                  <Reveal key={item} delay={(i % 3) + 1}>
                    <div className="sl-feature-card">
                      <span className="icon-box">
                        <Icon />
                      </span>
                      <h3>{title}</h3>
                      {desc && <p>{desc}</p>}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {whatYouGet && (
        <section className="section sl-what">
          <div className="container">
            <SectionHeading
              center
              eyebrow="What You Get"
              title={
                <>
                  Outcomes That <span className="grad">Move Your Business</span>
                </>
              }
            />
            <div className="sl-check-grid">
              {whatYouGet.body.map((item, i) => (
                <Reveal key={item} delay={(i % 2) + 1}>
                  <div className="sl-check-item">
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
      )}

      {whyChoose && (
        <section className="section sl-choose">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Why Choose CoreGenix"
              title={
                <>
                  The CoreGenix <span className="grad">Difference</span>
                </>
              }
            />
            <div className="sl-choose-grid">
              {whyChoose.body.map((item, i) => {
                const { title, desc } = splitItem(item);
                return (
                  <Reveal key={item} delay={(i % 3) + 1}>
                    <div className="sl-choose-card">
                      <span className="sl-choose-num">{String(i + 1).padStart(2, "0")}</span>
                      <h3>{title}</h3>
                      {desc && <p>{desc}</p>}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {otherSections.length > 0 && (
        <section className="section sl-extra section-dark">
          <div className="container">
            {otherSections.map((section) => (
              <div className="sl-extra-block" key={section.heading}>
                <SectionHeading
                  center
                  eyebrow="More"
                  title={
                    <>
                      {section.heading.split(" — ")[0]}{" "}
                      <span className="grad">{section.heading.split(" — ")[1] ?? ""}</span>
                    </>
                  }
                />
                <Reveal as="div" className="sl-extra-body" delay={2}>
                  {section.body.map((line) => {
                    const { title, desc } = splitItem(line);
                    if (desc) {
                      return (
                        <p key={line}>
                          <strong>{title}</strong> — {desc}
                        </p>
                      );
                    }
                    return <p key={line}>{line}</p>;
                  })}
                </Reveal>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section sl-faq">
        <div className="container">
          <SectionHeading
            center
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked <span className="grad">Questions</span>
              </>
            }
          />
          <div className="sl-faq-list">
            {service.faq.map((f) => (
              <Reveal key={f.q}>
                <div className="sl-faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

            <section className="section sl-cta">
        <div className="container">
          <Reveal>
            <div className="sl-cta-box">
              <div>
                <h2>{service.cta}</h2>
                <p>
                  Call +91 83559 58119 · Email sales@cgcein.com · C 1405 Kailash Business Park, Vikhroli (W), Mumbai
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
  );
}