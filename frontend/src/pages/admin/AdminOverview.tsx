import React, { useState } from 'react';
import {
  Users,
  UserCheck,
  UserX,
  UserPlus,
  Shield,
  Calendar,
  TrendingUp,
  DollarSign,
  ClipboardList,
  Activity,
  BarChart3,
  PieChart
} from 'lucide-react';

export const AdminOverview: React.FC = () => {
  const [chartPeriod, setChartPeriod] = useState<'week' | 'month' | 'year'>('month');

  // Mock data for member registration trend
  const registrationData = {
    week: [2, 1, 3, 2, 1, 4, 2],
    month: [8, 12, 9, 15, 11, 13, 10, 12, 14, 11, 9, 12],
    year: [45, 52, 48, 55, 50, 58, 53, 56, 60, 54, 51, 57]
  };

  const maxRegistration = Math.max(...registrationData[chartPeriod]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">
          Platform Overview
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Monitor and manage the YegnaEdir digital platform
        </p>
      </div>

      {/* Main Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Total Members */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Total Members
            </span>
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-bold text-[var(--primary)]">127</div>
          <div className="text-xs text-emerald-700 mt-1">↑ +3 this month</div>
        </div>

        {/* Active Members */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Active Members
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-bold text-[var(--primary)]">124</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">97.6% active rate</div>
        </div>

        {/* Inactive Members */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Inactive Members
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <UserX className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-bold text-[var(--primary)]">3</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">2.4% inactive</div>
        </div>

        {/* Pending Registrations */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Pending Registrations
            </span>
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <UserPlus className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-bold text-[var(--primary)]">5</div>
          <div className="text-xs text-amber-700 mt-1">Awaiting approval</div>
        </div>

        {/* Committee Members */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Committee Members
            </span>
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-bold text-[var(--primary)]">5</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">Leadership team</div>
        </div>

        {/* Upcoming Meeting */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Next Meeting
            </span>
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--primary)]">Sept 10</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">6 days away</div>
        </div>

        {/* Attendance Rate */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Attendance Rate
            </span>
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-bold text-[var(--primary)]">89%</div>
          <div className="text-xs text-emerald-700 mt-1">Above average</div>
        </div>

        {/* Total Contributions */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Total Contributions
            </span>
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--primary)]">485,200 ETB</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">Current balance</div>
        </div>

        {/* Pending Requests */}
        <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
              Pending Requests
            </span>
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
              <ClipboardList className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-serif font-bold text-[var(--primary)]">7</div>
          <div className="text-xs text-amber-700 mt-1">Needs review</div>
        </div>
      </div>

      {/* Platform Health Status */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
          Platform Health Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-sm font-semibold text-emerald-900">System Status</p>
                <p className="text-xs text-emerald-700">All systems operational</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div>
                <p className="text-sm font-semibold text-emerald-900">Security</p>
                <p className="text-xs text-emerald-700">No security alerts</p>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div>
                <p className="text-sm font-semibold text-amber-900">Action Required</p>
                <p className="text-xs text-amber-700">5 pending registrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
          Recent Administrative Activity
        </h3>
        <div className="space-y-3">
          {[
            { action: 'New member registered', user: 'Birtukan Ayele', time: '2 hours ago', type: 'success' },
            { action: 'Committee role assigned', user: 'Treasurer → Abebe Kebede', time: '5 hours ago', type: 'info' },
            { action: 'Account activated', user: 'Melat Tesfaye', time: '1 day ago', type: 'success' },
            { action: 'System settings updated', user: 'Admin', time: '2 days ago', type: 'warning' },
            { action: 'Audit report generated', user: 'System', time: '3 days ago', type: 'info' }
          ].map((activity, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-emerald-500' :
                  activity.type === 'warning' ? 'bg-amber-500' :
                  'bg-blue-500'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">{activity.action}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{activity.user}</p>
                </div>
              </div>
              <span className="text-xs text-[var(--muted-foreground)]">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
            <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">Review Registrations</h4>
            <p className="text-xs text-[var(--muted-foreground)]">5 pending approval</p>
          </button>
          <button className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
            <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">Manage Users</h4>
            <p className="text-xs text-[var(--muted-foreground)]">View all 127 users</p>
          </button>
          <button className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
            <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">View Audit Logs</h4>
            <p className="text-xs text-[var(--muted-foreground)]">System activity trail</p>
          </button>
          <button className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left">
            <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">Generate Report</h4>
            <p className="text-xs text-[var(--muted-foreground)]">Platform analytics</p>
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Member Registration Trend */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                  Member Registration Trend
                </h3>
                <p className="text-xs text-[var(--muted-foreground)]">New members over time</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setChartPeriod('week')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  chartPeriod === 'week'
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f0e8] text-[var(--foreground)] hover:bg-[#ebe5da]'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setChartPeriod('month')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  chartPeriod === 'month'
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f0e8] text-[var(--foreground)] hover:bg-[#ebe5da]'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setChartPeriod('year')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  chartPeriod === 'year'
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[#f5f0e8] text-[var(--foreground)] hover:bg-[#ebe5da]'
                }`}
              >
                Year
              </button>
            </div>
          </div>
          <div className="flex items-end justify-between gap-2 h-48">
            {registrationData[chartPeriod].map((value, idx) => {
              const height = (value / maxRegistration) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center" style={{ height: '160px' }}>
                    <div
                      className="w-full bg-[var(--primary)] rounded-t-lg transition-all hover:opacity-80 relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                        {value}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[var(--muted-foreground)]">
                    {chartPeriod === 'week'
                      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]
                      : chartPeriod === 'month'
                      ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]
                      : `'${22 + idx}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active vs Inactive Members */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <PieChart className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Member Status Distribution
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">Active vs inactive members</p>
            </div>
          </div>
          <div className="flex items-center justify-center py-8">
            <div className="relative w-48 h-48">
              {/* Simple pie chart representation */}
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                {/* Active members - 97.6% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="20"
                  strokeDasharray="251.2 251.2"
                  strokeDashoffset="0"
                />
                {/* Inactive members - 2.4% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="20"
                  strokeDasharray="6 245.2"
                  strokeDashoffset="-245.2"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-serif font-bold text-[var(--primary)]">127</div>
                <div className="text-xs text-[var(--muted-foreground)]">Total Members</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-medium text-emerald-900">Active</span>
              </div>
              <div className="text-2xl font-serif font-bold text-emerald-900">124</div>
              <div className="text-xs text-emerald-700">97.6%</div>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs font-medium text-amber-900">Inactive</span>
              </div>
              <div className="text-2xl font-serif font-bold text-amber-900">3</div>
              <div className="text-xs text-amber-700">2.4%</div>
            </div>
          </div>
        </div>

        {/* Attendance Trend */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <Activity className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Attendance Trend
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">Last 6 meetings</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { meeting: 'Sept 2026', attendance: 89, total: 127 },
              { meeting: 'Aug 2026', attendance: 92, total: 127 },
              { meeting: 'July 2026', attendance: 86, total: 126 },
              { meeting: 'June 2026', attendance: 95, total: 126 },
              { meeting: 'May 2026', attendance: 88, total: 125 },
              { meeting: 'Apr 2026', attendance: 91, total: 124 }
            ].map((item, idx) => {
              const percentage = Math.round((item.attendance / item.total) * 100);
              return (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--foreground)]">{item.meeting}</span>
                    <span className="text-sm font-semibold text-[var(--primary)]">
                      {item.attendance}/{item.total} ({percentage}%)
                    </span>
                  </div>
                  <div className="h-2 bg-[#f5f0e8] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contribution Trend */}
        <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                Contribution Trend
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">Monthly collections</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { month: 'Sept 2026', amount: 42500, collected: 115, total: 127 },
              { month: 'Aug 2026', amount: 45200, collected: 122, total: 127 },
              { month: 'July 2026', amount: 43800, collected: 118, total: 126 },
              { month: 'June 2026', amount: 46100, collected: 124, total: 126 },
              { month: 'May 2026', amount: 44300, collected: 120, total: 125 },
              { month: 'Apr 2026', amount: 43900, collected: 119, total: 124 }
            ].map((item, idx) => {
              const percentage = Math.round((item.collected / item.total) * 100);
              return (
                <div key={idx} className="p-3 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--foreground)]">{item.month}</span>
                    <span className="text-sm font-semibold text-emerald-700">
                      {item.amount.toLocaleString()} ETB
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                    <span>{item.collected}/{item.total} members paid</span>
                    <span>{percentage}% collection rate</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
