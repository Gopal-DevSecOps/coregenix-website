import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/site";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CoreGenix for IT infrastructure, cloud, cyber security and managed support services. Call +91 83559 58119 or email sales@cgcein.com.",
  keywords: [
    "contact CoreGenix",
    "cyber security company contact",
    "IT services Mumbai contact",
    "cyber security consultation",
    "IT security services quote",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — CoreGenix",
    description:
      "Get in touch with CoreGenix for IT infrastructure, cloud, cyber security and managed support services.",
    url: `${SITE.url}/contact`,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — CoreGenix",
    description:
      "Get in touch with CoreGenix for IT infrastructure, cloud, cyber security and managed support services.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/images/coregenix/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: ["Mumbai", "Bengaluru", "Jaipur", "Warsaw", "India", "Europe"],
  hasMap: "https://www.google.com/maps?q=Kailash+Business+Park+Vikhroli+Mumbai+400059",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneDisplay,
      contactType: "sales",
      email: SITE.email,
    },
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneAltDisplay,
      contactType: "sales",
      email: SITE.emailAlt,
    },
  ],
};

const contactDetails = [
  {
    icon: MapPinIcon,
    title: "Our Offices",
    lines: [
      "India — Mumbai, Bengaluru, Jaipur",
      "Europe — Warsaw",
    ],
    action: "View Locations",
    href: "#locations",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    lines: ["+91 83559 58119", "+91 83693 39809"],
    action: "Call Now",
    href: "tel:+918355958119",
  },
  {
    icon: MailIcon,
    title: "Email Us",
    lines: ["sales@cgcein.com", "sales@coregenix.in"],
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
      <JsonLd data={localBusinessJsonLd} />
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <Reveal as="span" className="page-hero-eyebrow">
              Contact CoreGenix
            </Reveal>
            <h1 className="page-hero-title">
              Let&apos;s Build Your <span className="grad">IT Strategy Together</span>
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

        <section id="locations" className="contact-map-section">
          <div className="container">
            <div className="locations-head">
              <Reveal as="span" className="eyebrow">
                Our Locations
              </Reveal>
              <Reveal as="h2" delay={1} className="locations-title">
                Serving Clients Across <span className="grad">India &amp; Europe</span>
              </Reveal>
            </div>

            <div className="locations-grid">
              {SITE.locations.map((loc, i) => (
                <Reveal key={loc.city} delay={(i % 2) + 1} className="location-card">
                  <div className="map-wrap">
                    <iframe
                      title={`CoreGenix ${loc.city} Office`}
                      src={loc.mapsUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                    <div className="map-card">
                      <span className="map-card-icon">
                        <MapPinIcon />
                      </span>
                      <div>
                        <h3>
                          {loc.city} <span className="map-card-region">{loc.region}</span>
                        </h3>
                        <p>{loc.address}</p>
                        <a
                          href={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapsQuery)}`}
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
