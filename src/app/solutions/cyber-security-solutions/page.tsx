import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import SolutionCategoryView from "@/components/SolutionCategoryView";
import { getSolutionCategory } from "@/data/solutionCategories";
import { SITE } from "@/lib/site";
import "../../services/services.css";

const category = getSolutionCategory("cyber-security-solutions");
const path = "/solutions/cyber-security-solutions";

export const metadata: Metadata = {
  title: "Cyber Security Solutions",
  description:
    "Identity, endpoint, data and network security solutions from CoreGenix — IAM, SSO, PAM, Zero Trust, DLP and EDR/MDR/XDR.",
  alternates: { canonical: path },
  openGraph: {
    title: "Cyber Security Solutions — CoreGenix",
    description:
      "IAM, SSO, PAM, Zero Trust, DLP and EDR/MDR/XDR security solutions from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security Solutions — CoreGenix",
    description: "IAM, SSO, PAM, Zero Trust, DLP and EDR/MDR/XDR solutions from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE.url}/solutions` },
    { "@type": "ListItem", position: 3, name: "Cyber Security Solutions", item: `${SITE.url}${path}` },
  ],
};

export default function CyberSecuritySolutionsPage() {
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
