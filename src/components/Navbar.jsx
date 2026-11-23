import { useEffect, useState } from "react";
import { Icon } from "./ui";

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    ["experiencia", t.nav.experience],
    ["proyectos", t.nav.projects],
    ["sobre-mi", t.nav.about],
    ["contacto", t.nav.contact],
  ];

  const LangSwitch = () => (
    <div className="flex rounded-md border border-line p-0.5 font-mono text-xs" role="group" aria-label="Idioma / Language">
      {["es", "en"].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded px-2 py-1 uppercase transition-colors ${
            lang === l ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-fg/15 transition-colors duration-300 ${
        scrolled || open ? "bg-bg/85 backdrop-blur-md" : "bg-bg/60"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#inicio" className="font-semibold tracking-tight text-fg" onClick={() => setOpen(false)}>
          Lautaro Bastari<span className="text-accent">.</span>
        </a>

        {/* Escritorio */}
        <div className="hidden items-center gap-7 md:flex">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {label}
            </a>
          ))}
          <LangSwitch />
          <a href={t.cvFile} download className="btn-secondary !py-1.5">
            {t.nav.cv}
            <Icon.download width={15} height={15} />
          </a>
        </div>

        {/* Móvil */}
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-fg"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <Icon.close /> : <Icon.menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-page flex flex-col gap-1 pb-5 md:hidden">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-md px-2 py-2.5 text-fg hover:bg-surface">
              {label}
            </a>
          ))}
          <a href={t.cvFile} download className="btn-secondary mt-2 justify-center">
            {t.nav.cv}
            <Icon.download width={15} height={15} />
          </a>
        </div>
      )}
    </header>
  );
}
