'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cpu, Shield, Zap, Layers, ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';
import { ABOUT_PILLARS, TECH_STACK_CATEGORIES } from '@/lib/services-data';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  showFullBio?: boolean;
  className?: string;
}

const iconMap = {
  Cpu,
  Shield,
  Zap,
  Layers,
};

export function AboutSection({ showFullBio = false, className }: AboutSectionProps) {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      className={
        className ?? 'border-t border-zinc-800/80 bg-zinc-950/70 py-20 backdrop-blur-sm sm:py-24'
      }
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <Badge variant="indigo" className="text-xs font-semibold">
                Engineering Philosophy
              </Badge>
            </div>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Systems Architect & Creative Technologist
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Merging deep mathematical graphics foundations with uncompromising, type-safe
              full-stack systems engineering.
            </p>
          </div>

          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href={ROUTES.ABOUT}>
              Full Biography <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Narrative Biography Block */}
        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-md sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base lg:col-span-8">
              <p>
                I specialize in engineering high-fidelity web experiences that refuse to compromise
                on either visual spectacle or architectural rigor. By leveraging{' '}
                <strong className="font-semibold text-white">Next.js 16</strong>,{' '}
                <strong className="font-semibold text-white">React 19 Server Components</strong>,
                and <strong className="font-semibold text-white">WebGPU / Three.js</strong>, I
                create digital products that load in milliseconds and maintain smooth 60fps frame
                rates under heavy compute workloads.
              </p>
              <p>
                My background spans the entire full-stack lifecycle: from authoring custom WGSL
                compute shaders and real-time audio FFT visualizers, to configuring Neon PostgreSQL
                serverless pooling, Drizzle ORM schemas, and strict WCAG 2.2 AA accessibility trees.
              </p>
              {showFullBio && (
                <p>
                  Every engagement follows strict governance: zero plaintext secrets, automated
                  pre-flight testing gates, 100% Lighthouse audit invariants, and clean semantic
                  landmarks that empower assistive tech and autonomous web agents alike.
                </p>
              )}
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 lg:col-span-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <Terminal className="h-4 w-4" />
                  <span>runtime.profile</span>
                </div>
                <div className="mt-4 space-y-3 font-mono text-xs text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-400">Specialization:</span>
                    <span className="text-zinc-200">Web3D & Full-Stack</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-400">Target LTS:</span>
                    <span className="text-zinc-200">Next.js 16 + React 19</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-400">Runtime Engine:</span>
                    <span className="text-zinc-200">Bun v1.3.14+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Location / Remote:</span>
                    <span className="text-emerald-400">Global Available</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-zinc-800/80 pt-4">
                <Button asChild variant="glow" size="sm" className="w-full">
                  <Link href={ROUTES.BOOK}>Schedule Introduction &rarr;</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Four Architectural Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Cpu;
            return (
              <Card
                key={idx}
                variant="glow"
                isInteractive
                className="flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-lg font-extrabold text-white">
                        {pillar.metric}
                      </div>
                      <div className="text-[10px] font-medium text-zinc-400 uppercase">
                        {pillar.metricLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{pillar.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stack Mastery Interactive Matrix */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-md sm:p-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Certified Stack Mastery</h3>
              <p className="mt-1 text-xs text-zinc-400">
                Active tools, frameworks, and protocols deployed in production environments.
              </p>
            </div>

            {/* Category Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 rounded-xl border border-zinc-800 bg-zinc-950/80 p-1">
              {TECH_STACK_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategory(idx)}
                  className={cn(
                    'touch-manipulation rounded-lg px-3 py-1.5 text-xs font-medium transition-all',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400',
                    activeCategory === idx
                      ? 'bg-emerald-500 font-semibold text-zinc-950 shadow-sm'
                      : 'text-zinc-400 hover:text-white',
                  )}
                >
                  {cat.category.split('&')[0]?.trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Display */}
          <div className="mt-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div>
                <h4 className="text-base font-bold text-emerald-400">
                  {TECH_STACK_CATEGORIES[activeCategory]?.category}
                </h4>
                <p className="mt-0.5 text-xs text-zinc-400">
                  {TECH_STACK_CATEGORIES[activeCategory]?.description}
                </p>
              </div>
              <Badge variant="emerald" className="hidden text-xs sm:inline-flex">
                Production Verified
              </Badge>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {TECH_STACK_CATEGORIES[activeCategory]?.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-3 text-xs font-medium text-zinc-200 transition-colors hover:border-emerald-500/40 hover:bg-zinc-900"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
