import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  FileEdit,
  Rocket,
  FileText,
  Plus,
  Sliders,
  SearchCheck,
  BarChart3,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { useClientStore } from '../../services/clientStore';

export const OverviewPage: React.FC = () => {
  const { clients, activeClient, setActiveClient } = useClientStore();

  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    task1: true,
    task2: true,
    task3: false,
    task4: false
  });

  const toggleTask = (id: string) => {
    setCompletedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const recentActivity = [
    {
      id: 'act-1',
      client: 'Oakline Renovation Co.',
      clientId: 'oakline-renovation',
      event: 'Technical SEO checks completed',
      detail: 'LocalBusiness JSON-LD & NAP verified with 98% score',
      time: '12m ago',
      icon: SearchCheck,
      color: 'var(--color-success)'
    },
    {
      id: 'act-2',
      client: 'Summit Home Services',
      clientId: 'summit-home-services',
      event: 'Draft website updated',
      detail: 'Added composite decking and basement finish service scopes',
      time: '1h ago',
      icon: FileEdit,
      color: 'var(--color-warning)'
    },
    {
      id: 'act-3',
      client: 'Cedar & Stone Remodeling',
      clientId: 'cedar-stone-remodeling',
      event: 'Deployment simulation completed',
      detail: '18 pre-flight verification checks passed for staging',
      time: '3h ago',
      icon: Rocket,
      color: 'var(--color-forest)'
    },
    {
      id: 'act-4',
      client: 'Oakline Renovation Co.',
      clientId: 'oakline-renovation',
      event: 'Monthly report prepared',
      detail: 'October 2026 digest ready with 27 contact conversions',
      time: 'Yesterday',
      icon: BarChart3,
      color: 'var(--color-forest)'
    }
  ];

  const tasks = [
    { id: 'task1', label: 'Review website content & typography tokens for Oakline Renovation Co.', link: '/preview' },
    { id: 'task2', label: 'Confirm Netlify honeypot contact form configuration', link: '/workspace/deployments' },
    { id: 'task3', label: 'Check canonical HTTPS URL and robots.txt directives', link: '/workspace/seo' },
    { id: 'task4', label: 'Prepare monthly executive report and PDF digest for client', link: '/workspace/reports' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.875rem', color: 'var(--color-ink)', marginBottom: '4px' }}>
            Good morning. Here's your operation at a glance.
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', margin: 0 }}>
            A snapshot of your sample website portfolio, client deployments, and upcoming quality milestones.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to={`/preview?client=${activeClient.id}`} target="_blank">
            <Button variant="secondary" size="sm" icon={<ExternalLink size={14} />}>
              View Live Website
            </Button>
          </Link>
          <Link to="/workspace/clients/new">
            <Button variant="primary" size="sm" icon={<Plus size={14} />}>
              Add Client
            </Button>
          </Link>
        </div>
      </div>

      {/* 4 Illustrative Core Metrics as specified in PRD */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}
      >
        <div className="surface-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
              Active Websites
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'var(--color-success-bg)', color: 'var(--color-success)' }}>
              <Globe size={16} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-ink)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              8
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>in portfolio</span>
          </div>
        </div>

        <div className="surface-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
              Draft Websites
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'var(--color-warning-bg)', color: 'var(--color-warning)' }}>
              <FileEdit size={16} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-ink)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              2
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>in customization</span>
          </div>
        </div>

        <div className="surface-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
              Launches This Month
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: 'var(--color-sage-light)', color: 'var(--color-forest)' }}>
              <Rocket size={16} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-forest)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              3
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600 }}>100% on schedule</span>
          </div>
        </div>

        <div className="surface-card" style={{ padding: '22px', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-slate)', fontWeight: 600 }}>
              Reports Ready
            </span>
            <div style={{ padding: '6px', borderRadius: '6px', backgroundColor: '#EBF0E9', color: 'var(--color-forest)' }}>
              <FileText size={16} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--color-ink)', fontFamily: 'var(--font-heading)' }} className="tabular-nums">
              6
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>ready for export</span>
          </div>
        </div>
      </div>

      {/* Split: Recent Activity & Upcoming Tasks */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}
      >
        {/* Recent Activity */}
        <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', margin: 0 }}>
              Recent Activity
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Updated live</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentActivity.map((act) => {
              const Icon = act.icon;
              return (
                <div
                  key={act.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    paddingBottom: '14px',
                    borderBottom: '1px solid var(--color-stone-light)'
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-ivory)',
                      color: act.color,
                      flexShrink: 0
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}>
                        {act.client}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-light)' }}>
                        {act.time}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-ink)', fontWeight: 500, display: 'block', margin: '2px 0' }}>
                      {act.event}
                    </span>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-slate)', margin: 0 }}>
                      {act.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Tasks Checklist */}
        <div className="surface-card" style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', margin: 0 }}>
              Upcoming Launch Checklist
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Quality Assurance</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tasks.map((task) => {
              const isDone = completedTasks[task.id];
              return (
                <div
                  key={task.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    backgroundColor: isDone ? 'var(--color-ivory-light)' : '#FFFFFF',
                    border: '1px solid var(--color-stone)'
                  }}
                >
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: isDone ? 'var(--color-slate)' : 'var(--color-ink)',
                      textDecoration: isDone ? 'line-through' : 'none',
                      flex: 1
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span>{task.label}</span>
                  </label>

                  <Link to={task.link} style={{ color: 'var(--color-forest)', display: 'flex', alignItems: 'center', padding: '4px' }}>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h3 style={{ fontSize: '1.125rem', color: 'var(--color-ink)', marginBottom: '14px' }}>
          System Quick Actions
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}
        >
          <Link to="/workspace/clients/new" style={{ textDecoration: 'none' }}>
            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF' }}>
                <Plus size={20} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>Add a Client</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Launch onboarding wizard</span>
              </div>
            </div>
          </Link>

          <Link to={`/workspace/clients/${activeClient.id}`} style={{ textDecoration: 'none' }}>
            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF' }}>
                <Sliders size={20} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>Customize Website</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Split-screen live editor</span>
              </div>
            </div>
          </Link>

          <Link to="/workspace/seo" style={{ textDecoration: 'none' }}>
            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF' }}>
                <SearchCheck size={20} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>Run SEO Audit</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Check metadata & schema</span>
              </div>
            </div>
          </Link>

          <Link to="/workspace/reports" style={{ textDecoration: 'none' }}>
            <div className="surface-card" style={{ padding: '20px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'var(--color-forest)', color: '#FFFFFF' }}>
                <BarChart3 size={20} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>Create Monthly Report</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Prepare client PDF & delivery</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
