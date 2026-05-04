export type CreativeType = 'dj' | 'photographer' | 'designer' | 'artist';

export interface SiteConfig {
  meta: MetaConfig;
  theme: ThemeConfig;
  nav: NavConfig;
  hero: HeroConfig;
  about: AboutConfig;
  portfolio: PortfolioConfig;
  services: ServicesConfig;
  socialProof: SocialProofConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}

export interface MetaConfig {
  name: string;
  alias?: string;
  role: string;
  location: string;
  siteTitle: string;
  siteDescription: string;
}

export interface ThemeConfig {
  accent: string;
  accentSecondary: string;
  accentGlow: string;
  creativeType: CreativeType;
}

export interface NavConfig {
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
}

export interface HeroConfig {
  badge?: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  backgroundImage: string;
  stats: { value: string; label: string }[];
  scrollLabel: string;
}

export interface AboutConfig {
  headline: string;
  subheadline: string;
  body: string[];
  image: string;
  quote?: string;
  quoteAuthor?: string;
  highlights: { label: string; value: string }[];
  cta: { label: string; href: string };
}

export type PortfolioItemType = 'image' | 'video' | 'audio';

export interface PortfolioItem {
  id: string;
  type: PortfolioItemType;
  title: string;
  subtitle?: string;
  thumbnail: string;
  src?: string;
  videoId?: string;
  duration?: string;
  genre?: string;
  year?: string;
}

export interface PortfolioConfig {
  headline: string;
  subheadline: string;
  tabs: { id: string; label: string }[];
  items: Record<string, PortfolioItem[]>;
}

export interface ServiceItem {
  title: string;
  description: string;
  price?: string;
  priceNote?: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
}

export interface ServicesConfig {
  headline: string;
  subheadline: string;
  description: string;
  items: ServiceItem[];
  footerNote?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface SocialProofConfig {
  headline: string;
  subheadline: string;
  stats: { value: string; label: string; prefix?: string; suffix?: string }[];
  logos: { name: string; width?: number }[];
  testimonials: TestimonialItem[];
}

export interface ContactConfig {
  headline: string;
  subheadline: string;
  description: string;
  email: string;
  bookingUrl: string;
  bookingLabel: string;
  socials: { platform: string; href: string; handle: string }[];
}

export interface FooterConfig {
  tagline: string;
  links: { label: string; href: string }[];
  socials: { platform: string; href: string }[];
  copyright: string;
}
