"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, PhoneIcon, MailIcon, MapPinIcon } from "./Icons";

interface MegaItem {
  label: string;
  href: string;
}

interface MegaGroup {
  title: string;
  items: MegaItem[];
  wide?: boolean;
}

interface MenuItem {
  label: string;
  href: string;
  mega?: MegaGroup[];
  foot?: MegaItem[];
  cols2?: boolean;
}

const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    mega: [
      {
        title: "IT Managed Services",
        items: [
          { label: "NOC", href: "/services" },
          { label: "AMC", href: "/services" },
          { label: "PMC", href: "/services" },
        ],
      },
      {
        title: "Cloud Managed Services",
        items: [
          { label: "Cloud Strategy", href: "/services" },
          { label: "Cloud Infrastructure Management", href: "/services" },
          { label: "Backup & Recovery", href: "/services" },
        ],
      },
      {
        title: "Audit & Assessment",
        items: [
          { label: "GRC & DPO", href: "/solutions#grc" },
          { label: "VAPT", href: "/solutions#vapt" },
          { label: "Red Teaming", href: "/solutions#vapt" },
          { label: "Audit", href: "/solutions#grc" },
        ],
      },
      {
        title: "Managed Security Services",
        wide: true,
        items: [
          { label: "Managed SOC", href: "/solutions#soc" },
          { label: "Vulnerability Management-as-a-Service", href: "/solutions#xaas" },
          { label: "WAF-as-a-Service", href: "/solutions#xaas" },
          { label: "DLP-as-a-Service", href: "/solutions#xaas" },
          { label: "Email Security", href: "/solutions#xaas" },
          { label: "OT Security", href: "/solutions#ot-security" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    mega: [
      {
        title: "IT Infrastructure Solutions",
        items: [
          { label: "Network", href: "/it-services#infrastructure" },
          { label: "DC", href: "/it-services#infrastructure" },
          { label: "Data Backup", href: "/it-services#infrastructure" },
          { label: "DR & BCP", href: "/it-services#infrastructure" },
        ],
      },
      {
        title: "Cloud Infrastructure Solutions",
        items: [
          { label: "Private Cloud", href: "/services" },
          { label: "Public Cloud", href: "/services" },
          { label: "Hybrid Cloud", href: "/services" },
        ],
      },
      {
        title: "Cyber Security Solutions",
        items: [
          { label: "Infrastructure Security", href: "/solutions#it-security" },
          { label: "IAM", href: "/solutions#it-security" },
          { label: "SSO", href: "/solutions#it-security" },
          { label: "PAM", href: "/solutions#it-security" },
          { label: "Zero Trust", href: "/solutions#it-security" },
          { label: "DLP", href: "/solutions#it-security" },
          { label: "EDR / MDR / XDR", href: "/solutions#it-security" },
        ],
      },
      {
        title: "GRC & DPO",
        wide: true,
        items: [
          { label: "GRC & Cyber Audits", href: "/solutions#grc" },
          { label: "Risk Management", href: "/solutions#grc" },
          { label: "Compliance", href: "/solutions#grc" },
          { label: "Risk & Compliance Assessment", href: "/solutions#grc" },
          { label: "NIST CSF", href: "/solutions#grc" },
          { label: "IT Risk Assessment", href: "/solutions#grc" },
          { label: "IT Policy & Security Policy", href: "/solutions#grc" },
          { label: "ISMS & Cyber Security", href: "/solutions#grc" },
          { label: "BCP / DR", href: "/solutions#grc" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [megaPos, setMegaPos] = useState<{ x: number; y: number } | null>(null);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const megaOpenRef = useRef<string | null>(null);
  const pathname = usePathname();

  const megaItem = menu.find((i) => i.label === megaOpen);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  const openMega = (label: string) => {
    const el = linkRefs.current[label];
    if (!el) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    const rect = el.getBoundingClientRect();
    setMegaPos({ x: rect.left + rect.width / 2, y: rect.bottom + 16 });
    setMegaOpen(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(null), 160);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    megaOpenRef.current = megaOpen;
  }, [megaOpen]);

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

      if (megaOpenRef.current) setMegaOpen(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setMegaOpen(null);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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

      <header className={`header ${scrolled ? "scrolled" : ""} ${mobileOpen ? "open" : ""}`}>
        <div className="container">
          <div className="header-inner">
            <a href="#home" className="logo" onClick={() => setMobileOpen(false)}>
              <span className="logo-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/coregenix/logo.png" alt="CoreGenix" />
              </span>
            </a>

            <nav className="nav" aria-label="Main navigation">
              {menu.map((item) => {
                const active = isActive(item.href);
                const isMega = Boolean(item.mega);
                return (
                <div className="nav-item" key={item.label}>
                  <a
                    ref={(el) => {
                      linkRefs.current[item.label] = el;
                    }}
                    className={`nav-link ${active ? "active" : ""} ${megaOpen === item.label ? "hover" : ""}`}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onMouseEnter={() => isMega && openMega(item.label)}
                    onMouseLeave={scheduleClose}
                    onFocus={() => isMega && openMega(item.label)}
                    onBlur={scheduleClose}
                  >
                    <span className="nav-link-text">{item.label}</span>
                    {item.mega && <ChevronDownIcon className="chevron" />}
                  </a>
                </div>
                );
              })}
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

        {megaItem?.mega && megaPos && (
          <div
            className={`dropdown mega mega--fixed ${megaItem.cols2 ? "mega--cols2" : ""}`}
            style={{ left: megaPos.x, top: megaPos.y }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            onFocus={cancelClose}
            onBlur={scheduleClose}
          >
            <div className={`mega-groups ${megaItem.cols2 ? "mega-groups--cols2" : ""}`}>
              {megaItem.mega.map((group) => (
                <div className={`mega-group ${group.wide ? "mega-group--wide" : ""}`} key={group.title}>
                  <h4 className="mega-group-title">{group.title}</h4>
                  <div className={group.wide ? "mega-group-items" : undefined}>
                    {group.items.map((sub) => (
                      <a key={sub.label} href={sub.href}>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mega-foot">
              {megaItem.foot?.map((f) => (
                <a key={f.label} href={f.href} className="mega-foot-link">
                  {f.label}
                </a>
              ))}
              <a href="/contact" className="btn btn-grad btn-sm mega-foot-cta">
                Get Free Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {menu.map((item) => (
          <div className="m-menu-item" key={item.label}>
            {item.mega ? (
              <>
                <button
                  className={`m-menu-toggle ${openSub === item.label ? "active" : ""}`}
                  onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDownIcon />
                </button>
                <div className={`m-sub m-mega-sub ${openSub === item.label ? "open" : ""}`}>
                  {item.mega.map((group) => (
                    <div className="m-group" key={group.title}>
                      <button
                        className={`m-group-toggle ${openGroup === group.title ? "active" : ""}`}
                        onClick={() => setOpenGroup(openGroup === group.title ? null : group.title)}
                      >
                        {group.title}
                        <ChevronDownIcon />
                      </button>
                      <div className={`m-group-items ${openGroup === group.title ? "open" : ""}`}>
                        {group.items.map((sub) => (
                          <a key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)}>
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  {item.foot?.map((f) => (
                    <a key={f.label} href={f.href} onClick={() => setMobileOpen(false)} className="m-group-standalone">
                      {f.label}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a
                className={`m-menu-toggle ${isActive(item.href) ? "active" : ""}`}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
