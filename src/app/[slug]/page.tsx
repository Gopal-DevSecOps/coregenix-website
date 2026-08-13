import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { allLandingUrlSlugs, getLandingByUrlSlug } from "@/data/landing";
import { SITE } from "@/lib/site";
import "../landing.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allLandingUrlSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingByUrlSlug(slug);
  if (!page) return { title: "Page Not Found" };

  const url = `${SITE.url}/${page.landingSlug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.title,
      "cyber security services Mumbai",
      "IT infrastructure services India",
      "managed security services",
    ],
    alternates: { canonical: `/${page.landingSlug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
      locale: "en_IN",
      siteName: SITE.name,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingByUrlSlug(slug);
  if (!page) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url, telephone: SITE.phone },
    areaServed: ["IN"],
    url: `${SITE.url}/${page.landingSlug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: page.title, item: `${SITE.url}/${page.landingSlug}` },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero landing-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Home · {page.title}
            </Reveal>
            <h1 className="page-hero-title">
              {page.h1}
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              {page.intro}
            </Reveal>
            <Reveal as="div" className="landing-hero-actions" delay={2}>
              <Link href="/contact" className="btn btn-grad">
                Get Free Consultation
              </Link>
              <Link href="/services" className="btn btn-hero-secondary">
                Explore All Services
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section landing-section">
          <div className="container">
            <Reveal delay={1}>
              <div className="landing-numbers">
                {page.numbers.map((n) => (
                  <div className="landing-number" key={n.label}>
                    <span className="landing-number-value">{n.value}</span>
                    <span className="landing-number-label">{n.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="landing-body">
              {page.sections.map((section, i) => (
                <Reveal key={section.heading} delay={(i % 3) + 1}>
                  <div className="landing-block">
                    <h2>{section.heading}</h2>
                    {section.body.length > 2 && section.body.every((l) => l.length < 120) ? (
                      <ul className="landing-list">
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
              <div className="landing-block">
                <h2>Industries We Serve</h2>
                <ul className="landing-list landing-industries">
                  {page.industries.map((ind) => (
                    <li key={ind}>{ind}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="landing-block">
                <h2>What Our Clients Say</h2>
                {page.testimonials.map((t) => (
                  <p className="landing-testimonial" key={t}>
                    {t}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="landing-faq">
                <h2>Frequently Asked Questions</h2>
                {page.faq.map((f) => (
                  <div className="landing-faq-item" key={f.q}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="landing-cta">
                <h2>{page.cta}</h2>
                <p>Call +91 83559 58119 · Email sales@cgcein.com</p>
                <div className="landing-cta-actions">
                  <Link href="/contact" className="btn btn-grad">
                    Get Free Consultation
                  </Link>
                  <Link href="/services" className="btn btn-hero-secondary">
                    Explore All Services
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
