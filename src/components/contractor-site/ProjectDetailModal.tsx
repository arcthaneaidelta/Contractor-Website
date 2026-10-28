import React from 'react';
import { ProjectItem } from '../../types';
import { X, Calendar, DollarSign, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
  primaryColor?: string;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onContactClick,
  primaryColor = '#253D32'
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(27, 30, 28, 0.75)',
        backdropFilter: 'blur(4px)',
        animation: 'fadeIn 180ms ease-out'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="surface-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-modal)',
          animation: 'slideUp 220ms ease-out'
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--color-stone)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-ivory)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 600,
                color: primaryColor,
                backgroundColor: 'rgba(37, 61, 50, 0.08)',
                padding: '3px 8px',
                borderRadius: '4px'
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
              Case Study Portfolio
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            style={{
              padding: '6px',
              borderRadius: '6px',
              color: 'var(--color-slate)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          <div
            style={{
              height: '320px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '20px',
              position: 'relative'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              color: 'var(--color-ink)',
              marginBottom: '12px',
              lineHeight: 1.2
            }}
          >
            {project.title}
          </h2>

          {/* Quick Specs Pill Grid */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '20px',
              padding: '12px 16px',
              backgroundColor: 'var(--color-ivory)',
              borderRadius: '10px',
              border: '1px solid var(--color-stone)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}>
              <MapPin size={16} color={primaryColor} />
              <span style={{ color: 'var(--color-slate)' }}>Location:</span>
              <strong style={{ color: 'var(--color-ink)' }}>{project.location}</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}>
              <Calendar size={16} color={primaryColor} />
              <span style={{ color: 'var(--color-slate)' }}>Timeline:</span>
              <strong style={{ color: 'var(--color-ink)' }}>{project.timeline}</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}>
              <DollarSign size={16} color={primaryColor} />
              <span style={{ color: 'var(--color-slate)' }}>Investment:</span>
              <strong style={{ color: 'var(--color-ink)' }}>{project.budgetRange}</strong>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--color-ink)' }}>
              Project Narrative & Architectural Scope
            </h4>
            <p style={{ color: 'var(--color-slate)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
              {project.description}
            </p>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--color-ink)' }}>
              Craftsmanship Highlights
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {project.scopeHighlights.map((hl, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.875rem',
                    color: 'var(--color-ink)'
                  }}
                >
                  <CheckCircle size={16} color={primaryColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div
            style={{
              paddingTop: '20px',
              borderTop: '1px solid var(--color-stone)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                Considering a similar transformation for your home?
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button variant="secondary" size="sm" onClick={onClose}>
                Close Gallery
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
              >
                Inquire About This Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
