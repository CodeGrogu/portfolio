export type ProjectCategory = 'web3d' | 'fullstack' | 'creative-shaders' | 'cloud-systems' | 'all';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
  caption?: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  badgeVariant: 'emerald' | 'cyan' | 'violet' | 'indigo' | 'amber';
  featured: boolean;
  order: number;
  timeline: string;
  role: string;
  client?: string;
  summary: string;
  thumbnail: {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  metrics: ProjectMetric[];
  problemStatement: {
    challenge: string;
    context: string;
    objectives: string[];
  };
  architecture: {
    summary: string;
    decisions: Array<{
      title: string;
      rationale: string;
    }>;
  };
  technicalDeepDive: {
    title: string;
    description: string;
    snippet: CodeSnippet;
  };
  outcomes: Array<{
    title: string;
    detail: string;
  }>;
}

export interface ProjectFilterOption {
  id: ProjectCategory;
  label: string;
  count?: number;
}
