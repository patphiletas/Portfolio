"use client";

const sommaire = [
  { number: "01", title: "Parcours", href: "#parcours" },
  { number: "02", title: "Projets", href: "#projets" },
  { number: "03", title: "Graphisme", href: "#graphisme" },
  { number: "04", title: "Contact", href: "#contact" },
];

export default function Cover() {
  return (
    <section id="hero" className="theme-surface px-6 pt-32 pb-20">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="font-serif theme-text text-6xl md:text-8xl mb-4 leading-[0.95]">
          <span className="italic font-light">Patrice</span>
          <br />
          Philétas
        </h1>

        <h2 className="theme-text-muted text-lg md:text-2xl mb-12">
          Développeur Full Stack <span className="theme-text">·</span> Graphiste
        </h2>

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
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <a
          href="/cv-patrice-philetas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="theme-link inline-block mt-8 text-sm underline underline-offset-2 transition-colors"
        >
          Télécharger mon CV (PDF)
        </a>
      </div>
    </section>
  );
}
