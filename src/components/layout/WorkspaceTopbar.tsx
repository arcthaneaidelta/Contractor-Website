import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Plus, ExternalLink, ChevronRight, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
import { useClientStore } from '../../services/clientStore';

interface WorkspaceTopbarProps {
  onOpenMobileSidebar: () => void;
}

export const WorkspaceTopbar: React.FC<WorkspaceTopbarProps> = ({ onOpenMobileSidebar }) => {
  const location = useLocation();
  const { activeClient } = useClientStore();

  const getBreadcrumbs = (): Array<{ label: string; path?: string }> => {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length === 1 && parts[0] === 'workspace') {
      return [{ label: 'Workspace', path: '/workspace' }, { label: 'Overview' }];
    }
    const crumbs: Array<{ label: string; path?: string }> = [{ label: 'Workspace', path: '/workspace' }];
    if (parts[1]) {
      const pageNames: Record<string, string> = {
        clients: 'Clients',
        templates: 'Website Templates',
        seo: 'Technical SEO Audit',
        deployments: 'Deployment Simulator',
        reports: 'Analytics & Reports',
        settings: 'Settings & Workflows'
      };
      if (parts[1] === 'clients' && parts[2] === 'new') {
        crumbs.push({ label: 'Clients', path: '/workspace/clients' });
        crumbs.push({ label: 'Onboarding Wizard' });
      } else if (parts[1] === 'clients' && parts[2]) {
        crumbs.push({ label: 'Clients', path: '/workspace/clients' });
        crumbs.push({ label: activeClient.name });
      } else {
        crumbs.push({ label: pageNames[parts[1]] || parts[1] });
      }
    }
    return crumbs;
  };

  const crumbs = getBreadcrumbs();

  return (
    <header
      style={{
        height: '60px',
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid var(--color-stone)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <button
          onClick={onOpenMobileSidebar}
          aria-label="Open sidebar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-stone)'
          }}
          className="mobile-sidebar-toggle"
        >
          <Menu size={18} />
        </button>

        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumbs"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}
        >
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={14} color="var(--color-slate-light)" />}
                {crumb.path && !isLast ? (
                  <Link
                    to={crumb.path}
                    style={{ color: 'var(--color-slate)', textDecoration: 'none' }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{crumb.label}</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            backgroundColor: 'var(--color-ivory)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-stone)',
            fontSize: '0.8125rem'
          }}
          className="desktop-client-pill"
        >
          <span style={{ color: 'var(--color-slate)' }}>Active Client:</span>
          <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>{activeClient.name}</span>
        </div>

        <Link to={`/preview?client=${activeClient.id}`}>
          <Button variant="secondary" size="sm" icon={<Eye size={14} />}>
            <span className="btn-text-responsive">Preview Site</span>
          </Button>
        </Link>

        <Link to="/workspace/clients/new">
          <Button variant="primary" size="sm" icon={<Plus size={14} />}>
            <span className="btn-text-responsive">New Client</span>
          </Button>
        </Link>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .mobile-sidebar-toggle {
            display: none !important;
          }
          .desktop-client-pill {
            display: flex !important;
          }
        }
        @media (max-width: 600px) {
          .btn-text-responsive {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
