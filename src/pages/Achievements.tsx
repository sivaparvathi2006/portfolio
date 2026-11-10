import { Trophy, Medal, Users, BookOpen, Target, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import { achievements } from '@/data/content';

const typeConfig: Record<string, { icon: LucideIcon; accent: string }> = {
  award: { icon: Trophy, accent: 'bg-lavender text-primary' },
  competition: { icon: Target, accent: 'bg-blush text-secondary-accent' },
  academic: { icon: BookOpen, accent: 'bg-sky-blue text-primary' },
  leadership: { icon: Users, accent: 'bg-mint/40 text-primary' },
  hackathon: { icon: Medal, accent: 'bg-lavender text-primary' },
};

export default function Achievements() {
  return (
    <PageTransition>
      <PageHeader
        index="07 — Achievements"
        title="Awards, hackathons & leadership"
        subtitle="Recognition from academic excellence awards, state and national hackathons, and technical leadership roles."
      />

      <section className="relative py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => {
              const cfg = typeConfig[a.type] ?? typeConfig.award;
              const Icon = cfg.icon;
              return (
                <Reveal key={a.title} delay={i * 0.06}>
                  <div className="card card-hover h-full p-6">
                    <div className="flex items-start gap-3">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${cfg.accent}`}>
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold leading-snug text-text-primary">{a.title}</h3>
                        <p className="mt-1 font-mono text-xs text-primary">{a.context}</p>
                      </div>
                    </div>
                    <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">{a.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
