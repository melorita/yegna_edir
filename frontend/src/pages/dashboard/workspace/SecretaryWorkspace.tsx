import React, { useState } from 'react';
import { FileText, Users, Calendar, Megaphone, Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

export const SecretaryWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'meetings' | 'communications' | 'records'>('overview');
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [showCreateMeetingForm, setShowCreateMeetingForm] = useState(false);
  const [showCreateAnnouncementForm, setShowCreateAnnouncementForm] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Secretary Workspace</h2>
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
            onClick={() => setActiveTab('members')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'members'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Member Management
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
          <button
            onClick={() => setActiveTab('records')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'records'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--foreground)] hover:bg-secondary/40'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Records
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
                  Upcoming Meetings
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">2</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Next: Sept 10</div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                  Meeting Minutes
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-serif font-bold text-[var(--primary)]">48</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Documented</div>
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

          {/* Quick Actions */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                onClick={() => {
                  setActiveTab('members');
                  setShowAddMemberForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Plus className="w-4 h-4 inline mr-2" />
                  Add New Member
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Register a new Edir member</p>
              </button>
              <button 
                onClick={() => {
                  setActiveTab('meetings');
                  setShowCreateMeetingForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Create Meeting
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Schedule a new meeting</p>
              </button>
              <button 
                onClick={() => {
                  setActiveTab('communications');
                  setShowCreateAnnouncementForm(true);
                }}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <Megaphone className="w-4 h-4 inline mr-2" />
                  Create Announcement
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">Send notice to members</p>
              </button>
              <button 
                onClick={() => setActiveTab('records')}
                className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left"
              >
                <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Manage Records
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">View Edir documents</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'members' && (
        <div className="space-y-6">
          {/* Header with Add Button */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Member Management
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Add, update, and manage member information
              </p>
            </div>
            <button
              onClick={() => setShowAddMemberForm(!showAddMemberForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Add New Member
            </button>
          </div>

          {/* Add Member Form */}
          {showAddMemberForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Add New Member
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+251 9XX XXX XXX"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="member@example.com"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button className="px-5 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all">
                  Add Member
                </button>
                <button
                  onClick={() => setShowAddMemberForm(false)}
                  className="px-5 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Member Directory */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif font-semibold text-[var(--foreground)]">
                Member Directory
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

            {/* Member List */}
            <div className="space-y-3">
              {[
                { name: 'Melat Tesfaye', id: 'YE-0142', phone: '+251 911 234 567', status: 'Active' },
                { name: 'Abebe Kebede', id: 'YE-0098', phone: '+251 922 345 678', status: 'Active' },
                { name: 'Tigist Alemayehu', id: 'YE-0115', phone: '+251 933 456 789', status: 'Active' },
              ].map((member) => (
                <div
                  key={member.id}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm">
                        {member.name}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {member.id} • {member.phone}
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
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Edit className="w-4 h-4 text-[var(--muted-foreground)]" />
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
          {/* Header with Create Button */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Meetings & Minutes
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Schedule meetings and record minutes
              </p>
            </div>
            <button
              onClick={() => setShowCreateMeetingForm(!showCreateMeetingForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Create Meeting
            </button>
          </div>

          {/* Create Meeting Form */}
          {showCreateMeetingForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Schedule New Meeting
              </h4>
              <div className="space-y-4">
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
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Community Center"
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
                  Schedule Meeting
                </button>
                <button
                  onClick={() => setShowCreateMeetingForm(false)}
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
                { title: 'Monthly Committee Meeting', date: 'September 10, 2026', time: '3:00 PM', location: 'Community Center' },
                { title: 'Annual General Assembly', date: 'September 25, 2026', time: '2:00 PM', location: 'Main Hall' },
              ].map((meeting, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-start justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {meeting.title}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        📅 {meeting.date} • 🕐 {meeting.time}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        📍 {meeting.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Edit className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <FileText className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Meeting Minutes */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Recent Meeting Minutes
            </h4>
            <div className="space-y-3">
              {[
                { title: 'Monthly Committee Meeting', date: 'August 10, 2026', attendees: 45 },
                { title: 'Emergency Meeting', date: 'July 28, 2026', attendees: 38 },
                { title: 'Monthly Committee Meeting', date: 'July 10, 2026', attendees: 52 },
              ].map((minute, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm">
                        {minute.title}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {minute.date} • {minute.attendees} attendees
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                    View Minutes
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'communications' && (
        <div className="space-y-6">
          {/* Header with Create Button */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Communications Management
              </h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Create announcements and send notices to members
              </p>
            </div>
            <button
              onClick={() => setShowCreateAnnouncementForm(!showCreateAnnouncementForm)}
              className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Create Announcement
            </button>
          </div>

          {/* Create Announcement Form */}
          {showCreateAnnouncementForm && (
            <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
              <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
                Create New Announcement
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Monthly Meeting Reminder"
                    className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-[#f5f0e8] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <option>📅 Meeting</option>
                    <option>💰 Payment Reminder</option>
                    <option>📢 General Notice</option>
                    <option>🕊️ Condolence</option>
                    <option>🎉 Celebration</option>
                  </select>
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
                  Publish Announcement
                </button>
                <button
                  onClick={() => setShowCreateAnnouncementForm(false)}
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
                { title: 'Monthly Meeting – September 10', category: '📅 Meeting', date: 'September 1, 2026', views: 98 },
                { title: 'September Contribution Reminder', category: '💰 Payment', date: 'August 28, 2026', views: 112 },
                { title: 'New Member Welcome', category: '🎉 Celebration', date: 'August 25, 2026', views: 87 },
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
                      <h5 className="font-medium text-[var(--foreground)] text-sm mb-1">
                        {announcement.title}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {announcement.category} • {announcement.date} • {announcement.views} views
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Eye className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Edit className="w-4 h-4 text-[var(--muted-foreground)]" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-secondary/40 transition-all">
                      <Trash2 className="w-4 h-4 text-rose-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'records' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Edir Records & Documents
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Maintain and manage important Edir documents
            </p>
          </div>

          {/* Document Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { category: 'Meeting Minutes', count: 48, icon: FileText, color: 'bg-[#d9e5e0]' },
              { category: 'Member Records', count: 127, icon: Users, color: 'bg-[#d9e5e0]' },
              { category: 'Financial Reports', count: 24, icon: FileText, color: 'bg-[#d9e5e0]' },
              { category: 'Legal Documents', count: 12, icon: FileText, color: 'bg-[#d9e5e0]' },
            ].map((doc, idx) => (
              <button
                key={idx}
                className="p-5 rounded-2xl bg-card border border-[var(--border)] hover:bg-[#f5f0e8] transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${doc.color} text-[var(--primary)] flex items-center justify-center`}>
                    <doc.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">
                      {doc.category}
                    </h4>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {doc.count} documents
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Recent Documents */}
          <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
            <h4 className="font-serif font-semibold text-[var(--foreground)] mb-4">
              Recent Documents
            </h4>
            <div className="space-y-3">
              {[
                { name: 'August 2026 Meeting Minutes.pdf', date: 'August 10, 2026', size: '2.4 MB' },
                { name: 'Q2 2026 Financial Report.pdf', date: 'July 15, 2026', size: '1.8 MB' },
                { name: 'Member Registration Form.docx', date: 'July 1, 2026', size: '456 KB' },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] text-[var(--primary)] flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[var(--foreground)] text-sm">
                        {doc.name}
                      </h5>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {doc.date} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-medium hover:bg-secondary/60 transition-all">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
