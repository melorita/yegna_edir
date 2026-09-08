import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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
  Users,
  FileText,
  DollarSign,
  Package,
  ShieldCheck
} from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const { currentUser, roleWorkspace, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const memberDisplayName = currentUser?.fullName || 'Melat Tesfaye';
  const memberInitials = memberDisplayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const memberId = currentUser?.memberId || 'YE-0142';

  // Common member navigation items
  const navigationItems = [
    { path: '/dashboard', label: 'Overview', icon: Home },
    { path: '/dashboard/profile', label: 'My Profile', icon: User },
    { path: '/dashboard/contributions', label: 'Contributions', icon: CreditCard },
    { path: '/dashboard/payment-history', label: 'Payment History', icon: History },
    { path: '/dashboard/requests', label: 'Requests', icon: ClipboardList },
    { path: '/dashboard/announcements', label: 'Announcements', icon: Megaphone },
    { path: '/dashboard/attendance', label: 'Attendance', icon: CalendarCheck }
  ];

  // Icon mapping for role workspaces
  const iconMap: Record<string, React.ComponentType<any>> = {
    Users,
    FileText,
    DollarSign,
    Package,
    ShieldCheck
  };

  // Add role workspace to navigation if user has a special role
  const allNavigationItems = roleWorkspace
    ? [
        ...navigationItems,
        {
          path: roleWorkspace.workspacePath,
          label: roleWorkspace.workspaceLabel,
          icon: iconMap[roleWorkspace.workspaceIcon] || Users
        }
      ]
    : navigationItems;

  const isActiveRoute = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
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
                {allNavigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActiveRoute(item.path);
                  return (
                    <button
                      key={item.path}
                      onClick={() => navigate(item.path)}
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
                {allNavigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActiveRoute(item.path);
                  return (
                    <button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
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
          <Outlet />
        </main>
      </div>
    </div>
  );
};
