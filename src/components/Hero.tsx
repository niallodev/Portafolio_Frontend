import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '../data/site';

function Hero() {
  const photoSrc = `${import.meta.env.BASE_URL}Perfil.png`;
  const cvPdfHref = `${import.meta.env.BASE_URL}CV_Nicolas_Loor_Bazurto.pdf`;

  return (
    <section className="relative pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 md:grid-cols-2 md:px-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-sand-50/80 px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-tealish-500" aria-hidden="true" />
            Disponible para nuevas oportunidades
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-ink-700">
            {profile.role} <span className="text-copper-500">/</span> {profile.location}
          </p>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-700 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-ink-900 px-5 py-3 text-sm font-semibold text-sand-50 shadow-soft transition hover:bg-ink-950"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-ink-900/15 bg-sand-50/70 px-5 py-3 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-sand-200/70"
            >
              Contactarme
            </a>
            <a
              href={cvPdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-ink-900/15 bg-sand-50/70 px-5 py-3 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-sand-200/70"
            >
              Descargar CV
            </a>

            <div className="flex items-center gap-2 sm:ml-auto">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/12 bg-sand-50/70 text-ink-900 shadow-soft transition hover:bg-sand-200/70"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/12 bg-sand-50/70 text-ink-900 shadow-soft transition hover:bg-sand-200/70"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-copper-500/15 via-transparent to-tealish-500/20 blur-2xl" />
          <div className="floaty rounded-[2rem] border border-ink-900/10 bg-sand-50/70 p-4 shadow-soft">
            <div className="flex items-center gap-4 rounded-2xl bg-sand-100 p-4">
              <img
                src={photoSrc}
                alt="Foto de Nicolas"
                className="h-20 w-20 rounded-2xl object-cover shadow-soft"
                loading="eager"
              />
              <div>
                <p className="font-display text-lg font-semibold text-ink-950">{profile.name}</p>
                <p className="mt-1 text-sm text-ink-700">React • TypeScript • Node.js • Python • .NET</p>
                <p className="mt-1 text-xs text-ink-600">Guayaquil, Ecuador</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="min-w-0 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 py-3 shadow-soft transition hover:bg-sand-200/70"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-600">Email</span>
                <span className="mt-1 block break-all text-sm font-semibold text-ink-900">
                  {profile.email}
                </span>
              </a>
              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 py-3 shadow-soft transition hover:bg-sand-200/70"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-600">WhatsApp</span>
                <span className="mt-1 block break-words text-sm font-semibold text-ink-900">
                  {profile.phone}
                </span>
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-ink-900/10 bg-ink-950/95 px-4 py-3 text-sand-50 shadow-soft">
              <p className="text-xs uppercase tracking-widest text-sand-50/70">Enfoque</p>
              <p className="mt-1 text-sm">
                UI rápida y limpia • APIs REST • Seguridad básica (JWT, validaciones) • SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
