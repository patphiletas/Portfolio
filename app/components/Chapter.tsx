type ChapterProps = {
  id: string;
  title: string;
  kicker?: string;
  surface?: "default" | "muted";
  children: React.ReactNode;
};

export default function Chapter({
  id,
  title,
  kicker,
  surface = "default",
  children,
}: ChapterProps) {
  return (
    <section
      id={id}
      className={`${surface === "muted" ? "theme-surface-muted" : "theme-surface"} py-16 px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="theme-border-subtle border-b pb-4 mb-10 flex items-baseline justify-between gap-6">
          <div className="flex items-baseline gap-3">
            <h2 className="font-serif theme-text text-2xl md:text-3xl">{title}</h2>
            {kicker && (
              <span className="theme-text-muted text-[11px] uppercase tracking-[0.15em]">
                {kicker}
              </span>
            )}
          </div>
          <a
            href="#hero"
            className="theme-link text-[11px] uppercase tracking-[0.15em] shrink-0 transition-colors"
          >
            ↑ Sommaire
          </a>
        </div>

        {children}
      </div>
    </section>
  );
}
