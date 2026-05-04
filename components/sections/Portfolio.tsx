'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioPlayer } from '@/components/media/AudioPlayer';
import { VideoEmbed } from '@/components/media/VideoEmbed';
import { ImageGrid } from '@/components/media/ImageGrid';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';
import type { PortfolioConfig, ThemeConfig } from '@/lib/types';

interface PortfolioProps {
  portfolio: PortfolioConfig;
  theme: ThemeConfig;
}

export function Portfolio({ portfolio, theme }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState(portfolio.tabs[0]?.id ?? '');
  const [activeAudio, setActiveAudio] = useState<string | null>(null);

  const currentItems = portfolio.items[activeTab] ?? [];
  const isPhotographer = theme.creativeType === 'photographer';

  return (
    <section id="portfolio" className="py-24 md:py-36">
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <ScrollReveal variant="fadeUp">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: theme.accent }}>
              {isPhotographer ? 'Portfolio' : 'Music'}
            </p>
            <h2 className="font-display font-bold leading-tight">
              <span className={`block text-[clamp(2.5rem,5vw,4rem)] text-text ${!isPhotographer ? 'uppercase' : 'italic'}`}>
                {portfolio.headline}
              </span>
              <span className="block text-[clamp(1.2rem,2.5vw,1.8rem)] text-muted font-normal mt-1">
                {portfolio.subheadline}
              </span>
            </h2>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal variant="fadeIn" delay={0.2}>
            <div className="flex gap-1 p-1 glass rounded-full border border-border self-start overflow-x-auto scrollbar-hide max-w-full">
              {portfolio.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    activeTab === tab.id
                      ? 'text-white shadow-sm'
                      : 'text-muted hover:text-text'
                  )}
                  style={
                    activeTab === tab.id
                      ? { backgroundColor: theme.accent }
                      : {}
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Audio tracks */}
            {currentItems[0]?.type === 'audio' && (
              <div className="space-y-3 max-w-3xl">
                {currentItems.map((item) => (
                  <AudioPlayer
                    key={item.id}
                    track={item}
                    isActive={activeAudio === item.id}
                    onActivate={() => setActiveAudio(item.id)}
                  />
                ))}
              </div>
            )}

            {/* Videos */}
            {currentItems[0]?.type === 'video' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.map((item) => (
                  <VideoEmbed key={item.id} item={item} />
                ))}
              </div>
            )}

            {/* Images */}
            {currentItems[0]?.type === 'image' && (
              <ImageGrid items={currentItems} />
            )}

            {currentItems.length === 0 && (
              <div className="py-24 text-center text-muted">
                <p>No items in this category yet.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
