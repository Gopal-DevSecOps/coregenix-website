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
  ClockIcon,
  ClipboardCheckIcon,
  LayersIcon,
  ServerIcon,
  ShieldIcon,
  DatabaseIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./amc-landing.css";

export const metadata: Metadata = {
  title: "Annual Maintenance Contract (AMC) Services Mumbai — IT Support & Maintenance",
  description:
    "Annual Maintenance Contract (AMC) for servers, networks and IT infrastructure in Mumbai & India. Preventive and corrective maintenance with clear SLAs, 24/7 support and predictable costs.",
  keywords: [
    "annual maintenance contract Mumbai",
    "AMC services India",
    "IT AMC support",
    "server maintenance contract",
    "network AMC services",
  ],
  alternates: { canonical: "/annual-maintenance-contract" },
  openGraph: {
    title: "Annual Maintenance Contract (AMC) Services Mumbai — CoreGenix",
    description:
      "Annual Maintenance Contract (AMC) for servers, networks and IT infrastructure in Mumbai & India. Preventive and corrective maintenance with clear SLAs, 24/7 support and predictable costs.",
    url: `${SITE.url}/annual-maintenance-contract`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual Maintenance Contract (AMC) Services Mumbai — CoreGenix",
    description:
      "Annual Maintenance Contract (AMC) for servers, networks and IT infrastructure in Mumbai & India.",
  },
};

const heroStats = [
  { value: "18+", label: "Years of Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "55+", label: "Happy Clients" },
  { value: "24/7", label: "Support Availability" },
];

const offerings = [
  {
    icon: MonitorIcon,
    title: "Preventive Maintenance",
    desc: "Scheduled checks, cleaning, patching and health audits that catch small issues before they become big ones.",
  },
  {
    icon: SettingsIcon,
    title: "Corrective Maintenance",
    desc: "Fast response when something fails — restore your systems quickly with minimal business disruption.",
  },
  {
    icon: ClockIcon,
    title: "Priority Support",
    desc: "Your calls jump the queue. AMC clients get faster resolution than one-off service requests.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "SLA-Backed Response",
    desc: "Clear, written SLAs that define what happens and when — so you always know what to expect.",
  },
  {
    icon: LayersIcon,
    title: "Asset Tracking",
    desc: "Know the status of every device you own — configurations, warranties and maintenance history in one place.",
  },
  {
    icon: ServerIcon,
    title: "Hardware & Software Support",
    desc: "Coverage for servers, network gear and workstations — full-stack IT equipment maintenance.",
  },
];

const amcTypes = [
  { title: "Comprehensive AMC", desc: "Desktops, laptops, servers, printers and routers — full coverage with rapid response time." },
  { title: "Non-Comprehensive AMC", desc: "Select equipment with a defined scope — cost-effective for low-risk assets." },
  { title: "24/7 Support", desc: "Onsite and remote support — quick issue resolution anytime, anywhere." },
  { title: "Proactive Maintenance", desc: "Security patching and performance monitoring — prevent issues before they occur." },
];

const benefits = [
  "Fewer breakdowns and longer equipment life",
  "Predictable annual cost instead of surprise repair bills",
  "A dedicated team that knows your environment",
  "Documentation and reports on every visit",
];

const whyUs = [
  {
    icon: ShieldIcon,
    title: "18+ Years of Experience",
    desc: "Deep, proven expertise in IT infrastructure maintenance across industries.",
  },
  {
    icon: DatabaseIcon,
    title: "120+ Projects Delivered",
    desc: "A strong track record spanning banking, manufacturing, healthcare and more.",
  },
  {
    icon: ServerIcon,
    title: "55+ Long-Running AMCs",
    desc: "Happy clients with long-running AMC relationships — trust that lasts.",
  },
  {
    icon: MonitorIcon,
    title: "Mumbai Team, Pan-India Reach",
    desc: "Mumbai-based support team with coverage across India for on-site visits.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Transparent SLAs",
    desc: "You always know what to expect — no hidden terms, no vague promises.",
  },
];

const industries = [
  { title: "Banking & Finance", desc: "Server administration, network security and compliance support." },
  { title: "Manufacturing", desc: "End-user computing, network management and disaster recovery." },
  { title: "Healthcare", desc: "Data backup, disaster recovery and compliance support." },
  { title: "Government / PSU", desc: "Comprehensive AMC and IT infrastructure maintenance." },
  { title: "Technology / IT", desc: "Complete IT infrastructure management." },
  { title: "Fintech", desc: "Secure, compliant and always-available IT operations." },
];

const testimonials = [
  {
    text: "Services at CGCE are excellent, and they perfectly aligned with us for Cloud and software licenses. The renewal process was smooth, and they always adhered to timelines. We had a hassle-free and pleasant experience. Highly recommend CGCE for all IT needs!",
    name: "Yashwant",
    role: "Head IT",
  },
  {
    text: "CGCE is a game-changer! Their proactive response to challenges proved their commitment to customer satisfaction. Their service was truly outstanding — what impressed us most was their adherence to timelines.",
    name: "Mahindra & Mahindra",
    role: "Verified Client",
  },
  {
    text: "Their service was truly outstanding and perfectly aligned with our needs. What impressed us most was their adherence to timelines and the quality of their technical team.",
    name: "Manish Mehta",
    role: "Head IT (India)",
  },
];

const faqs = [
  { q: "What is an AMC?", a: "An Annual Maintenance Contract (AMC) is an agreement where a provider maintains your IT equipment for a year — covering preventive and corrective maintenance at a fixed cost." },
  { q: "What equipment does an IT AMC cover?", a: "Servers, storage, networking hardware, firewalls, desktops, laptops, printers and sometimes software licenses, depending on the agreement." },
  { q: "How much does an AMC cost in Mumbai?", a: "It depends on your equipment inventory, age, and support level. Contact CoreGenix for a free assessment and quote." },
  { q: "What's the difference between comprehensive and non-comprehensive AMC?", a: "A comprehensive AMC covers all equipment with rapid response and 24/7 support, while a non-comprehensive AMC covers select equipment with a defined scope — a cost-effective option for low-risk assets." },
  { q: "Do you provide AMC support across India?", a: "Yes! Our support team is based in Mumbai with Pan-India coverage for on-site visits across Delhi, Bangalore, Pune and beyond." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Annual Maintenance Contract (AMC) Services",
  description:
    "Annual Maintenance Contract (AMC) for servers, networks and IT infrastructure in Mumbai & India — preventive and corrective maintenance with clear SLAs and 24/7 support.",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, logo: `${SITE.url}/images/coregenix/logo.png` },
  areaServed: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" } },
  url: `${SITE.url}/annual-maintenance-contract`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Annual Maintenance Contract", item: `${SITE.url}/annual-maintenance-contract` },
  ],
};

export default function AmcLandingPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="section amc-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-2" aria-hidden="true" />
          <div className="container amc-hero-grid">
            <div className="amc-hero-content">
              <Reveal as="span" className="eyebrow" delay={1}>
                Annual Maintenance Contract
              </Reveal>
              <Reveal delay={2}>
                <h1 className="section-title amc-hero-title">
                  Keep Your IT Assets Healthy with an <span className="grad">Annual Maintenance Contract</span>
                </h1>
              </Reveal>
              <Reveal as="p" className="amc-hero-desc" delay={3}>
                An Annual Maintenance Contract (AMC) from CoreGenix keeps your IT assets healthy,
                covered, and running at peak performance — all year round. Preventive maintenance
                today prevents costly breakdowns tomorrow.
              </Reveal>
              <Reveal as="div" className="amc-hero-actions" delay={4}>
                <Link href="/contact" className="btn btn-grad">
                  Get Free Consultation
                  <ArrowRightIcon />
                </Link>
                <Link href="/services" className="btn btn-hero-secondary">
                  Explore All Services
                </Link>
              </Reveal>
            </div>
            <Reveal className="amc-hero-media" delay={3}>
              <div className="amc-hero-img">
                <Image
                  src="/images/coregenix/service-1.jpg"
                  alt="Annual Maintenance Contract services"
                  width={900}
                  height={600}
                  className="main-img"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="amc-stats" aria-label="AMC by the numbers">
          <div className="container">
            <div className="amc-stats-grid">
              {heroStats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="amc-stat">
                    <span className="amc-stat-value">{stat.value}</span>
                    <span className="amc-stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section amc-problem">
          <div className="container">
            <SectionHeading
              center
              eyebrow="The Problem"
              title={
                <>
                  Unplanned Downtime <span className="grad">Costs You Money</span>
                </>
              }
              desc="Every piece of IT equipment ages. Without planned maintenance, failures happen at the worst possible moment — during peak business hours, before a big launch, or the day after the warranty expires."
            />
            <div className="amc-problem-grid">
              {[
                "Breakdowns during peak business hours",
                "Emergency repair bills that blow your budget",
                "Lost productivity while systems are down",
                "Stressed-out IT teams fighting fires",
                "Compliance risks from unpatched systems",
                "Shortened equipment life from poor upkeep",
              ].map((item, i) => (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="amc-check-item">
                    <span className="ce-check">
                      <CheckIcon />
                    </span>
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="amc-problem-outro" delay={3}>
              Think of an AMC as a health insurance policy for your IT equipment — you pay a
              predictable annual fee, and we ensure everything stays healthy and operational.
            </Reveal>
          </div>
        </section>

        <section className="section amc-offerings section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow="What&apos;s Included"
              title={
                <>
                  Everything Your Infrastructure <span className="grad">Needs to Stay Online</span>
                </>
              }
              desc="From scheduled preventive checks to rapid corrective support — complete coverage built around your business."
            />
            <div className="amc-offering-grid">
              {offerings.map((o, i) => (
                <Reveal key={o.title} delay={(i % 3) + 1}>
                  <div className="amc-offering-card">
                    <span className="icon-box">
                      <o.icon />
                    </span>
                    <h3>{o.title}</h3>
                    <p>{o.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section amc-types">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Choose Your Cover"
              title={
                <>
                  AMC Plans That Fit <span className="grad">Your Budget</span>
                </>
              }
              desc="Flexible AMC structures — pick the level of coverage your assets actually need."
            />
            <div className="wwp-grid amc-types-grid">
              {amcTypes.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card amc-type-card">
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

        <section className="section amc-benefits">
          <div className="container">
            <Reveal>
              <div className="amc-benefits-box">
                <div className="amc-benefits-text">
                  <h2>
                    What You <span className="grad">Get</span>
                  </h2>
                  <p>
                    An AMC pays for itself the moment it prevents a single outage. Here&apos;s what our
                    clients enjoy year after year.
                  </p>
                </div>
                <ul className="amc-benefits-list">
                  {benefits.map((b) => (
                    <li key={b}>
                      <span className="ce-check">
                        <CheckIcon />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section amc-why section-dark">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Why Choose CoreGenix"
              title={
                <>
                  The Partner Your Infrastructure <span className="grad">Can Rely On</span>
                </>
              }
              desc="18+ years of IT infrastructure maintenance experience, delivered by a Mumbai-based team with Pan-India reach."
            />
            <div className="amc-why-grid">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) + 1}>
                  <article className="amc-why-card">
                    <span className="amc-why-icon">
                      <item.icon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section amc-industries">
          <div className="container">
            <SectionHeading
              center
              eyebrow="Industries We Serve"
              title={
                <>
                  AMC Solutions for <span className="grad">Every Sector</span>
                </>
              }
            />
            <div className="wwp-grid amc-industries-grid">
              {industries.map((ind, i) => (
                <Reveal key={ind.title} delay={(i % 3) + 1} className="wwp-wrap">
                  <article className="wwp-card amc-industry-card">
                    <div className="wwp-card-inner">
                      <h3>{ind.title}</h3>
                      <p>{ind.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section amc-testimonials section-dark">
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
            <div className="amc-testimonial-grid">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i + 1}>
                  <div className="amc-testimonial-card">
                    <p>{t.text}</p>
                    <span className="amc-testimonial-name">{t.name}</span>
                    <span className="amc-testimonial-role">{t.role}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section amc-faq">
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
            <div className="amc-faq-list">
              {faqs.map((f) => (
                <Reveal key={f.q}>
                  <div className="amc-faq-item">
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
