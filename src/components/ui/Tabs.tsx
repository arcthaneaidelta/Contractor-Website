import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'underline' | 'pills';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = 'underline'
}) => {
  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: variant === 'pills' ? '6px' : '24px',
        borderBottom: variant === 'underline' ? '1px solid var(--color-stone)' : 'none',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        if (variant === 'pills') {
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--color-ivory)' : 'var(--color-slate)',
                backgroundColor: isActive ? 'var(--color-forest)' : 'transparent',
                border: '1px solid',
                borderColor: isActive ? 'var(--color-forest)' : 'transparent',
                transition: 'all var(--transition-fast)'
              }}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'var(--color-stone)',
                    color: isActive ? '#FFFFFF' : 'var(--color-ink)'
                  }}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 2px',
              fontSize: '0.9375rem',
              fontWeight: isActive ? 600 : 500,
              color: isActive ? 'var(--color-forest)' : 'var(--color-slate)',
              borderBottom: '2px solid',
              borderColor: isActive ? 'var(--color-forest)' : 'transparent',
              marginBottom: '-1px',
              transition: 'all var(--transition-fast)',
              whiteSpace: 'nowrap'
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '2px 7px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isActive ? 'var(--color-forest)' : 'var(--color-stone)',
                  color: isActive ? '#FFFFFF' : 'var(--color-slate)'
                }}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
