import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, CheckIcon } from "./Icons";
import type { ServiceCategory } from "@/data/serviceCategories";

export default function ServiceCategoryView({ category }: { category: ServiceCategory }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="span" className="page-hero-eyebrow">
            Our Services
          </Reveal>
          <h1 className="page-hero-title">
            {category.title} <span className="grad">Solutions</span>
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
                {category.services.map((service, i) => (
                  <Reveal key={service.title} delay={(i % 3) + 1}>
                    <article className="service-page-card">
                      <span className="icon-box">
                        <service.icon />
                      </span>
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <ul className="service-features">
                        {service.features.map((feature) => (
                          <li key={feature}>
                            <CheckIcon />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href={service.href} className="service-link">
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
