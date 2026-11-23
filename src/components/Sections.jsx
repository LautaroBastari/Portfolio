import { useEffect, useState } from "react";
import { links } from "../content";
import { Icon, Reveal, Section, Tags, TextReveal } from "./ui";

export function Hero({ t }) {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center pb-28 pt-20 lg:pb-36">
      {/* Resplandor sutil de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgb(var(--accent)/0.08),transparent)]" aria-hidden />
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </p>
        </Reveal>
        {/* El texto aparece palabra por palabra al entrar */}
        <TextReveal as="p" text={t.hero.kicker} className="mt-8 block font-mono text-base text-accent" delay={0.15} />
        <TextReveal as="h1" text={t.hero.name} className="mt-2 block text-5xl font-semibold tracking-tight text-fg sm:text-6xl xl:text-7xl" delay={0.3} stagger={0.14} />
        {/* Títulos: lo primero que se lee después del nombre */}
        <ul className="mt-6 space-y-2">
          {t.hero.degrees.map((d, i) => (
            <li key={d} className="flex items-start gap-3 text-xl font-medium text-fg sm:text-2xl">
              <Reveal delay={0.6 + i * 0.2}>
                <Icon.cap width={24} height={24} className="mt-1 shrink-0 text-accent" />
              </Reveal>
              <TextReveal text={d} delay={0.65 + i * 0.2} stagger={0.05} />
            </li>
          ))}
        </ul>
        <TextReveal as="p" text={t.hero.role} className="mt-5 block text-lg text-fg/75 sm:text-xl" delay={1.1} stagger={0.05} />
        <Reveal delay={1.4}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{t.hero.summary}</p>
        </Reveal>
        <Reveal delay={1.6}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#proyectos" className="btn-primary">
              {t.hero.ctaProjects}
            </a>
            <a href={t.cvFile} download className="btn-secondary">
              {t.hero.ctaCv}
              <Icon.download width={16} height={16} />
            </a>
            <div className="ml-1 flex items-center gap-1">
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
        </div>

        {/* Foto: arriba del texto en celular, a la derecha en escritorio */}
        <Reveal delay={0.4} className="order-first lg:order-none">
          <div className="relative mx-auto w-32 sm:w-40 lg:w-60 xl:w-64">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden />
            <img
              src="foto.jpg"
              alt="Lautaro Bastari"
              className="aspect-square w-full rounded-2xl border border-line object-cover lg:aspect-[4/5] lg:rounded-3xl"
            />
          </div>
        </Reveal>
      </div>

      <ScrollHint label={t.hero.scroll} />
    </section>
  );
}

/* Indicador "seguí bajando": se desvanece apenas el usuario scrollea */
function ScrollHint({ label }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#experiencia"
      className={`absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted/60 transition duration-500 hover:text-accent ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label={label}
      tabIndex={visible ? 0 : -1}
    >
      <span className="font-mono text-[11px] tracking-[0.15em]">{label}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="animate-scroll-dot" aria-hidden>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </a>
  );
}

export function Experience({ t }) {
  return (
    <Section id="experiencia" title={t.experience.title}>
      <ol className="relative border-l border-line">
        {t.experience.items.map((job) => (
          <li key={job.role} className="ml-6 md:ml-10">
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" aria-hidden />
            <Reveal>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-semibold text-fg">{job.role}</h3>
                <span className="font-mono text-sm text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-accent/90">{job.company}</p>
              <ul className="mt-5 max-w-3xl space-y-2.5">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-fg/85">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Tags items={job.tags} />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function About({ t }) {
  return (
    <Section id="sobre-mi" title={t.about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-fg/85">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <div>
          <Reveal delay={0.05}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{t.about.education}</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {t.about.degrees.map((d) => (
                <li key={d.title} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                  <span className="text-fg">
                    {d.title} <span className="text-muted">· {d.place}</span>
                  </span>
                  <span className="font-mono text-sm text-muted">{d.status}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Stack({ t }) {
  return (
    <Section id="stack" title={t.stack.title}>
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {t.stack.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.05} className="bg-bg p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{g.name}</h3>
            <ul className="mt-4 space-y-2">
              {g.items.map((it) => (
                <li key={it} className="text-fg/85">
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact({ t }) {
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
    <Section id="contacto" title={t.contact.title}>
      <Reveal>
        <p className="max-w-xl text-lg text-muted">{t.contact.text}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${links.email}`} className="break-all text-2xl font-medium text-fg underline decoration-line underline-offset-8 transition hover:decoration-accent sm:text-3xl">
            {links.email}
          </a>
          <button type="button" onClick={copy} className="btn-secondary" aria-live="polite">
            {copied ? <Icon.check width={16} height={16} /> : <Icon.copy width={16} height={16} />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
        </div>
        <div className="mt-8 flex gap-3">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Icon.linkedin width={16} height={16} /> LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Icon.github width={16} height={16} /> GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer({ t }) {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col justify-between gap-2 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Lautaro Bastari</span>
        <span>{t.footer}</span>
      </div>
    </footer>
  );
}
