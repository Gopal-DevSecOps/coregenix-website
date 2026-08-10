import Reveal from "./Reveal";
import { ArrowRightIcon } from "./Icons";

export default function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal>
          <div className="cta-box">
            <div>
              <h2>Ready to move your business forward with IT solutions?</h2>
              <p>
                Get a free consultation and discover how CoreGenix can keep your IT infrastructure
                and cyber security secure and efficient.
              </p>
            </div>
            <a href="/contact" className="btn btn-light">
              Get Free Consultation
              <ArrowRightIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
