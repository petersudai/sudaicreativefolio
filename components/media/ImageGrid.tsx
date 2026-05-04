'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { Lightbox } from './Lightbox';
import type { PortfolioItem } from '@/lib/types';

interface ImageGridProps {
  items: PortfolioItem[];
}

export function ImageGrid({ items }: ImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden img-zoom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: (i % 3) * 0.08,
            }}
            onClick={() => open(i)}
          >
            <div className="relative w-full" style={{ aspectRatio: i % 3 === 1 ? '4/5' : '3/4' }}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <motion.div
                className="w-10 h-10 rounded-full glass-strong flex items-center justify-center"
                initial={{ scale: 0.6 }}
                whileInView={{ scale: 1 }}
              >
                <ZoomIn size={16} className="text-white" />
              </motion.div>
              <div className="text-center px-4">
                <p className="text-white text-sm font-display font-semibold">
                  {item.title}
                </p>
                {item.subtitle && (
                  <p className="text-white/70 text-xs">{item.subtitle}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        items={items}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
