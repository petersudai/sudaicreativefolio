'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import type { AboutConfig, ThemeConfig } from '@/lib/types';

interface AboutProps {
  about: AboutConfig;
  theme: ThemeConfig;
}

export function About({ about, theme }: AboutProps) {
  const isPhotographer = theme.creativeType === 'photographer';

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: theme.accent }}
      />

      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <ScrollReveal variant="slideLeft" className={isPhotographer ? 'order-1' : 'order-1 lg:order-2'}>
            <div className="relative">
              {/* Main image */}
              <div className={`relative overflow-hidden ${isPhotographer ? 'aspect-[3/4]' : 'aspect-[4/5]'} rounded-2xl img-zoom`}>
                <Image
                  src={about.image}
                  alt={`About photo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating quote card — only on md+ to avoid mobile overflow */}
              {about.quote && (
                <motion.div
                  className="hidden md:block absolute -bottom-8 -right-6 lg:-right-10 max-w-[240px] glass-strong rounded-2xl p-5 shadow-2xl z-10"
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Quote size={20} className="mb-2 opacity-50" style={{ color: theme.accent }} />
                  <p className={`text-sm text-text leading-relaxed ${isPhotographer ? 'italic font-display' : 'font-medium'}`}>
                    {about.quote}
                  </p>
                  {about.quoteAuthor && (
                    <p className="text-xs text-muted mt-2">— {about.quoteAuthor}</p>
                  )}
                </motion.div>
              )}

              {/* Accent corner decoration */}
              <div
                className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 opacity-30 pointer-events-none"
                style={{ borderColor: theme.accent }}
              />
            </div>
          </ScrollReveal>

          {/* Text column */}
          <div className={isPhotographer ? 'order-2' : 'order-2 lg:order-1'}>

            {/* Mobile-only quote (hidden on md+) */}
            {about.quote && (
              <div className="md:hidden glass-strong rounded-2xl p-5 mb-8 border border-border">
                <Quote size={16} className="mb-2 opacity-50" style={{ color: theme.accent }} />
                <p className={`text-sm text-text leading-relaxed ${isPhotographer ? 'italic font-display' : 'font-medium'}`}>
                  {about.quote}
                </p>
                {about.quoteAuthor && (
                  <p className="text-xs text-muted mt-2">— {about.quoteAuthor}</p>
                )}
              </div>
            )}

            {/* Label */}
            <ScrollReveal variant="fadeIn">
              <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: theme.accent }}>
                About
              </p>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2 className="font-display font-bold leading-tight mb-8">
                <span className={`block ${isPhotographer ? 'text-[clamp(2.5rem,5vw,4rem)] italic' : 'text-[clamp(2.5rem,5vw,4rem)] uppercase'} text-text`}>
                  {about.headline}
                </span>
                <span
                  className={`block ${isPhotographer ? 'text-[clamp(2.5rem,5vw,4rem)] italic text-gradient' : 'text-[clamp(2.5rem,5vw,4rem)] uppercase text-gradient'}`}
                >
                  {about.subheadline}
                </span>
              </h2>
            </ScrollReveal>

            {/* Body paragraphs */}
            <StaggerReveal delay={0.2} className="space-y-4 mb-10">
              {about.body.map((para, i) => (
                <StaggerItem key={i}>
                  <p className="text-muted leading-relaxed text-[15px]">{para}</p>
                </StaggerItem>
              ))}
            </StaggerReveal>

            {/* Stats grid */}
            <ScrollReveal variant="fadeUp" delay={0.3} className="mb-10">
              <div className="grid grid-cols-2 gap-4">
                {about.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="glass rounded-xl p-4 border border-border hover:border-accent/30 transition-colors duration-300 group"
                  >
                    <span
                      className="block font-display text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                      style={{ color: theme.accent }}
                    >
                      {h.value}
                    </span>
                    <span className="text-xs text-muted uppercase tracking-wide mt-1 block">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal variant="fadeUp" delay={0.4}>
              <Button href={about.cta.href} variant="outline">
                {about.cta.label}
                <span className="ml-1">→</span>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
