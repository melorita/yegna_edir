import React, { useState } from 'react';
import { Check, History } from 'lucide-react';

export const PaymentHistoryPage: React.FC = () => {
  const [showAllPayments, setShowAllPayments] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Payment History</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          A complete record of every payment you have made to the Edir.
        </p>
      </div>

      {/* All Payments Card */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">All payments</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAllPayments(!showAllPayments)}
              className="text-sm text-[var(--primary)] font-medium hover:underline"
            >
              {showAllPayments ? 'Show less' : 'Show more'}
            </button>
            <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-semibold hover:bg-secondary/60 transition-all">
              Download receipt
            </button>
          </div>
        </div>

        {/* Payment Records List */}
        <div className="space-y-3">
          {/* Payment 1 */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Monthly contribution — August 2026
                </h4>
                <p className="text-sm text-[var(--muted-foreground)]">28 Aug 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                Paid
              </span>
            </div>
          </div>

          {/* Payment 2 */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Monthly contribution — July 2026
                </h4>
                <p className="text-sm text-[var(--muted-foreground)]">26 Jul 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                Paid
              </span>
            </div>
          </div>

          {/* Payment 3 - Late Payment Penalty */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Late payment penalty — June 2026
                </h4>
                <p className="text-sm text-[var(--muted-foreground)]">08 Jul 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[var(--foreground)]">10 ETB</span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                Paid
              </span>
            </div>
          </div>

          {/* Payment 4 - Late */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <History className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Monthly contribution — June 2026
                </h4>
                <p className="text-sm text-[var(--muted-foreground)]">08 Jul 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
              <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                Late
              </span>
            </div>
          </div>

          {/* Payment 5 */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Monthly contribution — May 2026
                </h4>
                <p className="text-sm text-[var(--muted-foreground)]">05 May 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                Paid
              </span>
            </div>
          </div>

          {/* Payment 6 */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Monthly contribution — April 2026
                </h4>
                <p className="text-sm text-[var(--muted-foreground)]">10 Apr 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                Paid
              </span>
            </div>
          </div>

          {/* Additional payments shown when "Show more" is clicked */}
          {showAllPayments && (
            <>
              {/* Payment 7 */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                      Monthly contribution — March 2026
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">05 Mar 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                    Paid
                  </span>
                </div>
              </div>

              {/* Payment 8 */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                      Monthly contribution — February 2026
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">08 Feb 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                    Paid
                  </span>
                </div>
              </div>

              {/* Payment 9 */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                      Monthly contribution — January 2026
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">10 Jan 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                    Paid
                  </span>
                </div>
              </div>

              {/* Payment 10 */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                      Monthly contribution — December 2025
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">12 Dec 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                    Paid
                  </span>
                </div>
              </div>

              {/* Payment 11 */}
              <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                      Monthly contribution — November 2025
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">08 Nov 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-[var(--foreground)]">100 ETB</span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                    Paid
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
