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

  const categories = useMemo(() => {
    const seen = new Set<string>();
    posts.forEach((p) => seen.add(categoryFrom(p)));
    return [ALL, ...Array.from(seen)];
  }, [posts]);

  const featured = posts[0];
  const filtered = active === ALL ? posts.slice(1) : posts.filter((p) => p.tag === active);
  const showFeatured = active === ALL ? Boolean(featured) : false;

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
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid blog-page-grid">
        {filtered.map((post, i) => (
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
    </>
  );
}
