import React from 'react';
import { CheckCircle2, AlertCircle, Clock, ShieldCheck, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: string;
  label?: string;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, size = 'sm' }) => {
  const norm = status.toLowerCase();

  let badgeClass = 'badge-stone';
  let Icon = Clock;
  let text = label || status;

  if (norm === 'active' || norm === 'passed' || norm === 'success' || norm === 'published') {
    badgeClass = 'badge-success';
    Icon = CheckCircle2;
    if (!label) text = norm === 'active' ? 'Active' : norm === 'passed' ? 'Passed' : 'Success';
  } else if (norm === 'draft' || norm === 'not-configured' || norm === 'pending') {
    badgeClass = 'badge-stone';
    Icon = Clock;
    if (!label) text = norm === 'draft' ? 'Draft' : 'Not Configured';
  } else if (norm === 'launching' || norm === 'needs-attention' || norm === 'warning') {
    badgeClass = 'badge-warning';
    Icon = AlertCircle;
    if (!label) text = norm === 'launching' ? 'Launching' : 'Needs Attention';
  } else if (norm === 'failed' || norm === 'error') {
    badgeClass = 'badge-error';
    Icon = XCircle;
    if (!label) text = 'Failed';
  } else if (norm === 'production') {
    badgeClass = 'badge-forest';
    Icon = ShieldCheck;
    if (!label) text = 'Production';
  }

  const isSmall = size === 'sm';

  return (
    <span
      className={`badge ${badgeClass}`}
      style={{
        padding: isSmall ? '3px 8px' : '5px 12px',
        fontSize: isSmall ? '0.75rem' : '0.8125rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px'
      }}
    >
      <Icon size={isSmall ? 13 : 15} />
      <span>{text}</span>
    </span>
  );
};
