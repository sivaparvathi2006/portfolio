import { BookOpen, FileText, ExternalLink } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import { research } from '@/data/content';

export default function Research() {
  return (
    <PageTransition>
      <PageHeader
        index="08 — Research"
        title="Publications & research interests"
        subtitle="Conference presentations on deepfake detection and AI-powered rural healthcare."
      />

      <section className="relative bg-surface-secondary/60 py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Conference presentations</p>
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                Below are the conferences where I've presented my work. Paper titles, authors, DOIs, and publication
                dates will be added as they become available.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 space-y-6">
            {research.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className="card card-hover p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lavender text-primary">
                      <FileText size={20} />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-text-primary">{r.title}</h3>
                      <p className="mt-1 font-mono text-xs text-primary">{r.venue}</p>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">{r.description}</p>
                      <div className="mt-4">
                        {r.link ? (
                          <a
                            href={r.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary transition-colors hover:text-secondary-accent"
                          >
                            <ExternalLink size={13} />
                            View publication
                          </a>
                        ) : (
                          <span className="font-mono text-xs text-text-secondary">
                            Publication link to be added
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
