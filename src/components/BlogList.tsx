"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRightIcon, CalendarIcon, UserIcon, SearchIcon, CloseIcon } from "./Icons";
import type { BlogPost } from "@/data/posts";

const ALL = "All";

function categoryFrom(post: BlogPost) {
  return post.tag;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const categories = useMemo(() => {
    const seen = new Set<string>();
    posts.forEach((p) => seen.add(categoryFrom(p)));
    return [ALL, ...Array.from(seen)];
  }, [posts]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { [ALL]: posts.length };
    posts.forEach((p) => {
      c[p.tag] = (c[p.tag] ?? 0) + 1;
    });
    return c;
  }, [posts]);

  const searching = query.trim().length > 0;

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      if (active !== ALL && post.tag !== active) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tag.toLowerCase().includes(q) ||
        post.content.some((line) => line.toLowerCase().includes(q))
      );
    });
  }, [posts, active, query]);

  const showFeatured = active === ALL && !searching && matches.length > 0;
  const featured = matches[0];
  const filtered = showFeatured ? matches.slice(1) : matches;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const changeCategory = (cat: string) => {
    setActive(cat);
    setPage(1);
  };

  const changeQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <>
      <p className="blog-total">
        Browse all <strong>{posts.length}</strong> articles
      </p>

      <div className="blog-search">
        <span className="blog-search-icon" aria-hidden="true">
          <SearchIcon />
        </span>
        <input
          type="search"
          className="blog-search-input"
          placeholder="Search articles by title, topic or keyword…"
          value={query}
          onChange={(e) => changeQuery(e.target.value)}
          aria-label="Search articles"
        />
        {searching && (
          <button
            type="button"
            className="blog-search-clear"
            onClick={() => changeQuery("")}
            aria-label="Clear search"
          >
            <CloseIcon />
          </button>
        )}
      </div>

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
            <span className="blog-cat-count">{counts[cat] ?? 0}</span>
          </button>
        ))}
      </div>

      {(searching || active !== ALL) && (
        <p className="blog-results" aria-live="polite">
          {matches.length} {matches.length === 1 ? "article" : "articles"} found
          {searching ? ` for “${query.trim()}”` : ` in ${active}`}
        </p>
      )}

      {pageItems.length === 0 ? (
        <div className="blog-empty">
          <p>No articles found{searching ? ` for “${query.trim()}”` : ""}.</p>
          <button
            type="button"
            className="btn btn-grad"
            onClick={() => {
              setQuery("");
              setActive(ALL);
              setPage(1);
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
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
      )}

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
