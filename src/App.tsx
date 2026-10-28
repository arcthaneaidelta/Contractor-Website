import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { WorkspaceLayout } from './components/layout/WorkspaceLayout';
import { LandingPage } from './pages/marketing/LandingPage';
import { PreviewPage } from './pages/preview/PreviewPage';
import { OverviewPage } from './pages/workspace/OverviewPage';
import { ClientsPage } from './pages/workspace/ClientsPage';
import { ClientDetailPage } from './pages/workspace/ClientDetailPage';
import { NewClientWizardPage } from './pages/workspace/NewClientWizardPage';
import { SEOInspectorPage } from './pages/workspace/SEOInspectorPage';
import { DeploymentsPage } from './pages/workspace/DeploymentsPage';
import { ReportsPage } from './pages/workspace/ReportsPage';
import { TemplatesPage } from './pages/workspace/TemplatesPage';
import { SettingsPage } from './pages/workspace/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [initialLoading, setInitialLoading] = useState(() => {
    // Only show the opening loading sequence on the first load of the session
    return !sessionStorage.getItem('contractoros_loaded');
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('contractoros_loaded', 'true');
    setInitialLoading(false);
  };

  return (
    <>
      {initialLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <BrowserRouter>
        <Routes>
          {/* 1. Marketing Homepage */}
          <Route path="/" element={<LandingPage />} />

          {/* 2. Interactive Contractor Website Preview */}
          <Route path="/preview" element={<PreviewPage />} />

          {/* 3. Agency Operations Workspace */}
          <Route
            path="/workspace"
            element={
              <WorkspaceLayout>
                <OverviewPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/clients"
            element={
              <WorkspaceLayout>
                <ClientsPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/clients/new"
            element={
              <WorkspaceLayout>
                <NewClientWizardPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/clients/:id"
            element={
              <WorkspaceLayout>
                <ClientDetailPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/seo"
            element={
              <WorkspaceLayout>
                <SEOInspectorPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/deployments"
            element={
              <WorkspaceLayout>
                <DeploymentsPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/reports"
            element={
              <WorkspaceLayout>
                <ReportsPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/templates"
            element={
              <WorkspaceLayout>
                <TemplatesPage />
              </WorkspaceLayout>
            }
          />
          <Route
            path="/workspace/settings"
            element={
              <WorkspaceLayout>
                <SettingsPage />
              </WorkspaceLayout>
            }
          />

          {/* 4. 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
