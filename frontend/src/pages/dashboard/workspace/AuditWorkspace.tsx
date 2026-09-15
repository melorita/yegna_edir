import React, { useState } from 'react';
import { ShieldCheck, FileText, AlertCircle, TrendingUp, Eye, Flag, CheckCircle, XCircle, Download } from 'lucide-react';

export const AuditWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'contributions' | 'expenses' | 'verification' | 'reports'>('overview');
  const [showFlagModal, setShowFlagModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Audit Center</h2>
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
            <Eye className="w-4 h-4 inline mr-2" />
            Contribution Records
          </button>
          <button
            onClick={() => setActiveTab('expenses')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'expenses'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Expense Records
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
                  <Flag className="w-4 h-4" />
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

          {/* Audit Summary */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              September 2026 Audit Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contributions Review */}
              <div className="space-y-3">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-3">Contributions Review</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Expected Payments</span>
                    <span className="text-sm font-semibold text-[var(--foreground)]">127</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Verified Paid</span>
                    <span className="text-sm font-semibold text-emerald-700">112</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Pending Verification</span>
                    <span className="text-sm font-semibold text-amber-700">3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Unpaid</span>
                    <span className="text-sm font-semibold text-rose-700">12</span>
                  </div>
                </div>
              </div>

              {/* Expenses Review */}
              <div className="space-y-3">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-3">Expenses Review</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Total Transactions</span>
                    <span className="text-sm font-semibold text-[var(--foreground)]">8</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Verified</span>
                    <span className="text-sm font-semibold text-emerald-700">5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Pending Review</span>
                    <span className="text-sm font-semibold text-amber-700">2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8]">
                    <span className="text-sm text-[var(--foreground)]">Flagged</span>
                    <span className="text-sm font-semibold text-rose-700">1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-700" />
                  <div>
                    <span className="text-sm font-semibold text-emerald-900">Verification Status</span>
                    <p className="text-xs text-emerald-700">September 2026 records are 94.7% verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Recent Audit Activity
            </h3>
            <div className="space-y-3">
              {[
                { action: 'Verified 15 member contributions', date: 'Sept 4, 2026, 2:30 PM', status: 'verified' },
                { action: 'Flagged expense transaction for review', date: 'Sept 3, 2026, 11:45 AM', status: 'flagged' },
                { action: 'Completed August 2026 audit report', date: 'Sept 1, 2026, 4:15 PM', status: 'completed' },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activity.status === 'verified' ? 'bg-emerald-100 text-emerald-700' :
                    activity.status === 'flagged' ? 'bg-rose-100 text-rose-700' :
                    'bg-[#d9e5e0] text-[var(--primary)]'
                  }`}>
                    {activity.status === 'verified' ? <CheckCircle className="w-5 h-5" /> :
                     activity.status === 'flagged' ? <Flag className="w-5 h-5" /> :
                     <FileText className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                      {activity.action}
                    </h5>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {activity.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contributions' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Contribution Records Review
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Verify and audit member contribution payments
            </p>
          </div>

          {/* Verification Status Filters */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-2">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-xl text-sm font-medium bg-[var(--primary)] text-white">
                All (127)
              </button>
              <button className="px-4 py-2 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-secondary/40">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Verified (112)
              </button>
              <button className="px-4 py-2 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-secondary/40">
                <Eye className="w-4 h-4 inline mr-2" />
                Needs Review (3)
              </button>
              <button className="px-4 py-2 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-secondary/40">
                <Flag className="w-4 h-4 inline mr-2" />
                Flagged (0)
              </button>
            </div>
          </div>

          {/* Contributions List */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-semibold text-[var(--foreground)]">
                September 2026 Contributions
              </h4>
              <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                <Download className="w-4 h-4 inline mr-2" />
                Export for Review
              </button>
            </div>

            <div className="space-y-3">
              {/* Verified Contribution */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        Melat Tesfaye (YE-0142) • 100 ETB
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Payment Date: September 1, 2026 • Method: Bank Transfer
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                          ✓ Verified
                        </span>
                        <span className="text-xs text-[var(--muted-foreground)]">
                          Verified on Sept 1, 2026 by Auditor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Needs Review */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        Tigist Alemayehu (YE-0115) • 100 ETB
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Payment Date: September 3, 2026 • Method: Cash
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                          Pending Review
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition-all">
                          <CheckCircle className="w-4 h-4 inline mr-2" />
                          Verify
                        </button>
                        <button 
                          onClick={() => setShowFlagModal(true)}
                          className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 text-sm font-medium hover:bg-rose-200 transition-all"
                        >
                          <Flag className="w-4 h-4 inline mr-2" />
                          Flag Issue
                        </button>
                        <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* More verified entries */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        Abebe Kebede (YE-0098) • 100 ETB
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Payment Date: September 2, 2026 • Method: Mobile Money
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                          ✓ Verified
                        </span>
                        <span className="text-xs text-[var(--muted-foreground)]">
                          Verified on Sept 2, 2026 by Auditor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'expenses' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Expense Records Review
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Audit and verify all expense transactions
            </p>
          </div>

          {/* Expense Records */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-semibold text-[var(--foreground)]">
                September 2026 Expenses
              </h4>
              <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                <Download className="w-4 h-4 inline mr-2" />
                Export Records
              </button>
            </div>

            <div className="space-y-3">
              {/* Verified Expense */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        Funeral Support • 2,000 ETB
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Date: September 3, 2026 • Category: Member Support
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Description: Funeral assistance for Alemayehu Family
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                          ✓ Verified
                        </span>
                        <span className="text-xs text-[var(--muted-foreground)]">
                          Verified on Sept 3, 2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flagged Expense */}
              <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                      <Flag className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        Administrative Cost • 1,200 ETB
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Date: September 2, 2026 • Category: Administrative
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Description: Office supplies and printing
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-medium">
                          🚩 Flagged
                        </span>
                        <span className="text-xs text-rose-700 font-medium">
                          Reason: Amount exceeds typical administrative costs
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-rose-200 mb-3">
                        <p className="text-xs text-[var(--muted-foreground)] mb-1">
                          <strong>Auditor Note:</strong>
                        </p>
                        <p className="text-sm text-[var(--foreground)]">
                          This expense is significantly higher than usual monthly administrative costs (avg: 400 ETB). Requires supporting documentation and committee approval verification.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition-all">
                          <CheckCircle className="w-4 h-4 inline mr-2" />
                          Resolve & Verify
                        </button>
                        <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                          Request Documents
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Review */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        Equipment Repair • 800 ETB
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Date: September 1, 2026 • Category: Maintenance
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        Description: Chair and table repairs
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                          Pending Review
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition-all">
                          <CheckCircle className="w-4 h-4 inline mr-2" />
                          Verify
                        </button>
                        <button 
                          onClick={() => setShowFlagModal(true)}
                          className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 text-sm font-medium hover:bg-rose-200 transition-all"
                        >
                          <Flag className="w-4 h-4 inline mr-2" />
                          Flag Issue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'verification' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Transaction Verification
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Check for inconsistencies and verify financial records
            </p>
          </div>

          {/* Inconsistency Checks */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Automated Inconsistency Checks
            </h4>
            <div className="space-y-3">
              {[
                { check: 'Duplicate Payments', result: 'No issues found', status: 'pass' },
                { check: 'Missing Receipts', result: '2 transactions missing documentation', status: 'warning' },
                { check: 'Balance Reconciliation', result: 'All balances match', status: 'pass' },
                { check: 'Late Fee Calculations', result: '1 discrepancy found', status: 'warning' },
                { check: 'Unusual Transaction Amounts', result: '1 expense exceeds normal range', status: 'warning' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    item.status === 'pass' 
                      ? 'bg-emerald-50 border-emerald-200' 
                      : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.status === 'pass'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status === 'pass' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {item.check}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {item.result}
                      </p>
                    </div>
                  </div>
                  {item.status === 'warning' && (
                    <button className="px-4 py-2 rounded-xl bg-amber-100 text-amber-800 text-sm font-medium hover:bg-amber-200 transition-all">
                      Review
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Financial Balance Check */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Financial Balance Verification
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#f5f0e8] text-center">
                  <p className="text-xs text-[var(--muted-foreground)] mb-1">Opening Balance</p>
                  <p className="text-xl font-bold text-[var(--foreground)]">475,800 ETB</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 text-center">
                  <p className="text-xs text-[var(--muted-foreground)] mb-1">Income (Sept)</p>
                  <p className="text-xl font-bold text-emerald-700">+12,400 ETB</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50 text-center">
                  <p className="text-xs text-[var(--muted-foreground)] mb-1">Expenses (Sept)</p>
                  <p className="text-xl font-bold text-rose-700">-3,000 ETB</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 mb-1">Expected Closing Balance</p>
                  <p className="text-2xl font-bold">485,200 ETB</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-700" />
                <div>
                  <p className="font-medium text-emerald-900 text-sm">Balance Verified</p>
                  <p className="text-xs text-emerald-700">Treasurer's reported balance matches audit calculation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Audit Reports
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Generate and manage audit reports
            </p>
          </div>

          {/* Report Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Monthly Audit Report', desc: 'Comprehensive monthly financial audit', icon: FileText },
              { title: 'Quarterly Review', desc: 'Three-month financial review and analysis', icon: TrendingUp },
              { title: 'Annual Audit', desc: 'Full year audit and compliance report', icon: ShieldCheck },
              { title: 'Flag Summary', desc: 'Report of all flagged transactions', icon: Flag },
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
                  <FileText className="w-4 h-4 inline mr-2" />
                  Generate Report
                </button>
              </div>
            ))}
          </div>

          {/* Generated Reports */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Recent Audit Reports
            </h4>
            <div className="space-y-3">
              {[
                { name: 'August 2026 Monthly Audit.pdf', date: 'Sept 1, 2026', size: '428 KB', status: 'Completed' },
                { name: 'Q2 2026 Quarterly Review.pdf', date: 'July 5, 2026', size: '1.2 MB', status: 'Completed' },
                { name: 'July 2026 Monthly Audit.pdf', date: 'Aug 1, 2026', size: '392 KB', status: 'Completed' },
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
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {file.name}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {file.date} • {file.size} • {file.status}
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

      {/* Flag Modal (simplified) */}
      {showFlagModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full">
            <h4 className="font-serif font-semibold text-[var(--foreground)] text-lg mb-4">
              Flag Transaction
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Reason for Flag *
                </label>
                <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                  <option>Missing Documentation</option>
                  <option>Amount Discrepancy</option>
                  <option>Unusual Transaction</option>
                  <option>Duplicate Entry</option>
                  <option>Policy Violation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the issue..."
                  className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 px-5 py-2 rounded-xl bg-rose-100 text-rose-800 text-sm font-semibold hover:bg-rose-200 transition-all">
                Flag Transaction
              </button>
              <button
                onClick={() => setShowFlagModal(false)}
                className="flex-1 px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
