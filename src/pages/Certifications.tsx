import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import { certifications } from '@/data/content';

export default function Certifications() {
  return (
    <PageTransition>
      <PageHeader
        index="06 — Certifications"
        title="Professional certifications"
        subtitle="Verified certifications across Generative AI, cloud, databases, and ML fundamentals."
      />

      <section className="relative bg-surface-secondary/60 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <div className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lavender text-primary">
                      <Award size={20} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold leading-snug text-text-primary">{c.name}</h3>
                      <p className="mt-1 font-mono text-xs text-text-secondary">{c.issuer}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-5">
                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary transition-colors hover:text-secondary-accent"
                      >
                        <ExternalLink size={13} />
                        View credential
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary">
                        <BadgeCheck size={13} className="text-periwinkle" />
                        Credential link to be added
                      </span>
                    )}
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
