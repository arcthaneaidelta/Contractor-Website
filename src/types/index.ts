export type ClientStatus = 'active' | 'draft' | 'launching';

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  primary: boolean;
  iconName: string;
  features: string[];
  startingPrice?: string;
}

export interface ServiceAreaItem {
  id: string;
  name: string;
  slug: string;
  county: string;
  description: string;
  featuredProjectsCount: number;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Bathrooms' | 'Cabinetry' | 'Full Interiors' | 'Exterior';
  location: string;
  image: string;
  timeline: string;
  budgetRange: string;
  description: string;
  scopeHighlights: string[];
}

export interface ContractorSiteConfig {
  business: {
    name: string;
    tagline: string;
    description: string;
    contactName: string;
    email: string;
    phone: string;
    city: string;
    region: string;
    fullAddress: string;
    postalCode: string;
    hours: string;
  };
  branding: {
    primaryColor: string;
    secondaryColor: string;
    fontPreference: string;
    logoText: string;
    logoUrl?: string;
    heroImageUrl: string;
    heroHeading: string;
    heroSubheading: string;
    ctaLabel: string;
  };
  services: ServiceItem[];
  serviceAreas: ServiceAreaItem[];
  projects: ProjectItem[];
  seo: {
    homepageTitle: string;
    homepageDescription: string;
    canonicalUrl: string;
    primaryKeyword: string;
    targetLocations: string[];
    searchConsolePropertyId?: string;
    ga4MeasurementId?: string;
  };
  netlifyForm: {
    formName: string;
    honeypotField: string;
    notificationEmail: string;
    hasSimulatedError: boolean;
  };
}

export interface Client {
  id: string;
  name: string;
  slug: string;
  category: string;
  status: ClientStatus;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  createdAt: string;
  lastUpdated: string;
  nextReportDate: string;
  conversionsCount: number;
  config: ContractorSiteConfig;
}

export interface WebsiteTemplate {
  id: string;
  name: string;
  subtitle: string;
  industry: string;
  slug: string;
  thumbnail: string;
  description: string;
  supportedPages: string[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    fontName: string;
  };
  defaultServices: string[];
  readinessRating: number;
}

export interface TrafficDataPoint {
  date: string;
  sessions: number;
  organic: number;
}

export interface TopPageItem {
  path: string;
  title: string;
  views: number;
  conversions: number;
}

export interface TrafficSourceItem {
  channel: string;
  percentage: number;
  visitors: number;
}

export interface DeviceBreakdownItem {
  device: string;
  percentage: number;
  sessions: number;
}

export interface AnalyticsSnapshot {
  period: string;
  periodLabel: string;
  sessions: number;
  sessionsDelta: string;
  engagedSessions: number;
  engagedSessionsDelta: string;
  organicSearchClicks: number;
  organicClicksDelta: string;
  contactSubmissions: number;
  contactSubmissionsDelta: string;
  engagementRate: number;
  engagementRateDelta: string;
  conversionRate: number;
  conversionRateDelta: string;
  trafficTrends: TrafficDataPoint[];
  topPages: TopPageItem[];
  sources: TrafficSourceItem[];
  devices: DeviceBreakdownItem[];
}

export type SEOAuditStatus = 'passed' | 'needs-attention' | 'not-configured';

export interface SEOAuditItem {
  id: string;
  category: 'metadata' | 'technical' | 'local' | 'performance';
  title: string;
  status: SEOAuditStatus;
  explanation: string;
  whyItMatters: string;
  recommendedFix: string;
  targetField?: string;
}

export interface SEOAuditSummary {
  overallScore: number;
  passedCount: number;
  attentionCount: number;
  notConfiguredCount: number;
  items: SEOAuditItem[];
}

export interface DeploymentRecord {
  id: string;
  environment: 'local' | 'staging' | 'production';
  timestamp: string;
  branch: string;
  commitMessage: string;
  status: 'success' | 'failed' | 'in-progress';
  duration: string;
  checksPassed: number;
  totalChecks: number;
}

export interface ContactSubmission {
  id: string;
  clientId: string;
  clientName: string;
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  location: string;
  preferredMethod: string;
  description: string;
  submittedAt: string;
  referenceNumber: string;
}
