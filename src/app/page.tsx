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

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd} />
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
        <Partners />
        <Testimonials />
        <Leadership />
        <BlogGrid />
        <Cta />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
