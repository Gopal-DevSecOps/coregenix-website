import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
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
} from "./Icons";

const services = [
  {
    icon: MonitorIcon,
    title: "Managed Support Services",
    desc: "24/7 proactive IT support and helpdesk that keeps your systems running smoothly without any downtime.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Infrastructure",
    desc: "Secure cloud migration, deployment and management — scale your business on reliable public and private clouds.",
  },
  {
    icon: ServerIcon,
    title: "IT Infrastructure Solutions",
    desc: "Design, deployment and management of servers, networks and data centers built around your business needs.",
  },
  {
    icon: ShieldIcon,
    title: "IT & OT Cyber Security",
    desc: "Complete protection for your IT and operational technology with audit, hardening, SOC and incident response.",
  },
  {
    icon: DatabaseIcon,
    title: "Data Backup / DR / BCP",
    desc: "Automated backup, disaster recovery and business continuity planning to protect your critical data always.",
  },
  {
    icon: SettingsIcon,
    title: "ITIL Automation",
    desc: "Streamline IT service management with ITIL-aligned processes and smart automation for better efficiency.",
  },
  {
    icon: UserIcon,
    title: "Staff Augmentation",
    desc: "Skilled IT professionals on demand — extend your team with the right expertise, right when you need it.",
  },
  {
    icon: LockIcon,
    title: "InfoSec GRC",
    desc: "Governance, risk and compliance management to meet ISO 27001 and industry standards with confidence.",
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
              We provide <span className="grad">IT Infrastructure</span> & Cyber Security Services for your Business
            </>
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
                <a href="#contact" className="link">
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
