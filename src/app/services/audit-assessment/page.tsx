import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import ServiceCategoryView from "@/components/ServiceCategoryView";
import { getCategory } from "@/data/serviceCategories";
import { SITE } from "@/lib/site";
import "../services.css";

const category = getCategory("audit-assessment");
const path = "/services/audit-assessment";

export const metadata: Metadata = {
  title: "Audit & Assessment",
  description:
    "Independent audits, penetration testing and risk assessments from CoreGenix — VAPT, red teaming, GRC and compliance that reveal real exposure.",
  alternates: { canonical: path },
  openGraph: {
    title: "Audit & Assessment — CoreGenix",
    description:
      "GRC & DPO, VAPT, Red Teaming and Audit services from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit & Assessment — CoreGenix",
    description: "GRC & DPO, VAPT, Red Teaming and Audit services from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    { "@type": "ListItem", position: 3, name: "Audit & Assessment", item: `${SITE.url}${path}` },
  ],
};

export default function AuditAssessmentPage() {
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
