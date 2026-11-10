import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Github, Linkedin, Code2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/PageHeader';
import FloatingOrbs from '@/components/FloatingOrbs';
import { profile } from '@/data/content';

const linkItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/sivaparvathi097', href: 'https://github.com/sivaparvathi097', icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/in/sivaparvathi', href: 'https://linkedin.com/in/sivaparvathi', icon: Linkedin },
  { label: 'LeetCode', value: 'leetcode.com/u/sivaparvathi097', href: 'https://leetcode.com/u/sivaparvathi097', icon: Code2 },
];

export default function Contact() {
  return (
    <PageTransition>
      <PageHeader
        index="09 — Contact"
        title="Let's connect"
        subtitle="I'm open to internships, collaborations, and project opportunities. Reach out through any of the channels below."
      />

      <section className="relative overflow-hidden py-10 sm:py-12">
        <FloatingOrbs
          orbs={[
            { className: 'left-[8%] top-[14%]', size: 'h-44 w-44', duration: 16, delay: 0 },
            { className: 'right-[6%] bottom-[16%]', size: 'h-52 w-52', duration: 20, delay: 2 },
          ]}
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {linkItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={i * 0.08}>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    whileHover={{ y: -4 }}
                    className="card card-hover flex items-center gap-4 p-6"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lavender text-primary">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">{item.label}</p>
                      <p className="mt-0.5 truncate font-heading text-sm font-medium text-text-primary">{item.value}</p>
                    </div>
                    <ArrowUpRight size={18} className="shrink-0 text-text-secondary transition-colors group-hover:text-primary" />
                  </motion.a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-text-secondary">
              <MapPin size={14} className="text-primary" />
              {profile.location}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
