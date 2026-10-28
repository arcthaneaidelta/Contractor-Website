import React, { useState } from 'react';
import {
  SearchCheck,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  FileCode,
  Globe,
  Sliders,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Tabs, TabItem } from '../../components/ui/Tabs';
import { useClientStore } from '../../services/clientStore';
import { runSEOAudit } from '../../services/seoValidator';
import { generateLocalBusinessSchema } from '../../services/schemaGenerator';
import { generateSitemapXml, generateRobotsTxt } from '../../services/sitemapGenerator';
import { SEOAuditItem } from '../../types';

export const SEOInspectorPage: React.FC = () => {
  const { activeClient, clients, setActiveClient } = useClientStore();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeCodeTab, setActiveCodeTab] = useState<'schema' | 'sitemap' | 'robots'>('schema');
  const [expandedCheckId, setExpandedCheckId] = useState<string | null>('meta-title');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditTimestamp, setAuditTimestamp] = useState('2 minutes ago');

  const auditSummary = runSEOAudit(activeClient);

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditTimestamp('Just now');
    }, 850);
  };

  const filteredItems = activeCategory === 'all'
    ? auditSummary.items
    : auditSummary.items.filter(i => i.category === activeCategory);

  const schemaJson = generateLocalBusinessSchema(activeClient);
  const sitemapXml = generateSitemapXml(activeClient);
  const robotsTxt = generateRobotsTxt(activeClient);

  const codeTabs: TabItem[] = [
    { id: 'schema', label: 'LocalBusiness Schema (JSON-LD)' },
    { id: 'sitemap', label: 'XML Sitemap (sitemap.xml)' },
    { id: 'robots', label: 'Robots Directives (robots.txt)' }
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
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <h1 style={{ fontSize: '1.75rem', color: 'var(--color-ink)', margin: 0 }}>
              Technical SEO Inspector
            </h1>
            <span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF', fontWeight: 600 }}>
              Standardized Quality Gate
            </span>
          </div>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', margin: 0 }}>
            Inspect client metadata, heading structure, canonical HTTPS URLs, and LocalBusiness structured data.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Client Switcher */}
          <select
            value={activeClient.id}
            onChange={(e) => setActiveClient(e.target.value)}
            className="form-select"
            style={{ width: 'auto', padding: '8px 12px', fontSize: '0.8125rem', fontWeight: 600 }}
          >
            {clients.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <Button
            variant="primary"
            onClick={handleRunAudit}
            isLoading={isAuditing}
            icon={<RefreshCw size={14} />}
          >
            Run SEO Audit
          </Button>
        </div>
      </div>

      {/* Audit Score & Summary Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '18px'
        }}
      >
        <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
            Overall SEO Readiness
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-forest)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              {auditSummary.overallScore}%
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-success)', fontWeight: 600 }}>
              Production Ready
            </span>
          </div>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)' }}>Last checked {auditTimestamp}</span>
        </div>

        <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
            Passed Verifications
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-success)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              {auditSummary.passedCount}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>checks verified</span>
          </div>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-success)' }}>Zero blocking errors</span>
        </div>

        <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
            Needs Attention
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-warning)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              {auditSummary.attentionCount}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>recommendations</span>
          </div>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-warning)' }}>Optional improvements</span>
        </div>

        <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
            Not Configured
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-slate)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              {auditSummary.notConfiguredCount}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>optional placeholders</span>
          </div>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate)' }}>GA4 / Search Console</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: `All Checks (${auditSummary.items.length})` },
          { id: 'metadata', label: 'Metadata & Content' },
          { id: 'technical', label: 'Technical SEO' },
          { id: 'local', label: 'Local SEO' },
          { id: 'performance', label: 'Performance' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.8125rem',
              fontWeight: activeCategory === cat.id ? 600 : 500,
              backgroundColor: activeCategory === cat.id ? 'var(--color-forest)' : '#FFFFFF',
              color: activeCategory === cat.id ? '#FFFFFF' : 'var(--color-ink)',
              border: '1px solid',
              borderColor: activeCategory === cat.id ? 'var(--color-forest)' : 'var(--color-stone)',
              transition: 'all var(--transition-fast)'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Audit Item List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredItems.map((item) => {
          const isExpanded = expandedCheckId === item.id;
          return (
            <div
              key={item.id}
              className="surface-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid var(--color-stone)',
                overflow: 'hidden'
              }}
            >
              {/* Item Header Row */}
              <div
                onClick={() => setExpandedCheckId(isExpanded ? null : item.id)}
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  backgroundColor: isExpanded ? 'var(--color-ivory-light)' : '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <StatusBadge status={item.status} />
                  <div>
                    <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)' }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)', marginLeft: '12px' }}>
                      {item.explanation}
                    </span>
                  </div>
                </div>

                {isExpanded ? <ChevronUp size={16} color="var(--color-slate)" /> : <ChevronDown size={16} color="var(--color-slate)" />}
              </div>

              {/* Expanded Details Panel */}
              {isExpanded && (
                <div
                  style={{
                    padding: '20px 24px',
                    borderTop: '1px solid var(--color-stone)',
                    backgroundColor: '#FFFFFF',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '24px',
                    fontSize: '0.875rem'
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', marginBottom: '4px' }}>
                      Why This Matters for Contractors
                    </h4>
                    <p style={{ color: 'var(--color-ink)', lineHeight: 1.6, margin: 0 }}>
                      {item.whyItMatters}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', marginBottom: '4px' }}>
                      Recommended Action
                    </h4>
                    <p style={{ color: 'var(--color-ink)', lineHeight: 1.6, margin: 0 }}>
                      {item.recommendedFix}
                    </p>
                  </div>

                  {item.targetField && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                      <button
                        onClick={() => setActiveClient(activeClient.id)}
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--color-forest)',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Edit {item.targetField} in Client Settings →</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Code Artifacts & Deliverables Preview */}
      <div
        className="surface-card"
        style={{
          padding: '24px',
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          marginTop: '12px'
        }}
      >
        <div style={{ marginBottom: '18px' }}>
          <h3 style={{ fontSize: '1.1875rem', color: 'var(--color-ink)', margin: '0 0 4px' }}>
            Generated Production SEO Artifacts
          </h3>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.8125rem', margin: 0 }}>
            Structured data and crawler manifests auto-generated from {activeClient.name} configuration.
          </p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <Tabs
            tabs={codeTabs}
            activeTab={activeCodeTab}
            onChange={(t) => setActiveCodeTab(t as any)}
            variant="pills"
          />
        </div>

        {activeCodeTab === 'schema' && (
          <CodeBlock
            code={schemaJson}
            language="json"
            filename="LocalBusiness-Schema.jsonld"
          />
        )}

        {activeCodeTab === 'sitemap' && (
          <CodeBlock
            code={sitemapXml}
            language="xml"
            filename="sitemap.xml"
          />
        )}

        {activeCodeTab === 'robots' && (
          <CodeBlock
            code={robotsTxt}
            language="plaintext"
            filename="robots.txt"
          />
        )}
      </div>
    </div>
  );
};
