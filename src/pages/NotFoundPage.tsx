import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutDashboard, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-ivory)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center'
      }}
    >
      <div
        className="surface-card"
        style={{
          maxWidth: '520px',
          padding: '48px 36px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            backgroundColor: 'var(--color-ivory)',
            color: 'var(--color-forest)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            border: '1px solid var(--color-stone)'
          }}
        >
          <Globe size={24} />
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: 'var(--color-slate)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          404 — Route Not Found
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            color: 'var(--color-ink)',
            margin: '12px 0 16px',
            fontWeight: 400
          }}
        >
          This blueprint does not exist.
        </h1>

        <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '28px' }}>
          The requested path does not map to an active contractor template route or workspace module.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/">
            <Button variant="secondary" icon={<ArrowLeft size={15} />}>
              Return to Marketing Site
            </Button>
          </Link>
          <Link to="/workspace">
            <Button variant="primary" icon={<LayoutDashboard size={15} />}>
              Open Operations Workspace
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
