import { useEffect, useState } from "react";
import { content } from "./content";
import Navbar from "./components/Navbar";
import Bento from "./components/Bento";
import { Footer, Hero } from "./components/Sections";

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* sin acceso a localStorage */
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignorar */
    }
  }, [lang]);

  return (
    <>
      <a href="#proyectos" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2">
        {lang === "es" ? "Ir a proyectos" : "Skip to projects"}
      </a>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <div key={lang}>
        <Hero t={t} />
        <Bento t={t} lang={lang} />
      </div>
      <Footer t={t} />
    </>
  );
}
