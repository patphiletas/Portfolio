"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { fullSrc, thumbSrc, type GraphismeImage } from "@/lib/graphisme";

type LightboxContextValue = { open: (image: GraphismeImage) => void };

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<GraphismeImage | null>(null);
  const close = useCallback(() => setCurrent(null), []);

  useEffect(() => {
    if (!current) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [current, close]);

  return (
    <LightboxContext.Provider value={{ open: setCurrent }}>
      {children}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption || "Agrandissement"}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-6"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Fermer ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fullSrc(current.id)}
            alt={current.caption || "Réalisation graphique"}
            className="max-h-[82vh] max-w-[96vw] rounded bg-white object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          {current.caption && (
            <p className="mt-3 text-center text-sm text-zinc-300">{current.caption}</p>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}

type FigureProps = {
  item: GraphismeImage;
  sizes: string;
  className?: string;
};

export function Figure({ item, sizes, className = "" }: FigureProps) {
  const lightbox = useContext(LightboxContext);
  const label = item.caption || "Réalisation graphique";

  return (
    <figure className={`theme-surface theme-card-border overflow-hidden rounded-lg ${className}`}>
      <button
        type="button"
        onClick={() => lightbox?.open(item)}
        aria-label={`Agrandir : ${label}`}
        className="block w-full cursor-zoom-in"
        style={{ backgroundColor: item.grey ? "#8e8584" : "#ffffff" }}
      >
        <Image
          src={thumbSrc(item.id)}
          alt={label}
          width={item.width}
          height={item.height}
          sizes={sizes}
          className="h-auto w-full"
        />
      </button>
      {item.caption && (
        <figcaption className="theme-text-muted px-3 py-2 text-[13px] leading-snug">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}
