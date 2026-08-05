"use client";

import { skills } from "@/lib/data";
import Chapter from "./Chapter";

export default function About() {
  return (
    <Chapter id="parcours" title="Parcours">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="theme-text font-semibold text-lg mb-4">Reconversion</h3>
            <div className="theme-text-muted space-y-5 leading-relaxed">
              <p>
                Après plus de 15 ans comme graphiste-maquettiste et chargé de fabrication
                éditoriale, j&apos;ai choisi de me reconvertir vers le développement web full stack.
              </p>
              <p>
                Cette transition n&apos;est pas un changement radical mais une évolution logique&nbsp;:
                le même soin apporté à la mise en page d&apos;un livre de 700 pages se retrouve
                dans la rigueur d&apos;un code propre, typé, et bien structuré.
              </p>
              <p>
                Je me forme actuellement à <span className="theme-text font-medium">Ada Tech School</span>, avec un accent
                fort sur la pratique, la collaboration et la qualité du code.
              </p>
              <p>
                Je recherche une{" "}
                <span className="theme-text font-medium">
                  alternance de 12 mois minimum à partir de septembre 2026
                </span>{" "}
                (4j/1j en professionnalisation).
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Rigueur & précision", "Sens esthétique & UX", "Logique & résolution de problèmes", "Collaboration", "Apprentissage continu"].map(
                (item) => (
                  <span
                    key={item}
                    className="theme-chip text-xs px-3 py-1.5 rounded"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="theme-text font-semibold text-lg mb-4">Formation & expérience</h3>
            <div className="space-y-4">
              <div className="border-l-2 theme-border-strong pl-4">
                <p className="theme-text-muted text-sm mb-0.5">2025 — en cours</p>
                <p className="theme-text font-medium">Développeur d&apos;application Full Stack</p>
                <p className="theme-text-muted text-sm">Ada Tech School</p>
              </div>
              <div className="border-l-2 theme-border pl-4">
                <p className="theme-text-muted text-sm mb-0.5">2006 — 2025</p>
                <p className="theme-text font-medium">Graphiste-maquettiste chargé d&apos;édition et de fabrication</p>
                <p className="theme-text-muted text-sm">
                  Groupe Grego · Éditions jésuites · Éditions La Martinière · CDI & freelance
                </p>
              </div>
              <div className="border-l-2 theme-border pl-4">
                <p className="theme-text-muted text-sm mb-0.5">2001</p>
                <p className="theme-text font-medium">Maîtrise Communication Politique et Publique</p>
                <p className="theme-text-muted text-sm">Upec</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="theme-text font-semibold text-lg mb-6">Compétences</h3>
          <div className="flex flex-wrap gap-2">
            {skills.flatMap((g) => g.items).map(({ name, featured }) => (
              <span
                key={name}
                className={`text-xs px-3 py-1 rounded ${featured ? "theme-chip-featured" : "theme-chip"}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
    </Chapter>
  );
}
