import { describe, it, expect } from 'bun:test';
import { SERVICES, ABOUT_PILLARS, TECH_STACK_CATEGORIES } from '@/lib/services-data';
import { ServicesSection, ServiceCard } from '@/components/services';
import { AboutSection } from '@/components/about';

describe('Services & About Systems (CV-41)', () => {
  describe('Services Data Specifications', () => {
    it('should define all 4 core service packages', () => {
      expect(SERVICES.length).toBe(4);
      const ids = SERVICES.map((s) => s.id);
      expect(ids).toContain('fullstack-web-development');
      expect(ids).toContain('web3d-creative-engineering');
      expect(ids).toContain('cloud-database-systems');
      expect(ids).toContain('ai-automation-systems');
    });

    it('should have complete deliverable breakdowns and outcomes for every service', () => {
      for (const service of SERVICES) {
        expect(service.title.length).toBeGreaterThan(5);
        expect(service.subtitle.length).toBeGreaterThan(10);
        expect(service.description.length).toBeGreaterThan(20);
        expect(service.deliverables.length).toBeGreaterThanOrEqual(4);
        expect(service.outcomes.length).toBeGreaterThanOrEqual(3);
        expect(service.technologies.length).toBeGreaterThanOrEqual(5);
        expect(service.timeline.length).toBeGreaterThan(3);
        expect(service.idealFor.length).toBeGreaterThan(10);

        for (const deliverable of service.deliverables) {
          expect(deliverable.title.length).toBeGreaterThan(3);
          expect(deliverable.description.length).toBeGreaterThan(10);
        }
      }
    });

    it('should strictly align tech stack with certified Linear versions', () => {
      const fullstack = SERVICES.find((s) => s.id === 'fullstack-web-development');
      expect(fullstack?.technologies).toContain('Next.js 16');
      expect(fullstack?.technologies).toContain('React 19');
      expect(fullstack?.technologies).toContain('Drizzle ORM');
      expect(fullstack?.technologies).toContain('Neon PostgreSQL');
      expect(fullstack?.technologies).toContain('Bun');

      const web3d = SERVICES.find((s) => s.id === 'web3d-creative-engineering');
      expect(web3d?.technologies).toContain('WebGPU');
      expect(web3d?.technologies).toContain('Three.js');
      expect(web3d?.technologies).toContain('WGSL');
    });
  });

  describe('About & Architectural Pillars Data Specifications', () => {
    it('should define the 4 core architectural philosophy pillars', () => {
      expect(ABOUT_PILLARS.length).toBe(4);
      const metrics = ABOUT_PILLARS.map((p) => p.metric);
      expect(metrics).toContain('60 FPS');
      expect(metrics).toContain('0 Any');
      expect(metrics).toContain('< 100ms');
      expect(metrics).toContain('100%');
    });

    it('should define all 4 tech stack mastery categories with complete skill lists', () => {
      expect(TECH_STACK_CATEGORIES.length).toBe(4);
      for (const category of TECH_STACK_CATEGORIES) {
        expect(category.category.length).toBeGreaterThan(3);
        expect(category.description.length).toBeGreaterThan(10);
        expect(category.skills.length).toBeGreaterThanOrEqual(6);
      }
    });
  });

  describe('Component Exports & Module Contracts', () => {
    it('should export ServicesSection and ServiceCard from services module', () => {
      expect(typeof ServicesSection).toBe('function');
      expect(typeof ServiceCard).toBe('function');
    });

    it('should export AboutSection from about module', () => {
      expect(typeof AboutSection).toBe('function');
    });
  });
});
