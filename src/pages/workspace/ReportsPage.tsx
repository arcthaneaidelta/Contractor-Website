import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Search,
  MousePointerClick,
  Download,
  Mail,
  Printer,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sliders,
  Send,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Calendar
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { Tabs, TabItem } from '../../components/ui/Tabs';
import { useClientStore } from '../../services/clientStore';
import { getClientAnalytics } from '../../data/demoAnalytics';

export const ReportsPage: React.FC = () => {
  const { clients, activeClient, setActiveClient } = useClientStore();

  const [activeTab, setActiveTab] = useState<'analytics' | 'builder'>('analytics');
  const [period, setPeriod] = useState<string>('last-30-days');

  // Executive summary editable state
  const [executiveSummary, setExecutiveSummary] = useState(
    `${activeClient.name} experienced substantial growth in organic search visibility this period. Total website sessions increased by +18.4% month-over-month, primarily driven by high-intent local queries for "kitchen remodeling austin tx" and "luxury bathroom renovations". Qualified consultation inquiries rose to 27 total leads, reflecting a healthy 2.1% form conversion rate.`
  );

  // Included sections in PDF report
  const [includeSections, setIncludeSections] = useState<Record<string, boolean>>({
    executiveSummary: true,
    trafficTrends: true,
    organicSearch: true,
    topPages: true,
    channelBreakdown: true,
    recommendations: true
  });

  const toggleSection = (key: string) => {
    setIncludeSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Email simulation modal state
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);

  const analytics = getClientAnalytics(activeClient.id, period);

  const handlePrintPDF = () => {
    window.print();
  };

  const handleSimulateSendEmail = () => {
    setEmailSentSuccess(true);
    setTimeout(() => {
      setEmailSentSuccess(false);
      setEmailModalOpen(false);
    }, 2200);
  };

  const tabs: TabItem[] = [
    { id: 'analytics', label: 'Analytics Dashboard' },
    { id: 'builder', label: 'Monthly Report Builder & PDF' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Header Card */}
      <div
        className="surface-card no-print"
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
              Analytics & Monthly Reports
            </h1>
            <span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF', fontWeight: 600 }}>
              Monthly Retainer Engine
            </span>
          </div>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.875rem', margin: 0 }}>
            Standardized performance data, conversion tracking, and white-label client PDF reporting.
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

          {/* Period Selector */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="form-select"
            style={{ width: 'auto', padding: '8px 12px', fontSize: '0.8125rem' }}
          >
            <option value="last-30-days">Last 30 Days (October 2026)</option>
            <option value="q3-2026">Q3 2026 (Jul 1 – Sep 30)</option>
            <option value="ytd-2026">Year to Date 2026</option>
          </select>

          <Button
            variant="primary"
            onClick={() => setActiveTab('builder')}
            icon={<FileText size={15} />}
          >
            Generate Client Report
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="no-print">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(t) => setActiveTab(t as any)}
        />
      </div>

      {/* TAB 1: ANALYTICS DASHBOARD */}
      {activeTab === 'analytics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* 6 Key Metrics Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px'
            }}
          >
            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
                Total Sessions
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-ink)' }} className="tabular-nums">
                  {analytics.sessions.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  {analytics.sessionsDelta}
                </span>
              </div>
            </div>

            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
                Engaged Sessions
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-ink)' }} className="tabular-nums">
                  {analytics.engagedSessions.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  {analytics.engagedSessionsDelta}
                </span>
              </div>
            </div>

            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
                Organic Clicks
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-forest)' }} className="tabular-nums">
                  {analytics.organicSearchClicks.toLocaleString()}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  {analytics.organicClicksDelta}
                </span>
              </div>
            </div>

            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
                Form Submissions
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-forest)' }} className="tabular-nums">
                  {analytics.contactSubmissions}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  {analytics.contactSubmissionsDelta}
                </span>
              </div>
            </div>

            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
                Engagement Rate
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-ink)' }} className="tabular-nums">
                  {analytics.engagementRate}%
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  {analytics.engagementRateDelta}
                </span>
              </div>
            </div>

            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
                Form Conversion Rate
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-forest)' }} className="tabular-nums">
                  {analytics.conversionRate}%
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>
                  {analytics.conversionRateDelta}
                </span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Chart 1: Traffic Trends Over Time */}
            <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', margin: 0 }}>
                    Traffic & Engagement Trends
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Total sessions vs Organic search</span>
                </div>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-ivory)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--color-stone)' }}>
                  {analytics.periodLabel}
                </span>
              </div>

              <div style={{ height: '260px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analytics.trafficTrends}>
                    <defs>
                      <linearGradient id="areaSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#253D32" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#253D32" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E6E1D8" vertical={false} />
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
                      fill="url(#areaSessions)"
                      name="Total Sessions"
                    />
                    <Area
                      type="monotone"
                      dataKey="organic"
                      stroke="#A9B8A5"
                      strokeWidth={2}
                      fill="none"
                      name="Organic Google Search"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Organic Search Clicks Breakdown */}
            <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', margin: 0 }}>
                    Organic Search Click Velocity
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>High-intent contractor keyword visits</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-forest)', fontWeight: 600 }}>
                  {analytics.organicSearchClicks} Clicks
                </span>
              </div>

              <div style={{ height: '260px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analytics.trafficTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E6E1D8" vertical={false} />
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
                    <Bar
                      dataKey="organic"
                      fill="#253D32"
                      radius={[4, 4, 0, 0]}
                      name="Organic Search Clicks"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Breakdown Row: Traffic Channels & Devices */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Acquisition Channels */}
            <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
              <h3 style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
                Traffic Acquisition Channels
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {analytics.sources.map((src, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '6px' }}>
                      <strong style={{ color: 'var(--color-ink)' }}>{src.channel}</strong>
                      <span style={{ color: 'var(--color-slate)' }}>{src.percentage}% ({src.visitors} visits)</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-ivory)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${src.percentage}%`,
                          backgroundColor: i === 0 ? 'var(--color-forest)' : i === 1 ? 'var(--color-sage)' : '#CCC5B9',
                          borderRadius: '999px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Breakdown */}
            <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
              <h3 style={{ fontSize: '1.0625rem', color: 'var(--color-ink)', marginBottom: '16px' }}>
                Device Category Share
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {analytics.devices.map((dev, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '6px' }}>
                      <strong style={{ color: 'var(--color-ink)' }}>{dev.device}</strong>
                      <span style={{ color: 'var(--color-slate)' }}>{dev.percentage}% ({dev.sessions} sessions)</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-ivory)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${dev.percentage}%`,
                          backgroundColor: i === 0 ? 'var(--color-forest)' : '#A9B8A5',
                          borderRadius: '999px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-stone)', fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                * 62% mobile proportion validates the mobile-first architectural requirement.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MONTHLY REPORT BUILDER & EDITORIAL PDF PREVIEW */}
      {activeTab === 'builder' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Controls Bar */}
          <div
            className="surface-card no-print"
            style={{
              padding: '20px 24px',
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
              <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', margin: 0 }}>
                Executive Report Builder
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                Customized for {activeClient.name} • {analytics.periodLabel}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setEmailModalOpen(true)}
                icon={<Mail size={14} />}
              >
                Simulate Client Email
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handlePrintPDF}
                icon={<Printer size={14} />}
              >
                Export PDF / Print
              </Button>
            </div>
          </div>

          {/* Builder Customization Controls */}
          <div
            className="surface-card no-print"
            style={{
              padding: '24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '14px'
            }}
          >
            <div className="form-group">
              <label className="form-label">
                Editable Executive Summary & Highlights
              </label>
              <textarea
                className="form-textarea"
                rows={4}
                value={executiveSummary}
                onChange={(e) => setExecutiveSummary(e.target.value)}
              />
            </div>

            <div>
              <label className="form-label" style={{ marginBottom: '10px' }}>Include In Client PDF</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.8125rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={includeSections.executiveSummary} onChange={() => toggleSection('executiveSummary')} />
                  Executive Summary
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={includeSections.trafficTrends} onChange={() => toggleSection('trafficTrends')} />
                  Traffic Trends Chart
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={includeSections.organicSearch} onChange={() => toggleSection('organicSearch')} />
                  Organic Search Performance
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={includeSections.topPages} onChange={() => toggleSection('topPages')} />
                  Top Converting Pages
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={includeSections.recommendations} onChange={() => toggleSection('recommendations')} />
                  Next Month Strategy
                </label>
              </div>
            </div>
          </div>

          {/* Clean Editorial PDF Document Preview (Styled for Print & Screen) */}
          <div
            className="surface-card report-print-container"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '50px 60px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-hover)',
              maxWidth: '960px',
              margin: '0 auto',
              width: '100%',
              border: '1px solid var(--color-stone)',
              color: 'var(--color-ink)'
            }}
          >
            {/* PAGE 1: HEADER & KEY METRICS */}
            <div style={{ borderBottom: '2px solid var(--color-forest)', paddingBottom: '20px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: activeClient.config.branding.primaryColor || 'var(--color-forest)',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontWeight: 700
                      }}
                    >
                      {activeClient.name.charAt(0)}
                    </div>
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--color-ink)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                      {activeClient.name}
                    </h1>
                  </div>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate)' }}>
                    Monthly Website Performance & Local Growth Digest
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600, display: 'block' }}>
                    Reporting Period
                  </span>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-forest)' }}>
                    {analytics.periodLabel}
                  </strong>
                </div>
              </div>
            </div>

            {/* Executive Summary Section */}
            {includeSections.executiveSummary && (
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '1.0625rem', color: 'var(--color-forest)', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
                  Executive Performance Summary
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-ink)', margin: 0 }}>
                  {executiveSummary}
                </p>
              </div>
            )}

            {/* 4 Core Highlight Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                marginBottom: '36px',
                padding: '20px',
                backgroundColor: 'var(--color-ivory)',
                borderRadius: '10px',
                border: '1px solid var(--color-stone)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>Total Sessions</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-ink)', marginTop: '4px' }} className="tabular-nums">
                  {analytics.sessions.toLocaleString()}
                </div>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-success)', fontWeight: 600 }}>{analytics.sessionsDelta} MoM</span>
              </div>

              <div>
                <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>Organic Search</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-forest)', marginTop: '4px' }} className="tabular-nums">
                  {analytics.organicSearchClicks.toLocaleString()}
                </div>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-success)', fontWeight: 600 }}>{analytics.organicClicksDelta} MoM</span>
              </div>

              <div>
                <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>Consultation Leads</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-forest)', marginTop: '4px' }} className="tabular-nums">
                  {analytics.contactSubmissions}
                </div>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-success)', fontWeight: 600 }}>{analytics.contactSubmissionsDelta} MoM</span>
              </div>

              <div>
                <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-slate)', fontWeight: 600 }}>Lead Conversion Rate</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-ink)', marginTop: '4px' }} className="tabular-nums">
                  {analytics.conversionRate}%
                </div>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-success)', fontWeight: 600 }}>{analytics.conversionRateDelta} MoM</span>
              </div>
            </div>

            {/* Traffic Trend Chart */}
            {includeSections.trafficTrends && (
              <div style={{ marginBottom: '36px' }}>
                <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-forest)', marginBottom: '12px' }}>
                  Weekly Visitor Progression
                </h4>
                <div style={{ height: '180px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analytics.trafficTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E6E1D8" vertical={false} />
                      <XAxis dataKey="date" stroke="#727870" fontSize={10} tickLine={false} />
                      <YAxis stroke="#727870" fontSize={10} tickLine={false} />
                      <Area type="monotone" dataKey="sessions" stroke="#253D32" fill="#EBF0E9" name="Sessions" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* PAGE BREAK FOR PRINT */}
            <div className="page-break" style={{ height: '24px' }} />

            {/* PAGE 2: TOP PAGES & NEXT STEPS */}
            {includeSections.topPages && (
              <div style={{ marginBottom: '36px' }}>
                <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-forest)', marginBottom: '12px' }}>
                  Top Performing Contractor Service Pages
                </h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-stone)' }}>
                      <th style={{ textAlign: 'left', padding: '8px 0', color: 'var(--color-slate)' }}>Landing Page URL</th>
                      <th style={{ textAlign: 'right', padding: '8px 0', color: 'var(--color-slate)' }}>Unique Views</th>
                      <th style={{ textAlign: 'right', padding: '8px 0', color: 'var(--color-slate)' }}>Form Inquiries</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics.topPages.map((p, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--color-stone-light)' }}>
                        <td style={{ padding: '8px 0', color: 'var(--color-ink)', fontWeight: 500 }}>{p.path}</td>
                        <td style={{ textAlign: 'right', padding: '8px 0', color: 'var(--color-slate)' }}>{p.views}</td>
                        <td style={{ textAlign: 'right', padding: '8px 0', color: 'var(--color-forest)', fontWeight: 600 }}>{p.conversions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Strategic Recommendations */}
            {includeSections.recommendations && (
              <div>
                <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-forest)', marginBottom: '10px' }}>
                  Recommended Focus for Upcoming Month
                </h4>
                <ul style={{ paddingLeft: '18px', fontSize: '0.875rem', color: 'var(--color-ink)', lineHeight: 1.7, margin: 0 }}>
                  <li><strong>Expand High-Value Portfolio:</strong> Add 2 completed Tarrytown and West Lake Hills case studies to capture affluent kitchen queries.</li>
                  <li><strong>Local Schema Refresh:</strong> Keep holiday operating hours updated in Google Business Profile and sync with site NAP.</li>
                  <li><strong>Speed Optimization:</strong> Maintain zero Cumulative Layout Shift (CLS) on mobile devices to preserve core ranking factors.</li>
                </ul>
              </div>
            )}

            {/* Document Footer */}
            <div style={{ marginTop: '40px', paddingTop: '16px', borderTop: '1px solid var(--color-stone)', display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--color-slate)' }}>
              <span>Generated via ContractorOS Automated Reporting Engine</span>
              <span>Confidential • Prepared for {activeClient.name}</span>
            </div>
          </div>
        </div>
      )}

      {/* Simulated Email Delivery Modal */}
      <Modal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        title="Simulate Client Email Delivery"
        description="Preview the client notification email and attachment dispatch."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Client Recipient</label>
            <input
              type="text"
              className="form-input"
              value={activeClient.config.business.email}
              readOnly
            />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Email Subject</label>
            <input
              type="text"
              className="form-input"
              value={`Monthly Website Performance Report — ${activeClient.name} (${analytics.periodLabel})`}
              readOnly
            />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Message Preview</label>
            <textarea
              className="form-textarea"
              rows={4}
              readOnly
              value={`Hi ${activeClient.contactName},\n\nPlease find attached your executive website performance digest for ${analytics.periodLabel}. Total visits grew to ${analytics.sessions.toLocaleString()} with ${analytics.contactSubmissions} qualified consultation inquiries.\n\nBest regards,\nContractorOS Operations Team`}
            />
          </div>

          <div
            style={{
              padding: '10px 14px',
              backgroundColor: 'var(--color-ivory)',
              borderRadius: '8px',
              border: '1px solid var(--color-stone)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8125rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FileText size={15} color="var(--color-forest)" />
              {activeClient.slug}-monthly-report.pdf
            </span>
            <span style={{ color: 'var(--color-slate)' }}>184 KB</span>
          </div>

          {/* PRD Mandatory Explicit Disclosure */}
          <div
            style={{
              padding: '10px 14px',
              backgroundColor: 'var(--color-warning-bg)',
              color: 'var(--color-warning)',
              borderRadius: '8px',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AlertCircle size={15} style={{ flexShrink: 0 }} />
            <span>
              <strong>Demo only:</strong> The report was prepared locally. No external email was sent.
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            <Button variant="secondary" onClick={() => setEmailModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              icon={<Send size={14} />}
              onClick={handleSimulateSendEmail}
              disabled={emailSentSuccess}
            >
              {emailSentSuccess ? 'Email Simulated Successfully' : 'Simulate Send to Client'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
