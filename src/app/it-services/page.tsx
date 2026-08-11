import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import {
  NetworkIcon,
  ServerIcon,
  ShieldIcon,
  DatabaseIcon,
  LayersIcon,
  CloudIcon,
  AwardIcon,
  UserIcon,
  ShieldCheckIcon,
  ScanIcon,
  SettingsIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import "./it-services.css";

export const metadata: Metadata = {
  title: "IT Enterprise Solutions & Services — CoreGenix",
  description:
    "IT Infrastructure Solutions from CoreGenix: network infrastructure, datacenter & cloud solutions, cybersecurity for IT & OT, and data management with 24x7 managed support.",
};

const infraSolutions = [
  {
    icon: NetworkIcon,
    title: "Network Infrastructure",
    desc: "We design and implement network infrastructures that are reliable, scalable, and secure. Our solutions include wired and wireless networks, network security, and network monitoring.",
  },
  {
    icon: ServerIcon,
    title: "Datacenter Solutions",
    desc: "We help businesses move to the cloud and leverage its benefits, such as increased flexibility, scalability, and cost savings. Our cloud solutions include cloud migration, cloud management, and cloud security.",
  },
  {
    icon: ShieldIcon,
    title: "Cybersecurity — IT & OT",
    desc: "We provide comprehensive cybersecurity solutions to protect businesses from cyber threats. Our solutions include security assessments, risk management, vulnerability management, and incident response.",
  },
  {
    icon: DatabaseIcon,
    title: "Data Management",
    desc: "We help businesses manage their data effectively and securely. Our solutions include data backup and recovery, disaster recovery, and data archiving.",
  },
];

const highlightFeatures = [
  {
    icon: LayersIcon,
    label: "Scalability of Resources & Technology platform",
  },
  {
    icon: CloudIcon,
    label: "The ability to support multi cloud, hybrid & heterogeneous IT landscape",
  },
  {
    icon: AwardIcon,
    label: "Customer delight",
  },
];

const provideSolutions = [
  {
    icon: UserIcon,
    title: "Professional Staff",
    desc: "Professional IT staff provide expertise in technology, SMEs offer specialized knowledge. Our support team aids users with technical issues, ensuring smooth operations.",
  },
  {
    icon: ShieldCheckIcon,
    title: "100% Satisfaction",
    desc: "Achieving 100% client satisfaction involves understanding needs, delivering quality service, and fostering strong communication, ensuring every expectation is met and exceeded consistently.",
  },
  {
    icon: ScanIcon,
    title: "Assessment and Gap Analysis",
    desc: "Our strengths lie in meticulous data gathering, thorough analysis, and strategic insight, enabling precise identification of gaps and effective formulation of improvement strategies.",
  },
];

const problemSolvers = [
  {
    icon: SettingsIcon,
    title: "Experience",
    desc: "Our innovative solutions approach is based on understanding your needs, identifying your pain points and delivering customized solutions that address these requirements.",
  },
  {
    icon: AwardIcon,
    title: "Best In Class",
    desc: "We're one of the few IT companies with a strong multidisciplinary approach. We always have fresh, top-notch hands working on your projects.",
  },
  {
    icon: HeartIcon,
    title: "Client-Oriented",
    desc: "To achieve sustainable growth, we aim to grasp everything about your business and help you achieve long-term success.",
  },
  {
    icon: NetworkIcon,
    title: "Working Together",
    desc: "We do business with honesty, integrity and keen sense of partnership to ensure your success; and thus success for us.",
  },
];

export default function ItServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero its-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-3" aria-hidden="true" />
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Home · IT Enterprise Solutions & Services
            </Reveal>
            <h1 className="page-hero-title">
              Infrastructure Solution <span className="grad">Design & Deployment</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              Whatever your need, we can solve IT. Our team of experienced IT professionals
              delivers high-quality, tailor-made solutions for your business.
            </Reveal>
          </div>
        </section>

        <section id="infrastructure" className="section its">
          <div className="container">
            <div className="section-heading center">
              <Reveal as="span" className="eyebrow" delay={1}>
                Our IT Solutions
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                IT Infrastructure <span className="grad">Solutions</span>
              </Reveal>
              <Reveal as="p" className="section-desc" delay={3}>
                Our IT solutions and services include:
              </Reveal>
            </div>

            <div className="its-grid">
              {infraSolutions.map((solution, i) => (
                <Reveal key={solution.title} delay={(i % 2) + 1}>
                  <article className="its-card">
                    <span className="its-card-icon">
                      <solution.icon />
                    </span>
                    <h3>{solution.title}</h3>
                    <p>{solution.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="its-outro" delay={2}>
              <p>
                At CoreGenix, we offer a wide range of IT solutions and services to help our
                clients achieve their business objectives. Our team of experienced IT
                professionals is dedicated to delivering high-quality solutions that are tailored
                to the specific needs of each client.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="its-features">
          <div className="container">
            <div className="its-features-grid">
              {highlightFeatures.map((feature, i) => (
                <Reveal key={feature.label} delay={i + 1}>
                  <div className="its-feature-item">
                    <span className="its-feature-icon">
                      <feature.icon />
                    </span>
                    <p>{feature.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="its-projects">
          <div className="container">
            <Reveal>
              <div className="its-projects-box">
                <div className="its-projects-text">
                  <h2>
                    CoreGenix is always interested in new, challenging and exciting projects
                  </h2>
                  <p>
                    24x7 Managed support services for IT infrastructure, Cyber Security services
                    enabling your Digital transformation journey.
                  </p>
                </div>
                <a href="/contact" className="btn btn-light">
                  Request A Quote
                  <ArrowRightIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="solutions" className="section its-provide">
          <div className="container">
            <div className="section-heading center">
              <Reveal as="span" className="eyebrow" delay={1}>
                Why Choose CoreGenix
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                What can we provide <span className="grad">best solutions</span>
              </Reveal>
              <Reveal as="p" className="section-desc" delay={3}>
                The expertise we have in implementation of IT Solutions & integrating it into
                your business operations, and managing infrastructure is second to none in the
                industry. We are confident that we will find a solution that meets your business
                needs, no matter how complex the challenge may be.
              </Reveal>
            </div>

            <div className="its-provide-grid">
              {provideSolutions.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) + 1}>
                  <article className="its-provide-card">
                    <span className="its-provide-icon">
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

        <section className="section its-solve section-dark">
          <div className="container">
            <div className="its-solve-head">
              <Reveal as="span" className="eyebrow" delay={1}>
                Our Approach
              </Reveal>
              <Reveal as="h2" className="section-title" delay={2}>
                Whatever your need, <span className="grad">we can solve IT.</span>
              </Reveal>
              <Reveal as="p" className="its-solve-desc" delay={3}>
                Our team of experts has years of experience in the IT industry, and we are always
                up-to-date on the latest trends and technologies. We use this knowledge to create
                tailor-made solutions that help our clients achieve their goals and stay ahead of
                the competition.
              </Reveal>
              <Reveal as="h3" className="its-solve-sub" delay={4}>
                Solving Business Problems With Technical Solutions
              </Reveal>
            </div>

            <div className="its-solve-grid">
              {problemSolvers.map((item, i) => (
                <Reveal key={item.title} delay={(i % 4) + 1}>
                  <article className="its-solve-card">
                    <span className="its-solve-icon">
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

        <Cta />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
