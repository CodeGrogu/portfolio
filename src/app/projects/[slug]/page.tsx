import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS, getProjectBySlug } from '@/lib/projects-data';
import { CaseStudyView } from '@/components/projects';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Case Study Not Found - CodeGrogu Portfolio',
      description: 'The requested engineering case study could not be located.',
    };
  }

  return {
    title: `${project.title} - Engineering Case Study | CodeGrogu`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Engineering Case Study`,
      description: project.summary,
      images: [
        {
          url: project.thumbnail.src,
          width: project.thumbnail.width,
          height: project.thumbnail.height,
          alt: project.thumbnail.alt,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : undefined;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : undefined;

  return <CaseStudyView project={project} prevProject={prevProject} nextProject={nextProject} />;
}
