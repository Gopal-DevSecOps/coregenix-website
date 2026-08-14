import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  MonitorIcon,
  CloudIcon,
  ServerIcon,
  ShieldIcon,
  DatabaseIcon,
  UserIcon,
  LockIcon,
  ScanIcon,
  ArrowRightIcon,
} from "./Icons";

const services = [
  {
    icon: MonitorIcon,
    title: "Managed Support Services",
    desc: "24/7 proactive IT support and helpdesk that keeps your systems running smoothly without any downtime.",
    href: "/services/it-managed-services",
  },
  {
    icon: CloudIcon,
    title: "Cloud Infrastructure",
    desc: "Secure cloud migration, deployment and management — scale your business on reliable public and private clouds.",
    href: "/services/cloud-managed-services",
  },
  {
    icon: ServerIcon,
    title: "IT Infrastructure Solutions",
    desc: "Design, deployment and management of servers, networks and data centers built around your business needs.",
    href: "/solutions/it-infrastructure-solutions",
  },
  {
    icon: ShieldIcon,
    title: "IT & OT Cyber Security",
    desc: "Complete protection for your IT and operational technology with audit, hardening, SOC and incident response.",
    href: "/solutions/cyber-security-solutions",
  },
  {
    icon: DatabaseIcon,
    title: "Data Backup / DR / BCP",
    desc: "Automated backup, disaster recovery and business continuity planning to protect your critical data always.",
    href: "/solutions/it-infrastructure-solutions",
  },
  {
    icon: UserIcon,
    title: "Staff Augmentation",
    desc: "Skilled IT professionals on demand — extend your team with the right expertise, right when you need it.",
    href: "/staffing-fms-facility-management",
  },
  {
    icon: LockIcon,
    title: "InfoSec GRC",
    desc: "Governance, risk and compliance management to meet ISO 27001 and industry standards with confidence.",
    href: "/solutions/grc-dpo",
  },
  {
    icon: ScanIcon,
    title: "Audit & Assessment",
    desc: "Independent audits, penetration testing and risk assessments that reveal real exposure before attackers do.",
    href: "/services/audit-assessment",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="float-shape float-shape-1" aria-hidden="true" />
      <div className="float-shape float-shape-2" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              We provide IT Infrastructure & <span className="grad">Cyber Security Services for your Business</span></>
          }
          desc="Complete range of technology services — from IT support and cloud to security and compliance — tailored to your business."
        />
        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) + 1}>
              <div className="service-card">
                <span className="icon-box">
                  <service.icon />
                </span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href={service.href} className="link">
                  Learn More
                  <ArrowRightIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
