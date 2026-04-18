"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#141414]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-[#f0f0f0]/60 mb-10 leading-relaxed">
            Je recherche une alternance de 12 mois à partir de juin 2026.
            N'hésitez pas à me contacter pour échanger sur vos projets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:patrice.philetas@gmail.com"
              className="px-8 py-4 bg-[#f5a623] text-[#0f0f0f] font-semibold rounded hover:bg-[#f5a623]/80 transition-colors"
            >
              patrice.philetas@gmail.com
            </a>
            <a
              href="tel:+33629370165"
              className="px-8 py-4 border border-[#f0f0f0]/20 text-[#f0f0f0]/70 rounded hover:border-[#f5a623] hover:text-[#f5a623] transition-all"
            >
              06 29 37 01 65
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/patphiletas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#f0f0f0]/50 hover:text-[#f5a623] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patricephiletas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#f0f0f0]/50 hover:text-[#f5a623] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-xs text-[#f0f0f0]/20">
          © 2026 Patrice Philétas — Développeur Full Stack
        </p>
      </div>
    </section>
  );
}
