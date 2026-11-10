import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Props = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export default function TypingText({
  words,
  className = '',
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1600,
}: Props) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    if (reduced) {
      setDisplay(words[0] ?? '');
      return;
    }

    const current = words[index] ?? '';

    if (phase === 'typing') {
      if (display.length < current.length) {
        const t = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('pausing'), pause);
      return () => clearTimeout(t);
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), pause);
      return () => clearTimeout(t);
    }

    // deleting
    if (display.length > 0) {
      const t = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), deletingSpeed);
      return () => clearTimeout(t);
    }
    setPhase('typing');
    setIndex((i) => (i + 1) % words.length);
  }, [display, phase, index, words, typingSpeed, deletingSpeed, pause, reduced]);

  return (
    <span className={className}>
      {reduced ? display : display}
      {!reduced && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
          className="ml-0.5 inline-block w-[2px] -translate-y-0.5 self-stretch bg-primary"
          style={{ height: '0.9em' }}
        />
      )}
    </span>
  );
}
