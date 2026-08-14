import * as React from 'react';
import { cn } from '@/lib/utils';
import { Spinner } from './spinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-emerald-500 text-zinc-950 font-semibold hover:bg-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 shadow-sm active:scale-[0.98]',
  secondary:
    'bg-zinc-800 text-zinc-100 font-medium hover:bg-zinc-700 hover:text-white border border-zinc-700/60 focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-[0.98]',
  outline:
    'border border-zinc-700 bg-transparent text-zinc-200 font-medium hover:bg-zinc-800/80 hover:text-white focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-[0.98]',
  ghost:
    'bg-transparent text-zinc-400 font-medium hover:bg-zinc-800/60 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-[0.98]',
  glass:
    'bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] text-zinc-100 font-medium hover:bg-zinc-800/80 hover:border-emerald-500/30 focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-[0.98]',
  glow: 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-bold hover:from-emerald-400 hover:to-cyan-400 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-[0.98]',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
  md: 'h-10 px-4 text-sm rounded-lg gap-2',
  lg: 'h-12 px-6 text-base rounded-xl gap-2.5',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all select-none',
          'cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <Spinner size={size === 'sm' ? 'sm' : 'md'} className="mr-1" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
