import React, { useState } from 'react';
import { Users, TrendingUp, Calendar, ClipboardList, Settings, Plus, Search, Eye, CheckCircle, XCircle, UserPlus, Megaphone } from 'lucide-react';

export const ChairpersonWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'meetings' | 'requests' | 'announcements' | 'leadership'>('overview');
  const [showScheduleMeetingForm, setShowScheduleMeetingForm] = useState(false);
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  const [showAssignRoleModal, setShowAssignRoleModal] = useState(false);

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
            Major Requests
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'announcements'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Megaphone className="w-4 h-4 inline mr-2" />
            Announcements
          </button>
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'leadership'
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
                  Pending Actions
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <ClipboardList className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">7</div>
              <div className="text-xs text-amber-700 mt-1">Needs your review</div>
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

          {/* Edir Health Overview */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Edir Health Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-900">Financial Health</p>
                    <p className="text-xs text-emerald-700">Strong</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-700">Balance: 485,200 ETB • 88% collection rate</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-900">Member Engagement</p>
                    <p className="text-xs text-emerald-700">Excellent</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-700">97.6% active • High meeting attendance</p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Pending Items</p>
                    <p className="text-xs text-amber-700">Needs Attention</p>
                  </div>
                </div>
                <p className="text-xs text-amber-700">7 requests • 2 member applications</p>
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
                onClick={() => {
                  setActiveTab('meetings');
                  setShowScheduleMeetingForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Schedule Meeting
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Set up committee or general meeting</p>
              </button>
              <button 
                onClick={() => setActiveTab('requests')}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <ClipboardList className="w-4 h-4 inline mr-2" />
                  Review Requests
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">7 pending assistance requests</p>
              </button>
              <button 
                onClick={() => {
                  setActiveTab('announcements');
                  setShowAnnouncementForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Megaphone className="w-4 h-4 inline mr-2" />
                  Create Announcement
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Send important notice to members</p>
              </button>
              <button 
                onClick={() => setActiveTab('members')}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <UserPlus className="w-4 h-4 inline mr-2" />
                  Member Applications
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">2 new member applications</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'members' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Member Management
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                View all members and approve applications
              </p>
            </div>
          </div>

          {/* Member Applications */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Pending Member Applications
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Birtukan Ayele', phone: '+251 911 234 567', appliedDate: 'Sept 2, 2026', referredBy: 'Melat Tesfaye' },
                { name: 'Girma Bekele', phone: '+251 922 345 678', appliedDate: 'Sept 1, 2026', referredBy: 'Abebe Kebede' },
              ].map((applicant, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center font-medium text-lg">
                        {applicant.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                          {applicant.name}
                        </h5>
                        <p className="text-sm text-[var(--muted-foreground)] mb-1">
                          📱 {applicant.phone}
                        </p>
                        <p className="text-xs text-[var(--muted-foreground)]">
                          Applied: {applicant.appliedDate} • Referred by: {applicant.referredBy}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition-all">
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Approve
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 text-sm font-medium hover:bg-rose-200 transition-all">
                      <XCircle className="w-4 h-4 inline mr-2" />
                      Reject
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                      <Eye className="w-4 h-4 inline mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Members */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-semibold text-[var(--foreground)]">
                All Members (127)
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
              {[
                { name: 'Melat Tesfaye', id: 'YE-0142', status: 'Active', role: 'Member' },
                { name: 'Abebe Kebede', id: 'YE-0098', status: 'Active', role: 'Treasurer' },
                { name: 'Tigist Alemayehu', id: 'YE-0115', status: 'Active', role: 'Secretary' },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {member.name}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {member.id} • {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                      {member.status}
                    </span>
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Eye className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'meetings' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Meetings Management
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Schedule and manage Edir meetings
              </p>
            </div>
            <button
              onClick={() => setShowScheduleMeetingForm(!showScheduleMeetingForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Schedule Meeting
            </button>
          </div>

          {/* Schedule Meeting Form */}
          {showScheduleMeetingForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Schedule New Meeting
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Meeting Type *
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>Committee Meeting</option>
                    <option>General Assembly</option>
                    <option>Emergency Meeting</option>
                    <option>Special Session</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Meeting Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Monthly Committee Meeting"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      Time *
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Community Center Hall"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Agenda
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Meeting agenda and topics to discuss..."
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                  Schedule & Notify Members
                </button>
                <button
                  onClick={() => setShowScheduleMeetingForm(false)}
                  className="px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Upcoming Meetings */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Upcoming Meetings
            </h4>
            <div className="space-y-3">
              {[
                { title: 'Monthly Committee Meeting', type: 'Committee', date: 'September 10, 2026', time: '3:00 PM', location: 'Community Center' },
                { title: 'Annual General Assembly', type: 'General', date: 'September 25, 2026', time: '2:00 PM', location: 'Main Hall' },
              ].map((meeting, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-medium text-[var(--foreground)] text-base">
                            {meeting.title}
                          </h5>
                          <span className="px-2 py-1 rounded-full bg-[#d9e5e0] text-[var(--primary)] text-xs font-medium">
                            {meeting.type}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)] mb-1">
                          📅 {meeting.date} • 🕐 {meeting.time}
                        </p>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          📍 {meeting.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                      Edit
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                      Send Reminder
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                      View Agenda
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'requests' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Major Requests Review
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Review and approve important member requests
            </p>
          </div>

          {/* Pending Requests */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Pending Approval (7)
            </h4>
            <div className="space-y-3">
              {[
                { member: 'Samuel Girma (YE-0054)', type: 'Financial Assistance', amount: '5,000 ETB', reason: 'Medical emergency - urgent surgery needed', submitted: 'Sept 3, 2026', priority: 'High' },
                { member: 'Hanna Desta (YE-0089)', type: 'Equipment Loan', amount: 'Large tent & 50 chairs', reason: 'Wedding ceremony on Sept 15', submitted: 'Sept 2, 2026', priority: 'Medium' },
                { member: 'Kebede Alemu (YE-0072)', type: 'Financial Assistance', amount: '3,000 ETB', reason: 'Funeral expenses for family member', submitted: 'Sept 1, 2026', priority: 'High' },
              ].map((request, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    request.priority === 'High' 
                      ? 'bg-rose-50 border-rose-200' 
                      : 'bg-[#f5f0e8] border-[var(--border)]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="font-medium text-[var(--foreground)] text-base">
                          {request.member}
                        </h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.priority === 'High'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {request.priority} Priority
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[var(--foreground)] mb-2">
                        {request.type} • {request.amount}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] mb-2">
                        <strong>Reason:</strong> {request.reason}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Submitted: {request.submitted}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-sm font-medium hover:bg-emerald-200 transition-all">
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Approve
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 text-sm font-medium hover:bg-rose-200 transition-all">
                      <XCircle className="w-4 h-4 inline mr-2" />
                      Reject
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                      <Eye className="w-4 h-4 inline mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'announcements' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Important Announcements
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Create and manage critical Edir announcements
              </p>
            </div>
            <button
              onClick={() => setShowAnnouncementForm(!showAnnouncementForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Create Announcement
            </button>
          </div>

          {/* Create Announcement Form */}
          {showAnnouncementForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Create Important Announcement
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Priority Level *
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>🔴 Critical</option>
                    <option>🟠 Important</option>
                    <option>🟢 Normal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Category *
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>📅 Meeting</option>
                    <option>💰 Payment</option>
                    <option>📢 General Notice</option>
                    <option>🕊️ Condolence</option>
                    <option>📜 Policy Change</option>
                    <option>🎉 Celebration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Monthly Meeting – September 10"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your announcement message..."
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                  Publish & Notify All Members
                </button>
                <button
                  onClick={() => setShowAnnouncementForm(false)}
                  className="px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Recent Announcements */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Recent Announcements
            </h4>
            <div className="space-y-3">
              {[
                { title: 'Monthly Meeting – September 10', category: '📅 Meeting', priority: 'Important', date: 'Sept 1, 2026', views: 98 },
                { title: 'New Payment Policy', category: '📜 Policy', priority: 'Critical', date: 'Aug 28, 2026', views: 115 },
                { title: 'Welcome New Members', category: '🎉 Celebration', priority: 'Normal', date: 'Aug 25, 2026', views: 87 },
              ].map((announcement, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-start justify-between"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-medium text-[var(--foreground)] text-sm">
                          {announcement.title}
                        </h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          announcement.priority === 'Critical' ? 'bg-rose-100 text-rose-800' :
                          announcement.priority === 'Important' ? 'bg-amber-100 text-amber-800' :
                          'bg-emerald-100 text-emerald-800'
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {announcement.category} • {announcement.date} • {announcement.views} views
                      </p>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                    <Eye className="w-4 h-4 text-[var(--muted-foreground)]" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'leadership' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Leadership & Roles
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Manage committee roles and assign officers
              </p>
            </div>
            <button
              onClick={() => setShowAssignRoleModal(true)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <UserPlus className="w-4 h-4 inline mr-2" />
              Assign Role
            </button>
          </div>

          {/* Current Leadership */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Current Committee
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Ahmed Mohammed', role: 'Chairperson', memberId: 'YE-0001', since: 'Jan 2025', term: 'Active' },
                { name: 'Abebe Kebede', role: 'Treasurer', memberId: 'YE-0098', since: 'Jan 2025', term: 'Active' },
                { name: 'Tigist Alemayehu', role: 'Secretary', memberId: 'YE-0115', since: 'Jan 2025', term: 'Active' },
                { name: 'Solomon Haile', role: 'Inventory Officer', memberId: 'YE-0042', since: 'Jan 2025', term: 'Active' },
                { name: 'Rahel Tekle', role: 'Auditor', memberId: 'YE-0067', since: 'Jan 2025', term: 'Active' },
              ].map((officer, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center font-medium text-lg">
                      {officer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-base mb-1">
                        {officer.name}
                      </h5>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {officer.role} • {officer.memberId}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Since: {officer.since} • Term: {officer.term}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {idx !== 0 && (
                      <button className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 text-sm font-medium hover:bg-rose-200 transition-all">
                        Remove Role
                      </button>
                    )}
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Eye className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Role Assignment Modal */}
          {showAssignRoleModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-6 max-w-md w-full">
                <h4 className="font-serif font-semibold text-[var(--foreground)] text-lg mb-4">
                  Assign Committee Role
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Select Member *
                    </label>
                    <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                      <option>Melat Tesfaye (YE-0142)</option>
                      <option>Dawit Haile (YE-0087)</option>
                      <option>Samuel Girma (YE-0054)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Role *
                    </label>
                    <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                      <option>Treasurer</option>
                      <option>Secretary</option>
                      <option>Inventory Officer</option>
                      <option>Auditor</option>
                      <option>Vice Chairperson</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Term Start Date *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                    Assign Role
                  </button>
                  <button
                    onClick={() => setShowAssignRoleModal(false)}
                    className="flex-1 px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
