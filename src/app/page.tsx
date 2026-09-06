import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CustomerSuccess from "@/components/CustomerSuccess";
import Services from "@/components/Services";
import Defense from "@/components/Defense";
import TextMarquee from "@/components/TextMarquee";
import WhatWeProvide from "@/components/WhatWeProvide";
import CyberExperts from "@/components/CyberExperts";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Leadership from "@/components/Leadership";
import Partners from "@/components/Partners";
import BlogGrid from "@/components/BlogGrid";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/images/coregenix/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: "IN",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does CoreGenix provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CoreGenix provides IT infrastructure and cyber security services including Network Operations Center (NOC), Annual Maintenance Contracts (AMC), cloud infrastructure management, VAPT, managed SOC services, GRC & DPDPA compliance, and OT security for businesses across India.",
      },
    },
    {
      "@type": "Question",
      name: "Is CoreGenix a cyber security company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CoreGenix is a cyber security and IT infrastructure company headquartered in Mumbai, India, offering managed security services, vulnerability assessments, penetration testing, and 24/7 threat monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "Where is CoreGenix based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CoreGenix is headquartered in Mumbai, India, with additional operations in Bengaluru and Jaipur, serving clients across the globe.",
      },
    },
    {
      "@type": "Question",
      name: "How many years of experience does CoreGenix have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CoreGenix has over 22 years of experience, having been founded in 2004 as CG Consultancy and Engineering Services (CGCES).",
      },
    },
    {
      "@type": "Question",
      name: "Does CoreGenix offer cloud services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CoreGenix offers cloud infrastructure services including cloud strategy, migration, infrastructure management, and backup & recovery across public, private, and hybrid cloud environments.",
      },
    },
    {
      "@type": "Question",
      name: "What is OT security and does CoreGenix provide it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OT (Operational Technology) security protects industrial control systems and operational networks from cyber threats. CoreGenix provides dedicated OT security services as part of its managed cyber security offerings.",
      },
    },
    {
      "@type": "Question",
      name: "Is CoreGenix ISO 27001 certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CoreGenix is ISO 27001 certified, confirming its information security management practices meet international standards.",
      },
    },
    {
      "@type": "Question",
      name: "Which companies has CoreGenix worked with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CoreGenix has provided IT infrastructure, cloud, and licensing services to organizations including top Manufacturing, BFSI, Retail, Healthcare organizations and more.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustBar />
        <Defense />
        <TextMarquee />
        <WhatWeProvide />
        <CyberExperts />
        <VideoSection />
        <CustomerSuccess />
        <Testimonials />
        <Partners />
        <Leadership />
        <BlogGrid />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
