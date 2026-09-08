import React, { useState } from 'react';
import { Users, TrendingUp, Calendar, ClipboardList, Settings } from 'lucide-react';

export const ChairpersonWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'meetings' | 'requests' | 'settings'>('overview');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Edir Management</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Chairperson workspace for managing Edir operations, members, and meetings.
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
            onClick={() => setActiveTab('members')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'members'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Members
          </button>
          <button
            onClick={() => setActiveTab('meetings')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'meetings'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Meetings
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'requests'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <ClipboardList className="w-4 h-4 inline mr-2" />
            Important Requests
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'settings'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Settings className="w-4 h-4 inline mr-2" />
            Leadership
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
                  Total Members
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">127</div>
              <div className="text-xs text-emerald-700 mt-1">+3 this month</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Active Members
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">124</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">97.6% active rate</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Pending Requests
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <ClipboardList className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">7</div>
              <div className="text-xs text-amber-700 mt-1">Needs review</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Next Meeting
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">Sept 10</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">6 days away</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">Schedule Meeting</h4>
                <p className="text-xs text-[var(--muted-foreground)]">Set up next committee meeting</p>
              </button>
              <button className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">Review Requests</h4>
                <p className="text-xs text-[var(--muted-foreground)]">7 pending assistance requests</p>
              </button>
              <button className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">Member Applications</h4>
                <p className="text-xs text-[var(--muted-foreground)]">2 new member applications</p>
              </button>
              <button className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">Send Announcement</h4>
                <p className="text-xs text-[var(--muted-foreground)]">Notify all members</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'members' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Member Management
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Member management features coming soon - view all members, manage applications, track contributions, etc.
          </p>
        </div>
      )}

      {activeTab === 'meetings' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Meetings & Gatherings
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Meeting management features coming soon - schedule meetings, track attendance, manage agendas, etc.
          </p>
        </div>
      )}

      {activeTab === 'requests' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Important Requests
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Request review features coming soon - approve/reject assistance requests, financial aid, equipment loans, etc.
          </p>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Leadership & Roles
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Leadership management features coming soon - assign committee roles, manage permissions, etc.
          </p>
        </div>
      )}
    </div>
  );
};
