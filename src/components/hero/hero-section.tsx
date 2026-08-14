'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Layers, Cpu, Zap, Check, Copy } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type CodeSnippetTab = 'webgpu' | 'drizzle' | 'telemetry';

const CODE_SNIPPETS: Record<
  CodeSnippetTab,
  {
    fileName: string;
    language: string;
    badge: string;
    code: string;
  }
> = {
  webgpu: {
    fileName: 'SpatialPipeline.wgsl',
    language: 'wgsl',
    badge: 'WebGPU 60 FPS',
    code: `@compute @workgroup_size(64)
fn cs_particle_bloom(
  @builtin(global_invocation_id) id: vec3<u32>,
  @group(0) @binding(0) particles: array<Particle>,
) {
  let idx = id.x;
  let pos = particles[idx].position;
  let freq = textureSample(audio_fft, smp, vec2(pos.x, pos.y));
  
  // Real-time bloom dissipation pass
  particles[idx].velocity += freq.rgb * 0.016;
  particles[idx].position += particles[idx].velocity;
}`,
  },
  drizzle: {
    fileName: 'atomic-booking.ts',
    language: 'typescript',
    badge: 'Neon + Drizzle ORM',
    code: `export async function reserveConsultationSlot(tx: NeonTransaction, slotId: string) {
  // Serialized slot locking avoiding double-booking race condition
  const [lockedSlot] = await tx
    .select()
    .from(consultationSlots)
    .where(and(eq(consultationSlots.id, slotId), eq(consultationSlots.status, 'available')))
    .for('update');

  if (!lockedSlot) throw new SlotConflictError('Slot already reserved');
  return await tx.update(consultationSlots).set({ status: 'reserved' }).where(eq(consultationSlots.id, slotId));
}`,
  },
  telemetry: {
    fileName: 'system-telemetry.json',
    language: 'json',
    badge: '100% CWV Score',
    code: `{
  "webgpu_pipeline": "Hardware-Accelerated",
  "frame_budget_target": "16.6ms (60 FPS)",
  "lighthouse_scores": {
    "accessibility": 100,
    "best_practices": 100,
    "seo": 100,
    "performance": 100
  },
  "runtime": "Next.js 16.3 + React 19 on Bun v1.3.14"
}`,
  },
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<CodeSnippetTab>('webgpu');
  const [hasCopied, setHasCopied] = useState(false);

  const currentSnippet = CODE_SNIPPETS[activeTab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentSnippet.code);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32"
    >
      {/* Background ambient radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-64"
      >
        <div className="aspect-[1200/700] w-[75rem] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-indigo-500/10 opacity-60" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Subtitle, CTAs */}
          <div className="space-y-6 text-left lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center">
              <Badge
                variant="emerald"
                withPulse
                className="border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-400"
              >
                Available for Q3/Q4 Projects • Web3D & Full-Stack
              </Badge>
            </div>

            {/* Headline */}
            <h1
              id="hero-title"
              className="text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Engineering{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                high-performance
              </span>{' '}
              digital products & 3D systems.
            </h1>

            {/* Sub-text */}
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Specializing in GPU-accelerated web graphics, real-time spatial interfaces, and
              concurrency-safe full-stack web applications with{' '}
              <span className="font-medium text-zinc-200">React 19</span>,{' '}
              <span className="font-medium text-zinc-200">Next.js 16</span>,{' '}
              <span className="font-medium text-zinc-200">Three.js</span>, and{' '}
              <span className="font-medium text-zinc-200">Neon PostgreSQL</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                variant="glow"
                size="lg"
                className="text-sm font-semibold sm:text-base"
              >
                <Link href={ROUTES.PROJECTS} className="group">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="glass"
                size="lg"
                className="text-sm font-medium sm:text-base"
              >
                <Link href={ROUTES.BOOK}>
                  <Terminal className="mr-2 h-4 w-4 text-emerald-400" />
                  Book Discovery Call
                </Link>
              </Button>
            </div>

            {/* Tech Stack Matrix Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 text-xs text-zinc-400">
              <span className="mr-1 font-medium text-zinc-500">Core Tech:</span>
              {[
                'WebGPU',
                'Three.js',
                'Next.js 16',
                'React 19',
                'Neon DB',
                'Drizzle ORM',
                'TypeScript',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-zinc-300 transition-colors hover:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Teaser Window */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/80 p-1.5 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl">
              {/* Glow Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent opacity-60 blur-md"
              />

              {/* Window Header */}
              <div className="flex items-center justify-between rounded-t-xl border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-3">
                {/* Traffic lights */}
                <div className="flex items-center space-x-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 max-w-[140px] truncate font-mono text-xs text-zinc-400 sm:max-w-none">
                    {currentSnippet.fileName}
                  </span>
                </div>

                {/* Status Badge & Copy */}
                <div className="flex items-center gap-2">
                  <Badge variant="cyan" className="px-2 py-0.5 font-mono text-[10px]">
                    {currentSnippet.badge}
                  </Badge>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy snippet to clipboard"
                    className="flex h-9 min-h-[36px] w-9 min-w-[36px] touch-manipulation items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    {hasCopied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex gap-1 overflow-x-auto border-b border-zinc-800/60 bg-zinc-950/50 px-2 pt-2 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('webgpu')}
                  className={cn(
                    'flex min-h-[38px] shrink-0 touch-manipulation items-center gap-1.5 rounded-t-lg px-3.5 py-2 font-mono text-xs transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400',
                    activeTab === 'webgpu'
                      ? 'border-x border-t border-zinc-700/80 bg-zinc-900 font-semibold text-emerald-400'
                      : 'text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200',
                  )}
                >
                  <Cpu className="h-3.5 w-3.5" />
                  WebGPU
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('drizzle')}
                  className={cn(
                    'flex min-h-[38px] shrink-0 touch-manipulation items-center gap-1.5 rounded-t-lg px-3.5 py-2 font-mono text-xs transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400',
                    activeTab === 'drizzle'
                      ? 'border-x border-t border-zinc-700/80 bg-zinc-900 font-semibold text-emerald-400'
                      : 'text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200',
                  )}
                >
                  <Layers className="h-3.5 w-3.5" />
                  Neon + Drizzle
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('telemetry')}
                  className={cn(
                    'flex min-h-[38px] shrink-0 touch-manipulation items-center gap-1.5 rounded-t-lg px-3.5 py-2 font-mono text-xs transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400',
                    activeTab === 'telemetry'
                      ? 'border-x border-t border-zinc-700/80 bg-zinc-900 font-semibold text-emerald-400'
                      : 'text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200',
                  )}
                >
                  <Zap className="h-3.5 w-3.5" />
                  Telemetry
                </button>
              </div>

              {/* Code Display */}
              <div className="min-h-[220px] overflow-x-auto rounded-b-xl bg-zinc-950/90 p-4">
                <pre className="font-mono text-xs leading-relaxed text-zinc-300">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics & Assurance Strip */}
        <div className="mt-16 rounded-2xl border-y border-zinc-800/80 bg-zinc-950/40 p-6 backdrop-blur-sm sm:mt-20 sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-white sm:justify-start sm:text-3xl">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  60 FPS
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                WebGPU Render Pipeline
              </p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-white sm:justify-start sm:text-3xl">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  &lt; 100ms
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                Edge TTFB & DB Queries
              </p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-white sm:justify-start sm:text-3xl">
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  100%
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                Lighthouse CWV Standard
              </p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-1.5 text-2xl font-extrabold text-white sm:justify-start sm:text-3xl">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  0 ms
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                Slot Race Condition Window
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
