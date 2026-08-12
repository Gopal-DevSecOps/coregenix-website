import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { getPost, posts } from "@/data/posts";
import { SITE } from "@/lib/site";
import { CalendarIcon, UserIcon } from "@/components/Icons";
import "../blog.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article Not Found" };

  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main>
        <section className="page-hero blog-post-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Blog · {post.tag}
            </Reveal>
            <h1 className="page-hero-title">{post.title}</h1>
            <div className="post-meta blog-post-meta">
              <span>
                <CalendarIcon />
                {post.date}
              </span>
              <span>
                <UserIcon />
                By {post.author}
              </span>
            </div>
          </div>
        </section>

        <section className="section blog-post">
          <div className="container">
            <div className="blog-post-layout">
              <article className="blog-post-body">
                <Reveal delay={1}>
                  <div className="blog-post-image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1376}
                      height={768}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </Reveal>

                <Reveal delay={2}>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  {post.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </Reveal>
              </article>

              <aside className="blog-post-aside">
                <div className="blog-post-widget">
                  <h2>Need expert help?</h2>
                  <p>Talk to our IT and cyber security experts for a free consultation.</p>
                  <Link href="/contact" className="btn btn-grad">
                    Get Free Consultation
                  </Link>
                </div>
                <Link href="/blog" className="blog-post-back">
                  ← Back to Blog
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
