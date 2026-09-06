import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { CreditCard, Coins, ClipboardList } from 'lucide-react';

export const OverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const memberDisplayName = currentUser?.fullName || 'Melat Tesfaye';

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-canopy text-white p-8 shadow-warm relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-sm text-emerald-100 mb-2">Welcome back</p>
          <h1 className="text-3xl font-serif font-normal mb-4 text-white">{memberDisplayName}</h1>
          <p className="text-sm text-emerald-100 mb-6 max-w-xl">
            Your membership is active and your contributions are up to date. Thank you for standing with
            our neighborhood Edir.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--primary)] text-sm font-semibold hover:opacity-90 transition-all">
              Pay this month
            </button>
            <button 
              onClick={() => navigate('/dashboard/requests', { state: { openForm: true } })}
              className="px-5 py-2.5 rounded-lg bg-white/15 border border-white/25 text-white text-sm font-medium hover:bg-white/20 transition-all"
            >
              Submit a request
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Membership Status
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              ✓
            </div>
          </div>
          <div className="text-xl font-serif font-bold text-[var(--primary)]">In good standing</div>
          <div className="text-xs text-emerald-700 mt-1">Eligible for assistance</div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              This Month (Sep)
            </span>
            <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--primary)]">100 ETB</div>
          <div className="text-xs text-amber-700 mt-1">Due by 10 September</div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              2026 Contributed
            </span>
            <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
              <Coins className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--primary)]">10,800 ETB</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">10,000 fee + 800 dues</div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Open Requests
            </span>
            <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
              <ClipboardList className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--primary)]">0</div>
          <div className="text-xs text-emerald-700 mt-1">2 total request history</div>
        </div>
      </div>
    </div>
  );
};
