import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects-data';
import { ProjectsFilterGrid } from '@/components/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Engineering Projects & Case Studies - CodeGrogu Portfolio',
  description:
    'Deep-dive technical case studies covering WebGPU graphics pipelines, transactional booking systems, audio reactive shaders, and cloud databases.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2">
          <Badge variant="emerald" withPulse className="text-xs font-semibold">
            Case Studies
          </Badge>
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Featured Engineering Projects
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          A showcase of high-fidelity 3D graphics, full-stack web applications, real-time shaders,
          and architectural case studies engineered for performance and scalability.
        </p>
      </div>

      {/* Filterable Projects Grid */}
      <div className="mt-12 sm:mt-16">
        <ProjectsFilterGrid projects={PROJECTS} />
      </div>

      {/* Discovery CTA Banner */}
      <div className="mt-16 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center backdrop-blur-md sm:p-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Have an ambitious technical build in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
          Let’s discuss your technical architecture, requirements, and delivery milestones.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="glow" size="lg">
            <Link href={ROUTES.BOOK}>Schedule Discovery Call</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={ROUTES.SERVICES}>View Service Offerings</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
