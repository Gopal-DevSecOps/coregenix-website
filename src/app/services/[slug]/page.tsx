import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import CloudStrategyLanding from "@/components/CloudStrategyLanding";
import ServiceLanding from "@/components/ServiceLanding";
import { getService, services } from "@/data/services";
import { SITE } from "@/lib/site";
import "./cloud-strategy.css";
import "./service-landing.css";

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
      locale: "en_IN",
      siteName: SITE.name,
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
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
      {service.slug === "cloud-strategy" ? (
        <>
          <CloudStrategyLanding service={service} />
          <Cta />
        </>
      ) : (
        <>
          <ServiceLanding service={service} />
          <Cta />
        </>
      )}
      <Footer />
      <ScrollTop />
    </>
  );
}
