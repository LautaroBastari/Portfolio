// Estilo C: todo el portfolio como una grilla "bento" de tarjetas.
import { useState } from "react";
import { links } from "../content";
import { ArchDiagram, Gallery, Lightbox } from "./Projects";
import { Icon, Reveal, Tags } from "./ui";

/* Tarjeta base: aparece con fade + blur al entrar en pantalla */
function Card({ id, className = "", delay = 0, children, pad = true }) {
  return (
    <Reveal delay={delay} className={`scroll-mt-24 ${className}`}>
      <div id={id} className={`bento h-full ${pad ? "p-8 sm:p-10" : ""}`}>
        {children}
      </div>
    </Reveal>
  );
}

const Label = ({ children }) => <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{children}</p>;

/* ---------- Experiencia ---------- */
function ExperienceCard({ t }) {
  const job = t.experience.items[0];
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-semibold text-fg sm:text-2xl">{job.role}</h2>
        <span className="font-mono text-sm text-muted">{job.period}</span>
      </div>
      <p className="mt-1 text-accent/90">{job.company}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {job.points.map((pt) => (
          <li key={pt} className="flex gap-3 text-sm text-fg/85 sm:text-base">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
            {pt}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Tags items={job.tags} />
      </div>
    </div>
  );
}

function Education({ t }) {
  return (
    <div className="flex h-full flex-col">
      <Label>{t.about.education}</Label>
      <ul className="mt-4 flex-1 space-y-4">
        {t.about.degrees.map((d) => (
          <li key={d.title} className="flex items-start gap-3">
            <Icon.cap width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-fg">{d.title}</p>
              <p className="text-sm text-muted">
                {d.place} · {d.status}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Proyectos ---------- */
function RepoLink({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
      <Icon.github width={16} height={16} />
      {label}
    </a>
  );
}

function FeaturedProject({ p, t, lang, reverse }) {
  return (
    <div className="grid h-full items-center gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{p.label}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{p.title}</h3>
        <p className="mt-3 text-muted">{p.problem}</p>
        <ul className="mt-5 space-y-2">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3 text-sm text-fg/85">
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
      <div className={reverse ? "lg:order-1" : ""}>{p.shots ? <Gallery shots={p.shots} /> : <ArchDiagram lang={lang} />}</div>
    </div>
  );
}

function SmallProject({ p, t }) {
  const [zoom, setZoom] = useState(null);
  return (
    <div className="flex h-full flex-col">
      {p.shots && (
        <button type="button" onClick={() => setZoom(p.shots[0])} className="block cursor-zoom-in overflow-hidden border-b border-line" aria-label={p.shots[0].alt}>
          <img src={p.shots[0].src} alt={p.shots[0].alt} className="ink aspect-[16/7] w-full object-cover object-top" loading="lazy" />
        </button>
      )}
      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{p.problem}</p>
        {p.parts && (
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {p.parts.map((part) => (
              <li key={part.url}>
                <a href={part.url} target="_blank" rel="noopener noreferrer" className="flex h-full items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-fg transition-colors duration-300 hover:border-accent hover:text-accent">
                  <Icon.github width={14} height={14} className="shrink-0" />
                  {part.name}
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
    </div>
  );
}

/* ---------- Sobre mí, stack y contacto ---------- */
function AboutCard({ t }) {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-4 leading-relaxed text-fg/85">
        {t.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function StackCard({ t }) {
  return (
    <div className="flex h-full flex-col">
      <Label>{t.stack.title}</Label>
      <div className="mt-4 grid flex-1 gap-5 sm:grid-cols-2">
        {t.stack.groups.map((g) => (
          <div key={g.name}>
            <p className="mb-2 text-sm text-accent">{g.name}</p>
            <Tags items={g.items} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactCard({ t }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };
  return (
    <div className="relative flex flex-col items-start gap-6 overflow-hidden p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div>
        <Label>{t.contact.title}</Label>
        <p className="mt-3 max-w-md text-xl text-fg sm:text-2xl">{t.contact.text}</p>
      </div>
      <div className="flex flex-col items-start gap-3 md:items-end">
        <a href={`mailto:${links.email}`} className="break-all text-lg font-medium text-fg underline decoration-line underline-offset-8 transition-colors duration-300 hover:decoration-accent sm:text-2xl">
          {links.email}
        </a>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={copy} className="btn-secondary" aria-live="polite">
            {copied ? <Icon.check width={16} height={16} /> : <Icon.copy width={16} height={16} />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Icon.linkedin width={16} height={16} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Página ---------- */
// Debajo del hero: grupos de tarjetas con bastante aire entre sí.
function Group({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      {title && (
        <Reveal>
          <h2 className="section-title">{title}</h2>
        </Reveal>
      )}
      {children}
    </section>
  );
}

export default function Bento({ t, lang }) {
  const [featA, featB] = t.projects.featured;
  return (
    <main className="container-page space-y-28 pb-24 pt-8 md:space-y-36">
      <Group id="experiencia" title={t.experience.title}>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <ExperienceCard t={t} />
          </Card>
          <Card delay={0.15}>
            <Education t={t} />
          </Card>
        </div>
      </Group>

      <Group id="proyectos" title={t.projects.title}>
        <div className="space-y-8">
          <Card id={`p-${featA.id}`} pad={false}>
            <FeaturedProject p={featA} t={t} lang={lang} />
          </Card>
          <Card id={`p-${featB.id}`} pad={false}>
            <FeaturedProject p={featB} t={t} lang={lang} reverse />
          </Card>
          <div className="grid gap-8 md:grid-cols-2">
            {t.projects.more.map((p, i) => (
              <Card key={p.id} id={`p-${p.id}`} delay={i * 0.15} pad={false}>
                <SmallProject p={p} t={t} />
              </Card>
            ))}
          </div>
        </div>
      </Group>

      <Group id="sobre-mi" title={t.about.title}>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <AboutCard t={t} />
          </Card>
          <Card delay={0.15}>
            <StackCard t={t} />
          </Card>
        </div>
      </Group>

      <Group id="contacto">
        <Card pad={false}>
          <ContactCard t={t} />
        </Card>
      </Group>
    </main>
  );
}
