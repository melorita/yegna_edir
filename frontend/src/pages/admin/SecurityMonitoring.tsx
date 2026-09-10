import React from 'react';
import {
  AlertTriangle,
  Shield,
  Lock,
  Activity,
  MapPin,
  Clock,
  TrendingUp
} from 'lucide-react';

export const SecurityMonitoring: React.FC = () => {
  const securityAlerts = [
    {
      id: 'SEC-001',
      type: 'warning',
      title: 'Multiple Failed Login Attempts',
      description: '5 failed login attempts from IP 203.45.67.89',
      timestamp: '10 minutes ago',
      status: 'active'
    },
    {
      id: 'SEC-002',
      type: 'info',
      title: 'New Device Login',
      description: 'Admin logged in from a new device (Chrome, Windows)',
      timestamp: '2 hours ago',
      status: 'resolved'
    },
    {
      id: 'SEC-003',
      type: 'critical',
      title: 'Unusual Activity Detected',
      description: 'Rapid permission changes detected from YE-0089',
      timestamp: '1 day ago',
      status: 'investigating'
    }
  ];

  const recentLogins = [
    { user: 'Abebe Bekele', ip: '192.168.1.45', location: 'Addis Ababa, Ethiopia', time: '2 hours ago', status: 'success' },
    { user: 'Melat Tesfaye', ip: '192.168.1.52', location: 'Addis Ababa, Ethiopia', time: '3 hours ago', status: 'success' },
    { user: 'Unknown', ip: '203.45.67.89', location: 'Unknown', time: '5 hours ago', status: 'failed' }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">Security Monitoring</h1>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Monitor security events and suspicious activities
        </p>
      </div>

      {/* Security Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-emerald-600">Secure</div>
          <div className="text-xs text-[var(--muted-foreground)]">System Status</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">3</div>
          <div className="text-xs text-[var(--muted-foreground)]">Active Alerts</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
              <Lock className="w-5 h-5 text-rose-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">12</div>
          <div className="text-xs text-[var(--muted-foreground)]">Failed Logins (24h)</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">127</div>
          <div className="text-xs text-[var(--muted-foreground)]">Active Sessions</div>
        </div>
      </div>

      {/* Security Alerts */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">Security Alerts</h3>
            <p className="text-xs text-[var(--muted-foreground)]">Recent security events requiring attention</p>
          </div>
        </div>

        <div className="space-y-3">
          {securityAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border transition-all ${
                alert.type === 'critical'
                  ? 'bg-rose-50 border-rose-200'
                  : alert.type === 'warning'
                  ? 'bg-amber-50 border-amber-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm text-[var(--foreground)]">{alert.title}</h4>
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-medium ${
                      alert.status === 'active' ? 'bg-rose-500 text-white' : 
                      alert.status === 'investigating' ? 'bg-amber-500 text-white' : 
                      'bg-emerald-500 text-white'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] mb-2">{alert.description}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{alert.timestamp}</p>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-white border border-[var(--border)] hover:bg-[#f5f0e8] transition-all text-xs font-medium">
                  Investigate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Login Activity */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
            <Activity className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">Recent Login Activity</h3>
            <p className="text-xs text-[var(--muted-foreground)]">Latest authentication attempts</p>
          </div>
        </div>

        <div className="space-y-3">
          {recentLogins.map((login, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-sm text-[var(--foreground)]">{login.user}</h4>
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-medium border ${
                      login.status === 'success' 
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                        : 'bg-rose-100 text-rose-700 border-rose-200'
                    }`}>
                      {login.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {login.location}
                    </span>
                    <span>IP: {login.ip}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {login.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="rounded-2xl bg-blue-50 border border-blue-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-blue-900">Security Recommendations</h3>
            <p className="text-xs text-blue-700">Suggestions to improve platform security</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-blue-900">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></span>
            Enable two-factor authentication for all committee members
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></span>
            Review and update password policies (minimum 12 characters)
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></span>
            Set up automated security alerts for suspicious activities
          </li>
        </ul>
      </div>
    </div>
  );
};
