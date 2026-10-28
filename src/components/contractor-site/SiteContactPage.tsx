import React, { useState } from 'react';
import { ContractorSiteConfig } from '../../types';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, ShieldAlert, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ClientStore } from '../../services/clientStore';

interface SiteContactPageProps {
  config: ContractorSiteConfig;
  clientId: string;
}

export const SiteContactPage: React.FC<SiteContactPageProps> = ({ config, clientId }) => {
  const { business, branding, services, serviceAreas } = config;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(services[0]?.name || 'Kitchen Remodeling');
  const [location, setLocation] = useState(serviceAreas[0]?.name || 'Austin, TX');
  const [preferredMethod, setPreferredMethod] = useState<'Email' | 'Phone'>('Email');
  const [description, setDescription] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceNumber: string;
    fullName: string;
    email: string;
    service: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }
    if (!description.trim()) {
      errs.description = 'Please provide a brief description of your project scope.';
    }
    if (!consent) {
      errs.consent = 'Please confirm consent to be contacted regarding this inquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Record locally in store
      const recorded = ClientStore.recordSubmission({
        clientId,
        clientName: business.name,
        fullName,
        email,
        phone,
        service,
        location,
        preferredMethod,
        description
      });

      setIsSubmitting(false);
      setSubmissionResult({
        referenceNumber: recorded.referenceNumber,
        fullName,
        email,
        service
      });
    }, 600);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '80vh', padding: '60px 20px 100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
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
            Initiate Consultation
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
            Let's discuss your architectural vision.
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Share your project parameters below. Our principal team will review your scope, schedule a site walkthrough, and outline preliminary engineering requirements.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {/* Left: Contact Info & Local Assurance */}
          <div
            className="surface-card"
            style={{
              padding: '36px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--color-stone)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Studio & Workshop
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px', fontSize: '0.9375rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color={branding.primaryColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-ink)', display: 'block' }}>Address</strong>
                  <span style={{ color: 'var(--color-slate)' }}>{business.fullAddress}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Phone size={18} color={branding.primaryColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-ink)', display: 'block' }}>Direct Telephone</strong>
                  <a href={`tel:${business.phone}`} style={{ color: branding.primaryColor, fontWeight: 500 }}>
                    {business.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Mail size={18} color={branding.primaryColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-ink)', display: 'block' }}>General Inquiries</strong>
                  <span style={{ color: 'var(--color-slate)' }}>{business.email}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={18} color={branding.primaryColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-ink)', display: 'block' }}>Operating Hours</strong>
                  <span style={{ color: 'var(--color-slate)' }}>{business.hours}</span>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-ivory)',
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid var(--color-stone)'
              }}
            >
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-ink)', marginBottom: '8px' }}>
                What Happens Next
              </h4>
              <ol style={{ paddingLeft: '18px', margin: 0, fontSize: '0.8125rem', color: 'var(--color-slate)', lineHeight: 1.6 }}>
                <li>Preliminary project scope assessment</li>
                <li>Follow-up phone consultation within 1 business day</li>
                <li>On-site spatial assessment and measurement review</li>
              </ol>
            </div>
          </div>

          {/* Right: The Interactive Form */}
          <div
            className="surface-card"
            style={{
              padding: '36px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--color-stone)'
            }}
          >
            {submissionResult ? (
              <div style={{ textAlign: 'center', padding: '24px 0', animation: 'fadeIn 240ms ease-out' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-success-bg)',
                    color: 'var(--color-success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px'
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-ink)', marginBottom: '10px' }}>
                  Consultation Request Received
                </h3>

                <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Thank you, <strong>{submissionResult.fullName}</strong>. Your project brief for{' '}
                  <strong>{submissionResult.service}</strong> has been logged into the local ContractorOS system.
                </p>

                <div
                  style={{
                    display: 'inline-block',
                    padding: '10px 18px',
                    backgroundColor: 'var(--color-ivory)',
                    borderRadius: '8px',
                    border: '1px solid var(--color-stone)',
                    marginBottom: '24px',
                    fontSize: '0.875rem'
                  }}
                >
                  <span style={{ color: 'var(--color-slate)' }}>Demo Reference ID: </span>
                  <strong style={{ color: branding.primaryColor, fontFamily: 'var(--font-mono)' }}>
                    {submissionResult.referenceNumber}
                  </strong>
                </div>

                <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', marginBottom: '24px' }}>
                  The client conversion count has been updated in the workspace operations dashboard.
                </p>

                <Button
                  onClick={() => {
                    setSubmissionResult(null);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setDescription('');
                    setConsent(false);
                  }}
                  variant="secondary"
                  size="sm"
                >
                  Submit Another Demo Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label" htmlFor="fullName">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && <div className="form-error"><AlertCircle size={13} /> {errors.fullName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="form-error"><AlertCircle size={13} /> {errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number <span className="form-label-hint">Optional</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input"
                      placeholder="(512) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">
                      Service Required
                    </label>
                    <select
                      id="service"
                      className="form-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="location">
                      Project Location
                    </label>
                    <select
                      id="location"
                      className="form-select"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {serviceAreas.map((a) => (
                        <option key={a.id} value={a.name}>
                          {a.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Contact Method</label>
                  <div style={{ display: 'flex', gap: '20px', marginTop: '4px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="method"
                        checked={preferredMethod === 'Email'}
                        onChange={() => setPreferredMethod('Email')}
                      />
                      Email
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="method"
                        checked={preferredMethod === 'Phone'}
                        onChange={() => setPreferredMethod('Phone')}
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="description">
                    Project Scope & Architectural Details *
                  </label>
                  <textarea
                    id="description"
                    className="form-textarea"
                    rows={4}
                    placeholder="Briefly describe your home's square footage, preferred timeline, and goals..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {errors.description && <div className="form-error"><AlertCircle size={13} /> {errors.description}</div>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-slate)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      style={{ marginTop: '3px' }}
                    />
                    <span>
                      I authorize {business.name} to contact me via email or phone regarding this project inquiry.
                    </span>
                  </label>
                  {errors.consent && <div className="form-error"><AlertCircle size={13} /> {errors.consent}</div>}
                </div>

                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  style={{ width: '100%', backgroundColor: branding.primaryColor, borderColor: branding.primaryColor }}
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Submit Consultation Request
                </Button>

                {/* Explicit PRD Disclosure */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    backgroundColor: 'var(--color-ivory)',
                    borderRadius: '8px',
                    marginTop: '16px',
                    border: '1px solid var(--color-stone)',
                    fontSize: '0.75rem',
                    color: 'var(--color-slate)'
                  }}
                >
                  <ShieldAlert size={14} color="#A9B8A5" style={{ flexShrink: 0 }} />
                  <span>
                    <strong>Demo Form:</strong> Your submission is stored only in this local browser session and is not transmitted to a real business.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
