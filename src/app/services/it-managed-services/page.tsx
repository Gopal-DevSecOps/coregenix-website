import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import ServiceCategoryView from "@/components/ServiceCategoryView";
import { getCategory } from "@/data/serviceCategories";
import { SITE } from "@/lib/site";
import "../services.css";

const category = getCategory("it-managed-services");
const path = "/services/it-managed-services";

export const metadata: Metadata = {
  title: "IT Managed Services",
  description:
    "Proactive monitoring, maintenance and support from CoreGenix — NOC, AMC and Staffing & FMS that keep your infrastructure available, secure and performing.",
  alternates: { canonical: path },
  openGraph: {
    title: "IT Managed Services — CoreGenix",
    description:
      "NOC, AMC and Staffing & FMS services that keep your IT running — 24x7 monitoring, maintenance and support from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Managed Services — CoreGenix",
    description: "NOC, AMC and Staffing & FMS services from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    { "@type": "ListItem", position: 3, name: "IT Managed Services", item: `${SITE.url}${path}` },
  ],
};

export default function ItManagedServicesPage() {
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
