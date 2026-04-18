"use client";

import { motion } from "framer-motion";
import { graphismeItems, clients } from "@/lib/data";

export default function Graphisme() {
  return (
    <section id="graphisme" className="py-24 px-6 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Graphisme</h2>
          <p className="text-[#f0f0f0]/50 text-sm uppercase tracking-widest mb-2">
            15 ans d'expérience éditoriale
          </p>
          <p className="text-[#f0f0f0]/60 max-w-2xl leading-relaxed mb-10">
            Avant le développement, 15 ans de graphisme éditorial : direction artistique,
            maquette de livres, illustration, fabrication. Cette double compétence
            nourrit directement mon sens du design et de l'UX.
          </p>
        </motion.div>

        {/* Grid de 4 cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {graphismeItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#f0f0f0]/10 hover:border-[#f5a623]/40 transition-all duration-300"
            >
              <div className="h-48 bg-[#252525] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-2 group-hover:text-[#f5a623] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#f0f0f0]/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-[#f0f0f0]/40 mb-4">
            Clients & éditeurs
          </p>
          <div className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm px-4 py-2 rounded-full border border-[#f0f0f0]/15 text-[#f0f0f0]/50"
              >
                {client}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="/portfolio-graphisme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#f5a623] hover:underline"
            >
              Voir le portfolio graphisme complet (PDF)
              <span>↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
