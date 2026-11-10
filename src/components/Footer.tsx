import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { profile, navLinks } from '@/data/content';
import { socialIcons } from '@/components/socialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-medium text-text-primary">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-lavender text-primary">
                <Sparkles size={15} />
              </span>
              Siva Parvathi N.
            </div>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-text-secondary">
              AI & Data Science undergraduate building practical, intelligent systems.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Navigate</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <NavLink
                    to={l.path}
                    className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Connect</p>
            <div className="mt-3 flex items-center gap-2">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-periwinkle hover:bg-lavender hover:text-primary"
                  >
                    {Icon ? <Icon size={16} /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-5 text-center">
          <p className="font-mono text-xs text-text-secondary">
            © {new Date().getFullYear()} Siva Parvathi N. · Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
