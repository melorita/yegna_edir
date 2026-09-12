import React from 'react';
import {
  FileText,
  Download,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export const PlatformReports: React.FC = () => {
  const reportCategories = [
    {
      id: 'membership',
      name: 'Membership Reports',
      icon: Users,
      description: 'Member statistics, registration trends, and demographics',
      reports: [
        { name: 'Member Directory', description: 'Complete list of all members' },
        { name: 'Registration Trend', description: 'Monthly member registration analysis' },
        { name: 'Active vs Inactive', description: 'Member activity status breakdown' }
      ]
    },
    {
      id: 'financial',
      name: 'Financial Reports',
      icon: DollarSign,
      description: 'Contributions, expenses, and financial summaries',
      reports: [
        { name: 'Contribution Summary', description: 'Monthly contribution collections' },
        { name: 'Expense Report', description: 'Detailed expense breakdown' },
        { name: 'Financial Statement', description: 'Complete financial overview' }
      ]
    },
    {
      id: 'attendance',
      name: 'Attendance Reports',
      icon: Calendar,
      description: 'Meeting attendance and participation tracking',
      reports: [
        { name: 'Attendance Summary', description: 'Meeting attendance rates' },
        { name: 'Member Participation', description: 'Individual member attendance' },
        { name: 'Attendance Trend', description: 'Historical attendance analysis' }
      ]
    },
    {
      id: 'committee',
      name: 'Committee Reports',
      icon: BarChart3,
      description: 'Committee activities and operational metrics',
      reports: [
        { name: 'Committee Activity', description: 'Committee member actions and contributions' },
        { name: 'Request Processing', description: 'Member request handling statistics' },
        { name: 'Meeting Minutes', description: 'Compiled meeting records' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">Platform Reports</h1>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Generate and export comprehensive reports
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <FileText className="w-5 h-5 text-[var(--primary)]" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">48</div>
          <div className="text-xs text-[var(--muted-foreground)]">Reports Generated</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Download className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">156</div>
          <div className="text-xs text-[var(--muted-foreground)]">Total Downloads</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">12</div>
          <div className="text-xs text-[var(--muted-foreground)]">This Month</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">+24%</div>
          <div className="text-xs text-[var(--muted-foreground)]">Growth Rate</div>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reportCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="rounded-2xl bg-card border border-[var(--border)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)]">{category.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {category.reports.map((report, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#f5f0e8] border border-[var(--border)] hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-[var(--foreground)] mb-1">{report.name}</h4>
                        <p className="text-xs text-[var(--muted-foreground)]">{report.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-white border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all group">
                          <Download className="w-4 h-4 text-[var(--primary)] group-hover:text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Report Generator */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
            <FileText className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Custom Report Generator
            </h3>
            <p className="text-xs text-[var(--muted-foreground)]">Create custom reports with specific date ranges and filters</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">Report Type</label>
            <select className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm">
              <option>Membership</option>
              <option>Financial</option>
              <option>Attendance</option>
              <option>Committee</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">Start Date</label>
            <input
              type="date"
              className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">End Date</label>
            <input
              type="date"
              className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">Format</label>
            <select className="w-full px-3 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm">
              <option>PDF</option>
              <option>Excel (XLSX)</option>
              <option>CSV</option>
            </select>
          </div>
        </div>

        <button className="w-full px-6 py-3 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium flex items-center justify-center gap-2 shadow-sm">
          <FileText className="w-4 h-4" />
          Generate Custom Report
        </button>
      </div>
    </div>
  );
};

