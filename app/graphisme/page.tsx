import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clients } from "@/lib/data";
import {
  academic,
  avent,
  catalogues,
  fabrication,
  general,
  illustration,
  illustrationScientifique,
  illustrationSeries,
  illustrationsDiverses,
  musiciens,
  plv,
  posters,
  scholar,
  thumbSrc,
  webAuthorBanners,
  webBanners,
  webEventBanners,
  webOpsBanners,
  webSlides,
  webVisuals,
  type GraphismeImage,
} from "@/lib/graphisme";
import { Figure, LightboxProvider } from "./Lightbox";
import { ShowMore } from "./ShowMore";

export const metadata: Metadata = {
  title: "Portfolio graphisme — Patrice Philétas",
  description:
    "20 ans de graphisme éditorial, PAO, prépresse et fabrication. Plus de 700 ouvrages : couvertures, maquettes, supports de communication, PLV, illustration.",
};

const catalogueHighlights = catalogues.filter((item) => item.id === "k_cat1" || item.id === "k_cat2");

const OVERVIEW: { id: string; title: string; image: string; position?: string; description: string }[] = [
  {
    id: "edition",
    title: "Édition",
    image: "/images/graphisme-livres.png",
    description: "Couvertures, maquettes intérieures et collections : académique, grand public, médical, scolaire.",
  },
  {
    id: "fabrication",
    title: "Fabrication",
    image: thumbSrc("f_signets_careme"),
    description: "Calendriers, dépliants, marque-pages, kakémonos : de l’objet imprimé au suivi chez l’imprimeur.",
  },
  {
    id: "communication",
    title: "Communication",
    image: "/images/graphisme-logos.png",
    description: "Affiches, plaquettes, mailings et catalogues, PLV pour les libraires.",
  },
  {
    id: "web",
    title: "Web",
    image: "/images/graphisme/full/wb_42.jpg",
    position: "object-left-top",
    description: "Bannières auteurs et nouveautés, opérations commerciales, visuels pour les sites.",
  },
  {
    id: "illustration",
    title: "Illustration",
    image: "/images/graphisme-illustration.jpg",
    description: "Guides de voyage, personnages déclinés en séries, musiciens, dessin de presse.",
  },
  {
    id: "illustration-scientifique",
    title: "Illustration scientifique",
    image: "/images/graphisme-cerveau-3.jpg",
    description: "Schémas et planches pour des ouvrages médicaux : hématologie, immunologie, anatomie.",
  },
];

const GRID_SIZES = "(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 46vw";
const WIDE_SIZES = "(min-width: 1024px) 36vw, (min-width: 640px) 60vw, 92vw";

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
  shape = "portrait",
  contain = false,
}: {
  items: GraphismeImage[];
  shape?: "square" | "portrait";
  contain?: boolean;
}) {
  return (
    <div className="grid grid-flow-dense grid-cols-2 items-start gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) =>
        shape === "portrait" && item.width > item.height ? (
          <Figure key={item.id} item={item} shape="landscape" sizes={WIDE_SIZES} className="col-span-2" />
        ) : (
          <Figure key={item.id} item={item} shape={shape} contain={contain} sizes={GRID_SIZES} />
        ),
      )}
    </div>
  );
}

function Banners({ items }: { items: GraphismeImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => {
        const wide = item.width / item.height > 5;
        return (
          <Figure
            key={item.id}
            item={item}
            shape="natural"
            sizes={wide ? "(min-width: 1152px) 1104px, 92vw" : "(min-width: 640px) 46vw, 92vw"}
            className={wide ? "sm:col-span-2" : ""}
          />
        );
      })}
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
                ["6", "domaines, de l’édition au web"],
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
              imprimeurs. Je conçois aussi les bannières web des éditeurs et dessine, des
              personnages aux schémas scientifiques. InDesign, Illustrator, Photoshop, Quite Imposing.
            </p>

            <a
              href="/portfolio-graphisme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-link mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-2"
            >
              Version PDF du portfolio <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <Part id="chaine" title="Vue d’ensemble" lead="Six domaines complémentaires, du crayon au fichier imprimeur." muted>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {OVERVIEW.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="theme-surface theme-card-border group overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[16/9] bg-white">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className={`object-cover ${section.position ?? ""} transition-transform duration-300 group-hover:scale-105`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="theme-text font-semibold">{section.title} →</h3>
                  <p className="theme-text-muted mt-1 text-sm leading-relaxed">{section.description}</p>
                </div>
              </a>
            ))}
          </div>
        </Part>

        <Part
          id="edition"
          title="Édition"
          lead="Responsable du graphisme : création de collections, maquette de couvertures et d’intérieurs, choix de l’iconographie. Livres académiques, grand public, médicaux et scolaires."
        >
          <SubTitle>Livres académiques</SubTitle>
          <Grid items={academic} />

          <SubTitle>Livres grand public</SubTitle>
          <Grid items={general} />

          <SubTitle>Scolaires &amp; pédagogiques</SubTitle>
          <Grid items={scholar} />

        </Part>

        <Part
          id="fabrication"
          title="Fabrication"
          lead="Des objets à concevoir autant qu’à mettre en page : calendriers, dépliants, marque-pages, kakémonos, éléments promotionnels pour les Éditions jésuites et le groupe Grego."
          muted
        >
          <div className="grid items-start gap-8 md:grid-cols-[minmax(240px,400px)_1fr]">
            {avent.map((item) => (
              <Figure key={item.id} item={{ ...item, caption: "Calendrier de l’Avent 2024" }} shape="landscape" sizes="(min-width: 768px) 400px, 92vw" />
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
          lead="Affiches, plaquettes et catalogues, pour les éditeurs comme pour des associations."
        >
          <Grid items={[...posters, ...catalogueHighlights]} />
        </Part>

        <Part
          id="web"
          title="Web"
          lead="Bannières et visuels pour les sites des Éditions jésuites et du groupe Grego : nouveautés, opérations commerciales, temps liturgiques, événements."
          muted
        >
          <SubTitle>Auteurs et nouveautés — Éditions jésuites</SubTitle>
          <ShowMore height="36rem">
            <Banners items={webAuthorBanners} />
          </ShowMore>

          <SubTitle>Événements</SubTitle>
          <Banners items={webEventBanners} />

          <SubTitle>Temps forts et opérations</SubTitle>
          <Banners items={[...webBanners, ...webOpsBanners]} />

          <SubTitle>Slides — groupe Grego</SubTitle>
          <Banners items={webSlides} />

          <SubTitle>Visuels pour le site</SubTitle>
          <Grid items={webVisuals} />
        </Part>

        <Part
          id="plv"
          title="PLV et affiches de promotion"
          lead="Affiches de lancement et supports promotionnels, dont des supports destinés aux libraires."
        >
          <Grid items={plv} />
        </Part>

        <Part
          id="illustration"
          title="Illustration"
          lead="Dessin traditionnel et numérique. Illustrations pour deux guides de voyage alternatifs des éditions Nanika : Côte d’Ivoire (2018) et Martinique (2021). Book illustration complet sur demande."
          muted
        >
          <Grid items={illustration} shape="square" />

          <SubTitle>Séries d’illustrations</SubTitle>
          <p className="theme-text-muted max-w-2xl leading-relaxed mb-4 -mt-2">
            Déclinaisons d’illustrations numériques pour des projets éditoriaux.
          </p>
          <ShowMore height="36rem">
            {illustrationSeries.map((series) => (
              <div key={series.title} className="mb-8">
                <h4 className="theme-text mb-3 text-sm font-semibold">{series.title}</h4>
                <Grid items={series.items} shape="square" contain />
              </div>
            ))}
          </ShowMore>

          <SubTitle>Musiciens</SubTitle>
          <p className="theme-text-muted max-w-2xl leading-relaxed mb-4 -mt-2">
            Pour Croq en live, sur le Festival West Side (2013).
          </p>
          <Grid items={musiciens} shape="square" />

          <SubTitle>Illustrations diverses et dessin de presse</SubTitle>
          <p className="theme-text-muted max-w-2xl leading-relaxed mb-4 -mt-2">
            Illustrations numériques et traditionnelles, caricatures et dessins de presse. Certains ont été publiés.
          </p>
          <Grid items={illustrationsDiverses} shape="square" />
        </Part>

        <Part
          id="illustration-scientifique"
          title="Illustration scientifique"
          lead="Schémas et planches pour des ouvrages médicaux : hématologie, immunologie, anatomie. Des dessins précis et lisibles, pensés pour accompagner l’apprentissage."
        >
          <ShowMore height="34rem">
            <Grid items={illustrationScientifique} shape="square" contain />
          </ShowMore>
        </Part>

        <Part id="clients" title="Clients & éditeurs" muted>
          <div className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <span key={client} className="theme-chip rounded px-4 py-2 text-sm">
                {client}
              </span>
            ))}
          </div>
        </Part>

        <Part
          id="contact-graphisme"
          title="Contact"
          lead="Disponible immédiatement, en CDI, CDD ou en freelance (affilié Maison des Artistes). Mobile en Île-de-France."
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
