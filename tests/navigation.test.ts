import { describe, expect, it } from 'bun:test';
import { NAV_LINKS, ROUTES } from '@/lib/routes';

describe('Navigation & Header System (CV-10)', () => {
  describe('Route and Link Constants', () => {
    it('should define all primary navigation routes', () => {
      expect(ROUTES.HOME).toBe('/');
      expect(ROUTES.PROJECTS).toBe('/projects');
      expect(ROUTES.SERVICES).toBe('/services');
      expect(ROUTES.ABOUT).toBe('/about');
      expect(ROUTES.BOOK).toBe('/book');
    });

    it('should include 4 main items in NAV_LINKS with valid hrefs', () => {
      expect(NAV_LINKS.length).toBe(4);
      const hrefs = NAV_LINKS.map((item) => item.href);
      expect(hrefs).toContain(ROUTES.PROJECTS);
      expect(hrefs).toContain(ROUTES.SERVICES);
      expect(hrefs).toContain(ROUTES.ABOUT);
      expect(hrefs).toContain(ROUTES.BOOK);
    });
  });

  describe('Header and MobileNav Components File Contract', () => {
    it('should contain client-side navigation features in Header', async () => {
      const headerCode = await Bun.file('src/components/navigation/header.tsx').text();
      expect(headerCode).toContain("'use client'");
      expect(headerCode).toContain('usePathname');
      expect(headerCode).toContain('MobileNav');
      expect(headerCode).toContain('aria-label="Primary Navigation"');
      expect(headerCode).toContain('aria-expanded');
      expect(headerCode).toContain('mobile-navigation-drawer');
      expect(headerCode).toContain('Available for Q3/Q4');
    });

    it('should implement accessible modal drawer attributes in MobileNav', async () => {
      const mobileNavCode = await Bun.file('src/components/navigation/mobile-nav.tsx').text();
      expect(mobileNavCode).toContain("'use client'");
      expect(mobileNavCode).toContain('role="dialog"');
      expect(mobileNavCode).toContain('aria-modal="true"');
      expect(mobileNavCode).toContain('aria-label="Mobile Navigation Menu"');
      expect(mobileNavCode).toContain('Escape');
      expect(mobileNavCode).toContain('mobile-navigation-drawer');
    });
  });
});
