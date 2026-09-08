import React, { useState } from 'react';
import { DollarSign, TrendingUp, FileText, Users } from 'lucide-react';

export const FinanceWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'contributions' | 'expenses' | 'reports'>('overview');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Finance</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Treasurer workspace for managing Edir finances, contributions, and expenses.
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
            onClick={() => setActiveTab('contributions')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'contributions'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Contributions
          </button>
          <button
            onClick={() => setActiveTab('expenses')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'expenses'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <DollarSign className="w-4 h-4 inline mr-2" />
            Expenses
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'reports'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Reports
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
                  Total Balance
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">485,200 ETB</div>
              <div className="text-xs text-emerald-700 mt-1">+12,400 this month</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  This Month
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">12,400 ETB</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">From contributions</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Pending Payments
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">15</div>
              <div className="text-xs text-amber-700 mt-1">Members haven't paid</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Expenses (Sept)
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">3,200 ETB</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">8 transactions</div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Financial Summary
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Finance dashboard features coming soon - view detailed financial overview, track trends, etc.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'contributions' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Member Contributions
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Contributions management features coming soon - track member payments, send reminders, manage late fees, etc.
          </p>
        </div>
      )}

      {activeTab === 'expenses' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Expenses Management
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Expense tracking features coming soon - record expenses, categorize spending, approve disbursements, etc.
          </p>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Financial Reports
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Reporting features coming soon - generate monthly reports, annual summaries, budget forecasts, etc.
          </p>
        </div>
      )}
    </div>
  );
};
