import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import ServiceLanding from "@/components/ServiceLanding";
import NetworkLanding from "@/components/NetworkLanding";
import DataCenterLanding from "@/components/DataCenterLanding";
import DataBackupLanding from "@/components/DataBackupLanding";
import DisasterRecoveryLanding from "@/components/DisasterRecoveryLanding";
import PrivateCloudLanding from "@/components/PrivateCloudLanding";
import PublicCloudLanding from "@/components/PublicCloudLanding";
import HybridCloudLanding from "@/components/HybridCloudLanding";
import { getSolutionPage, solutionPages } from "@/data/solutionPages";
import { SITE } from "@/lib/site";
import "../../services/[slug]/service-landing.css";
import "../../services/[slug]/cloud-infra-mgmt.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return solutionPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return { title: "Solution Not Found" };

  const url = `${SITE.url}/solutions/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.title,
      "cyber security solutions Mumbai",
      "IT infrastructure solutions India",
      "cloud solutions",
    ],
    alternates: { canonical: `/solutions/${page.slug}` },
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

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return null;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
    },
    areaServed: ["IN"],
    category: page.category,
    url: `${SITE.url}/solutions/${page.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
      { "@type": "ListItem", position: 3, name: page.title, item: `${SITE.url}/solutions/${page.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      {page.slug === "network" ? (
        <NetworkLanding service={page} />
      ) : page.slug === "data-center" ? (
        <DataCenterLanding service={page} />
      ) : page.slug === "data-backup" ? (
        <DataBackupLanding service={page} />
      ) : page.slug === "disaster-recovery-bcp" ? (
        <DisasterRecoveryLanding service={page} />
      ) : page.slug === "private-cloud" ? (
        <PrivateCloudLanding service={page} />
      ) : page.slug === "public-cloud" ? (
        <PublicCloudLanding service={page} />
      ) : page.slug === "hybrid-cloud" ? (
        <HybridCloudLanding service={page} />
      ) : (
        <ServiceLanding
          service={page}
          viewAllLabel="View All Solutions"
          viewAllHref="/solutions"
        />
      )}
      <Footer />
      <ScrollTop />
    </>
  );
}