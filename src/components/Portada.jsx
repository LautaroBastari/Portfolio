// Portada estilo diario: cabecera, nota principal con foto y columna de proyectos.
import { links } from "../content";
import { scrollToId } from "../lib/smoothScroll";
import { Icon, Reveal, TextReveal } from "./ui";

function fecha(lang) {
  const s = new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* Tarjeta chica de la columna "Proyectos": al tocarla desliza hasta su nota completa */
function MiniProject({ p, n, t }) {
  return (
    <button
      type="button"
      onClick={() => scrollToId(`p-${p.id}`)}
      className="group block w-full border-b border-fg/20 py-4 text-left transition-colors duration-300 last:border-b-0 hover:bg-fg/[0.04]"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {t.diario.issue} {n} · {p.label || p.tags[0]}
      </p>
      <h3 className="mt-1 text-lg font-bold leading-snug text-fg group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
        {p.title}
      </h3>
      <p className="mt-1 text-sm italic text-muted">{p.tags.slice(0, 3).join(" · ")}</p>
      <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-fg">
        {t.diario.open}
        <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
      </p>
    </button>
  );
}

export default function Portada({ t, lang }) {
  const d = t.diario;
  const projects = [...t.projects.featured, ...t.projects.more];

  return (
    <section id="inicio" className="pb-20 pt-20 sm:pt-24">
      <div className="container-page">
        {/* ---------- Cabecera ---------- */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-fg pb-2 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span>{fecha(lang)}</span>
            <span className="hidden sm:inline">{d.edition}</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-fg" />
              {t.hero.available}
            </span>
          </div>
        </Reveal>

        <TextReveal
          as="h1"
          text={t.hero.name}
          className="mt-5 block text-center text-5xl font-black leading-none tracking-tight text-fg sm:text-7xl lg:text-8xl"
          delay={0.15}
          stagger={0.15}
        />
        <TextReveal as="p" text={d.tagline} className="mt-3 block text-center text-lg italic text-muted" delay={0.5} stagger={0.05} />

        <Reveal delay={0.7}>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 border-y-[3px] border-double border-fg py-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-fg">
            {t.hero.degrees.map((deg) => (
              <span key={deg} className="inline-flex items-center gap-2">
                <Icon.cap width={14} height={14} />
                {deg}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ---------- Cuerpo en tres columnas ---------- */}
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Foto y datos */}
          <Reveal delay={0.9} className="lg:col-span-3 lg:border-r lg:border-fg/25 lg:pr-7">
            <figure className="mx-auto max-w-[15rem] lg:max-w-none">
              <img src="foto.jpg" alt="Lautaro Bastari" className="aspect-[4/5] w-full border border-fg/30 object-cover" />
              <figcaption className="mt-2 border-b border-fg/20 pb-3 text-sm italic text-muted">{d.caption}</figcaption>
            </figure>
            <div className="mt-4 flex flex-col gap-3">
              <a href={t.cvFile} download className="btn-primary justify-center">
                {t.hero.ctaCv}
                <Icon.download width={16} height={16} />
              </a>
              <div className="flex justify-center gap-1">
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                  <Icon.github width={20} height={20} />
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                  <Icon.linkedin width={20} height={20} />
                </a>
                <a href={`mailto:${links.email}`} className="icon-link" aria-label="Email">
                  <Icon.mail width={20} height={20} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Nota principal: presentación y trabajo freelance */}
          <article className="lg:col-span-6 lg:border-r lg:border-fg/25 lg:px-8">
            <Reveal delay={1.0}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{d.kicker}</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-fg sm:text-4xl">{d.headline}</h2>
              <p className="mt-4 border-b border-fg/20 pb-4 text-lg italic leading-relaxed text-muted">{d.deck}</p>
            </Reveal>
            <Reveal delay={1.15}>
              <div className="mt-5 gap-8 text-justify leading-relaxed text-fg/90 [hyphens:auto] md:columns-2 lg:columns-1">
                {d.body.map((p, i) => (
                  <p key={p} className={`mb-4 ${i === 0 ? "drop-cap" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </article>

          {/* Columna de proyectos */}
          <Reveal delay={1.3} className="lg:col-span-3 lg:pl-7">
            <h2 className="border-y-[3px] border-double border-fg py-1.5 text-center text-sm font-bold uppercase tracking-[0.3em] text-fg">
              {d.projects}
            </h2>
            <div>
              {projects.map((p, i) => (
                <MiniProject key={p.id} p={p} n={i + 1} t={t} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
