import React from 'react';
import { ContractorSiteConfig } from '../../types';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { Button } from '../ui/Button';

interface SiteServicesPageProps {
  config: ContractorSiteConfig;
  onNavigate: (view: string) => void;
}

export const SiteServicesPage: React.FC<SiteServicesPageProps> = ({ config, onNavigate }) => {
  const { branding, services, business } = config;

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '80vh', padding: '60px 20px 100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
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
            Specialized Services
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
            Enduring craftsmanship tailored to every detail.
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Every home renovation at {business.name} is built to architectural standards with certified materials, dedicated trade supervision, and transparent milestone tracking.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              className="surface-card"
              style={{
                padding: '40px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '36px',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(37, 61, 50, 0.08)',
                      color: branding.primaryColor
                    }}
                  >
                    Service {String(idx + 1).padStart(2, '0')}
                  </span>
                  {srv.primary && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: '#FEF6EC',
                        color: '#B3681D',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      Signature Offering
                    </span>
                  )}
                </div>

                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', color: 'var(--color-ink)', marginBottom: '14px' }}>
                  {srv.name}
                </h2>

                <p style={{ color: 'var(--color-slate)', lineHeight: 1.7, fontSize: '0.9375rem', marginBottom: '20px' }}>
                  {srv.fullDescription || srv.description}
                </p>

                {srv.startingPrice && (
                  <div style={{ marginBottom: '24px', fontSize: '0.875rem', color: 'var(--color-slate)' }}>
                    Typical Investment Range: <strong style={{ color: 'var(--color-ink)', fontSize: '1rem' }}>{srv.startingPrice}+</strong>
                  </div>
                )}

                <Button
                  onClick={() => onNavigate('contact')}
                  size="sm"
                  style={{ backgroundColor: branding.primaryColor, borderColor: branding.primaryColor }}
                  icon={<ArrowRight size={14} />}
                  iconPosition="right"
                >
                  Consult On {srv.name}
                </Button>
              </div>

              {/* Scope Checklist Container */}
              <div
                style={{
                  backgroundColor: 'var(--color-ivory)',
                  padding: '28px',
                  borderRadius: '12px',
                  border: '1px solid var(--color-stone)'
                }}
              >
                <h4 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
                  Included In Architectural Scope
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {srv.features.map((feature, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color={branding.primaryColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-stone)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.75rem',
                    color: 'var(--color-slate)'
                  }}
                >
                  <ShieldCheck size={14} color={branding.primaryColor} />
                  <span>Licensed, insured & back-stopped by our 3-year craftsmanship warranty</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
