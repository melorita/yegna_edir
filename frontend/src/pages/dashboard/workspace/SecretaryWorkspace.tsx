import React, { useState } from 'react';
import { FileText, Users, Calendar, Megaphone } from 'lucide-react';

export const SecretaryWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'records' | 'meetings' | 'communications'>('overview');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Secretary Workspace</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Manage member records, meeting minutes, and communications.
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
            Overview
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'records'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Member Records
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
            Meetings & Minutes
          </button>
          <button
            onClick={() => setActiveTab('communications')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'communications'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Megaphone className="w-4 h-4 inline mr-2" />
            Communications
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Total Records
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">127</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Member records</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Meeting Minutes
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">48</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Documented meetings</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Announcements
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Megaphone className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">12</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">This month</div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Recent Activity
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Secretary workspace features coming soon - track recent updates, pending tasks, etc.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'records' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Member Records Management
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Member records features coming soon - view/edit member information, track changes, generate reports, etc.
          </p>
        </div>
      )}

      {activeTab === 'meetings' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Meetings & Minutes
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Meeting documentation features coming soon - record meeting minutes, track decisions, manage attendance, etc.
          </p>
        </div>
      )}

      {activeTab === 'communications' && (
        <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
            Communications Management
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Communications features coming soon - draft announcements, send notifications, manage member correspondence, etc.
          </p>
        </div>
      )}
    </div>
  );
};
