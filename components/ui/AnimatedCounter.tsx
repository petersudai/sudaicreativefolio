'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

function extractNumber(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [display, setDisplay] = useState('0');
  const { num, suffix: valueSuffix } = extractNumber(value);
  const combinedSuffix = suffix || valueSuffix;

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const isFloat = num % 1 !== 0;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, num, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{combinedSuffix}
    </span>
  );
}
