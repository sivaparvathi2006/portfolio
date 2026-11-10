import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <PageTransition>
      <PageHeader
        index="04 — Experience"
        title="Internships & practical work"
        subtitle="Three internships across AI/Data Science, Java development, and automation testing."
      />

      <section className="relative bg-surface-secondary/60 py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="relative mt-6">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-periwinkle via-lavender to-blush" />

            <div className="space-y-8">
              {experience.map((e, i) => (
                <Reveal key={e.role + e.company} delay={i * 0.1}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-surface shadow-glow-lavender" />
                    <div className="card card-hover p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-heading text-lg font-semibold text-text-primary">{e.role}</h3>
                        <span className="font-mono text-xs text-text-secondary">{e.period}</span>
                      </div>
                      <p className="mt-1 font-heading text-sm font-medium text-primary">{e.company}</p>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">{e.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
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
