import Link from 'next/link';
import { NAV_LINKS, ROUTES } from '@/lib/routes';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border)] bg-zinc-950/80 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link
              href={ROUTES.HOME}
              className="inline-flex min-h-[44px] items-center text-lg font-bold tracking-tight text-white hover:text-emerald-400 touch-manipulation"
            >
              CodeGrogu<span className="text-emerald-500">.</span>
            </Link>
            <p className="mt-2 text-sm text-zinc-400">
              Interactive Web3D architectures, high-performance web engineering, and resilient
              full-stack systems.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-zinc-200 uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-1 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[36px] items-center py-1 transition-colors hover:text-emerald-400 touch-manipulation"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-zinc-200 uppercase">
              Engineering Status
            </h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for select Q3/Q4 contracts & consulting
            </div>
            <p className="mt-3 text-xs text-zinc-400">
              Powered by Next.js 16, React 19, Three.js WebGPU & Bun.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-900 pt-6 text-center text-xs text-zinc-400">
          &copy; {currentYear} CodeGrogu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
