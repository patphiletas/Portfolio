import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { graphismeItems } from "@/lib/data";
import {
  academic,
  avent,
  beauLivreCover,
  beauLivreSpreads,
  catalogues,
  fabrication,
  general,
  illustration,
  illustrationSeries,
  illustrationsDiverses,
  mascotteIcons,
  mockups,
  musiciens,
  plv,
  posters,
  scholar,
  type GraphismeImage,
} from "@/lib/graphisme";
import { Figure, LightboxProvider } from "./Lightbox";

export const metadata: Metadata = {
  title: "Portfolio graphisme — Patrice Philétas",
  description:
    "20 ans de graphisme éditorial, PAO, prépresse et fabrication. Plus de 700 ouvrages : couvertures, maquettes, supports de communication, PLV, illustration.",
};

const COVER_SIZES = "(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 46vw";
const WIDE_SIZES = "(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw";

function Part({
  id,
  title,
  lead,
  muted = false,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${muted ? "theme-surface-muted" : "theme-surface"} px-6 py-16`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="theme-border-subtle mb-8 border-b pb-4">
          <h2 className="font-serif theme-text text-2xl md:text-3xl">{title}</h2>
          {lead && <p className="theme-text-muted mt-3 max-w-2xl leading-relaxed">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="theme-text-muted mb-4 mt-10 text-[11px] uppercase tracking-[0.15em] first:mt-0">
      {children}
    </h3>
  );
}

function Grid({
  items,
  wide = false,
}: {
  items: GraphismeImage[];
  wide?: boolean;
}) {
  return (
    <div
      className={
        wide
          ? "grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
          : "grid grid-cols-2 items-start gap-4 sm:grid-cols-3 lg:grid-cols-5"
      }
    >
      {items.map((item) => (
        <Figure key={item.id} item={item} sizes={wide ? WIDE_SIZES : COVER_SIZES} />
      ))}
    </div>
  );
}

export default function GraphismePage() {
  return (
    <LightboxProvider>
      <main>
        <section className="theme-surface px-6 pb-16 pt-32">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="theme-link text-[11px] uppercase tracking-[0.15em]">
              ← Retour au portfolio
            </Link>
            <h1 className="font-serif theme-text mb-4 mt-6 text-5xl leading-[0.95] md:text-7xl">
              <span className="font-light italic">Portfolio</span> graphisme
            </h1>
            <p className="theme-text-muted mb-10 text-lg md:text-2xl">
              Graphiste <span className="theme-text">·</span> PAO <span className="theme-text">·</span>{" "}
              Prépresse <span className="theme-text">·</span> Fabrication
            </p>

            <dl className="mb-10 flex flex-wrap gap-x-12 gap-y-6">
              {[
                ["20 ans", "de graphisme éditorial et de fabrication"],
                ["700+", "ouvrages conçus et fabriqués"],
                ["3", "savoir-faire"],
              ].map(([value, label]) => (
                <div key={value}>
                  <dt className="font-serif theme-text text-4xl md:text-5xl">{value}</dt>
                  <dd className="theme-text-muted text-sm">{label}</dd>
                </div>
              ))}
            </dl>

            <p className="theme-text-muted max-w-2xl leading-relaxed">
              Groupe Grego, Éditions jésuites, Éditions La Martinière. De la maquette au bon à
              tirer, je prépare les fichiers, gère l’imposition et suis la fabrication avec les
              imprimeurs. InDesign, Illustrator, Photoshop, Quite Imposing.
            </p>
          </div>
        </section>

        <Part id="chaine" title="Vue d’ensemble" lead="Trois savoir-faire complémentaires, du crayon au fichier imprimeur." muted>
          <div className="grid gap-6 sm:grid-cols-3">
            {graphismeItems.map((item) => (
              <div
                key={item.title}
                className="theme-surface theme-card-border overflow-hidden rounded-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="theme-text font-semibold">{item.title}</h3>
                  <p className="theme-text-muted mt-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Part>

        <Part
          id="edition"
          title="Édition"
          lead="Responsable du graphisme : création de collections, maquette de couvertures et d’intérieurs, choix de l’iconographie. Livres académiques, grand public, médicaux et scolaires."
        >
          <div className="mb-2 grid max-w-2xl grid-cols-3 gap-3">
            {mockups.map((item) => (
              <Figure key={item.id} item={item} sizes="(min-width: 768px) 200px, 30vw" />
            ))}
          </div>
          <SubTitle>Livres académiques</SubTitle>
          <Grid items={academic} />
          <SubTitle>Livres grand public</SubTitle>
          <Grid items={general} />
          <SubTitle>Livres scolaires et pédagogiques</SubTitle>
          <Grid items={scholar} />
          <SubTitle>Beau livre</SubTitle>
          <div className="grid items-start gap-6 md:grid-cols-[minmax(200px,300px)_1fr]">
            <div>
              {beauLivreCover.map((item) => (
                <Figure key={item.id} item={item} sizes="(min-width: 768px) 300px, 92vw" />
              ))}
            </div>
            <div>
              <p className="theme-text-muted mb-4 max-w-xl leading-relaxed">
                <span className="theme-text font-semibold">Revenir à l’olivier</span>, Jean-Pierre
                Sonnet (éditions Lessius). Ouvrage de méditation théologique, 64 pages.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {beauLivreSpreads.map((item) => (
                  <Figure key={item.id} item={item} sizes={WIDE_SIZES} />
                ))}
              </div>
            </div>
          </div>
        </Part>

        <Part
          id="fabrication"
          title="Fabrication"
          lead="Des objets à concevoir autant qu’à mettre en page : coffrets, calendriers, dépliants, kakémonos, éléments promotionnels pour les Éditions jésuites et le groupe Grego."
          muted
        >
          <div className="grid items-start gap-8 md:grid-cols-[minmax(200px,320px)_1fr]">
            {avent.map((item) => (
              <Figure key={item.id} item={{ ...item, caption: "Calendrier de l’Avent 2024" }} sizes="(min-width: 768px) 320px, 92vw" />
            ))}
            <div>
              <SubTitle>Calendrier de l’Avent 2024</SubTitle>
              <ul className="theme-text-muted list-disc space-y-1 pl-5 leading-relaxed">
                <li>Éditions jésuites</li>
                <li>Format fermé A4, 25 petites fenêtres</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Mise en page", "Suivi de fabrication"].map((tag) => (
                  <span key={tag} className="theme-chip rounded px-3 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <SubTitle>Autres supports</SubTitle>
          <Grid items={fabrication} />
        </Part>

        <Part
          id="communication"
          title="Communication"
          lead="Affiches, plaquettes, catalogues et mailings papier, pour les éditeurs comme pour des associations."
        >
          <SubTitle>Affiches et plaquettes</SubTitle>
          <Grid items={posters} wide />
          <SubTitle>Catalogues et mailings papier</SubTitle>
          <Grid items={catalogues} />
        </Part>

        <Part
          id="plv"
          title="PLV et affiches de promotion"
          lead="Affiches de lancement et supports promotionnels, dont des supports destinés aux libraires."
          muted
        >
          <Grid items={plv} />
        </Part>

        <Part
          id="illustration"
          title="Illustration"
          lead="Dessin traditionnel et numérique. Illustrations pour deux guides de voyage alternatifs des éditions Nanika : Côte d’Ivoire (2018) et Martinique (2021). Book illustration complet sur demande."
        >
          <Grid items={illustration} />

          <SubTitle>Séries d’illustrations</SubTitle>
          <p className="theme-text-muted max-w-2xl leading-relaxed mb-4 -mt-2">
            Déclinaisons d’illustrations numériques pour des projets éditoriaux.
          </p>
          <div className="mb-4 grid max-w-2xl grid-cols-4 gap-4">
            {mascotteIcons.map((item) => (
              <Figure key={item.id} item={item} sizes="(min-width: 640px) 160px, 22vw" />
            ))}
          </div>
          <Grid items={illustrationSeries} />

          <SubTitle>Musiciens</SubTitle>
          <p className="theme-text-muted max-w-2xl leading-relaxed mb-4 -mt-2">
            Pour Croq en live, sur le Festival West Side (2013).
          </p>
          <Grid items={musiciens} />

          <SubTitle>Illustrations diverses</SubTitle>
          <p className="theme-text-muted max-w-2xl leading-relaxed mb-4 -mt-2">
            Série d’illustrations numériques et conventionnelles. Certaines ont été publiées.
          </p>
          <Grid items={illustrationsDiverses} />
        </Part>

        <Part
          id="contact-graphisme"
          title="Contact"
          lead="Disponible immédiatement, en CDI, CDD ou en freelance (affilié Maison des Artistes). Mobile en Île-de-France."
          muted
        >
          <p className="theme-text mb-2 font-semibold">Patrice Philétas · Montereau-Fault-Yonne (77)</p>
          <p className="theme-text-muted space-x-3">
            <a className="theme-link" href="mailto:patrice.philetas@gmail.com">
              patrice.philetas@gmail.com
            </a>
            <a className="theme-link" href="tel:+33629370165">
              06 29 37 01 65
            </a>
            <a className="theme-link" href="https://www.linkedin.com/in/patricephiletas">
              LinkedIn
            </a>
            <a
              className="theme-link"
              href="/cv-patrice-philetas-graphisme.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger mon CV (PDF)
            </a>
            <Link className="theme-link" href="/#projets">
              Portfolio développement web
            </Link>
          </p>
          <p className="theme-text-muted mt-8 text-xs">
            Mise en page et direction graphique. Les visuels appartiennent à leurs éditeurs et
            clients ; certaines illustrations de séries éditoriales sont d’autres artistes.
          </p>
        </Part>
      </main>
    </LightboxProvider>
  );
}
