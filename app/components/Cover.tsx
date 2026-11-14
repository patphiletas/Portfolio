"use client";

import Image from "next/image";

const sommaire: { number: string; title: string; href: string; page?: boolean }[] = [
  { number: "01", title: "Parcours", href: "#parcours" },
  { number: "02", title: "Projets", href: "#projets" },
  { number: "03", title: "Graphisme", href: "/graphisme", page: true },
  { number: "04", title: "Contact", href: "#contact" },
];

export default function Cover() {
  return (
    <section id="hero" className="theme-surface px-6 pt-32 pb-20">
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h1 className="font-serif theme-text text-6xl md:text-8xl mb-4 leading-[0.95]">
              <span className="italic font-light">Patrice</span>
              <br />
              Philétas
            </h1>

            <h2 className="theme-text-muted text-lg md:text-2xl mb-6">
              Développeur Full Stack <span className="theme-text">·</span> Graphiste
            </h2>

            <p className="theme-text-muted max-w-xl leading-relaxed mb-8">
              Le soin d&apos;un graphiste éditorial, appliqué au code&nbsp;: interfaces lisibles,
              code typé et testé.{" "}
              <span className="theme-text font-medium">
                Alternance de 12 mois, dès que possible.
              </span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projets"
                className="theme-button-primary text-sm px-5 py-2.5 font-semibold rounded hover:opacity-80 transition-opacity"
              >
                Voir les projets
              </a>
              <a
                href="/cv-patrice-philetas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-secondary text-sm px-5 py-2.5 border rounded hover:opacity-80 transition-opacity"
              >
                Télécharger mon CV (PDF)
              </a>
            </div>
          </div>

          <Image
            src="/images/patrice-philetas.jpg"
            alt="Autoportrait dessiné de Patrice Philétas"
            width={1452}
            height={1553}
            sizes="(min-width: 768px) 224px, 112px"
            loading="eager"
            className="w-28 md:w-56 h-auto rounded theme-card-border shrink-0"
          />
        </div>

        <nav aria-label="Sommaire">
          <p className="theme-text-muted text-[11px] uppercase tracking-[0.15em] mb-5">
            Sommaire
          </p>
          <ol className="theme-border-subtle border-t">
            {sommaire.map((item) => (
              <li key={item.href} className="theme-border-subtle border-b">
                <a
                  href={item.href}
                  className="group flex items-baseline gap-4 py-4"
                >
                  <span className="font-serif theme-text-muted text-sm">{item.number}</span>
                  <span className="font-serif theme-text text-xl md:text-2xl group-hover:opacity-70 transition-opacity">
                    {item.title}
                  </span>
                  <span className="flex-1 border-b border-dotted theme-border-subtle translate-y-[-6px]" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="theme-text-muted text-sm shrink-0 transition-transform group-hover:translate-x-1"
                  >
                    {item.page ? "↗" : "→"}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
