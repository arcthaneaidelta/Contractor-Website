import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, LayoutDashboard, Eye } from 'lucide-react';
import { Button } from '../ui/Button';

export const MarketingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(247, 245, 240, 0.95)' : 'rgba(247, 245, 240, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--color-stone)' : 'transparent'}`,
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal)'
      }}
    >
      <div
        className="container-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px'
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: 'var(--color-forest)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-ivory)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <rect x="5" y="6" width="22" height="4" rx="2" fill="#F7F5F0" />
              <rect x="5" y="14" width="16" height="4" rx="2" fill="#A9B8A5" />
              <rect x="5" y="22" width="22" height="4" rx="2" fill="#F7F5F0" />
            </svg>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.1875rem',
                letterSpacing: '-0.02em',
                color: 'var(--color-forest)'
              }}
            >
              Contractor<span style={{ color: 'var(--color-slate)', fontWeight: 500 }}>OS</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          <a
            href="#platform"
            style={{
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'var(--color-ink)'
            }}
          >
            Platform
          </a>
          <a
            href="#workflow"
            style={{
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'var(--color-ink)'
            }}
          >
            How it works
          </a>
          <a
            href="#live-preview"
            style={{
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'var(--color-ink)'
            }}
          >
            Live preview
          </a>
          <a
            href="#reporting"
            style={{
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'var(--color-ink)'
            }}
          >
            Reporting
          </a>
        </nav>

        {/* Desktop Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '12px'
          }}
          className="desktop-actions"
        >
          <Link to="/workspace">
            <Button variant="secondary" size="sm" icon={<LayoutDashboard size={15} />}>
              Explore workspace
            </Button>
          </Link>
          <Link to="/preview">
            <Button variant="primary" size="sm" icon={<Eye size={15} />}>
              View live demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-stone)',
            color: 'var(--color-ink)',
            backgroundColor: 'var(--color-white)'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--color-stone)',
            backgroundColor: 'var(--color-ivory)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'slideDown 180ms ease-out'
          }}
        >
          <a
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 500, padding: '8px 0' }}
          >
            Platform
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 500, padding: '8px 0' }}
          >
            How it works
          </a>
          <a
            href="#live-preview"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 500, padding: '8px 0' }}
          >
            Live preview
          </a>
          <a
            href="#reporting"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 500, padding: '8px 0' }}
          >
            Reporting
          </a>
          <div className="divider" style={{ margin: '8px 0' }} />
          <Link to="/workspace" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="secondary" style={{ width: '100%' }} icon={<LayoutDashboard size={16} />}>
              Explore workspace
            </Button>
          </Link>
          <Link to="/preview" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" style={{ width: '100%' }} icon={<ArrowUpRight size={16} />}>
              View live demo
            </Button>
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
