import React from 'react';
import { ContractorSiteConfig } from '../../types';
import { ShieldCheck, Compass, Users2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface SiteAboutPageProps {
  config: ContractorSiteConfig;
  onNavigate: (view: string) => void;
}

export const SiteAboutPage: React.FC<SiteAboutPageProps> = ({ config, onNavigate }) => {
  const { business, branding } = config;

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '80vh', padding: '60px 20px 100px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span
            style={{
              fontSize: '0.8125rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 600,
              color: branding.primaryColor,
              display: 'block',
              marginBottom: '10px'
            }}
          >
            About Our Practice
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-ink)',
              marginBottom: '16px',
              fontWeight: 400
            }}
          >
            Rooted in craftsmanship. Driven by consideration.
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            We believe a thoughtful home renovation shouldn’t just alter your physical layout—it should elevate the calm, flow, and everyday delight of how you live.
          </p>
        </div>

        {/* Narrative Grid */}
        <div
          className="surface-card"
          style={{
            padding: '48px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            marginBottom: '40px'
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '20px', color: 'var(--color-ink)' }}>
              The {business.name} Philosophy
            </h2>
            <p style={{ color: 'var(--color-slate)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '18px' }}>
              Residential construction often struggles with disjointed communication, vague cost forecasts, and sub-par finish standards. Our studio operates differently: we unify architecture, detailed carpentry, trade scheduling, and transparent client communication under a single, disciplined system.
            </p>
            <p style={{ color: 'var(--color-slate)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '32px' }}>
              Whether crafting a bespoke white oak kitchen island in Tarrytown or engineering a watertight zero-threshold limestone master suite in West Lake Hills, our master tradespeople approach each project with pride of workmanship and rigorous attention to structural longevity.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px',
                paddingTop: '28px',
                borderTop: '1px solid var(--color-stone)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: branding.primaryColor, marginBottom: '8px' }}>
                  <Compass size={18} />
                  <strong style={{ color: 'var(--color-ink)', fontSize: '1rem' }}>Considered Space</strong>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                  Every partition, sightline, and electrical switch is positioned with intention to maximize natural light and ergonomics.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: branding.primaryColor, marginBottom: '8px' }}>
                  <ShieldCheck size={18} />
                  <strong style={{ color: 'var(--color-ink)', fontSize: '1rem' }}>Authentic Materials</strong>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                  We source natural stones, FSC-certified hardwoods, low-VOC finishes, and solid brass plumbing that age gracefully.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: branding.primaryColor, marginBottom: '8px' }}>
                  <Users2 size={18} />
                  <strong style={{ color: 'var(--color-ink)', fontSize: '1rem' }}>Clear Governance</strong>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                  Weekly progress updates, dedicated lead superintendents on site, and fixed-scope pricing agreements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div
          style={{
            padding: '36px',
            backgroundColor: branding.primaryColor,
            color: '#FFFFFF',
            borderRadius: '16px',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '10px' }}>
            Work With Our Team
          </h3>
          <p style={{ color: '#E0EAE3', maxWidth: '540px', margin: '0 auto 20px', fontSize: '0.9375rem' }}>
            Book an introductory consultation with our principal builder to review your architectural plans.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{
              padding: '12px 28px',
              backgroundColor: '#FFFFFF',
              color: branding.primaryColor,
              fontWeight: 600,
              borderRadius: '8px',
              fontSize: '0.9375rem'
            }}
          >
            {branding.ctaLabel || 'Request a Consultation'}
          </button>
        </div>
      </div>
    </div>
  );
};
