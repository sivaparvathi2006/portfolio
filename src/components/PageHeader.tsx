import Reveal from '@/components/Reveal';
import FloatingOrbs from '@/components/FloatingOrbs';

type Props = {
  index: string;
  title: string;
  subtitle?: string;
  hasOrbs?: boolean;
};

export default function PageHeader({ index, title, subtitle, hasOrbs = true }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-10 sm:pt-36 sm:pb-12">
      {hasOrbs && (
        <FloatingOrbs
          orbs={[
            { className: 'right-[-5%] top-[10%]', size: 'h-52 w-52', duration: 18, delay: 0 },
            { className: 'left-[-4%] top-[20%]', size: 'h-48 w-48', duration: 22, delay: 1.5 },
          ]}
        />
      )}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-eyebrow">{index}</p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-semibold leading-tight text-text-primary text-balance sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
