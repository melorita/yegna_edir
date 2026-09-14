import React from 'react';
import { Check, Heart, Users, Shield, ArrowRight, Sparkles } from 'lucide-react';

export const MembershipPaymentPage: React.FC = () => {
  const memberName = 'Melat Tesfaye';
  const edirName = 'Bole Subcity Neighborhood Edir';
  const memberId = 'YE-0142';
  const joiningFee = 10000;

  const handleChapaPayment = () => {
    // Placeholder for Chapa integration
    console.log('Proceeding to Chapa payment gateway...');
    // In production, this would redirect to Chapa's payment page
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* Header */}
      <header className="bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)] sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex items-center gap-2.5">
            <img src="/logo.jpg" alt="YegnaEdir" className="w-8 h-8 rounded-xl object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-[var(--primary)] leading-none">
                YegnaEdir
              </span>
              <span className="text-[9px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
                Membership Portal
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Welcome Hero Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900">Registration Approved</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[var(--primary)] mb-4">
              Welcome to YegnaEdir! 🎉
            </h1>
            
            <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto">
              Your registration has been approved.<br />
              We're happy to welcome you to our neighborhood Edir community.
            </p>
            
            <p className="text-base text-[var(--muted-foreground)]">
              You're one step away from completing your membership.
            </p>
          </div>

          {/* Approval Status Card */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-serif font-bold text-emerald-900">
                    Registration Approved
                  </h3>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500 text-white text-xs font-semibold">
                    ✓ APPROVED
                  </span>
                </div>
                <p className="text-emerald-800">
                  Your membership registration has been reviewed and approved by the Edir Committee.
                  Welcome to our community!
                </p>
              </div>
            </div>
          </div>

          {/* Member Welcome Card */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center text-2xl font-bold">
                {memberName.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
                  Welcome, {memberName}
                </h2>
                <p className="text-sm text-[var(--muted-foreground)]">Member ID: {memberId}</p>
              </div>
            </div>
            
            <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
              <p className="text-[var(--foreground)]">
                Your application to join <strong>{edirName}</strong> has been approved.
                We look forward to having you as an active member of our community.
              </p>
            </div>
          </div>

          {/* Joining Fee Section */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-8 shadow-sm">
            <div className="text-center space-y-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.36_0.083_155_/_0.1)] border border-[var(--primary)]/20">
                <Shield className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-sm font-medium text-[var(--primary)]">Complete Your Membership</span>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-[var(--foreground)]">
                One-Time Membership Joining Fee
              </h2>
              
              <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
                To complete your membership, please pay the one-time joining fee.
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="text-center p-8 rounded-2xl bg-[#f5f0e8] border-2 border-[var(--primary)]/20">
                <div className="text-6xl font-serif font-bold text-[var(--primary)] mb-2">
                  {joiningFee.toLocaleString()} <span className="text-3xl">ETB</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[var(--border)]">
                  <span className="text-sm font-medium text-[var(--foreground)]">One-time joining fee</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> This is a one-time joining fee for your membership in the neighborhood Edir.
                It is not a monthly subscription.
              </p>
            </div>
          </div>

          {/* Chapa Payment Card */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.36_0.083_155_/_0.1)] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[var(--foreground)]">
                  Pay with Chapa
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">Secure payment gateway</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] mb-6">
              <p className="text-sm text-[var(--foreground)] text-center">
                You will continue to Chapa's secure checkout to complete your payment.
                Chapa accepts all major payment methods including bank transfers and mobile money.
              </p>
            </div>

            <button
              onClick={handleChapaPayment}
              className="w-full py-4 px-6 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-all text-lg font-semibold flex items-center justify-center gap-3 shadow-warm"
            >
              <span>Continue to Chapa</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-center text-[var(--muted-foreground)] mt-4">
              🔒 Your payment information is secure and encrypted
            </p>
          </div>

          {/* Community Welcome Message */}
          <div className="rounded-3xl bg-canopy text-white p-8 shadow-warm relative overflow-hidden">
            <div className="relative z-10 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white">
                Welcome to the Community
              </h3>
              
              <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
                Being part of an Edir means supporting one another during important moments in life.
                We're glad to have you with us.
              </p>
              
              <div className="flex items-center justify-center gap-2 pt-4">
                <Users className="w-5 h-5 text-emerald-200" />
                <span className="text-emerald-100 text-sm">
                  Together, we support one another
                </span>
              </div>
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
