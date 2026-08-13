import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";
import { solutionCategories as categories } from "@/data/solutionCategories";
import "../services/services.css";

export const metadata: Metadata = {
  title: "Cyber Security Solutions",
  description:
    "Explore CoreGenix solutions: IT infrastructure, cloud, cyber security, and GRC & DPO — trusted by businesses across India.",
  keywords: [
    "cyber security solutions",
    "cyber security company Mumbai",
    "IT infrastructure solutions",
    "cloud solutions India",
    "GRC audit services",
    "managed SOC services",
    "VAPT services India",
    "identity access management",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Cyber Security Solutions — CoreGenix",
    description:
      "IT Infrastructure, Cloud, Cyber Security and GRC & DPO solutions from CoreGenix — trusted by businesses across India.",
    url: `${SITE.url}/solutions`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security Solutions — CoreGenix",
    description:
      "IT Infrastructure, Cloud, Cyber Security and GRC & DPO solutions from CoreGenix.",
  },
};


const allSolutions = categories.flatMap((c) => c.solutions);

const solutionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CoreGenix IT, Cloud & Cyber Security Solutions",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT, Cloud & Cyber Security Solutions",
    itemListElement: allSolutions.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.desc, url: `${SITE.url}${s.href}` },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={solutionsJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero solutions-hero">
          <div className="float-shape float-shape-1" aria-hidden="true" />
          <div className="float-shape float-shape-3" aria-hidden="true" />
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Our Solutions
            </Reveal>
            <h1 className="page-hero-title">
              Solutions & Services Built for <span className="grad">Your Business</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              IT infrastructure, cloud, cyber security and GRC & DPO solutions — designed, delivered and
              managed by one trusted partner.
            </Reveal>
          </div>
        </section>

        <section className="section services-catalog">
          <div className="container">
            <div className="services-cat">
              {categories.map((cat) => (
                <div key={cat.title} className="services-cat-block">
                  <Reveal>
                    <div className="services-cat-head">
                      <span className="icon-box">
                        <cat.icon />
                      </span>
                      <div>
                        <span className="services-cat-sub">{cat.subtitle}</span>
                        <h2>{cat.title}</h2>
                      </div>
                    </div>
                    <p className="services-cat-desc">{cat.desc}</p>
                  </Reveal>
                  <div className="services-cat-grid">
                    {cat.solutions.map((solution, i) => (
                      <Reveal key={solution.title} delay={(i % 3) + 1}>
                        <article className="service-page-card">
                          <span className="icon-box">
                            <solution.icon />
                          </span>
                          <h3>{solution.title}</h3>
                          <p>{solution.desc}</p>
                          <ul className="service-features">
                            {solution.features.map((feature) => (
                              <li key={feature}>
                                <CheckIcon />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link href={solution.href} className="service-link">
                            Learn More
                            <ArrowRightIcon />
                          </Link>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-cta">
          <div className="container">
            <Reveal>
              <div className="services-cta-box">
                <div>
                  <h2>Not sure which solution fits your business?</h2>
                  <p>Talk to our experts for a free consultation and a tailored technology plan.</p>
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
