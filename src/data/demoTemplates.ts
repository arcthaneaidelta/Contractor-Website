import { WebsiteTemplate } from '../types';

export const DEMO_TEMPLATES: WebsiteTemplate[] = [
  {
    id: 'oakline-editorial',
    name: 'Oakline Renovation',
    subtitle: 'Residential Remodeling & Interior Architecture',
    industry: 'High-End Remodeling',
    slug: 'oakline-editorial',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Warm ivory editorial layout designed for luxury kitchen, bathroom, and full-interior home remodelers. Features architectural typography, structured service pages, project case-study modals, and local neighborhood directories.',
    supportedPages: ['Homepage', 'Services (5 Sub-services)', 'Project Portfolio', 'Company About', 'Local Service Areas', 'Interactive Contact & Consultation'],
    theme: {
      primaryColor: '#253D32',
      secondaryColor: '#A9B8A5',
      fontName: 'DM Sans + Serif'
    },
    defaultServices: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Custom Cabinetry', 'Interior Renovations', 'Finish Carpentry'],
    readinessRating: 98
  },
  {
    id: 'summit-metro',
    name: 'Summit Home Services',
    subtitle: 'General Contractor & Exterior Envelopes',
    industry: 'General Contracting',
    slug: 'summit-metro',
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Sturdy, confidence-inspiring layout for residential builders, basement remodelers, and deck contractors. Features high-clarity scope grids, climate-tested warranties, and estimate calculators.',
    supportedPages: ['Homepage', 'Services Directory', 'Project Gallery', 'Warranty & Trust', 'Regional Areas', 'Estimate Request'],
    theme: {
      primaryColor: '#2B3A42',
      secondaryColor: '#8C9B90',
      fontName: 'Inter Modern'
    },
    defaultServices: ['Basement Finishing', 'Composite Decking', 'Home Additions', 'Thermal Insulation'],
    readinessRating: 95
  },
  {
    id: 'cedar-stone-artisan',
    name: 'Cedar & Stone Artisan',
    subtitle: 'Bespoke Carpentry & Timber Architecture',
    industry: 'Architectural Millwork',
    slug: 'cedar-stone-artisan',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Minimalist Scandinavian-inspired framework highlighting timber joinery, natural stone fireplaces, and custom woodcraft. Designed for master craftsmen and boutique builders.',
    supportedPages: ['Editorial Homepage', 'Craftsmanship Showcase', 'Material Catalog', 'Studio Philosophy', 'Project Inquiries'],
    theme: {
      primaryColor: '#36392D',
      secondaryColor: '#B5A895',
      fontName: 'DM Serif Display'
    },
    defaultServices: ['Architectural Timber & Ceilings', 'Custom Millwork Walls', 'Basalt & Stone Fireplaces', 'Bespoke Wine Cellars'],
    readinessRating: 96
  }
];
