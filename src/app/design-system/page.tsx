'use client';

import * as React from 'react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Dialog,
  Input,
  Section,
  Skeleton,
  Spinner,
  Textarea,
} from '@/components/ui';

export default function DesignSystemPage() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [btnLoading, setBtnLoading] = React.useState(false);

  return (
    <div className="py-12">
      <Container size="lg">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8">
          <Badge variant="emerald" dot>
            Design System v1.0
          </Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Design System Foundation
          </h1>
          <p className="mt-3 text-lg text-zinc-400">
            Cohesive design tokens, accessible UI primitives, fluid dark mode surfaces, and
            micro-interactions.
          </p>
        </div>

        {/* 1. Color Palette Tokens */}
        <Section aria-labelledby="colors-heading" className="border-b border-zinc-800">
          <h2 id="colors-heading" className="text-2xl font-bold text-white">
            1. Color & Glassmorphism Tokens
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Luminescent dark mode palette declared as CSS variables in{' '}
            <code className="font-mono text-emerald-400">globals.css</code>.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            <div className="rounded-xl border border-zinc-800 bg-[#090a0f] p-4 text-center">
              <div className="mx-auto h-8 w-8 rounded-full border border-zinc-700 bg-[#090a0f]" />
              <p className="mt-3 text-xs font-semibold text-white">Background</p>
              <p className="font-mono text-[10px] text-zinc-400">#090A0F</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
              <div className="mx-auto h-8 w-8 rounded-full bg-emerald-500" />
              <p className="mt-3 text-xs font-semibold text-white">Emerald Primary</p>
              <p className="font-mono text-[10px] text-zinc-400">#10B981</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
              <div className="mx-auto h-8 w-8 rounded-full bg-cyan-500" />
              <p className="mt-3 text-xs font-semibold text-white">Cyan Accent</p>
              <p className="font-mono text-[10px] text-zinc-400">#06B6D4</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
              <div className="mx-auto h-8 w-8 rounded-full bg-indigo-500" />
              <p className="mt-3 text-xs font-semibold text-white">Indigo Accent</p>
              <p className="font-mono text-[10px] text-zinc-400">#6366F1</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
              <div className="mx-auto h-8 w-8 rounded-full bg-violet-500" />
              <p className="mt-3 text-xs font-semibold text-white">Violet Accent</p>
              <p className="font-mono text-[10px] text-zinc-400">#8B5CF6</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
              <div className="mx-auto h-8 w-8 rounded-full border border-white/20 bg-[var(--glass-bg)] backdrop-blur-md" />
              <p className="mt-3 text-xs font-semibold text-white">Glass Surface</p>
              <p className="font-mono text-[10px] text-zinc-400">rgba(18,20,28,0.7)</p>
            </div>
          </div>
        </Section>

        {/* 2. Typography Matrix */}
        <Section aria-labelledby="typography-heading" className="border-b border-zinc-800">
          <h2 id="typography-heading" className="text-2xl font-bold text-white">
            2. Typography Hierarchy
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Paired typography with <span className="text-emerald-400">Inter</span> for UI structure
            and <span className="font-mono text-cyan-400">JetBrains Mono</span> for code and
            telemetry data.
          </p>

          <div className="mt-8 space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div>
              <p className="font-mono text-xs text-zinc-400">Display / 4xl Font Extrabold</p>
              <h1 className="text-4xl font-extrabold text-white">
                High-Performance Interactive 3D
              </h1>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-400">Heading 2 / 2xl Font Bold</p>
              <h2 className="text-2xl font-bold text-white">
                Architectural Case Studies & Systems
              </h2>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-400">Heading 3 / xl Font SemiBold</p>
              <h3 className="text-xl font-semibold text-white">
                Full-Stack Concurrency & Validation
              </h3>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-400">Body Text / Base Regular</p>
              <p className="text-base text-zinc-300">
                Next.js 16 App Router foundation styled with responsive CSS tokens and accessible
                high-contrast focus indicators.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-400">Code / Monospace Font</p>
              <p className="font-mono text-sm text-emerald-400">
                {
                  "const canvas = new WebGPURenderer({ antialias: true, powerPreference: 'high-performance' });"
                }
              </p>
            </div>
          </div>
        </Section>

        {/* 3. Buttons & Actions */}
        <Section aria-labelledby="buttons-heading" className="border-b border-zinc-800">
          <h2 id="buttons-heading" className="text-2xl font-bold text-white">
            3. Button Primitives
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Accessible buttons supporting multiple variants, sizes, loading states, and keyboard
            focus outlines.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Variants
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="glass">Glass Button</Button>
                <Button variant="glow">Luminescent Glow</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Sizes
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button size="sm" variant="primary">
                  Small (sm)
                </Button>
                <Button size="md" variant="primary">
                  Medium (md)
                </Button>
                <Button size="lg" variant="primary">
                  Large (lg)
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                States & Loaders
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  isLoading={btnLoading}
                  onClick={() => {
                    setBtnLoading(true);
                    setTimeout(() => setBtnLoading(false), 2000);
                  }}
                >
                  {btnLoading ? 'Processing...' : 'Click to Simulate Loading'}
                </Button>
                <Button variant="primary" disabled>
                  Disabled Button
                </Button>
                <Button variant="glow" onClick={() => setIsDialogOpen(true)}>
                  Open Modal Dialog
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Badges */}
        <Section aria-labelledby="badges-heading" className="border-b border-zinc-800">
          <h2 id="badges-heading" className="text-2xl font-bold text-white">
            4. Badge & Status Primitives
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge variant="default">Default Tag</Badge>
            <Badge variant="emerald" dot>
              Available for Work
            </Badge>
            <Badge variant="cyan" dot>
              WebGPU 3D
            </Badge>
            <Badge variant="indigo" dot>
              Next.js 16
            </Badge>
            <Badge variant="violet" dot>
              PostgreSQL
            </Badge>
            <Badge variant="amber" dot>
              Beta Feature
            </Badge>
            <Badge variant="outline">Outline Tag</Badge>
          </div>
        </Section>

        {/* 5. Cards & Containers */}
        <Section aria-labelledby="cards-heading" className="border-b border-zinc-800">
          <h2 id="cards-heading" className="text-2xl font-bold text-white">
            5. Card & Surface Primitives
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>Opaque dark surface container with clean borders.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400">
                  Ideal for dashboard blocks and technical content sections.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">
                  Action
                </Button>
              </CardFooter>
            </Card>

            <Card glass>
              <CardHeader>
                <CardTitle>Glassmorphic Card</CardTitle>
                <CardDescription>Translucent backdrop blur surface.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400">
                  Designed for overlay panels atop 3D WebGPU canvases.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="glass">
                  Inspect
                </Button>
              </CardFooter>
            </Card>

            <Card interactive>
              <CardHeader>
                <CardTitle>Interactive Hover Card</CardTitle>
                <CardDescription>
                  Hover lift motion and subtle luminescent border glow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400">
                  Used across project catalogue and case study previews.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="primary">
                  Explore &rarr;
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Section>

        {/* 6. Form Inputs */}
        <Section aria-labelledby="forms-heading" className="border-b border-zinc-800">
          <h2 id="forms-heading" className="text-2xl font-bold text-white">
            6. Form & Input Primitives
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="Standard Text Input"
              placeholder="e.g. jaden@codegrogu.com"
              helperText="We will never share your email."
            />
            <Input
              label="Error State Input"
              defaultValue="invalid-email@"
              error="Please provide a valid corporate email address."
            />
            <div className="md:col-span-2">
              <Textarea
                label="Project Description"
                placeholder="Describe your technical requirements and timeline..."
                helperText="Markdown formatted text supported."
              />
            </div>
          </div>
        </Section>

        {/* 7. Loading Skeletons */}
        <Section aria-labelledby="loaders-heading">
          <h2 id="loaders-heading" className="text-2xl font-bold text-white">
            7. Feedback & Skeletons
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-sm font-semibold text-white">Loading Skeletons</h3>
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="mt-4 h-10 w-32 rounded-lg" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
              <h3 className="text-sm font-semibold text-white">Spinners</h3>
              <div className="flex items-center gap-6 text-emerald-400">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
              <p className="text-xs text-zinc-400">Accessible ARIA status indicators</p>
            </div>
          </div>
        </Section>
      </Container>

      {/* Interactive Modal Dialog */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Accessible Design System Dialog"
        description="Demonstrating focus retention, keyboard escape dismissal, and smooth backdrop animation."
      >
        <p className="text-sm text-zinc-300">
          This dialog component conforms to WAI-ARIA 1.2 modal specifications with keyboard ESC
          dismiss and high-contrast focus rings.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
            Dismiss
          </Button>
          <Button variant="primary" onClick={() => setIsDialogOpen(false)}>
            Confirm
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
