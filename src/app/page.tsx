import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-600/30 to-cyan-500/20 opacity-40"
        />
      </div>

      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Web3D & Full-Stack Systems Architect
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Engineering{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              high-performance
            </span>{' '}
            digital products & 3D experiences.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Specializing in GPU-accelerated web graphics, real-time spatial interfaces, and scalable
            full-stack web applications with React 19, Next.js 16, and Three.js.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={ROUTES.PROJECTS}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-zinc-950 transition-all hover:bg-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:outline-none"
            >
              Explore Projects
            </Link>
            <Link
              href={ROUTES.SERVICES}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-base font-semibold text-zinc-200 transition-all hover:bg-zinc-800 hover:text-white"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Overview Section */}
      <section
        aria-labelledby="capabilities-heading"
        className="border-t border-[var(--border)] bg-zinc-950/40 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="capabilities-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Core Engineering Capabilities
          </h2>
          <p className="mt-2 text-zinc-400">
            High-fidelity technical foundations built for speed, responsiveness, and accessibility.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 font-bold text-emerald-400">
                3D
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">WebGPU & Three.js</h3>
              <p className="mt-2 text-sm text-zinc-400">
                GPU-first 3D scenes, custom WGSL/GLSL shaders, Draco/Meshopt asset compression, and
                60fps real-time spatial interfaces.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 font-bold text-cyan-400">
                FS
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Full-Stack Architecture</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Next.js 16 App Router, React 19 Server Components, Neon Serverless PostgreSQL, and
                type-safe Drizzle ORM backends.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 font-bold text-indigo-400">
                UX
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Performance & A11y</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Sub-second page loads, WCAG 2.2 AA accessibility, reduced-motion fallbacks, and
                resilient Core Web Vitals optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
