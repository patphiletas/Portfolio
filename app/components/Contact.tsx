"use client";

import Chapter from "./Chapter";

export default function Contact() {
  return (
    <Chapter id="contact" title="Contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="theme-text-muted mb-10 leading-relaxed">
          Je recherche une alternance de 12 mois minimum à partir de septembre 2026.
          N&apos;hésitez pas à me contacter pour échanger sur vos projets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:patrice.philetas@gmail.com"
            className="theme-button-primary px-8 py-4 font-semibold rounded-lg hover:opacity-80 transition-colors"
          >
            patrice.philetas@gmail.com
          </a>
          <a
            href="tel:+33629370165"
            className="theme-button-secondary px-8 py-4 border rounded-lg hover:opacity-80 transition-colors"
          >
            06 29 37 01 65
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/patphiletas"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-link text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/patricephiletas"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-link text-sm transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="theme-text-muted text-xs">
          © 2026 Patrice Philétas — Développeur Full Stack
        </p>
      </div>
    </Chapter>
  );
}
