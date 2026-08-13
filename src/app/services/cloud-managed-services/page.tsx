import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import ServiceCategoryView from "@/components/ServiceCategoryView";
import { getCategory } from "@/data/serviceCategories";
import { SITE } from "@/lib/site";
import "../services.css";

const category = getCategory("cloud-managed-services");
const path = "/services/cloud-managed-services";

export const metadata: Metadata = {
  title: "Cloud Managed Services",
  description:
    "Cloud strategy, migration and ongoing management from CoreGenix — public, private and hybrid cloud with cost control and security built in.",
  alternates: { canonical: path },
  openGraph: {
    title: "Cloud Managed Services — CoreGenix",
    description:
      "Cloud Strategy, Cloud Infrastructure Management and Backup & Recovery services from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Managed Services — CoreGenix",
    description: "Cloud strategy, management and backup services from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    { "@type": "ListItem", position: 3, name: "Cloud Managed Services", item: `${SITE.url}${path}` },
  ],
};

export default function CloudManagedServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        {category ? <ServiceCategoryView category={category} /> : null}
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
