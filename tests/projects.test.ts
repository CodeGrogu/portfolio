import { describe, it, expect } from 'bun:test';
import {
  PROJECTS,
  PROJECT_FILTER_OPTIONS,
  getProjectBySlug,
  getFeaturedProjects,
  getProjectsByCategory,
} from '@/lib/projects-data';
import {
  ProjectCard,
  ProjectsFilterGrid,
  FeaturedProjectsSection,
  CaseStudyView,
  CodeBlock,
} from '@/components/projects';
import { generateStaticParams, generateMetadata } from '@/app/projects/[slug]/page';

describe('Project Showcase & Case Study Detail Pages (CV-42)', () => {
  describe('Project Data Layer & Drizzle Schema Alignment', () => {
    it('should define all 4 case study datasets with full schema compliance', () => {
      expect(PROJECTS.length).toBe(4);
      const slugs = PROJECTS.map((p) => p.slug);
      expect(slugs).toContain('spatial-canvas-engine');
      expect(slugs).toContain('neon-drizzle-booking-core');
      expect(slugs).toContain('ambient-audio-visualizer');
      expect(slugs).toContain('cloud-data-pipeline-suite');
    });

    it('should validate complete project fields and blur placeholders', () => {
      for (const project of PROJECTS) {
        expect(project.title.length).toBeGreaterThan(5);
        expect(project.tagline.length).toBeGreaterThan(10);
        expect(project.summary.length).toBeGreaterThan(30);
        expect(project.timeline.length).toBeGreaterThan(3);
        expect(project.role.length).toBeGreaterThan(5);
        expect(project.techStack.length).toBeGreaterThanOrEqual(4);

        // Thumbnail and blur placeholder
        expect(project.thumbnail.src).toContain('/images/projects/');
        expect(project.thumbnail.alt.length).toBeGreaterThan(10);
        expect(project.thumbnail.width).toBe(1200);
        expect(project.thumbnail.height).toBe(675);
        expect(project.thumbnail.blurDataURL).toContain('data:image/svg+xml');

        // Metrics
        expect(project.metrics.length).toBeGreaterThanOrEqual(4);
        for (const metric of project.metrics) {
          expect(metric.label.length).toBeGreaterThan(2);
          expect(metric.value.length).toBeGreaterThan(0);
        }

        // Problem statement & objectives
        expect(project.problemStatement.challenge.length).toBeGreaterThan(20);
        expect(project.problemStatement.context.length).toBeGreaterThan(20);
        expect(project.problemStatement.objectives.length).toBeGreaterThanOrEqual(3);

        // Architectural decisions
        expect(project.architecture.summary.length).toBeGreaterThan(20);
        expect(project.architecture.decisions.length).toBeGreaterThanOrEqual(3);

        // Technical deep dive & code snippet
        expect(project.technicalDeepDive.title.length).toBeGreaterThan(5);
        expect(project.technicalDeepDive.snippet.code.length).toBeGreaterThan(20);
        expect(project.technicalDeepDive.snippet.filename.length).toBeGreaterThan(3);

        // Outcomes
        expect(project.outcomes.length).toBeGreaterThanOrEqual(3);
      }
    });

    it('should correctly query projects by slug and category', () => {
      const spatial = getProjectBySlug('spatial-canvas-engine');
      expect(spatial).toBeDefined();
      expect(spatial?.category).toBe('web3d');

      const nonExistent = getProjectBySlug('invalid-project-slug');
      expect(nonExistent).toBeUndefined();

      const featured = getFeaturedProjects();
      expect(featured.length).toBe(3);

      const web3dProjects = getProjectsByCategory('web3d');
      expect(web3dProjects.length).toBe(1);

      const allProjects = getProjectsByCategory('all');
      expect(allProjects.length).toBe(4);
    });

    it('should define all 5 project filter options', () => {
      expect(PROJECT_FILTER_OPTIONS.length).toBe(5);
      const filterIds = PROJECT_FILTER_OPTIONS.map((f) => f.id);
      expect(filterIds).toContain('all');
      expect(filterIds).toContain('web3d');
      expect(filterIds).toContain('fullstack');
      expect(filterIds).toContain('creative-shaders');
      expect(filterIds).toContain('cloud-systems');
    });
  });

  describe('Component Barrel Exports & Interface Contracts', () => {
    it('should export all essential project UI primitives from index', () => {
      expect(typeof ProjectCard).toBe('function');
      expect(typeof ProjectsFilterGrid).toBe('function');
      expect(typeof FeaturedProjectsSection).toBe('function');
      expect(typeof CaseStudyView).toBe('function');
      expect(typeof CodeBlock).toBe('function');
    });
  });

  describe('Next.js Dynamic Routing & Metadata Generation', () => {
    it('should return all 4 static params for SSG pre-rendering', async () => {
      const params = await generateStaticParams();
      expect(params.length).toBe(4);
      const paramSlugs = params.map((p) => p.slug);
      expect(paramSlugs).toContain('spatial-canvas-engine');
      expect(paramSlugs).toContain('neon-drizzle-booking-core');
      expect(paramSlugs).toContain('ambient-audio-visualizer');
      expect(paramSlugs).toContain('cloud-data-pipeline-suite');
    });

    it('should generate rich metadata and OpenGraph tags for project detail routes', async () => {
      const meta = await generateMetadata({
        params: Promise.resolve({ slug: 'spatial-canvas-engine' }),
      });
      expect(meta.title).toContain('Spatial Canvas Engine');
      expect(meta.description).toContain('3D asset configurator');
    });
  });
});
