"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-[#f5a623]">
              <img
                src="/images/patrice-philetas.jpg"
                alt="Patrice Philétas"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#f5a623] text-sm font-medium tracking-widest uppercase mb-2"
            >
              Disponible pour alternance — juin 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Patrice Philétas
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-[#f0f0f0]/70 mb-6"
            >
              Développeur Full Stack{" "}
              <span className="text-[#f5a623]">×</span> Graphiste
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#f0f0f0]/60 max-w-xl mb-8 leading-relaxed"
            >
              En reconversion vers le développement web full stack après 15 ans dans
              le graphisme et la production éditoriale. En formation à Ada Tech School,
              avec l'accent sur la pratique, la qualité du code et la collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projets"
                className="px-6 py-3 bg-[#f5a623] text-[#0f0f0f] font-semibold rounded hover:bg-[#f5a623]/80 transition-colors"
              >
                Voir mes projets
              </a>
              <a
                href="/cv-patrice-philetas.pdf"
                download
                className="px-6 py-3 border border-[#f0f0f0]/30 text-[#f0f0f0]/80 rounded hover:border-[#f5a623] hover:text-[#f5a623] transition-all"
              >
                Télécharger mon CV
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex flex-wrap gap-2"
        >
          {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Figma", "Photoshop", "Indesign"].map(
            (tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-[#f0f0f0]/10 text-[#f0f0f0]/60 border border-[#f0f0f0]/10"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
