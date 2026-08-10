import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon, CalendarIcon, UserIcon } from "./Icons";

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
];

export default function BlogGrid() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <SectionHeading
          center
          title={
            <>
              Latest News & Announcement <span className="grad">from Our Experts</span>
            </>
          }
        />
        <div className="blog-grid">
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
      </div>
    </section>
  );
}
