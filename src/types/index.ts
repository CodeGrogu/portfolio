/**
 * Global domain and application types for CodeGrogu Portfolio
 */

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface ProjectMetadata {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export * from './navigation';
export * from './services';
export * from './projects';
