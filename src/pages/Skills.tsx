import { motion } from 'framer-motion';
import { Brain, Code2, Sparkles, Globe, Database, Wrench, Cpu, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import { skillGroups } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  sparkles: Sparkles,
  globe: Globe,
  database: Database,
  wrench: Wrench,
  cpu: Cpu,
};

const accents = [
  'text-primary bg-lavender hover:shadow-glow-lavender',
  'text-secondary-accent bg-blush hover:shadow-glow-rose',
  'text-primary bg-sky-blue hover:shadow-glow-lavender',
  'text-primary bg-mint/50 hover:shadow-glow-lavender',
  'text-primary bg-orchid hover:shadow-glow-lavender',
  'text-secondary-accent bg-blush hover:shadow-glow-rose',
  'text-primary bg-sky-blue hover:shadow-glow-lavender',
];

export default function Skills() {
  return (
    <PageTransition>
      <PageHeader
        index="02 — Technical Skills"
        title="The stack behind the systems"
        subtitle="Languages, frameworks, and tools I use across AI, backend, and frontend work."
      />

      <section className="relative bg-surface-secondary/60 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => {
              const Icon = iconMap[group.icon] ?? Brain;
              return (
                <Reveal key={group.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`card h-full p-6 transition-shadow duration-300 ${accents[i % accents.length]}`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                        className={`grid h-10 w-10 place-items-center rounded-xl bg-surface/70 ${accents[i % accents.length].split(' ')[0]}`}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </motion.span>
                      <p className="font-heading text-base font-semibold text-text-primary">{group.title}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
