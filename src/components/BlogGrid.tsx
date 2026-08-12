import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon, CalendarIcon, UserIcon } from "./Icons";
import { posts } from "@/data/posts";

export default function BlogGrid() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              Hear from Our <span className="grad">Expert</span>
            </>
          }
        />
        <div className="blog-grid">
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
      </div>
    </section>
  );
}
