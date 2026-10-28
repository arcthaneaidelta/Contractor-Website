import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  maxHeight?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'json',
  maxHeight = '360px',
  filename
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn('Copy failed', e);
    }
  };

  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-stone)',
        overflow: 'hidden',
        backgroundColor: '#1E2320',
        color: '#E8EBE9',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8125rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: '#161917',
          borderBottom: '1px solid #2B332E',
          fontSize: '0.75rem',
          color: '#9EABA2'
        }}
      >
        <span style={{ fontWeight: 600 }}>{filename || language.toUpperCase()}</span>
        <button
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: copied ? '#68D391' : '#CBD5E0',
            fontSize: '0.75rem',
            padding: '3px 8px',
            borderRadius: '4px',
            backgroundColor: '#242B26'
          }}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre
        style={{
          margin: 0,
          padding: '16px',
          overflowX: 'auto',
          maxHeight,
          lineHeight: 1.5,
          whiteSpace: 'pre',
          tabSize: 2
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};
