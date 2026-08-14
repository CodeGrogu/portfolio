import type { BreadcrumbItem, NavItem } from '@/types/navigation';

export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT_DETAIL: (slug: string) => `/projects/${slug}`,
  SERVICES: '/services',
  ABOUT: '/about',
  BOOK: '/book',
} as const;

export const NAV_LINKS: readonly NavItem[] = [
  {
    title: 'Projects',
    href: ROUTES.PROJECTS,
    description: 'Selected Web3D, full-stack, and mobile engineering case studies.',
  },
  {
    title: 'Services',
    href: ROUTES.SERVICES,
    description: 'Technical architecture, 3D development, and full-stack software systems.',
  },
  {
    title: 'About',
    href: ROUTES.ABOUT,
    description: 'Background, engineering philosophy, and technical stack capabilities.',
  },
  {
    title: 'Book',
    href: ROUTES.BOOK,
    description: 'Schedule a discovery session or start a new project inquiry.',
  },
] as const;

/**
 * Builds breadcrumbs based on a given URL pathname.
 */
export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: 'Home',
      href: ROUTES.HOME,
      isCurrent: segments.length === 0,
    },
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Format label: capitalize and replace dashes
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrent: isLast,
    });
  });

  return breadcrumbs;
}
