'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { NAV_LINKS, ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevPathnameRef = useRef(pathname);

  // Close only when pathname actually changes while open
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      if (isOpen) {
        onClose();
      }
    }
  }, [pathname, isOpen, onClose]);

  // Handle ESC key to close and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Lock body scroll when mobile menu is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden"
    >
      {/* Backdrop overlay */}
      <div
        className="animate-in fade-in fixed inset-0 touch-manipulation bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel with safe area inset and touch manipulation */}
      <div
        ref={drawerRef}
        className="animate-in slide-in-from-right fixed inset-y-0 right-0 z-50 flex h-full max-h-dvh w-full max-w-sm flex-col border-l border-zinc-800 bg-zinc-950/95 p-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl backdrop-blur-xl transition-transform duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-5">
          <Link
            href={ROUTES.HOME}
            onClick={onClose}
            className="flex touch-manipulation items-center gap-2 text-base font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>
              CodeGrogu<span className="text-emerald-400">.</span>
            </span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-11 min-h-[44px] w-11 min-w-[44px] touch-manipulation items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Availability Badge */}
        <div className="mt-5">
          <Badge
            variant="emerald"
            withPulse
            className="w-full justify-center py-1.5 text-xs font-medium"
          >
            Available for Q3/Q4 Projects
          </Badge>
        </div>

        {/* Navigation links */}
        <nav
          aria-label="Mobile Primary Navigation"
          className="mt-6 flex-1 space-y-1 overflow-y-auto"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === ROUTES.HOME ? pathname === ROUTES.HOME : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'group flex min-h-[48px] touch-manipulation items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all',
                  isActive
                    ? 'border border-emerald-500/30 bg-emerald-500/10 font-semibold text-emerald-400'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-white',
                )}
              >
                <span>{item.title}</span>
                <ArrowRight
                  className={cn(
                    'h-4 w-4 transition-transform group-hover:translate-x-1',
                    isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300',
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA in Mobile Menu */}
        <div className="mt-auto border-t border-zinc-800/80 pt-6">
          <Button
            asChild
            variant="glow"
            size="lg"
            className="w-full touch-manipulation justify-center text-sm font-semibold"
          >
            <Link href={ROUTES.BOOK} onClick={onClose}>
              Book Consultation
            </Link>
          </Button>
          <p className="mt-3 text-center text-xs text-zinc-500">
            Direct architecture & engineering inquiry
          </p>
        </div>
      </div>
    </div>
  );
}
