import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  interactive?: boolean;
  variant?: 'default' | 'glass' | 'glow';
  isInteractive?: boolean;
}

export function Card({
  className,
  glass = false,
  interactive = false,
  variant = 'default',
  isInteractive = false,
  ...props
}: CardProps) {
  const isGlass = glass || variant === 'glass';
  const isGlow = variant === 'glow';
  const canInteract = interactive || isInteractive;

  return (
    <div
      className={cn(
        'rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-zinc-100 transition-all',
        isGlass && 'border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md',
        isGlow && 'border-zinc-800 bg-zinc-950/60 shadow-lg shadow-black/40 backdrop-blur-sm',
        canInteract &&
          'hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-emerald-500/10',
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-1.5', className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-xl font-bold tracking-tight text-white', className)} {...props} />;
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm leading-relaxed text-zinc-400', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('pt-4', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-6 flex items-center border-t border-zinc-800/80 pt-6', className)}
      {...props}
    />
  );
}
