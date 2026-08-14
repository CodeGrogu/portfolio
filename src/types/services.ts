export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeVariant: 'emerald' | 'cyan' | 'indigo' | 'violet' | 'amber';
  description: string;
  deliverables: ServiceDeliverable[];
  outcomes: string[];
  technologies: string[];
  timeline: string;
  idealFor: string;
}

export interface AboutPillar {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: 'Cpu' | 'Shield' | 'Zap' | 'Layers';
}

export interface TechStackCategory {
  category: string;
  description: string;
  skills: string[];
}
