'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 ease-premium select-none cursor-pointer';

const variants = {
  primary:
    'bg-accent text-white btn-glow rounded-full hover:opacity-90 active:scale-[0.97]',
  outline:
    'border border-accent text-accent rounded-full hover:bg-accent hover:text-white active:scale-[0.97]',
  ghost:
    'bg-white/5 text-text border border-border rounded-full hover:bg-white/10 active:scale-[0.97]',
  text: 'text-accent underline-offset-4 hover:underline p-0',
};

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  disabled,
  type = 'button',
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    variant !== 'text' && sizes[size],
    fullWidth && 'w-full',
    disabled && 'opacity-40 pointer-events-none',
    className
  );

  if (href) {
    const isExternal = external || href.startsWith('http');
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link
          href={href}
          className={classes}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
