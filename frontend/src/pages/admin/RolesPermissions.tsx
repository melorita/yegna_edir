import React, { useState } from 'react';
import {
  Shield,
  Users,
  Lock,
  Check,
  X,
  Edit,
  Plus
} from 'lucide-react';

export const RolesPermissions: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('admin');

  const roles = [
    {
      id: 'admin',
      name: 'System Administrator',
      description: 'Full platform control and configuration access',
      userCount: 1,
      color: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    {
      id: 'committee',
      name: 'Committee Member',
      description: 'Operational management and member oversight',
      userCount: 8,
      color: 'bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] border-blue-200'
    },
    {
      id: 'member',
      name: 'Edir Member',
      description: 'Basic member access and participation',
      userCount: 118,
      color: 'bg-emerald-100 text-emerald-700 border-emerald-200'
    }
  ];

  const permissions = {
    admin: {
      'User Management': ['View all users', 'Create users', 'Edit users', 'Delete users', 'Manage roles'],
      'Committee Management': ['View committee', 'Add committee members', 'Remove committee members', 'Assign roles'],
      'Registration': ['View registrations', 'Approve registrations', 'Reject registrations'],
      'System Configuration': ['Edit Edir settings', 'Manage permissions', 'System settings'],
      'Audit & Security': ['View audit logs', 'Security monitoring', 'Generate reports'],
      'Communication': ['Send notifications', 'Create announcements', 'System messages']
    },
    committee: {
      'Member Management': ['View members', 'Add members', 'Edit member info'],
      'Financial Operations': ['View contributions', 'Record payments', 'View expenses'],
      'Meetings': ['Schedule meetings', 'Record attendance', 'Create minutes'],
      'Requests': ['View requests', 'Approve requests', 'Process benefits'],
      'Communication': ['Create announcements', 'Send messages'],
      'Reports': ['View operational reports', 'Export data']
    },
    member: {
      'Profile': ['View own profile', 'Edit own profile', 'Update contact info'],
      'Contributions': ['View own contributions', 'Pay contributions', 'View payment history'],
      'Requests': ['Submit requests', 'View own requests', 'Track request status'],
      'Meetings': ['View meetings', 'Mark attendance', 'View meeting history'],
      'Announcements': ['View announcements', 'Receive notifications']
    }
  };

  const currentPermissions = permissions[selectedRole as keyof typeof permissions];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">Roles & Permissions</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Manage user roles and access control permissions
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium flex items-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" />
          Create Custom Role
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {roles.map((role) => (
          <div key={role.id} className="rounded-2xl bg-card border border-[var(--border)] p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--primary)]" />
              </div>
            </div>
            <div className="text-2xl font-serif font-bold text-[var(--foreground)]">{role.userCount}</div>
            <div className="text-xs text-[var(--muted-foreground)]">{role.name}</div>
          </div>
        ))}
      </div>

      {/* Roles & Permissions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Roles List */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">User Roles</h3>
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`w-full p-4 rounded-2xl border transition-all text-left ${
                selectedRole === role.id
                  ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                  : 'border-[var(--border)] bg-card hover:bg-[#f5f0e8]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-[var(--foreground)]">{role.name}</h4>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${role.color}`}>
                  {role.userCount} users
                </span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)]">{role.description}</p>
            </button>
          ))}
        </div>

        {/* Permissions Panel */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Permissions for {roles.find(r => r.id === selectedRole)?.name}
              </h3>
              <button className="p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors">
                <Edit className="w-4 h-4 text-[var(--primary)]" />
              </button>
            </div>

            <div className="space-y-6">
              {Object.entries(currentPermissions).map(([category, perms]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">{category}</h4>
                  <div className="space-y-2">
                    {perms.map((permission, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#f5f0e8] border border-[var(--border)]"
                      >
                        <span className="text-sm text-[var(--foreground)]">{permission}</span>
                        <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
