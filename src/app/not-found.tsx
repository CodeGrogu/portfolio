import type { Metadata } from 'next';
import Link from 'next/link';
import { NAV_LINKS, ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: '404 - Page Not Found - CodeGrogu Portfolio',
  description: 'The requested page could not be located.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-400">
        404 Error
      </div>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-zinc-400">
        The coordinate you are navigating to does not exist or has been shifted in the dimensional
        grid.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href={ROUTES.HOME}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
        >
          Return to Home
        </Link>
        <Link
          href={ROUTES.PROJECTS}
          className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white"
        >
          Explore Projects
        </Link>
      </div>

      <div className="mt-12 max-w-sm rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 text-left">
        <h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
          Quick Links
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-emerald-400">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.title} &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
