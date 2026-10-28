import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const MarketingFooter: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1E2B24',
        color: '#E8EFEA',
        borderTop: '1px solid #2B3D33',
        paddingTop: '64px',
        paddingBottom: '40px'
      }}
    >
      <div className="container-desktop">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#A9B8A5',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E2B24'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <rect x="5" y="6" width="22" height="4" rx="2" fill="#1E2B24" />
                  <rect x="5" y="14" width="16" height="4" rx="2" fill="#253D32" />
                  <rect x="5" y="22" width="22" height="4" rx="2" fill="#1E2B24" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF'
                }}
              >
                Contractor<span style={{ color: '#A9B8A5', fontWeight: 500 }}>OS</span>
              </span>
            </div>
            <p style={{ color: '#A9B8A5', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
              One proven system. Every contractor. Every launch. A standardized frontend operating
              architecture for repeatable client onboarding, local SEO, and monthly reporting.
            </p>
          </div>

          {/* Solution Links */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#A9B8A5',
                marginBottom: '16px'
              }}
            >
              System Core
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#platform" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Reusable Architecture
                </a>
              </li>
              <li>
                <a href="#workflow" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  6-Stage Launch Flow
                </a>
              </li>
              <li>
                <Link to="/workspace/seo" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Technical SEO Engine
                </Link>
              </li>
              <li>
                <Link to="/workspace/deployments" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Deployment Simulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contractor Website Deliverable */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#A9B8A5',
                marginBottom: '16px'
              }}
            >
              Contractor Experience
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/preview" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Oakline Renovation Co.
                </Link>
              </li>
              <li>
                <Link to="/workspace/templates" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Website Template Library
                </Link>
              </li>
              <li>
                <Link to="/preview" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Sample Case Studies
                </Link>
              </li>
              <li>
                <Link to="/preview" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Local Service Area Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Workspace Operations */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#A9B8A5',
                marginBottom: '16px'
              }}
            >
              Agency Workspace
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/workspace" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Operations Dashboard
                </Link>
              </li>
              <li>
                <Link to="/workspace/clients" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Client Directory
                </Link>
              </li>
              <li>
                <Link to="/workspace/clients/new" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Onboarding Wizard
                </Link>
              </li>
              <li>
                <Link to="/workspace/reports" style={{ color: '#E8EFEA', fontSize: '0.875rem' }}>
                  Monthly Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid #2B3D33',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8125rem',
            color: '#8A998E'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 8px',
                borderRadius: '4px',
                backgroundColor: '#253D32',
                color: '#D4DDD5',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              <ShieldCheck size={12} color="#68D391" />
              Demo Environment
            </span>
            <span>Self-contained frontend demonstration. Deterministic mock state.</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} ContractorOS. Designed for modern contractor growth agencies.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
