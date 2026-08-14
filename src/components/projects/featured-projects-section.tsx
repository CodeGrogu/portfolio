import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/lib/projects-data';
import { ProjectsFilterGrid } from './projects-filter-grid';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

interface FeaturedProjectsSectionProps {
  className?: string;
}

export function FeaturedProjectsSection({ className }: FeaturedProjectsSectionProps) {
  return (
    <Section
      id="projects"
      className={`border-t border-zinc-800/80 py-20 sm:py-28 ${className || ''}`}
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" withPulse className="text-xs font-semibold">
                Engineering Case Studies
              </Badge>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Systems & Case Studies
            </h2>
            <p className="mt-2 text-base leading-relaxed text-zinc-400">
              Interactive Web3D graphics, high-concurrency full-stack architectures, and creative
              shader experiments engineered for resilience and performance.
            </p>
          </div>

          <Button asChild variant="outline" size="sm" className="shrink-0">
            <Link href={ROUTES.PROJECTS}>
              All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Interactive Filter Grid */}
        <div className="mt-12 sm:mt-16">
          <ProjectsFilterGrid projects={PROJECTS} cardHeadingLevel="h3" />
        </div>
      </Container>
    </Section>
  );
}
