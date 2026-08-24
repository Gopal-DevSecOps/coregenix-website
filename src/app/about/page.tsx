import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import Leadership from "@/components/Leadership";
import AboutStats from "@/components/AboutStats";
import SectionHeading from "@/components/SectionHeading";
import {
  CheckIcon,
  ArrowRightIcon,
  QuoteIcon,
  RouteIcon,
  EyeIcon,
  HeartIcon,
  ShieldCheckIcon,
  CpuIcon,
  AwardIcon,
  UserIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CoreGenix is a trusted IT infrastructure and cyber security partner with 18+ years of experience delivering tailored technology solutions.",
  keywords: [
    "about CoreGenix",
    "IT company Mumbai",
    "cyber security company India",
    "IT infrastructure partner",
    "managed IT services company",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — CoreGenix",
    description:
      "CoreGenix is a trusted IT infrastructure and cyber security partner with 18+ years of experience.",
    url: `${SITE.url}/about`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — CoreGenix",
    description:
      "CoreGenix is a trusted IT infrastructure and cyber security partner with 18+ years of experience.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/coregenix/logo.png`,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE.url}/about` },
  ],
};

const introDesc =
  "At CoreGenix we believe that technology should work for you, not the other way around. We pride ourselves on delivering personalized, high-quality services that meet the unique needs of each of our clients. Our team of experts has years of experience in the IT industry, and we are always up-to-date on the latest trends and technologies. We use this knowledge to create tailor-made solutions that help our clients achieve their goals and stay ahead of the competition. CG Consultancy and Engineering Services (CoreGenix) located in Mumbai, commenced its engineering and consulting operations in 2004. With more than a decade of experience and dedicated workforce, CoreGenix has achieved service excellence in the field of information technology, focusing explicitly on IT & OT infrastructure Solutions & Services.";

const features = [
  {
    title: "Distinctive Consultation Approach",
    desc: "We are committed to understanding your business needs and tailoring a solution to meet them. Personalized service is important to us and we take the time to learn about your business in order to facilitate your success.",
  },
  {
    title: "Transforming Challenges into Opportunities",
    desc: "Businesses are facing challenges they’ve never faced before due to the rapid pace of technological innovation. To bridge the gap between our clients’ current needs and their future goals, we work closely with them to develop innovative solutions.",
  },
  {
    title: "An Expert Team",
    desc: "Managed by some of the top minds in the industry, who are constantly developing new methods to make technology more accessible to everyone. We would be happy to assist you if you’d like to break through your technological barriers. Make sure to give us a call or chat with one of our experts",
  },
];

const whyChoose = [
  "Advanced Analytics",
  "Great Solutions",
  "Best Cyber Security",
  "Proactive Support",
  "Timely IT support 24x7",
  "Appropriate consulting and advisory to new hardware/software",
  "Hybrid Comprehensive IT support & services",
  "Quality support and collaboration",
  "IT Management",
  "Finest Quality",
];

const pillars = [
  {
    title: "Mission",
    icon: RouteIcon,
    desc: "Our mission is to deliver innovative and reliable technology solutions that help our clients achieve their business objectives. We strive to create long-lasting partnerships with our clients by providing exceptional customer service and delivering measurable results.",
  },
  {
    title: "Vision",
    icon: EyeIcon,
    desc: "Our vision is to become the leading provider of technology solutions for businesses of all sizes. We aim to achieve this by continuously innovating and adapting to meet the ever-changing needs of our clients. Our goal is to be recognized as a trusted partner and valued advisor in the technology industry.",
  },
];

const coreValues = [
  {
    title: "Customer Focus",
    icon: HeartIcon,
    desc: "We place a high value on our clients and always strive to put their needs first. We believe in building strong relationships with our clients based on mutual trust, respect, and collaboration.",
  },
  {
    title: "Integrity",
    icon: ShieldCheckIcon,
    desc: "We are committed to operating with the highest level of integrity and ethical standards. We believe in transparency and honesty in all our interactions with clients, partners, and employees.",
  },
  {
    title: "Innovation",
    icon: CpuIcon,
    desc: "We believe in being innovative and constantly pushing the boundaries of what is possible in the IT industry. We encourage creativity and open-mindedness in our team members and strive to provide our clients with cutting-edge solutions.",
  },
  {
    title: "Quality",
    icon: AwardIcon,
    desc: "We are committed to delivering high-quality products and services to our clients. We believe in attention to detail, continuous improvement, and exceeding our clients' expectations.",
  },
  {
    title: "Teamwork",
    icon: UserIcon,
    desc: "We believe that teamwork and collaboration are key to success. We encourage open communication, mutual respect, and support among team members. We value diversity and inclusivity and believe that a diverse team with different perspectives can lead to better solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero about-hero">
          <div className="container">
            <h1 className="page-hero-title about-page-hero-title">
              Your Trusted Technology Partner <span className="grad">Since 2004</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              We are a team of skilled experts dedicated to delivering tailored IT solutions that help
              our clients meet their business goals — from IT infrastructure and cloud to cyber security.
            </Reveal>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <Reveal className="about-media">
              <Image
                src="/images/coregenix/Solving Business Problems With Technical Solutions.png"
                alt="Solving business problems with technical solutions"
                width={2752}
                height={1536}
                className="main-img"
              />
              <div className="float-card">
                <span className="num">18+</span>
                <span className="txt">
                  Years of
                  <br />
                  your trust
                </span>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                title="18+ Years of Your Trust"
              />
              <div className="about-features">
                {features.map((feature, i) => (
                  <Reveal key={feature.title} delay={i + 1}>
                    <div className="about-feature">
                      <span className="feature-num">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        <section className="section about-quote">
          <div className="container">
            <Reveal>
              <div className="about-quote-box">
                <div className="about-quote-mark">
                  <QuoteIcon />
                </div>

                <p className="about-quote-text">Save money &amp; time – we help protect expenses.</p>
                <div className="about-quote-author">
                  <strong>MD &amp; CFO</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section about-intro">
          <div className="container">
            <Reveal as="p" className="about-intro-tag" delay={1}>
              We are establish IT consulting &amp; digital solutions company
            </Reveal>
            <Reveal as="h2" className="section-title" delay={2}>
              IT Infrastructure, IT &amp; OT Cyber Security, Cloud Computing &amp; Beyond
            </Reveal>
            <Reveal as="p" className="section-desc" delay={3}>
              {introDesc}
            </Reveal>
          </div>
        </section>

        <AboutStats />

        <section className="section about-why">
          <div className="container about-why-grid">
            <div className="about-why-left">
              <SectionHeading
                title={
                  <>
                    Why Choose Us! 
                  </>
                }
                desc="Thoughtful IT solutions form the base of successful businesses. You can rely on CoreGenix IT solutions to achieve business objectives with consistent support. Leverage our consultancy services and get benefited by:"
              />
            </div>
            <ul className="why-grid">
              {whyChoose.map((item, i) => (
                <Reveal as="li" key={item} delay={(i % 5) + 1}>
                  <div className="why-item">
                    <span className="check">
                      <CheckIcon />
                    </span>
                    {item}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section about-pillars section-dark">
          <div className="container">
            <div className="about-pillars-head">
              <Reveal as="h2" className="about-section-title" delay={2}>
                Mission, Vision &amp; <span className="grad">Values</span>
              </Reveal>
            </div>
            <div className="about-pillars-grid pillars-two">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i + 2}>
                  <div className="pillar-card">
                    <span className="pillar-num">0{i + 1}</span>
                    <div className="pillar-icon">
                      <pillar.icon />
                    </div>
                    <h3>Our {pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="values-title" delay={2}>
              Our Core <span className="grad">Values</span>
            </Reveal>
            <div className="core-values-grid">
              {coreValues.map((value, i) => (
                <Reveal key={value.title} delay={(i % 5) + 1}>
                  <div className="value-card">
                    <div className="value-icon">
                      <value.icon />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Leadership />

        <section className="section about-cta">
          <div className="container">
            <Reveal>
              <div className="about-cta-box">
                <div>
                  <h2>Let&apos;s solve your next technology challenge together.</h2>
                  <p>Talk to our experts and get a free consultation for your business.</p>
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
