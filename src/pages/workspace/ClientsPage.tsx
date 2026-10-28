import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Plus,
  Sliders,
  Copy,
  Trash2,
  ExternalLink,
  ChevronDown,
  ArrowUpDown,
  Filter,
  CheckCircle2,
  MoreVertical
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Modal } from '../../components/ui/Modal';
import { useClientStore } from '../../services/clientStore';
import { Client } from '../../types';

export const ClientsPage: React.FC = () => {
  const navigate = useNavigate();
  const { clients, activeClient, setActiveClient, duplicateClient, deleteClient } = useClientStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'date'>('name');

  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);

  // Filter & Sort
  const filteredClients = clients
    .filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return b.lastUpdated.localeCompare(a.lastUpdated);
    });

  const handleDuplicate = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const copy = duplicateClient(id);
    navigate(`/workspace/clients/${copy.id}`);
  };

  const handleDeleteConfirm = () => {
    if (clientToDelete) {
      deleteClient(clientToDelete.id);
      setClientToDelete(null);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.875rem', color: 'var(--color-ink)', marginBottom: '4px' }}>
            Client Directory
          </h1>
          <p style={{ color: 'var(--color-slate)', fontSize: '0.9375rem', margin: 0 }}>
            Manage contractor accounts, live website instances, SEO audit readiness, and scheduled reports.
          </p>
        </div>

        <Link to="/workspace/clients/new">
          <Button variant="primary" icon={<Plus size={16} />}>
            Add New Client
          </Button>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div
        className="surface-card"
        style={{
          padding: '16px 20px',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        {/* Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--color-ivory)',
            border: '1px solid var(--color-stone)',
            borderRadius: '8px',
            padding: '6px 12px',
            minWidth: '260px',
            flex: '1 1 260px'
          }}
        >
          <Search size={16} color="var(--color-slate)" />
          <input
            type="text"
            placeholder="Search by business name, city, or trade..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '0.875rem',
              width: '100%'
            }}
          />
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem' }}>
            <span style={{ color: 'var(--color-slate)' }}>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-select"
              style={{ padding: '6px 10px', fontSize: '0.8125rem', width: 'auto' }}
            >
              <option value="all">All Statuses ({clients.length})</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="launching">Launching</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem' }}>
            <span style={{ color: 'var(--color-slate)' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="form-select"
              style={{ padding: '6px 10px', fontSize: '0.8125rem', width: 'auto' }}
            >
              <option value="name">Business Name (A–Z)</option>
              <option value="date">Recently Updated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Client Directory Table */}
      <div
        className="surface-card"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          overflow: 'hidden'
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-ivory)', borderBottom: '1px solid var(--color-stone)' }}>
                <th style={{ padding: '14px 20px', color: 'var(--color-slate)', fontWeight: 600 }}>Business Name</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-slate)', fontWeight: 600 }}>Trade Category</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-slate)', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-slate)', fontWeight: 600 }}>SEO Readiness</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-slate)', fontWeight: 600 }}>Last Updated</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-slate)', fontWeight: 600 }}>Next Report</th>
                <th style={{ padding: '14px 20px', color: 'var(--color-slate)', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => {
                const isSelected = client.id === activeClient.id;
                return (
                  <tr
                    key={client.id}
                    onClick={() => {
                      setActiveClient(client.id);
                      navigate(`/workspace/clients/${client.id}`);
                    }}
                    style={{
                      borderBottom: '1px solid var(--color-stone-light)',
                      backgroundColor: isSelected ? 'var(--color-ivory-light)' : '#FFFFFF',
                      cursor: 'pointer',
                      transition: 'background-color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--color-ivory)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = '#FFFFFF';
                    }}
                  >
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            backgroundColor: client.config.branding.primaryColor || 'var(--color-forest)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '0.8125rem'
                          }}
                        >
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <strong style={{ color: 'var(--color-ink)', display: 'block' }}>
                            {client.name}
                          </strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>
                            {client.city}, {client.state} • {client.config.services.length} Services
                          </span>
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: '16px 20px', color: 'var(--color-slate)' }}>
                      {client.category}
                    </td>

                    <td style={{ padding: '16px 20px' }}>
                      <StatusBadge status={client.status} />
                    </td>

                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span
                          style={{
                            fontSize: '0.8125rem',
                            fontWeight: 700,
                            color: 'var(--color-forest)',
                            fontFamily: 'var(--font-heading)'
                          }}
                          className="tabular-nums"
                        >
                          {client.status === 'active' ? '98%' : client.status === 'draft' ? '82%' : '91%'}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-slate)' }}>Passed</span>
                      </div>
                    </td>

                    <td style={{ padding: '16px 20px', color: 'var(--color-slate)', fontSize: '0.8125rem' }}>
                      {client.lastUpdated}
                    </td>

                    <td style={{ padding: '16px 20px', color: 'var(--color-ink)', fontSize: '0.8125rem', fontWeight: 500 }}>
                      {client.nextReportDate}
                    </td>

                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <div
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link
                          to={`/preview?client=${client.id}`}
                          target="_blank"
                          title="Preview Live Site"
                          style={{
                            padding: '6px',
                            borderRadius: '6px',
                            color: 'var(--color-slate)',
                            backgroundColor: 'var(--color-ivory)',
                            border: '1px solid var(--color-stone)',
                            display: 'flex'
                          }}
                        >
                          <ExternalLink size={14} />
                        </Link>

                        <button
                          onClick={(e) => handleDuplicate(client.id, e)}
                          title="Duplicate Client"
                          style={{
                            padding: '6px',
                            borderRadius: '6px',
                            color: 'var(--color-slate)',
                            backgroundColor: 'var(--color-ivory)',
                            border: '1px solid var(--color-stone)',
                            display: 'flex'
                          }}
                        >
                          <Copy size={14} />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setClientToDelete(client);
                          }}
                          title="Delete Client"
                          style={{
                            padding: '6px',
                            borderRadius: '6px',
                            color: 'var(--color-error)',
                            backgroundColor: 'var(--color-error-bg)',
                            border: '1px solid var(--color-error-border)',
                            display: 'flex'
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={Boolean(clientToDelete)}
        onClose={() => setClientToDelete(null)}
        title="Confirm Client Deletion"
        description="This demo client and local configurations will be removed from browser storage."
      >
        <div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-slate)', marginBottom: '24px' }}>
            Are you sure you want to delete <strong>{clientToDelete?.name}</strong>? Any local submissions and customized styling for this client will be discarded.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Button variant="secondary" onClick={() => setClientToDelete(null)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteConfirm}>
              Yes, Delete Demo Client
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
