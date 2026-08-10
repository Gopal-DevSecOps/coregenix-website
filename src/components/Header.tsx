"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, PhoneIcon, MailIcon, MapPinIcon } from "./Icons";

const menu: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "#home", children: [
    { label: "About Us", href: "#about" },
  ]},
  { label: "Portfolio", href: "#services", children: [
    { label: "Managed Support Services", href: "#services" },
    { label: "Cloud Infrastructure", href: "#services" },
    { label: "IT Infrastructure Solutions", href: "#services" },
    { label: "IT & OT Cyber Security", href: "#services" },
    { label: "Data Backup / DR / BCP", href: "#services" },
    { label: "ITIL Automation", href: "#services" },
    { label: "Staff Augmentation", href: "#services" },
    { label: "InfoSec GRC", href: "#services" },
  ]},
  { label: "Contact Us", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      lastY.current = y;

      if (y > 60) {
        setScrolled(true);
      } else if (y < 40 && !goingDown) {
        setScrolled(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className={`topbar ${scrolled ? "hidden" : ""}`}>
        <div className="container topbar-inner">
          <ul className="topbar-info">
            <li>
              <span className="icon">
                <MapPinIcon />
              </span>
              <span>C 1405 Kailash Business Park, Vikhroli (W), Mumbai - 400059</span>
            </li>
            <li>
              <span className="icon">
                <PhoneIcon />
              </span>
              <a href="tel:918355958119">+91 8355958119</a>
            </li>
            <li>
              <span className="icon">
                <MailIcon />
              </span>
              <a href="mailto:sales@cgcein.com">sales@cgcein.com</a>
            </li>
          </ul>
          <div className="topbar-social">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2.1h3.68l-8.04 9.19L24 23.4h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 2.1h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.14h2.04L6.48 4.18H4.29l13.32 17.06Z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-inner">
            <a href="#home" className="logo" onClick={() => setMobileOpen(false)}>
              <span className="logo-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/coregenix/logo.png" alt="CoreGenix" />
              </span>
            </a>

            <nav className="nav" aria-label="Main navigation">
              {menu.map((item) => (
                <div className="nav-item" key={item.label}>
                  <a
                    className={`nav-link ${item.label === "Home" ? "active" : ""}`}
                    href={item.href}
                    aria-current={item.label === "Home" ? "page" : undefined}
                  >
                    <span className="nav-link-text">{item.label}</span>
                    {item.children && <ChevronDownIcon className="chevron" />}
                  </a>
                  {item.children && (
                    <div className="dropdown">
                      {item.children.map((child) => (
                        <a key={child.label} href={child.href}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="header-actions">
              <a href="#contact" className="btn btn-grad btn-sm header-cta">
                Get a Quote
              </a>
              <button
                className={`hamburger ${mobileOpen ? "open" : ""}`}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {menu.map((item) => (
          <div className="m-menu-item" key={item.label}>
            {item.children ? (
              <>
                <button
                  className="m-menu-toggle"
                  onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDownIcon />
                </button>
                <div className={`m-sub ${openSub === item.label ? "open" : ""}`}>
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a className="m-menu-toggle" href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
