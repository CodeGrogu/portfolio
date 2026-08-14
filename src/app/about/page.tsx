import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'About - CodeGrogu Portfolio',
  description:
    'Full-stack software architect and 3D web graphics developer specializing in WebGPU, Three.js, React 19, and Next.js 16.',
};

export default function AboutPage() {
  const stackCategories = [
    {
      category: 'Web3D & Computer Graphics',
      items: [
        'Three.js',
        'WebGPU',
        'WebGL 2',
        'React Three Fiber',
        'GLSL / WGSL',
        'Draco & Meshopt',
      ],
    },
    {
      category: 'Frontend & UI Frameworks',
      items: [
        'Next.js 16 App Router',
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'GSAP',
        'Framer Motion',
      ],
    },
    {
      category: 'Backend & Cloud Infrastructure',
      items: [
        'Neon PostgreSQL',
        'Drizzle ORM',
        'Bun Runtime',
        'Upstash Redis',
        'Node.js',
        'Vercel Edge',
      ],
    },
    {
      category: 'Engineering & Quality Systems',
      items: [
        'Playwright E2E',
        'Bun Test',
        'Zod Validation',
        'ESLint / Prettier',
        'GitHub Actions CI',
        'WCAG 2.2 AA',
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          About CodeGrogu
        </h1>
        <p className="mt-4 text-lg font-medium text-emerald-400">
          Full-Stack Software Architect & 3D Web Graphics Specialist
        </p>
      </div>

      <div className="mt-12 space-y-8 text-base leading-relaxed text-zinc-300">
        <p>
          I am a software architect and creative developer focused on bridging the gap between
          rigorous systems engineering and immersive, real-time spatial web experiences.
        </p>
        <p>
          My work combines GPU-accelerated graphics pipelines (WebGPU, Three.js, custom shaders)
          with robust, type-safe full-stack foundations (Next.js 16, React 19, Neon PostgreSQL,
          Drizzle ORM). I prioritize sub-second performance, strict accessibility compliance (WCAG
          2.2 AA), and zero-compromise code quality.
        </p>
      </div>

      {/* Stack Section */}
      <section aria-labelledby="stack-heading" className="mt-16 border-t border-zinc-800 pt-12">
        <h2 id="stack-heading" className="text-2xl font-bold text-white">
          Technical Stack & Capabilities
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Core toolchain, runtime environments, and rendering technologies.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stackCategories.map((group, idx) => (
            <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-700/50 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 flex items-center justify-between border-t border-zinc-800 pt-8">
        <Link
          href={ROUTES.PROJECTS}
          className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          &larr; View Portfolio Projects
        </Link>
        <Link
          href={ROUTES.BOOK}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
        >
          Book Consultation &rarr;
        </Link>
      </div>
    </div>
  );
}
