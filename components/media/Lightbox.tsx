'use client';

import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '@/lib/types';

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  isOpen: boolean;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  isOpen,
}: LightboxProps) {
  const current = items[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKey]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Image */}
          <motion.div
            key={currentIndex}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] mx-4"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] md:aspect-[3/2] w-full rounded-2xl overflow-hidden">
              <Image
                src={current.thumbnail}
                alt={current.title}
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div>
                <p className="text-text font-display font-semibold">{current.title}</p>
                {current.subtitle && (
                  <p className="text-muted text-sm">{current.subtitle}</p>
                )}
              </div>
              <span className="text-muted text-sm">
                {currentIndex + 1} / {items.length}
              </span>
            </div>
          </motion.div>

          {/* Close */}
          <button
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-text hover:text-accent transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          {items.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-strong flex items-center justify-center text-text hover:text-accent transition-colors"
              onClick={onPrev}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Next */}
          {items.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-strong flex items-center justify-center text-text hover:text-accent transition-colors"
              onClick={onNext}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
