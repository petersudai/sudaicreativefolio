'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal, StaggerReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import type { SocialProofConfig, ThemeConfig } from '@/lib/types';

interface SocialProofProps {
  socialProof: SocialProofConfig;
  theme: ThemeConfig;
}

export function SocialProof({ socialProof, theme }: SocialProofProps) {
  const isPhotographer = theme.creativeType === 'photographer';

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Section divider top */}
      <div className="section-divider mb-0" />

      {/* Stats */}
      <div className="container-xl py-16 md:py-20">
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: theme.accent }}>
            {socialProof.headline}
          </p>
          <h2 className={`font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-text ${!isPhotographer ? 'uppercase' : ''}`}>
            {socialProof.subheadline}
          </h2>
        </ScrollReveal>

        {/* Stats grid */}
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20" delay={0.15}>
          {socialProof.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center glass rounded-2xl p-6 md:p-8 border border-border hover:border-accent/30 transition-colors duration-500 group">
                <div className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-none text-gradient mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-xs text-muted uppercase tracking-wider">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Client logos — infinite marquee */}
        <ScrollReveal variant="fadeIn" className="mb-20">
          <p className="text-xs text-muted uppercase tracking-widest text-center mb-8">
            {isPhotographer ? 'As featured in' : 'Performed at'}
          </p>
          <div className="relative overflow-hidden">
            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, var(--color-bg), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, var(--color-bg), transparent)' }} />

            <div className="flex overflow-hidden">
              {/* Duplicate array for seamless loop */}
              <div className="marquee-track flex items-center gap-12 flex-shrink-0">
                {[...socialProof.logos, ...socialProof.logos].map((logo, i) => (
                  <span
                    key={`${logo.name}-${i}`}
                    className="font-display text-base md:text-xl font-bold whitespace-nowrap cursor-default tracking-tight transition-colors duration-300 hover:text-muted"
                    style={{ color: `color-mix(in srgb, ${theme.accent} 25%, #555)` }}
                  >
                    {logo.name}
                    <span className="ml-12 opacity-20 text-xs">◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section divider */}
        <div className="section-divider mb-20" />

        {/* Testimonials */}
        <ScrollReveal variant="fadeUp" className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: theme.accent }}>
            Testimonials
          </p>
          <h3 className="font-display font-bold text-2xl text-text">
            What people say
          </h3>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" delay={0.1}>
          {socialProof.testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="glass rounded-2xl p-8 border border-border hover:border-accent/25 transition-all duration-500 flex flex-col gap-6 h-full"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote size={24} className="opacity-30" style={{ color: theme.accent }} />
                <p className={`text-sm text-text/80 leading-relaxed flex-1 ${isPhotographer ? 'italic font-display' : ''}`}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: `${theme.accent}40` }}
                  >
                    <span style={{ color: theme.accent }}>
                      {t.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.author}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>

      <div className="section-divider" />
    </section>
  );
}
