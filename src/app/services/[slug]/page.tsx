import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { getService, services } from "@/data/services";
import { SITE } from "@/lib/site";
import "./services.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };

  const url = `${SITE.url}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title,
      "cyber security services Mumbai",
      "IT services India",
      "managed services",
    ],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return null;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
    },
    areaServed: ["IN"],
    url: `${SITE.url}/services/${service.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero service-detail-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Home · Services · {service.title}
            </Reveal>
            <h1 className="page-hero-title">
              {service.h1}
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              {service.intro}
            </Reveal>
          </div>
        </section>

        <section className="section service-detail">
          <div className="container">
            <div className="service-detail-body">
              {service.sections.map((section, i) => (
                <Reveal key={section.heading} delay={(i % 3) + 1}>
                  <div className="service-detail-section">
                    <h2>{section.heading}</h2>
                    {section.body.length > 2 && section.body.every((l) => l.length < 120) ? (
                      <ul className="service-detail-list">
                        {section.body.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      section.body.map((line) => <p key={line}>{line}</p>)
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={2}>
              <div className="service-detail-faq">
                <h2>Frequently Asked Questions</h2>
                {service.faq.map((f) => (
                  <div className="service-detail-faq-item" key={f.q}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="service-detail-cta">
                <h2>{service.cta}</h2>
                <div className="service-detail-cta-actions">
                  <Link href="/contact" className="btn btn-grad">
                    Get Free Consultation
                  </Link>
                  <Link href="/services" className="btn btn-hero-secondary">
                    View All Services
                  </Link>
                </div>
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
