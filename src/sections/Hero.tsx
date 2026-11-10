import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, MapPin } from 'lucide-react';
import { profile, stats } from '@/data/content';
import FloatingDecor from '@/components/FloatingDecor';
import TechLabels from '@/components/TechLabels';
import TypingText from '@/components/TypingText';
import { socialIcons } from '@/components/socialIcons';

const roles = ['AI & DS Student', 'ML Developer', 'NLP & RAG Builder', 'Automation Tester'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-32 pb-20 sm:pt-40 sm:pb-28">
      <FloatingDecor />
      <TechLabels />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="chip"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            B.Tech AI & Data Science
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary text-balance sm:text-6xl"
          >
            Siva Parvathi N.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex items-center font-heading text-2xl font-medium sm:text-3xl"
          >
            <span className="gradient-text">
              <TypingText words={roles} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl font-body text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Building{' '}
            <span className="font-medium text-primary">practical, intelligent systems</span>{' '}
            — from semantic search and RAG to computer vision and automation testing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-7 flex items-center gap-2 font-mono text-xs text-text-secondary"
          >
            <MapPin size={14} className="text-primary" />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/projects" className="btn-primary">
              View my work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-periwinkle hover:bg-lavender hover:text-primary hover:shadow-glow-lavender"
                >
                  {Icon ? <Icon size={18} /> : null}
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-lavender via-blush to-sky-blue opacity-70 blur-2xl" />
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="profile-glow relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft-lg"
          >
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-secondary/90 to-transparent p-5">
              <p className="font-mono text-xs text-text-secondary">~/siva-parvathi</p>
              <p className="font-heading text-sm font-medium text-text-primary">AI & DS · RMKCET</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 top-10 rounded-2xl border border-border bg-surface px-4 py-3 shadow-glow-lavender"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">CGPA</p>
            <p className="font-heading text-sm font-medium text-text-primary">9.04</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -left-4 bottom-16 rounded-2xl border border-border bg-surface px-4 py-3 shadow-glow-rose"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">HSC</p>
            <p className="font-heading text-sm font-medium text-secondary-accent">93%</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-5 sm:mt-20 sm:grid-cols-4 sm:px-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="card card-hover p-5 text-center">
            <p className="font-heading text-3xl font-semibold text-primary sm:text-4xl">{s.value}</p>
            <p className="mt-1 font-body text-xs text-text-secondary sm:text-sm">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mx-auto mt-14 flex w-fit flex-col items-center gap-1 text-text-secondary"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Explore</span>
        <Link to="/about">
          <ArrowDown size={16} className="text-primary" />
        </Link>
      </motion.div>
    </section>
  );
}
