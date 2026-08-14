import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '@/lib/services-data';
import { ServiceCard } from './service-card';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

interface ServicesSectionProps {
  showAllCta?: boolean;
  className?: string;
}

export function ServicesSection({ showAllCta = true, className }: ServicesSectionProps) {
  return (
    <Section
      id="services"
      aria-labelledby="services-heading"
      className={
        className ?? 'border-t border-zinc-800/80 bg-zinc-950/40 py-20 backdrop-blur-sm sm:py-24'
      }
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" withPulse className="text-xs font-semibold">
                Specialized Offerings
              </Badge>
            </div>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Technical Services & Capabilities
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Architecting GPU-accelerated graphics pipelines, high-throughput backend systems, and
              modern full-stack web applications with deterministic precision.
            </p>
          </div>

          {showAllCta && (
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link href={ROUTES.SERVICES}>
                All Capabilities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        {/* Responsive Services Grid: 1 col mobile, 2 col tablet/desktop */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Engagement Philosophy Callout */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-md sm:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
                Sprint Engagements
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Focused 2 to 4 week architectural sprints delivering discrete WebGPU shaders,
                database migrations, or key features.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                Full-Lifecycle Delivery
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Complete design, engineering, test automation, and production deployment on Vercel
                with 100% Lighthouse guarantee.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                Technical Advisory
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Architecture reviews, Web3D feasibility audits, performance profiling, and senior
                engineering pair programming.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-zinc-800/80 pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>Available for select contract, consulting, and advisory projects.</span>
            </div>

            <Button asChild variant="glow" size="sm">
              <Link href={ROUTES.BOOK}>
                Initiate Project Discovery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
