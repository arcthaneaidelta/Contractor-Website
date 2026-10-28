import React, { useState } from 'react';
import { ContractorSiteConfig } from '../../types';
import { MapPin, CheckCircle, ArrowRight, Home, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface SiteServiceAreasPageProps {
  config: ContractorSiteConfig;
  onNavigate: (view: string) => void;
}

export const SiteServiceAreasPage: React.FC<SiteServiceAreasPageProps> = ({ config, onNavigate }) => {
  const { business, branding, serviceAreas, services } = config;
  const [selectedAreaId, setSelectedAreaId] = useState(serviceAreas[0]?.id || '');

  const activeArea = serviceAreas.find(a => a.id === selectedAreaId) || serviceAreas[0];

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '80vh', padding: '60px 20px 100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
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
            Regional Coverage
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
            Local Expertise Across Greater {business.city}
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Distinct architectural character demands localized expertise. We are intimately familiar with neighborhood municipal codes, historic preservation guidelines, and HOA requirements.
          </p>
        </div>

        {/* 2-Column Interactive Directory */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}
        >
          {/* Left: Neighborhood Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
              Select Neighborhood or Municipality
            </h3>
            {serviceAreas.map((area) => {
              const isSelected = area.id === activeArea?.id;
              return (
                <div
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className="surface-card"
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    backgroundColor: isSelected ? 'var(--color-ivory-light)' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isSelected ? branding.primaryColor : 'var(--color-stone)',
                    boxShadow: isSelected ? 'var(--shadow-hover)' : 'var(--shadow-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <MapPin size={16} color={branding.primaryColor} />
                      <h4 style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', margin: 0 }}>
                        {area.name}
                      </h4>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                      {area.county} • {area.featuredProjectsCount} Completed Builds
                    </span>
                  </div>

                  <ArrowRight size={16} color={isSelected ? branding.primaryColor : 'var(--color-stone-dark)'} />
                </div>
              );
            })}
          </div>

          {/* Right: Active Area Dedicated Content Display */}
          {activeArea && (
            <div
              className="surface-card"
              style={{
                padding: '36px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--color-stone)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    backgroundColor: 'rgba(37, 61, 50, 0.08)',
                    color: branding.primaryColor,
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}
                >
                  Featured Service Region
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                  {activeArea.county}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.875rem',
                  color: 'var(--color-ink)',
                  marginBottom: '16px'
                }}
              >
                Residential Renovations in {activeArea.name}
              </h2>

              <p style={{ color: 'var(--color-slate)', lineHeight: 1.7, fontSize: '0.9375rem', marginBottom: '24px' }}>
                {activeArea.description}
              </p>

              <h4 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '14px' }}>
                Local Neighborhood Considerations & Strengths
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {activeArea.highlights.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color={branding.primaryColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Localized CTA */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid var(--color-stone)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                  Planning a remodel in {activeArea.name}?
                </span>
                <Button
                  size="sm"
                  onClick={() => onNavigate('contact')}
                  style={{ backgroundColor: branding.primaryColor, borderColor: branding.primaryColor }}
                  icon={<ArrowRight size={14} />}
                  iconPosition="right"
                >
                  Request Consultation in {activeArea.name.split('&')[0].trim()}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
