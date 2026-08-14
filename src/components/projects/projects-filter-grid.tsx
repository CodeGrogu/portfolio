'use client';

import { useState, useMemo } from 'react';
import { ProjectCaseStudy, ProjectCategory } from '@/types/projects';
import { PROJECT_FILTER_OPTIONS } from '@/lib/projects-data';
import { ProjectCard } from './project-card';
import { cn } from '@/lib/utils';

interface ProjectsFilterGridProps {
  projects: ProjectCaseStudy[];
  initialCategory?: ProjectCategory;
  cardHeadingLevel?: 'h2' | 'h3';
  className?: string;
}

export function ProjectsFilterGrid({
  projects,
  initialCategory = 'all',
  cardHeadingLevel = 'h2',
  className,
}: ProjectsFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);

  // Compute category counts
  const filterOptionsWithCounts = useMemo(() => {
    return PROJECT_FILTER_OPTIONS.map((opt) => {
      const count =
        opt.id === 'all' ? projects.length : projects.filter((p) => p.category === opt.id).length;
      return { ...opt, count };
    });
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className={cn('space-y-8 sm:space-y-10', className)}>
      {/* Category Filter Pills / Bar */}
      <div
        role="tablist"
        aria-label="Filter projects by discipline"
        className="flex flex-wrap items-center gap-2 border-b border-zinc-800/80 pb-4"
      >
        {filterOptionsWithCounts.map((option) => {
          const isSelected = selectedCategory === option.id;

          return (
            <button
              key={option.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`projects-panel-${option.id}`}
              onClick={() => setSelectedCategory(option.id)}
              className={cn(
                'inline-flex min-h-[40px] touch-manipulation items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400',
                isSelected
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                  : 'border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-white',
              )}
            >
              <span>{option.label}</span>
              <span
                className={cn(
                  'py-0.2 rounded-full px-1.5 font-mono text-[10px]',
                  isSelected ? 'bg-zinc-950/20 text-zinc-950' : 'bg-zinc-800 text-zinc-400',
                )}
              >
                {option.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div
        id={`projects-panel-${selectedCategory}`}
        role="tabpanel"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={idx < 2}
              headingLevel={cardHeadingLevel}
            />
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-zinc-800 bg-zinc-900/40 p-12 text-center">
            <h3 className="text-lg font-bold text-white">No projects found in this category</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Try selecting another category filter above or view all projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
