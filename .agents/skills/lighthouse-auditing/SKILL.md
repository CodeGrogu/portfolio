---
name: lighthouse-auditing
description: Audit, profile, and optimize web applications using Google Lighthouse, Lighthouse CI (LHCI), and Chrome DevTools MCP. Use whenever analyzing Core Web Vitals (LCP, INP, CLS, FCP, TTFB), configuring automated performance and accessibility budgets, running Lighthouse in CI pipelines, or debugging page speed regressions.
---

# Lighthouse Auditing & Core Web Vitals Engineering

Comprehensive guide for auditing, optimizing, and automating Google Lighthouse scores and Core Web Vitals across the CodeGrogu Portfolio and modern web applications.

---

## 1. Core Web Vitals & Scoring Matrix

Google Lighthouse evaluates web applications across five primary categories. Each category must satisfy strict certified thresholds:

| Category                 | Target Score |       Strict Invariant       | Primary Drivers                                         |
| :----------------------- | :----------: | :--------------------------: | :------------------------------------------------------ |
| **Performance**          |   $\ge 95$   | No render-blocking resources | LCP, INP, CLS, FCP, TBT, Speed Index                    |
| **Accessibility (a11y)** |    $100$     | Zero WCAG 2.2 AA violations  | Color contrast, aria attributes, form labels, headings  |
| **Best Practices**       |    $100$     |  Modern security & web APIs  | HTTPS, CSP, no deprecated APIs, doctype, aspect ratios  |
| **SEO**                  |    $100$     |   Complete discoverability   | Title, meta description, robots.txt, sitemap, canonical |
| **PWA**                  |     Pass     |  Manifest & service workers  | Web app manifest, theme color, viewport tags            |

### Core Web Vitals Thresholds (Google 2026 Standards)

1. **Largest Contentful Paint (LCP)**: Measures main content loading speed.
   - Good: $\le 2.5\text{s}$
   - Needs Improvement: $2.5\text{s} - 4.0\text{s}$
   - Poor: $> 4.0\text{s}$
2. **Interaction to Next Paint (INP)**: Measures overall UI responsiveness.
   - Good: $\le 200\text{ms}$
   - Needs Improvement: $200\text{ms} - 500\text{ms}$
   - Poor: $> 500\text{ms}$
3. **Cumulative Layout Shift (CLS)**: Measures visual stability.
   - Good: $\le 0.1$
   - Needs Improvement: $0.1 - 0.25$
   - Poor: $> 0.25$
4. **First Contentful Paint (FCP)**: Measures time until first DOM element renders.
   - Good: $\le 1.8\text{s}$
5. **Time to First Byte (TTFB)**: Measures server response latency.
   - Good: $\le 800\text{ms}$

---

## 2. Auditing via Chrome DevTools MCP

The workspace provides native MCP tools for on-demand browser audits.

### Method A: Running Full Category Audit (`lighthouse_audit`)

Executes an audit against the currently active page in Chrome DevTools MCP:

```json
{
  "ServerName": "chrome-devtools-mcp",
  "ToolName": "lighthouse_audit",
  "Arguments": {
    "device": "desktop",
    "mode": "navigation"
  }
}
```

_Note_: `lighthouse_audit` evaluates Accessibility, SEO, and Best Practices. For deep performance metric traces (LCP, INP, CLS, main-thread blocking), use `performance_start_trace`.

### Method B: Performance Trace & Insight Analysis

Capture high-precision Chrome trace data with automatic reloading:

```json
{
  "ServerName": "chrome-devtools-mcp",
  "ToolName": "performance_start_trace",
  "Arguments": {
    "reload": true,
    "autoStop": true,
    "filePath": "scratch/perf-trace.json.gz"
  }
}
```

Follow up by analyzing specific performance insights:

```json
{
  "ServerName": "chrome-devtools-mcp",
  "ToolName": "performance_analyze_insight",
  "Arguments": {
    "insightType": "LCP"
  }
}
```

---

## 3. Automated Lighthouse CI (LHCI) Setup

For continuous integration quality gates, configure `@lhci/cli`.

### Configuration (`.lighthouserc.json`)

```json
{
  "ci": {
    "collect": {
      "startServerCommand": "bun run start",
      "startServerReadyPattern": "ready on",
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/projects",
        "http://localhost:3000/services",
        "http://localhost:3000/about",
        "http://localhost:3000/book",
        "http://localhost:3000/design-system"
      ],
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop",
        "chromeFlags": "--no-sandbox --headless --disable-gpu"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.95 }],
        "categories:accessibility": ["error", { "minScore": 1.0 }],
        "categories:best-practices": ["error", { "minScore": 1.0 }],
        "categories:seo": ["error", { "minScore": 1.0 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 1800 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 200 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

### Running LHCI Locally

```bash
# 1. Build production Next.js bundle
bun run build

# 2. Execute Lighthouse CI collection and assertions
bunx @lhci/cli autorun
```

---

## 4. Key Performance Optimization Playbook

When addressing Lighthouse diagnostic findings:

### 1. Optimize Largest Contentful Paint (LCP)

- Preload critical hero images or WebGPU canvases with `<link rel="preload" as="image" ...>`.
- Use Next.js `next/image` with `priority` attribute for above-the-fold visual anchors.
- Use `next/font/google` with `display: 'swap'` to prevent FOIT (Flash of Invisible Text).

### 2. Eliminate Cumulative Layout Shift (CLS)

- Always specify explicit `width` and `height` (or CSS aspect-ratio) on images, 3D canvases, and video containers.
- Reserve DOM dimensions for dynamically loaded content or skeletons.
- Never inject dynamic DOM content above existing visible content without user interaction.

### 3. Minimize Interaction to Next Paint (INP) & Main Thread Work

- Move heavy WebGPU asset decoding (Draco decompression, Meshopt decoding) to Web Workers.
- Break long tasks (> 50ms) using `scheduler.yield()` or `requestIdleCallback()`.
- Use React 19 `useTransition` and `useDeferredValue` for non-urgent UI updates.

### 4. Accessibility Checklist (100% Target)

- High contrast ratio ($\ge 4.5:1$ for normal text, $\ge 3.0:1$ for large text).
- Distinct `:focus-visible` ring on all interactive elements.
- Semantic landmarks (`<header>`, `<nav>`, `<main id="main-content">`, `<footer>`).
- Skip-to-content link for keyboard users.
- Unique descriptive `id` attributes and paired `<label htmlFor="...">`.
