'use client';

import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { CodeSnippet } from '@/types/projects';

interface CodeBlockProps {
  snippet: CodeSnippet;
  className?: string;
}

export function CodeBlock({ snippet, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy code', e);
    }
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl backdrop-blur-md ${className || ''}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-emerald-400" />
          <span className="font-mono text-xs font-semibold text-zinc-300">{snippet.filename}</span>
          <span className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 uppercase">
            {snippet.language}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Code snippet copied' : 'Copy code snippet'}
          className="inline-flex min-h-[36px] touch-manipulation items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="font-medium text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4 sm:p-5">
        <pre className="font-mono text-xs leading-relaxed text-zinc-200 sm:text-sm">
          <code>{snippet.code}</code>
        </pre>
      </div>

      {/* Caption */}
      {snippet.caption && (
        <div className="border-t border-zinc-800/60 bg-zinc-900/30 px-4 py-2 text-[11px] text-zinc-400">
          {snippet.caption}
        </div>
      )}
    </div>
  );
}
