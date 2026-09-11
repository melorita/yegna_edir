import React, { useState } from 'react';
import {
  Bell,
  Plus,
  Send,
  Users,
  AlertCircle,
  Info,
  CheckCircle,
  X,
  Calendar
} from 'lucide-react';

export const SystemNotifications: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('info');
  const [targetAudience, setTargetAudience] = useState('all');

  const notifications = [
    {
      id: 'NOT-001',
      title: 'Monthly Meeting Reminder',
      message: 'Monthly Edir meeting scheduled for September 8, 2026 at 10:00 AM',
      type: 'info',
      audience: 'All Members',
      sentBy: 'Melat Tesfaye',
      sentDate: '2026-09-04 14:00',
      status: 'sent',
      recipients: 127
    },
    {
      id: 'NOT-002',
      title: 'Contribution Due Reminder',
      message: 'Monthly contribution of 350 ETB is due by September 10, 2026',
      type: 'warning',
      audience: 'All Members',
      sentBy: 'Dawit Alemayehu',
      sentDate: '2026-09-01 09:00',
      status: 'sent',
      recipients: 127
    },
    {
      id: 'NOT-003',
      title: 'System Maintenance Notice',
      message: 'Platform will undergo maintenance on September 6, 2026 from 2:00 AM to 4:00 AM',
      type: 'alert',
      audience: 'All Users',
      sentBy: 'Abebe Bekele',
      sentDate: '2026-08-30 16:00',
      status: 'sent',
      recipients: 135
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return AlertCircle;
      case 'warning':
        return AlertCircle;
      case 'success':
        return CheckCircle;
      default:
        return Info;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'alert':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'warning':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'success':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const handleSendNotification = () => {
    console.log('Sending notification:', {
      title: notificationTitle,
      message: notificationMessage,
      type: notificationType,
      audience: targetAudience
    });
    setShowCreateModal(false);
    setNotificationTitle('');
    setNotificationMessage('');
    setNotificationType('info');
    setTargetAudience('all');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[var(--foreground)]">System Notifications</h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Send platform-wide notifications to members
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all text-sm font-medium flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Create Notification
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
              <Bell className="w-5 h-5 text-[var(--primary)]" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">48</div>
          <div className="text-xs text-[var(--muted-foreground)]">Total Sent</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">5,842</div>
          <div className="text-xs text-[var(--muted-foreground)]">Total Recipients</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">98%</div>
          <div className="text-xs text-[var(--muted-foreground)]">Delivery Rate</div>
        </div>

        <div className="rounded-2xl bg-card border border-[var(--border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-serif font-bold text-[var(--foreground)]">12</div>
          <div className="text-xs text-[var(--muted-foreground)]">This Month</div>
        </div>
      </div>

      {/* Sent Notifications */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#d9e5e0] flex items-center justify-center">
            <Bell className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">
              Sent Notifications
            </h3>
            <p className="text-xs text-[var(--muted-foreground)]">History of platform notifications</p>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => {
            const TypeIcon = getTypeIcon(notification.type);
            return (
              <div
                key={notification.id}
                className="p-4 rounded-xl border border-[var(--border)] bg-[#f5f0e8] hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${getTypeColor(notification.type)}`}>
                    <TypeIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-semibold text-[var(--foreground)]">{notification.title}</h4>
                      <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">
                        {notification.sentDate}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--foreground)] mb-3">{notification.message}</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {notification.audience} ({notification.recipients} recipients)
                      </span>
                      <span>Sent by: {notification.sentBy}</span>
                      <span className={`px-2 py-0.5 rounded-lg font-medium border ${
                        notification.status === 'sent' 
                          ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                          : 'bg-gray-100 text-gray-700 border-gray-200'
                      }`}>
                        {notification.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Create Notification Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl border border-[var(--border)] max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-bold text-[var(--foreground)]">
                Create Notification
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors"
              >
                <X className="w-5 h-5 text-[var(--muted-foreground)]" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                  Notification Title
                </label>
                <input
                  type="text"
                  value={notificationTitle}
                  onChange={(e) => setNotificationTitle(e.target.value)}
                  placeholder="Enter notification title..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                  Message
                </label>
                <textarea
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  rows={4}
                  placeholder="Enter notification message..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                    Notification Type
                  </label>
                  <select
                    value={notificationType}
                    onChange={(e) => setNotificationType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                  >
                    <option value="info">Information</option>
                    <option value="warning">Warning</option>
                    <option value="alert">Alert</option>
                    <option value="success">Success</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--foreground)] mb-2 block">
                    Target Audience
                  </label>
                  <select
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                  >
                    <option value="all">All Members (127 users)</option>
                    <option value="committee">Committee Only (8 users)</option>
                    <option value="active">Active Members (124 users)</option>
                    <option value="inactive">Inactive Members (3 users)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-card hover:bg-[#f5f0e8] transition-all text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSendNotification}
                  disabled={!notificationTitle.trim() || !notificationMessage.trim()}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Notification
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
