"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#graphisme", label: "Graphisme" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="theme-surface theme-divider-bottom fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="theme-border-subtle border-b">
        <div className="max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-between gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
          <span className="theme-text-muted hidden sm:inline">Portfolio — Développeur & Graphiste</span>
          <span className="font-medium" style={{ color: "var(--theme-accent)" }}>
            Disponible — Alternance 4J/1J — Septembre 2026
          </span>
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl md:text-2xl theme-text shrink-0">
          <span className="italic font-light">Patrice</span> Philétas
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.12em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="theme-link transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv-patrice-philetas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-secondary px-4 py-2 border hover:opacity-80 transition-all"
              >
                CV
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="theme-text md:hidden flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="overflow-visible"
                aria-hidden="true"
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={`origin-center transition-all ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={`origin-center transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={`origin-center transition-all ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="theme-surface md:hidden theme-divider-top px-6 pb-6">
          <ul className="flex flex-col gap-4 text-xs uppercase tracking-[0.12em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="theme-link block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv-patrice-philetas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-secondary inline-block px-4 py-2 border hover:opacity-80"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
