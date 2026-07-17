"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { usePage } from "@/lib/PageContext";

const SERVICE_LINKS: { id: import("@/lib/PageContext").PageId; label: string }[] = [
  { id: "software-dev", label: "Software Development" },
  { id: "web-design", label: "Website Designing" },
  { id: "ai-automation", label: "AI Automation" },
  { id: "seo", label: "SEO Services" },
  { id: "mobile-apps", label: "Mobile Applications" },
  { id: "digital-marketing", label: "Digital Marketing" },
];

export default function Navbar() {
  const { goToPage, goToSection } = usePage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") ||
      "light";
    setTheme(current);

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown")) setDropdownOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("codexp-theme", next);
  }

  function navigate(page: import("@/lib/PageContext").PageId) {
    goToPage(page);
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  return (
    <nav ref={navRef} className={scrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <button
          className="logo"
          onClick={() => navigate("home")}
          aria-label="Code XP Solutions Home"
          type="button"
        >
          <div className="logo-icon">CX</div>
          <div className="logo-text">
            <span className="logo-brand">
              Code<span className="logo-accent">XP</span>
            </span>
            <span className="logo-solutions">Solutions</span>
          </div>
        </button>
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links${menuOpen ? " active" : ""}`}>
          <li>
            <button className="nav-link" type="button" onClick={() => navigate("home")}>
              Home
            </button>
          </li>
          <li className="dropdown">
            <button
              className="nav-link"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDropdownOpen((o) => !o);
              }}
            >
              Services ▾
            </button>
            <div className={`dropdown-content${dropdownOpen ? " show" : ""}`}>
              {SERVICE_LINKS.map((s) => (
                <button key={s.id} type="button" onClick={() => navigate(s.id)}>
                  {s.label}
                </button>
              ))}
            </div>
          </li>
          <li>
            <button
              className="nav-link"
              type="button"
              onClick={() => {
                goToSection("panoptix");
                setMenuOpen(false);
              }}
            >
              Panoptix AI
            </button>
          </li>
          <li>
            <button className="nav-link" type="button" onClick={() => navigate("about")}>
              About
            </button>
          </li>
          <li>
            <button
              className="theme-toggle"
              type="button"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <Icon name="moon" className="theme-icon-moon" />
              <Icon name="sun" className="theme-icon-sun" />
            </button>
          </li>
          <li>
            <button
              className="nav-link nav-cta"
              type="button"
              onClick={() => navigate("contact")}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
