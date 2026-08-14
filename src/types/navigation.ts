export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent: boolean;
}

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
}
