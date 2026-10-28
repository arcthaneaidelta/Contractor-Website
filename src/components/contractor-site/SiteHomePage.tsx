import React from 'react';
import { ContractorSiteConfig, ProjectItem } from '../../types';
import { ArrowRight, CheckCircle2, Shield, Compass, Hammer, Sparkles, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

interface SiteHomePageProps {
  config: ContractorSiteConfig;
  onNavigate: (view: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const SiteHomePage: React.FC<SiteHomePageProps> = ({
  config,
  onNavigate,
  onSelectProject
}) => {
  const { business, branding, services, projects, serviceAreas } = config;

  return (
    <div>
      {/* 1. Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '540px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#202E26',
          color: '#FFFFFF',
          overflow: 'hidden'
        }}
      >
        {/* Background Photo with warm dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
        >
          <img
            src={branding.heroImageUrl}
            alt={business.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.55)'
            }}
          />
        </div>

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '80px 20px',
            width: '100%'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '999px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#E8F2EC',
                marginBottom: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <MapPin size={13} color="#A9B8A5" />
              <span>Serving {business.city} and surrounding communities</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '20px',
                fontWeight: 400
              }}
            >
              {branding.heroHeading}
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: '#E2EBE5',
                marginBottom: '32px'
              }}
            >
              {branding.heroSubheading}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={() => onNavigate('contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  backgroundColor: branding.primaryColor,
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <span>{branding.ctaLabel || 'Request a Consultation'}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate('work')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: 'var(--color-ink)',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                <span>Explore Our Work</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-ivory)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
                color: branding.primaryColor,
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Dedicated Capabilities
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--color-ink)' }}>
              Crafted with intention. Executed with precision.
            </h2>
            <p style={{ color: 'var(--color-slate)', marginTop: '12px' }}>
              From initial structural planning to final custom millwork, we manage every phase of your home renovation under one seamless standard.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {services.map((srv) => (
              <div
                key={srv.id}
                className="surface-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  position: 'relative'
                }}
              >
                {srv.primary && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '18px',
                      right: '18px',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(37, 61, 50, 0.1)',
                      color: branding.primaryColor
                    }}
                  >
                    Primary Focus
                  </span>
                )}
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-ink)',
                      marginBottom: '10px'
                    }}
                  >
                    {srv.name}
                  </h3>
                  <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {srv.description}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {srv.features.slice(0, 3).map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-ink)' }}>
                        <CheckCircle2 size={14} color={branding.primaryColor} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-stone)'
                  }}
                >
                  {srv.startingPrice && (
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                      From <strong style={{ color: 'var(--color-ink)' }}>{srv.startingPrice}</strong>
                    </span>
                  )}
                  <button
                    onClick={() => onNavigate('services')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: branding.primaryColor
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Portfolio Gallery */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '20px',
              marginBottom: '40px'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  color: branding.primaryColor,
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                Portfolio
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--color-ink)', margin: 0 }}>
                Selected Residential Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('work')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: branding.primaryColor
              }}
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {projects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="surface-card"
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 300ms ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(27, 30, 28, 0.75)',
                      backdropFilter: 'blur(4px)',
                      color: '#FFFFFF',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {proj.category}
                  </div>
                </div>

                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--color-slate)', marginBottom: '6px' }}>
                    <MapPin size={12} color={branding.primaryColor} />
                    <span>{proj.location}</span>
                  </div>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '8px', lineHeight: 1.3 }}>
                    {proj.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                    {proj.description.slice(0, 95)}…
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 4-Step Process Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-ivory)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
                color: branding.primaryColor,
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Our Methodology
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--color-ink)' }}>
              How we guide your renovation
            </h2>
            <p style={{ color: 'var(--color-slate)', marginTop: '8px' }}>
              Clear milestones, fixed architectural specifications, and transparent project management from day one.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              { num: '01', title: 'Discover', desc: 'On-site consultation, spatial assessment, budget alignment, and preliminary architectural goals.' },
              { num: '02', title: 'Plan & Design', desc: '3D modeling, material palette selections, engineering review, and permitting submittals.' },
              { num: '03', title: 'Build & Craft', desc: 'Dedicated site supervision, daily trade coordination, and meticulous structural finish work.' },
              { num: '04', title: 'Complete', desc: 'Comprehensive walkthrough, punch-list perfection, and comprehensive warranty handover.' }
            ].map((step) => (
              <div
                key={step.num}
                className="surface-card"
                style={{ padding: '28px', backgroundColor: '#FFFFFF' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: branding.primaryColor,
                    display: 'block',
                    marginBottom: '12px'
                  }}
                >
                  {step.num}
                </span>
                <h4 style={{ fontSize: '1.1875rem', marginBottom: '8px', color: 'var(--color-ink)' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation Call to Action Banner */}
      <section
        style={{
          padding: '70px 20px',
          backgroundColor: branding.primaryColor,
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              color: '#FFFFFF',
              marginBottom: '16px',
              fontWeight: 400
            }}
          >
            Ready to reimagine your living space?
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: '#E0EAE3',
              marginBottom: '28px',
              lineHeight: 1.6
            }}
          >
            Schedule a confidential consultation with our team. We’ll review your vision, architectural priorities, and investment range.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              color: branding.primaryColor,
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
            }}
          >
            <span>{branding.ctaLabel || 'Request Consultation'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
