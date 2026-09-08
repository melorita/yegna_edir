import React, { useState } from 'react';
import { ShieldCheck, FileText, AlertCircle, TrendingUp } from 'lucide-react';

export const AuditWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'records' | 'verification' | 'reports'>('overview');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Audit Center</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Review financial records, verify transactions, and ensure Edir compliance.
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
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'records'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Financial Records
          </button>
          <button
            onClick={() => setActiveTab('verification')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'verification'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <ShieldCheck className="w-4 h-4 inline mr-2" />
            Verification
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'reports'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <AlertCircle className="w-4 h-4 inline mr-2" />
            Audit Reports
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
                  Verified (Sept)
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">142</div>
              <div className="text-xs text-emerald-700 mt-1">Transactions verified</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Pending Review
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">8</div>
              <div className="text-xs text-amber-700 mt-1">Needs verification</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Flagged Items
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <AlertCircle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">2</div>
              <div className="text-xs text-rose-700 mt-1">Requires attention</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Audit Reports
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">12</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Completed this year</div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Audit Dashboard
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Audit overview features coming soon - track verification progress, review flagged items, etc.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'records' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Financial Records Review
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Financial records features coming soon - review all transactions, contributions, expenses, etc.
          </p>
        </div>
      )}

      {activeTab === 'verification' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Transaction Verification
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Verification features coming soon - verify transactions, flag discrepancies, track compliance, etc.
          </p>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Audit Reports
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Reporting features coming soon - generate audit reports, compliance summaries, findings documentation, etc.
          </p>
        </div>
      )}
    </div>
  );
};
