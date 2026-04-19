import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { projects } from '../data/site';

function Projects() {
  return (
    <section id="projects" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-copper-600">
              Proyectos
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Selección de trabajos recientes.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-ink-700">
            Prefiero mostrar cosas públicas y navegables: demos, repos y descripciones claras.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {projects.map((p, idx) => {
            const isFeatured = idx === 0;
            return (
              <article
                key={p.title}
                className={[
                  'group overflow-hidden rounded-[2rem] border border-ink-900/10 bg-sand-50/70 shadow-soft transition',
                  'hover:-translate-y-1 hover:shadow-lift',
                  isFeatured ? 'md:col-span-7' : 'md:col-span-5',
                ].join(' ')}
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-64"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, isFeatured ? 6 : 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-sand-50/20 bg-ink-950/70 px-3 py-1 text-xs font-semibold text-sand-50 backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.blurb}</p>

                  <ul className="mt-4 space-y-2 text-sm text-ink-700">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-copper-500" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.map((l) => {
                      const isGitHub = l.label.toLowerCase().includes('github');
                      return (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={[
                            'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-soft transition',
                            isGitHub
                              ? 'border border-ink-900/12 bg-sand-50 text-ink-900 hover:bg-sand-200/70'
                              : 'bg-tealish-500 text-sand-50 hover:bg-tealish-600',
                          ].join(' ')}
                        >
                          {l.label}
                          {isGitHub ? <FaGithub aria-hidden="true" /> : <FaArrowUpRightFromSquare aria-hidden="true" />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
