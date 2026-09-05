import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ContributionsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Contributions</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Your monthly contributions to the Edir fund — 100 ETB per month.
        </p>
      </div>

      {/* Contributions Overview Card */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-1">Contributions</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              100 ETB monthly, as set by the Edir committee.
            </p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
            Record a payment
          </button>
        </div>

        {/* 2026 Contributions Progress */}
        <div className="p-6 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-[var(--foreground)] text-base">2026 contributions</h4>
            <span className="text-sm text-[var(--muted-foreground)]">8 of 12 months paid</span>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-3 bg-[var(--background)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
                style={{ width: '67%' }}
              />
            </div>
          </div>

          {/* Month Pills */}
          <div className="flex flex-wrap gap-2">
            {/* Paid months - Green background */}
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">Jan</div>
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">Feb</div>
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">Mar</div>
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">Apr</div>
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">May</div>
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">Jun</div>
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">Jul</div>
            <div className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-medium">Aug</div>

            {/* Upcoming/Unpaid months - Light background */}
            <div className="px-4 py-2 rounded-lg bg-[var(--background)] text-[var(--muted-foreground)] text-sm font-medium">Sep</div>
            <div className="px-4 py-2 rounded-lg bg-[var(--background)] text-[var(--muted-foreground)] text-sm font-medium">Oct</div>
            <div className="px-4 py-2 rounded-lg bg-[var(--background)] text-[var(--muted-foreground)] text-sm font-medium">Nov</div>
            <div className="px-4 py-2 rounded-lg bg-[var(--background)] text-[var(--muted-foreground)] text-sm font-medium">Dec</div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase block mb-2">
              2026 Total
            </span>
            <div className="text-2xl font-serif font-bold text-[var(--primary)]">800 ETB</div>
          </div>
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase block mb-2">
              Remaining 2026
            </span>
            <div className="text-2xl font-serif font-bold text-[var(--primary)]">400 ETB</div>
          </div>
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase block mb-2">
              Lifetime Total
            </span>
            <div className="text-2xl font-serif font-bold text-[var(--primary)]">2,100 ETB</div>
          </div>
        </div>
      </div>

      {/* Payment History Link */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-1">Payment History</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              View detailed records of all your contributions and transactions.
            </p>
          </div>
          <button 
            onClick={() => navigate('/dashboard/payment-history')}
            className="px-5 py-2.5 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-semibold hover:bg-secondary/60 transition-all"
          >
            View history
          </button>
        </div>
      </div>
    </div>
  );
};
