import React, { useState } from 'react';
import { ContractorSiteConfig } from '../../types';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface SiteHeaderProps {
  config: ContractorSiteConfig;
  activeView: string;
  onNavigate: (view: string) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  config,
  activeView,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { business, branding } = config;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'service-areas', label: 'Service Areas' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-stone)',
        boxShadow: 'var(--shadow-subtle)'
      }}
    >
      {/* Top micro bar for phone and service area notice */}
      <div
        style={{
          backgroundColor: 'var(--color-ivory)',
          borderBottom: '1px solid var(--color-stone)',
          padding: '4px 20px',
          fontSize: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'var(--color-slate)'
        }}
      >
        <span>
          Serving {business.city}, {business.region} and surrounding communities
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span>{business.hours}</span>
          <a
            href={`tel:${business.phone}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
              color: branding.primaryColor
            }}
          >
            <Phone size={11} />
            <span>{business.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 20px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo / Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            textAlign: 'left'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              backgroundColor: branding.primaryColor,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M6 24V14L16 6L26 14V24C26 25.1 25.1 26 24 26H8C6.9 26 6 25.1 6 24Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 26V16H20V26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: 'var(--color-ink)',
                display: 'block',
                lineHeight: 1.1
              }}
            >
              {business.name}
            </span>
            <span
              style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-slate)',
                fontWeight: 500
              }}
            >
              {config.branding.fontPreference ? 'Architectural Building' : 'Renovation Co.'}
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav
          style={{ display: 'none', alignItems: 'center', gap: '26px' }}
          className="site-desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? branding.primaryColor : 'var(--color-slate)',
                  borderBottom: '2px solid',
                  borderColor: isActive ? branding.primaryColor : 'transparent',
                  padding: '6px 2px',
                  transition: 'color var(--transition-fast)'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '14px' }} className="site-desktop-cta">
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '8px',
              backgroundColor: branding.primaryColor,
              color: '#FFFFFF',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'transform var(--transition-fast)'
            }}
          >
            <span>{branding.ctaLabel || 'Request Consultation'}</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle site navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid var(--color-stone)'
          }}
          className="site-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid var(--color-stone)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            animation: 'slideDown 180ms ease-out'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: activeView === item.id ? 600 : 400,
                color: activeView === item.id ? branding.primaryColor : 'var(--color-ink)',
                padding: '6px 0'
              }}
            >
              {item.label}
            </button>
          ))}
          <div className="divider" style={{ margin: '8px 0' }} />
          <Button
            onClick={() => handleNavClick('contact')}
            style={{ backgroundColor: branding.primaryColor, borderColor: branding.primaryColor }}
          >
            {branding.ctaLabel || 'Request Consultation'}
          </Button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .site-desktop-nav {
            display: flex !important;
          }
          .site-desktop-cta {
            display: flex !important;
          }
          .site-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
