import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'CodeGrogu — Interactive Portfolio & Web3D Systems',
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
    title: 'CodeGrogu — Interactive Portfolio & Web3D Systems',
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
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
