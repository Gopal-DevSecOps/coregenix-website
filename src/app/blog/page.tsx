import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CalendarIcon, UserIcon } from "@/components/Icons";
import { posts } from "@/data/posts";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog — CoreGenix",
  description:
    "Insights, guides and news on IT infrastructure, cloud, cyber security and business continuity from the CoreGenix team.",
};

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
              <a href={`/blog/${featured.slug}`} className="blog-featured-media">
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
                <a href={`/blog/${featured.slug}`} className="blog-featured-link">
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
                    <a href={`/blog/${post.slug}`} className="post-media">
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
                      <a href={`/blog/${post.slug}`} className="post-more">
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
