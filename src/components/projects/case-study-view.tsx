import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  Building,
} from 'lucide-react';
import { ProjectCaseStudy } from '@/types/projects';
import { CodeBlock } from './code-block';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ROUTES, getBreadcrumbs } from '@/lib/routes';

interface CaseStudyViewProps {
  project: ProjectCaseStudy;
  nextProject?: ProjectCaseStudy | undefined;
  prevProject?: ProjectCaseStudy | undefined;
}

export function CaseStudyView({ project, nextProject, prevProject }: CaseStudyViewProps) {
  const breadcrumbs = getBreadcrumbs(`/projects/${project.slug}`);

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumbs" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 sm:text-sm">
          {breadcrumbs.map((crumb, idx) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {idx > 0 && <span className="text-zinc-600">/</span>}
              {crumb.isCurrent ? (
                <span aria-current="page" className="font-semibold text-emerald-400">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="touch-manipulation transition-colors hover:text-white"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Header Banner */}
      <header className="border-b border-zinc-800/80 pb-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant={project.badgeVariant} className="text-xs font-semibold">
            {project.categoryLabel}
          </Badge>
          <Badge variant="emerald" className="font-mono text-xs">
            Case Study
          </Badge>
          <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-0.5 text-xs text-zinc-400">
            <Clock className="h-3.5 w-3.5 text-emerald-400" />
            <span>{project.timeline}</span>
          </div>
          {project.client && (
            <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-0.5 text-xs text-zinc-400">
              <Building className="h-3.5 w-3.5 text-cyan-400" />
              <span>{project.client}</span>
            </div>
          )}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg font-medium text-emerald-400 sm:text-xl">{project.tagline}</p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {project.summary}
        </p>

        {/* Action CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <Button asChild variant="glow" size="md">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Interactive System <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="md">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View Source Repository <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          <Button asChild variant="ghost" size="md">
            <Link href={ROUTES.BOOK}>
              Consult on Architecture <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Visual Image Banner with next/image */}
      <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
        <div className="relative aspect-video w-full">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            placeholder="blur"
            blurDataURL={project.thumbnail.blurDataURL}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Metrics Scorecard Grid */}
      <section aria-labelledby="metrics-heading" className="mt-12">
        <h2 id="metrics-heading" className="sr-only">
          Engineering Performance Metrics
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all hover:border-zinc-700"
            >
              <div className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                {m.label}
              </div>
              <div className="mt-2 font-mono text-2xl font-extrabold text-white sm:text-3xl">
                {m.value}
              </div>
              {m.description && (
                <div className="mt-1 text-xs text-emerald-400/90">{m.description}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section
        aria-labelledby="tech-stack-heading"
        className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-md sm:p-8"
      >
        <h2
          id="tech-stack-heading"
          className="text-xs font-semibold tracking-wider text-emerald-400 uppercase"
        >
          Technology Toolchain & Stack
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-1.5 font-mono text-xs font-medium text-zinc-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Problem Statement & Objectives */}
      <section aria-labelledby="problem-heading" className="mt-16 space-y-6">
        <div className="inline-flex items-center gap-2">
          <Badge variant="cyan" className="text-xs font-semibold">
            Context & Objectives
          </Badge>
        </div>
        <h2
          id="problem-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          The Engineering Challenge
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-zinc-300">
            <p>{project.problemStatement.challenge}</p>
            <p className="text-zinc-400">{project.problemStatement.context}</p>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6">
            <h3 className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Target Architecture Goals
            </h3>
            <ul className="mt-4 space-y-3">
              {project.problemStatement.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 sm:text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span className="leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Architectural Decisions */}
      <section aria-labelledby="architecture-heading" className="mt-16 space-y-6">
        <div className="inline-flex items-center gap-2">
          <Badge variant="emerald" className="text-xs font-semibold">
            Systems Design
          </Badge>
        </div>
        <h2
          id="architecture-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Architectural Blueprint & Decisions
        </h2>
        <p className="text-base leading-relaxed text-zinc-400">{project.architecture.summary}</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {project.architecture.decisions.map((dec, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-zinc-700"
            >
              <div>
                <span className="font-mono text-xs text-emerald-400">Decision 0{idx + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-white">{dec.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">{dec.rationale}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Deep Dive & Code Implementation */}
      <section aria-labelledby="technical-deep-dive-heading" className="mt-16 space-y-6">
        <div className="inline-flex items-center gap-2">
          <Badge variant="violet" className="text-xs font-semibold">
            Code & Shaders
          </Badge>
        </div>
        <h2
          id="technical-deep-dive-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {project.technicalDeepDive.title}
        </h2>
        <p className="text-base leading-relaxed text-zinc-400">
          {project.technicalDeepDive.description}
        </p>

        <div className="mt-6">
          <CodeBlock snippet={project.technicalDeepDive.snippet} />
        </div>
      </section>

      {/* Measurable Outcomes & Impact */}
      <section aria-labelledby="outcomes-heading" className="mt-16 space-y-6">
        <div className="inline-flex items-center gap-2">
          <Badge variant="emerald" className="text-xs font-semibold">
            Results & Verification
          </Badge>
        </div>
        <h2
          id="outcomes-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Delivered Outcomes & Business Impact
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {project.outcomes.map((out, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-base font-bold text-white sm:text-lg">{out.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">{out.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <div className="mt-16 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center backdrop-blur-md sm:p-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Need a similar architecture engineered?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
          Let’s discuss your technical roadmap, 3D graphics rendering pipeline, or full-stack
          database scalability in a dedicated architecture discovery call.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="glow" size="lg">
            <Link href={ROUTES.BOOK}>Schedule Architecture Call</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={ROUTES.SERVICES}>Explore Service Packages</Link>
          </Button>
        </div>
      </div>

      {/* Next / Previous Project Navigation */}
      <nav aria-label="Case Study Pagination" className="mt-16 border-t border-zinc-800/80 pt-8">
        <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
          {prevProject ? (
            <Link
              href={ROUTES.PROJECT_DETAIL(prevProject.slug)}
              className="group inline-flex min-h-[44px] touch-manipulation items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Previous: {prevProject.title}</span>
            </Link>
          ) : (
            <Link
              href={ROUTES.PROJECTS}
              className="inline-flex min-h-[44px] touch-manipulation items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              &larr; All Case Studies
            </Link>
          )}

          {nextProject && (
            <Link
              href={ROUTES.PROJECT_DETAIL(nextProject.slug)}
              className="group inline-flex min-h-[44px] touch-manipulation items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white sm:text-right"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
