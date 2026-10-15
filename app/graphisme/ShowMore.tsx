"use client";

import { useState } from "react";

// Replie un bloc trop long ; le masque estompe le bas quel que soit le fond de la section.
export function ShowMore({ height, children }: { height: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={open ? "" : "overflow-hidden"}
        style={
          open
            ? undefined
            : {
                maxHeight: height,
                maskImage: "linear-gradient(to bottom, black 75%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent)",
              }
        }
      >
        {children}
      </div>
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="theme-chip rounded px-4 py-2 text-sm"
        >
          {open ? "Voir moins ↑" : "Voir plus ↓"}
        </button>
      </div>
    </div>
  );
}
