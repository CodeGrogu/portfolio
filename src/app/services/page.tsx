import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, CheckCircle2, Sparkles, Box, Code, Database, Bot } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { SERVICES } from '@/lib/services-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Services & Capabilities - CodeGrogu Portfolio',
  description:
    'Full-stack software architecture, Web3D rendering systems, real-time spatial interfaces, cloud databases, and AI automation consulting.',
};

const iconMap = {
  'fullstack-web-development': Code,
  'web3d-creative-engineering': Box,
  'cloud-database-systems': Database,
  'ai-automation-systems': Bot,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2">
          <Badge variant="emerald" withPulse className="text-xs font-semibold">
            Engineering Offerings
          </Badge>
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Services & Technical Solutions
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Specialized engineering capabilities across modern full-stack architectures,
          GPU-accelerated 3D graphics, cloud database systems, and agentic AI integrations.
        </p>
      </div>

      {/* Services Detailed Grid */}
      <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-16">
        {SERVICES.map((service, idx) => {
          const IconComponent = iconMap[service.id as keyof typeof iconMap] || Sparkles;

          return (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`service-${service.id}-heading`}
              className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-md transition-all hover:border-zinc-700 sm:p-10"
            >
              <div className="flex flex-col items-start justify-between gap-4 border-b border-zinc-800/80 pb-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant={service.badgeVariant} className="text-xs">
                        {service.badge}
                      </Badge>
                      <span className="font-mono text-xs text-zinc-400">0{idx + 1} / 04</span>
                    </div>
                    <h2
                      id={`service-${service.id}-heading`}
                      className="mt-1 text-2xl font-bold text-white sm:text-3xl"
                    >
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>
                    Timeline: <strong>{service.timeline}</strong>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {service.description}
              </p>

              {/* Deliverables & Outcomes 2-col layout */}
              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Deliverables */}
                <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6">
                  <h3 className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                    Core Deliverables & Specifications
                  </h3>
                  <div className="mt-4 space-y-4">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="space-y-1">
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          {item.title}
                        </div>
                        <p className="pl-3.5 text-xs leading-relaxed text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes & ROI */}
                <div className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6">
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                      Target Outcomes & Impact
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-zinc-800/80 pt-4">
                    <div className="text-xs font-semibold text-zinc-400">Ideal Engagement:</div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-300">{service.idealFor}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills & Booking Action */}
              <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-zinc-800/80 pt-6 sm:flex-row sm:items-center">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 text-xs font-medium text-zinc-400">Stack:</span>
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button asChild variant="glow" size="sm" className="w-full font-semibold sm:w-auto">
                  <Link href={`${ROUTES.BOOK}?service=${service.id}`}>
                    Book This Service <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          );
        })}
      </div>

      {/* Discovery Call CTA Banner */}
      <div className="mt-16 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center backdrop-blur-md sm:p-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to architect your next digital milestone?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
          Let’s discuss your technical architecture, requirements, and delivery timeline in a
          dedicated discovery session.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="glow" size="lg">
            <Link href={ROUTES.BOOK}>Schedule Discovery Call</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={ROUTES.PROJECTS}>Review Past Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
