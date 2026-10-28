import { DeploymentRecord } from '../types';

export const INITIAL_DEPLOYMENTS: DeploymentRecord[] = [
  {
    id: 'dep-9821',
    environment: 'production',
    timestamp: '2026-10-24 16:42:10 UTC',
    branch: 'main',
    commitMessage: 'feat(seo): Add LocalBusiness structured schema and canonical tags',
    status: 'success',
    duration: '38s',
    checksPassed: 18,
    totalChecks: 18
  },
  {
    id: 'dep-9819',
    environment: 'staging',
    timestamp: '2026-10-24 14:15:33 UTC',
    branch: 'preview/tarrytown-case-study',
    commitMessage: 'content: Add high-res Tarrytown modern heritage kitchen gallery',
    status: 'success',
    duration: '32s',
    checksPassed: 18,
    totalChecks: 18
  },
  {
    id: 'dep-9804',
    environment: 'production',
    timestamp: '2026-10-18 09:20:05 UTC',
    branch: 'main',
    commitMessage: 'fix(forms): Verify Netlify hidden honeypot and contact routing',
    status: 'success',
    duration: '41s',
    checksPassed: 18,
    totalChecks: 18
  },
  {
    id: 'dep-9788',
    environment: 'staging',
    timestamp: '2026-10-14 11:05:49 UTC',
    branch: 'fix/mobile-nav',
    commitMessage: 'style(nav): Optimize mobile drawer touch targets to 48px',
    status: 'success',
    duration: '29s',
    checksPassed: 18,
    totalChecks: 18
  }
];
