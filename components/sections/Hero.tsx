'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import type { HeroConfig, MetaConfig, ThemeConfig } from '@/lib/types';

function AnimatedWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.22em] ${className ?? ''}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block leading-[1.1]">
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface HeroProps {
  hero: HeroConfig;
  meta: MetaConfig;
  theme: ThemeConfig;
}

export function Hero({ hero, meta, theme }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const isPhotographer = theme.creativeType === 'photographer';

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden noise-overlay"
      id="hero"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src={hero.backgroundImage}
          alt={`${meta.name} hero`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />

        {/* Gradient overlays */}
        {isPhotographer ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />
          </>
        )}
      </motion.div>

      {/* Accent glow sphere — DJ only */}
      {!isPhotographer && (
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none z-0"
          style={{ background: `radial-gradient(circle, ${theme.accent}, transparent 70%)` }}
        />
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 container-xl w-full pt-24 pb-20 md:pt-0 md:pb-32"
        style={{ y: contentY, opacity }}
      >
        {/* Badge */}
        {hero.badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <Tag variant="accent">
              <span
                className="w-1.5 h-1.5 rounded-full inline-block animate-pulse-slow"
                style={{ backgroundColor: theme.accent }}
              />
              {hero.badge}
            </Tag>
          </motion.div>
        )}

        {/* Headline */}
        <div className="mb-4">
          {isPhotographer ? (
            <h1 className="font-display font-bold leading-[1] tracking-tight">
              <span className="block text-[clamp(3.5rem,10vw,8rem)] text-text">
                <AnimatedWords text={hero.headline} delay={0.35} />
              </span>
              {hero.headlineAccent && (
                <span className="block text-[clamp(3.5rem,10vw,8rem)] text-gradient italic">
                  <AnimatedWords text={hero.headlineAccent} delay={0.55} />
                </span>
              )}
            </h1>
          ) : (
            <h1 className="font-display font-black leading-[1] tracking-tight uppercase">
              <span className="block text-[clamp(3rem,10vw,8rem)] text-text text-glow">
                <AnimatedWords text={hero.headline} delay={0.35} />
              </span>
              {hero.headlineAccent && (
                <span className="block text-[clamp(3rem,10vw,8rem)] text-gradient">
                  <AnimatedWords text={hero.headlineAccent} delay={0.6} />
                </span>
              )}
            </h1>
          )}
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-sm md:text-base text-muted tracking-widest uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {hero.subheadline}
        </motion.p>

        {/* Description */}
        <motion.p
          className={`text-base md:text-lg text-text/70 max-w-lg leading-relaxed mb-10 ${isPhotographer ? 'font-light' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {isPhotographer ? (
            <>
              <motion.a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-semibold text-base text-[#1a0d00]"
                style={{
                  background: 'linear-gradient(135deg, #F0C060, #C4A265)',
                  boxShadow: '0 0 36px rgba(240,192,96,0.55), 0 4px 20px rgba(196,162,101,0.4)',
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(240,192,96,0.75), 0 6px 30px rgba(196,162,101,0.55)' }}
                whileTap={{ scale: 0.97 }}
              >
                {hero.primaryCta.label}
              </motion.a>
              <motion.a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-semibold text-base text-white/90"
                style={{
                  border: '1.5px solid rgba(240,192,96,0.45)',
                  background: 'rgba(240,192,96,0.07)',
                  backdropFilter: 'blur(12px)',
                }}
                whileHover={{ scale: 1.04, borderColor: 'rgba(240,192,96,0.75)', background: 'rgba(240,192,96,0.14)' }}
                whileTap={{ scale: 0.97 }}
              >
                {hero.secondaryCta.label}
              </motion.a>
            </>
          ) : (
            <>
              <Button href={hero.primaryCta.href} variant="primary" size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </>
          )}
        </motion.div>

        {/* Stats */}
        {hero.stats.length > 0 && (
          <motion.div
            className="grid grid-cols-3 sm:flex sm:flex-wrap gap-x-8 gap-y-5 pt-6 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display text-xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </span>
                <span className="text-xs text-muted uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs text-muted tracking-widest uppercase">
          {hero.scrollLabel}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
