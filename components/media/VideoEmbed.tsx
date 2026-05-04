'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PortfolioItem } from '@/lib/types';

interface VideoEmbedProps {
  item: PortfolioItem;
}

export function VideoEmbed({ item }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const embedSrc = item.videoId
    ? `https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`
    : item.src ?? '';

  return (
    <div className="rounded-2xl overflow-hidden glass border border-border group">
      <div className="relative aspect-video bg-surface-2 img-zoom">
        {playing ? (
          <iframe
            src={embedSrc}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Play button */}
            <motion.button
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setPlaying(true)}
              whileHover="hover"
              initial="rest"
              aria-label={`Play ${item.title}`}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_var(--color-accent-glow)]">
                  <Play size={20} fill="white" className="text-white ml-0.5" />
                </div>
              </motion.div>
            </motion.button>

            {/* Duration badge */}
            {item.duration && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-white">
                <Clock size={11} />
                {item.duration}
              </div>
            )}
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-display text-sm font-semibold text-text">{item.title}</p>
        {item.subtitle && (
          <p className="text-xs text-muted mt-0.5">{item.subtitle}</p>
        )}
      </div>
    </div>
  );
}
