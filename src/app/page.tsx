import React from 'react';
import { Terminal, Sparkles, Box, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Foundation Initialized &bull; Next.js 16 + Bun</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          CodeGrogu Portfolio
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed">
          High-performance interactive web architecture, WebGPU-first 3D graphics, and resilient full-stack systems.
        </p>

        {/* Architectural Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 text-left">
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Terminal className="w-4 h-4" />
            </div>
            <h2 className="font-semibold text-slate-200 text-sm">Next.js 16 + Bun</h2>
            <p className="text-xs text-slate-400">
              Server Components, React 19, and Bun runtime for rapid compilation and optimized bundle sizes.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Box className="w-4 h-4" />
            </div>
            <h2 className="font-semibold text-slate-200 text-sm">WebGPU Graphics</h2>
            <p className="text-xs text-slate-400">
              Three.js WebGPU engine with automated WebGL 2 fallbacks and device-aware quality profiles.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-semibold text-slate-200 text-sm">Full-Stack Systems</h2>
            <p className="text-xs text-slate-400">
              Neon serverless PostgreSQL, Drizzle ORM, Zod validation, and atomic transactional bookings.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
