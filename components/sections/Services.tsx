'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';
import type { ServicesConfig, ThemeConfig } from '@/lib/types';

interface ServicesProps {
  services: ServicesConfig;
  theme: ThemeConfig;
}

export function Services({ services, theme }: ServicesProps) {
  const isPhotographer = theme.creativeType === 'photographer';

  return (
    <section id="services" className="py-24 md:py-36 bg-surface relative overflow-hidden">
      {/* Accent glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{ background: theme.accent }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="mb-16 max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: theme.accent }}>
            Services
          </p>
          <h2 className="font-display font-bold leading-tight">
            <span className={`block text-[clamp(2.5rem,5vw,4rem)] text-text ${!isPhotographer ? 'uppercase' : ''}`}>
              {services.headline}
            </span>
            <span className="block text-[clamp(1.2rem,2.5vw,1.8rem)] text-gradient font-bold mt-1">
              {services.subheadline}
            </span>
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{services.description}</p>
        </ScrollReveal>

        {/* Service cards */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6" delay={0.1}>
          {services.items.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className={cn(
                  'flex flex-col h-full rounded-2xl p-6 md:p-8 border transition-all duration-500 group relative overflow-hidden',
                  item.highlight
                    ? 'border-accent/40 bg-accent/5'
                    : 'glass border-border hover:border-accent/30'
                )}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Highlight glow */}
                {item.highlight && (
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${theme.accent}, transparent 60%)`,
                    }}
                  />
                )}

                {/* Popular badge */}
                {item.highlight && (
                  <div className="absolute top-0 right-6">
                    <span
                      className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg text-white"
                      style={{ backgroundColor: theme.accent }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3
                  className={`font-display font-bold mb-2 ${isPhotographer ? 'text-2xl' : 'text-2xl uppercase'} ${item.highlight ? 'text-gradient' : 'text-text'}`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Price */}
                {item.price && (
                  <div className="mb-6 pb-6 border-b border-border">
                    <span className="font-display text-3xl font-bold text-text">
                      {item.price}
                    </span>
                    {item.priceNote && (
                      <p className="text-xs text-muted mt-1">{item.priceNote}</p>
                    )}
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${theme.accent}20` }}
                      >
                        <Check size={11} style={{ color: theme.accent }} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href={item.cta.href}
                  variant={item.highlight ? 'primary' : 'outline'}
                  fullWidth
                >
                  {item.cta.label}
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Footer note */}
        {services.footerNote && (
          <ScrollReveal variant="fadeIn" delay={0.2} className="mt-8 text-center">
            <p className="text-sm text-muted">{services.footerNote}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
