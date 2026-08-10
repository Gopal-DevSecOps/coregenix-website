import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import ContactForm from "./ContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us — CoreGenix",
  description:
    "Get in touch with CoreGenix for IT infrastructure, cloud, cyber security and managed support services.",
};

const contactDetails = [
  {
    icon: MapPinIcon,
    title: "Our Office",
    lines: ["C 1405 Kailash Business Park,", "Park Side, Vikhroli (W),", "Mumbai - 400059"],
    action: "Get Directions",
    href: "https://www.google.com/maps?q=Kailash+Business+Park+Vikhroli+Mumbai+400059",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    lines: ["+91 83559 58119"],
    action: "Call Now",
    href: "tel:+918355958119",
  },
  {
    icon: MailIcon,
    title: "Email Us",
    lines: ["sales@cgcein.com"],
    action: "Send Email",
    href: "mailto:sales@cgcein.com",
  },
  {
    icon: ClockIcon,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sun: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Contact CoreGenix
            </Reveal>
            <h1 className="page-hero-title">
              Let&apos;s Build Your <span className="grad">IT Strategy</span> Together
            </h1>
            <Reveal as="p" className="page-hero-desc" delay={1}>
              Tell us about your project and our experts will get back to you with a free
              consultation within 24 hours.
            </Reveal>
          </div>
        </section>

        <section className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info-col">
                <div className="contact-info-head">
                  <Reveal as="span" className="eyebrow">
                    Get in Touch
                  </Reveal>
                  <Reveal as="h2" delay={1} className="contact-info-title">
                    Let&apos;s Start a <span className="grad">Conversation</span>
                  </Reveal>
                  <Reveal as="p" delay={2} className="contact-info-desc">
                    Reach out through any channel below — our team is ready to help with your IT
                    infrastructure, cloud and security needs.
                  </Reveal>
                </div>

                {contactDetails.map((item, i) => (
                  <Reveal key={item.title} delay={i + 3} animation={i % 2 ? "right" : "left"}>
                    <div className="contact-card">
                      <span className="contact-card-icon">
                        <item.icon />
                      </span>
                      <div className="contact-card-body">
                        <h3>{item.title}</h3>
                        {item.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                        {item.href && (
                          <a className="contact-card-action" href={item.href}>
                            {item.action}
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={2} animation="zoom">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="contact-map-section">
          <div className="container">
            <div className="map-wrap">
              <iframe
                title="CoreGenix Office — Kailash Business Park, Vikhroli, Mumbai"
                src="https://www.google.com/maps?q=Kailash%20Business%20Park%2C%20Park%20Site%2C%20Vikhroli%20(W)%2C%20Mumbai%20400059&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="map-card">
                <span className="map-card-icon">
                  <MapPinIcon />
                </span>
                <div>
                  <h3>CoreGenix Office</h3>
                  <p>C 1405 Kailash Business Park, Vikhroli (W), Mumbai — 400059</p>
                  <a href="https://www.google.com/maps?q=Kailash+Business+Park+Vikhroli+Mumbai+400059">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
