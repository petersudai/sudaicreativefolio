'use client';

import { Space_Grotesk, Inter, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { SocialProof } from '@/components/sections/SocialProof';
import { Contact } from '@/components/sections/Contact';
import type { SiteConfig } from '@/lib/types';

// DJ / Music fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display-dj',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body-dj',
  weight: ['400', '500', '600'],
  display: 'swap',
});

// Photographer fonts
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display-photo',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body-photo',
  weight: ['400', '500', '600'],
  display: 'swap',
});

interface CreativeTemplateProps {
  config: SiteConfig;
}

export function CreativeTemplate({ config }: CreativeTemplateProps) {
  const { meta, theme, nav, hero, about, portfolio, services, socialProof, contact, footer } = config;
  const isPhotographer = theme.creativeType === 'photographer';

  const fontVars = isPhotographer
    ? `${cormorant.variable} ${dmSans.variable}`
    : `${spaceGrotesk.variable} ${inter.variable}`;

  const fontDisplayVar = isPhotographer
    ? 'var(--font-display-photo)'
    : 'var(--font-display-dj)';

  const fontBodyVar = isPhotographer
    ? 'var(--font-body-photo)'
    : 'var(--font-body-dj)';

  return (
    <div
      className={fontVars}
      style={
        {
          '--color-accent': theme.accent,
          '--color-accent-2': theme.accentSecondary,
          '--color-accent-glow': theme.accentGlow,
          '--font-display': fontDisplayVar,
          '--font-body': fontBodyVar,
        } as React.CSSProperties
      }
    >
      <CustomCursor />
      <Navbar meta={meta} nav={nav} />

      <main>
        <Hero hero={hero} meta={meta} theme={theme} />
        <About about={about} theme={theme} />
        <Portfolio portfolio={portfolio} theme={theme} />
        <Services services={services} theme={theme} />
        <SocialProof socialProof={socialProof} theme={theme} />
        <Contact contact={contact} theme={theme} />
      </main>

      <Footer meta={meta} footer={footer} />
    </div>
  );
}
