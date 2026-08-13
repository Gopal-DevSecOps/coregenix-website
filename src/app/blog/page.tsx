import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import BlogList from "@/components/BlogList";
import { posts } from "@/data/posts";
import { SITE } from "@/lib/site";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides and news on IT infrastructure, cloud, cyber security and business continuity from the CoreGenix team.",
  keywords: [
    "cyber security blog",
    "IT infrastructure insights",
    "cloud computing guide",
    "managed services news",
    "cyber security tips India",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — CoreGenix",
    description:
      "Insights, guides and news on IT infrastructure, cloud, cyber security and business continuity from the CoreGenix team.",
    url: `${SITE.url}/blog`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — CoreGenix",
    description:
      "Insights, guides and news on IT infrastructure, cloud, cyber security and business continuity from the CoreGenix team.",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "CoreGenix Blog",
  description: metadata.description ?? "",
  url: `${SITE.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/images/coregenix/logo.png` },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Blog & News
            </Reveal>
            <h1 className="page-hero-title">
              Insights from Our <span className="grad">Tech Experts</span>
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              Latest updates, practical guides and expert opinions on IT infrastructure, cloud and cyber security.
            </Reveal>
          </div>
        </section>

        <section className="section blog-page">
          <div className="container">
            <BlogList posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
