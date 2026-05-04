'use client';

import { motion, type Variants } from 'framer-motion';
import { variants as defaultVariants } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: keyof typeof defaultVariants;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const selected = defaultVariants[variant] as Variants;
  const visibleWithDelay = {
    ...selected.visible,
    transition: {
      ...(typeof selected.visible === 'object' && 'transition' in selected.visible
        ? (selected.visible as { transition?: Record<string, unknown> }).transition
        : {}),
      delay,
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px', amount }}
      variants={{
        hidden: selected.hidden,
        visible: visibleWithDelay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
