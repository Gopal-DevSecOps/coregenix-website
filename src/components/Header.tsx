"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, PhoneIcon, MailIcon, MapPinIcon } from "./Icons";

const menu: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions & Services", href: "/services", children: [
    { label: "Managed Support Services", href: "/services#managed-support" },
    { label: "Cloud Infrastructure", href: "/services#cloud-infrastructure" },
    { label: "IT Infrastructure Solutions", href: "/services#it-infrastructure" },
    { label: "IT & OT Cyber Security", href: "/services#cyber-security" },
    { label: "Data Backup / DR / BCP", href: "/services#backup-dr-bcp" },
    { label: "ITIL Automation", href: "/services#itil-automation" },
    { label: "Staff Augmentation", href: "/services#staff-augmentation" },
    { label: "InfoSec GRC", href: "/services#infosec-grc" },
  ]},
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
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
            <a href="https://in.linkedin.com/company/cgces-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/people/CoreGenix/61583901786730/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2.1h3.68l-8.04 9.19L24 23.4h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 2.1h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.14h2.04L6.48 4.18H4.29l13.32 17.06Z" />
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
