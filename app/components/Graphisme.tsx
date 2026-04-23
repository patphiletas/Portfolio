"use client";

import { graphismeItems, clients } from "@/lib/data";

export default function Graphisme() {
  return (
    <section id="graphisme" className="theme-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <h2 className="theme-text text-3xl md:text-4xl font-bold mb-3">Graphisme</h2>
          <p className="theme-text-muted text-sm uppercase tracking-widest mb-2">
            15 ans d'expérience éditoriale
          </p>
          <p className="theme-text-muted max-w-2xl leading-relaxed mb-10">
            Avant le développement, 15 ans de graphisme éditorial : direction artistique,
            maquette de livres, illustration, fabrication. Cette double compétence
            nourrit directement mon sens du design et de l'UX.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {graphismeItems.map((item) => (
            <div
              key={item.title}
              className="theme-surface-muted rounded-lg overflow-hidden border theme-border hover:opacity-95 transition-colors"
            >
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="theme-text font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="theme-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="theme-text-muted text-xs uppercase tracking-widest mb-4">
            Clients & éditeurs
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {clients.map((client) => (
              <span
                key={client}
                className="theme-button-secondary text-sm px-4 py-2 rounded-full border"
              >
                {client}
              </span>
            ))}
          </div>

          <a
            href="/portfolio-graphisme.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-link inline-flex items-center gap-2 text-sm transition-colors"
          >
            Voir le portfolio graphisme complet (PDF)
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
