import { GraduationCap, Award } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import { education } from '@/data/content';

export default function Education() {
  return (
    <PageTransition>
      <PageHeader
        index="05 — Education"
        title="Academic timeline"
        subtitle="My academic background in Artificial Intelligence, Data Science, and foundational studies."
      />

      <section className="relative py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="relative mt-6">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-periwinkle via-lavender to-blush" />

            <div className="space-y-8">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.1}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-surface shadow-glow-lavender" />
                    <div className="card card-hover p-6">
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lavender text-primary">
                          <GraduationCap size={20} />
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="font-heading text-lg font-semibold text-text-primary">{e.degree}</h3>
                            <span className="font-mono text-xs text-text-secondary">{e.period}</span>
                          </div>
                          <p className="mt-1 font-heading text-sm font-medium text-primary">{e.institution}</p>
                          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-surface-secondary px-4 py-2">
                            <Award size={15} className="text-secondary-accent" />
                            <span className="font-mono text-sm font-medium text-text-primary">{e.detail}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
