"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRightIcon, CalendarIcon, UserIcon } from "./Icons";
import type { BlogPost } from "@/data/posts";

const ALL = "All";

function categoryFrom(post: BlogPost) {
  return post.tag;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState(ALL);
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const categories = useMemo(() => {
    const seen = new Set<string>();
    posts.forEach((p) => seen.add(categoryFrom(p)));
    return [ALL, ...Array.from(seen)];
  }, [posts]);

  const featured = posts[0];
  const filtered = active === ALL ? posts.slice(1) : posts.filter((p) => p.tag === active);
  const showFeatured = active === ALL ? Boolean(featured) : false;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const changeCategory = (cat: string) => {
    setActive(cat);
    setPage(1);
  };

  return (
    <>
      {showFeatured && featured && (
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
            <span className="eyebrow">Featured Article</span>
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
      )}

      <div className="blog-cats" role="group" aria-label="Filter articles by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`blog-cat ${cat === active ? "active" : ""}`}
            aria-pressed={cat === active}
            onClick={() => changeCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid blog-page-grid">
        {pageItems.map((post, i) => (
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

      {totalPages > 1 && (
        <nav className="blog-pagination" aria-label="Blog pagination">
          <button
            type="button"
            className="blog-page-btn"
            disabled={current === 1}
            onClick={() => setPage(current - 1)}
          >
            ‹ Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              className={`blog-page-btn ${p === current ? "active" : ""}`}
              aria-current={p === current ? "page" : undefined}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            className="blog-page-btn"
            disabled={current === totalPages}
            onClick={() => setPage(current + 1)}
          >
            Next ›
          </button>
        </nav>
      )}
    </>
  );
}
