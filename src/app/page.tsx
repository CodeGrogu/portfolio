import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { HeroSection } from '@/components/hero';
import { ServicesSection } from '@/components/services';
import { AboutSection } from '@/components/about';
import { FeaturedProjectsSection } from '@/components/projects';
import { Container, Section } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About & Philosophy Section */}
      <AboutSection />

      {/* Featured Projects Highlight Section */}
      <FeaturedProjectsSection />

      {/* Call to Action Banner */}
      <Section className="border-t border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-zinc-900/50 py-20 sm:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-950/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 -z-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
            />

            <div className="max-w-2xl">
              <Badge variant="emerald" withPulse className="text-xs font-semibold">
                Initiate Project Discovery
              </Badge>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Ready to build something exceptional?
              </h2>
              <p className="mt-4 text-base text-zinc-400 sm:text-lg">
                Let&apos;s collaborate on WebGPU 3D graphics, scalable Next.js systems, or
                high-performance cloud architecture.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild variant="glow" size="lg" className="font-semibold">
                  <Link href={ROUTES.BOOK}>
                    Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link href={ROUTES.SERVICES}>Explore Capabilities</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
