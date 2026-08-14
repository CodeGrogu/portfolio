'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Sparkles } from 'lucide-react';
import { NAV_LINKS, ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { MobileNav } from './mobile-nav';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleOpenMobile = useCallback(() => {
    setIsMobileOpen(true);
  }, []);

  const handleCloseMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200',
          isScrolled
            ? 'border-b border-zinc-800/80 bg-zinc-950/85 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'border-b border-zinc-800/40 bg-zinc-950/60 backdrop-blur-sm',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <Link
              href={ROUTES.HOME}
              className="group flex touch-manipulation items-center gap-2 rounded-lg px-1 py-0.5 text-lg font-bold tracking-tight text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:border-emerald-400/60">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>
                CodeGrogu<span className="text-emerald-400">.</span>
              </span>
            </Link>

            <div className="hidden xl:block">
              <Badge variant="emerald" withPulse className="px-2.5 py-0.5 text-[11px] font-medium">
                Available for Q3/Q4
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === ROUTES.HOME
                  ? pathname === ROUTES.HOME
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative touch-manipulation rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400',
                    isActive
                      ? 'bg-emerald-500/10 font-semibold text-emerald-400'
                      : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white',
                  )}
                >
                  {item.title}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute right-3.5 bottom-0 left-3.5 h-[2px] rounded-full bg-emerald-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button asChild variant="glow" size="sm" className="font-semibold">
                <Link href={ROUTES.BOOK}>Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile Hamburger Button with 44x44 WCAG touch target */}
            <button
              type="button"
              onClick={handleOpenMobile}
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation-drawer"
              className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] touch-manipulation items-center justify-center rounded-lg p-2.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isMobileOpen} onClose={handleCloseMobile} />
    </>
  );
}
