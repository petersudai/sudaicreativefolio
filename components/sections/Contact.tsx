'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerReveal, StaggerItem } from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';
import type { ContactConfig, ThemeConfig } from '@/lib/types';

interface ContactProps {
  contact: ContactConfig;
  theme: ThemeConfig;
}

const platformColors: Record<string, string> = {
  Instagram: '#E1306C',
  SoundCloud: '#FF5500',
  Spotify: '#1DB954',
  Behance: '#1769FF',
  LinkedIn: '#0A66C2',
  Twitter: '#1DA1F2',
  Pinterest: '#E60023',
  Facebook: '#1877F2',
};

export function Contact({ contact, theme }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isPhotographer = theme.creativeType === 'photographer';

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formState.name.trim()) e.name = 'Name is required';
    if (!formState.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formState.email)) e.email = 'Invalid email address';
    if (!formState.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    cn(
      'w-full bg-surface-2 border rounded-xl px-4 py-3 text-sm text-text placeholder-muted/50 outline-none transition-all duration-300',
      errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : 'border-border focus:border-accent'
    );

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-surface">
      {/* Glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-72 md:w-[600px] h-48 md:h-[300px] rounded-full opacity-[0.06] blur-[80px] md:blur-[100px] pointer-events-none"
        style={{ background: theme.accent }}
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: theme.accent }}>
            Contact
          </p>
          <h2 className="font-display font-bold leading-tight">
            <span className={`block text-[clamp(2.5rem,5vw,4rem)] text-text ${!isPhotographer ? 'uppercase' : ''}`}>
              {contact.headline}
            </span>
            <span className="block text-[clamp(2.5rem,5vw,4rem)] text-gradient">
              {contact.subheadline}
            </span>
          </h2>
          <p className="mt-4 text-muted leading-relaxed">{contact.description}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left sidebar — info */}
          <StaggerReveal className="lg:col-span-2 space-y-8" delay={0.1}>
            {/* Email */}
            <StaggerItem>
              <div className="glass rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${theme.accent}20` }}
                  >
                    <Mail size={16} style={{ color: theme.accent }} />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted">Direct Email</p>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-medium text-text group-hover:text-accent transition-colors duration-300 break-all"
                >
                  {contact.email}
                </a>
              </div>
            </StaggerItem>

            {/* Booking */}
            <StaggerItem>
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between glass rounded-2xl p-6 border border-border hover:border-accent/40 transition-all duration-300 group"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted mb-1">Quick Booking</p>
                  <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                    {contact.bookingLabel}
                  </p>
                </div>
                <ExternalLink size={16} className="text-muted group-hover:text-accent transition-colors flex-shrink-0" />
              </a>
            </StaggerItem>

            {/* Socials */}
            <StaggerItem>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted mb-4">Find me on</p>
                <div className="space-y-3">
                  {contact.socials.map((s) => (
                    <a
                      key={s.platform}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: platformColors[s.platform] ?? theme.accent }}
                      >
                        <SocialIcon platform={s.platform} size={15} />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{s.platform}</p>
                        <p className="text-sm text-text group-hover:text-accent transition-colors duration-300">
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>

          {/* Right — form */}
          <ScrollReveal variant="slideRight" delay={0.15} className="lg:col-span-3">
            <div className="glass-strong rounded-2xl p-8 md:p-10 border border-border">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <CheckCircle size={48} style={{ color: theme.accent }} />
                    <h3 className="font-display text-2xl font-bold text-text">
                      Message Sent!
                    </h3>
                    <p className="text-muted max-w-xs">
                      Thanks for reaching out. I'll get back to you within 48 hours.
                    </p>
                    <Button onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }} variant="ghost" size="sm">
                      Send another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Booking enquiry / Collaboration / Other"
                        value={formState.subject}
                        onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                        className={inputClass('subject')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell me about your project, event, or idea..."
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className={cn(inputClass('message'), 'resize-none')}
                      />
                      {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={submitting}
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send size={16} />
                        </span>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
