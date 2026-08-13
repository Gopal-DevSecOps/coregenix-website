import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { categories } from "@/data/serviceCategories";
import { SITE } from "@/lib/site";
import "./services.css";

export const metadata: Metadata = {
  title: "Solutions & Services",
  description:
    "Explore CoreGenix services: managed IT services, cloud management, audit & assessment, and managed security services — trusted by businesses across India.",
  keywords: [
    "IT services company Mumbai",
    "managed IT services",
    "cyber security services",
    "cloud services India",
    "NOC services",
    "AMC services",
    "VAPT services",
    "managed SOC",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Solutions & Services — CoreGenix",
    description:
      "IT Managed Services, Cloud Managed Services, Audit & Assessment and Managed Security Services from CoreGenix.",
    url: `${SITE.url}/services`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions & Services — CoreGenix",
    description:
      "IT Managed Services, Cloud Managed Services, Audit & Assessment and Managed Security Services from CoreGenix.",
  },
};


const allServices = categories.flatMap((c) => c.services);

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CoreGenix IT & Cyber Security Services",
  provider: { "@type": "Organization", name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT & Cyber Security Services",
    itemListElement: allServices.map((s) => ({
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
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
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
              From managed IT and cloud operations to cyber security and audits — one trusted partner for your
              entire technology estate.
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
                    {cat.services.map((service, i) => (
                      <Reveal key={service.title} delay={(i % 3) + 1}>
                        <article className="service-page-card">
                          <span className="icon-box">
                            <service.icon />
                          </span>
                          <h3>{service.title}</h3>
                          <p>{service.desc}</p>
                          <ul className="service-features">
                            {service.features.map((feature) => (
                              <li key={feature}>
                                <CheckIcon />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link href={service.href} className="service-link">
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
