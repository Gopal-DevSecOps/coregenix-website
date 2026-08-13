import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found. Explore CoreGenix IT infrastructure and cyber security services.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Error 404
            </Reveal>
            <h1 className="page-hero-title">
              Page <span className="grad">Not Found</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              The page you are looking for may have been moved or removed. Let&apos;s get you back
              on track.
            </Reveal>
            <Reveal as="div" delay={2}>
              <Link href="/" className="btn btn-grad">
                Back to Home
                <ArrowRightIcon />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal as="div" className="not-found-links" delay={1}>
              <Link href="/services" className="link">
                Explore Our Services
                <ArrowRightIcon />
              </Link>
              <Link href="/contact" className="link">
                Contact CoreGenix
                <ArrowRightIcon />
              </Link>
              <Link href="/blog" className="link">
                Read Our Blog
                <ArrowRightIcon />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}