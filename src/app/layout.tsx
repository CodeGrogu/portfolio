import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/navigation/footer';
import { Header } from '@/components/navigation/header';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'CodeGrogu - Interactive Portfolio & Web3D Systems',
  description: 'Full-Stack Developer, 3D Web Graphics Specialist, and Software Architect.',
  keywords: [
    'CodeGrogu',
    'Full-Stack Developer',
    'Three.js',
    'WebGPU',
    'Next.js',
    'React',
    'TypeScript',
  ],
  authors: [{ name: 'CodeGrogu' }],
  metadataBase: new URL('https://codegrogu.com'),
  openGraph: {
    title: 'CodeGrogu - Interactive Portfolio & Web3D Systems',
    description:
      'High-performance interactive web systems, WebGPU graphics, and full-stack software architecture.',
    url: 'https://codegrogu.com',
    siteName: 'CodeGrogu Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#090a0f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
