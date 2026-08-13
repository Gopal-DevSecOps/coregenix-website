import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import {
  MonitorIcon,
  SettingsIcon,
  ActivityIcon,
  ShieldIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./noc-landing.css";

export const metadata: Metadata = {
  title: "Network Operations Center (NOC) Services | 24x7 Network Monitoring | India's No.1 NOC Company",
  description:
    "Get 24x7 network monitoring & management from India's top NOC service provider. Proactive threat detection, guaranteed uptime, and expert support. Free consultation!",
  keywords: [
    "NOC services India",
    "network operations center Mumbai",
    "24x7 network monitoring",
    "NOC service provider",
    "managed NOC services",
  ],
  alternates: { canonical: "/network-operations-center" },
  openGraph: {
    title: "Network Operations Center (NOC) Services | 24x7 Network Monitoring | India's No.1 NOC Company",
    description:
      "Get 24x7 network monitoring & management from India's top NOC service provider. Proactive threat detection, guaranteed uptime, and expert support. Free consultation!",
    url: `${SITE.url}/network-operations-center`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Operations Center (NOC) Services | 24x7 Network Monitoring | India's No.1 NOC Company",
    description:
      "Get 24x7 network monitoring & management from India's top NOC service provider. Free consultation!",
  },
};

const heroStats = [
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "24x7x365", label: "Monitoring" },
  { value: "60%", label: "Cost Savings" },
  { value: "500+", label: "Enterprise Clients" },
];

const features = [
  {
    icon: MonitorIcon,
    title: "24x7x365 Proactive Monitoring",
    desc: "We continuously monitor your network devices, servers, applications, security events and bandwidth usage — catching issues before they impact you.",
  },
  {
    icon: SettingsIcon,
    title: "Incident Detection & Rapid Response",
    desc: "Critical outages are detected in under 5 minutes and resolved in under 30 minutes. Security alerts get a response in under 2 minutes.",
  },
  {
    icon: ActivityIcon,
    title: "Performance Optimization",
    desc: "Traffic analysis, load balancing, capacity planning and weekly health checks keep your network fast, reliable and ready to grow.",
  },
  {
    icon: ShieldIcon,
    title: "Security Monitoring & Threat Response",
    desc: "Real-time threat detection, SIEM integration, patch management and compliance reporting are built into every NOC operation.",
  },
];

const monitored = [
  "Servers & Virtual Machines",
  "Routers & Switches",
  "Firewalls & Security Appliances",
  "Cloud Infrastructure (AWS, Azure, GCP)",
  "Applications & Databases",
  "VPN & Remote Access",
];

const audiences = [
  { title: "Enterprises & Large Corporations", desc: "Complex, multi-location infrastructure that requires 24x7 monitoring." },
  { title: "Healthcare & Hospitals", desc: "Patient data and critical systems require absolute uptime and security." },
  { title: "Banking & Financial Services", desc: "Transactions, compliance and customer trust depend on network reliability." },
  { title: "E-commerce & Retail", desc: "Every second of downtime means lost sales and frustrated customers." },
  { title: "Cloud-First Companies", desc: "Hybrid and multi-cloud environments need unified monitoring and management." },
  { title: "Manufacturing & Industrial", desc: "OT and IT convergence requires specialized network monitoring expertise." },
];

const processSteps = [
  { step: "Step 1", title: "Assessment & Discovery", desc: "We analyze your current network infrastructure, identify gaps, and understand your business requirements." },
  { step: "Step 2", title: "Custom Monitoring Setup", desc: "We deploy SNMP monitoring, agent-based monitoring and synthetic transaction monitoring tailored to your environment." },
  { step: "Step 3", title: "24x7 Monitoring & Management", desc: "Our engineers monitor your network continuously, proactively identifying and resolving issues." },
  { step: "Step 4", title: "Incident Response & Resolution", desc: "Detection under 2 minutes, triage under 10 minutes, resolution under 30 minutes and root cause analysis within 24 hours." },
  { step: "Step 5", title: "Continuous Improvement", desc: "We analyze incident data, optimize monitoring rules, and provide ongoing recommendations." },
];

const testimonials = [
  {
    text: "CoreGenix NOC has been a game-changer for our business. We went from frequent outages to 99.99% uptime. Their team is responsive, professional, and truly cares about our success.",
    name: "Client",
    role: "Leading E-commerce Brand",
  },
  {
    text: "We tried multiple NOC providers, but CoreGenix stood out. Their proactive approach and deep expertise saved us from multiple potential disasters.",
    name: "Client",
    role: "Healthcare Chain",
  },
];

const faqs = [
  { q: "What is a Network Operations Center (NOC)?", a: "A NOC is a centralized facility where IT professionals monitor, manage, and maintain your organization's network infrastructure 24x7 to ensure optimal performance, availability, and security." },
  { q: "What's the difference between NOC and SOC?", a: "While both are control centers, a NOC focuses on network performance, availability, and infrastructure management, while a SOC (Security Operations Center) focuses specifically on cybersecurity threats, incident response, and vulnerability management." },
  { q: "How does CoreGenix NOC pricing work?", a: "We offer flexible pricing models starting at ₹25,000/month for small businesses. Enterprise pricing is customized based on your infrastructure size, complexity, and specific requirements. Contact us for a personalized quote." },
  { q: "What monitoring tools do you use?", a: "We use industry-leading tools including SolarWinds, PRTG, Nagios, Zabbix, and custom-built AI-powered monitoring solutions, ensuring comprehensive coverage for any environment." },
  { q: "Do you support hybrid and multi-cloud environments?", a: "Yes! Our NOC services support on-premise, cloud (AWS, Azure, GCP), and hybrid environments with unified monitoring and management." },
  { q: "What's your SLA guarantee?", a: "We offer a 99.99% uptime guarantee with clear SLAs for response and resolution times. If we fail to meet our SLAs, you get service credits." },
  { q: "How quickly can you start NOC services?", a: "We can deploy basic monitoring within 48 hours. Full NOC setup with custom dashboards and alerting takes 1-2 weeks, depending on your environment complexity." },
  { q: "Do you offer both NOC and SOC services?", a: "Yes! CoreGenix provides integrated NOC and SOC services for comprehensive IT operations and security monitoring." },
  { q: "Is there a free trial available?", a: "Yes! We offer a 14-day free trial of our NOC services with no commitment. Contact us to get started." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Network Operations Center (NOC) Services",
  description:
    "24x7 network monitoring and management services by India's top NOC company. Proactive threat detection, performance optimization, and guaranteed uptime.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: `${SITE.url}/images/coregenix/logo.png` },
  areaServed: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Mumbai, Delhi, Bangalore", addressCountry: "India" } },
  url: `${SITE.url}/network-operations-center`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Network Operations Center", item: `${SITE.url}/network-operations-center` },
  ],
};

export default function NocLandingPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="section noc-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-2" aria-hidden="true" />
          <div className="container noc-hero-grid">
            <div className="noc-hero-content">
              <Reveal as="span" className="eyebrow" delay={1}>
                Network Operations Center
              </Reveal>
              <Reveal delay={2}>
                <h1 className="section-title noc-hero-title">
                  24x7 Network Monitoring &amp; Management by India&apos;s <span className="grad">No. 1 NOC Company</span>
                </h1>
              </Reveal>
              <Reveal as="p" className="noc-hero-desc" delay={3}>
                Your network is the backbone of your business. Every second of downtime costs you revenue,
                reputation, and customer trust. Our NOC provides round-the-clock surveillance, proactive threat
                detection, and expert incident resolution to keep your infrastructure running at peak performance.
              </Reveal>
              <Reveal as="div" className="noc-hero-actions" delay={4}>
                <Link href="/contact" className="btn btn-grad">
                  Get Free Consultation
                  <ArrowRightIcon />
                </Link>
                <Link href="/services/soc-mss" className="btn btn-hero-secondary">
                  Explore Managed SOC
                </Link>
              </Reveal>
            </div>
            <Reveal className="noc-hero-media" delay={3}>
              <div className="noc-hero-img">
                <Image
                  src="/images/coregenix/hero-1.png"
                  alt="Network Operations Center monitoring"
                  width={900}
                  height={600}
                  className="main-img"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="noc-stats" aria-label="NOC by the numbers">
          <div className="container">
            <div className="noc-stats-grid">
              {heroStats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="noc-stat">
                    <span className="noc-stat-value">{stat.value}</span>
                    <span className="noc-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section noc-what">
          <div className="container">
            <SectionHeading
              center
              eyebrow="What We Monitor"
              title={
                <>
                  What is a <span className="grad">Network Operations Center?</span>
                </>
              }
              desc="A NOC is the mission control for your IT environment — a centralized team that monitors, manages, and maintains your network 24/7."
            />
            <div className="noc-check-grid">
              {monitored.map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="noc-check-item">
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

        <section className="section noc-features section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Our NOC Services"
              title={
                <>
                  Complete Network <span className="grad">Protection &amp; Performance</span>
                </>
              }
              desc="Unlike traditional providers who only react to problems, we use AI-powered predictive analytics to identify and resolve issues BEFORE they impact your business."
            />
            <div className="services-grid">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={(i % 4) + 1}>
                  <div className="service-card noc-feature-card">
                    <span className="icon-box">
                      <feature.icon />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section noc-audience">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Who Needs NOC Services"
              title={
                <>
                  Built for Businesses That <span className="grad">Can&apos;t Afford Downtime</span>
                </>
              }
            />
            <div className="wwp-grid">
              {audiences.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card">
                    <div className="wwp-card-inner">
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section noc-process">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Our NOC Process"
              title={
                <>
                  A Proven 5-Step <span className="grad">Engagement Model</span>
                </>
              }
              desc="From discovery to continuous improvement — a structured process that delivers guaranteed uptime and measurable results."
            />
            <div className="noc-process-grid">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={(i % 3) + 1}>
                  <div className="noc-process-card">
                    <span className="noc-process-num">0{i + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section noc-testimonials section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Client Stories"
              title={
                <>
                  What Our <span className="grad">Clients Say</span>
                </>
              }
            />
            <div className="noc-testimonial-grid">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i + 1}>
                  <div className="noc-testimonial-card">
                    <p>{t.text}</p>
                    <span className="noc-testimonial-name">{t.name}</span>
                    <span className="noc-testimonial-role">{t.role}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section noc-faq">
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
            <div className="noc-faq-list">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <div className="noc-faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
