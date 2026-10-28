import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  LayoutTemplate,
  SearchCheck,
  Rocket,
  BarChart3,
  Sliders,
  ExternalLink,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { useClientStore } from '../../services/clientStore';

interface WorkspaceSidebarProps {
  onCloseMobile?: () => void;
}

export const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = ({ onCloseMobile }) => {
  const { clients, activeClient, setActiveClient } = useClientStore();

  const navGroups = [
    {
      title: 'Workspace',
      items: [
        { label: 'Overview', to: '/workspace', icon: LayoutDashboard, end: true },
        { label: 'Clients', to: '/workspace/clients', icon: Users, badge: clients.length },
        { label: 'Website Templates', to: '/workspace/templates', icon: LayoutTemplate }
      ]
    },
    {
      title: 'Delivery & QA',
      items: [
        { label: 'Technical SEO', to: '/workspace/seo', icon: SearchCheck },
        { label: 'Deployments', to: '/workspace/deployments', icon: Rocket }
      ]
    },
    {
      title: 'Growth & Retention',
      items: [
        { label: 'Analytics & Reports', to: '/workspace/reports', icon: BarChart3 }
      ]
    },
    {
      title: 'System',
      items: [
        { label: 'Settings & Guides', to: '/workspace/settings', icon: Sliders }
      ]
    }
  ];

  return (
    <aside
      className="workspace-sidebar"
      style={{
        width: '250px',
        backgroundColor: '#1E2B24',
        color: '#E8EFEA',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRight: '1px solid #2B3D33',
        userSelect: 'none'
      }}
    >
      {/* Brand Header */}
      <div
        style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid #2B3D33',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#A9B8A5',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1E2B24'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <rect x="5" y="6" width="22" height="4" rx="2" fill="#1E2B24" />
              <rect x="5" y="14" width="16" height="4" rx="2" fill="#253D32" />
              <rect x="5" y="22" width="22" height="4" rx="2" fill="#1E2B24" />
            </svg>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.125rem',
                letterSpacing: '-0.02em',
                color: '#FFFFFF'
              }}
            >
              Contractor<span style={{ color: '#A9B8A5', fontWeight: 500 }}>OS</span>
            </span>
          </div>
        </Link>

        <span
          style={{
            fontSize: '0.6875rem',
            padding: '2px 6px',
            backgroundColor: '#253D32',
            color: '#A9B8A5',
            borderRadius: '4px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}
        >
          Ops
        </span>
      </div>

      {/* Active Client Context Switcher */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid #2B3D33', backgroundColor: '#1A251F' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#8A998E' }}>
            Active Client Focus
          </span>
          <Link
            to="/workspace/clients/new"
            style={{ color: '#A9B8A5', display: 'flex', alignItems: 'center', fontSize: '0.75rem' }}
            title="Add New Client"
          >
            <Plus size={13} />
          </Link>
        </div>
        <select
          value={activeClient.id}
          onChange={(e) => setActiveClient(e.target.value)}
          style={{
            width: '100%',
            backgroundColor: '#25352C',
            color: '#FFFFFF',
            border: '1px solid #364A3E',
            borderRadius: '6px',
            padding: '6px 10px',
            fontSize: '0.8125rem',
            cursor: 'pointer'
          }}
        >
          {clients.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Navigation Groups */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>
        {navGroups.map((grp) => (
          <div key={grp.title} style={{ marginBottom: '20px' }}>
            <h5
              style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#728578',
                padding: '0 8px 8px'
              }}
            >
              {grp.title}
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {grp.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={onCloseMobile}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#FFFFFF' : '#B8C7BC',
                      backgroundColor: isActive ? '#293C31' : 'transparent',
                      textDecoration: 'none',
                      transition: 'background-color var(--transition-fast)'
                    })}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          padding: '1px 6px',
                          borderRadius: '10px',
                          backgroundColor: '#203227',
                          color: '#A9B8A5'
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Quick Action */}
      <div
        style={{
          padding: '16px',
          borderTop: '1px solid #2B3D33',
          backgroundColor: '#19231D',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Link
          to="/preview"
          target="_blank"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            borderRadius: '6px',
            backgroundColor: '#25382E',
            color: '#E8EFEA',
            fontSize: '0.8125rem',
            textDecoration: 'none',
            border: '1px solid #32473A'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ExternalLink size={13} color="#A9B8A5" />
            Live Client Site
          </span>
          <span style={{ fontSize: '0.6875rem', color: '#A9B8A5' }}>/preview</span>
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.6875rem',
            color: '#7B8F81'
          }}
        >
          <ShieldCheck size={13} color="#68D391" />
          <span>Demo Mode • Local Storage Active</span>
        </div>
      </div>
    </aside>
  );
};
