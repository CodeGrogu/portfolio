import { describe, expect, it } from 'bun:test';
import { cn } from '@/lib/utils';

describe('Design System Primitives & Utilities (CV-9)', () => {
  describe('cn (Class Merger Utility)', () => {
    it('should merge classes correctly and handle conditional values', () => {
      expect(cn('px-4 py-2', true && 'text-white', false && 'text-black')).toBe(
        'px-4 py-2 text-white',
      );
    });

    it('should resolve tailwind conflict classes properly', () => {
      expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
      expect(cn('p-4', 'p-6')).toBe('p-6');
      expect(cn('text-sm', 'text-lg')).toBe('text-lg');
    });
  });

  describe('Design Tokens Invariants', () => {
    it('should have standard CSS variable definitions in globals.css', async () => {
      const globalsCss = await Bun.file('src/styles/globals.css').text();
      expect(globalsCss).toContain('--background: #090a0f;');
      expect(globalsCss).toContain('--primary: #10b981;');
      expect(globalsCss).toContain('--accent-cyan: #06b6d4;');
      expect(globalsCss).toContain('--glass-bg:');
      expect(globalsCss).toContain(':focus-visible');
    });

    it('should configure font variables in RootLayout', async () => {
      const layoutTsx = await Bun.file('src/app/layout.tsx').text();
      expect(layoutTsx).toContain('--font-sans');
      expect(layoutTsx).toContain('--font-mono');
      expect(layoutTsx).toContain('JetBrains_Mono');
      expect(layoutTsx).toContain('Inter');
    });
  });

  describe('UI Component Barrel Exports', () => {
    it('should export all essential UI primitives from index', async () => {
      const uiIndex = await import('@/components/ui');
      expect(uiIndex.Button).toBeDefined();
      expect(uiIndex.Badge).toBeDefined();
      expect(uiIndex.Card).toBeDefined();
      expect(uiIndex.CardHeader).toBeDefined();
      expect(uiIndex.CardTitle).toBeDefined();
      expect(uiIndex.CardDescription).toBeDefined();
      expect(uiIndex.CardContent).toBeDefined();
      expect(uiIndex.CardFooter).toBeDefined();
      expect(uiIndex.Input).toBeDefined();
      expect(uiIndex.Textarea).toBeDefined();
      expect(uiIndex.Dialog).toBeDefined();
      expect(uiIndex.Container).toBeDefined();
      expect(uiIndex.Section).toBeDefined();
      expect(uiIndex.Spinner).toBeDefined();
      expect(uiIndex.Skeleton).toBeDefined();
    });
  });
});
