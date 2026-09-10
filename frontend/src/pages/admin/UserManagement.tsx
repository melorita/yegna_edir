import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  UserPlus,
  MoreVertical,
  CheckCircle,
  XCircle,
  Shield,
  Edit,
  Trash2,
  Mail,
  Phone
} from 'lucide-react';

export const UserManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');
  const [roleFilter, setRoleFilter] = useState<'all' | 'member' | 'committee' | 'admin'>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock user data
  const allUsers = [
    {
      id: 'YE-0001',
      name: 'Abebe Bekele',
      email: 'abebe.bekele@email.com',
      phone: '+251 911 234567',
      role: 'admin',
      status: 'active',
      joinDate: '2023-01-15',
      lastActive: '2 hours ago'
    },
    {
      id: 'YE-0142',
      name: 'Melat Tesfaye',
      email: 'melat.tesfaye@email.com',
      phone: '+251 911 345678',
      role: 'committee',
      status: 'active',
      joinDate: '2023-03-20',
      lastActive: '1 day ago'
    },
    {
      id: 'YE-0089',
      name: 'Dawit Alemayehu',
      email: 'dawit.a@email.com',
      phone: '+251 911 456789',
      role: 'member',
      status: 'active',
      joinDate: '2023-05-10',
      lastActive: '3 hours ago'
    },
    {
      id: 'YE-0203',
      name: 'Sara Gebre',
      email: 'sara.gebre@email.com',
      phone: '+251 911 567890',
      role: 'member',
      status: 'pending',
      joinDate: '2026-09-01',
      lastActive: 'Never'
    },
    {
      id: 'YE-0078',
      name: 'Yonas Tadesse',
      email: 'yonas.t@email.com',
      phone: '+251 911 678901',
      role: 'member',
      status: 'inactive',
      joinDate: '2023-02-28',
      lastActive: '2 months ago'
    }
  ];

  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'committee':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'inactive':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'pending':
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
          <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">User Management</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Manage all platform users, accounts, and permissions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl border border-[var(--border)] bg-card text-[var(--foreground)] hover:bg-[#f5f0e8] transition-all text-sm font-medium flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium flex items-center gap-2 shadow-sm">
            <UserPlus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <Users className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <span className="text-xs text-emerald-600 font-medium">+12 this month</span>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">127</div>
          <div className="text-xs text-[var(--muted-foreground)]">Total Users</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">124</div>
          <div className="text-xs text-[var(--muted-foreground)]">Active Users</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">3</div>
          <div className="text-xs text-[var(--muted-foreground)]">Inactive Users</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">8</div>
          <div className="text-xs text-[var(--muted-foreground)]">Committee Members</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search by name, member ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2.5 rounded-xl border transition-all text-sm font-medium flex items-center gap-2 ${
              showFilters
                ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                : 'border-[var(--border)] bg-card text-[var(--foreground)] hover:bg-[#f5f0e8]'
            }`}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-medium text-[var(--muted-foreground)] mb-2 block">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-[var(--muted-foreground)] mb-2 block">
                Role
              </label>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              >
                <option value="all">All Roles</option>
                <option value="admin">Administrator</option>
                <option value="committee">Committee</option>
                <option value="member">Member</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setStatusFilter('all');
                  setRoleFilter('all');
                  setSearchQuery('');
                }}
                className="w-full px-4 py-2 rounded-xl border border-[var(--border)] bg-card text-[var(--foreground)] hover:bg-[#f5f0e8] transition-all text-sm font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-4 text-sm text-[var(--muted-foreground)]">
          Showing {filteredUsers.length} of {allUsers.length} users
        </div>
      </div>

      {/* Users Table */}
      <div className="rounded-2xl bg-card border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f5f0e8] border-b border-[var(--border)]">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider">
                  User
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider">
                  Contact
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider">
                  Role
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider">
                  Last Active
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#f5f0e8]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm">
                        {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-[var(--foreground)]">{user.name}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-[var(--foreground)]">
                        <Mail className="w-3 h-3 text-[var(--muted-foreground)]" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--foreground)]">
                        <Phone className="w-3 h-3 text-[var(--muted-foreground)]" />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getRoleBadgeColor(user.role)}`}>
                      {user.role === 'admin' ? 'Administrator' : user.role === 'committee' ? 'Committee' : 'Member'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getStatusBadgeColor(user.status)}`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-[var(--foreground)]">{user.lastActive}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">Joined {user.joinDate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors"
                        title="Edit User"
                      >
                        <Edit className="w-4 h-4 text-[var(--primary)]" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Delete User"
                      >
                        <Trash2 className="w-4 h-4 text-rose-600" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors"
                        title="More Actions"
                      >
                        <MoreVertical className="w-4 h-4 text-[var(--muted-foreground)]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-[var(--muted-foreground)] mx-auto mb-3" />
            <p className="text-sm text-[var(--muted-foreground)]">No users found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};
