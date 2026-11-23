// TEMPORAL: selector de color de acento para elegir la paleta.
// Solo se muestra en desarrollo (npm run dev); no llega al sitio publicado.
import { useEffect, useState } from "react";

const OPTIONS = [
  { name: "Agua (actual)", rgb: "45 212 191" },
  { name: "Azul", rgb: "96 165 250" },
  { name: "Ámbar", rgb: "245 177 76" },
  { name: "Violeta", rgb: "167 139 250" },
  { name: "Verde", rgb: "74 222 128" },
  { name: "Coral", rgb: "251 113 133" },
  { name: "Blanco (sin color)", rgb: "236 236 239" },
];

export default function DevColorPicker() {
  const [sel, setSel] = useState(() => localStorage.getItem("dev-accent") || OPTIONS[0].rgb);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", sel);
    localStorage.setItem("dev-accent", sel);
  }, [sel]);

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-xl border border-line bg-surface/95 p-2 shadow-2xl backdrop-blur">
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex items-center gap-2 px-1 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted hover:text-fg">
        <span className="h-3.5 w-3.5 rounded-full" style={{ background: `rgb(${sel})` }} />
        Color {open ? "▾" : "▸"}
      </button>
      {open && <div className="mt-2 flex flex-col gap-1">
        {OPTIONS.map((o) => (
          <button
            key={o.rgb}
            type="button"
            onClick={() => setSel(o.rgb)}
            className={`flex items-center gap-2 rounded-md px-2 py-1 text-left text-sm ${sel === o.rgb ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"}`}
          >
            <span className="h-3.5 w-3.5 rounded-full" style={{ background: `rgb(${o.rgb})` }} />
            {o.name}
          </button>
        ))}
      </div>}
    </div>
  );
}
