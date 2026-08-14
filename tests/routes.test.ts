import { describe, expect, it } from 'bun:test';
import { getBreadcrumbs, NAV_LINKS, ROUTES } from '@/lib/routes';

describe('Information Architecture & Routes (CV-8)', () => {
  it('should define valid route constants for all core sections', () => {
    expect(ROUTES.HOME).toBe('/');
    expect(ROUTES.PROJECTS).toBe('/projects');
    expect(ROUTES.PROJECT_DETAIL('spatial-canvas-engine')).toBe('/projects/spatial-canvas-engine');
    expect(ROUTES.SERVICES).toBe('/services');
    expect(ROUTES.ABOUT).toBe('/about');
    expect(ROUTES.BOOK).toBe('/book');
  });

  it('should have consistent navigation link definitions matching route constants', () => {
    expect(NAV_LINKS.length).toBeGreaterThanOrEqual(4);

    const hrefs = NAV_LINKS.map((link) => link.href);
    expect(hrefs).toContain(ROUTES.PROJECTS);
    expect(hrefs).toContain(ROUTES.SERVICES);
    expect(hrefs).toContain(ROUTES.ABOUT);
    expect(hrefs).toContain(ROUTES.BOOK);

    NAV_LINKS.forEach((link) => {
      expect(link.title).toBeDefined();
      expect(link.title.length).toBeGreaterThan(0);
      expect(link.href.startsWith('/')).toBe(true);
    });
  });

  it('should build breadcrumbs correctly for root path', () => {
    const rootCrumbs = getBreadcrumbs('/');
    expect(rootCrumbs).toHaveLength(1);
    expect(rootCrumbs[0]).toEqual({
      label: 'Home',
      href: '/',
      isCurrent: true,
    });
  });

  it('should build breadcrumbs correctly for top-level pages', () => {
    const projectCrumbs = getBreadcrumbs('/projects');
    expect(projectCrumbs).toHaveLength(2);
    expect(projectCrumbs[0]).toEqual({
      label: 'Home',
      href: '/',
      isCurrent: false,
    });
    expect(projectCrumbs[1]).toEqual({
      label: 'Projects',
      href: '/projects',
      isCurrent: true,
    });
  });

  it('should build breadcrumbs correctly for nested dynamic routes', () => {
    const detailCrumbs = getBreadcrumbs('/projects/spatial-canvas-engine');
    expect(detailCrumbs).toHaveLength(3);
    expect(detailCrumbs[0]?.label).toBe('Home');
    expect(detailCrumbs[1]?.label).toBe('Projects');
    expect(detailCrumbs[1]?.href).toBe('/projects');
    expect(detailCrumbs[2]?.label).toBe('Spatial Canvas Engine');
    expect(detailCrumbs[2]?.href).toBe('/projects/spatial-canvas-engine');
    expect(detailCrumbs[2]?.isCurrent).toBe(true);
  });
});
