import React, { useState } from 'react';
import { Package, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const InventoryWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'available' | 'borrowed' | 'maintenance'>('overview');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Inventory</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Manage Edir equipment, tents, chairs, and other shared resources.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-2">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Package className="w-4 h-4 inline mr-2" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('available')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'available'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Available
          </button>
          <button
            onClick={() => setActiveTab('borrowed')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'borrowed'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            In Use
          </button>
          <button
            onClick={() => setActiveTab('maintenance')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'maintenance'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <AlertTriangle className="w-4 h-4 inline mr-2" />
            Maintenance
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Total Items
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">187</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">In inventory</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Available
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">165</div>
              <div className="text-xs text-emerald-700 mt-1">Ready to use</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  In Use
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">18</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Currently borrowed</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Maintenance
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">4</div>
              <div className="text-xs text-amber-700 mt-1">Needs attention</div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Inventory Summary
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Inventory management features coming soon - track items, manage loans, schedule maintenance, etc.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'available' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Available Items
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Available inventory features coming soon - view all ready-to-use items, process loan requests, etc.
          </p>
        </div>
      )}

      {activeTab === 'borrowed' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Items In Use
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Loan tracking features coming soon - see who borrowed what, track return dates, manage overdue items, etc.
          </p>
        </div>
      )}

      {activeTab === 'maintenance' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Maintenance & Repairs
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Maintenance features coming soon - track damaged items, schedule repairs, manage replacements, etc.
          </p>
        </div>
      )}
    </div>
  );
};
