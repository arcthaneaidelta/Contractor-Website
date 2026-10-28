import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  LayoutTemplate,
  CheckCircle2,
  Sliders,
  Copy,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { DEMO_TEMPLATES } from '../../data/demoTemplates';
import { WebsiteTemplate } from '../../types';
import { useClientStore } from '../../services/clientStore';

export const TemplatesPage: React.FC = () => {
  const navigate = useNavigate();
  const { setActiveClient, clients } = useClientStore();

  const [templates, setTemplates] = useState<WebsiteTemplate[]>(DEMO_TEMPLATES);
  const [previewTemplate, setPreviewTemplate] = useState<WebsiteTemplate | null>(null);

  const handleUseTemplate = (template: WebsiteTemplate) => {
    // If client matches template, activate it or navigate to wizard
    if (template.id === 'oakline-editorial') {
      setActiveClient('oakline-renovation');
    } else if (template.id === 'summit-metro') {
      setActiveClient('summit-home-services');
    } else if (template.id === 'cedar-stone-artisan') {
      setActiveClient('cedar-stone-remodeling');
    }
    navigate('/workspace/clients/new');
  };

  const handleDuplicateTemplate = (template: WebsiteTemplate) => {
    const copy: WebsiteTemplate = {
      ...template,
      id: `${template.id}-custom-${Math.floor(100 + Math.random() * 900)}`,
      name: `${template.name} (Custom Variant)`,
      readinessRating: 95
    };
    setTemplates([copy, ...templates]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Header Card */}
      <div
        className="surface-card"
        style={{
          padding: '24px',
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <h1 style={{ fontSize: '1.75rem', color: 'var(--color-ink)', margin: 0 }}>
              Reusable Website Template Library
            </h1>
            <span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF', fontWeight: 600 }}>
              Shared Architecture
            </span>
          </div>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', margin: 0 }}>
            Standardized, multi-page frameworks engineered for home improvement, architectural remodeling, and artisan carpentry.
          </p>
        </div>

        <Link to="/workspace/clients/new">
          <Button variant="primary" icon={<Sparkles size={15} />}>
            Instantiate New Website
          </Button>
        </Link>
      </div>

      {/* Grid of Templates */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}
      >
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="surface-card"
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--color-stone)'
            }}
          >
            <div>
              {/* Thumbnail Media */}
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-ivory)' }}>
                <img
                  src={tpl.thumbnail}
                  alt={tpl.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(27, 30, 28, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}
                >
                  {tpl.industry}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--color-forest)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}
                >
                  {tpl.readinessRating}% Customization Ready
                </div>
              </div>

              {/* Template Content */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: tpl.theme.primaryColor }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)', fontFamily: 'var(--font-mono)' }}>
                    {tpl.theme.fontName}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '4px' }}>
                  {tpl.name}
                </h3>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-forest)', fontWeight: 500, display: 'block', marginBottom: '12px' }}>
                  {tpl.subtitle}
                </span>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {tpl.description}
                </p>

                {/* Supported Page Types */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Supported Page Architecture
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {tpl.supportedPages.map((pg, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.6875rem',
                          padding: '2px 8px',
                          backgroundColor: 'var(--color-ivory)',
                          borderRadius: '4px',
                          border: '1px solid var(--color-stone)',
                          color: 'var(--color-ink)'
                        }}
                      >
                        {pg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div
              style={{
                padding: '16px 24px',
                borderTop: '1px solid var(--color-stone)',
                backgroundColor: 'var(--color-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => handleDuplicateTemplate(tpl)}
                  title="Duplicate Template Blueprint"
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-stone)',
                    color: 'var(--color-slate)',
                    display: 'flex'
                  }}
                >
                  <Copy size={15} />
                </button>

                <Link
                  to="/preview"
                  title="Inspect Live Template Instance"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-stone)',
                    color: 'var(--color-ink)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8125rem'
                  }}
                >
                  <Eye size={14} /> Preview
                </Link>
              </div>

              <Button
                size="sm"
                variant="primary"
                onClick={() => handleUseTemplate(tpl)}
                icon={<ArrowRight size={14} />}
                iconPosition="right"
              >
                Use Template
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
