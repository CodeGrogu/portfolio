import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Projects - CodeGrogu Portfolio',
  description:
    'Selected Web3D, full-stack, and mobile engineering case studies and technical architectures.',
};

export default function ProjectsPage() {
  const sampleProjects = [
    {
      slug: 'spatial-canvas-engine',
      title: 'Spatial Canvas Engine',
      description: 'WebGPU-first real-time 3D asset configurator and procedural shader system.',
      tags: ['WebGPU', 'Three.js', 'React 19', 'TypeScript'],
    },
    {
      slug: 'neon-drizzle-booking-core',
      title: 'Transactional Booking Engine',
      description:
        'Atomic scheduling platform built with Neon PostgreSQL, Drizzle ORM, and Upstash Redis rate limiting.',
      tags: ['Next.js 16', 'Neon DB', 'Drizzle ORM', 'Zod'],
    },
    {
      slug: 'ambient-audio-visualizer',
      title: 'Ambient Audio Visualizer',
      description:
        'Interactive particle audio reactive WebGL experience with custom GLSL frequency bloom shaders.',
      tags: ['WebGL 2', 'GLSL Shaders', 'Web Audio API', 'R3F'],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Featured Engineering Projects
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          A showcase of high-fidelity 3D graphics, full-stack web applications, and architectural
          case studies.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sampleProjects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            <div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-emerald-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                <Link
                  href={ROUTES.PROJECT_DETAIL(project.slug)}
                  className="touch-manipulation hover:text-emerald-400"
                >
                  {project.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>
            </div>

            <div className="mt-6 border-t border-zinc-800 pt-4">
              <Link
                href={ROUTES.PROJECT_DETAIL(project.slug)}
                className="inline-flex min-h-[44px] touch-manipulation items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Read Case Study &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
