"use client";

import ProjectMedia from "./ProjectMedia";
import { projects } from "@/lib/data";
import Chapter from "./Chapter";

// Projets présentés comme un sommaire de revue : entrées numérotées séparées
// par un filet, image nue en alternance gauche/droite, technologies en petites
// capitales, liens soulignés. Pas de cadres, de boutons ni de pastilles.
export default function Projects() {
  return (
    <Chapter id="projets" title="Projets" kicker="Développement web">
      <ol className="list-none p-0 m-0">
        {projects.map((project, index) => {
          const numero = String(index + 1).padStart(2, "0");
          const imageADroite = index % 2 === 1;

          return (
            <li key={project.id}>
              <article className="group theme-border-subtle border-t pt-6 pb-14">
                <p className="mb-6 flex items-baseline gap-4">
                  <span className="font-serif theme-text-muted text-sm">{numero}</span>
                  {index === 0 && (
                    <span className="theme-link text-[11px] uppercase tracking-[0.15em]">Projet phare</span>
                  )}
                </p>

                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
                  <div
                    className={`relative aspect-[16/10] overflow-hidden md:col-span-7 ${
                      imageADroite ? "md:order-2" : ""
                    }`}
                  >
                    <ProjectMedia
                      image={project.image}
                      alt={`Capture du projet ${project.title}`}
                      video={project.video}
                      sizes="(min-width: 768px) 55vw, 100vw"
                    />
                  </div>

                  <div className={`md:col-span-5 ${imageADroite ? "md:order-1" : ""}`}>
                    <h3 className="font-serif theme-text text-3xl md:text-4xl leading-[1.05] mb-5">
                      {project.title}
                    </h3>

                    <p className="theme-text-muted leading-relaxed mb-6">{project.description}</p>

                    <p className="theme-text-muted text-[11px] uppercase tracking-[0.15em] leading-relaxed mb-6">
                      {project.stack.join(" · ")}
                    </p>

                    <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-text underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
                      >
                        Voir le site ↗
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-text underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
                      >
                        Code source ↗
                      </a>
                      {project.readmeUrl && (
                        <a
                          href={project.readmeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-text-muted underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
                        >
                          README ↗
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Chapter>
  );
}
