import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'accent' | 'muted' | 'outline';
  className?: string;
}

export function Tag({ children, variant = 'muted', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase',
        variant === 'accent' &&
          'bg-accent/15 text-accent border border-accent/25',
        variant === 'muted' &&
          'bg-white/5 text-muted border border-border',
        variant === 'outline' &&
          'border border-border text-muted',
        className
      )}
    >
      {children}
    </span>
  );
}
