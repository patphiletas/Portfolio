"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="apropos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">À propos</h2>
          <p className="text-[#f0f0f0]/50 text-sm uppercase tracking-widest">
            Parcours & compétences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Parcours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-[#f5a623]">Parcours</h3>
            <div className="space-y-5 text-[#f0f0f0]/70 leading-relaxed">
              <p>
                Après plus de 15 ans comme graphiste-maquettiste et chargé de fabrication
                éditoriale, j'ai choisi de me reconvertir vers le développement web full stack.
              </p>
              <p>
                Cette transition n'est pas un changement radical mais une évolution logique :
                le même soin apporté à la mise en page d'un livre de 800 pages se retrouve
                dans la rigueur d'un code propre, typé, et bien structuré.
              </p>
              <p>
                Je me forme actuellement à{" "}
                <span className="text-[#f0f0f0]">Ada Tech School</span>, avec un accent
                fort sur la pratique, la collaboration et la qualité du code.
              </p>
              <p>
                Je recherche une{" "}
                <span className="text-[#f5a623] font-medium">
                  alternance de 12 mois à partir de juin 2026
                </span>{" "}
                (4j/1j en professionnalisation).
              </p>
            </div>

            {/* Compétences transversales */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Rigueur & précision", "Sens esthétique & UX", "Logique & résolution de problèmes", "Collaboration", "Apprentissage continu"].map(
                (item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 bg-[#f5a623]/10 text-[#f5a623] rounded-full border border-[#f5a623]/20"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-[#f5a623]">Formation & expérience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#f5a623] pl-4">
                <p className="text-sm text-[#f0f0f0]/40 mb-0.5">2025 — en cours</p>
                <p className="font-medium">Développeur d'application Full Stack</p>
                <p className="text-sm text-[#f0f0f0]/60">Ada Tech School</p>
              </div>
              <div className="border-l-2 border-[#f0f0f0]/20 pl-4">
                <p className="text-sm text-[#f0f0f0]/40 mb-0.5">2006 — 2025</p>
                <p className="font-medium">Graphiste-maquettiste chargé d'édition et de fabrication</p>
                <p className="text-sm text-[#f0f0f0]/60">
                  Groupe Grego · Éditions jésuites · Éditions La Martinière · CDI & freelance
                </p>
              </div>
              <div className="border-l-2 border-[#f0f0f0]/20 pl-4">
                <p className="text-sm text-[#f0f0f0]/40 mb-0.5">2001</p>
                <p className="font-medium">Maîtrise Communication Politique et Publique</p>
                <p className="text-sm text-[#f0f0f0]/60">Upec</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-6 text-[#f5a623]">Compétences</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <p className="text-xs uppercase tracking-widest text-[#f0f0f0]/40 mb-3">
                  {skillGroup.category}
                </p>
                <ul className="space-y-1.5">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#f0f0f0]/70">
                      <span className="w-1 h-1 rounded-full bg-[#f5a623] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
