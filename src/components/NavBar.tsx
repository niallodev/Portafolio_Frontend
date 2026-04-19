import { useEffect, useMemo, useState } from 'react';
import { profile } from '../data/site';

type Section = { id: string; label: string };

function NavBar() {
  const sections: Section[] = useMemo(
    () => [
      { id: 'about', label: 'Sobre mí' },
      { id: 'skills', label: 'Stack' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'certificates', label: 'Certificaciones' },
      { id: 'contact', label: 'Contacto' },
    ],
    [],
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.1, 0.2, 0.35],
        rootMargin: '-40% 0px -55% 0px',
      },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const linkClass = (id: string) =>
    [
      'px-3 py-2 rounded-full text-sm font-medium transition',
      active === id
        ? 'bg-ink-900 text-sand-50 shadow-soft'
        : 'text-ink-700 hover:bg-sand-200/70 hover:text-ink-900',
    ].join(' ');

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50',
        'border-b border-ink-900/10',
        'backdrop-blur-md',
        scrolled ? 'bg-sand-50/85 shadow-soft' : 'bg-sand-50/60',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="group inline-flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
            {profile.name.split(' ')[0]}
            <span className="text-copper-500">.</span>
          </span>
          <span className="hidden text-xs text-ink-600 md:inline">
            {profile.role}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={linkClass(s.id)}>
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-tealish-500 px-4 py-2 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-tealish-600"
          >
            Hablemos
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-ink-900/10 bg-sand-50/80 px-3 py-2 text-ink-900 shadow-soft transition hover:bg-sand-200/60 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-ink-900/10 bg-sand-50/95 px-4 pb-4 pt-3 md:hidden">
          <nav className="mx-auto grid max-w-6xl gap-2" aria-label="Navegación móvil">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={[
                  'rounded-xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm font-semibold text-ink-900 shadow-soft',
                  active === s.id ? 'ring-2 ring-tealish-500/30' : 'hover:bg-sand-200/60',
                ].join(' ')}
              >
                {s.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-ink-900 px-4 py-3 text-sm font-semibold text-sand-50 shadow-soft"
            >
              Escríbeme
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default NavBar;
