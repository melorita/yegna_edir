import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  Save,
  Settings
} from 'lucide-react';

export const EdirConfiguration: React.FC = () => {
  const [edirName, setEdirName] = useState('Bole Subcity Neighborhood Edir');
  const [neighborhood, setNeighborhood] = useState('Bole, Addis Ababa');
  const [monthlyContribution, setMonthlyContribution] = useState('350');
  const [meetingDay, setMeetingDay] = useState('first-sunday');
  const [membershipCap, setMembershipCap] = useState('150');
  const [savedMessage, setSavedMessage] = useState('');

  const handleSave = () => {
    setSavedMessage('Configuration saved successfully!');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">Edir Configuration</h1>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Configure settings for your neighborhood Edir
        </p>
      </div>

      {/* Save Message */}
      {savedMessage && (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <Save className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm font-medium text-emerald-900">{savedMessage}</p>
        </div>
      )}

      {/* Configuration Sections */}
      <div className="space-y-6">
        {/* Basic Information */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Basic Information
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">Core Edir identity and location</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                Edir Name
              </label>
              <input
                type="text"
                value={edirName}
                onChange={(e) => setEdirName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                Neighborhood Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Membership Rules */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <Users className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Membership Rules
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">Configure membership policies</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                Maximum Members
              </label>
              <input
                type="number"
                value={membershipCap}
                onChange={(e) => setMembershipCap(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              />
              <p className="text-xs text-[var(--muted-foreground)] mt-2">
                Current members: 127 / {membershipCap}
              </p>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Require Fayda Verification</p>
                <p className="text-xs text-[var(--muted-foreground)]">New members must be verified by Fayda</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Auto-approve Verified Members</p>
                <p className="text-xs text-[var(--muted-foreground)]">Skip manual approval if Fayda score &gt; 90%</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Contribution Settings */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Contribution Settings
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">Configure monthly contributions</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                Monthly Contribution Amount (ETB)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Late Payment Penalty</p>
                <p className="text-xs text-[var(--muted-foreground)]">Charge 10% penalty for late payments</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Meeting Configuration */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Meeting Configuration
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">Configure meeting schedule</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                Regular Meeting Schedule
              </label>
              <select
                value={meetingDay}
                onChange={(e) => setMeetingDay(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              >
                <option value="first-sunday">First Sunday of the month</option>
                <option value="second-sunday">Second Sunday of the month</option>
                <option value="third-sunday">Third Sunday of the month</option>
                <option value="last-sunday">Last Sunday of the month</option>
                <option value="first-saturday">First Saturday of the month</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">Mandatory Attendance</p>
                <p className="text-xs text-[var(--muted-foreground)]">Members must attend at least 80% of meetings</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium flex items-center gap-2 shadow-sm"
        >
          <Save className="w-4 h-4" />
          Save Configuration
        </button>
      </div>
    </div>
  );
};
