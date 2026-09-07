import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import ServiceCategoryView from "@/components/ServiceCategoryView";
import { getCategory } from "@/data/serviceCategories";
import { SITE } from "@/lib/site";
import "../services.css";

const category = getCategory("managed-security-services");
const path = "/services/managed-security-services";

export const metadata: Metadata = {
  title: "Managed Security Services",
  description:
    "Continuous threat detection, vulnerability management and specialized defenses from CoreGenix — SOC, WAF, DLP, email security and OT security.",
  alternates: { canonical: path },
  openGraph: {
    title: "Managed Security Services — CoreGenix",
    description:
      "Managed SOC, vulnerability management, WAF, DLP, email security and OT security services from CoreGenix.",
    url: `${SITE.url}${path}`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Security Services — CoreGenix",
    description: "Managed SOC, WAF, DLP, email and OT security services from CoreGenix.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    { "@type": "ListItem", position: 3, name: "Managed Security Services", item: `${SITE.url}${path}` },
  ],
};

export default function ManagedSecurityServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="section mss-intro">
          <div className="container">
            <Reveal as="p" className="mss-intro-text" delay={1}>
              For over 22 years, we have safeguarded organizations from evolving cyber threats. Our team provides
              end-to-end security solutions — from proactive threat detection and vulnerability assessments to rapid
              incident response — ensuring your data, systems, and reputation stay fully protected in an ever-changing
              digital landscape.
            </Reveal>
          </div>
        </section>
        {category ? <ServiceCategoryView category={category} /> : null}
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
