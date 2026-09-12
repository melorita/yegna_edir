import React, { useState } from 'react';
import {
  UserCog,
  Users,
  Plus,
  X,
  Shield,
  FileText,
  DollarSign,
  Package,
  ShieldCheck,
  Calendar,
  Activity,
  CheckCircle
} from 'lucide-react';

export const CommitteeManagement: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock committee data
  const committeeMembers = [
    {
      id: 'YE-0001',
      name: 'Abebe Bekele',
      role: 'Chairperson',
      roleIcon: Users,
      email: 'abebe.bekele@email.com',
      phone: '+251 911 234567',
      joinDate: '2023-01-15',
      status: 'active',
      responsibilities: 'Overall Edir leadership and decision making'
    },
    {
      id: 'YE-0142',
      name: 'Melat Tesfaye',
      role: 'Secretary',
      roleIcon: FileText,
      email: 'melat.tesfaye@email.com',
      phone: '+251 911 345678',
      joinDate: '2023-03-20',
      status: 'active',
      responsibilities: 'Record keeping, meetings, and communication'
    },
    {
      id: 'YE-0089',
      name: 'Dawit Alemayehu',
      role: 'Treasurer',
      roleIcon: DollarSign,
      email: 'dawit.a@email.com',
      phone: '+251 911 456789',
      joinDate: '2023-05-10',
      status: 'active',
      responsibilities: 'Financial management and contributions'
    },
    {
      id: 'YE-0156',
      name: 'Almaz Kebede',
      role: 'Inventory Officer',
      roleIcon: Package,
      email: 'almaz.k@email.com',
      phone: '+251 911 567890',
      joinDate: '2023-07-22',
      status: 'active',
      responsibilities: 'Asset and inventory management'
    },
    {
      id: 'YE-0203',
      name: 'Yohannes Tadesse',
      role: 'Auditor',
      roleIcon: ShieldCheck,
      email: 'yohannes.t@email.com',
      phone: '+251 911 678901',
      joinDate: '2023-09-15',
      status: 'active',
      responsibilities: 'Financial audits and verification'
    }
  ];

  // Mock activity data
  const recentActivity = [
    {
      member: 'Melat Tesfaye',
      action: 'Created meeting minutes',
      time: '2 hours ago',
      type: 'document'
    },
    {
      member: 'Dawit Alemayehu',
      action: 'Recorded contribution payment',
      time: '5 hours ago',
      type: 'finance'
    },
    {
      member: 'Abebe Bekele',
      action: 'Approved new member',
      time: '1 day ago',
      type: 'approval'
    },
    {
      member: 'Almaz Kebede',
      action: 'Updated inventory',
      time: '2 days ago',
      type: 'inventory'
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Chairperson':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Secretary':
        return 'bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] border-blue-200';
      case 'Treasurer':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Inventory Officer':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Auditor':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">Committee Management</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Manage committee members, roles, and responsibilities
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Committee Member
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <UserCog className="w-5 h-5 text-[var(--primary)]" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">5</div>
          <div className="text-xs text-[var(--muted-foreground)]">Committee Members</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">5</div>
          <div className="text-xs text-[var(--muted-foreground)]">Active Roles</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">48</div>
          <div className="text-xs text-[var(--muted-foreground)]">Actions This Week</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">3</div>
          <div className="text-xs text-[var(--muted-foreground)]">Meetings This Month</div>
        </div>
      </div>

      {/* Committee Members Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {committeeMembers.map((member) => {
          const RoleIcon = member.roleIcon;
          return (
            <div key={member.id} className="rounded-2xl bg-card border border-[var(--border)] p-6 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{member.name}</h3>
                    <p className="text-xs text-[var(--muted-foreground)]">{member.id}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${getRoleColor(member.role)}`}>
                  <RoleIcon className="w-3.5 h-3.5" />
                  {member.role}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                  <span className="text-[var(--muted-foreground)] text-xs">Email:</span>
                  {member.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                  <span className="text-[var(--muted-foreground)] text-xs">Phone:</span>
                  {member.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                  <span className="text-[var(--muted-foreground)] text-xs">Joined:</span>
                  {member.joinDate}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#f5f0e8] border border-[var(--border)] mb-4">
                <p className="text-xs text-[var(--muted-foreground)] mb-1">Responsibilities</p>
                <p className="text-sm text-[var(--foreground)]">{member.responsibilities}</p>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 px-4 py-2 rounded-xl border border-[var(--border)] bg-card hover:bg-[#f5f0e8] transition-all text-sm font-medium">
                  View Activity
                </button>
                <button className="flex-1 px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium">
                  Manage
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Committee Activity */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
            <Activity className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Recent Committee Activity
            </h3>
            <p className="text-xs text-[var(--muted-foreground)]">Latest actions by committee members</p>
          </div>
        </div>

        <div className="space-y-3">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#f5f0e8] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {activity.member.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--foreground)]">{activity.member}</p>
                <p className="text-xs text-[var(--muted-foreground)]">{activity.action}</p>
              </div>
              <div className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Committee Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl border border-[var(--border)] max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">
                Add Committee Member
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--muted-foreground)]" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                  Select User
                </label>
                <select className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm">
                  <option>Choose a member...</option>
                  <option>Meseret Abebe (YE-0245)</option>
                  <option>Tesfaye Bekele (YE-0189)</option>
                  <option>Hanna Getachew (YE-0167)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                  Committee Role
                </label>
                <select className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm">
                  <option>Select role...</option>
                  <option>Chairperson</option>
                  <option>Secretary</option>
                  <option>Treasurer</option>
                  <option>Inventory Officer</option>
                  <option>Auditor</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                  Responsibilities
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the role responsibilities..."
                  className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-card hover:bg-[#f5f0e8] transition-all text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

