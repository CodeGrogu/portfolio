'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { ProjectCaseStudy } from '@/types/projects';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  priority?: boolean;
  headingLevel?: 'h2' | 'h3';
  className?: string;
}

export function ProjectCard({
  project,
  priority = false,
  headingLevel = 'h2',
  className,
}: ProjectCardProps) {
  const HeadingTag = headingLevel;

  return (
    <article
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-2xl hover:shadow-emerald-950/20',
        className,
      )}
    >
      <div>
        {/* Thumbnail with next/image and blur placeholder */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            placeholder="blur"
            blurDataURL={project.thumbnail.blurDataURL}
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badge overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <Badge
              variant={project.badgeVariant}
              className="text-xs font-semibold backdrop-blur-md"
            >
              {project.categoryLabel}
            </Badge>
            {project.featured && (
              <Badge
                variant="emerald"
                className="bg-emerald-500/20 font-mono text-[10px] text-emerald-300"
              >
                Featured
              </Badge>
            )}
          </div>

          <div className="absolute top-4 right-4 rounded-full border border-zinc-800 bg-zinc-950/80 px-2.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur-md">
            {project.timeline}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <HeadingTag className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400 sm:text-2xl">
            <Link
              href={ROUTES.PROJECT_DETAIL(project.slug)}
              className="touch-manipulation rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {project.title}
            </Link>
          </HeadingTag>

          <p className="mt-2 font-mono text-xs font-medium text-emerald-400/90">
            {project.tagline}
          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
            {project.summary}
          </p>

          {/* Key Metrics Chips */}
          <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-3">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
                  {m.label}
                </div>
                <div className="font-mono text-sm font-bold text-white">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer / Action Links */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 bg-zinc-950/40 px-6 py-4">
        <Link
          href={ROUTES.PROJECT_DETAIL(project.slug)}
          className="inline-flex min-h-[44px] touch-manipulation items-center gap-1.5 rounded-md text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          Read Case Study{' '}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex h-9 w-9 touch-manipulation items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live deployment`}
              className="inline-flex h-9 w-9 touch-manipulation items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
