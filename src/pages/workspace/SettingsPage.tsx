import React, { useState } from 'react';
import {
  Sliders,
  ShieldCheck,
  RotateCcw,
  Server,
  Key,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Globe
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { useClientStore } from '../../services/clientStore';

export const SettingsPage: React.FC = () => {
  const { resetToDefaults } = useClientStore();

  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const [agencyName, setAgencyName] = useState('ContractorOS Agency Studio');
  const [agencyEmail, setAgencyEmail] = useState('ops@contractoros.demo');
  const [defaultCity, setDefaultCity] = useState('Austin, TX');

  const handleConfirmReset = () => {
    resetToDefaults();
    setResetSuccess(true);
    setTimeout(() => {
      setResetSuccess(false);
      setResetModalOpen(false);
    }, 1200);
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.875rem', color: 'var(--color-ink)', marginBottom: '4px' }}>
          System & Workflow Settings
        </h1>
        <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', margin: 0 }}>
          Manage agency branding defaults, production integration blueprints, and demo storage state.
        </p>
      </div>

      {/* Agency Defaults */}
      <div className="surface-card" style={{ padding: '28px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
        <h3 style={{ fontSize: '1.1875rem', color: 'var(--color-ink)', marginBottom: '18px' }}>
          Agency Operations Profile
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          <div className="form-group">
            <label className="form-label">Agency Operating Name</label>
            <input
              type="text"
              className="form-input"
              value={agencyName}
              onChange={(e) => setAgencyName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Agency Operations Email</label>
            <input
              type="email"
              className="form-input"
              value={agencyEmail}
              onChange={(e) => setAgencyEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Default Target Market</label>
            <input
              type="text"
              className="form-input"
              value={defaultCity}
              onChange={(e) => setDefaultCity(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Production Blueprints Advisory */}
      <div className="surface-card" style={{ padding: '28px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <Server size={20} color="var(--color-forest)" />
          <h3 style={{ fontSize: '1.1875rem', color: 'var(--color-ink)', margin: 0 }}>
            Production Connection Pathways
          </h3>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '20px' }}>
          In accordance with the PRD specification, this prototype runs entirely backend-free with deterministic mock state and zero third-party API keys required. When transitioning to live client production, the system hooks into these verified cloud endpoints:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          <div style={{ padding: '16px', backgroundColor: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
            <strong style={{ fontSize: '0.875rem', color: 'var(--color-ink)', display: 'block', marginBottom: '4px' }}>
              1. Google Analytics 4 Data API
            </strong>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
              Service account credentials connect via OAuth2 to fetch real-time session volume, organic traffic segments, and form events into monthly digests.
            </p>
          </div>

          <div style={{ padding: '16px', backgroundColor: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
            <strong style={{ fontSize: '0.875rem', color: 'var(--color-ink)', display: 'block', marginBottom: '4px' }}>
              2. Netlify Edge & Forms Webhook
            </strong>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
              Form submission webhooks trigger instantaneous SMS and email notifications to the contractor while logging inquiries to agency CRM spreadsheets.
            </p>
          </div>

          <div style={{ padding: '16px', backgroundColor: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
            <strong style={{ fontSize: '0.875rem', color: 'var(--color-ink)', display: 'block', marginBottom: '4px' }}>
              3. Automated PDF Mailers (Postmark / SendGrid)
            </strong>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
              Headless Chromium cron worker generates high-dpi PDF reports on the 1st of every month and automatically dispatches executive client emails.
            </p>
          </div>
        </div>
      </div>

      {/* Demo State Reset */}
      <div
        className="surface-card"
        style={{
          padding: '28px',
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          border: '1px solid var(--color-error-border)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-error)', margin: '0 0 4px' }}>
              Reset Demo Data to Defaults
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate)', margin: 0 }}>
              Clears customized client styling, simulated submissions, and restored initial sample accounts.
            </p>
          </div>

          <Button variant="danger" size="sm" icon={<RotateCcw size={14} />} onClick={() => setResetModalOpen(true)}>
            Reset Demo Storage
          </Button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      <Modal
        isOpen={resetModalOpen}
        onClose={() => setResetModalOpen(false)}
        title="Confirm Reset Demo Storage"
        description="This will clear your local edits and restore the initial sample contractor clients."
      >
        <div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate)', marginBottom: '24px' }}>
            Are you sure? All clients created during this demo session will be reset to the original 4 sample businesses (Oakline Renovation Co., Summit Home Services, Cedar & Stone, Apex Systems).
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Button variant="secondary" onClick={() => setResetModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmReset}>
              {resetSuccess ? 'Resetting…' : 'Yes, Reset Demo Storage'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
