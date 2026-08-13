import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  SearchIcon,
  ClipboardCheckIcon,
  CloudIcon,
  RouteIcon,
  FileTextIcon,
  ShieldCheckIcon,
  CheckIcon,
  AwardIcon,
  LayersIcon,
  UserIcon,
  NetworkIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "./Icons";
import type { ServicePage } from "@/data/services";

interface Props {
  service: ServicePage;
}

const stats = [
  { value: "18+", label: "Years of Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "55+", label: "Happy Clients" },
  { value: "24x7", label: "Pan-India Support" },
];

const doIcons = [SearchIcon, ClipboardCheckIcon, CloudIcon, RouteIcon, FileTextIcon, ShieldCheckIcon];

const chooseIcons = [AwardIcon, LayersIcon, UserIcon, NetworkIcon, MapPinIcon];

export default function CloudStrategyLanding({ service }: Props) {
  const problem = service.sections.find((s) => s.heading === "The Problem");
  const whatWeDo = service.sections.find((s) => s.heading === "What We Do");
  const whatYouGet = service.sections.find((s) => s.heading === "What You Get");
  const whyChoose = service.sections.find((s) => s.heading === "Why Choose CoreGenix");

  return (
    <main>
      <section className="cs-hero">
        <div className="float-shape float-shape-1" aria-hidden="true" />
        <div className="float-shape float-shape-2" aria-hidden="true" />
        <div className="container cs-hero-grid">
          <div className="cs-hero-content">
            <Reveal as="span" className="eyebrow" delay={1}>
              Cloud Strategy Consulting
            </Reveal>
            <Reveal delay={2}>
              <h1 className="section-title cs-hero-title">
                Cloud Strategy <span className="grad">Consulting India</span>
              </h1>
            </Reveal>
            <Reveal as="p" className="cs-hero-desc" delay={3}>
              {service.intro}
            </Reveal>
            <Reveal as="div" className="cs-hero-actions" delay={4}>
              <Link href="/contact" className="btn btn-grad">
                Get Free Consultation
                <ArrowRightIcon />
              </Link>
              <Link href="/services" className="btn btn-hero-secondary">
                View All Services
              </Link>
            </Reveal>
          </div>
          <Reveal className="cs-hero-media" delay={3}>
            <div className="cs-hero-img">
              <Image
                src="/images/coregenix/hero-2.png"
                alt="Cloud strategy consulting for business"
                width={900}
                height={600}
                className="main-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cs-stats" aria-label="Cloud strategy by the numbers">
        <div className="container">
          <div className="cs-stats-grid">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 4) + 1}>
                <div className="cs-stat">
                  <span className="cs-stat-value">{stat.value}</span>
                  <span className="cs-stat-label">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cs-problem">
        <div className="container">
          <SectionHeading
            center
            eyebrow="The Challenge"
            title={
              <>
                The <span className="grad">Problem</span> We Solve
              </>
            }
          />
          <Reveal as="div" className="cs-problem-body" delay={2}>
            {problem?.body.map((line) => <p key={line}>{line}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="section cs-features section-dark">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What We Do"
            title={
              <>
                End-to-End <span className="grad">Cloud Strategy</span>
              </>
            }
            desc="A structured engagement that takes you from current state to a confident, low-risk cloud roadmap."
          />
          <div className="services-grid">
            {whatWeDo?.body.map((item, i) => {
              const Icon = doIcons[i % doIcons.length];
              return (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="service-card cs-feature-card">
                    <span className="icon-box">
                      <Icon />
                    </span>
                    <h3>{item.split(" — ")[0]}</h3>
                    <p>{item.split(" — ")[1] ?? ""}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cs-what">
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
          <div className="cs-check-grid">
            {whatYouGet?.body.map((item, i) => (
              <Reveal key={item} delay={(i % 2) + 1}>
                <div className="cs-check-item">
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

      <section className="section cs-choose">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Why Choose CoreGenix"
            title={
              <>
                The <span className="grad">CoreGenix</span> Difference
              </>
            }
          />
          <div className="cs-choose-grid">
            {whyChoose?.body.map((item, i) => {
              const Icon = chooseIcons[i % chooseIcons.length];
              return (
                <Reveal key={item} delay={(i % 3) + 1}>
                  <div className="cs-choose-card">
                    <span className="cs-choose-num">
                      <Icon />
                    </span>
                    <h3>{item.split(" — ")[0]}</h3>
                    <p>{item.split(" — ")[1] ?? ""}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cs-faq">
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
          <div className="cs-faq-list">
            {service.faq.map((f) => (
              <Reveal key={f.q}>
                <div className="cs-faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
