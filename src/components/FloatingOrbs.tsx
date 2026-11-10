import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Orb = {
  className: string;
  size: string;
  duration: number;
  delay: number;
};

type Props = {
  orbs?: Orb[];
  className?: string;
};

const defaultOrbs: Orb[] = [
  { className: 'left-[-6%] top-[10%]', size: 'h-56 w-56', duration: 16, delay: 0 },
  { className: 'right-[-4%] top-[20%]', size: 'h-64 w-64', duration: 20, delay: 2 },
  { className: 'left-[30%] bottom-[-6%]', size: 'h-52 w-52', duration: 18, delay: 1 },
];

export default function FloatingOrbs({ orbs = defaultOrbs, className = '' }: Props) {
  const reduced = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute ${o.className} ${o.size} rounded-full blur-3xl`}
          style={{
            background:
              i % 3 === 0
                ? 'rgba(234, 227, 248, 0.32)'
                : i % 3 === 1
                ? 'rgba(247, 234, 242, 0.28)'
                : 'rgba(225, 239, 251, 0.28)',
          }}
          animate={reduced ? undefined : { y: [0, -24, 0], x: [0, 12, 0] }}
          transition={{ duration: o.duration, delay: o.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
