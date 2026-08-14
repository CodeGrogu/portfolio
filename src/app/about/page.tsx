import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { AboutSection } from '@/components/about';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About - CodeGrogu Portfolio',
  description:
    'Full-stack software architect and 3D web graphics developer specializing in WebGPU, Three.js, React 19, and Next.js 16.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" withPulse className="text-xs font-semibold">
              Principal Profile
            </Badge>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            About CodeGrogu
          </h1>
          <p className="mt-4 text-lg font-medium text-emerald-400">
            Full-Stack Software Architect & 3D Web Graphics Specialist
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Dedicated to advancing the state of interactive web applications through GPU-accelerated
            computing, strict end-to-end type safety, and uncompromised accessibility.
          </p>
        </div>
      </div>

      {/* Main About Component */}
      <AboutSection showFullBio className="border-t-0 bg-transparent py-12 sm:py-16" />

      {/* Footer Navigation */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-4 border-t border-zinc-800/80 pt-8 sm:flex-row sm:items-center">
          <Button asChild variant="outline" size="md">
            <Link href={ROUTES.PROJECTS}>&larr; View Portfolio Projects</Link>
          </Button>
          <Button asChild variant="glow" size="md">
            <Link href={ROUTES.BOOK}>Schedule Project Consultation &rarr;</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
