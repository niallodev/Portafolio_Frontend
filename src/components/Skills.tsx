import { skills } from '../data/site';

function Skills() {
  return (
    <section id="skills" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-tealish-600">
              Stack
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Tecnologías que uso en proyectos reales.
            </h2>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-sand-50/70 px-5 py-4 text-sm text-ink-700 shadow-soft">
            React + TypeScript al frente, APIs en Node/Django/.NET, y SQL para datos.
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-ink-900/10 bg-sand-50/70 p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-ink-950">
                  {group.title}
                </h3>
                <span className="rounded-full border border-ink-900/10 bg-sand-50 px-3 py-1 text-xs font-semibold text-ink-700">
                  {group.items.length}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink-900/10 bg-sand-50 px-3 py-1 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-ink-900/20 hover:shadow-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-ink-950/95 px-4 py-3 text-sand-50 shadow-soft">
                <p className="text-xs uppercase tracking-widest text-sand-50/70">Cómo lo aplico</p>
                <p className="mt-2 text-sm">{group.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
