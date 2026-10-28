import { useState, useEffect } from 'react';
import { Client, ContactSubmission } from '../types';
import { INITIAL_CLIENTS } from '../data/demoClients';

const STORAGE_KEY_CLIENTS = 'contractor_os_clients_v1';
const STORAGE_KEY_ACTIVE = 'contractor_os_active_client_id_v1';
const STORAGE_KEY_SUBMISSIONS = 'contractor_os_submissions_v1';

// Custom event name for cross-component reactivity
const STORE_CHANGE_EVENT = 'contractor_os_store_change';

function getStoredClients(): Client[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CLIENTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse stored clients, using defaults', e);
  }
  return INITIAL_CLIENTS;
}

function getStoredActiveId(): string {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACTIVE);
    if (raw) return raw;
  } catch (e) {
    // fallback
  }
  return 'oakline-renovation';
}

function getStoredSubmissions(): ContactSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    // fallback
  }
  return [];
}

function notifySubscribers() {
  window.dispatchEvent(new CustomEvent(STORE_CHANGE_EVENT));
}

export const ClientStore = {
  getClients(): Client[] {
    return getStoredClients();
  },

  getClient(id: string): Client | undefined {
    const list = getStoredClients();
    return list.find(c => c.id === id);
  },

  getActiveClientId(): string {
    return getStoredActiveId();
  },

  getActiveClient(): Client {
    const id = getStoredActiveId();
    const client = this.getClient(id);
    if (client) return client;
    const clients = getStoredClients();
    return clients[0] || INITIAL_CLIENTS[0];
  },

  setActiveClientId(id: string) {
    localStorage.setItem(STORAGE_KEY_ACTIVE, id);
    notifySubscribers();
  },

  saveClients(clients: Client[]) {
    localStorage.setItem(STORAGE_KEY_CLIENTS, JSON.stringify(clients));
    notifySubscribers();
  },

  updateClient(id: string, updates: Partial<Client>): Client {
    const clients = getStoredClients();
    const index = clients.findIndex(c => c.id === id);
    if (index === -1) throw new Error(`Client ${id} not found`);

    const updated: Client = {
      ...clients[index],
      ...updates,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    clients[index] = updated;
    this.saveClients(clients);
    return updated;
  },

  updateClientConfig(id: string, configUpdates: Partial<Client['config']>): Client {
    const client = this.getClient(id);
    if (!client) throw new Error(`Client ${id} not found`);

    const updatedConfig = {
      ...client.config,
      ...configUpdates,
      business: {
        ...client.config.business,
        ...(configUpdates.business || {})
      },
      branding: {
        ...client.config.branding,
        ...(configUpdates.branding || {})
      },
      seo: {
        ...client.config.seo,
        ...(configUpdates.seo || {})
      },
      netlifyForm: {
        ...client.config.netlifyForm,
        ...(configUpdates.netlifyForm || {})
      }
    };

    return this.updateClient(id, { config: updatedConfig });
  },

  addClient(newClient: Client) {
    const clients = getStoredClients();
    const updated = [newClient, ...clients];
    this.saveClients(updated);
    this.setActiveClientId(newClient.id);
  },

  duplicateClient(id: string): Client {
    const client = this.getClient(id);
    if (!client) throw new Error('Client not found');

    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const newId = `${client.slug}-copy-${randomSuffix}`;
    const duplicated: Client = {
      ...client,
      id: newId,
      name: `${client.name} (Copy)`,
      slug: `${client.slug}-copy`,
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      conversionsCount: 0,
      config: {
        ...client.config,
        business: {
          ...client.config.business,
          name: `${client.config.business.name} (Copy)`
        },
        branding: {
          ...client.config.branding,
          logoText: `${client.config.branding.logoText} (Copy)`
        }
      }
    };

    this.addClient(duplicated);
    return duplicated;
  },

  deleteClient(id: string) {
    const clients = getStoredClients();
    const filtered = clients.filter(c => c.id !== id);
    this.saveClients(filtered);
    if (this.getActiveClientId() === id) {
      if (filtered.length > 0) {
        this.setActiveClientId(filtered[0].id);
      }
    }
  },

  recordSubmission(submission: Omit<ContactSubmission, 'id' | 'submittedAt' | 'referenceNumber'>): ContactSubmission {
    const id = `sub-${Date.now()}`;
    const refNum = `OS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullSubmission: ContactSubmission = {
      ...submission,
      id,
      submittedAt: new Date().toISOString(),
      referenceNumber: refNum
    };

    const subs = getStoredSubmissions();
    const updatedSubs = [fullSubmission, ...subs];
    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(updatedSubs));

    // Increment client conversion count
    const client = this.getClient(submission.clientId);
    if (client) {
      this.updateClient(client.id, {
        conversionsCount: (client.conversionsCount || 0) + 1
      });
    }

    notifySubscribers();
    return fullSubmission;
  },

  getSubmissions(clientId?: string): ContactSubmission[] {
    const subs = getStoredSubmissions();
    if (clientId) {
      return subs.filter(s => s.clientId === clientId);
    }
    return subs;
  },

  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEY_CLIENTS);
    localStorage.removeItem(STORAGE_KEY_ACTIVE);
    localStorage.removeItem(STORAGE_KEY_SUBMISSIONS);
    notifySubscribers();
  }
};

// React hook for observing changes across the application
export function useClientStore() {
  const [clients, setClients] = useState<Client[]>(ClientStore.getClients());
  const [activeClient, setActiveClient] = useState<Client>(ClientStore.getActiveClient());
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(ClientStore.getSubmissions());

  useEffect(() => {
    const handleChange = () => {
      setClients(ClientStore.getClients());
      setActiveClient(ClientStore.getActiveClient());
      setSubmissions(ClientStore.getSubmissions());
    };

    window.addEventListener(STORE_CHANGE_EVENT, handleChange);
    window.addEventListener('storage', handleChange);

    return () => {
      window.removeEventListener(STORE_CHANGE_EVENT, handleChange);
      window.removeEventListener('storage', handleChange);
    };
  }, []);

  return {
    clients,
    activeClient,
    submissions,
    setActiveClient: (id: string) => ClientStore.setActiveClientId(id),
    updateClient: (id: string, updates: Partial<Client>) => ClientStore.updateClient(id, updates),
    updateClientConfig: (id: string, updates: Partial<Client['config']>) => ClientStore.updateClientConfig(id, updates),
    addClient: (c: Client) => ClientStore.addClient(c),
    duplicateClient: (id: string) => ClientStore.duplicateClient(id),
    deleteClient: (id: string) => ClientStore.deleteClient(id),
    recordSubmission: (sub: Omit<ContactSubmission, 'id' | 'submittedAt' | 'referenceNumber'>) => ClientStore.recordSubmission(sub),
    resetToDefaults: () => ClientStore.resetToDefaults()
  };
}
