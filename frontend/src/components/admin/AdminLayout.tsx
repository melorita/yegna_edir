import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  UserCog,
  Shield,
  Settings as SettingsIcon,
  FileText,
  Bell,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  LogOut,
  AlertTriangle,
  ClipboardList,
  Building2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface AdminLayoutProps {
  currentView: string;
  onNavigate: (view: string) => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ currentView, onNavigate, children }) => {
  const { currentUser, logout } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const adminName = currentUser?.fullName || 'System Administrator';
  const adminInitials = adminName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  // Admin navigation structure
  const navigationItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard, section: 'main' },
    { id: 'users', label: 'All Users', icon: Users, section: 'users' },
    { id: 'registrations', label: 'Registrations', icon: ClipboardList, section: 'users' },
    { id: 'committee', label: 'Committee', icon: UserCog, section: 'users' },
    { id: 'roles', label: 'Roles & Permissions', icon: Shield, section: 'access' },
    { id: 'edir-config', label: 'Edir Configuration', icon: Building2, section: 'edir' },
    { id: 'audit-logs', label: 'Audit Logs', icon: FileText, section: 'monitoring' },
    { id: 'security', label: 'Security', icon: AlertTriangle, section: 'monitoring' },
    { id: 'notifications', label: 'Notifications', icon: Bell, section: 'communication' },
    { id: 'reports', label: 'Platform Reports', icon: FileText, section: 'reports' },
    { id: 'settings', label: 'System Settings', icon: SettingsIcon, section: 'settings' }
  ];

  const sections = [
    { id: 'main', label: '' },
    { id: 'users', label: 'User Management' },
    { id: 'access', label: 'Access Control' },
    { id: 'edir', label: 'Edir Configuration' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'communication', label: 'Communication' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' }
  ];

  const handleLogout = () => {
    logout();
    try {
      window.history.pushState({}, '', '/');
    } catch {
      // Ignore if not supported
    }
    window.location.reload();
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
                  Admin Portal
                </span>
              </div>
            </div>
          </div>

          {/* Right: Notifications + Admin info */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-secondary/40 transition-colors">
              <Bell className="w-5 h-5 text-[var(--primary)]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-[var(--border)]">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm">
                {adminInitials}
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-[var(--foreground)]">
                  {adminName}
                </div>
                <div className="text-xs text-[var(--muted-foreground)]">
                  Administrator
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
              <nav className="flex-1 overflow-y-auto space-y-6">
                {sections.map((section) => {
                  const items = navigationItems.filter((item) => item.section === section.id);
                  if (items.length === 0) return null;

                  return (
                    <div key={section.id}>
                      {section.label && (
                        <div className="px-2 mb-2">
                          <span className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                            {section.label}
                          </span>
                        </div>
                      )}
                      <div className="space-y-1">
                        {items.map((item) => {
                          const Icon = item.icon;
                          const isActive = currentView === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                onNavigate(item.id);
                                setMobileMenuOpen(false);
                              }}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${
                                isActive
                                  ? 'bg-[var(--primary)] text-white shadow-sm'
                                  : 'text-[var(--foreground)] hover:bg-[#f5f0e8]'
                              }`}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span>{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="mt-4 w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </aside>
        )}

        {/* ================= DESKTOP SIDEBAR (COLLAPSED) ================= */}
        {sidebarCollapsed && (
          <aside className="hidden lg:block fixed top-20 left-4 bottom-4 w-16 z-40">
            <div className="h-full p-2 rounded-3xl bg-card border border-[var(--border)] shadow-sm flex flex-col items-center">
              {/* Expand toggle */}
              <button
                onClick={() => setSidebarCollapsed(false)}
                className="mb-4 p-2 rounded-lg hover:bg-secondary/40 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)]" />
              </button>

              {/* Navigation Icons */}
              <nav className="flex-1 overflow-y-auto space-y-2 w-full">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`w-full p-2.5 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[var(--primary)] text-white'
                          : 'text-[var(--foreground)] hover:bg-[#f5f0e8]'
                      }`}
                      title={item.label}
                    >
                      <Icon className="w-5 h-5 mx-auto" />
                    </button>
                  );
                })}
              </nav>

              {/* Logout Icon */}
              <button
                onClick={handleLogout}
                className="mt-4 w-full p-2.5 rounded-xl text-rose-600 hover:bg-rose-50 transition-all"
                title="Logout"
              >
                <LogOut className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </aside>
        )}

        {/* ================= MOBILE SIDEBAR ================= */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="lg:hidden fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <aside className="lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-card border-r border-[var(--border)] z-50 p-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.jpg" alt="YegnaEdir" className="w-8 h-8 rounded-xl object-contain" />
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-lg text-[var(--primary)] leading-none">
                      YegnaEdir
                    </span>
                    <span className="text-[9px] font-mono text-[var(--muted-foreground)] uppercase tracking-widest">
                      Admin Portal
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-secondary/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-6">
                {sections.map((section) => {
                  const items = navigationItems.filter((item) => item.section === section.id);
                  if (items.length === 0) return null;

                  return (
                    <div key={section.id}>
                      {section.label && (
                        <div className="px-2 mb-2">
                          <span className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                            {section.label}
                          </span>
                        </div>
                      )}
                      <div className="space-y-1">
                        {items.map((item) => {
                          const Icon = item.icon;
                          const isActive = currentView === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                onNavigate(item.id);
                                setMobileMenuOpen(false);
                              }}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${
                                isActive
                                  ? 'bg-[var(--primary)] text-white shadow-sm'
                                  : 'text-[var(--foreground)] hover:bg-[#f5f0e8]'
                              }`}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span>{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="mt-6 w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </aside>
          </>
        )}

        {/* ================= MAIN CONTENT ================= */}
        <main className={`flex-1 transition-all ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-60'} px-4 sm:px-6 lg:px-8 py-6`}>
          {children}
        </main>
      </div>
    </div>
  );
};
