"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Projets</h2>
          <p className="text-[#f0f0f0]/50 text-sm uppercase tracking-widest">
            Développement web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#f0f0f0]/10 hover:border-[#f5a623]/50 transition-all duration-300"
            >
              {/* Screenshot placeholder */}
              <div className="relative h-44 bg-[#252525] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#f5a623] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#f0f0f0]/60 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-[#f5a623]/15 text-[#f5a623] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs py-2 bg-[#f5a623] text-[#0f0f0f] font-semibold rounded hover:bg-[#f5a623]/80 transition-colors"
                  >
                    Voir le site
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs py-2 border border-[#f0f0f0]/20 text-[#f0f0f0]/70 rounded hover:border-[#f0f0f0]/50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
