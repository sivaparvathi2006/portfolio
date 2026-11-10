import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ArrowLeft, X, Layers, Target, Wrench, ListChecks, GitBranch } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import TiltCard from '@/components/TiltCard';
import { projects, type Project } from '@/data/content';

const accentMap: Record<string, { chip: string; orb: string }> = {
  lavender: { chip: 'bg-lavender text-primary', orb: 'bg-lavender/50' },
  rose: { chip: 'bg-blush text-secondary-accent', orb: 'bg-blush/50' },
  blue: { chip: 'bg-sky-blue text-primary', orb: 'bg-sky-blue/50' },
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <PageTransition>
      <PageHeader
        index="03 — Projects"
        title="Featured resume projects"
        subtitle="Three projects I've built across semantic search, document processing, and conversational AI."
      />

      <section className="relative py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const a = accentMap[p.accent] ?? accentMap.lavender;
              return (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <TiltCard className="h-full">
                    <button
                      onClick={() => setSelected(p)}
                      className="group relative block h-full w-full overflow-hidden rounded-3xl text-left"
                    >
                      <span className="gradient-border absolute inset-0 rounded-3xl" />
                      <div className="card relative h-full border-transparent p-6 transition-all duration-300 group-hover:shadow-soft-lg">
                        <span
                          className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${a.orb} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                        />

                        {/* Screenshot placeholder */}
                        <div className="relative mb-4 flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-border bg-surface-secondary">
                          <span className="font-mono text-xs text-text-secondary">Screenshot placeholder</span>
                        </div>

                        <div className="relative flex items-center gap-2">
                          <span className={`grid h-8 w-8 place-items-center rounded-lg ${a.chip} font-mono text-xs font-medium`}>
                            0{i + 1}
                          </span>
                          <h3 className="font-heading text-lg font-semibold text-text-primary">{p.title}</h3>
                        </div>

                        <p className="relative mt-3 font-body text-sm leading-relaxed text-text-secondary">
                          {p.shortDescription}
                        </p>

                        <div className="relative mt-4 flex flex-wrap gap-1.5">
                          {p.tags.slice(0, 4).map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="relative mt-5 flex items-center gap-1.5 font-mono text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <ExternalLink size={13} />
                          View details
                        </div>
                      </div>
                    </button>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  );
}

function ProjectDetailModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-text-primary/30 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-surface p-6 shadow-soft-lg sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <p className="section-eyebrow">Project detail</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-text-primary sm:text-3xl">{project.title}</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary sm:text-base">
              {project.shortDescription}
            </p>

            {/* Screenshot placeholder */}
            <div className="mt-6 flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-border bg-surface-secondary">
              <span className="font-mono text-xs text-text-secondary">Screenshot to be added</span>
            </div>

            <div className="mt-6 space-y-6">
              <DetailSection icon={Target} title="Problem Statement" text={project.detail.problem} />
              <DetailSection icon={Layers} title="Objective" text={project.detail.objective} />
              <div>
                <SectionLabel icon={Wrench} title="Technology Stack" />
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.detail.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <DetailSection icon={ListChecks} title="Implementation" text={project.detail.implementation} />
              <div>
                <SectionLabel icon={ListChecks} title="Features" />
                <ul className="mt-3 space-y-2">
                  {project.detail.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-body text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <DetailSection icon={GitBranch} title="Architecture" text={project.detail.architecture} />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Link to="/contact" className="btn-primary" onClick={onClose}>
                Ask about this project
              </Link>
              <button onClick={onClose} className="btn-secondary">
                <ArrowLeft size={16} />
                Back to projects
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ icon: Icon, title }: { icon: typeof Target; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-lavender text-primary">
        <Icon size={14} />
      </span>
      <h3 className="font-heading text-base font-semibold text-text-primary">{title}</h3>
    </div>
  );
}

function DetailSection({ icon, title, text }: { icon: typeof Target; title: string; text: string }) {
  return (
    <div>
      <SectionLabel icon={icon} title={title} />
      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">{text}</p>
    </div>
  );
}
