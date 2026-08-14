import Link from 'next/link';
import { ArrowRight, Cpu, Layers, Zap } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { HeroSection } from '@/components/hero';
import { Container, Section } from '@/components/ui/container';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const FEATURED_PROJECTS = [
  {
    slug: 'spatial-canvas-engine',
    title: 'Spatial Canvas Engine',
    tag: 'Web3D & WebGPU',
    badgeVariant: 'emerald' as const,
    description:
      'WebGPU-first real-time 3D asset configurator with automated Draco decompression and custom WGSL compute shaders.',
    techStack: ['WebGPU', 'Three.js', 'TypeScript', 'WGSL'],
  },
  {
    slug: 'neon-drizzle-booking-core',
    title: 'Transactional Booking Engine',
    tag: 'Full-Stack Architecture',
    badgeVariant: 'cyan' as const,
    description:
      'Concurrency-safe scheduling platform with Neon PostgreSQL serialized slot locks, Drizzle ORM, and rate limiting.',
    techStack: ['Next.js 16', 'Neon DB', 'Drizzle ORM', 'Zod'],
  },
  {
    slug: 'ambient-audio-visualizer',
    title: 'Ambient Audio Visualizer',
    tag: 'Creative Coding & WebGL',
    badgeVariant: 'violet' as const,
    description:
      'Interactive 50,000-particle audio reactive experience with real-time FFT frequency analysis and custom bloom passes.',
    techStack: ['WebGL 2', 'GLSL', 'Web Audio API', 'Three.js'],
  },
];

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Core Capabilities Section */}
      <Section
        id="capabilities"
        className="border-t border-zinc-800/80 bg-zinc-950/60 py-20 backdrop-blur-sm"
      >
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2">
                <Badge variant="emerald" className="text-xs font-semibold">
                  Engineering Capabilities
                </Badge>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Precision Technical Disciplines
              </h2>
              <p className="mt-2 max-w-2xl text-base text-zinc-400">
                High-fidelity technical foundations built for speed, resilience, and uncompromised
                accessibility.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href={ROUTES.SERVICES}>
                All Capabilities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card variant="glow" isInteractive className="p-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <Cpu className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-xl">WebGPU & Three.js</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-zinc-400">
                  GPU-first 3D scenes, custom WGSL/GLSL shaders, Draco/Meshopt asset compression,
                  and 60fps real-time spatial interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Hardware-accelerated compute shaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Device-aware quality tier degradation</span>
                </div>
              </CardContent>
            </Card>

            <Card variant="glow" isInteractive className="p-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <Layers className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-xl">Full-Stack Architecture</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-zinc-400">
                  Next.js 16 App Router, React 19 Server Components, Neon Serverless PostgreSQL, and
                  type-safe Drizzle ORM backends.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Serialized transaction slot reservation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Zod runtime schema validation</span>
                </div>
              </CardContent>
            </Card>

            <Card variant="glow" isInteractive className="p-2">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-xl">Performance & A11y</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-zinc-400">
                  Sub-second page loads, WCAG 2.2 AA accessibility, reduced-motion fallbacks, and
                  resilient Core Web Vitals optimization.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>100% Lighthouse audit standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span>Zero Cumulative Layout Shift (CLS: 0.00)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Featured Projects Highlight Section */}
      <Section className="border-t border-zinc-800/80 py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge variant="cyan" className="text-xs font-semibold">
                Featured Case Studies
              </Badge>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Recent Engineering Milestones
              </h2>
              <p className="mt-2 max-w-2xl text-base text-zinc-400">
                Deep-dives into production-grade systems, spatial computing engines, and backend
                architectures.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href={ROUTES.PROJECTS}>
                All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <Card
                key={project.slug}
                variant="glass"
                isInteractive
                className="flex flex-col justify-between"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={project.badgeVariant} className="text-xs">
                      {project.tag}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl text-white">
                    <Link
                      href={ROUTES.PROJECT_DETAIL(project.slug)}
                      className="rounded transition-colors hover:text-emerald-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                    >
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="border-t border-zinc-800/60 pt-4">
                  <Link
                    href={ROUTES.PROJECT_DETAIL(project.slug)}
                    className="inline-flex items-center text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Read Case Study <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action Banner */}
      <Section className="border-t border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-zinc-900/50 py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-950/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 -z-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <div className="max-w-2xl">
              <Badge variant="emerald" withPulse className="text-xs font-semibold">
                Initiate Project Discovery
              </Badge>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Ready to build something exceptional?
              </h2>
              <p className="mt-4 text-base text-zinc-400 sm:text-lg">
                Let&apos;s collaborate on WebGPU 3D graphics, scalable Next.js systems, or
                high-performance cloud architecture.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild variant="glow" size="lg" className="font-semibold">
                  <Link href={ROUTES.BOOK}>
                    Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link href={ROUTES.SERVICES}>Explore Capabilities</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
