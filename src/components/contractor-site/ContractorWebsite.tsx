import React, { useState } from 'react';
import { ContractorSiteConfig, ProjectItem } from '../../types';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { SiteHomePage } from './SiteHomePage';
import { SiteServicesPage } from './SiteServicesPage';
import { SiteProjectsPage } from './SiteProjectsPage';
import { SiteAboutPage } from './SiteAboutPage';
import { SiteServiceAreasPage } from './SiteServiceAreasPage';
import { SiteContactPage } from './SiteContactPage';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ContractorWebsiteProps {
  config: ContractorSiteConfig;
  clientId?: string;
  initialView?: string;
  isCompactFrame?: boolean;
}

export const ContractorWebsite: React.FC<ContractorWebsiteProps> = ({
  config,
  clientId = 'oakline-renovation',
  initialView = 'home',
  isCompactFrame = false
}) => {
  const [activeView, setActiveView] = useState<string>(initialView);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (view: string) => {
    setActiveView(view);
    // If not in a compact iframe/card, scroll to top
    if (!isCompactFrame) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="contractor-site-engine"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: '#FFFFFF',
        color: 'var(--color-ink)',
        fontFamily: 'var(--font-body)',
        position: 'relative'
      }}
    >
      <SiteHeader
        config={config}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      <main style={{ flex: 1 }}>
        {activeView === 'home' && (
          <SiteHomePage
            config={config}
            onNavigate={handleNavigate}
            onSelectProject={setSelectedProject}
          />
        )}
        {activeView === 'services' && (
          <SiteServicesPage
            config={config}
            onNavigate={handleNavigate}
          />
        )}
        {activeView === 'work' && (
          <SiteProjectsPage
            config={config}
            onSelectProject={setSelectedProject}
          />
        )}
        {activeView === 'about' && (
          <SiteAboutPage
            config={config}
            onNavigate={handleNavigate}
          />
        )}
        {activeView === 'service-areas' && (
          <SiteServiceAreasPage
            config={config}
            onNavigate={handleNavigate}
          />
        )}
        {activeView === 'contact' && (
          <SiteContactPage
            config={config}
            clientId={clientId}
          />
        )}
      </main>

      <SiteFooter
        config={config}
        onNavigate={handleNavigate}
      />

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => {
          setSelectedProject(null);
          handleNavigate('contact');
        }}
        primaryColor={config.branding.primaryColor}
      />
    </div>
  );
};
