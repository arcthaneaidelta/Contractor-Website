import React, { useState } from 'react';
import { ContractorSiteConfig, ProjectItem } from '../../types';
import { MapPin, ArrowUpRight, Filter } from 'lucide-react';

interface SiteProjectsPageProps {
  config: ContractorSiteConfig;
  onSelectProject: (project: ProjectItem) => void;
}

export const SiteProjectsPage: React.FC<SiteProjectsPageProps> = ({ config, onSelectProject }) => {
  const { branding, projects } = config;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Kitchens', 'Bathrooms', 'Cabinetry', 'Full Interiors'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '80vh', padding: '60px 20px 100px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
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
            Project Portfolio
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
            Our Work Speaks For Itself.
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Explore completed residential case studies. Click any project to inspect architectural specifications, material selections, and project timelines.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  backgroundColor: isActive ? branding.primaryColor : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--color-ink)',
                  border: '1px solid',
                  borderColor: isActive ? branding.primaryColor : 'var(--color-stone)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Projects */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="surface-card"
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  height: '280px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#E6E1D8'
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
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
                    backgroundColor: 'rgba(27, 30, 28, 0.8)',
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
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-card)',
                    color: branding.primaryColor
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      color: 'var(--color-slate)',
                      marginBottom: '8px'
                    }}
                  >
                    <MapPin size={13} color={branding.primaryColor} />
                    <span>{proj.location}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-ink)',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-slate)',
                      lineHeight: 1.6,
                      marginBottom: '16px'
                    }}
                  >
                    {proj.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--color-stone)',
                    fontSize: '0.75rem',
                    color: 'var(--color-slate)'
                  }}
                >
                  <span>Timeline: <strong style={{ color: 'var(--color-ink)' }}>{proj.timeline}</strong></span>
                  <span style={{ color: branding.primaryColor, fontWeight: 600 }}>Inspect Case Study →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
