import Link from 'next/link';
import { NAV_LINKS, ROUTES } from '@/lib/routes';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            href={ROUTES.HOME}
            className="text-lg font-bold tracking-tight text-[var(--foreground)] transition-colors hover:text-white"
          >
            CodeGrogu<span className="text-emerald-500">.</span>
          </Link>
        </div>

        <nav aria-label="Primary Navigation" className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.BOOK}
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:outline-none"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
