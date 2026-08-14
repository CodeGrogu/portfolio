import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, disabled, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const errorId = textareaId ? `${textareaId}-error` : undefined;
    const helperId = textareaId ? `${textareaId}-helper` : undefined;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-semibold tracking-wider text-zinc-300 uppercase"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'flex w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 transition-colors',
            'focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400/30 focus-visible:outline-none',
            'resize-y disabled:cursor-not-allowed disabled:opacity-50',
            error &&
              'border-red-500/80 text-red-100 focus-visible:border-red-500 focus-visible:ring-red-400/30',
            className,
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs font-medium text-red-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="text-xs text-zinc-400">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
