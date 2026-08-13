import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import SolutionCategoryView from "@/components/SolutionCategoryView";
import { getSolutionCategory } from "@/data/solutionCategories";
import { SITE } from "@/lib/site";
import "../../services/services.css";

const category = getSolutionCategory("grc-dpo");
const path = "/solutions/grc-dpo";

export const metadata: Metadata = {
  title: "GRC & DPO Solutions",
  description:
    "Governance, risk and compliance solutions from CoreGenix — GRC audits, risk management, compliance, NIST CSF, ISMS and BCP/DR.",
  alternates: { canonical: path },
  openGraph: {
    title: "GRC & DPO Solutions — CoreGenix",
    description:
      "GRC & cyber audits, risk management, compliance, NIST CSF, ISMS and BCP/DR solutions from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "GRC & DPO Solutions — CoreGenix",
    description: "GRC & cyber audits, risk management and compliance solutions from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
    { "@type": "ListItem", position: 3, name: "GRC & DPO Solutions", item: `${SITE.url}${path}` },
  ],
};

export default function GrcDpoSolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        {category ? <SolutionCategoryView category={category} /> : null}
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
