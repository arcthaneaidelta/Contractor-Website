import React, { useState } from 'react';
import { WorkspaceSidebar } from './WorkspaceSidebar';
import { WorkspaceTopbar } from './WorkspaceTopbar';

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

export const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: 'var(--color-ivory)'
      }}
    >
      {/* Desktop Persistent Sidebar */}
      <div className="desktop-sidebar-container" style={{ display: 'none', height: '100%' }}>
        <WorkspaceSidebar />
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileSidebarOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            backgroundColor: 'rgba(27, 30, 28, 0.6)'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileSidebarOpen(false);
          }}
        >
          <div style={{ height: '100%', width: '270px', animation: 'slideRight 200ms ease-out' }}>
            <WorkspaceSidebar onCloseMobile={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Workspace Content Area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <WorkspaceTopbar onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />
        <main
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '28px',
            backgroundColor: 'var(--color-ivory)'
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            {children}
          </div>
        </main>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .desktop-sidebar-container {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
