import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBreadcrumbs, ROUTES } from '@/lib/routes';

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

const KNOWN_PROJECTS: Record<
  string,
  {
    title: string;
    description: string;
    overview: string;
    architecture: string[];
    techStack: string[];
    timeline: string;
  }
> = {
  'spatial-canvas-engine': {
    title: 'Spatial Canvas Engine',
    description: 'WebGPU-first real-time 3D asset configurator and procedural shader system.',
    overview:
      'Engineered a WebGPU-first 3D rendering pipeline with seamless WebGL 2 fallbacks, automated Draco geometry decompression, and custom procedural WGSL compute shaders.',
    architecture: [
      'Multi-tier canvas renderer detecting WebGPU capabilities at runtime.',
      'Meshopt & Draco compressed GLTF asset loading pipeline.',
      'Device-aware quality tiering targeting 60fps across mobile and desktop.',
    ],
    techStack: ['WebGPU', 'Three.js', 'React Three Fiber', 'TypeScript', 'GLSL/WGSL'],
    timeline: 'Q3 2026',
  },
  'neon-drizzle-booking-core': {
    title: 'Transactional Booking Engine',
    description:
      'Atomic scheduling platform built with Neon PostgreSQL, Drizzle ORM, and Upstash Redis rate limiting.',
    overview:
      'Architected a concurrency-safe transactional booking engine handling atomic slot reservation, Resend email notification lifecycles, and IP-based rate limiting.',
    architecture: [
      'Serial execution slot locking avoiding double-booking race conditions.',
      'Zod runtime payload validation with strict server error contracts.',
      'Resend webhook integration for asynchronous client confirmation.',
    ],
    techStack: ['Next.js 16', 'Neon PostgreSQL', 'Drizzle ORM', 'Zod', 'Upstash Redis'],
    timeline: 'Q3 2026',
  },
  'ambient-audio-visualizer': {
    title: 'Ambient Audio Visualizer',
    description:
      'Interactive particle audio reactive WebGL experience with custom GLSL frequency bloom shaders.',
    overview:
      'Built a Web Audio API analyzer feeding real-time FFT frequency buckets into an instanced buffer mesh with GLSL post-processing bloom passes.',
    architecture: [
      'InstancedBufferGeometry rendering 50,000 particles at 60fps.',
      'Custom fragment bloom shader reacting to low-frequency audio spikes.',
      'Accessible reduced-motion controls respecting user OS preferences.',
    ],
    techStack: ['WebGL 2', 'GLSL Shaders', 'Web Audio API', 'Three.js', 'React 19'],
    timeline: 'Q2 2026',
  },
};

export async function generateStaticParams() {
  return Object.keys(KNOWN_PROJECTS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = KNOWN_PROJECTS[slug];

  if (!project) {
    return {
      title: 'Project Not Found - CodeGrogu Portfolio',
    };
  }

  return {
    title: `${project.title} - CodeGrogu Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = KNOWN_PROJECTS[slug];

  if (!project) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbs(`/projects/${slug}`);

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 sm:text-sm">
          {breadcrumbs.map((crumb, idx) => (
            <li key={crumb.href} className="flex items-center">
              {idx > 0 && <span className="mr-1.5 text-zinc-600">/</span>}
              {crumb.isCurrent ? (
                <span aria-current="page" className="font-semibold text-emerald-400">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="touch-manipulation hover:text-white">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Header */}
      <header className="border-b border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            Case Study
          </span>
          <span className="text-xs text-zinc-400">Timeline: {project.timeline}</span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-700/50 bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="mt-10 space-y-10 text-zinc-300 sm:space-y-12">
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-xl font-bold text-white">
            Project Overview
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">{project.overview}</p>
        </section>

        <section aria-labelledby="architecture-heading">
          <h2 id="architecture-heading" className="text-xl font-bold text-white">
            Key Architectural Decisions
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-zinc-400">
            {project.architecture.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 flex flex-col items-stretch justify-between gap-4 border-t border-zinc-800 pt-8 sm:mt-16 sm:flex-row sm:items-center">
        <Link
          href={ROUTES.PROJECTS}
          className="inline-flex min-h-[44px] touch-manipulation items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          &larr; Back to all projects
        </Link>
        <Link
          href={ROUTES.BOOK}
          className="inline-flex min-h-[44px] touch-manipulation items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
        >
          Discuss a similar project &rarr;
        </Link>
      </div>
    </article>
  );
}
