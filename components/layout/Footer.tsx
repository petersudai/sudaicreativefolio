import { SocialIcon } from '@/components/ui/SocialIcon';
import type { FooterConfig, MetaConfig } from '@/lib/types';

interface FooterProps {
  meta: MetaConfig;
  footer: FooterConfig;
}

export function Footer({ meta, footer }: FooterProps) {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-xl py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <p className="font-display text-3xl font-bold tracking-tight text-text">
              {meta.alias ?? meta.name}
            </p>
            <p className="text-muted text-sm leading-relaxed">{footer.tagline}</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-text transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {footer.socials.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
              >
                <SocialIcon platform={s.platform} size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted">
          <span>{footer.copyright}</span>
          <span>
            Built by{' '}
            <span className="text-accent">Peter Sudai</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
