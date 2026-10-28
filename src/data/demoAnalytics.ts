import { AnalyticsSnapshot } from '../types';

export const CLIENT_ANALYTICS: Record<string, Record<string, AnalyticsSnapshot>> = {
  'oakline-renovation': {
    'last-30-days': {
      period: 'last-30-days',
      periodLabel: 'Last 30 Days (Oct 1 – Oct 28, 2026)',
      sessions: 1284,
      sessionsDelta: '+18.4%',
      engagedSessions: 846,
      engagedSessionsDelta: '+21.2%',
      organicSearchClicks: 392,
      organicClicksDelta: '+34.5%',
      contactSubmissions: 27,
      contactSubmissionsDelta: '+28.6%',
      engagementRate: 65.9,
      engagementRateDelta: '+2.4%',
      conversionRate: 2.1,
      conversionRateDelta: '+0.3%',
      trafficTrends: [
        { date: 'Oct 01', sessions: 38, organic: 11 },
        { date: 'Oct 04', sessions: 42, organic: 13 },
        { date: 'Oct 07', sessions: 48, organic: 15 },
        { date: 'Oct 10', sessions: 39, organic: 12 },
        { date: 'Oct 13', sessions: 45, organic: 14 },
        { date: 'Oct 16', sessions: 52, organic: 17 },
        { date: 'Oct 19', sessions: 47, organic: 14 },
        { date: 'Oct 22', sessions: 56, organic: 19 },
        { date: 'Oct 25', sessions: 62, organic: 22 },
        { date: 'Oct 28', sessions: 58, organic: 20 }
      ],
      topPages: [
        { path: '/', title: 'Home — Oakline Renovation Co.', views: 540, conversions: 12 },
        { path: '/services/kitchen-remodeling', title: 'Kitchen Remodeling Austin TX', views: 320, conversions: 8 },
        { path: '/work', title: 'Selected Projects & Portfolio', views: 245, conversions: 4 },
        { path: '/services/bathroom-remodeling', title: 'Luxury Bathroom Renovations', views: 185, conversions: 2 },
        { path: '/service-areas/westlake-rollingwood', title: 'West Lake Hills Remodeling', views: 118, conversions: 1 }
      ],
      sources: [
        { channel: 'Google Organic Search', percentage: 48, visitors: 616 },
        { channel: 'Direct Traffic', percentage: 26, visitors: 334 },
        { channel: 'Local Maps / GBP', percentage: 18, visitors: 231 },
        { channel: 'Referral & Social', percentage: 8, visitors: 103 }
      ],
      devices: [
        { device: 'Mobile Phones', percentage: 62, sessions: 796 },
        { device: 'Desktop / Laptop', percentage: 34, sessions: 437 },
        { device: 'Tablet', percentage: 4, sessions: 51 }
      ]
    },
    'q3-2026': {
      period: 'q3-2026',
      periodLabel: 'Q3 2026 (Jul 1 – Sep 30, 2026)',
      sessions: 3420,
      sessionsDelta: '+29.0%',
      engagedSessions: 2210,
      engagedSessionsDelta: '+31.4%',
      organicSearchClicks: 980,
      organicClicksDelta: '+46.2%',
      contactSubmissions: 68,
      contactSubmissionsDelta: '+38.8%',
      engagementRate: 64.6,
      engagementRateDelta: '+1.8%',
      conversionRate: 1.99,
      conversionRateDelta: '+0.2%',
      trafficTrends: [
        { date: 'Week 1', sessions: 230, organic: 62 },
        { date: 'Week 3', sessions: 255, organic: 71 },
        { date: 'Week 5', sessions: 280, organic: 84 },
        { date: 'Week 7', sessions: 310, organic: 92 },
        { date: 'Week 9', sessions: 325, organic: 98 },
        { date: 'Week 11', sessions: 360, organic: 112 },
        { date: 'Week 13', sessions: 390, organic: 125 }
      ],
      topPages: [
        { path: '/', title: 'Home — Oakline Renovation Co.', views: 1420, conversions: 31 },
        { path: '/services/kitchen-remodeling', title: 'Kitchen Remodeling Austin TX', views: 890, conversions: 21 },
        { path: '/work', title: 'Selected Projects & Portfolio', views: 680, conversions: 9 },
        { path: '/services/bathroom-remodeling', title: 'Luxury Bathroom Renovations', views: 510, conversions: 5 },
        { path: '/service-areas', title: 'Austin Service Areas Directory', views: 320, conversions: 2 }
      ],
      sources: [
        { channel: 'Google Organic Search', percentage: 46, visitors: 1573 },
        { channel: 'Direct Traffic', percentage: 28, visitors: 958 },
        { channel: 'Local Maps / GBP', percentage: 17, visitors: 581 },
        { channel: 'Referral & Social', percentage: 9, visitors: 308 }
      ],
      devices: [
        { device: 'Mobile Phones', percentage: 64, sessions: 2189 },
        { device: 'Desktop / Laptop', percentage: 32, sessions: 1094 },
        { device: 'Tablet', percentage: 4, sessions: 137 }
      ]
    },
    'ytd-2026': {
      period: 'ytd-2026',
      periodLabel: 'Year to Date 2026 (Jan 1 – Oct 28, 2026)',
      sessions: 11840,
      sessionsDelta: '+54.2%',
      engagedSessions: 7620,
      engagedSessionsDelta: '+58.0%',
      organicSearchClicks: 3410,
      organicClicksDelta: '+72.1%',
      contactSubmissions: 218,
      contactSubmissionsDelta: '+61.5%',
      engagementRate: 64.4,
      engagementRateDelta: '+3.1%',
      conversionRate: 1.84,
      conversionRateDelta: '+0.4%',
      trafficTrends: [
        { date: 'Jan', sessions: 850, organic: 210 },
        { date: 'Mar', sessions: 1020, organic: 290 },
        { date: 'May', sessions: 1210, organic: 380 },
        { date: 'Jul', sessions: 1380, organic: 430 },
        { date: 'Sep', sessions: 1490, organic: 490 },
        { date: 'Oct', sessions: 1580, organic: 520 }
      ],
      topPages: [
        { path: '/', title: 'Home — Oakline Renovation Co.', views: 4950, conversions: 98 },
        { path: '/services/kitchen-remodeling', title: 'Kitchen Remodeling Austin TX', views: 3120, conversions: 65 },
        { path: '/work', title: 'Selected Projects & Portfolio', views: 2340, conversions: 32 },
        { path: '/services/bathroom-remodeling', title: 'Luxury Bathroom Renovations', views: 1780, conversions: 18 },
        { path: '/service-areas', title: 'Austin Service Areas Directory', views: 1120, conversions: 5 }
      ],
      sources: [
        { channel: 'Google Organic Search', percentage: 44, visitors: 5210 },
        { channel: 'Direct Traffic', percentage: 30, visitors: 3552 },
        { channel: 'Local Maps / GBP', percentage: 18, visitors: 2131 },
        { channel: 'Referral & Social', percentage: 8, visitors: 947 }
      ],
      devices: [
        { device: 'Mobile Phones', percentage: 61, sessions: 7222 },
        { device: 'Desktop / Laptop', percentage: 35, sessions: 4144 },
        { device: 'Tablet', percentage: 4, sessions: 474 }
      ]
    }
  }
};

export const getClientAnalytics = (clientId: string, period = 'last-30-days'): AnalyticsSnapshot => {
  if (CLIENT_ANALYTICS[clientId] && CLIENT_ANALYTICS[clientId][period]) {
    return CLIENT_ANALYTICS[clientId][period];
  }
  // Generic fallback for any other client
  return {
    period,
    periodLabel: 'Last 30 Days (Demo Benchmark)',
    sessions: 890,
    sessionsDelta: '+12.5%',
    engagedSessions: 578,
    engagedSessionsDelta: '+15.1%',
    organicSearchClicks: 265,
    organicClicksDelta: '+22.4%',
    contactSubmissions: 18,
    contactSubmissionsDelta: '+14.0%',
    engagementRate: 64.9,
    engagementRateDelta: '+1.5%',
    conversionRate: 2.02,
    conversionRateDelta: '+0.2%',
    trafficTrends: [
      { date: 'Week 1', sessions: 195, organic: 58 },
      { date: 'Week 2', sessions: 210, organic: 64 },
      { date: 'Week 3', sessions: 235, organic: 72 },
      { date: 'Week 4', sessions: 250, organic: 71 }
    ],
    topPages: [
      { path: '/', title: 'Home', views: 420, conversions: 10 },
      { path: '/services', title: 'Services', views: 240, conversions: 5 },
      { path: '/projects', title: 'Projects', views: 170, conversions: 3 }
    ],
    sources: [
      { channel: 'Google Organic Search', percentage: 45, visitors: 400 },
      { channel: 'Direct Traffic', percentage: 28, visitors: 249 },
      { channel: 'Local Maps / GBP', percentage: 19, visitors: 169 },
      { channel: 'Referral & Social', percentage: 8, visitors: 72 }
    ],
    devices: [
      { device: 'Mobile Phones', percentage: 60, sessions: 534 },
      { device: 'Desktop / Laptop', percentage: 35, sessions: 312 },
      { device: 'Tablet', percentage: 5, sessions: 44 }
    ]
  };
};
