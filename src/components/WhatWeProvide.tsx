import Wow from "./Wow";
import {
  ShieldIcon,
  LockIcon,
  FingerprintIcon,
  MonitorIcon,
  DatabaseIcon,
  SettingsIcon,
  ArrowRightIcon,
} from "./Icons";

const services = [
  {
    icon: ShieldIcon,
    title: "Network Security",
    desc: "Deploying firewalls and intrusion detection systems to safeguard networks.",
  },
  {
    icon: LockIcon,
    title: "Data Encryption",
    desc: "Encrypting sensitive data at rest and in transit using advanced encryption.",
  },
  {
    icon: FingerprintIcon,
    title: "Identity & Access",
    desc: "Managing user identities and access with MFA and detailed role-based control.",
  },
  {
    icon: MonitorIcon,
    title: "Security Monitoring",
    desc: "24/7 monitoring with advanced SIEM systems for real-time detection.",
  },
  {
    icon: DatabaseIcon,
    title: "Backup & Recovery",
    desc: "Protecting critical data with secure backups and rapid recovery plans.",
  },
  {
    icon: SettingsIcon,
    title: "Security Configuration",
    desc: "Hardening systems and applying secure configurations across all infrastructure.",
  },
];

export default function WhatWeProvide() {
  return (
    <section id="what-we-provide" className="section wwp section-dark">
      <div className="container">
        <div className="wwp-grid">
          <div className="wwp-copy">
            <Wow delay={300} as="span" className="eyebrow">
              What We Provide
            </Wow>
            <Wow delay={500} as="h2" className="section-title">
              Robust Cybersecurity Services for{" "}
              <span className="grad">Today&apos;s Threats</span>
            </Wow>
            <Wow delay={700} as="p" className="wwp-desc">
              Protect your business from ever-evolving cyber risks with our end-to-end
              security solutions. We offer advanced threat detection, real-time monitoring,
              and proactive defense strategies tailored to your infrastructure. Whether
              you&apos;re safeguarding sensitive data or ensuring compliance, our robust
              cybersecurity services help you stay secure, resilient, and ahead of the
              threat curve.
            </Wow>
          </div>

          <div className="wwp-cards">
            {services.map((service) => (
              <Wow key={service.title} animation="right" delay={300} className="wwp-wrap">
                <article className="wwp-card">
                  <service.icon className="wwp-watermark" aria-hidden="true" />
                  <div className="wwp-card-inner">
                    <span className="wwp-icon">
                      <service.icon />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <a href="#contact" className="wwp-link">
                      Learn More
                      <ArrowRightIcon />
                    </a>
                  </div>
                </article>
              </Wow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
