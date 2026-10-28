import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Building2,
  Briefcase,
  MapPin,
  Palette,
  SearchCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Plus,
  Trash2,
  Sparkles,
  Eye,
  Rocket,
  ShieldCheck,
  Save
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useClientStore } from '../../services/clientStore';
import { Client, ServiceItem, ServiceAreaItem } from '../../types';

const STORAGE_DRAFT_KEY = 'contractor_os_wizard_draft_v1';

export const NewClientWizardPage: React.FC = () => {
  const navigate = useNavigate();
  const { addClient } = useClientStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [createdClient, setCreatedClient] = useState<Client | null>(null);

  // Form State
  const [businessName, setBusinessName] = useState('Ironwood Design & Build');
  const [category, setCategory] = useState('Residential Remodeling');
  const [description, setDescription] = useState('High-craft architectural renovations, custom kitchens, and bespoke millwork.');
  const [contactName, setContactName] = useState('David Miller');
  const [email, setEmail] = useState('david@ironwoodbuild.demo');
  const [phone, setPhone] = useState('(512) 790-4100');
  const [address, setAddress] = useState('1104 S Lamar Blvd, Suite 200');
  const [city, setCity] = useState('Austin');
  const [state, setState] = useState('TX');
  const [postalCode, setPostalCode] = useState('78704');

  // Services
  const [services, setServices] = useState<ServiceItem[]>([
    {
      id: 'srv-1',
      name: 'Custom Kitchen Remodeling',
      slug: 'custom-kitchens',
      description: 'Open concept kitchen redesigns, custom white oak cabinetry, and quartz island work.',
      fullDescription: 'Complete kitchen transformations with custom cabinetry, Wolf/Sub-Zero appliances, and natural stone countertops.',
      primary: true,
      iconName: 'UtensilsCrossed',
      features: ['Concealed pantry systems', 'Under-cabinet lighting', 'Custom hood fabrication'],
      startingPrice: '$48,000'
    },
    {
      id: 'srv-2',
      name: 'Curbless Bathroom Suites',
      slug: 'curbless-bathrooms',
      description: 'Zero-threshold walk-in showers, floating vanities, and radiant heat tile floors.',
      fullDescription: 'Restorative en-suite master baths featuring curbless Schluter waterproofing and natural limestone.',
      primary: false,
      iconName: 'Droplet',
      features: ['Linear drains', 'Thermostatic shower valves', 'Heated tile systems'],
      startingPrice: '$32,000'
    },
    {
      id: 'srv-3',
      name: 'Architectural Millwork',
      slug: 'architectural-millwork',
      description: 'Built-in library walls, custom mudrooms, and solid timber ceilings.',
      fullDescription: 'Custom joinery and architectural casework crafted from local hardwood selections.',
      primary: false,
      iconName: 'Hammer',
      features: ['Soft-close Blum hardware', 'Hand-rubbed oil finishes', 'Integrated low-voltage LEDs'],
      startingPrice: '$15,000'
    }
  ]);
  const [newServiceName, setNewServiceName] = useState('');

  // Service Areas
  const [serviceAreas, setServiceAreas] = useState<ServiceAreaItem[]>([
    {
      id: 'area-1',
      name: 'Downtown & South Lamar',
      slug: 'south-lamar-austin',
      county: 'Travis County',
      description: 'Urban luxury renovations, loft updates, and mid-century modern restorations.',
      featuredProjectsCount: 10,
      highlights: ['Historic permitting coordination', 'Custom space optimization']
    },
    {
      id: 'area-2',
      name: 'Westlake & Barton Creek',
      slug: 'westlake-barton-creek',
      county: 'Travis County',
      description: 'Hill country estate renovations, primary bathroom additions, and chef’s kitchens.',
      featuredProjectsCount: 14,
      highlights: ['Expansive glass wall integration', 'Full outdoor kitchen builds']
    }
  ]);
  const [newAreaName, setNewAreaName] = useState('');

  // Branding
  const [primaryColor, setPrimaryColor] = useState('#203E33');
  const [secondaryColor, setSecondaryColor] = useState('#A0B4A2');
  const [fontPreference, setFontPreference] = useState('DM Sans + Serif');
  const [heroHeading, setHeroHeading] = useState('Enduring renovations. Tailored for living.');
  const [heroSubheading, setHeroSubheading] = useState('We design and craft architectural kitchens, custom bathrooms, and interior spaces across Austin.');
  const [ctaLabel, setCtaLabel] = useState('Schedule Consultation');
  const [heroImageUrl, setHeroImageUrl] = useState('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80');

  // SEO
  const [preferredDomain, setPreferredDomain] = useState('https://ironwoodbuild.demo');
  const [seoTitle, setSeoTitle] = useState('Kitchen Remodeling & Architecture Austin TX | Ironwood');
  const [seoDescription, setSeoDescription] = useState('Ironwood Design & Build provides architectural kitchen remodeling, curbless bathrooms, and custom millwork across Austin and Westlake.');
  const [primaryKeyword, setPrimaryKeyword] = useState('kitchen remodeling austin tx');
  const [ga4Id, setGa4Id] = useState('G-IRONWOOD26');
  const [gscId, setGscId] = useState('sc-domain:ironwoodbuild.demo');

  const [validationError, setValidationError] = useState('');

  // Auto-save & restore drafts
  useEffect(() => {
    try {
      const draft = localStorage.getItem(STORAGE_DRAFT_KEY);
      if (draft) {
        const p = JSON.parse(draft);
        if (p.businessName) setBusinessName(p.businessName);
        if (p.email) setEmail(p.email);
        if (p.phone) setPhone(p.phone);
      }
    } catch (e) {
      // fallback
    }
  }, []);

  const saveDraft = () => {
    const draftPayload = {
      businessName,
      category,
      description,
      contactName,
      email,
      phone,
      address,
      city,
      state,
      postalCode
    };
    localStorage.setItem(STORAGE_DRAFT_KEY, JSON.stringify(draftPayload));
  };

  const handleNext = () => {
    setValidationError('');
    if (currentStep === 1) {
      if (!businessName.trim() || !email.trim() || !phone.trim() || !city.trim()) {
        setValidationError('Please complete all required business information fields.');
        return;
      }
    }
    if (currentStep === 2) {
      if (services.length === 0) {
        setValidationError('Please configure at least one service offering.');
        return;
      }
    }
    if (currentStep === 3) {
      if (serviceAreas.length === 0) {
        setValidationError('Please configure at least one local service area.');
        return;
      }
    }

    saveDraft();
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setValidationError('');
    setCurrentStep(prev => prev - 1);
  };

  // Add custom service
  const handleAddService = () => {
    if (!newServiceName.trim()) return;
    const slug = newServiceName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newSrv: ServiceItem = {
      id: `srv-${Date.now()}`,
      name: newServiceName.trim(),
      slug,
      description: 'Custom tailored residential craftsmanship and finish carpentry.',
      fullDescription: 'Comprehensive architectural execution utilizing certified trades and guaranteed milestone scheduling.',
      primary: false,
      iconName: 'Hammer',
      features: ['Dedicated project manager', '3-year craftsmanship warranty', 'Fixed price quote'],
      startingPrice: '$18,000'
    };
    setServices([...services, newSrv]);
    setNewServiceName('');
  };

  // Remove service
  const handleRemoveService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  // Set primary service
  const handleSetPrimaryService = (id: string) => {
    setServices(services.map(s => ({ ...s, primary: s.id === id })));
  };

  // Add custom area
  const handleAddArea = () => {
    if (!newAreaName.trim()) return;
    const slug = newAreaName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newArea: ServiceAreaItem = {
      id: `area-${Date.now()}`,
      name: newAreaName.trim(),
      slug,
      county: `${city} Metro`,
      description: `Bespoke home renovations and custom architectural builds across ${newAreaName}.`,
      featuredProjectsCount: 6,
      highlights: ['Local code compliance', 'Architectural review board adherence']
    };
    setServiceAreas([...serviceAreas, newArea]);
    setNewAreaName('');
  };

  // Preset Palettes
  const applyPalette = (primary: string, secondary: string) => {
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
  };

  // Step 6: Generate Website & finalize client
  const handleFinalizeGeneration = () => {
    const slug = businessName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const clientId = `client-${slug}-${Math.floor(100 + Math.random() * 900)}`;

    const newClientObj: Client = {
      id: clientId,
      name: businessName,
      slug,
      category,
      status: 'active',
      contactName,
      email,
      phone,
      city,
      state,
      createdAt: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      nextReportDate: '2026-11-25',
      conversionsCount: 0,
      config: {
        business: {
          name: businessName,
          tagline: description.slice(0, 70),
          description,
          contactName,
          email,
          phone,
          city,
          region: state,
          fullAddress: `${address}, ${city}, ${state} ${postalCode}`,
          postalCode,
          hours: 'Mon – Fri: 8:00 AM – 5:30 PM'
        },
        branding: {
          primaryColor,
          secondaryColor,
          fontPreference,
          logoText: businessName,
          heroImageUrl,
          heroHeading,
          heroSubheading,
          ctaLabel
        },
        services,
        serviceAreas,
        projects: [
          {
            id: 'proj-new-1',
            title: `${city} Architectural Renovation`,
            category: 'Kitchens',
            location: `${city}, ${state}`,
            image: heroImageUrl,
            timeline: '8 Weeks',
            budgetRange: '$75,000 – $90,000',
            description: `Full bespoke kitchen transformation with custom cabinetry, stone slab surfaces, and open spatial architecture in ${city}.`,
            scopeHighlights: ['Load-bearing beam removal', 'White oak cabinetry', 'Sub-Zero refrigeration']
          }
        ],
        seo: {
          homepageTitle: seoTitle,
          homepageDescription: seoDescription,
          canonicalUrl: preferredDomain,
          primaryKeyword,
          targetLocations: serviceAreas.map(a => `${a.name}, ${state}`),
          searchConsolePropertyId: gscId,
          ga4MeasurementId: ga4Id
        },
        netlifyForm: {
          formName: `${slug}-contact-form`,
          honeypotField: 'bot-field',
          notificationEmail: email,
          hasSimulatedError: false
        }
      }
    };

    addClient(newClientObj);
    localStorage.removeItem(STORAGE_DRAFT_KEY);
    setCreatedClient(newClientObj);
    setCurrentStep(7);
  };

  const stepsList = [
    { num: 1, title: 'Business Profile' },
    { num: 2, title: 'Services' },
    { num: 3, title: 'Service Areas' },
    { num: 4, title: 'Branding' },
    { num: 5, title: 'SEO Setup' },
    { num: 6, title: 'Review & Verify' },
    { num: 7, title: 'Generated' }
  ];

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Link
            to="/workspace/clients"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8125rem',
              color: 'var(--color-slate)',
              marginBottom: '6px'
            }}
          >
            <ArrowLeft size={14} /> Back to Directory
          </Link>
          <h1 style={{ fontSize: '1.875rem', color: 'var(--color-ink)', margin: 0 }}>
            Client Onboarding Wizard
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', margin: '4px 0 0' }}>
            Transform client intake into a fully configured, data-driven contractor website.
          </p>
        </div>

        {currentStep < 7 && (
          <Button variant="secondary" size="sm" icon={<Save size={13} />} onClick={saveDraft}>
            Save Draft
          </Button>
        )}
      </div>

      {/* Progress Stepper Bar */}
      <div
        className="surface-card"
        style={{
          padding: '16px 20px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflowX: 'auto',
          gap: '12px'
        }}
      >
        {stepsList.map((step) => {
          const isDone = currentStep > step.num;
          const isCurrent = currentStep === step.num;
          return (
            <div
              key={step.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: isCurrent || isDone ? 1 : 0.45,
                whiteSpace: 'nowrap'
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: isDone ? 'var(--color-forest)' : isCurrent ? 'var(--color-forest)' : 'var(--color-stone)',
                  color: isDone || isCurrent ? '#FFFFFF' : 'var(--color-slate)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}
              >
                {isDone ? <CheckCircle2 size={15} /> : step.num}
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? 'var(--color-ink)' : 'var(--color-slate)' }}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {validationError && (
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: 'var(--color-error-bg)',
            color: 'var(--color-error)',
            borderRadius: '8px',
            fontSize: '0.875rem',
            border: '1px solid var(--color-error-border)'
          }}
        >
          {validationError}
        </div>
      )}

      {/* STEP 1: BUSINESS PROFILE */}
      {currentStep === 1 && (
        <div className="surface-card" style={{ padding: '36px', backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
            Step 1 — Business Information & Credentials
          </h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Essential contact information, legal trade entity, and service headquarters.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Business Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Ironwood Design & Build"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Trade Category</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Residential Remodeling">Residential Remodeling</option>
                <option value="General Contractor">General Contractor</option>
                <option value="Bespoke Carpentry & Millwork">Bespoke Carpentry & Millwork</option>
                <option value="Roofing & Exterior Systems">Roofing & Exterior Systems</option>
                <option value="Kitchen & Bath Specialist">Kitchen & Bath Specialist</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Primary Principal Contact</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. David Miller"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Business Email *</label>
              <input
                type="email"
                className="form-input"
                placeholder="david@ironwoodbuild.demo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Business Phone *</label>
              <input
                type="tel"
                className="form-input"
                placeholder="(512) 790-4100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Short Business Mission / Description</label>
              <textarea
                className="form-textarea"
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Street Address</label>
              <input
                type="text"
                className="form-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <div className="form-group">
                <label className="form-label">City *</label>
                <input
                  type="text"
                  className="form-input"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-input"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Postal Code</label>
                <input
                  type="text"
                  className="form-input"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: SERVICES */}
      {currentStep === 2 && (
        <div className="surface-card" style={{ padding: '36px', backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
            Step 2 — Services Portfolio
          </h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Configure client service offerings. Designate the primary signature service for hero placement.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            {services.map((srv) => (
              <div
                key={srv.id}
                style={{
                  padding: '16px 20px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-ivory)',
                  border: '1px solid var(--color-stone)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '1rem', color: 'var(--color-ink)' }}>{srv.name}</strong>
                    {srv.primary ? (
                      <span style={{ fontSize: '0.6875rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF', fontWeight: 600 }}>
                        PRIMARY SERVICE
                      </span>
                    ) : (
                      <button
                        onClick={() => handleSetPrimaryService(srv.id)}
                        style={{ fontSize: '0.75rem', color: 'var(--color-forest)', textDecoration: 'underline' }}
                      >
                        Set as Primary
                      </button>
                    )}
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: 0 }}>
                    {srv.description}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveService(srv.id)}
                  title="Remove Service"
                  style={{ color: 'var(--color-error)', padding: '6px' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Add custom service input */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Add another specialized service (e.g. Timber Framing, Historic Masonry)..."
              value={newServiceName}
              onChange={(e) => setNewServiceName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddService();
                }
              }}
            />
            <Button variant="secondary" onClick={handleAddService} icon={<Plus size={15} />}>
              Add
            </Button>
          </div>
        </div>
      )}

      {/* STEP 3: SERVICE AREAS */}
      {currentStep === 3 && (
        <div className="surface-card" style={{ padding: '36px', backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
            Step 3 — Target Service Areas
          </h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Target municipalities and affluent neighborhoods for dedicated local SEO landing pages.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            {serviceAreas.map((area) => (
              <div
                key={area.id}
                style={{
                  padding: '16px 20px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-ivory)',
                  border: '1px solid var(--color-stone)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <strong style={{ fontSize: '1rem', color: 'var(--color-ink)', display: 'block', marginBottom: '4px' }}>
                    {area.name}
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                    {area.description}
                  </span>
                </div>

                <button
                  onClick={() => setServiceAreas(serviceAreas.filter(a => a.id !== area.id))}
                  title="Remove Service Area"
                  style={{ color: 'var(--color-error)', padding: '6px' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Add local neighborhood or suburb (e.g. Rollingwood, Tarrytown)..."
              value={newAreaName}
              onChange={(e) => setNewAreaName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddArea();
                }
              }}
            />
            <Button variant="secondary" onClick={handleAddArea} icon={<Plus size={15} />}>
              Add Area
            </Button>
          </div>
        </div>
      )}

      {/* STEP 4: BRANDING */}
      {currentStep === 4 && (
        <div className="surface-card" style={{ padding: '36px', backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
            Step 4 — Visual Branding & Style Palette
          </h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Curated architectural colors and editorial typography tokens.
          </p>

          {/* Palette Presets */}
          <div style={{ marginBottom: '24px' }}>
            <label className="form-label" style={{ marginBottom: '10px' }}>
              Architectural Preset Palettes
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              <div
                onClick={() => applyPalette('#253D32', '#A9B8A5')}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid var(--color-stone)',
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#253D32' }} />
                <div>
                  <strong style={{ fontSize: '0.8125rem', color: 'var(--color-ink)', display: 'block' }}>Heritage Forest</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)' }}>#253D32 / #A9B8A5</span>
                </div>
              </div>

              <div
                onClick={() => applyPalette('#2B3A42', '#8C9B90')}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid var(--color-stone)',
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#2B3A42' }} />
                <div>
                  <strong style={{ fontSize: '0.8125rem', color: 'var(--color-ink)', display: 'block' }}>Modern Slate</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)' }}>#2B3A42 / #8C9B90</span>
                </div>
              </div>

              <div
                onClick={() => applyPalette('#36392D', '#B5A895')}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid var(--color-stone)',
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#36392D' }} />
                <div>
                  <strong style={{ fontSize: '0.8125rem', color: 'var(--color-ink)', display: 'block' }}>Nordic Timber</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)' }}>#36392D / #B5A895</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label">Primary Color</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  style={{ width: '38px', height: '38px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                />
                <input
                  type="text"
                  className="form-input"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CTA Button Label</label>
              <input
                type="text"
                className="form-input"
                value={ctaLabel}
                onChange={(e) => setCtaLabel(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Hero Headline (H1)</label>
              <input
                type="text"
                className="form-input"
                value={heroHeading}
                onChange={(e) => setHeroHeading(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Hero Subheading</label>
              <textarea
                className="form-textarea"
                rows={2}
                value={heroSubheading}
                onChange={(e) => setHeroSubheading(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 5: SEO CONFIGURATION */}
      {currentStep === 5 && (
        <div className="surface-card" style={{ padding: '36px', backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
            Step 5 — Technical SEO Configuration
          </h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Domain canonicalization, meta title & description lengths, and tracking tags.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Canonical Production Domain *</label>
              <input
                type="url"
                className="form-input"
                value={preferredDomain}
                onChange={(e) => setPreferredDomain(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Homepage SEO Title *
                <span className="form-label-hint">{seoTitle.length}/60 chars</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Homepage Meta Description *
                <span className="form-label-hint">{seoDescription.length}/160 chars</span>
              </label>
              <textarea
                className="form-textarea"
                rows={3}
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">GA4 Measurement ID</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="G-XXXXXXXXXX"
                  value={ga4Id}
                  onChange={(e) => setGa4Id(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Google Search Console Property</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="sc-domain:example.com"
                  value={gscId}
                  onChange={(e) => setGscId(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: REVIEW SUMMARY */}
      {currentStep === 6 && (
        <div className="surface-card" style={{ padding: '36px', backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
            Step 6 — Review Collected Configuration
          </h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', marginBottom: '24px' }}>
            Verify client profile before generating the interactive template instance.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              backgroundColor: 'var(--color-ivory)',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--color-stone)',
              marginBottom: '28px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>
                Business Profile
              </span>
              <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', margin: '4px 0 2px' }}>{businessName}</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: 0 }}>
                {category} • {city}, {state}
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: '4px 0 0' }}>
                {email} • {phone}
              </p>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>
                Services Configured
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-ink)', fontWeight: 600, margin: '4px 0 4px' }}>
                {services.length} Total Services ({services.find(s => s.primary)?.name || 'None'} Primary)
              </p>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600, display: 'block', marginTop: '12px' }}>
                Service Areas
              </span>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: '2px 0 0' }}>
                {serviceAreas.map(a => a.name).join(', ')}
              </p>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>
                Branding & Palettes
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '6px 0' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: primaryColor }} />
                <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>{primaryColor}</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-ink)', margin: '4px 0 0' }}>
                CTA: "{ctaLabel}"
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <Button variant="secondary" onClick={handleBack}>
              Back to Edit
            </Button>
            <Button variant="primary" icon={<Sparkles size={16} />} onClick={handleFinalizeGeneration}>
              Generate Website Preview
            </Button>
          </div>
        </div>
      )}

      {/* STEP 7: WEBSITE GENERATED CONFIRMATION */}
      {currentStep === 7 && createdClient && (
        <div
          className="surface-card"
          style={{
            padding: '44px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            textAlign: 'center',
            animation: 'fadeIn 240ms ease-out'
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-success-bg)',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
            Website Architecture Generated
          </h2>
          <p style={{ color: 'var(--color-slate)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 28px' }}>
            <strong>{createdClient.name}</strong> has been successfully instantiated into ContractorOS with 6 dynamic pages, localized SEO routes, and Netlify honeypot form bindings.
          </p>

          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              padding: '16px 24px',
              backgroundColor: 'var(--color-ivory)',
              borderRadius: '10px',
              border: '1px solid var(--color-stone)',
              marginBottom: '36px'
            }}
          >
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>Client ID: <strong style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-mono)' }}>{createdClient.id}</strong></span>
            <span style={{ color: 'var(--color-stone)' }}>•</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>SEO Readiness: <strong style={{ color: 'var(--color-forest)' }}>98% Passed</strong></span>
            <span style={{ color: 'var(--color-stone)' }}>•</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>Generated Pages: <strong style={{ color: 'var(--color-ink)' }}>6 Core + 5 Sub-routes</strong></span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <Link to={`/preview?client=${createdClient.id}`}>
              <Button size="lg" variant="primary" icon={<Eye size={18} />}>
                Preview Website
              </Button>
            </Link>
            <Link to="/workspace/seo">
              <Button size="lg" variant="secondary" icon={<SearchCheck size={18} />}>
                Run Quality Checks
              </Button>
            </Link>
            <Link to="/workspace/deployments">
              <Button size="lg" variant="secondary" icon={<Rocket size={18} />}>
                Simulate Deployment
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Navigation Buttons for Steps 1–5 */}
      {currentStep <= 5 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {currentStep > 1 ? (
            <Button variant="secondary" onClick={handleBack} icon={<ArrowLeft size={14} />}>
              Previous Step
            </Button>
          ) : (
            <div />
          )}

          <Button variant="primary" onClick={handleNext} icon={<ArrowRight size={14} />} iconPosition="right">
            Proceed to Step {currentStep + 1}
          </Button>
        </div>
      )}
    </div>
  );
};
