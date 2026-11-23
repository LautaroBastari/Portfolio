import { useEffect, useState } from "react";
import { Icon, Reveal, Section, Tags } from "./ui";

/* ---------- Visor de imagen a pantalla completa ---------- */
function Lightbox({ shot, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
    >
      <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-md p-2 text-white/80 hover:text-white" aria-label="Cerrar">
        <Icon.close width={24} height={24} />
      </button>
      <img src={shot.src} alt={shot.alt} className="max-h-[90vh] max-w-full rounded-lg shadow-2xl" />
    </div>
  );
}

/* ---------- Marco tipo ventana para las capturas ---------- */
function Frame({ children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      {children}
    </div>
  );
}

function Gallery({ shots }) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(null);
  const current = shots[i];

  return (
    <div>
      <Frame>
        <button type="button" onClick={() => setZoom(current)} className="block w-full cursor-zoom-in" aria-label={`Ampliar: ${current.alt}`}>
          <img src={current.src} alt={current.alt} className="aspect-[16/9] w-full object-cover object-top" loading="lazy" />
        </button>
      </Frame>
      {shots.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {shots.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setI(idx)}
              aria-label={s.alt}
              aria-current={idx === i}
              className={`overflow-hidden rounded-md border transition ${
                idx === i ? "border-accent" : "border-line opacity-60 hover:opacity-100"
              }`}
            >
              <img src={s.src} alt="" className="aspect-[16/9] w-full object-cover object-top" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      {zoom && <Lightbox shot={zoom} onClose={() => setZoom(null)} />}
    </div>
  );
}

/* ---------- Diagrama de la arquitectura de microservicios ---------- */
function Node({ title, sub, accent = false }) {
  return (
    <div className={`rounded-lg border px-3 py-2 text-center ${accent ? "border-accent/60 bg-accent/5" : "border-line bg-bg"}`}>
      <div className="text-sm font-medium text-fg">{title}</div>
      {sub && <div className="font-mono text-[11px] text-muted">{sub}</div>}
    </div>
  );
}

const Down = () => <div className="mx-auto h-5 w-px bg-muted/50" aria-hidden />;

function ArchDiagram({ lang }) {
  const es = lang === "es";
  return (
    <Frame>
      <figure className="p-5 sm:p-6" aria-label={es ? "Diagrama de arquitectura" : "Architecture diagram"}>
        <div className="grid grid-cols-[1fr_auto] gap-x-4">
          {/* Flujo principal */}
          <div>
            <Node title="Frontend" sub="React + TypeScript" />
            <Down />
            <Node title="API Gateway" sub="Spring Cloud Gateway" accent />
            <Down />
            <div className="grid grid-cols-2 gap-3">
              <Node title={es ? "Usuarios" : "Users"} sub="Spring Boot" />
              <Node title={es ? "Notificaciones" : "Notifications"} sub="Spring Boot" />
            </div>
            <div className="mx-auto h-5 w-1/2 border-x border-b border-muted/50" aria-hidden />
            <Down />
            <Node title="RabbitMQ" sub={es ? "eventos asíncronos" : "async events"} />
          </div>
          {/* Servicios transversales */}
          <div className="flex w-28 flex-col justify-center gap-3 border-l border-dashed border-line pl-4 sm:w-32">
            <Node title="Keycloak" sub="OAuth2 · JWT" />
            <Node title="Eureka" sub="discovery" />
            <Node title="Docker" sub="compose" />
          </div>
        </div>
        <figcaption className="mt-4 text-center font-mono text-[11px] text-muted">
          {es ? "Arquitectura del sistema" : "System architecture"}
        </figcaption>
      </figure>
    </Frame>
  );
}

/* ---------- Tarjetas ---------- */
function RepoLink({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
      <Icon.github width={16} height={16} />
      {label}
    </a>
  );
}

function Featured({ p, t, lang, reverse }) {
  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.label}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg md:text-3xl">{p.title}</h3>
          <p className="mt-3 text-muted">{p.problem}</p>
          <ul className="mt-5 space-y-2.5">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-sm text-fg/90">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {pt}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Tags items={p.tags} />
          </div>
          <div className="mt-6">
            <RepoLink href={p.repo} label={t.projects.code} />
          </div>
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          {p.shots ? <Gallery shots={p.shots} /> : p.diagram ? <ArchDiagram lang={lang} /> : null}
        </div>
      </article>
    </Reveal>
  );
}

function MoreCard({ p, t }) {
  const [zoom, setZoom] = useState(null);
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      {p.shots && (
        <button type="button" onClick={() => setZoom(p.shots[0])} className="block cursor-zoom-in border-b border-line" aria-label={`Ampliar: ${p.shots[0].alt}`}>
          <img src={p.shots[0].src} alt={p.shots[0].alt} className="aspect-[16/8] w-full object-cover object-top opacity-90 transition hover:opacity-100" loading="lazy" />
        </button>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{p.problem}</p>
        {p.parts && (
          <ul className="mt-4 space-y-1.5">
            {p.parts.map((part) => (
              <li key={part.url}>
                <a href={part.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent">
                  <Icon.github width={14} height={14} />
                  {part.name}
                  <Icon.arrow width={13} height={13} className="opacity-50 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5">
          <Tags items={p.tags} />
        </div>
        {p.repo && (
          <div className="mt-5">
            <RepoLink href={p.repo} label={t.projects.code} />
          </div>
        )}
      </div>
      {zoom && <Lightbox shot={zoom} onClose={() => setZoom(null)} />}
    </article>
  );
}

export default function Projects({ t, lang }) {
  return (
    <Section id="proyectos" title={t.projects.title}>
      <Reveal>
        <p className="-mt-6 mb-14 max-w-2xl text-muted">{t.projects.subtitle}</p>
      </Reveal>
      <div className="space-y-24">
        {t.projects.featured.map((p, i) => (
          <Featured key={p.id} p={p} t={t} lang={lang} reverse={i % 2 === 1} />
        ))}
      </div>
      <div className="mt-24 grid gap-6 md:grid-cols-2">
        {t.projects.more.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <MoreCard p={p} t={t} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
