import React, { useState } from 'react';
import { DollarSign, TrendingUp, FileText, Users, Plus, Search, Download, Filter, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export const FinanceWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'contributions' | 'expenses' | 'reports'>('overview');
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const [contributionFilter, setContributionFilter] = useState<'all' | 'paid' | 'unpaid' | 'late'>('all');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Finance Management</h2>
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
          {/* Financial Stats Grid */}
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
                  September Income
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
                  Paid Members
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">112</div>
              <div className="text-xs text-emerald-700 mt-1">out of 127 members</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Pending
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <AlertCircle className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">15</div>
              <div className="text-xs text-amber-700 mt-1">Members haven't paid</div>
            </div>
          </div>

          {/* Monthly Summary */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                September 2026 Summary
              </h3>
              <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                <Download className="w-4 h-4 inline mr-2" />
                Export PDF
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Income Section */}
              <div className="space-y-3">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-3">Income</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Member Contributions</span>
                    <span className="text-sm font-semibold text-emerald-700">+11,200 ETB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Late Fees</span>
                    <span className="text-sm font-semibold text-emerald-700">+800 ETB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Other Income</span>
                    <span className="text-sm font-semibold text-emerald-700">+400 ETB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-100 border-2 border-emerald-200">
                    <span className="text-sm font-semibold text-emerald-900">Total Income</span>
                    <span className="text-base font-bold text-emerald-900">12,400 ETB</span>
                  </div>
                </div>
              </div>

              {/* Expenses Section */}
              <div className="space-y-3">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-3">Expenses</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Funeral Support</span>
                    <span className="text-sm font-semibold text-rose-700">-2,000 ETB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Maintenance</span>
                    <span className="text-sm font-semibold text-rose-700">-800 ETB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Administrative</span>
                    <span className="text-sm font-semibold text-rose-700">-400 ETB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-rose-100 border-2 border-rose-200">
                    <span className="text-sm font-semibold text-rose-900">Total Expenses</span>
                    <span className="text-base font-bold text-rose-900">3,200 ETB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--primary)] text-white">
                <span className="text-base font-semibold">Net Change (September)</span>
                <span className="text-xl font-bold">+9,200 ETB</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                onClick={() => setActiveTab('contributions')}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Users className="w-4 h-4 inline mr-2" />
                  Track Contributions
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">15 members pending payment</p>
              </button>
              <button 
                onClick={() => {
                  setActiveTab('expenses');
                  setShowAddExpenseForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Plus className="w-4 h-4 inline mr-2" />
                  Record Expense
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Log new transaction</p>
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Generate Report
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Monthly financial summary</p>
              </button>
              <button className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  View Trends
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Analyze financial data</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contributions' && (
        <div className="space-y-6">
          {/* Header with Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Member Contributions
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Track all member payments and pending contributions
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                <Download className="w-4 h-4 inline mr-2" />
                Export
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setContributionFilter('all')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  contributionFilter === 'all'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-secondary/40'
                }`}
              >
                All Members (127)
              </button>
              <button
                onClick={() => setContributionFilter('paid')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  contributionFilter === 'paid'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-secondary/40'
                }`}
              >
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Paid (112)
              </button>
              <button
                onClick={() => setContributionFilter('unpaid')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  contributionFilter === 'unpaid'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-secondary/40'
                }`}
              >
                <Clock className="w-4 h-4 inline mr-2" />
                Unpaid (15)
              </button>
              <button
                onClick={() => setContributionFilter('late')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  contributionFilter === 'late'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-secondary/40'
                }`}
              >
                <AlertCircle className="w-4 h-4 inline mr-2" />
                Late (3)
              </button>
            </div>
          </div>

          {/* Contributions List */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-semibold text-[var(--foreground)]">
                September 2026 Contributions
              </h4>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search members..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>

            <div className="space-y-3">
              {contributionFilter !== 'late' && (
                <>
                  {/* Paid Members */}
                  {(contributionFilter === 'all' || contributionFilter === 'paid') && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                              Melat Tesfaye (YE-0142)
                            </h5>
                            <p className="text-xs text-[var(--muted-foreground)]">
                              Paid on September 1, 2026
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base font-semibold text-[var(--foreground)]">100 ETB</span>
                          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                            Paid
                          </span>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                              Abebe Kebede (YE-0098)
                            </h5>
                            <p className="text-xs text-[var(--muted-foreground)]">
                              Paid on September 2, 2026
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base font-semibold text-[var(--foreground)]">100 ETB</span>
                          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                            Paid
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Unpaid Members */}
                  {(contributionFilter === 'all' || contributionFilter === 'unpaid') && (
                    <>
                      <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                              Tigist Alemayehu (YE-0115)
                            </h5>
                            <p className="text-xs text-[var(--muted-foreground)]">
                              Due by September 10, 2026
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base font-semibold text-[var(--foreground)]">100 ETB</span>
                          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                            Pending
                          </span>
                          <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-all">
                            Record Payment
                          </button>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                              Dawit Haile (YE-0087)
                            </h5>
                            <p className="text-xs text-[var(--muted-foreground)]">
                              Due by September 10, 2026
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base font-semibold text-[var(--foreground)]">100 ETB</span>
                          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                            Pending
                          </span>
                          <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-all">
                            Record Payment
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Late Members */}
              {(contributionFilter === 'all' || contributionFilter === 'late') && (
                <>
                  <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                          Samuel Girma (YE-0054)
                        </h5>
                        <p className="text-xs text-rose-700 font-medium">
                          Late • Due was September 10, 2026
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-base font-semibold text-[var(--foreground)]">110 ETB</span>
                      <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-medium">
                        Late +10 ETB
                      </span>
                      <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-all">
                        Record Payment
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'expenses' && (
        <div className="space-y-6">
          {/* Header with Add Button */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Expenses Management
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Record and track all Edir expenses
              </p>
            </div>
            <button
              onClick={() => setShowAddExpenseForm(!showAddExpenseForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Add Expense
            </button>
          </div>

          {/* Add Expense Form */}
          {showAddExpenseForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Record New Expense
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Category *
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>Funeral Support</option>
                    <option>Equipment Purchase</option>
                    <option>Maintenance & Repairs</option>
                    <option>Administrative Costs</option>
                    <option>Meeting Expenses</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Amount (ETB) *
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Paid To
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Member name, Vendor"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Description *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the expense..."
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                  Record Expense
                </button>
                <button
                  onClick={() => setShowAddExpenseForm(false)}
                  className="px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Expenses List */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-semibold text-[var(--foreground)]">
                Recent Expenses
              </h4>
              <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                <Filter className="w-4 h-4 inline mr-2" />
                Filter
              </button>
            </div>

            <div className="space-y-3">
              {[
                { category: 'Funeral Support', amount: 2000, date: 'Sept 3, 2026', paidTo: 'Alemayehu Family', desc: 'Funeral assistance for late member' },
                { category: 'Maintenance', amount: 800, date: 'Sept 1, 2026', paidTo: 'Repair Shop', desc: 'Chair and table repairs' },
                { category: 'Administrative', amount: 400, date: 'Aug 30, 2026', paidTo: 'Print Shop', desc: 'Meeting materials printing' },
                { category: 'Equipment', amount: 1500, date: 'Aug 25, 2026', paidTo: 'Equipment Supplier', desc: 'New plastic chairs (x15)' },
              ].map((expense, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-start justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        {expense.category} • {expense.amount} ETB
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)] mb-1">
                        {expense.desc}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {expense.date} • Paid to: {expense.paidTo}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Financial Reports
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Generate and export financial summaries
            </p>
          </div>

          {/* Report Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Monthly Summary', desc: 'Income, expenses, and balance for selected month', icon: FileText },
              { title: 'Annual Report', desc: 'Yearly financial overview and statistics', icon: TrendingUp },
              { title: 'Member Contributions', desc: 'Detailed member payment history', icon: Users },
              { title: 'Expense Breakdown', desc: 'Categorized expense analysis', icon: DollarSign },
            ].map((report, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-[var(--border)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                    <report.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[var(--foreground)] text-base mb-1">
                      {report.title}
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {report.desc}
                    </p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                  <Download className="w-4 h-4 inline mr-2" />
                  Generate Report
                </button>
              </div>
            ))}
          </div>

          {/* Recent Reports */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Generated Reports
            </h4>
            <div className="space-y-3">
              {[
                { name: 'August 2026 Monthly Summary.pdf', date: 'Sept 1, 2026', size: '324 KB' },
                { name: '2026 Q2 Report.pdf', date: 'July 1, 2026', size: '892 KB' },
                { name: 'July 2026 Monthly Summary.pdf', date: 'Aug 1, 2026', size: '298 KB' },
              ].map((file, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm">
                        {file.name}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {file.date} • {file.size}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
