import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CustomerSuccess from "@/components/CustomerSuccess";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
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

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <TrustBar />
        <CustomerSuccess />
        <Defense />
        <TextMarquee />
        <WhatWeProvide />
        <CyberExperts />
        <VideoSection />
        <Testimonials />
        <Leadership />
        <Partners />
        <BlogGrid />
        <Cta />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
