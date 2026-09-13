import React from 'react';
import { Heart, Shield, Calendar, ArrowRight } from 'lucide-react';

export const MonthlyContributionPage: React.FC = () => {
  const memberName = 'Melat Tesfaye';
  const contributionAmount = 100;
  const currentMonth = 'September 2026';

  const handleChapaPayment = () => {
    // Placeholder for Chapa integration
    console.log('Proceeding to Chapa payment gateway...');
    // In production, this would redirect to Chapa's payment page
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* Header */}
      <header className="bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)] sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex items-center gap-2.5">
            <img src="/logo.jpg" alt="YegnaEdir" className="w-8 h-8 rounded-xl object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-[var(--primary)] leading-none">
                YegnaEdir
              </span>
              <span className="text-[9px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
                Member Portal
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Page Title & Message */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--primary)]">
              Monthly Contribution
            </h1>
            <p className="text-lg text-[var(--foreground)] flex items-center justify-center gap-2">
              <span>Keep our community strong</span>
              <Heart className="w-5 h-5 text-[var(--primary)]" fill="currentColor" />
            </p>
          </div>

          {/* Member Info Card */}
          <div className="rounded-2xl bg-card border border-[var(--border)] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center text-lg font-bold">
                {memberName.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[var(--foreground)]">{memberName}</h2>
                <p className="text-sm text-[var(--muted-foreground)]">{currentMonth}</p>
              </div>
            </div>
          </div>

          {/* Amount Card */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-8 shadow-sm text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.36_0.083_155_/_0.1)] border border-[var(--primary)]/20 mb-6">
              <Calendar className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-sm font-medium text-[var(--primary)]">Monthly Contribution</span>
            </div>

            <div className="mb-6">
              <div className="text-6xl sm:text-7xl font-serif font-bold text-[var(--primary)] mb-2">
                {contributionAmount} <span className="text-3xl sm:text-4xl">ETB</span>
              </div>
              <p className="text-[var(--muted-foreground)]">Monthly contribution</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
              <p className="text-sm text-[var(--foreground)]">
                Your regular contribution helps maintain our Edir's mutual support system.
                Thank you for your commitment to our community.
              </p>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="rounded-2xl bg-card border border-[var(--border)] p-6 shadow-sm">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Payment Summary
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                <span className="text-sm text-[var(--muted-foreground)]">Contribution</span>
                <span className="text-sm font-semibold text-[var(--foreground)]">{contributionAmount} ETB</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                <span className="text-sm text-[var(--muted-foreground)]">Frequency</span>
                <span className="text-sm font-semibold text-[var(--foreground)]">Monthly</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                <span className="text-sm text-[var(--muted-foreground)]">Method</span>
                <span className="text-sm font-semibold text-[var(--foreground)]">Chapa</span>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-[var(--primary)]/5 border-2 border-[var(--primary)]/20">
              <div className="flex items-center justify-between">
                <span className="text-lg font-serif font-bold text-[var(--foreground)]">Total</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[var(--primary)]">
                  {contributionAmount} ETB
                </span>
              </div>
            </div>
          </div>

          {/* Chapa Payment Button */}
          <div className="rounded-2xl bg-card border border-[var(--border)] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.1)] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                  Pay with Chapa
                </h3>
                <p className="text-xs text-[var(--muted-foreground)]">Secure payment gateway</p>
              </div>
            </div>

            <button
              onClick={handleChapaPayment}
              className="w-full py-4 px-6 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-all text-lg font-semibold flex items-center justify-center gap-3 shadow-warm"
            >
              <span>Pay {contributionAmount} ETB with Chapa</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-center text-[var(--muted-foreground)] mt-4">
              🔒 Your payment information is secure and encrypted
            </p>
          </div>

          {/* Community Message */}
          <div className="rounded-2xl bg-canopy text-white p-6 shadow-warm relative overflow-hidden text-center">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <p className="text-emerald-100 text-base">
                Thank you for supporting our community through your regular contributions.
                Together, we stand strong.
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center space-y-2 py-4">
            <p className="text-sm text-[var(--muted-foreground)]">
              Need help? Contact the Edir Committee
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Email: committee@yegnaedir.org • Phone: +251 911 234 567
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
