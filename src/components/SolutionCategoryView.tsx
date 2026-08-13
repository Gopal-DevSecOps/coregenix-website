import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, CheckIcon } from "./Icons";
import type { SolutionCategory } from "@/data/solutionCategories";

export default function SolutionCategoryView({ category }: { category: SolutionCategory }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="span" className="page-hero-eyebrow">
            Our Solutions
          </Reveal>
          <h1 className="page-hero-title">
            {category.title}
            {category.title.toLowerCase().includes("solutions") ? null : (
              <span className="grad"> Solutions</span>
            )}
          </h1>
          <Reveal as="p" className="page-hero-desc" delay={1}>
            {category.desc}
          </Reveal>
        </div>
      </section>

      <section className="section services-catalog">
        <div className="container">
          <div className="services-cat">
            <div className="services-cat-block">
              <Reveal>
                <div className="services-cat-head">
                  <span className="icon-box">
                    <category.icon />
                  </span>
                  <div>
                    <span className="services-cat-sub">{category.subtitle}</span>
                    <h2>{category.title}</h2>
                  </div>
                </div>
                <p className="services-cat-desc">{category.desc}</p>
              </Reveal>
              <div className="services-cat-grid">
                {category.solutions.map((solution, i) => (
                  <Reveal key={solution.title} delay={(i % 3) + 1}>
                    <article className="service-page-card">
                      <span className="icon-box">
                        <solution.icon />
                      </span>
                      <h3>{solution.title}</h3>
                      <p>{solution.desc}</p>
                      <ul className="service-features">
                        {solution.features.map((feature) => (
                          <li key={feature}>
                            <CheckIcon />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href={solution.href} className="service-link">
                        Learn More
                        <ArrowRightIcon />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container">
          <Reveal>
            <div className="services-cta-box">
              <div>
                <h2>Not sure which solution fits your business?</h2>
                <p>Talk to our experts for a free consultation and a tailored technology plan.</p>
              </div>
              <Link href="/contact" className="btn btn-light">
                Get Free Consultation
                <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
