"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#graphisme", label: "Graphisme" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="theme-surface fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b theme-border-subtle">
      <div className="text-white text-center py-2 text-sm font-medium" style={{ backgroundColor: '#3399CC' }}>
        Disponible pour une alternance 1J/4J — Juin 2026
      </div>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center relative">

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="theme-link text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv-patrice-philetas.pdf"
              download
              className="theme-button-secondary text-sm px-4 py-2 border rounded hover:opacity-80 transition-all"
            >
              CV
            </a>
          </li>
        </ul>

        <div className="absolute right-6 flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`theme-text block w-6 h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`theme-text block w-6 h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`theme-text block w-6 h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="theme-surface md:hidden border-t theme-border-subtle px-6 pb-6">
          <ul className="flex flex-col gap-4">
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
                download
                className="theme-button-secondary inline-block text-sm px-4 py-2 border rounded hover:opacity-80"
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
