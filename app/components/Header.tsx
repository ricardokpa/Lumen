"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = {
  label: string;
  href: string;
  arrow?: boolean;
};

type HeaderProps = {
  logoText: string;
  logoHref?: string;
  navLinks: NavItem[];
  contactLinks?: NavItem[];
};

type PageTheme = {
  accent: "brown" | "yellow";
  heroSelector: string | null;
};

const PAGE_THEMES: Record<string, PageTheme> = {
  "/": { accent: "brown", heroSelector: "#bio" },
  "/work": { accent: "yellow", heroSelector: ".section-work-hero" },
  "/portfolio": { accent: "brown", heroSelector: null },
};

const DEFAULT_THEME = PAGE_THEMES["/"];

export default function Header({
  logoText,
  logoHref = "/",
  navLinks,
  contactLinks = [],
}: HeaderProps) {
  const pathname = usePathname();
  const { accent, heroSelector } = PAGE_THEMES[pathname] ?? DEFAULT_THEME;
  const heroBg = accent === "brown" ? "yellow" : "brown";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector(".header");
      const heroSection = heroSelector
        ? document.querySelector(heroSelector)
        : null;

      if (window.scrollY > 50) {
        setIsScrolled(true);

        if (!heroSelector) {
          setIsOverHero(false);
        } else if (heroSection && header) {
          const rect = heroSection.getBoundingClientRect();
          const headerHeight = (header as HTMLElement).offsetHeight;
          setIsOverHero(rect.bottom > headerHeight);
        }
      } else {
        setIsScrolled(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroSelector]);

  useEffect(() => {
    document.body.style.setProperty(
      "--page-accent",
      accent === "brown" ? "var(--color-brown)" : "var(--color-yellow)",
    );
  }, [accent]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", isMobileOpen);
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const themeClass = isScrolled
    ? isOverHero
      ? `theme-${heroBg}`
      : "theme-cream"
    : "";

  const mobileNavStyle =
    accent === "brown"
      ? { backgroundColor: "var(--color-brown)", color: "var(--color-yellow)" }
      : { backgroundColor: "var(--color-yellow)", color: "var(--color-text)" };

  return (
    <>
      <header
        className={`header fade-up is-visible ${isScrolled ? "is-scrolled" : ""} ${themeClass}`}
      >
        <div className="container header-inner">
          <Link href={logoHref} className="logo-text">
            {logoText}
          </Link>

          <nav className="nav-links">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "is-active" : ""}`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
                {item.arrow && (
                  <span className="nav-arrow" aria-hidden="true">
                    ↗
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <button
            className={`hamburger-menu ${isMobileOpen ? "is-open" : ""}`}
            aria-label="Abrir o cerrar navegación"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Overlay de navegación móvil */}
      <div
        className={`mobile-nav-overlay ${isMobileOpen ? "is-open" : ""}`}
        style={mobileNavStyle}
      >
        <nav className="mobile-nav-links">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
              {item.arrow && <span aria-hidden="true"> ↗</span>}
            </Link>
          ))}
        </nav>

        {contactLinks.length > 0 && (
          <div className="mobile-nav-footer">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
