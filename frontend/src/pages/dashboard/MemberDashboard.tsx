import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Bell,
  User,
  CreditCard,
  History,
  ClipboardList,
  Megaphone,
  CalendarCheck,
  LogOut,
  Home,
  Menu,
  X,
  ChevronLeft,
  Coins,
  Save,
  XCircle
} from 'lucide-react';

type DashboardTab =
  | 'OVERVIEW'
  | 'PROFILE'
  | 'CONTRIBUTIONS'
  | 'PAYMENT_HISTORY'
  | 'REQUESTS'
  | 'ANNOUNCEMENTS'
  | 'ATTENDANCE';

export const MemberDashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<DashboardTab>('OVERVIEW');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Profile edit state
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState('melat.tesfaye@example.com');
  const [phone, setPhone] = useState('+251 911 234 567');

  const memberDisplayName = currentUser?.fullName || 'Melat Tesfaye';
  const memberInitials = memberDisplayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const memberId = currentUser?.memberId || 'YE-0142';

  const navigationItems = [
    { id: 'OVERVIEW', label: 'Overview', icon: Home },
    { id: 'PROFILE', label: 'My Profile', icon: User },
    { id: 'CONTRIBUTIONS', label: 'Contributions', icon: CreditCard },
    { id: 'PAYMENT_HISTORY', label: 'Payment History', icon: History },
    { id: 'REQUESTS', label: 'Requests', icon: ClipboardList },
    { id: 'ANNOUNCEMENTS', label: 'Announcements', icon: Megaphone },
    { id: 'ATTENDANCE', label: 'Attendance', icon: CalendarCheck }
  ];

  const handleSaveProfile = () => {
    // Save logic here
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    // Reset to original values
    setEmail('melat.tesfaye@example.com');
    setPhone('+251 911 234 567');
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)]">
        <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Left: Mobile menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary/40 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <img src="/logo.jpg" alt="YegnaEdir" className="w-8 h-8 rounded-xl object-contain" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-[var(--primary)] leading-none">
                  YegnaEdir
                </span>
                <span className="text-[9px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
                  Member Portal
                </span>
              </div>
            </div>
          </div>

          {/* Right: Notifications + Member info */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-secondary/40 transition-colors">
              <Bell className="w-5 h-5 text-[var(--primary)]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-[var(--border)]">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm">
                {memberInitials}
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-[var(--foreground)]">
                  {memberDisplayName}
                </div>
                <div className="text-xs text-[var(--muted-foreground)]">
                  Member • {memberId}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-[1400px] mx-auto">
        {/* ================= DESKTOP SIDEBAR (EXPANDED) ================= */}
        {!sidebarCollapsed && (
          <aside className="hidden lg:block fixed top-20 left-4 bottom-4 w-56 z-40">
            <div className="h-full p-4 rounded-3xl bg-card border border-[var(--border)] shadow-sm flex flex-col">
              {/* Collapse toggle */}
              <button
                onClick={() => setSidebarCollapsed(true)}
                className="mb-4 p-2 rounded-lg hover:bg-secondary/40 transition-colors self-end"
              >
                <ChevronLeft className="w-4 h-4 text-[var(--muted-foreground)]" />
              </button>

              {/* Navigation */}
              <nav className="flex-1 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as DashboardTab)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[var(--primary)] text-white'
                          : 'text-[var(--foreground)] hover:bg-secondary/40'
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Sign out */}
              <button
                onClick={logout}
                className="mt-4 pt-4 border-t border-[var(--border)] w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-[var(--foreground)] hover:bg-secondary/40 transition-all"
              >
                <LogOut className="w-5 h-5 shrink-0" />
                <span>Sign out</span>
              </button>
            </div>
          </aside>
        )}

        {/* ================= DESKTOP SIDEBAR (COLLAPSED) - Just menu button ================= */}
        {sidebarCollapsed && (
          <button
            onClick={() => setSidebarCollapsed(false)}
            className="hidden lg:block fixed top-20 left-4 p-3 rounded-xl bg-card border border-[var(--border)] shadow-sm hover:bg-secondary/40 transition-all z-50"
          >
            <Menu className="w-5 h-5 text-[var(--muted-foreground)]" />
          </button>
        )}

        {/* ================= MOBILE SIDEBAR ================= */}
        {mobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <aside className="lg:hidden fixed top-0 left-0 bottom-0 w-64 bg-card border-r border-[var(--border)] z-50 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif font-bold text-lg text-[var(--primary)]">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id as DashboardTab);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[var(--primary)] text-white'
                          : 'text-[var(--foreground)] hover:bg-secondary/40'
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <button
                onClick={logout}
                className="mt-4 pt-4 border-t border-[var(--border)] w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-[var(--foreground)] hover:bg-secondary/40 transition-all"
              >
                <LogOut className="w-5 h-5 shrink-0" />
                <span>Sign out</span>
              </button>
            </aside>
          </>
        )}

        {/* ================= MAIN CONTENT ================= */}
        <main
          className={`flex-1 p-4 sm:p-6 transition-all duration-300 ${
            sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
          }`}
        >
          {/* OVERVIEW TAB */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <div className="rounded-3xl bg-canopy text-white p-8 shadow-warm relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-sm text-emerald-100 mb-2">Selam, welcome back</p>
                  <h1 className="text-3xl font-serif font-normal mb-4 text-white">{memberDisplayName}</h1>
                  <p className="text-sm text-emerald-100 mb-6 max-w-xl">
                    Your membership is active and your contributions are up to date. Thank you for standing with
                    our neighborhood Edir.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--primary)] text-sm font-semibold hover:opacity-90 transition-all">
                      Pay this month (100 ETB)
                    </button>
                    <button className="px-5 py-2.5 rounded-lg bg-white/15 border border-white/25 text-white text-sm font-medium hover:bg-white/20 transition-all">
                      Submit a request
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                      Membership Status
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      ✓
                    </div>
                  </div>
                  <div className="text-xl font-serif font-bold text-[var(--primary)]">In good standing</div>
                  <div className="text-xs text-emerald-700 mt-1">Eligible for assistance</div>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                      This Month (Sep)
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-serif font-bold text-[var(--primary)]">100 ETB</div>
                  <div className="text-xs text-amber-700 mt-1">Due by 10 September</div>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                      2026 Contributed
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                      <Coins className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-serif font-bold text-[var(--primary)]">10,800 ETB</div>
                  <div className="text-xs text-[var(--muted-foreground)] mt-1">10,000 fee + 800 dues</div>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">
                      Open Requests
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                      <ClipboardList className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-serif font-bold text-[var(--primary)]">0</div>
                  <div className="text-xs text-emerald-700 mt-1">2 total request history</div>
                </div>
              </div>

              {/* Placeholder for more content */}
              <div className="p-8 rounded-2xl bg-card border border-[var(--border)] text-center">
                <p className="text-[var(--muted-foreground)]">More overview content coming soon...</p>
              </div>
            </div>
          )}

          {/* PROFILE TAB */}
          {activeTab === 'PROFILE' && (
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="rounded-3xl bg-card border border-[var(--border)] p-6 sm:p-8">
                <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">My Profile</h2>
                <p className="text-sm text-[var(--muted-foreground)] mb-6">
                  Your membership information as registered with the Edir committee.
                </p>

                {/* Profile Card with Avatar */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--border)]">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-2xl">
                      {memberInitials}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[var(--primary)]">{memberDisplayName}</h3>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        Member • {memberId} • In good standing
                      </p>
                    </div>
                  </div>
                  {!editMode ? (
                    <button 
                      onClick={() => setEditMode(true)}
                      className="px-5 py-2.5 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
                    >
                      Edit profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button 
                        onClick={handleSaveProfile}
                        className="px-5 py-2.5 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button 
                        onClick={handleCancelEdit}
                        className="px-5 py-2.5 rounded-lg bg-secondary/40 text-[var(--foreground)] text-sm font-semibold hover:bg-secondary/60 transition-all flex items-center gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                {/* Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {/* Full Name */}
                  <div className="p-5 rounded-2xl bg-[#f5efe3] border border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">Full Name</span>
                    </div>
                    <p className="text-base font-medium text-[var(--foreground)] ml-11">{memberDisplayName}</p>
                  </div>

                  {/* Member ID */}
                  <div className="p-5 rounded-2xl bg-[#f5efe3] border border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                        <span className="text-xs font-bold">ID</span>
                      </div>
                      <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">Member ID</span>
                    </div>
                    <p className="text-base font-medium text-[var(--foreground)] ml-11">{memberId}</p>
                  </div>

                  {/* Phone - Editable */}
                  <div className="p-5 rounded-2xl bg-[#f5efe3] border border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                        <span className="text-lg">📞</span>
                      </div>
                      <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">Phone</span>
                    </div>
                    {editMode ? (
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full ml-11 px-3 py-2 text-base font-medium text-[var(--foreground)] bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      />
                    ) : (
                      <p className="text-base font-medium text-[var(--foreground)] ml-11">{phone}</p>
                    )}
                  </div>

                  {/* Email - Editable */}
                  <div className="p-5 rounded-2xl bg-[#f5efe3] border border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                        <span className="text-lg">✉️</span>
                      </div>
                      <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">Email</span>
                    </div>
                    {editMode ? (
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full ml-11 px-3 py-2 text-base font-medium text-[var(--foreground)] bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      />
                    ) : (
                      <p className="text-base font-medium text-[var(--foreground)] ml-11">{email}</p>
                    )}
                  </div>

                  {/* Kebele */}
                  <div className="p-5 rounded-2xl bg-[#f5efe3] border border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                        <span className="text-lg">🏘️</span>
                      </div>
                      <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">Kebele</span>
                    </div>
                    <p className="text-base font-medium text-[var(--foreground)] ml-11">Kebele 08, House 214</p>
                  </div>

                  {/* Member Since */}
                  <div className="p-5 rounded-2xl bg-[#f5efe3] border border-[var(--border)]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center">
                        <span className="text-lg">📅</span>
                      </div>
                      <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase">Member Since</span>
                    </div>
                    <p className="text-base font-medium text-[var(--foreground)] ml-11">March 2024</p>
                  </div>
                </div>
              </div>

              {/* Change Password Section */}
              <div className="rounded-3xl bg-card border border-[var(--border)] p-6 sm:p-8">
                <h3 className="text-xl font-serif font-bold text-[var(--primary)] mb-1">Change Password</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-6">
                  Update your account password to keep your profile secure.
                </p>

                <form className="space-y-4 max-w-xl">
                  {/* Current Password */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your current password"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    />
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your new password"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    />
                  </div>

                  {/* Confirm New Password */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm your new password"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* OTHER TABS - Placeholders */}
          {activeTab !== 'OVERVIEW' && activeTab !== 'PROFILE' && (
            <div className="p-8 rounded-2xl bg-card border border-[var(--border)] text-center">
              <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-2">
                {navigationItems.find((item) => item.id === activeTab)?.label}
              </h2>
              <p className="text-[var(--muted-foreground)]">Content for this section coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
