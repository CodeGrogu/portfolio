import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button, Input, Textarea } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Book a Consultation - CodeGrogu Portfolio',
  description:
    'Schedule a technical discovery session, project consultation, or software architecture review.',
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Schedule a Discovery Session
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Let’s discuss your vision, requirements, timeline, and architectural targets for Web3D
          graphics or full-stack software development.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Booking Consultation Card */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            Discovery Call
          </div>
          <h2 className="mt-4 text-xl font-bold text-white">30-Minute Technical Exploration</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Initial architecture review, technical scoping, tech stack suitability, and project
            roadmap alignment.
          </p>
          <ul className="mt-6 space-y-2 text-xs text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Web3D, WebGPU, or Three.js feasibility analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Full-Stack Next.js 16 / Postgres architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Timeline and deliverable estimation
            </li>
          </ul>
          <div className="mt-8">
            <Button variant="primary" className="w-full">
              Select Discovery Slot (CV-43)
            </Button>
          </div>
        </div>

        {/* Direct Inquiry Form Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
          <h2 className="text-xl font-bold text-white">Direct Project Inquiry</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Prefer written communication? Send a project overview and scope document directly.
          </p>

          <form className="mt-6 space-y-4" onSubmit={undefined}>
            <Input label="Your Name" id="name" name="name" placeholder="Ada Lovelace" disabled />
            <Input
              label="Work Email"
              type="email"
              id="email"
              name="email"
              placeholder="ada@example.com"
              disabled
            />
            <Textarea
              label="Project Scope Summary"
              id="message"
              name="message"
              rows={3}
              placeholder="Interactive booking engine integration scheduled for Milestone 4 (CV-43)..."
              disabled
            />
            <p className="text-xs text-zinc-400 italic">
              * Interactive transactional booking form integration active in upcoming Cycle 2 issue
              CV-43.
            </p>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-zinc-800 pt-6 text-center">
        <Link
          href={ROUTES.HOME}
          className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          &larr; Return to Home
        </Link>
      </div>
    </div>
  );
}
