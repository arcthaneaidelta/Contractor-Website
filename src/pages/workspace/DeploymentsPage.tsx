import React, { useState } from 'react';
import {
  Rocket,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Clock,
  ShieldCheck,
  Globe,
  Server,
  FileCode,
  Terminal,
  Play,
  RotateCcw,
  ExternalLink,
  HelpCircle,
  Info
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { useClientStore } from '../../services/clientStore';
import { INITIAL_DEPLOYMENTS } from '../../data/demoDeployments';
import { DeploymentRecord } from '../../types';

export const DeploymentsPage: React.FC = () => {
  const { activeClient, updateClientConfig } = useClientStore();

  const [environment, setEnvironment] = useState<'staging' | 'production'>('production');
  const [deployments, setDeployments] = useState<DeploymentRecord[]>(INITIAL_DEPLOYMENTS);

  // Controlled failure simulation toggle
  const [simulateFormError, setSimulateFormError] = useState(false);

  // Deployment Sequence State
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [simulationLog, setSimulationLog] = useState<string[]>([]);
  const [simulationStatus, setSimulationStatus] = useState<'idle' | 'running' | 'success' | 'failed'>('idle');

  const steps = [
    { num: '01', title: 'Validate Configuration', desc: 'Check required business fields, contact routing, and SEO tags' },
    { num: '02', title: 'Build Website', desc: 'Compile React components and hydrate data-driven templates' },
    { num: '03', title: 'Check Assets & Routes', desc: 'Verify 6 primary pages, 5 sub-routes, and image aspect ratios' },
    { num: '04', title: 'Validate Netlify Forms', desc: 'Inspect hidden form-name tags, honeypot fields, and spam trap' },
    { num: '05', title: 'Prepare SEO Assets', desc: 'Generate sitemap.xml, robots.txt, and LocalBusiness JSON-LD' },
    { num: '06', title: 'Deployment Ready', desc: 'Final CDN cache invalidation and release health signoff' }
  ];

  const handleSimulateDeployment = () => {
    setIsSimulating(true);
    setSimulationStatus('running');
    setCurrentStepIndex(0);
    setSimulationLog([`[16:42:01] Starting release pipeline for ${activeClient.name} (${environment})`]);

    const runStep = (idx: number) => {
      setCurrentStepIndex(idx);
      if (idx === 0) {
        setSimulationLog(prev => [...prev, `[16:42:02] Step 01: Validated business entity NAP & primary domain`]);
      } else if (idx === 1) {
        setSimulationLog(prev => [...prev, `[16:42:05] Step 02: Bundle generated in 420ms (zero TypeScript errors)`]);
      } else if (idx === 2) {
        setSimulationLog(prev => [...prev, `[16:42:08] Step 03: Verified 11 dynamic HTML routes and WebP imagery`]);
      } else if (idx === 3) {
        if (simulateFormError) {
          setSimulationLog(prev => [
            ...prev,
            `[16:42:11] Step 04 ERROR: Netlify Form detection failed! Missing data-netlify="true" or hidden bot-field attribute on consultation form.`,
            `[16:42:12] Pipeline halted to prevent broken lead submissions in production.`
          ]);
          setSimulationStatus('failed');
          setIsSimulating(false);
          return;
        } else {
          setSimulationLog(prev => [...prev, `[16:42:11] Step 04: Netlify hidden honeypot "bot-field" & lead destination verified`]);
        }
      } else if (idx === 4) {
        setSimulationLog(prev => [...prev, `[16:42:14] Step 05: Injected Schema.org HomeAndConstructionBusiness and sitemap.xml`]);
      } else if (idx === 5) {
        setSimulationLog(prev => [
          ...prev,
          `[16:42:16] Step 06: RELEASE DEPLOYED SUCCESSFULLY. CDN propagation active.`
        ]);
        setSimulationStatus('success');
        setIsSimulating(false);

        // Add record to history
        const newRecord: DeploymentRecord = {
          id: `dep-${Math.floor(9825 + Math.random() * 50)}`,
          environment,
          timestamp: 'Just now',
          branch: 'main',
          commitMessage: `deploy: Release ${activeClient.name} v1.4 to ${environment}`,
          status: 'success',
          duration: '34s',
          checksPassed: 18,
          totalChecks: 18
        };
        setDeployments(prev => [newRecord, ...prev]);
        return;
      }

      setTimeout(() => {
        runStep(idx + 1);
      }, 700);
    };

    setTimeout(() => {
      runStep(0);
    }, 400);
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
              Deployment & Quality-Check Simulator
            </h1>
            <span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF', fontWeight: 600 }}>
              Zero-Downtime Pipeline
            </span>
          </div>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', margin: 0 }}>
            Automated verification sequence: config validation, asset links, Netlify honeypot forms, and release readiness.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Environment Selector */}
          <div style={{ display: 'flex', backgroundColor: 'var(--color-ivory)', padding: '3px', borderRadius: '6px', border: '1px solid var(--color-stone)' }}>
            <button
              onClick={() => setEnvironment('staging')}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.8125rem',
                fontWeight: environment === 'staging' ? 600 : 400,
                backgroundColor: environment === 'staging' ? '#FFFFFF' : 'transparent',
                color: environment === 'staging' ? 'var(--color-forest)' : 'var(--color-slate)'
              }}
            >
              Staging Simulation
            </button>
            <button
              onClick={() => setEnvironment('production')}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.8125rem',
                fontWeight: environment === 'production' ? 600 : 400,
                backgroundColor: environment === 'production' ? '#FFFFFF' : 'transparent',
                color: environment === 'production' ? 'var(--color-forest)' : 'var(--color-slate)'
              }}
            >
              Production Simulation
            </button>
          </div>

          <Button
            variant="primary"
            onClick={handleSimulateDeployment}
            disabled={isSimulating}
            isLoading={isSimulating}
            icon={<Play size={14} />}
          >
            Simulate Deployment
          </Button>
        </div>
      </div>

      {/* Controlled Failure Simulator Banner */}
      <div
        className="surface-card"
        style={{
          padding: '16px 20px',
          backgroundColor: simulateFormError ? '#FFF5F5' : '#FFFFFF',
          border: '1px solid',
          borderColor: simulateFormError ? '#FEB2B2' : 'var(--color-stone)',
          borderRadius: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: simulateFormError ? 'var(--color-error-bg)' : 'var(--color-ivory)',
              color: simulateFormError ? 'var(--color-error)' : 'var(--color-forest)'
            }}
          >
            <AlertCircle size={20} />
          </div>
          <div>
            <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>
              Troubleshooting Lab: Simulate Controlled Netlify Form Error
            </strong>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', margin: '2px 0 0' }}>
              Toggle this switch to simulate how the pre-flight checks intercept missing honeypot attributes before production release.
            </p>
          </div>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}>
          <input
            type="checkbox"
            checked={simulateFormError}
            onChange={(e) => setSimulateFormError(e.target.checked)}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <span style={{ color: simulateFormError ? 'var(--color-error)' : 'var(--color-ink)' }}>
            {simulateFormError ? 'Form Error Active (Will Fail Step 04)' : 'Form Config Valid (Passes All Checks)'}
          </span>
        </label>
      </div>

      {/* 6-Step Sequential Deployment Sequence */}
      <div
        className="surface-card"
        style={{
          padding: '28px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.1875rem', color: 'var(--color-ink)', margin: 0 }}>
              Deployment Verification Sequence
            </h3>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
              Target: {activeClient.name} • Branch: main
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {simulationStatus === 'running' && (
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-forest)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} className="animate-spin" /> Simulating release pipeline…
              </span>
            )}
            {simulationStatus === 'success' && (
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} /> Production Ready (All 18 Checks Passed)
              </span>
            )}
            {simulationStatus === 'failed' && (
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-error)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <XCircle size={16} /> Release Blocked (Netlify Form Failure Detected)
              </span>
            )}
          </div>
        </div>

        {/* 6 Step Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '28px'
          }}
        >
          {steps.map((st, idx) => {
            const isCompleted = currentStepIndex > idx || simulationStatus === 'success';
            const isCurrent = currentStepIndex === idx && simulationStatus === 'running';
            const isError = currentStepIndex === idx && simulationStatus === 'failed';

            return (
              <div
                key={st.num}
                style={{
                  padding: '18px',
                  borderRadius: '10px',
                  backgroundColor: isError ? '#FFF5F5' : isCompleted ? '#F7FAF8' : isCurrent ? 'var(--color-ivory)' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isError ? 'var(--color-error)' : isCompleted ? 'var(--color-success-border)' : isCurrent ? 'var(--color-forest)' : 'var(--color-stone)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: isError ? 'var(--color-error)' : isCompleted ? 'var(--color-success)' : 'var(--color-slate)'
                    }}
                  >
                    Step {st.num}
                  </span>
                  {isCompleted && <CheckCircle2 size={16} color="var(--color-success)" />}
                  {isCurrent && <Clock size={16} color="var(--color-forest)" />}
                  {isError && <XCircle size={16} color="var(--color-error)" />}
                </div>

                <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', marginBottom: '4px' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: 0, lineHeight: 1.5 }}>
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Build Terminal Output Log */}
        {simulationLog.length > 0 && (
          <div
            style={{
              backgroundColor: '#1B211E',
              color: '#A9B8A5',
              borderRadius: '10px',
              padding: '16px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: 1.6,
              border: '1px solid #2B3530',
              maxHeight: '160px',
              overflowY: 'auto'
            }}
          >
            {simulationLog.map((line, lIdx) => (
              <div
                key={lIdx}
                style={{
                  color: line.includes('ERROR') ? '#FC8181' : line.includes('SUCCESS') ? '#68D391' : '#CBD5E0'
                }}
              >
                {line}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Netlify Forms Diagnostics & Domain Handover Blueprint */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}
      >
        {/* Netlify Forms Diagnostic Card */}
        <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
          <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '14px' }}>
            Netlify Forms Diagnostic Specification
          </h3>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '16px' }}>
            Production contractor leads require clean build-time form scraping and spam protection:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8125rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={15} color="var(--color-success)" />
              <span><strong>Form Attribute:</strong> name="{activeClient.config.netlifyForm.formName}"</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={15} color="var(--color-success)" />
              <span><strong>Spam Trap:</strong> Hidden honeypot "bot-field" configured</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={15} color="var(--color-success)" />
              <span><strong>Build Detection:</strong> Static HTML form mirror included in template</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={15} color="var(--color-success)" />
              <span><strong>Email Webhook:</strong> Routed to {activeClient.config.business.email}</span>
            </div>
          </div>
        </div>

        {/* Domain Ownership & Handover Guidance */}
        <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
          <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '14px' }}>
            Client Domain Ownership & Safe Handover
          </h3>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '16px' }}>
            Standard operating protocol to avoid hostage domain scenarios or DNS conflicts:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8125rem', color: 'var(--color-ink)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <ShieldCheck size={16} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Client retains 100% control of their domain registrar (GoDaddy, Namecheap, Cloudflare).</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <ShieldCheck size={16} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Agency requests delegated DNS records (CNAME and A record pointing to Netlify edge).</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <ShieldCheck size={16} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Auto-renewing Let's Encrypt TLS certificates provisioned automatically.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment History Table */}
      <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
        <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
          Simulated Deployment History
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.8125rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-ivory)', borderBottom: '1px solid var(--color-stone)' }}>
                <th style={{ padding: '10px 14px', color: 'var(--color-slate)' }}>Deployment ID</th>
                <th style={{ padding: '10px 14px', color: 'var(--color-slate)' }}>Environment</th>
                <th style={{ padding: '10px 14px', color: 'var(--color-slate)' }}>Commit / Trigger</th>
                <th style={{ padding: '10px 14px', color: 'var(--color-slate)' }}>Checks</th>
                <th style={{ padding: '10px 14px', color: 'var(--color-slate)' }}>Duration</th>
                <th style={{ padding: '10px 14px', color: 'var(--color-slate)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {deployments.map((dep) => (
                <tr key={dep.id} style={{ borderBottom: '1px solid var(--color-stone-light)' }}>
                  <td style={{ padding: '12px 14px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-forest)' }}>
                    {dep.id}
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ textTransform: 'capitalize', fontWeight: 500 }}>{dep.environment}</span>
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--color-ink)' }}>
                    {dep.commitMessage}
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--color-slate)' }}>
                    {dep.checksPassed}/{dep.totalChecks} Passed
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--color-slate)' }}>
                    {dep.duration}
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <StatusBadge status={dep.status} size="sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
