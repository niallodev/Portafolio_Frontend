import { about, experience } from '../data/site';

function About() {
  return (
    <section id="about" className="relative py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <div>
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-copper-600">
            Sobre mí
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Enfoque en calidad, claridad y velocidad.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-ink-900/10 bg-sand-50/70 p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-600">Fortalezas</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {about.strengths.map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm font-semibold text-ink-900"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-tealish-500/12 via-transparent to-copper-500/10 blur-2xl" />

          <div className="rounded-[2rem] border border-ink-900/10 bg-sand-50/70 p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-xl font-semibold text-ink-950">Experiencia</p>
                <p className="mt-1 text-sm text-ink-700">Roles y responsabilidades recientes</p>
              </div>
              <span className="rounded-full border border-ink-900/10 bg-sand-50 px-3 py-1 text-xs font-semibold text-ink-700">
                {experience.length} {experience.length === 1 ? 'rol' : 'roles'}
              </span>
            </div>

            <div className="mt-5 grid gap-4">
              {experience.map((exp) => (
                <div
                  key={`${exp.company}-${exp.role}-${exp.dates}`}
                  className="rounded-2xl border border-ink-900/10 bg-sand-50 p-5 shadow-soft"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        {exp.role} <span className="text-ink-600">•</span> {exp.company}
                      </p>
                      <p className="mt-1 text-xs text-ink-600">{exp.dates}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-700">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span
                          className="mt-1.5 h-2 w-2 flex-none rounded-full bg-tealish-500"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink-900/10 bg-ink-950/95 p-4 text-sand-50 shadow-soft">
                <p className="text-xs uppercase tracking-widest text-sand-50/70">Intereses</p>
                <p className="mt-2 text-sm">
                  Frontend con buen UX, APIs limpias, seguridad básica y datos.
                </p>
              </div>
              <div className="rounded-2xl border border-ink-900/10 bg-sand-50 p-4 shadow-soft">
                <p className="text-xs uppercase tracking-widest text-ink-600">Busco</p>
                <p className="mt-2 text-sm text-ink-700">
                  Un equipo donde pueda crecer y aportar desde el primer día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
