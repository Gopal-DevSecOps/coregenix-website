import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { getRanking, type RankingPage } from "@/data/rankings";
import { SITE } from "@/lib/site";
import "@/app/rankings.css";

export default function RankingPageView({ slug }: { slug: string }) {
  const page = getRanking(slug);
  if (!page) return null;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: `${SITE.url}/${page.slug}`,
    description: page.description,
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
    areaServed: "IN",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: page.title, item: `${SITE.url}/${page.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero ranking-hero">
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
          </div>
        </section>

        <section className="section ranking-section">
          <div className="container">
            <Reveal delay={1}>
              <div className="ranking-block">
                <h2>Why Choosing the Right Partner Matters</h2>
                <ul className="ranking-list">
                  {page.problems.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="ranking-proof">
                {page.proof.map((p) => (
                  <div className="ranking-proof-item" key={p.label}>
                    <span className="ranking-proof-value">{p.value}</span>
                    <span className="ranking-proof-label">{p.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="ranking-block">
                <h2>A Full Spectrum of Security Services</h2>
                <ul className="ranking-list">
                  {page.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="ranking-block">
                <h2>What Sets CoreGenix Apart</h2>
                <ul className="ranking-list">
                  {page.differentiators.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="ranking-faq">
                <h2>Frequently Asked Questions</h2>
                {page.faq.map((f) => (
                  <div className="ranking-faq-item" key={f.q}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>

        <Reveal delay={5}>
          <div className="ranking-cta">
                <h2>{page.cta}</h2>
                <div className="ranking-cta-actions">
                  <Link href="/contact" className="btn btn-grad">
                    Get Free Consultation
                  </Link>
                  <Link href="/services" className="btn btn-hero-secondary">
                    Explore Services
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

export type { RankingPage };
