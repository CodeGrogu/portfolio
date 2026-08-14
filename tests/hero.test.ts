import { describe, expect, it } from 'bun:test';

describe('Hero Section Component & Architecture Teaser (CV-10)', () => {
  it('should export HeroSection from hero index barrel', async () => {
    const indexCode = await Bun.file('src/components/hero/index.ts').text();
    expect(indexCode).toContain("export * from './hero-section';");
  });

  it('should include key tech tags, metrics, and accessibility landmarks in HeroSection', async () => {
    const heroCode = await Bun.file('src/components/hero/hero-section.tsx').text();
    expect(heroCode).toContain("'use client'");
    expect(heroCode).toContain('aria-labelledby="hero-title"');
    expect(heroCode).toContain('SpatialPipeline.wgsl');
    expect(heroCode).toContain('atomic-booking.ts');
    expect(heroCode).toContain('system-telemetry.json');
    expect(heroCode).toContain('60 FPS');
    expect(heroCode).toContain('100%');
    expect(heroCode).toContain('Available for Q3/Q4 Projects');
  });

  it('should render HeroSection and ServicesSection on the home page', async () => {
    const pageCode = await Bun.file('src/app/page.tsx').text();
    expect(pageCode).toContain('HeroSection');
    expect(pageCode).toContain('ServicesSection');
    expect(pageCode).toContain('AboutSection');
    expect(pageCode).toContain('FeaturedProjectsSection');
  });
});
