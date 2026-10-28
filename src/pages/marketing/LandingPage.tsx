import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  LayoutDashboard,
  CheckCircle2,
  ShieldCheck,
  SearchCheck,
  Rocket,
  BarChart3,
  Layers,
  Sparkles,
  Smartphone,
  Monitor,
  ExternalLink,
  ChevronRight,
  FileText,
  Sliders,
  TrendingUp,
  Activity
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { MarketingNavbar } from '../../components/layout/MarketingNavbar';
import { MarketingFooter } from '../../components/layout/MarketingFooter';
import { Button } from '../../components/ui/Button';
import { ContractorWebsite } from '../../components/contractor-site/ContractorWebsite';
import { useClientStore } from '../../services/clientStore';
import { CLIENT_ANALYTICS } from '../../data/demoAnalytics';

export const LandingPage: React.FC = () => {
  const { clients, activeClient } = useClientStore();

  // Workflow interactive step state
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Live preview device switch state
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  // Reporting preview period state
  const [reportingPeriod, setReportingPeriod] = useState<'last-30-days' | 'q3-2026' | 'ytd-2026'>('last-30-days');

  const analyticsData = CLIENT_ANALYTICS['oakline-renovation'][reportingPeriod];

  const workflowSteps = [
    {
      num: '01',
      title: 'Collect Information',
      short: 'Structured Intake',
      description: 'Capture business credentials, core services, target municipalities, branding preferences, and SEO metadata through a standardized onboarding wizard.',
      actionLabel: 'Try Onboarding Wizard',
      actionPath: '/workspace/clients/new',
      miniPreview: {
        type: 'form',
        label: 'Step 1 of 7 — Client Business Profile',
        snippet: 'Inputting: Oakline Renovation Co. (Austin, TX)'
      }
    },
    {
      num: '02',
      title: 'Customize Template',
      short: 'Data-Driven Engine',
      description: 'One reusable architecture adapts instantly to any client. Changes in company name, services, and color tokens update the live preview without touch-ups to code.',
      actionLabel: 'Open Template Library',
      actionPath: '/workspace/templates',
      miniPreview: {
        type: 'code',
        label: 'ContractorSiteConfig Payload',
        snippet: '{ branding: { primary: "#253D32" }, services: 5 }'
      }
    },
    {
      num: '03',
      title: 'Validate SEO',
      short: 'Pre-Flight Audit',
      description: 'Deterministic checks verify title lengths, canonical HTTPS protocols, LocalBusiness JSON-LD markup, XML sitemap readiness, and NAP consistency.',
      actionLabel: 'Inspect Technical SEO',
      actionPath: '/workspace/seo',
      miniPreview: {
        type: 'audit',
        label: '18 Automated Pre-Flight Checks',
        snippet: 'Status: 16 Passed • 2 Attention Required'
      }
    },
    {
      num: '04',
      title: 'Review Website',
      short: 'Interactive QA',
      description: 'Navigate full multi-page deliverable inside desktop and mobile frames. Test project filter modals, local neighborhood directories, and interactive consultation forms.',
      actionLabel: 'View Contractor Website',
      actionPath: '/preview',
      miniPreview: {
        type: 'site',
        label: 'Rendered Oakline Renovation Co.',
        snippet: 'Pages: Home, Services, Work, About, Areas, Contact'
      }
    },
    {
      num: '05',
      title: 'Deploy',
      short: 'Netlify Simulator',
      description: 'Execute a 6-stage build sequence: validate config, check asset links, test Netlify honeypot forms, prepare robots/sitemaps, and produce release status.',
      actionLabel: 'Run Deployment Simulation',
      actionPath: '/workspace/deployments',
      miniPreview: {
        type: 'deploy',
        label: 'Release Stage 06: Production Ready',
        snippet: 'Build time: 38s • Netlify Forms Verified'
      }
    },
    {
      num: '06',
      title: 'Report Monthly',
      short: 'Client Value Delivery',
      description: 'Standardize recurring monthly reporting. Pull traffic metrics, form conversions, and search clicks into an executive PDF preview with client email simulation.',
      actionLabel: 'Open Monthly Reports',
      actionPath: '/workspace/reports',
      miniPreview: {
        type: 'report',
        label: 'October 2026 Performance Digest',
        snippet: 'Sessions: 1,284 (+18.4%) • Leads: 27 (+28.6%)'
      }
    }
  ];

  const currentWorkflow = workflowSteps[activeWorkflowStep];

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MarketingNavbar />

      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          padding: '70px 0 100px',
          overflow: 'hidden'
        }}
      >
        <div className="container-desktop">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Value Proposition */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 12px',
                  borderRadius: '999px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-stone)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-forest)',
                  marginBottom: '20px'
                }}
              >
                <Sparkles size={13} color="var(--color-forest)" />
                <span>The Operating System for Contractor Websites</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-ink)',
                  marginBottom: '20px',
                  fontWeight: 700
                }}
              >
                Launch better contractor websites.{' '}
                <span style={{ color: 'var(--color-forest)', display: 'block', fontWeight: 600 }}>
                  Without rebuilding the process every time.
                </span>
              </h1>

              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: 'var(--color-slate)',
                  marginBottom: '36px',
                  maxWidth: '560px'
                }}
              >
                A reusable website system for local service businesses, built around structured client
                onboarding, technical SEO, reliable deployments, and repeatable monthly reporting.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
                <Link to="/preview">
                  <Button size="lg" variant="primary" icon={<Eye size={18} />}>
                    Explore the live website
                  </Button>
                </Link>
                <Link to="/workspace">
                  <Button size="lg" variant="secondary" icon={<LayoutDashboard size={18} />}>
                    Open the workspace
                  </Button>
                </Link>
              </div>

              {/* Three Trust Indicators */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '16px',
                  paddingTop: '28px',
                  borderTop: '1px solid var(--color-stone)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--color-forest)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-ink)' }}>
                    Reusable website templates
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--color-forest)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-ink)' }}>
                    Built-in technical SEO checks
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--color-forest)" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-ink)' }}>
                    Repeatable reporting workflows
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Live Website Composition */}
            <div style={{ position: 'relative' }}>
              {/* Primary Architectural Website Card */}
              <div
                className="surface-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-hover)',
                  border: '1px solid var(--color-stone)'
                }}
              >
                {/* Browser-like Header */}
                <div
                  style={{
                    backgroundColor: 'var(--color-ivory)',
                    padding: '12px 18px',
                    borderBottom: '1px solid var(--color-stone)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E53E3E' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ECC94B' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#48BB78' }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)', marginLeft: '10px', fontFamily: 'var(--font-mono)' }}>
                      oaklinerenovation.demo
                    </span>
                  </div>

                  <Link
                    to="/preview"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--color-forest)'
                    }}
                  >
                    <span>Open full website</span>
                    <ExternalLink size={12} />
                  </Link>
                </div>

                {/* Rendered Live Preview Miniature */}
                <div
                  style={{
                    height: '380px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Oakline Renovation Co. Architectural Showcase"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Subtle architectural overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(27, 30, 28, 0.85) 0%, rgba(27, 30, 28, 0.2) 60%, rgba(27, 30, 28, 0.4) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '24px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                        Oakline Renovation Co.
                      </span>
                      <span style={{ fontSize: '0.6875rem', backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF', padding: '2px 8px', borderRadius: '4px' }}>
                        Austin, TX
                      </span>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.5rem',
                          color: '#FFFFFF',
                          marginBottom: '8px',
                          fontWeight: 400
                        }}
                      >
                        Thoughtful renovations. Built around the way you live.
                      </h3>
                      <p style={{ color: '#D2DED6', fontSize: '0.8125rem', margin: 0, maxWidth: '420px' }}>
                        Kitchen transformations, luxury bathrooms & custom cabinetry across Tarrytown & West Lake Hills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Layer 1: Slim Deployment Status Card */}
              <div
                className="surface-card"
                style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '-12px',
                  padding: '10px 16px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: 'var(--shadow-modal)',
                  border: '1px solid var(--color-stone)'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#48BB78' }} />
                <div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block' }}>
                    Netlify Deployment
                  </span>
                  <strong style={{ fontSize: '0.8125rem', color: 'var(--color-forest)' }}>
                    Production Ready • 18/18 Checks Passed
                  </strong>
                </div>
              </div>

              {/* Floating Layer 2: Small SEO Readiness Indicator */}
              <Link
                to="/workspace/seo"
                className="surface-card"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-16px',
                  padding: '12px 18px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-modal)',
                  border: '1px solid var(--color-stone)',
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-sage-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-forest)'
                  }}
                >
                  <SearchCheck size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block' }}>
                    Technical SEO Readiness
                  </span>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}>
                    Schema & Local NAP Verified
                  </strong>
                </div>
              </Link>

              {/* Floating Layer 3: Subtle Monthly Report Card */}
              <Link
                to="/workspace/reports"
                className="surface-card"
                style={{
                  position: 'absolute',
                  bottom: '-28px',
                  right: '-16px',
                  padding: '12px 18px',
                  backgroundColor: 'var(--color-forest)',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-modal)',
                  border: '1px solid var(--color-forest-dark)',
                  textDecoration: 'none'
                }}
              >
                <BarChart3 size={20} color="#A9B8A5" />
                <div>
                  <span style={{ fontSize: '0.6875rem', color: '#A9B8A5', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block' }}>
                    October Reporting
                  </span>
                  <strong style={{ fontSize: '0.875rem', color: '#FFFFFF' }}>
                    27 Client Leads Logged
                  </strong>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT BENEFITS SECTION */}
      <section id="platform" style={{ padding: '90px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-stone)' }}>
        <div className="container-desktop">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
                color: 'var(--color-forest)',
                display: 'block',
                marginBottom: '10px'
              }}
            >
              Systemized Growth
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--color-ink)',
                letterSpacing: '-0.02em',
                marginBottom: '14px'
              }}
            >
              From first intake to monthly reporting.
            </h2>
            <p style={{ color: 'var(--color-slate)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              A modular architecture built specifically for the operational demands of running a contractor website and local growth agency.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Block 1 */}
            <div
              className="surface-card"
              style={{ padding: '32px 28px', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-stone)' }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-forest)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '20px'
                }}
              >
                <Layers size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-ink)' }}>
                Reusable templates
              </h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                Customize business details, services, service areas and branding from one structured source of truth without duplicating codebase logic.
              </p>
            </div>

            {/* Block 2 */}
            <div
              className="surface-card"
              style={{ padding: '32px 28px', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-stone)' }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-forest)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '20px'
                }}
              >
                <SearchCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-ink)' }}>
                Technical SEO
              </h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                Inspect page metadata, heading hierarchy, canonical URLs, sitemap readiness, and valid LocalBusiness structured schema before go-live.
              </p>
            </div>

            {/* Block 3 */}
            <div
              className="surface-card"
              style={{ padding: '32px 28px', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-stone)' }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-forest)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '20px'
                }}
              >
                <Rocket size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-ink)' }}>
                Reliable launches
              </h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                Demonstrate a repeatable sequence of checks, Netlify honeypot validation, route verification, and post-launch verification.
              </p>
            </div>

            {/* Block 4 */}
            <div
              className="surface-card"
              style={{ padding: '32px 28px', backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-stone)' }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-forest)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '20px'
                }}
              >
                <BarChart3 size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-ink)' }}>
                Monthly reporting
              </h3>
              <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                Combine traffic, engagement, organic search clicks, and form-conversion reporting in one client-friendly executive PDF workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE WORKFLOW VISUALIZATION */}
      <section id="workflow" style={{ padding: '90px 0', backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-stone)' }}>
        <div className="container-desktop">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
            <span
              style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
                color: 'var(--color-forest)',
                display: 'block',
                marginBottom: '10px'
              }}
            >
              Repeatable Delivery Pipeline
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--color-ink)',
                letterSpacing: '-0.02em',
                marginBottom: '14px'
              }}
            >
              The 6-stage launch workflow
            </h2>
            <p style={{ color: 'var(--color-slate)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Select any stage below to inspect how ContractorOS automates that milestone.
            </p>
          </div>

          {/* Workflow Step Buttons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '12px',
              marginBottom: '32px'
            }}
          >
            {workflowSteps.map((step, idx) => {
              const isActive = activeWorkflowStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className="surface-card"
                  style={{
                    padding: '16px',
                    textAlign: 'left',
                    backgroundColor: isActive ? 'var(--color-forest)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--color-ink)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-forest)' : 'var(--color-stone)',
                    borderRadius: '12px',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      color: isActive ? '#A9B8A5' : 'var(--color-slate)',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    Step {step.num}
                  </span>
                  <strong style={{ fontSize: '0.9375rem', display: 'block' }}>{step.title}</strong>
                </button>
              );
            })}
          </div>

          {/* Active Step Interactive Detail Display */}
          <div
            className="surface-card"
            style={{
              padding: '36px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-ivory)',
                    color: 'var(--color-forest)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--color-stone)'
                  }}
                >
                  Stage {currentWorkflow.num} • {currentWorkflow.short}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-ink)', marginBottom: '14px' }}>
                {currentWorkflow.title}
              </h3>

              <p style={{ color: 'var(--color-slate)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                {currentWorkflow.description}
              </p>

              <Link to={currentWorkflow.actionPath}>
                <Button variant="primary" icon={<ArrowRight size={15} />} iconPosition="right">
                  {currentWorkflow.actionLabel}
                </Button>
              </Link>
            </div>

            {/* Mini Interface Preview Container */}
            <div
              style={{
                backgroundColor: '#1E2521',
                color: '#E8EFEA',
                borderRadius: '12px',
                padding: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                border: '1px solid #2B3630'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #2C3831', paddingBottom: '10px' }}>
                <span style={{ color: '#A9B8A5', fontWeight: 600 }}>{currentWorkflow.miniPreview.label}</span>
                <span style={{ fontSize: '0.6875rem', color: '#68D391', backgroundColor: '#25382E', padding: '2px 8px', borderRadius: '4px' }}>
                  ACTIVE SIMULATION
                </span>
              </div>
              <p style={{ color: '#D5DDD7', lineHeight: 1.6, margin: 0 }}>
                {currentWorkflow.miniPreview.snippet}
              </p>
              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid #2C3831', display: 'flex', justifyContent: 'space-between', color: '#88988D', fontSize: '0.75rem' }}>
                <span>Standardized Blueprint</span>
                <span>Zero Manual Regressions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIVE CONTRACTOR WEBSITE PREVIEW SECTION */}
      <section id="live-preview" style={{ padding: '90px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-stone)' }}>
        <div className="container-desktop">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '36px'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                Production Client Deliverable
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  color: 'var(--color-ink)',
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                A real website, not a template screenshot.
              </h2>
            </div>

            {/* Desktop / Mobile Switcher Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  backgroundColor: 'var(--color-ivory)',
                  padding: '4px',
                  borderRadius: '8px',
                  border: '1px solid var(--color-stone)'
                }}
              >
                <button
                  onClick={() => setPreviewDevice('desktop')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: previewDevice === 'desktop' ? 600 : 400,
                    backgroundColor: previewDevice === 'desktop' ? '#FFFFFF' : 'transparent',
                    color: previewDevice === 'desktop' ? 'var(--color-forest)' : 'var(--color-slate)',
                    boxShadow: previewDevice === 'desktop' ? 'var(--shadow-subtle)' : 'none'
                  }}
                >
                  <Monitor size={15} />
                  <span>Desktop</span>
                </button>

                <button
                  onClick={() => setPreviewDevice('mobile')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: previewDevice === 'mobile' ? 600 : 400,
                    backgroundColor: previewDevice === 'mobile' ? '#FFFFFF' : 'transparent',
                    color: previewDevice === 'mobile' ? 'var(--color-forest)' : 'var(--color-slate)',
                    boxShadow: previewDevice === 'mobile' ? 'var(--shadow-subtle)' : 'none'
                  }}
                >
                  <Smartphone size={15} />
                  <span>Mobile 390px</span>
                </button>
              </div>

              <Link to="/preview">
                <Button size="sm" variant="secondary" icon={<ExternalLink size={14} />}>
                  Open Full Screen
                </Button>
              </Link>
            </div>
          </div>

          {/* Browser / Phone Device Frame */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'var(--color-ivory)',
              padding: previewDevice === 'mobile' ? '40px 16px' : '0',
              borderRadius: '20px',
              border: '1px solid var(--color-stone)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: previewDevice === 'mobile' ? '390px' : '100%',
                maxHeight: '680px',
                overflowY: 'auto',
                backgroundColor: '#FFFFFF',
                borderRadius: previewDevice === 'mobile' ? '32px' : '0',
                border: previewDevice === 'mobile' ? '8px solid #202722' : 'none',
                boxShadow: previewDevice === 'mobile' ? 'var(--shadow-modal)' : 'none',
                transition: 'width 260ms ease'
              }}
            >
              <ContractorWebsite
                config={activeClient.config}
                clientId={activeClient.id}
                isCompactFrame={true}
              />
            </div>
          </div>

          {/* Actions bar below preview */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginTop: '24px',
              padding: '16px 20px',
              backgroundColor: 'var(--color-ivory)',
              borderRadius: '12px',
              border: '1px solid var(--color-stone)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
              <span style={{ color: 'var(--color-slate)' }}>Rendered template:</span>
              <strong style={{ color: 'var(--color-ink)' }}>Oakline Renovation Co. (Austin, TX)</strong>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to={`/workspace/clients/${activeClient.id}`}>
                <Button size="sm" variant="secondary" icon={<Sliders size={14} />}>
                  Customize this website
                </Button>
              </Link>
              <Link to="/workspace/seo">
                <Button size="sm" variant="primary" icon={<SearchCheck size={14} />}>
                  Inspect SEO setup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ANALYTICS AND REPORTING PREVIEW SECTION */}
      <section id="reporting" style={{ padding: '90px 0', backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-stone)' }}>
        <div className="container-desktop">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '36px'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  display: 'block',
                  marginBottom: '8px'
                }}
              >
                Recurring Retention & Growth
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  color: 'var(--color-ink)',
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                Standardized client monthly reports.
              </h2>
            </div>

            {/* Reporting Period Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>Sample Period:</span>
              <select
                value={reportingPeriod}
                onChange={(e) => setReportingPeriod(e.target.value as any)}
                className="form-select"
                style={{ width: 'auto', padding: '6px 12px', fontSize: '0.8125rem', cursor: 'pointer' }}
              >
                <option value="last-30-days">Last 30 Days (Oct 2026)</option>
                <option value="q3-2026">Q3 2026 (Jul – Sep)</option>
                <option value="ytd-2026">Year to Date 2026</option>
              </select>
            </div>
          </div>

          {/* Reporting Panel Container */}
          <div
            className="surface-card"
            style={{
              padding: '36px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--color-stone)',
              marginBottom: '28px'
            }}
          >
            {/* 4 Metric Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '36px'
              }}
            >
              <div style={{ padding: '18px', backgroundColor: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>
                  Total Sessions
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-ink)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
                    {analyticsData.sessions.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                    {analyticsData.sessionsDelta}
                  </span>
                </div>
              </div>

              <div style={{ padding: '18px', backgroundColor: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>
                  Engaged Sessions
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-ink)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
                    {analyticsData.engagedSessions.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                    {analyticsData.engagedSessionsDelta}
                  </span>
                </div>
              </div>

              <div style={{ padding: '18px', backgroundColor: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>
                  Organic Search Clicks
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-forest)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
                    {analyticsData.organicSearchClicks.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                    {analyticsData.organicClicksDelta}
                  </span>
                </div>
              </div>

              <div style={{ padding: '18px', backgroundColor: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>
                  Form Inquiries
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-forest)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
                    {analyticsData.contactSubmissions}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                    {analyticsData.contactSubmissionsDelta}
                  </span>
                </div>
              </div>
            </div>

            {/* Split: Area Chart & Top Pages Table */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '32px',
                alignItems: 'start'
              }}
            >
              {/* Traffic Trend Chart */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-ink)', margin: 0 }}>
                    Traffic Growth Velocity
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                    {analyticsData.periodLabel}
                  </span>
                </div>

                <div style={{ height: '220px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData.trafficTrends}>
                      <defs>
                        <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#253D32" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#253D32" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" stroke="#727870" fontSize={11} tickLine={false} />
                      <YAxis stroke="#727870" fontSize={11} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E2521',
                          borderColor: '#2B3630',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '0.75rem'
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="sessions"
                        stroke="#253D32"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#sessionsGrad)"
                        name="Total Sessions"
                      />
                      <Area
                        type="monotone"
                        dataKey="organic"
                        stroke="#A9B8A5"
                        strokeWidth={2}
                        fill="none"
                        name="Organic Search"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Top Landing Pages Table */}
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
                  High-Converting Landing Pages
                </h4>
                <div style={{ border: '1px solid var(--color-stone)', borderRadius: '10px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--color-ivory)', borderBottom: '1px solid var(--color-stone)' }}>
                        <th style={{ textAlign: 'left', padding: '10px 14px', color: 'var(--color-slate)' }}>Page Path</th>
                        <th style={{ textAlign: 'right', padding: '10px 14px', color: 'var(--color-slate)' }}>Views</th>
                        <th style={{ textAlign: 'right', padding: '10px 14px', color: 'var(--color-slate)' }}>Leads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsData.topPages.slice(0, 4).map((p, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid var(--color-stone)' }}>
                          <td style={{ padding: '10px 14px', color: 'var(--color-ink)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>
                            {p.path}
                          </td>
                          <td style={{ textAlign: 'right', padding: '10px 14px', color: 'var(--color-slate)' }} className="tabular-nums">
                            {p.views.toLocaleString()}
                          </td>
                          <td style={{ textAlign: 'right', padding: '10px 14px', color: 'var(--color-forest)', fontWeight: 600 }} className="tabular-nums">
                            {p.conversions}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/workspace/reports">
              <Button size="lg" variant="primary" icon={<BarChart3 size={16} />}>
                Explore full reporting workspace & PDF builder
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-stone)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              color: 'var(--color-ink)',
              letterSpacing: '-0.02em',
              marginBottom: '18px',
              fontWeight: 400
            }}
          >
            Your next website launch should follow a system.
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--color-slate)',
              marginBottom: '36px',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Start with one reliable template. Add a repeatable launch process. Grow into a portfolio of well-maintained local business websites.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <Link to="/workspace">
              <Button size="lg" variant="primary" icon={<LayoutDashboard size={18} />}>
                Explore the workspace
              </Button>
            </Link>
            <Link to="/preview">
              <Button size="lg" variant="secondary" icon={<Eye size={18} />}>
                See the contractor website
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
};
