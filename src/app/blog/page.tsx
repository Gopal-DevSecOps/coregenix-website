import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CalendarIcon, UserIcon } from "@/components/Icons";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog — CoreGenix",
  description:
    "Insights, guides and news on IT infrastructure, cloud, cyber security and business continuity from the CoreGenix team.",
};

const posts = [
  {
    tag: "Cyber Security",
    title: "IT & OT Cyber Security: Why It Is Essential for Your Business",
    excerpt:
      "Cyber threats are growing every day. With CoreGenix, keep your IT and OT environments fully protected.",
    image: "/images/coregenix/service-6.jpg",
    date: "Jul 28, 2026",
    author: "By CoreGenix Team",
  },
  {
    tag: "Cloud",
    title: "How Cloud Infrastructure Helps Scale Your Business",
    excerpt:
      "Secure cloud migration means lower cost, better performance, and a business that's always ready. Find out how cloud infrastructure can help you.",
    image: "/images/coregenix/service-7.jpg",
    date: "Jul 18, 2026",
    author: "By CoreGenix Team",
  },
  {
    tag: "Data Backup",
    title: "Data Backup, DR & BCP: A Complete Guide to Business Continuity",
    excerpt:
      "Learn how essential backup, disaster recovery, and business continuity planning are to protect against data loss — read the full guide here.",
    image: "/images/coregenix/service-1.jpg",
    date: "Jul 06, 2026",
    author: "By CoreGenix Team",
  },
  {
    tag: "Managed Services",
    title: "Why Managed IT Support Keeps Your Business Running 24/7",
    excerpt:
      "Proactive helpdesk and monitoring mean fewer surprises and more uptime. Discover what managed support really delivers.",
    image: "/images/coregenix/service-2.jpg",
    date: "Jun 22, 2026",
    author: "By CoreGenix Team",
  },
  {
    tag: "Infrastructure",
    title: "Building a Future-Ready IT Infrastructure for Growth",
    excerpt:
      "Servers, networks and data centers that scale with you. A practical blueprint for modern enterprise infrastructure.",
    image: "/images/coregenix/service-4.jpg",
    date: "Jun 09, 2026",
    author: "By CoreGenix Team",
  },
  {
    tag: "Compliance",
    title: "InfoSec GRC: Meeting ISO 27001 Standards with Confidence",
    excerpt:
      "Governance, risk and compliance don't have to be painful. Learn how GRC frameworks keep you audit-ready.",
    image: "/images/coregenix/service-5.jpg",
    date: "May 27, 2026",
    author: "By CoreGenix Team",
  },
];

const categories = ["All", "Cyber Security", "Cloud", "Data Backup", "Managed Services", "Infrastructure", "Compliance"];

const featured = posts[0];

export default function BlogPage() {
  return (
    <>
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
            <Reveal className="blog-featured">
              <a href="#blog" className="blog-featured-media">
                <span className="post-tag">{featured.tag}</span>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={1376}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </a>
              <div className="blog-featured-body">
                <Reveal as="span" className="eyebrow" delay={1}>
                  Featured Article
                </Reveal>
                <h2>{featured.title}</h2>
                <div className="post-meta">
                  <span>
                    <CalendarIcon />
                    {featured.date}
                  </span>
                  <span>
                    <UserIcon />
                    {featured.author}
                  </span>
                </div>
                <p>{featured.excerpt}</p>
                <a href="#blog" className="blog-featured-link">
                  Read Full Article
                  <ArrowRightIcon />
                </a>
              </div>
            </Reveal>

            <div className="blog-cats">
              {categories.map((cat) => (
                <button key={cat} className={`blog-cat ${cat === "All" ? "active" : ""}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="blog-grid blog-page-grid">
              {posts.map((post, i) => (
                <Reveal key={post.title} delay={(i % 3) + 1}>
                  <article className="post-card">
                    <a href="#blog" className="post-media">
                      <span className="post-tag">{post.tag}</span>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={900}
                        height={600}
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </a>
                    <div className="post-body">
                      <div className="post-meta">
                        <span>
                          <CalendarIcon />
                          {post.date}
                        </span>
                        <span>
                          <UserIcon />
                          {post.author}
                        </span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <a href="#blog" className="post-more">
                        Read More
                        <ArrowRightIcon />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="blog-pagination">
              <span className="blog-page active">1</span>
              <span className="blog-page">2</span>
              <span className="blog-page">3</span>
              <span className="blog-page-next">
                Next
                <ArrowRightIcon />
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
