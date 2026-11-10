import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, BrainCircuit, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import FloatingOrbs from '@/components/FloatingOrbs';
import { about } from '@/data/content';

const highlightIcons = [GraduationCap, BookOpen, BrainCircuit, MapPin];
const highlightAccents = [
  'bg-lavender text-primary',
  'bg-blush text-secondary-accent',
  'bg-sky-blue text-primary',
  'bg-mint/50 text-primary',
];

const interestAccents = [
  'bg-lavender text-primary border-lavender',
  'bg-blush text-secondary-accent border-blush',
  'bg-sky-blue text-primary border-sky-blue',
  'bg-mint/50 text-primary border-mint',
  'bg-orchid text-primary border-orchid',
  'bg-lavender text-primary border-lavender',
  'bg-blush text-secondary-accent border-blush',
];

export default function About() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-mesh pt-32 pb-12 sm:pt-36 sm:pb-14">
        <FloatingOrbs
          orbs={[
            { className: 'right-[-5%] top-[10%]', size: 'h-52 w-52', duration: 18, delay: 0 },
            { className: 'left-[-4%] top-[24%]', size: 'h-48 w-48', duration: 22, delay: 1.5 },
          ]}
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="section-eyebrow">01 — About Me</p>
            <h1 className="mt-3 max-w-3xl font-heading text-3xl font-semibold leading-tight text-text-primary text-balance sm:text-5xl">
              {about.headline}
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              {about.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="relative py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.highlights.map((h, i) => {
              const Icon = highlightIcons[i] ?? GraduationCap;
              return (
                <Reveal key={h.label} delay={i * 0.08}>
                  <div className={`card card-hover flex items-center gap-4 p-5 ${highlightAccents[i]}`}>
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface/70`}>
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-heading text-xl font-semibold text-text-primary">{h.value}</p>
                      <p className="font-body text-xs text-text-secondary">{h.label}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas of Interest + My Approach — two column */}
      <section className="relative bg-surface-secondary/70 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="card h-full p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-primary" />
                  <h2 className="font-heading text-xl font-semibold text-text-primary">Areas of Interest</h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {about.interests.map((interest, i) => (
                    <span
                      key={interest}
                      className={`inline-flex items-center rounded-full border px-4 py-2 font-body text-sm font-medium ${interestAccents[i % interestAccents.length]}`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card h-full p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <BrainCircuit size={18} className="text-primary" />
                  <h2 className="font-heading text-xl font-semibold text-text-primary">My Approach</h2>
                </div>
                <p className="mt-5 font-body text-base leading-relaxed text-text-secondary">
                  {about.approach}
                </p>
                <Link to="/projects" className="btn-secondary mt-6">
                  See my projects
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
