import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Sliders,
  Eye,
  SearchCheck,
  Rocket,
  BarChart3,
  FileText,
  Save,
  Monitor,
  Smartphone,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useClientStore } from '../../services/clientStore';
import { Tabs, TabItem } from '../../components/ui/Tabs';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { ContractorWebsite } from '../../components/contractor-site/ContractorWebsite';
import { runSEOAudit } from '../../services/seoValidator';

export const ClientDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { clients, updateClient, updateClientConfig, setActiveClient } = useClientStore();

  const client = clients.find(c => c.id === id) || clients[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'customizer' | 'seo' | 'deployments' | 'reports'>('overview');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [saveToast, setSaveToast] = useState(false);

  // Form editable local state synced to active client
  const [businessName, setBusinessName] = useState(client.config.business.name);
  const [tagline, setTagline] = useState(client.config.business.tagline);
  const [heroHeading, setHeroHeading] = useState(client.config.branding.heroHeading);
  const [heroSubheading, setHeroSubheading] = useState(client.config.branding.heroSubheading);
  const [ctaLabel, setCtaLabel] = useState(client.config.branding.ctaLabel);
  const [primaryColor, setPrimaryColor] = useState(client.config.branding.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(client.config.branding.secondaryColor);
  const [phone, setPhone] = useState(client.config.business.phone);
  const [email, setEmail] = useState(client.config.business.email);
  const [city, setCity] = useState(client.config.business.city);
  const [seoTitle, setSeoTitle] = useState(client.config.seo.homepageTitle);
  const [seoDesc, setSeoDesc] = useState(client.config.seo.homepageDescription);

  // Apply change instantly to store so right split-screen preview reacts instantaneously!
  const handleConfigChange = (field: string, value: string) => {
    if (field === 'businessName') {
      setBusinessName(value);
      updateClient(client.id, { name: value });
      updateClientConfig(client.id, {
        business: { ...client.config.business, name: value },
        branding: { ...client.config.branding, logoText: value }
      });
    } else if (field === 'tagline') {
      setTagline(value);
      updateClientConfig(client.id, { business: { ...client.config.business, tagline: value } });
    } else if (field === 'heroHeading') {
      setHeroHeading(value);
      updateClientConfig(client.id, { branding: { ...client.config.branding, heroHeading: value } });
    } else if (field === 'heroSubheading') {
      setHeroSubheading(value);
      updateClientConfig(client.id, { branding: { ...client.config.branding, heroSubheading: value } });
    } else if (field === 'ctaLabel') {
      setCtaLabel(value);
      updateClientConfig(client.id, { branding: { ...client.config.branding, ctaLabel: value } });
    } else if (field === 'primaryColor') {
      setPrimaryColor(value);
      updateClientConfig(client.id, { branding: { ...client.config.branding, primaryColor: value } });
    } else if (field === 'secondaryColor') {
      setSecondaryColor(value);
      updateClientConfig(client.id, { branding: { ...client.config.branding, secondaryColor: value } });
    } else if (field === 'phone') {
      setPhone(value);
      updateClientConfig(client.id, { business: { ...client.config.business, phone: value } });
    } else if (field === 'email') {
      setEmail(value);
      updateClientConfig(client.id, { business: { ...client.config.business, email: value } });
    } else if (field === 'city') {
      setCity(value);
      updateClientConfig(client.id, { business: { ...client.config.business, city: value } });
    } else if (field === 'seoTitle') {
      setSeoTitle(value);
      updateClientConfig(client.id, { seo: { ...client.config.seo, homepageTitle: value } });
    } else if (field === 'seoDesc') {
      setSeoDesc(value);
      updateClientConfig(client.id, { seo: { ...client.config.seo, homepageDescription: value } });
    }

    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const seoSummary = runSEOAudit(client);

  const tabs: TabItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'customizer', label: 'Live Template Customizer' },
    { id: 'seo', label: 'SEO Audit', badge: `${seoSummary.overallScore}%` },
    { id: 'deployments', label: 'Deployments' },
    { id: 'reports', label: 'Reports & Analytics' }
  ];

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              backgroundColor: client.config.branding.primaryColor || 'var(--color-forest)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '1.25rem'
            }}
          >
            {client.name.charAt(0)}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: '1.625rem', color: 'var(--color-ink)', margin: 0 }}>
                {client.name}
              </h1>
              <StatusBadge status={client.status} />
            </div>
            <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', margin: '4px 0 0' }}>
              {client.category} • {client.city}, {client.state} • Last updated {client.lastUpdated}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {saveToast && (
            <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} /> Autosaved to storage
            </span>
          )}
          <Link to={`/preview?client=${client.id}`} target="_blank">
            <Button variant="secondary" size="sm" icon={<ExternalLink size={14} />}>
              Open Full Website
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={(tabId) => {
          if (tabId === 'seo') {
            setActiveClient(client.id);
            navigate('/workspace/seo');
          } else if (tabId === 'deployments') {
            setActiveClient(client.id);
            navigate('/workspace/deployments');
          } else if (tabId === 'reports') {
            setActiveClient(client.id);
            navigate('/workspace/reports');
          } else {
            setActiveTab(tabId as any);
          }
        }}
      />

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Business Details Card */}
          <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Business Profile & Credentials
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem' }}>
              <div>
                <span style={{ color: 'var(--color-slate)', display: 'block', fontSize: '0.75rem' }}>Full Legal Name</span>
                <strong style={{ color: 'var(--color-ink)' }}>{client.config.business.name}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--color-slate)', display: 'block', fontSize: '0.75rem' }}>Tagline</span>
                <span style={{ color: 'var(--color-ink)' }}>{client.config.business.tagline}</span>
              </div>
              <div>
                <span style={{ color: 'var(--color-slate)', display: 'block', fontSize: '0.75rem' }}>Headquarters Address</span>
                <span style={{ color: 'var(--color-ink)' }}>{client.config.business.fullAddress}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <span style={{ color: 'var(--color-slate)', display: 'block', fontSize: '0.75rem' }}>Contact Phone</span>
                  <span style={{ color: 'var(--color-ink)' }}>{client.config.business.phone}</span>
                </div>
                <div>
                  <span style={{ color: 'var(--color-slate)', display: 'block', fontSize: '0.75rem' }}>Leads Routing Email</span>
                  <span style={{ color: 'var(--color-ink)' }}>{client.config.business.email}</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-stone)' }}>
              <Button size="sm" variant="secondary" onClick={() => setActiveTab('customizer')}>
                Edit Configuration In Split Screen
              </Button>
            </div>
          </div>

          {/* Services & Areas Summary */}
          <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Services & Local Coverage
            </h3>

            <div style={{ marginBottom: '18px' }}>
              <span style={{ color: 'var(--color-slate)', display: 'block', fontSize: '0.75rem', marginBottom: '8px' }}>
                Configured Service Pages ({client.config.services.length})
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {client.config.services.map(s => (
                  <span
                    key={s.id}
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: s.primary ? 'var(--color-forest)' : 'var(--color-ivory)',
                      color: s.primary ? '#FFFFFF' : 'var(--color-ink)',
                      border: '1px solid var(--color-stone)'
                    }}
                  >
                    {s.name} {s.primary && '★'}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span style={{ color: 'var(--color-slate)', display: 'block', fontSize: '0.75rem', marginBottom: '8px' }}>
                Local Service Area Directories ({client.config.serviceAreas.length})
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {client.config.serviceAreas.map(a => (
                  <span
                    key={a.id}
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-ivory)',
                      color: 'var(--color-slate)',
                      border: '1px solid var(--color-stone)'
                    }}
                  >
                    {a.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quality & Reporting Status */}
          <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Readiness & Delivery Health
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-slate)' }}>SEO Audit Score</span>
                <span style={{ fontWeight: 700, color: 'var(--color-forest)' }}>{seoSummary.overallScore}% Passed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-slate)' }}>Netlify Honeypot Form</span>
                <span style={{ color: 'var(--color-success)', fontWeight: 600, fontSize: '0.8125rem' }}>Active & Validated</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-slate)' }}>Total Form Conversions</span>
                <span style={{ fontWeight: 700, color: 'var(--color-ink)' }}>{client.conversionsCount || 0} Leads</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-slate)' }}>Next Scheduled Report</span>
                <span style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{client.nextReportDate}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LIVE TEMPLATE CUSTOMIZER (SPLIT-SCREEN) */}
      {activeTab === 'customizer' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '24px',
            alignItems: 'start'
          }}
        >
          {/* Left: Configuration Form */}
          <div
            className="surface-card"
            style={{
              padding: '24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              maxHeight: '750px',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', margin: 0 }}>
                  Website Configuration
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                  Edits update the live preview on the right instantly.
                </span>
              </div>
              <span style={{ fontSize: '0.6875rem', backgroundColor: 'var(--color-success-bg)', color: 'var(--color-success)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                Live Reactive
              </span>
            </div>

            <div className="form-group">
              <label className="form-label">Business Name</label>
              <input
                type="text"
                className="form-input"
                value={businessName}
                onChange={(e) => handleConfigChange('businessName', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Hero Heading (H1)</label>
              <input
                type="text"
                className="form-input"
                value={heroHeading}
                onChange={(e) => handleConfigChange('heroHeading', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Hero Value Proposition Copy</label>
              <textarea
                className="form-textarea"
                rows={3}
                value={heroSubheading}
                onChange={(e) => handleConfigChange('heroSubheading', e.target.value)}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Primary Brand Color</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => handleConfigChange('primaryColor', e.target.value)}
                    style={{ width: '38px', height: '38px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                  />
                  <input
                    type="text"
                    className="form-input"
                    value={primaryColor}
                    onChange={(e) => handleConfigChange('primaryColor', e.target.value)}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Primary CTA Button</label>
                <input
                  type="text"
                  className="form-input"
                  value={ctaLabel}
                  onChange={(e) => handleConfigChange('ctaLabel', e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Contact Phone</label>
                <input
                  type="text"
                  className="form-input"
                  value={phone}
                  onChange={(e) => handleConfigChange('phone', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Primary City</label>
                <input
                  type="text"
                  className="form-input"
                  value={city}
                  onChange={(e) => handleConfigChange('city', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Homepage SEO Title</label>
              <input
                type="text"
                className="form-input"
                value={seoTitle}
                onChange={(e) => handleConfigChange('seoTitle', e.target.value)}
              />
              <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)' }}>
                {seoTitle.length} characters (optimal 50–60)
              </span>
            </div>

            <div className="form-group">
              <label className="form-label">Homepage Meta Description</label>
              <textarea
                className="form-textarea"
                rows={2}
                value={seoDesc}
                onChange={(e) => handleConfigChange('seoDesc', e.target.value)}
              />
              <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)' }}>
                {seoDesc.length} characters (optimal 120–160)
              </span>
            </div>
          </div>

          {/* Right: Live Responsive Preview Canvas */}
          <div
            className="surface-card"
            style={{
              padding: '20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                  Live Preview Engine
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                  ({client.config.business.name})
                </span>
              </div>

              {/* Device Width Toggle */}
              <div style={{ display: 'flex', backgroundColor: 'var(--color-ivory)', padding: '3px', borderRadius: '6px', border: '1px solid var(--color-stone)' }}>
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: previewDevice === 'desktop' ? '#FFFFFF' : 'transparent',
                    color: previewDevice === 'desktop' ? 'var(--color-forest)' : 'var(--color-slate)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem'
                  }}
                >
                  <Monitor size={13} /> Desktop
                </button>
                <button
                  onClick={() => setPreviewDevice('mobile')}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: previewDevice === 'mobile' ? '#FFFFFF' : 'transparent',
                    color: previewDevice === 'mobile' ? 'var(--color-forest)' : 'var(--color-slate)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem'
                  }}
                >
                  <Smartphone size={13} /> Mobile
                </button>
              </div>
            </div>

            {/* Frame Container */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'var(--color-ivory)',
                padding: previewDevice === 'mobile' ? '20px 0' : '0',
                borderRadius: '12px',
                border: '1px solid var(--color-stone)',
                height: '680px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: previewDevice === 'mobile' ? '375px' : '100%',
                  height: '100%',
                  overflowY: 'auto',
                  backgroundColor: '#FFFFFF',
                  borderRadius: previewDevice === 'mobile' ? '24px' : '0',
                  boxShadow: previewDevice === 'mobile' ? 'var(--shadow-modal)' : 'none',
                  border: previewDevice === 'mobile' ? '6px solid #202722' : 'none',
                  transition: 'width 200ms ease'
                }}
              >
                <ContractorWebsite
                  config={client.config}
                  clientId={client.id}
                  isCompactFrame={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
