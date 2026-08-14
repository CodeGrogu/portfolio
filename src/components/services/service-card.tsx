'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Code,
  Box,
  Database,
  Bot,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Info,
} from 'lucide-react';
import { ServicePackage } from '@/types/services';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: ServicePackage;
  index: number;
}

const iconMap = {
  'fullstack-web-development': Code,
  'web3d-creative-engineering': Box,
  'cloud-database-systems': Database,
  'ai-automation-systems': Bot,
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const IconComponent = iconMap[service.id as keyof typeof iconMap] || Sparkles;

  return (
    <>
      <Card
        variant="glow"
        isInteractive
        className={cn(
          'group relative flex flex-col justify-between p-6 transition-all duration-300 sm:p-7',
          'border-zinc-800/80 bg-zinc-950/70 hover:border-emerald-500/40 hover:bg-zinc-900/60',
        )}
      >
        <div>
          {/* Top Metadata Header */}
          <div className="flex items-center justify-between gap-2">
            <Badge variant={service.badgeVariant} className="text-xs font-semibold">
              {service.badge}
            </Badge>

            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Clock className="h-3.5 w-3.5 text-zinc-400" />
              <span>{service.timeline}</span>
            </div>
          </div>

          {/* Service Title & Icon */}
          <div className="mt-5 flex items-start gap-4">
            <div
              className={cn(
                'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors',
                service.badgeVariant === 'cyan' &&
                  'border-cyan-500/30 bg-cyan-500/10 text-cyan-400 group-hover:border-cyan-400/60',
                service.badgeVariant === 'emerald' &&
                  'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-400/60',
                service.badgeVariant === 'indigo' &&
                  'border-indigo-500/30 bg-indigo-500/10 text-indigo-400 group-hover:border-indigo-400/60',
                service.badgeVariant === 'violet' &&
                  'border-violet-500/30 bg-violet-500/10 text-violet-400 group-hover:border-violet-400/60',
              )}
            >
              <IconComponent className="h-6 w-6" />
            </div>

            <div>
              <span className="font-mono text-xs text-zinc-400">0{index + 1} / SERVICE</span>
              <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-white">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Subtitle & Description */}
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{service.description}</p>

          {/* Core Deliverables Preview */}
          <div className="mt-6 border-t border-zinc-800/80 pt-5">
            <h4 className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Key Deliverables
            </h4>
            <ul className="mt-3 space-y-2.5">
              {service.deliverables.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <span className="leading-tight">
                    <strong className="font-medium text-zinc-200">{item.title}:</strong>{' '}
                    <span className="text-zinc-400">{item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-8 flex flex-col items-stretch gap-3 border-t border-zinc-800/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setIsDetailOpen(true)}
            className="text-xs text-zinc-300 hover:text-white"
          >
            <Info className="mr-1.5 h-3.5 w-3.5 text-zinc-400" /> Full Scope Details
          </Button>

          <Button asChild variant="primary" size="sm" className="font-semibold">
            <Link href={`${ROUTES.BOOK}?service=${service.id}`}>
              Book Consultation <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </Card>

      {/* Scope Details Modal Dialog */}
      <Dialog
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        title={service.title}
        description={service.subtitle}
        className="max-w-2xl"
      >
        <div className="space-y-6 text-sm text-zinc-300">
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Detailed Deliverables Breakdown
            </h4>
            <div className="mt-3 space-y-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3.5">
                  <div className="font-semibold text-white">{item.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Target Outcomes & Performance ROI
            </h4>
            <ul className="mt-3 space-y-2">
              {service.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <div className="text-xs font-semibold text-emerald-400">Ideal Engagement Profile</div>
            <p className="mt-1 text-xs text-zinc-300">{service.idealFor}</p>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsDetailOpen(false)}
            >
              Close
            </Button>
            <Button asChild variant="glow" size="sm">
              <Link href={`${ROUTES.BOOK}?service=${service.id}`}>Proceed to Booking &rarr;</Link>
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
