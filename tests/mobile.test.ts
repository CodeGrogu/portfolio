import { describe, expect, it } from 'bun:test';
import * as fs from 'node:fs';
import * as path from 'node:path';

describe('Mobile Composability & Responsive Experience (CV-44)', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('should declare mobile safe-area insets, dynamic dvh, and touch-action manipulation in globals.css', () => {
    const globalsCss = fs.readFileSync(path.join(rootDir, 'src/styles/globals.css'), 'utf-8');

    expect(globalsCss).toContain('--safe-area-top: env(safe-area-inset-top');
    expect(globalsCss).toContain('--safe-area-bottom: env(safe-area-inset-bottom');
    expect(globalsCss).toContain('min-height: 100dvh');
    expect(globalsCss).toContain('touch-action: manipulation');
    expect(globalsCss).toContain('text-size-adjust: 100%');
    expect(globalsCss).toContain('overflow-x: hidden');
    expect(globalsCss).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('should configure viewportFit cover and scaling in layout.tsx', () => {
    const layoutContent = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf-8');

    expect(layoutContent).toContain("viewportFit: 'cover'");
    expect(layoutContent).toContain("width: 'device-width'");
    expect(layoutContent).toContain('min-h-dvh');
    expect(layoutContent).toContain('overflow-x-hidden');
  });

  it('should enforce 16px mobile font-size on Input and Textarea to prevent iOS Safari auto-zoom', () => {
    const inputContent = fs.readFileSync(
      path.join(rootDir, 'src/components/ui/input.tsx'),
      'utf-8',
    );
    const textareaContent = fs.readFileSync(
      path.join(rootDir, 'src/components/ui/textarea.tsx'),
      'utf-8',
    );

    expect(inputContent).toContain('text-base sm:text-sm');
    expect(inputContent).toContain('min-h-[44px]');
    expect(inputContent).toContain('touch-manipulation');

    expect(textareaContent).toContain('text-base sm:text-sm');
    expect(textareaContent).toContain('touch-manipulation');
  });

  it('should include touch-manipulation and minimum touch targets on Button variants', () => {
    const buttonContent = fs.readFileSync(
      path.join(rootDir, 'src/components/ui/button.tsx'),
      'utf-8',
    );

    expect(buttonContent).toContain('touch-manipulation');
    expect(buttonContent).toContain('min-h-[44px]');
    expect(buttonContent).toContain('min-h-[48px]');
  });

  it('should implement accessible 44x44px touch targets on mobile nav toggles and drawer links', () => {
    const headerContent = fs.readFileSync(
      path.join(rootDir, 'src/components/navigation/header.tsx'),
      'utf-8',
    );
    const mobileNavContent = fs.readFileSync(
      path.join(rootDir, 'src/components/navigation/mobile-nav.tsx'),
      'utf-8',
    );

    // Header hamburger button
    expect(headerContent).toContain('min-h-[44px] min-w-[44px]');
    expect(headerContent).toContain('touch-manipulation');

    // MobileNav drawer close button and links
    expect(mobileNavContent).toContain('min-h-[44px] min-w-[44px]');
    expect(mobileNavContent).toContain('min-h-[48px]');
    expect(mobileNavContent).toContain('safe-area-inset-top');
    expect(mobileNavContent).toContain('safe-area-inset-bottom');
    expect(mobileNavContent).toContain('max-h-dvh');
  });

  it('should provide responsive mobile wrapping on action buttons across page layouts', () => {
    const aboutContent = fs.readFileSync(path.join(rootDir, 'src/app/about/page.tsx'), 'utf-8');
    const projectsDetailContent = fs.readFileSync(
      path.join(rootDir, 'src/app/projects/[slug]/page.tsx'),
      'utf-8',
    );
    const bookContent = fs.readFileSync(path.join(rootDir, 'src/app/book/page.tsx'), 'utf-8');

    expect(aboutContent).toContain('flex flex-col items-stretch');
    expect(projectsDetailContent).toContain('flex flex-col items-stretch');
    expect(bookContent).toContain('min-h-[44px]');
  });

  it('should support accessible mobile dialog sizing and 44x44 dismiss target', () => {
    const dialogContent = fs.readFileSync(
      path.join(rootDir, 'src/components/ui/dialog.tsx'),
      'utf-8',
    );

    expect(dialogContent).toContain('max-h-[90dvh]');
    expect(dialogContent).toContain('min-h-[44px] min-w-[44px]');
    expect(dialogContent).toContain('touch-manipulation');
  });
});
