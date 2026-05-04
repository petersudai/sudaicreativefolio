'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/utils';
import type { NavConfig, MetaConfig } from '@/lib/types';

interface NavbarProps {
  meta: MetaConfig;
  nav: NavConfig;
}

export function Navbar({ meta, nav }: NavbarProps) {
  const { isScrolled, progress } = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-accent z-[100] origin-left"
        style={{ width: `${progress * 100}%`, transition: 'width 0.1s linear' }}
      />

      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass-strong border-b border-border'
            : 'bg-transparent border-b border-transparent'
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-xl flex items-center justify-between h-16 md:h-20 min-w-0">
          {/* Logo */}
          <Link href="#" className="relative group flex-shrink-0">
            <span className="font-display text-lg md:text-2xl font-bold tracking-tight text-text group-hover:text-accent transition-colors duration-300 truncate">
              {meta.alias ?? meta.name}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-text transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href={nav.cta.href} variant="primary" size="sm">
              {nav.cta.label}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-text p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-bg"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {nav.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block py-4 font-display text-4xl font-bold text-text hover:text-accent transition-colors duration-300 border-b border-border"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  href={nav.cta.href}
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => setMenuOpen(false)}
                >
                  {nav.cta.label}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
