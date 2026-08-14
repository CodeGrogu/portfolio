---
name: playwright-testing
description: Architect, configure, and execute end-to-end (E2E), accessibility, visual regression, and WebGPU/WebGL canvas testing using Microsoft Playwright. Use whenever creating or debugging automated browser tests, testing Next.js 16 App Router flows, configuring headless WebGPU Chromium flags, or running cross-browser integration suites.
---

# Playwright E2E & WebGPU Testing Engineering

Comprehensive guide for configuring, writing, and automating end-to-end tests, visual regression suites, accessibility scans, and WebGPU graphics assertions with Microsoft Playwright.

---

## 1. Project Configuration (`playwright.config.ts`)

Standard configuration integrating Next.js 16, Bun runtime, and hardware-accelerated Chromium launch flags:

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['github'], ['html']] : 'list',

  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium-webgpu',
      use: {
        ...devices['Desktop Chrome'],
        // Hardware acceleration & WebGPU flags in headless mode
        launchOptions: {
          args: [
            '--enable-unsafe-webgpu',
            '--use-angle=vulkan',
            '--enable-features=Vulkan,DefaultANGLEVulkan,VulkanFromANGLE',
            '--ignore-gpu-blocklist',
            '--no-sandbox',
          ],
        },
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],

  // Automatic Next.js local server management
  webServer: {
    command: 'bun run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
```

---

## 2. WebGPU & 3D Canvas Testing Patterns

Testing Three.js / WebGPU canvases requires verifying WebGL/WebGPU context creation, frame rendering, and canvas pixel data:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Web3D Canvas Engine', () => {
  test('should mount 3D canvas and initialize GPU rendering context', async ({ page }) => {
    await page.goto('/');

    const canvas = page.locator('canvas[data-engine="webgpu"]');
    await expect(canvas).toBeVisible({ timeout: 10000 });

    // Verify WebGPU / WebGL context active in browser runtime
    const hasGpuContext = await page.evaluate(() => {
      const canvasEl = document.querySelector('canvas') as HTMLCanvasElement | null;
      if (!canvasEl) return false;
      const webgpuCtx = canvasEl.getContext('webgpu');
      const webglCtx = canvasEl.getContext('webgl2') || canvasEl.getContext('webgl');
      return Boolean(webgpuCtx || webglCtx);
    });

    expect(hasGpuContext).toBe(true);
  });

  test('should render without 3D memory leaks or unhandled errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    expect(consoleErrors).toHaveLength(0);
  });
});
```

---

## 3. Accessibility Testing with Axe-Core

Automate WCAG 2.2 AA validation across all certified routes:

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('A11y Quality Gate', () => {
  const routes = ['/', '/projects', '/services', '/about', '/book', '/design-system'];

  for (const route of routes) {
    test(`route ${route} should have zero WCAG 2.2 AA violations`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState('domcontentloaded');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
```

---

## 4. Visual Regression Testing

Capture and compare deterministic pixel-level screenshots:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Visual Regression Suite', () => {
  test('hero section visual snapshot matches baseline', async ({ page }) => {
    await page.goto('/');
    // Mask dynamic timestamps, animations, or 3D noise
    await expect(page.locator('#hero-heading')).toBeVisible();

    await expect(page).toHaveScreenshot('home-hero-desktop.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
```

---

## 5. CLI Execution Recipes

```bash
# Run all tests
bunx playwright test

# Run tests in headed browser mode
bunx playwright test --headed

# Run only WebGPU Chromium project
bunx playwright test --project=chromium-webgpu

# Update visual regression snapshots
bunx playwright test -u

# Show interactive HTML test report
bunx playwright show-report
```
