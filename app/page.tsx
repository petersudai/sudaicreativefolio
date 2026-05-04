'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Syne, Inter } from 'next/font/google';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  ArrowRight,
  Music2,
  ImageIcon,
  Globe,
  Play,
  Mail,
  CalendarDays,
  MapPin,
  Zap,
} from 'lucide-react';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const ease = [0.16, 1, 0.3, 1] as const;

const DEMOS = [
  {
    id: 'dj',
    href: '/dj',
    number: '01',
    category: 'DJ / Music Artist',
    name: 'AMARA',
    tagline: 'Electronic music producer · Nairobi born, Berlin based',
    description:
      'A full artist identity for a touring DJ. Dark and cinematic, with a custom audio player, live set videos, event gallery, and a tiered booking section.',
    accent: '#7C5FF0',
    accentSoft: 'rgba(124,95,240,0.12)',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=85',
    features: ['Custom audio player', 'Live set video gallery', 'Booking tiers', 'Event photo grid'],
    cta: 'View AMARA demo',
  },
  {
    id: 'photo',
    href: '/photographer',
    number: '02',
    category: 'Photographer',
    name: 'Nadia Osei',
    tagline: 'Editorial photographer · Lagos born, Nairobi based',
    description:
      'A refined editorial portfolio for a photographer shooting internationally. Masonry gallery with full-screen lightbox, session booking, and publication credits.',
    accent: '#C4A265',
    accentSoft: 'rgba(196,162,101,0.12)',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85',
    features: ['Masonry gallery', 'Full-screen lightbox', 'Category filtering', 'Session booking form'],
    cta: 'View Nadia Osei demo',
  },
];

const BENTO = [
  {
    icon: <Music2 size={22} />,
    label: 'DJs & Music Artists',
    body: 'Audio players, live set archives, tour schedules, booking pages.',
    span: 'md:col-span-7',
    accent: '#7C5FF0',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80',
  },
  {
    icon: <ImageIcon size={22} />,
    label: 'Photographers',
    body: 'Masonry galleries, lightboxes, session booking, publication credits.',
    span: 'md:col-span-5',
    accent: '#C4A265',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
  },
  {
    icon: <Globe size={22} />,
    label: 'Visual Creatives',
    body: 'Designers, directors, illustrators, artists.',
    span: 'md:col-span-5',
    accent: '#4FC3F7',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    icon: <Zap size={22} />,
    label: 'Built for performance',
    body: 'Fast, accessible, responsive. Works flawlessly on every device.',
    span: 'md:col-span-7',
    accent: '#7C5FF0',
    image: null,
  },
];

const PROCESS = [
  {
    n: '01',
    title: 'We talk',
    body: 'A short call where I learn about your work, your audience and what you want people to do when they land on your site. No forms, no briefs. Just a conversation.',
  },
  {
    n: '02',
    title: 'I design and build',
    body: 'Everything from scratch. Layout, animations, copy direction, colours, fonts. All built around you specifically.',
  },
  {
    n: '03',
    title: 'You launch',
    body: 'You get something that genuinely represents who you are. A website you are actually proud to send people to.',
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$499',
    tagline: 'A clean, professional presence online.',
    note: 'One time payment',
    features: [
      'Single page portfolio',
      '5 core sections',
      'Contact form included',
      'Mobile responsive',
      '14 day delivery',
    ],
    cta: 'Get started',
    href: 'https://calendly.com/petersudai',
    popular: false,
  },
  {
    name: 'Studio',
    price: '$1,499',
    tagline: 'The full creative portfolio experience.',
    note: 'Most popular',
    features: [
      'Full multi-section website',
      'Custom animations',
      'Gallery with lightbox',
      'Booking integration',
      'Audio or video player',
      '21 day delivery',
    ],
    cta: 'Book a call',
    href: 'https://calendly.com/petersudai',
    popular: true,
  },
  {
    name: 'Signature',
    price: '$2,999+',
    tagline: 'For those who want something truly distinct.',
    note: 'Custom quote',
    features: [
      'Everything in Studio',
      'Advanced motion design',
      'Custom audio and video integration',
      'Brand identity direction',
      'Priority support',
      'Retainer available',
    ],
    cta: 'Let us talk',
    href: 'mailto:hello@petersudai.com',
    popular: false,
  },
];

const STATS = [
  { num: '12+', label: 'Sites launched' },
  { num: '<2wk', label: 'Average build' },
  { num: '$499', label: 'Starting price' },
  { num: '100%', label: 'Custom built' },
];

const MARQUEE_ITEMS = [
  'Creative Developer',
  'Nairobi, Kenya',
  'Custom Portfolios',
  'DJs & Artists',
  'Photographers',
  'Visual Creatives',
  'Working Worldwide',
  'Built From Scratch',
];

// ── Animated word-by-word reveal ────────────────────────────────
function AnimatedWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.3em] justify-center ${className ?? ''}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block leading-[1.1]">
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ── Demo card with 3-D tilt ──────────────────────────────────────
function TiltCard({ demo, i }: { demo: (typeof DEMOS)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 30 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: i * 0.14, ease }}
    >
      <Link href={demo.href} className="group block">
        <div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden border transition-colors duration-700"
          style={{ borderColor: `${demo.accent}25`, background: 'rgba(255,255,255,0.018)' }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 50% 70% at ${i === 0 ? '15%' : '85%'} 50%, ${demo.accentSoft}, transparent 60%)` }}
          />

          <div className={`flex flex-col ${i === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Image */}
            <div className="relative lg:w-[55%] h-56 sm:h-72 md:h-80 lg:h-[480px] overflow-hidden">
              <Image
                src={demo.image}
                alt={demo.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(${i === 0 ? 'to right' : 'to left'}, transparent 45%, #080808 100%), linear-gradient(to top, #080808 0%, transparent 45%)` }}
              />
              <div className="absolute inset-0 mix-blend-color opacity-15 group-hover:opacity-25 transition-opacity duration-500" style={{ background: demo.accent }} />

              <div className="absolute top-5 left-5 md:top-7 md:left-7">
                <span
                  className="text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm"
                  style={{ background: `${demo.accent}25`, color: demo.accent, border: `1px solid ${demo.accent}45` }}
                >
                  {demo.number}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                <Play size={11} fill={demo.accent} style={{ color: demo.accent }} />
                <span className="text-xs font-semibold" style={{ color: demo.accent }}>Live demo</span>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-[45%] flex flex-col justify-center p-7 md:p-10 lg:p-16">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-3 font-semibold" style={{ color: demo.accent }}>
                {demo.category}
              </p>
              <h3 className="font-display font-black text-[clamp(2rem,4.5vw,3rem)] text-[#f0f0f0] leading-none uppercase mb-2 tracking-tight">
                {demo.name}
              </h3>
              <p className="text-xs text-[#666] mb-5 tracking-wide">{demo.tagline}</p>
              <p className="text-[#8a8a8a] text-sm leading-relaxed mb-7">{demo.description}</p>

              <div className="flex flex-wrap gap-2 mb-9">
                {demo.features.map((f) => (
                  <motion.span
                    key={f}
                    className="text-[11px] px-3 py-1.5 rounded-full font-medium"
                    style={{ background: `${demo.accent}12`, color: demo.accent, border: `1px solid ${demo.accent}25` }}
                    whileHover={{ scale: 1.06 }}
                  >
                    {f}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="flex items-center gap-3 text-sm font-semibold"
                style={{ color: demo.accent }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                {demo.cta}
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${demo.accent}18`, border: `1px solid ${demo.accent}35` }}
                >
                  <ArrowRight size={13} />
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Main page ────────────────────────────────────────────────────
export default function PeterSudaiPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Floating CTA visibility
  const [showFloat, setShowFloat] = useState(false);
  useEffect(() => {
    const handler = () => setShowFloat(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Blob tracking
  const blobX = useMotionValue(0);
  const blobY = useMotionValue(0);
  const blobXS = useSpring(blobX, { stiffness: 40, damping: 18 });
  const blobYS = useSpring(blobY, { stiffness: 40, damping: 18 });
  useEffect(() => {
    const fn = (e: MouseEvent) => { blobX.set(e.clientX - window.innerWidth / 2); blobY.set(e.clientY - window.innerHeight / 2); };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, [blobX, blobY]);

  return (
    <div
      className={`${syne.variable} ${inter.variable} bg-[#080808] text-[#f0f0f0] overflow-x-hidden`}
      style={{
        '--color-bg': '#080808',
        '--color-surface': '#111111',
        '--color-surface-2': '#1a1a1a',
        '--color-border': 'rgba(255,255,255,0.08)',
        '--color-border-strong': 'rgba(255,255,255,0.14)',
        '--color-text': '#f0f0f0',
        '--color-muted': '#909090',
        '--font-display': 'var(--font-display)',
        '--font-body': 'var(--font-body)',
      } as React.CSSProperties}
    >

      {/* ── Floating CTA ── */}
      <motion.a
        href="https://calendly.com/petersudai"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white shadow-xl"
        style={{ background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)', boxShadow: '0 0 30px rgba(124,95,240,0.5)' }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={showFloat ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease }}
        whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(124,95,240,0.75)' }}
        whileTap={{ scale: 0.95 }}
      >
        <CalendarDays size={14} /> Book a call
      </motion.a>

      {/* ── Navbar ── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12 h-16 md:h-[72px]"
        style={{ backgroundColor: 'rgba(8,8,8,0.88)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <motion.span className="font-display text-base md:text-lg font-bold tracking-tight flex-shrink-0" whileHover={{ scale: 1.02 }}>
          Peter <span style={{ color: '#7C5FF0' }}>Sudai</span>
        </motion.span>

        <div className="hidden md:flex items-center gap-8">
          {[{ label: 'Work', href: '#work' }, { label: 'Process', href: '#process' }, { label: 'Pricing', href: '#pricing' }, { label: 'Contact', href: '#contact' }].map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, ease }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="https://calendly.com/petersudai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 md:px-5 md:py-3 rounded-full text-white"
          style={{ background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(124,95,240,0.55)' }}
          whileTap={{ scale: 0.97 }}
        >
          <CalendarDays size={14} />
          <span className="hidden sm:inline">Book a call</span>
          <span className="sm:hidden">Book</span>
        </motion.a>
      </motion.nav>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-1/2 relative overflow-hidden">
            <Image src={DEMOS[0].image} alt="DJ" fill priority className="object-cover object-center" sizes="50vw" />
            <div className="absolute inset-0 bg-[#080808]/80" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 20%, #080808 100%)' }} />
          </div>
          <div className="w-1/2 relative overflow-hidden">
            <Image src={DEMOS[1].image} alt="Photography" fill priority className="object-cover object-center" sizes="50vw" />
            <div className="absolute inset-0 bg-[#080808]/80" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, transparent 20%, #080808 100%)' }} />
          </div>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.15) 30%, rgba(8,8,8,0.15) 65%, #080808 100%)' }} />

        {/* Mouse blob */}
        <motion.div
          className="absolute z-[1] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ x: blobXS, y: blobYS, background: 'radial-gradient(circle, rgba(124,95,240,0.18), rgba(79,195,247,0.1), transparent 65%)', filter: 'blur(60px)' }}
        />

        {/* Static glows */}
        <div className="absolute left-[22%] top-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] rounded-full pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(124,95,240,0.22), transparent 65%)', filter: 'blur(70px)' }} />
        <div className="absolute right-[22%] top-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] rounded-full pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(196,162,101,0.18), transparent 65%)', filter: 'blur(70px)' }} />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Location pill */}
          <motion.div
            className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{ background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.11)', color: '#aaa' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <motion.span animate={{ scale: [1, 1.35, 1] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
              <MapPin size={11} style={{ color: '#7C5FF0' }} />
            </motion.span>
            Nairobi, Kenya · Working with creatives worldwide
          </motion.div>

          {/* Headline */}
          <h1 className="font-display font-black leading-[1] tracking-tight mb-6 text-[clamp(2.6rem,7.5vw,6rem)]">
            <span className="block">
              <AnimatedWords text="Your talent deserves" delay={0.25} />
            </span>
            <span
              className="block mt-1"
              style={{ background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              <AnimatedWords text="a website that shows it." delay={0.5} />
            </span>
          </h1>

          {/* Sub */}
          <motion.p
            className="text-base md:text-lg text-[#8a8a8a] max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            I am Peter Sudai, a creative developer from Nairobi. I build premium portfolio
            websites for DJs, photographers and artists who want their online presence to
            actually represent them.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
          >
            <motion.a
              href="https://calendly.com/petersudai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white text-sm w-full sm:w-auto justify-center"
              style={{ background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)', boxShadow: '0 0 32px rgba(124,95,240,0.45)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 55px rgba(124,95,240,0.75)' }}
              whileTap={{ scale: 0.97 }}
            >
              <CalendarDays size={16} /> Book a call
            </motion.a>
            <motion.a
              href="#work"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm w-full sm:w-auto justify-center text-[#e0e0e0]"
              style={{ background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.13)', backdropFilter: 'blur(12px)' }}
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.09)', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
            >
              See the work <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-px h-14 rounded-full mx-auto"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)' }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="overflow-hidden border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.012)' }}>
        <div className="flex overflow-hidden py-4">
          <div className="marquee-track flex items-center gap-0 flex-shrink-0">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-0 flex-shrink-0">
                <span className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-[#555] px-8 whitespace-nowrap hover:text-[#888] transition-colors duration-300">
                  {item}
                </span>
                <span style={{ color: '#7C5FF0', fontSize: '8px' }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <section className="py-16 md:py-20">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x" style={{ '--tw-divide-opacity': '1' } as React.CSSProperties}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center text-center md:px-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <span
                  className="font-display font-black text-[clamp(2.2rem,5vw,3.5rem)] leading-none mb-2"
                  style={{ background: 'linear-gradient(135deg, #f0f0f0, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {s.num}
                </span>
                <span className="text-xs text-[#666] uppercase tracking-widest">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bento: What I build ── */}
      <section className="pb-24 md:pb-36">
        <div className="container-xl">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#7C5FF0] mb-3">What I build</p>
            <h2 className="font-display font-black text-[clamp(2rem,4.5vw,3.2rem)] text-[#f0f0f0] leading-tight">
              Every creative has a story.<br />
              <span className="text-[#555]">I give it a stage.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {BENTO.map((card, i) => (
              <motion.div
                key={card.label}
                className={`${card.span} relative rounded-2xl overflow-hidden border group`}
                style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.022)', minHeight: i % 2 === 0 ? '240px' : '200px' }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ borderColor: `${card.accent}40` }}
              >
                {/* BG image (if any) */}
                {card.image && (
                  <>
                    <Image src={card.image} alt={card.label} fill className="object-cover object-center opacity-[0.12] group-hover:opacity-20 transition-opacity duration-500" sizes="(max-width: 768px) 100vw, 60vw" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95) 30%, rgba(8,8,8,0.5) 100%)' }} />
                  </>
                )}

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 60% 60% at 15% 85%, ${card.accent}12, transparent 65%)` }}
                />

                <div className="relative z-10 p-7 md:p-8 flex flex-col justify-end h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${card.accent}18`, color: card.accent }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-display font-bold text-[#f0f0f0] text-lg mb-2">{card.label}</h3>
                  <p className="text-sm text-[#8a8a8a] leading-relaxed">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider" />

      {/* ── Work demos ── */}
      <section id="work" className="py-24 md:py-36">
        <div className="container-xl">
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#7C5FF0] mb-3">The work</p>
            <h2 className="font-display font-black text-[clamp(2.2rem,5vw,3.8rem)] text-[#f0f0f0] leading-tight">
              Two live examples.
              <br />
              <span className="text-[#555]">Real builds, real detail.</span>
            </h2>
            <p className="text-[#8a8a8a] mt-4 max-w-lg text-[15px] leading-relaxed">
              These are complete websites — not mockups. Every animation, every section, every interaction is what your project gets.
            </p>
          </motion.div>

          <div className="space-y-5">
            {DEMOS.map((demo, i) => <TiltCard key={demo.id} demo={demo} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider" />

      {/* ── Process ── */}
      <section id="process" className="py-24 md:py-36 relative overflow-hidden" style={{ background: '#0b0b0b' }}>
        {/* Large decorative BG text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-white/[0.015] select-none pointer-events-none leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          PROCESS
        </div>

        <div className="container-xl relative z-10">
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#7C5FF0] mb-3">How it works</p>
            <h2 className="font-display font-black text-[clamp(2.2rem,5vw,3.8rem)] text-[#f0f0f0] leading-tight">
              Simple as it should be.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.n}
                className="relative flex flex-col group"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.14, ease }}
              >
                <div className="p-8 md:p-10 flex-1">
                  {/* Large step number */}
                  <div className="relative mb-8">
                    <span
                      className="font-display font-black text-[5rem] leading-none select-none"
                      style={{ background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                      {step.n}
                    </span>
                    {/* Animated underline */}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-px origin-left"
                      style={{ background: 'linear-gradient(to right, #7C5FF0, transparent)', width: '80px' }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.14 + 0.3, ease }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#f0f0f0] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#8a8a8a] leading-relaxed">{step.body}</p>
                </div>

                {/* Bottom border */}
                <div className="h-px mx-8 md:mx-10 md:hidden" style={{ background: 'rgba(255,255,255,0.06)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider" />

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 md:py-36">
        <div className="container-xl">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#7C5FF0] mb-3">Investment</p>
            <h2 className="font-display font-black text-[clamp(2.2rem,5vw,3.8rem)] text-[#f0f0f0] leading-tight">
              Pricing that fits where you are.
            </h2>
            <p className="text-[#8a8a8a] mt-4 max-w-lg mx-auto text-[15px] leading-relaxed">
              Every project is quoted before any work begins. Pick the tier that matches what you need, and we will tailor it from there.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                className="relative"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                      style={{ background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)' }}
                    >
                      Most popular
                    </span>
                  </div>
                )}

                <div
                  className="relative h-full rounded-2xl overflow-hidden"
                  style={{
                    padding: tier.popular ? '1px' : '1px',
                    background: tier.popular
                      ? 'linear-gradient(135deg, rgba(124,95,240,0.7), rgba(79,195,247,0.5), rgba(124,95,240,0.4))'
                      : 'rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="h-full rounded-2xl p-7 md:p-8 flex flex-col relative overflow-hidden"
                    style={{ background: tier.popular ? '#0c0c0e' : '#0e0e0e' }}
                  >
                    {tier.popular && (
                      <div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]"
                        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #7C5FF0, transparent)' }}
                      />
                    )}

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#666] mb-1">{tier.note}</p>
                        <h3 className="font-display font-black text-xl text-[#f0f0f0] mb-3">{tier.name}</h3>
                        <div className="flex items-end gap-1.5 mb-2">
                          <span
                            className="font-display font-black text-[clamp(2rem,4vw,2.8rem)] leading-none"
                            style={
                              tier.popular
                                ? { background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                                : { color: '#f0f0f0' }
                            }
                          >
                            {tier.price}
                          </span>
                          <span className="text-[#555] text-xs pb-1.5">USD</span>
                        </div>
                        <p className="text-sm text-[#777]">{tier.tagline}</p>
                      </div>

                      <div className="space-y-3 mb-8 flex-1">
                        {tier.features.map((f) => (
                          <div key={f} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: tier.popular ? '#7C5FF0' : '#555' }}
                            />
                            <span className="text-sm text-[#8a8a8a]">{f}</span>
                          </div>
                        ))}
                      </div>

                      <motion.a
                        href={tier.href}
                        target={tier.href.startsWith('http') ? '_blank' : undefined}
                        rel={tier.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full font-semibold text-sm"
                        style={
                          tier.popular
                            ? { background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)', color: '#fff', boxShadow: '0 0 24px rgba(124,95,240,0.4)' }
                            : { background: 'rgba(255,255,255,0.05)', color: '#c0c0c0', border: '1px solid rgba(255,255,255,0.1)' }
                        }
                        whileHover={
                          tier.popular
                            ? { scale: 1.03, boxShadow: '0 0 44px rgba(124,95,240,0.65)' }
                            : { scale: 1.03, background: 'rgba(255,255,255,0.09)', color: '#fff' }
                        }
                        whileTap={{ scale: 0.97 }}
                      >
                        <CalendarDays size={14} /> {tier.cta}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-xs text-[#444] mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            All prices in USD. Final quote agreed before any work begins. No hidden fees.
          </motion.p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider" />

      {/* ── Contact ── */}
      <section id="contact" className="py-28 md:py-44 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,95,240,0.07), transparent 60%)' }}
        />
        {/* Decorative large text */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-black text-[18vw] text-white/[0.018] select-none pointer-events-none leading-none whitespace-nowrap"
          aria-hidden="true"
        >
          LET'S WORK
        </div>

        <motion.div
          className="container-xl text-center relative z-10"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#7C5FF0] mb-5">Let us talk</p>
          <h2 className="font-display font-black text-[clamp(3rem,8vw,7rem)] text-[#f0f0f0] leading-[0.92] mb-6 tracking-tight">
            Ready when<br />you are.
          </h2>
          <p className="text-[#8a8a8a] max-w-xs mx-auto text-[15px] leading-relaxed mb-12">
            Book a call and tell me about your project. No commitment, just a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://calendly.com/petersudai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-semibold text-white text-sm w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #7C5FF0, #4FC3F7)', boxShadow: '0 0 40px rgba(124,95,240,0.4)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 65px rgba(124,95,240,0.65)' }}
              whileTap={{ scale: 0.97 }}
            >
              <CalendarDays size={15} /> Book a call
            </motion.a>
            <motion.a
              href="mailto:hello@petersudai.com"
              className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-semibold text-sm w-full sm:w-auto text-[#c0c0c0] hover:text-white transition-colors duration-300"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.11)' }}
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={15} /> hello@petersudai.com
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-8">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-display font-bold text-[#f0f0f0]">
            Peter <span style={{ color: '#7C5FF0' }}>Sudai</span>
          </span>
          <span className="text-xs text-[#555]">Creative developer · Nairobi, Kenya · Building worldwide</span>
          <span className="text-xs text-[#444]">© 2025</span>
        </div>
      </footer>
    </div>
  );
}
