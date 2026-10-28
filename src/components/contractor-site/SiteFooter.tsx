import React from 'react';
import { ContractorSiteConfig } from '../../types';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

interface SiteFooterProps {
  config: ContractorSiteConfig;
  onNavigate: (view: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ config, onNavigate }) => {
  const { business, branding } = config;

  return (
    <footer
      style={{
        backgroundColor: '#1E2521',
        color: '#E6ECE8',
        borderTop: '1px solid #2B3630',
        paddingTop: '60px',
        paddingBottom: '36px'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '36px',
            marginBottom: '44px'
          }}
        >
          {/* Column 1: Brand & NAP */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: branding.primaryColor,
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M6 24V14L16 6L26 14V24C26 25.1 25.1 26 24 26H8C6.9 26 6 25.1 6 24Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 26V16H20V26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0 }}>
                {business.name}
              </h3>
            </div>
            <p style={{ color: '#9AA79E', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '18px' }}>
              {business.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', color: '#B5C4B9' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={15} color="#A9B8A5" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{business.fullAddress}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#A9B8A5" style={{ flexShrink: 0 }} />
                <span>{business.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#A9B8A5" style={{ flexShrink: 0 }} />
                <span>{business.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A9B8A5', marginBottom: '16px' }}>
              Specialized Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {config.services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    style={{ color: '#E6ECE8', fontSize: '0.875rem', textAlign: 'left', padding: 0 }}
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A9B8A5', marginBottom: '16px' }}>
              Local Communities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {config.serviceAreas.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <button
                    onClick={() => onNavigate('service-areas')}
                    style={{ color: '#E6ECE8', fontSize: '0.875rem', textAlign: 'left', padding: 0 }}
                  >
                    {area.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Consultation */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A9B8A5', marginBottom: '16px' }}>
              Office & Studio
            </h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: '#B5C4B9', marginBottom: '16px' }}>
              <Clock size={16} color="#A9B8A5" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span>Standard Business Hours</span>
                <p style={{ margin: '2px 0 0', color: '#FFFFFF', fontWeight: 500 }}>{business.hours}</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '6px',
                backgroundColor: branding.primaryColor,
                color: '#FFFFFF',
                fontSize: '0.875rem',
                fontWeight: 600
              }}
            >
              <span>{branding.ctaLabel || 'Request Consultation'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Footer Bottom Note */}
        <div
          style={{
            borderTop: '1px solid #2B3630',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.8125rem',
            color: '#7E8C82'
          }}
        >
          <div>
            <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          </div>
          <div>
            <span style={{ fontStyle: 'italic' }}>
              ContractorOS Verified Local System Demo.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
