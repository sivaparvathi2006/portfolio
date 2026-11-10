import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type TechLabel = {
  text: string;
  className: string;
  duration: number;
  delay: number;
};

const labels: TechLabel[] = [
  { text: 'Python', className: 'left-[3%] top-[30%]', duration: 11, delay: 0 },
  { text: 'AI', className: 'right-[5%] top-[24%]', duration: 13, delay: 1.5 },
  { text: 'ML', className: 'left-[8%] bottom-[28%]', duration: 10, delay: 0.8 },
  { text: 'LLM', className: 'right-[7%] bottom-[30%]', duration: 12, delay: 2.2 },
  { text: 'RAG', className: 'left-[44%] top-[6%]', duration: 9, delay: 1.1 },
  { text: 'React', className: 'right-[28%] top-[10%]', duration: 14, delay: 2.8 },
  { text: 'Java', className: 'left-[24%] top-[14%]', duration: 12, delay: 3.4 },
];

export default function TechLabels() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {labels.map((l) => (
        <motion.span
          key={l.text}
          className={`absolute ${l.className} font-mono text-[11px] font-medium tracking-wide text-primary/35`}
          animate={reduced ? undefined : { y: [0, -16, 0], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: l.duration, delay: l.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {l.text}
        </motion.span>
      ))}
    </div>
  );
}
