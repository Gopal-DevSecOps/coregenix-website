import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import ItInfraSolutionsLanding from "@/components/ItInfraSolutionsLanding";
import { SITE } from "@/lib/site";
import "../../services/[slug]/backup-recovery.css";

const path = "/solutions/it-infrastructure-solutions";

export const metadata: Metadata = {
  title: "IT Infrastructure Solutions — Network, Data Center, Backup & DR | CoreGenix",
  description:
    "Networks, data centers, data backup, and disaster recovery solutions from CoreGenix — designed, built, and managed for uptime and growth.",
  keywords: [
    "IT infrastructure solutions India",
    "network infrastructure Mumbai",
    "data center solutions",
    "data backup solutions",
    "disaster recovery BCP",
  ],
  alternates: { canonical: path },
  openGraph: {
    title: "IT Infrastructure Solutions — CoreGenix",
    description:
      "Network, Data Center, Data Backup and DR & BCP solutions from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Infrastructure Solutions — CoreGenix",
    description: "Network, Data Center, Data Backup and DR & BCP solutions from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
    { "@type": "ListItem", position: 3, name: "IT Infrastructure Solutions", item: `${SITE.url}${path}` },
  ],
};

export default function ItInfrastructureSolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <ItInfraSolutionsLanding />
      <Footer />
      <ScrollTop />
    </>
  );
}
