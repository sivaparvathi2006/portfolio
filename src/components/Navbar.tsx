import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks } from '@/data/content';

const primaryLinks = navLinks.filter((l) => l.path !== '/contact');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/85 backdrop-blur-xl border-b border-border/80' : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <NavLink to="/" className="group flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-lavender text-primary transition-all duration-300 group-hover:bg-periwinkle">
            <Sparkles size={18} strokeWidth={2} />
          </span>
          <span className="hidden sm:inline">Siva Parvathi<span className="text-primary">.</span></span>
        </NavLink>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {primaryLinks.map((l) => (
            <li key={l.path}>
              <NavLink
                to={l.path}
                className={({ isActive }) =>
                  `relative rounded-full px-3 py-2 font-body text-sm transition-colors duration-300 hover:text-text-primary ${
                    isActive ? 'text-text-primary' : 'text-text-secondary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-lavender"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contact" className="btn-primary hidden xl:inline-flex !px-5 !py-2.5">
          Let's talk
        </NavLink>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-text-primary xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-surface/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <NavLink
                    to={l.path}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-body text-sm transition-colors ${
                        isActive
                          ? 'bg-lavender text-text-primary'
                          : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
