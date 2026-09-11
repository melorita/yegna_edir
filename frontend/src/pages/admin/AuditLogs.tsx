import React, { useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  Download,
  Calendar,
  User,
  Activity,
  Shield
} from 'lucide-react';

export const AuditLogs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [actionFilter, setActionFilter] = useState<'all' | 'create' | 'update' | 'delete' | 'login'>('all');
  const [userFilter, setUserFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const auditLogs = [
    {
      id: 'LOG-001',
      timestamp: '2026-09-04 14:32:15',
      user: 'Abebe Bekele',
      userId: 'YE-0001',
      action: 'Approved Registration',
      module: 'Registration Management',
      details: 'Approved registration for Sara Gebre (REG-001)',
      ipAddress: '192.168.1.45',
      status: 'success'
    },
    {
      id: 'LOG-002',
      timestamp: '2026-09-04 13:15:22',
      user: 'Melat Tesfaye',
      userId: 'YE-0142',
      action: 'Created Meeting',
      module: 'Secretary Workspace',
      details: 'Scheduled monthly meeting for September 2026',
      ipAddress: '192.168.1.52',
      status: 'success'
    },
    {
      id: 'LOG-003',
      timestamp: '2026-09-04 11:45:10',
      user: 'Dawit Alemayehu',
      userId: 'YE-0089',
      action: 'Recorded Payment',
      module: 'Finance Management',
      details: 'Recorded contribution payment for YE-0156 (350 ETB)',
      ipAddress: '192.168.1.67',
      status: 'success'
    },
    {
      id: 'LOG-004',
      timestamp: '2026-09-04 10:20:05',
      user: 'Unknown User',
      userId: 'UNKNOWN',
      action: 'Failed Login',
      module: 'Authentication',
      details: 'Failed login attempt for user: admin@yegnaedir.com',
      ipAddress: '203.45.67.89',
      status: 'failed'
    },
    {
      id: 'LOG-005',
      timestamp: '2026-09-04 09:30:42',
      user: 'Abebe Bekele',
      userId: 'YE-0001',
      action: 'Updated Configuration',
      module: 'System Settings',
      details: 'Changed monthly contribution amount from 300 to 350 ETB',
      ipAddress: '192.168.1.45',
      status: 'success'
    },
    {
      id: 'LOG-006',
      timestamp: '2026-09-03 16:55:30',
      user: 'Almaz Kebede',
      userId: 'YE-0156',
      action: 'Added Inventory',
      module: 'Inventory Management',
      details: 'Added 20 new chairs to inventory',
      ipAddress: '192.168.1.78',
      status: 'success'
    }
  ];

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getStatusColor = (status: string) => {
    return status === 'success'
      ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
      : 'bg-rose-100 text-rose-700 border-rose-200';
  };

  const getActionIcon = (action: string) => {
    if (action.includes('Login')) return Shield;
    if (action.includes('Created') || action.includes('Added')) return Activity;
    if (action.includes('Updated') || action.includes('Changed')) return FileText;
    return User;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">Audit Logs</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Complete audit trail of system activities
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl border border-[var(--border)] bg-card text-[var(--foreground)] hover:bg-[#f5f0e8] transition-all text-sm font-medium flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Logs
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <FileText className="w-5 h-5 text-[var(--primary)]" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">1,247</div>
          <div className="text-xs text-[var(--muted-foreground)]">Total Events</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">156</div>
          <div className="text-xs text-[var(--muted-foreground)]">Today</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Activity className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">1,239</div>
          <div className="text-xs text-[var(--muted-foreground)]">Successful</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-rose-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">8</div>
          <div className="text-xs text-[var(--muted-foreground)]">Failed Events</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search by user, action, module, or details..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>
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

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-medium text-[var(--muted-foreground)] mb-2 block">Date Range</label>
              <select className="w-full px-3 py-2 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm">
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-[var(--muted-foreground)] mb-2 block">Module</label>
              <select className="w-full px-3 py-2 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm">
                <option>All Modules</option>
                <option>Authentication</option>
                <option>User Management</option>
                <option>Finance Management</option>
                <option>Registration Management</option>
                <option>System Settings</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-[var(--muted-foreground)] mb-2 block">Status</label>
              <select className="w-full px-3 py-2 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm">
                <option>All Statuses</option>
                <option>Success</option>
                <option>Failed</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Audit Logs List */}
      <div className="rounded-2xl bg-card border border-[var(--border)] overflow-hidden">
        <div className="space-y-0 divide-y divide-[var(--border)]">
          {filteredLogs.map((log) => {
            const ActionIcon = getActionIcon(log.action);
            return (
              <div key={log.id} className="p-4 hover:bg-[#f5f0e8] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center flex-shrink-0">
                    <ActionIcon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-sm text-[var(--foreground)]">{log.action}</h4>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-medium border ${getStatusColor(log.status)}`}>
                          {log.status}
                        </span>
                      </div>
                      <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">{log.timestamp}</span>
                    </div>
                    <p className="text-sm text-[var(--foreground)] mb-2">{log.details}</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {log.user} ({log.userId})
                      </span>
                      <span>Module: {log.module}</span>
                      <span>IP: {log.ipAddress}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
