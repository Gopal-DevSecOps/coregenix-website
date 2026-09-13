import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import CloudInfraSolutionsLanding from "@/components/CloudInfraSolutionsLanding";
import { SITE } from "@/lib/site";
import "../../services/[slug]/cloud-infra-mgmt.css";

const path = "/solutions/cloud-infrastructure-solutions";

export const metadata: Metadata = {
  title: "Cloud Infrastructure Solutions — Private, Public & Hybrid | CoreGenix",
  description:
    "Private, public and hybrid cloud solutions from CoreGenix — architecture, migration, security and ongoing management, done right.",
  keywords: [
    "cloud infrastructure solutions India",
    "private cloud solutions",
    "public cloud Azure AWS",
    "hybrid cloud solutions Mumbai",
  ],
  alternates: { canonical: path },
  openGraph: {
    title: "Cloud Infrastructure Solutions — CoreGenix",
    description:
      "Private Cloud, Public Cloud (Azure & AWS) and Hybrid Cloud solutions from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Infrastructure Solutions — CoreGenix",
    description: "Private, Public and Hybrid Cloud solutions from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
    { "@type": "ListItem", position: 3, name: "Cloud Infrastructure Solutions", item: `${SITE.url}${path}` },
  ],
};

export default function CloudInfrastructureSolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <CloudInfraSolutionsLanding />
      <Footer />
      <ScrollTop />
    </>
  );
}
