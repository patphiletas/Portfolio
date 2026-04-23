"use client";

export default function Hero() {
  return (
    <section id="hero" className="theme-surface min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-full md:w-auto shrink-0 flex justify-center">
            <div className="w-full max-w-[22rem] aspect-square md:w-48 md:h-48 md:max-w-none rounded-full overflow-hidden border-2 theme-border">
              <img
                src="/images/patrice-philetas.jpg"
                alt="Patrice Philétas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="theme-text text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Patrice Philétas
            </h1>

            <h2 className="theme-text-muted text-xl md:text-2xl mb-6">
              Développeur Full Stack <span className="theme-text">×</span> Graphiste
            </h2>

            <p className="theme-text-muted max-w-xl mb-8 leading-relaxed">
              En reconversion vers le développement web full stack après 15 ans dans
              le graphisme et la production éditoriale. En formation à Ada Tech School,
              avec l'accent sur la pratique, la qualité du code et la collaboration.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projets"
                className="theme-button-primary px-6 py-3 font-semibold rounded-lg hover:opacity-80 transition-colors"
              >
                Voir mes projets
              </a>
              <a
                href="/cv-patrice-philetas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-secondary px-6 py-3 border rounded-lg hover:opacity-80 transition-colors"
              >
                Voir mon CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Figma", "Photoshop", "Indesign"].map(
            (tech) => (
              <span
                key={tech}
                className="theme-chip text-xs px-3 py-1 rounded-full border"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
