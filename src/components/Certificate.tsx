import { FaAward } from 'react-icons/fa6';
import { certifications } from '../data/site';

function Certificate() {
  return (
    <section id="certificates" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-tealish-600">
              Certificaciones
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Aprendizaje continuo.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-ink-700">
            Cursos y certificaciones que complementan mi stack para proyectos reales.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2rem] border border-ink-900/10 bg-sand-50/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-sand-50 shadow-soft">
                  <FaAward aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-ink-950">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-700">
                    {c.issuer} <span className="text-ink-600">•</span> {c.date}
                  </p>
                  <p className="mt-3 text-sm text-ink-700">
                    Abrir credencial <span className="text-copper-500">→</span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
