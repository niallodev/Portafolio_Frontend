import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '../data/site';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-900/10 bg-sand-50/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-ink-700">
          © {year} {profile.name}. Diseñado y desarrollado por mí.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/12 bg-sand-50 text-ink-900 shadow-soft transition hover:bg-sand-200/70"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-900/12 bg-sand-50 text-ink-900 shadow-soft transition hover:bg-sand-200/70"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
//! 41
