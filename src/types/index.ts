export type PageId = 'home' | 'features' | 'solutions' | 'pricing' | 'security' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface PersonaItem {
  id: string;
  role: string;
  avatar: string;
  benefit: string;
  highlight: string;
  stat: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  benefits: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface FeatureCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}
