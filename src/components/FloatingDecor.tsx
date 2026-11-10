import { motion } from 'framer-motion';
import { Sparkles, Hexagon, Atom, Binary, Flower2 } from 'lucide-react';

type FloatItem = {
  Icon: typeof Sparkles;
  className: string;
  duration: number;
  size: number;
  delay: number;
};

const items: FloatItem[] = [
  { Icon: Sparkles, className: 'text-primary/40', duration: 9, size: 22, delay: 0 },
  { Icon: Hexagon, className: 'text-secondary-accent/30', duration: 12, size: 28, delay: 1.2 },
  { Icon: Atom, className: 'text-primary/30', duration: 10, size: 24, delay: 0.6 },
  { Icon: Binary, className: 'text-periwinkle', duration: 14, size: 20, delay: 2 },
  { Icon: Flower2, className: 'text-secondary-accent/30', duration: 11, size: 26, delay: 1.8 },
];

export default function FloatingDecor() {
  const positions = [
    'left-[6%] top-[18%]',
    'right-[8%] top-[12%]',
    'left-[14%] bottom-[16%]',
    'right-[12%] bottom-[22%]',
    'left-[46%] top-[8%]',
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map(({ Icon, className, duration, size, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${positions[i]} ${className}`}
          animate={{ y: [0, -22, 0], x: [0, 8, 0], rotate: [0, 8, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
      {/* soft gradient orbs */}
      <div className="absolute left-[-4%] top-[20%] h-72 w-72 rounded-full bg-lavender/40 blur-3xl" />
      <div className="absolute right-[-2%] top-[8%] h-80 w-80 rounded-full bg-blush/40 blur-3xl" />
      <div className="absolute left-[40%] bottom-[4%] h-64 w-64 rounded-full bg-sky-blue/40 blur-3xl" />
    </div>
  );
}
