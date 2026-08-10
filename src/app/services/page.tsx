import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import WhatWeProvide from "@/components/WhatWeProvide";
import {
  MonitorIcon,
  CloudIcon,
  ServerIcon,
  ShieldIcon,
  DatabaseIcon,
  SettingsIcon,
  UserIcon,
  LockIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import "./services.css";

export const metadata: Metadata = {
  title: "Solutions & Services — CoreGenix",
  description:
    "Explore CoreGenix services: managed support, cloud infrastructure, IT infrastructure, cyber security, backup & DR, ITIL automation, staff augmentation and InfoSec GRC.",
};

const services = [
  {
    icon: MonitorIcon,
    title: "Managed Support Services",
    desc: "24/7 proactive IT support and helpdesk that keeps your systems running smoothly without any downtime.",
    features: ["24/7 helpdesk & remote support", "Proactive monitoring & maintenance", "SLA-backed response times"],
  },
  {
    icon: CloudIcon,
    title: "Cloud Infrastructure",
    desc: "Secure cloud migration, deployment and management — scale your business on reliable public and private clouds.",
    features: ["Cloud migration & landing zones", "Azure & AWS architecture", "Cost optimization & governance"],
  },
  {
    icon: ServerIcon,
    title: "IT Infrastructure Solutions",
    desc: "Design, deployment and management of servers, networks and data centers built around your business needs.",
    features: ["Data center design & build", "Server & virtualization", "Networking & storage"],
  },
  {
    icon: ShieldIcon,
    title: "IT & OT Cyber Security",
    desc: "Complete protection for your IT and operational technology with audit, hardening, SOC and incident response.",
    features: ["Security audits & hardening", "SOC & threat monitoring", "Incident response & recovery"],
  },
  {
    icon: DatabaseIcon,
    title: "Data Backup / DR / BCP",
    desc: "Automated backup, disaster recovery and business continuity planning to protect your critical data always.",
    features: ["Automated backup solutions", "Disaster recovery planning", "Business continuity testing"],
  },
  {
    icon: SettingsIcon,
    title: "ITIL Automation",
    desc: "Streamline IT service management with ITIL-aligned processes and smart automation for better efficiency.",
    features: ["ITSM process design", "Workflow automation", "Service desk optimization"],
  },
  {
    icon: UserIcon,
    title: "Staff Augmentation",
    desc: "Skilled IT professionals on demand — extend your team with the right expertise, right when you need it.",
    features: ["On-demand skilled engineers", "Flexible engagement models", "Dedicated delivery teams"],
  },
  {
    icon: LockIcon,
    title: "InfoSec GRC",
    desc: "Governance, risk and compliance management to meet ISO 27001 and industry standards with confidence.",
    features: ["ISO 27001 readiness", "Risk assessment & treatment", "Compliance frameworks & audits"],
  },
];

export default function ServicesPage() {
  return (
    <>
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
              A complete range of IT infrastructure, cloud and cyber security services — tailored to keep
              your business secure, resilient and always ahead.
            </Reveal>
          </div>
        </section>

        <section className="section services-page">
          <div className="container">
            <div className="services-page-grid">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) + 1}>
                  <div className="service-page-card">
                    <span className="icon-box">
                      <service.icon />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <ul className="service-features">
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <a href="/contact" className="service-link">
                      Request This Service
                      <ArrowRightIcon />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <WhatWeProvide />

        <section className="section services-cta">
          <div className="container">
            <Reveal>
              <div className="services-cta-box">
                <div>
                  <h2>Not sure which solution fits your business?</h2>
                  <p>Talk to our experts for a free consultation and a tailored technology plan.</p>
                </div>
                <a href="/contact" className="btn btn-light">
                  Get Free Consultation
                  <ArrowRightIcon />
                </a>
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
