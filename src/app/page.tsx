import React from 'react';
import { Terminal, Sparkles, Box, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="relative z-10 w-full max-w-4xl space-y-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Foundation Initialized &bull; Next.js 16 + Bun</span>
        </div>

        {/* Hero Title */}
        <h1 className="bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          CodeGrogu Portfolio
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          High-performance interactive web architecture, WebGPU-first 3D graphics, and resilient
          full-stack systems.
        </p>

        {/* Architectural Pillars Cards */}
        <div className="grid grid-cols-1 gap-4 pt-8 text-left md:grid-cols-3">
          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
              <Terminal className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-slate-200">Next.js 16 + Bun</h2>
            <p className="text-xs text-slate-400">
              Server Components, React 19, and Bun runtime for rapid compilation and optimized
              bundle sizes.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400">
              <Box className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-slate-200">WebGPU Graphics</h2>
            <p className="text-xs text-slate-400">
              Three.js WebGPU engine with automated WebGL 2 fallbacks and device-aware quality
              profiles.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-semibold text-slate-200">Full-Stack Systems</h2>
            <p className="text-xs text-slate-400">
              Neon serverless PostgreSQL, Drizzle ORM, Zod validation, and atomic transactional
              bookings.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
