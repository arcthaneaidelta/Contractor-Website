import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(15);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setProgress(55), 200);
    const t2 = setTimeout(() => setProgress(90), 450);
    const t3 = setTimeout(() => setProgress(100), 650);

    const t4 = setTimeout(() => {
      setIsFadingOut(true);
    }, 750);

    const t5 = setTimeout(() => {
      onComplete();
    }, 1050);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F5F0',
        color: '#253D32',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'translateY(-8px)' : 'none',
        transition: 'opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '320px',
          width: '100%',
          padding: '0 24px'
        }}
      >
        {/* Geometric Monogram */}
        <div
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#253D32',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F7F5F0',
            boxShadow: '0 4px 12px rgba(37, 61, 50, 0.12)'
          }}
        >
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <rect x="5" y="6" width="22" height="4" rx="2" fill="#F7F5F0" />
            <rect x="5" y="14" width="16" height="4" rx="2" fill="#A9B8A5" />
            <rect x="5" y="22" width="22" height="4" rx="2" fill="#F7F5F0" />
          </svg>
        </div>

        {/* Wordmark */}
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              color: '#253D32'
            }}
          >
            Contractor<span style={{ color: '#727870', fontWeight: 500 }}>OS</span>
          </span>
          <p
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#8E958C',
              margin: '4px 0 0',
              fontWeight: 600
            }}
          >
            Launch & Growth System
          </p>
        </div>

        {/* Progress Bar Container */}
        <div
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: '#E6E1D8',
            borderRadius: '999px',
            overflow: 'hidden',
            marginTop: '8px'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#253D32',
              borderRadius: '999px',
              transition: 'width 240ms ease-out'
            }}
          />
        </div>

        {/* Caption */}
        <span
          style={{
            fontSize: '0.8125rem',
            color: '#727870',
            fontWeight: 400
          }}
        >
          Preparing your workspace…
        </span>
      </div>
    </div>
  );
};
