import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ContractorWebsite } from '../../components/contractor-site/ContractorWebsite';
import { useClientStore } from '../../services/clientStore';
import { Monitor, Tablet, Smartphone, Sliders, LayoutDashboard, ArrowLeft, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const PreviewPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { clients, activeClient, setActiveClient } = useClientStore();

  const queryClientId = searchParams.get('client');
  const targetClient = (queryClientId && clients.find(c => c.id === queryClientId)) || activeClient;

  const [deviceWidth, setDeviceWidth] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const handleClientChange = (newId: string) => {
    setActiveClient(newId);
    setSearchParams({ client: newId });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [targetClient.id]);

  const deviceWidthMap = {
    desktop: '100%',
    tablet: '768px',
    mobile: '390px'
  };

  return (
    <div style={{ backgroundColor: '#1A211D', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Demo Bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#1E2822',
          borderBottom: '1px solid #2B3A31',
          padding: '10px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          color: '#E8EFEA'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8125rem',
              color: '#A9B8A5',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </Link>

          <div style={{ height: '16px', width: '1px', backgroundColor: '#2E3F35' }} />

          {/* Client Selector Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#8E9E94', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Previewing:
            </span>
            <select
              value={targetClient.id}
              onChange={(e) => handleClientChange(e.target.value)}
              style={{
                backgroundColor: '#27382F',
                color: '#FFFFFF',
                border: '1px solid #364C3F',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {clients.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Viewport Width Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#161F1A', padding: '3px', borderRadius: '6px', border: '1px solid #27382F' }}>
          <button
            onClick={() => setDeviceWidth('desktop')}
            title="Desktop View (Full Width)"
            style={{
              padding: '5px 10px',
              borderRadius: '4px',
              color: deviceWidth === 'desktop' ? '#FFFFFF' : '#8E9E94',
              backgroundColor: deviceWidth === 'desktop' ? '#2A3C32' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem'
            }}
          >
            <Monitor size={14} />
            <span className="hide-mobile">Desktop</span>
          </button>

          <button
            onClick={() => setDeviceWidth('tablet')}
            title="Tablet View (768px)"
            style={{
              padding: '5px 10px',
              borderRadius: '4px',
              color: deviceWidth === 'tablet' ? '#FFFFFF' : '#8E9E94',
              backgroundColor: deviceWidth === 'tablet' ? '#2A3C32' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem'
            }}
          >
            <Tablet size={14} />
            <span className="hide-mobile">Tablet</span>
          </button>

          <button
            onClick={() => setDeviceWidth('mobile')}
            title="Mobile View (390px)"
            style={{
              padding: '5px 10px',
              borderRadius: '4px',
              color: deviceWidth === 'mobile' ? '#FFFFFF' : '#8E9E94',
              backgroundColor: deviceWidth === 'mobile' ? '#2A3C32' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem'
            }}
          >
            <Smartphone size={14} />
            <span className="hide-mobile">Mobile</span>
          </button>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link to={`/workspace/clients/${targetClient.id}`}>
            <Button size="sm" variant="secondary" icon={<Sliders size={13} />}>
              Customize in Workspace
            </Button>
          </Link>
          <Link to="/workspace">
            <Button size="sm" variant="primary" icon={<LayoutDashboard size={13} />}>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Render Frame */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: deviceWidth === 'desktop' ? '#FFFFFF' : '#141A16',
          padding: deviceWidth === 'desktop' ? '0' : '30px 16px',
          overflowY: 'auto'
        }}
      >
        <div
          style={{
            width: deviceWidthMap[deviceWidth],
            backgroundColor: '#FFFFFF',
            minHeight: '100%',
            borderRadius: deviceWidth === 'desktop' ? '0' : '20px',
            boxShadow: deviceWidth === 'desktop' ? 'none' : '0 12px 36px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            border: deviceWidth === 'desktop' ? 'none' : '1px solid #2B3A31',
            transition: 'width 220ms ease'
          }}
        >
          <ContractorWebsite
            config={targetClient.config}
            clientId={targetClient.id}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .hide-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
