import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'emerald' | 'cyan' | 'indigo' | 'violet' | 'amber' | 'outline';
  dot?: boolean;
  withPulse?: boolean;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-zinc-800 text-zinc-300 border-zinc-700/60',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  outline: 'bg-transparent text-zinc-400 border-zinc-700',
};

const dotColors: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-zinc-400',
  emerald: 'bg-emerald-400',
  cyan: 'bg-cyan-400',
  indigo: 'bg-indigo-400',
  violet: 'bg-violet-400',
  amber: 'bg-amber-400',
  outline: 'bg-zinc-400',
};

export function Badge({
  className,
  variant = 'default',
  dot = false,
  withPulse = false,
  children,
  ...props
}: BadgeProps) {
  const showDot = dot || withPulse;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors select-none',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {showDot && (
        <span
          className={cn(
            'h-1.5 w-1.5 shrink-0 rounded-full',
            dotColors[variant],
            withPulse && 'animate-pulse',
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
