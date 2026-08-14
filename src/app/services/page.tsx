import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Services & Capabilities - CodeGrogu Portfolio',
  description:
    'Full-stack software architecture, Web3D rendering systems, real-time spatial interfaces, and performance consulting.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Web3D & Real-Time Graphics Engineering',
      description:
        'Custom WebGPU and Three.js interactive scenes, product configurators, data visualizers, and shader pipelines engineered for 60fps across mobile and desktop.',
      deliverables: [
        'WebGPU-first pipelines with WebGL fallback',
        'Custom WGSL & GLSL fragment/vertex shaders',
        'Draco/Meshopt 3D asset compression & LOD setups',
        'Spatial UX and camera interaction mechanics',
      ],
    },
    {
      title: 'Full-Stack Web Systems & Architecture',
      description:
        'Resilient full-stack applications with Next.js 16, React 19, TypeScript, and serverless databases designed for atomic transactions and high concurrency.',
      deliverables: [
        'Next.js 16 App Router & Server Components architecture',
        'Neon Serverless PostgreSQL & Drizzle ORM schemas',
        'Zod runtime validation and API error contracts',
        'Upstash Redis rate-limiting & caching strategies',
      ],
    },
    {
      title: 'Performance, Accessibility & Core Web Vitals',
      description:
        'Auditing, refactoring, and optimizing digital experiences to achieve sub-second load times, WCAG 2.2 AA accessibility, and top-tier SEO rankings.',
      deliverables: [
        'Core Web Vitals profiling & bundle tree-shaking',
        'WCAG 2.2 AA accessibility audits and keyboard navigation',
        'Automated Playwright E2E & unit test suites',
        'Structured schema.org SEO metadata optimization',
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Services & Technical Solutions
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Providing specialized engineering capabilities for high-impact web applications, immersive
          3D graphics, and resilient full-stack systems.
        </p>
      </div>

      <div className="mt-12 space-y-8 sm:mt-16 sm:space-y-12">
        {services.map((service, idx) => (
          <section
            key={idx}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700 sm:p-8"
          >
            <h2 className="text-xl font-bold text-white sm:text-2xl">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {service.description}
            </p>

            <div className="mt-6">
              <h3 className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                Core Deliverables
              </h3>
              <ul className="mt-3 grid grid-cols-1 gap-2.5 text-sm text-zinc-300 sm:grid-cols-2">
                {service.deliverables.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center sm:mt-16 sm:p-12">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Ready to collaborate on a project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
          Let’s discuss your technical architecture, requirements, and delivery milestones.
        </p>
        <div className="mt-6">
          <Link
            href={ROUTES.BOOK}
            className="inline-flex min-h-[44px] touch-manipulation items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
          >
            Schedule Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
}
