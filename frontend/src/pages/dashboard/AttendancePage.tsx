import React, { useState } from 'react';
import { CalendarCheck, Camera } from 'lucide-react';

export const AttendancePage: React.FC = () => {
  const [showAllRecords, setShowAllRecords] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Attendance Rate */}
        <div className="p-6 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
          <div className="mb-2">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Attendance rate
            </span>
          </div>
          <div className="text-4xl font-serif font-bold text-[var(--primary)] mb-1">67%</div>
          <div className="text-xs text-[var(--muted-foreground)]">Last 6 gatherings</div>
        </div>

        {/* Attended */}
        <div className="p-6 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
          <div className="mb-2">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Attended
            </span>
          </div>
          <div className="text-4xl font-serif font-bold text-[var(--primary)] mb-1">4</div>
          <div className="text-xs text-[var(--muted-foreground)]">Meetings & ceremonies</div>
        </div>

        {/* Missed */}
        <div className="p-6 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
          <div className="mb-2">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Missed
            </span>
          </div>
          <div className="text-4xl font-serif font-bold text-[var(--primary)] mb-1">1</div>
          <div className="text-xs text-[var(--muted-foreground)]">May incur a 10 ETB penalty</div>
        </div>
      </div>

      {/* QR Scanner Section */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-1">Scan attendance QR</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Check in when you arrive at the gathering
            </p>
          </div>
          <button
            onClick={() => setShowScanner(!showScanner)}
            className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            {showScanner ? 'Close scanner' : 'Open scanner'}
          </button>
        </div>

        {/* Scanner UI */}
        {showScanner && (
          <div className="mt-4 p-6 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="aspect-square max-w-md mx-auto bg-[var(--foreground)] rounded-xl flex items-center justify-center mb-4">
              <Camera className="w-24 h-24 text-white/40" />
            </div>
            <p className="text-center text-sm text-[var(--muted-foreground)] mb-2">
              Point your camera at the QR code displayed at the gathering
            </p>
            <div className="bg-[var(--background)] rounded-lg p-4 mt-4">
              <p className="text-xs text-[var(--muted-foreground)] mb-1">
                <span className="font-semibold text-emerald-700">Present:</span> within the first 15 minutes
              </p>
              <p className="text-xs text-[var(--muted-foreground)] mb-1">
                <span className="font-semibold text-amber-700">Late:</span> after 15 minutes but before the session closes
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                <span className="font-semibold text-rose-700">Absent:</span> no valid scan before closing
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Upcoming Gatherings */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-1">Upcoming gatherings</h3>
        <p className="text-sm text-[var(--muted-foreground)] mb-6">
          Confirm ahead so the committee can plan.
        </p>

        <div className="space-y-4">
          {/* Upcoming Event 1 */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-2">
                  Monthly general meeting
                </h4>
                <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4" />
                  30 September 2026 · 3:00 PM · Kebele 08 community hall
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap">
                  I'll attend
                </button>
                <button className="px-4 py-2 rounded-lg bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all whitespace-nowrap">
                  Request excuse
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Event 2 */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-2">
                  Annual Edir assembly
                </h4>
                <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4" />
                  18 October 2026 · 9:00 AM · Kebele 08 community hall
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap">
                  I'll attend
                </button>
                <button className="px-4 py-2 rounded-lg bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all whitespace-nowrap">
                  Request excuse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Record */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">Attendance record</h3>
          <button
            onClick={() => setShowAllRecords(!showAllRecords)}
            className="text-sm text-[var(--primary)] font-medium hover:underline"
          >
            {showAllRecords ? 'Show less' : 'Show more'}
          </button>
        </div>

        <div className="space-y-3">
          {/* Record 1 */}
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                Monthly general meeting
              </h4>
              <p className="text-xs text-[var(--muted-foreground)]">
                31 August 2026 · Kebele 08 community hall
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
              Present
            </span>
          </div>

          {/* Record 2 */}
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                Funeral support — Ato Bekele's family
              </h4>
              <p className="text-xs text-[var(--muted-foreground)]">
                12 August 2026 · Kebele 08, House 71
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
              Present
            </span>
          </div>

          {/* Record 3 */}
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                Tent setup work day
              </h4>
              <p className="text-xs text-[var(--muted-foreground)]">
                27 July 2026 · Edir store, Kebele 08
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
              Excused
            </span>
          </div>

          {/* Record 4 */}
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
            <div>
              <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                Monthly general meeting
              </h4>
              <p className="text-xs text-[var(--muted-foreground)]">
                30 June 2026 · Kebele 08 community hall
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-medium">
              Absent
            </span>
          </div>

          {/* Additional records shown when "Show more" is clicked */}
          {showAllRecords && (
            <>
              <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                    Mourning visit — Weyzero Almaz
                  </h4>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    9 June 2026 · Kebele 08, House 33
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                  Present
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                    Annual budget planning
                  </h4>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    15 May 2026 · Kebele 08 community hall
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                  Present
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
