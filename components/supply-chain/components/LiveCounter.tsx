'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LiveCounterProps {
  /** Number to display (e.g., 500) */
  count?: number;
  /** Label displayed after the number */
  label?: string;
}

export default function LiveCounter({ count = 500, label = 'emissions datasets processed today' }: LiveCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = count / (duration / 16);
    const step = () => {
      start += increment;
      if (start >= count) {
        setDisplay(count);
        return;
      }
      setDisplay(Math.floor(start));
      requestAnimationFrame(step);
    };
    step();
  }, [count]);

  return (
    <motion.div
      className="flex items-center gap-2 text-emerald-200 text-lg md:text-xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-mono font-semibold">{display.toLocaleString()}+</span>
      <span>{label}</span>
    </motion.div>
  );
}
