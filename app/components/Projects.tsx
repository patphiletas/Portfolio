"use client";

import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projets" className="theme-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="theme-text text-3xl md:text-4xl font-bold mb-3">Projets</h2>
          <p className="theme-text-muted text-sm uppercase tracking-widest">
            Développement web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="theme-surface-muted theme-card-border flex h-full flex-col rounded-lg overflow-hidden hover:opacity-95 transition-colors"
            >
              <div className="relative h-44 bg-gray-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="theme-text font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="theme-text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="theme-chip text-xs px-2 py-0.5 rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.readmeUrl && (
                  <a
                    href={project.readmeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-link mb-4 text-xs underline underline-offset-2 hover:opacity-80 transition-colors"
                  >
                    Voir le README
                  </a>
                )}

                <div className="mt-auto flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-button-primary flex-1 text-center text-xs py-2 font-semibold rounded hover:opacity-80 transition-colors"
                  >
                    Démo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-button-secondary flex-1 text-center text-xs py-2 border rounded hover:opacity-80 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
