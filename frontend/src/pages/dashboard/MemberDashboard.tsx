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
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
  Download,
  Plus,
  Menu,
  X,
  ShieldCheck,
  FileText,
  Coins,
  ChevronRight,
  Send,
  Building2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  HeartHandshake
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  // Mock State for interactivity
  const [thisMonthPaid, setThisMonthPaid] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'TELEBIRR' | 'CBE_BIRR' | 'BANK'>('TELEBIRR');
  const [newRequestType, setNewRequestType] = useState('DEATH_SIBLING');
  const [newRequestDesc, setNewRequestDesc] = useState('');
  const [requestSuccess, setRequestSuccess] = useState(false);

  // Notifications / Announcements state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      sender: 'Chairperson',
      title: 'Quarterly General Assembly Meeting',
      date: 'Sep 10, 2026 • 9:00 AM',
      read: false,
      message: 'All members are cordially invited to the upcoming General Assembly at Kebele 05 Community Hall. Attendance is mandatory as per Article 7.'
    },
    {
      id: 2,
      sender: 'Treasurer',
      title: 'Monthly Contributions Reminder',
      date: 'Sep 01, 2026',
      read: false,
      message: 'Monthly contribution of 100 ETB is due by the 25th of this month. Late payments incur a 10 ETB penalty per unpaid month.'
    },
    {
      id: 3,
      sender: 'Secretary',
      title: 'Updated Sibling Verification Documents',
      date: 'Aug 24, 2026',
      read: true,
      message: 'Please ensure sibling death verification includes a valid kebele death certificate and proof of family relationship to expedite the 15,000 ETB payout.'
    }
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  // 12 Months tracker data (Ethiopian / Julian financial calendar 2026)
  const monthsData = [
    { name: 'Jan', status: 'PAID', amount: '100 ETB' },
    { name: 'Feb', status: 'PAID', amount: '100 ETB' },
    { name: 'Mar', status: 'PAID', amount: '100 ETB' },
    { name: 'Apr', status: 'PAID', amount: '100 ETB' },
    { name: 'May', status: 'PAID', amount: '100 ETB' },
    { name: 'Jun', status: 'PAID', amount: '100 ETB' },
    { name: 'Jul', status: 'PAID', amount: '100 ETB' },
    { name: 'Aug', status: 'PAID', amount: '100 ETB' },
    { name: 'Sep', status: thisMonthPaid ? 'PAID' : 'DUE', amount: '100 ETB' },
    { name: 'Oct', status: 'UPCOMING', amount: '100 ETB' },
    { name: 'Nov', status: 'UPCOMING', amount: '100 ETB' },
    { name: 'Dec', status: 'UPCOMING', amount: '100 ETB' }
  ];

  // Requests Data
  const [requests, setRequests] = useState([
    {
      id: 'REQ-2026-014',
      type: "Death of Sibling (Bereavement)",
      beneficiary: "Abebe Bekele (Brother)",
      amount: "15,000 ETB",
      date: "Aug 14, 2026",
      status: "APPROVED",
      statusText: "Approved by Committee",
      notes: "Verification documents authenticated by Secretary. Payment authorized."
    },
    {
      id: 'REQ-2026-009',
      type: "Equipment Loan (Tents & Chairs)",
      beneficiary: "Family Memorial Service",
      amount: "50 Chairs, 2 Tents",
      date: "May 22, 2026",
      status: "COMPLETED",
      statusText: "Returned in Good Order",
      notes: "Checked in by Inventory Officer."
    }
  ]);

  // Payment History
  const paymentHistory = [
    ...(thisMonthPaid ? [{
      id: 'TXN-98442',
      title: 'September 2026 Monthly Contribution',
      category: 'Monthly Due',
      amount: '100 ETB',
      date: 'Today',
      method: selectedPaymentMethod,
      status: 'VERIFIED'
    }] : []),
    {
      id: 'TXN-94211',
      title: 'August 2026 Monthly Contribution',
      category: 'Monthly Due',
      amount: '100 ETB',
      date: 'Aug 18, 2026',
      method: 'Telebirr',
      status: 'VERIFIED'
    },
    {
      id: 'TXN-89214',
      title: 'July 2026 Monthly Contribution',
      category: 'Monthly Due',
      amount: '100 ETB',
      date: 'Jul 21, 2026',
      method: 'CBE Birr',
      status: 'VERIFIED'
    },
    {
      id: 'TXN-82001',
      title: 'Late Payment Penalty (June)',
      category: 'Penalty Settled',
      amount: '10 ETB',
      date: 'Jun 28, 2026',
      method: 'Telebirr',
      status: 'VERIFIED'
    },
    {
      id: 'TXN-81992',
      title: 'June 2026 Monthly Contribution',
      category: 'Monthly Due',
      amount: '100 ETB',
      date: 'Jun 28, 2026',
      method: 'Telebirr',
      status: 'VERIFIED'
    },
    {
      id: 'TXN-10001',
      title: 'One-Time Membership Joining Fee',
      category: 'Joining Fee (Non-refundable)',
      amount: '10,000 ETB',
      date: 'Jan 05, 2026',
      method: 'Bank Transfer (CBE)',
      status: 'VERIFIED'
    }
  ];

  // Attendance Records
  const attendanceRecords = [
    { date: 'Aug 15, 2026', event: 'Bereavement Gathering - Ato Girma', status: 'PRESENT' },
    { date: 'Jul 10, 2026', event: 'Mid-Year Community Assembly', status: 'PRESENT' },
    { date: 'Jun 05, 2026', event: 'Equipment Maintenance Day', status: 'EXCUSED' },
    { date: 'Apr 20, 2026', event: 'Bereavement Gathering - W/ro Martha', status: 'PRESENT' }
  ];

  const handlePaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setThisMonthPaid(true);
    setShowPaymentModal(false);
  };

  const handleNewRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount =
      newRequestType === 'DEATH_MEMBER'
        ? '25,000 ETB'
        : newRequestType === 'DEATH_SIBLING'
        ? '15,000 ETB'
        : 'Equipment Support';

    const typeTitle =
      newRequestType === 'DEATH_MEMBER'
        ? 'Death of Member (Family Assistance)'
        : newRequestType === 'DEATH_SIBLING'
        ? 'Death of Member Sibling'
        : 'Community Equipment Request';

    setRequests((prev) => [
      {
        id: `REQ-2026-0${prev.length + 15}`,
        type: typeTitle,
        beneficiary: currentUser?.fullName || 'Self',
        amount,
        date: 'Just now',
        status: 'PENDING',
        statusText: 'Under Committee Review',
        notes: newRequestDesc || 'Submitted for verification under Edir Bylaws.'
      },
      ...prev
    ]);
    setRequestSuccess(true);
    setTimeout(() => {
      setRequestSuccess(false);
      setShowRequestModal(false);
      setNewRequestDesc('');
    }, 1500);
  };

  const memberDisplayName = currentUser?.fullName || 'Selam Bekele';
  const memberInitials = memberDisplayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-background text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-white flex flex-col">
      {/* ================= 1. STICKY HEADER ================= */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-[var(--border)] h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Mobile Hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary/40 text-[var(--foreground)]"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/logo.jpg" alt="YegnaEdir Logo" className="w-8 h-8 rounded-xl object-contain shadow-xs" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-[var(--primary)] leading-none tracking-tight">
                  YegnaEdir
                </span>
                <span className="text-[10px] font-mono text-[var(--muted-foreground)] tracking-widest uppercase">
                  Member Portal
                </span>
              </div>
            </div>
          </div>

          {/* Right Header: Notification Bell & Member Chip */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Notification Bell with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2.5 rounded-xl bg-card border border-[var(--border)] text-[var(--foreground)] hover:bg-secondary/40 transition-colors shadow-2xs cursor-pointer"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4 text-[var(--primary)]" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 text-white font-mono text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Flyout */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-card border border-[var(--border)] shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-4 bg-secondary/40 border-b border-[var(--border)] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Megaphone className="w-4 h-4 text-[var(--primary)]" />
                      <h4 className="font-serif font-bold text-sm text-[var(--primary)]">Announcements</h4>
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllNotificationsRead}
                        className="text-[11px] text-[var(--primary)] hover:underline font-medium cursor-pointer"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-[var(--border)]">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`p-4 transition-colors ${n.read ? 'bg-card' : 'bg-primary/5'}`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-primary/10 text-[var(--primary)]">
                            {n.sender}
                          </span>
                          <span className="text-[10px] text-[var(--muted-foreground)]">{n.date}</span>
                        </div>
                        <h5 className="text-xs font-semibold text-[var(--foreground)] mb-1">{n.title}</h5>
                        <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">{n.message}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 bg-secondary/20 text-center border-t border-[var(--border)]">
                    <button
                      onClick={() => {
                        setShowNotifications(false);
                        setActiveTab('ANNOUNCEMENTS');
                      }}
                      className="text-xs text-[var(--primary)] font-semibold hover:underline"
                    >
                      View All Community Announcements
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Member Chip */}
            <div className="flex items-center gap-2.5 pl-2 sm:pl-3 border-l border-[var(--border)]">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center font-serif font-bold text-xs shadow-xs">
                {memberInitials}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-semibold text-[var(--foreground)] leading-tight">
                  {memberDisplayName}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
                    {currentUser?.memberId || 'YE-2026-089'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ================= 2. MAIN LAYOUT WITH SIDEBAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full flex-1 flex gap-8">
        
        {/* ================= LEFT SIDEBAR NAV ================= */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-[var(--border)] p-6 flex flex-col justify-between transition-transform duration-200 lg:static lg:w-60 lg:border-r-0 lg:p-0 lg:bg-transparent ${
            mobileNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between lg:hidden mb-6 pb-4 border-b border-[var(--border)]">
            <span className="font-serif font-bold text-base text-[var(--primary)]">Portal Menu</span>
            <button
              onClick={() => setMobileNavOpen(false)}
              className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 flex-1">
            {[
              { id: 'OVERVIEW', label: 'Overview', icon: CheckCircle2 },
              { id: 'PROFILE', label: 'Profile', icon: User },
              { id: 'CONTRIBUTIONS', label: 'Contributions', icon: CreditCard },
              { id: 'PAYMENT_HISTORY', label: 'Payment History', icon: History },
              { id: 'REQUESTS', label: 'Requests', icon: ClipboardList },
              { id: 'ANNOUNCEMENTS', label: 'Announcements', icon: Megaphone },
              { id: 'ATTENDANCE', label: 'Attendance', icon: CalendarCheck }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as DashboardTab);
                    setMobileNavOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-xs font-semibold'
                      : 'text-[var(--foreground)]/80 hover:bg-secondary/40 hover:text-[var(--primary)]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[var(--accent)]' : 'text-[var(--primary)]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Member Card & Sign Out at bottom of Sidebar */}
          <div className="pt-6 border-t border-[var(--border)] space-y-3">
            <div className="p-3.5 rounded-2xl bg-card border border-[var(--border)] shadow-2xs">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-[11px] font-semibold text-[var(--foreground)]">Good Standing</span>
              </div>
              <p className="text-[10px] text-[var(--muted-foreground)]">
                Assistance benefits are active with 0 waiting period.
              </p>
            </div>

            <button
              onClick={logout}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-rose-700 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Backdrop for mobile drawer */}
        {mobileNavOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileNavOpen(false)}
          />
        )}

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="flex-1 w-full space-y-8 min-w-0">

          {/* ================= TAB 1: OVERVIEW ================= */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-8">
              
              {/* 1. GRADIENT WELCOME BANNER */}
              <div className="rounded-3xl bg-canopy text-white p-6 sm:p-8 lg:p-10 shadow-warm relative overflow-hidden">
                <div className="relative z-10 max-w-2xl space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-mono text-[var(--accent)]">
                    <span>MESKEREM 2026</span>
                    <span>•</span>
                    <span>ACTIVE EDIR MEMBER</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal leading-tight text-white">
                    Welcome back, {memberDisplayName}!
                  </h2>

                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                    Your monthly contributions and member profile are up to date. You are in full good standing for mutual assistance and community benefits.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setShowPaymentModal(true)}
                      className="px-5 py-2.5 rounded-xl bg-white text-[var(--primary)] text-xs font-semibold hover:bg-emerald-50 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                      <Coins className="w-4 h-4 text-[var(--accent)]" />
                      <span>{thisMonthPaid ? 'Contribution Paid ✓' : 'Pay this month (100 ETB)'}</span>
                    </button>
                    <button
                      onClick={() => setShowRequestModal(true)}
                      className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/20 border border-white/25 text-white text-xs font-medium transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <HeartHandshake className="w-4 h-4 text-emerald-200" />
                      <span>Submit a request</span>
                    </button>
                  </div>
                </div>

                {/* Decorative background watermark */}
                <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none hidden md:block">
                  <Coins className="w-64 h-64 text-white" />
                </div>
              </div>

              {/* 2. FOUR STAT CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Stat 1: Membership Status */}
                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[var(--muted-foreground)] uppercase">Status</span>
                    <span className="w-6 h-6 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-serif font-bold text-[var(--primary)] block">Good Standing</span>
                    <span className="text-xs text-emerald-800 font-medium flex items-center gap-1 mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Joining Fee Settled (10k)
                    </span>
                  </div>
                </div>

                {/* Stat 2: This Month's Due */}
                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[var(--muted-foreground)] uppercase">This Month (Sep)</span>
                    <span className="w-6 h-6 rounded-lg bg-primary/10 text-[var(--primary)] flex items-center justify-center">
                      <CreditCard className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl font-serif font-bold text-[var(--primary)] block">
                      {thisMonthPaid ? '0 ETB' : '100 ETB'}
                    </span>
                    <span className={`text-xs font-medium block mt-1 ${thisMonthPaid ? 'text-emerald-700' : 'text-amber-800'}`}>
                      {thisMonthPaid ? 'Settled for September' : 'Due by September 25'}
                    </span>
                  </div>
                </div>

                {/* Stat 3: 2026 Total Contributions */}
                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[var(--muted-foreground)] uppercase">2026 Contributed</span>
                    <span className="w-6 h-6 rounded-lg bg-primary/10 text-[var(--primary)] flex items-center justify-center">
                      <Coins className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl font-serif font-bold text-[var(--primary)] block">
                      {thisMonthPaid ? '10,900 ETB' : '10,800 ETB'}
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)] block mt-1">
                      10,000 fee + {thisMonthPaid ? '900' : '800'} dues
                    </span>
                  </div>
                </div>

                {/* Stat 4: Open Requests */}
                <div className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[var(--muted-foreground)] uppercase">Open Requests</span>
                    <span className="w-6 h-6 rounded-lg bg-primary/10 text-[var(--primary)] flex items-center justify-center">
                      <ClipboardList className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl font-serif font-bold text-[var(--primary)] block">
                      {requests.filter(r => r.status === 'PENDING').length}
                    </span>
                    <span className="text-xs text-emerald-800 font-medium block mt-1">
                      {requests.length} total request history
                    </span>
                  </div>
                </div>

              </div>

              {/* 3. CONTRIBUTIONS PANEL WITH 12-MONTH PROGRESS TRACKER */}
              <div className="p-6 sm:p-7 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">
                      ANNUAL CONTRIBUTION TRACKER
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[var(--primary)]">
                      2026 Monthly Due Progress
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[var(--muted-foreground)]">
                      Standard monthly contribution: <strong className="text-[var(--primary)]">100 ETB</strong>
                    </span>
                    {!thisMonthPaid && (
                      <button
                        onClick={() => setShowPaymentModal(true)}
                        className="px-3.5 py-1.5 rounded-lg bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-90 transition-all cursor-pointer"
                      >
                        Pay September
                      </button>
                    )}
                  </div>
                </div>

                {/* 12-Month Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {monthsData.map((m, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-center transition-all ${
                        m.status === 'PAID'
                          ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                          : m.status === 'DUE'
                          ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs'
                          : 'bg-secondary/30 border-[var(--border)] text-[var(--muted-foreground)]'
                      }`}
                    >
                      <span className="text-xs font-bold block">{m.name}</span>
                      <span className="text-[11px] font-mono block mt-1">{m.amount}</span>
                      <div className="mt-2 flex items-center justify-center">
                        {m.status === 'PAID' ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-md">
                            <CheckCircle2 className="w-3 h-3" /> Paid
                          </span>
                        ) : m.status === 'DUE' ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-md">
                            <Clock className="w-3 h-3" /> Due Now
                          </span>
                        ) : (
                          <span className="text-[10px] text-stone-400">Upcoming</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--muted-foreground)] pt-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Paid
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Current Due
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-stone-300" /> Upcoming
                    </span>
                  </div>
                  <p className="italic text-[11px]">
                    *Note: Article 5 charges 10 ETB penalty per unpaid month after payment deadline.
                  </p>
                </div>
              </div>

              {/* 4. TWO-COLUMN GRID: RECENT PAYMENTS & MY REQUESTS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Recent Payment History (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">LEDGER</span>
                      <h4 className="font-serif font-bold text-lg text-[var(--primary)]">Recent Payments</h4>
                    </div>
                    <button
                      onClick={() => setActiveTab('PAYMENT_HISTORY')}
                      className="text-xs text-[var(--primary)] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>View full history</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="divide-y divide-[var(--border)]">
                    {paymentHistory.slice(0, 4).map((p) => (
                      <div key={p.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                            <CreditCard className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-[var(--foreground)]">{p.title}</p>
                            <p className="text-[11px] text-[var(--muted-foreground)]">
                              {p.date} • via {p.method} • <span className="font-mono">{p.id}</span>
                            </p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-serif font-bold text-sm text-[var(--primary)] block">{p.amount}</span>
                          <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                            {p.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: My Requests & Membership Summary (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Requests Summary Card */}
                  <div className="p-6 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">SUPPORT</span>
                        <h4 className="font-serif font-bold text-lg text-[var(--primary)]">My Requests</h4>
                      </div>
                      <button
                        onClick={() => setShowRequestModal(true)}
                        className="px-2.5 py-1 rounded-lg bg-primary/10 text-[var(--primary)] text-xs font-semibold hover:bg-primary/15 transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" /> New
                      </button>
                    </div>

                    <div className="space-y-3">
                      {requests.map((r) => (
                        <div key={r.id} className="p-3.5 rounded-xl bg-secondary/30 border border-[var(--border)] space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-xs text-[var(--foreground)]">{r.type}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              r.status === 'APPROVED' || r.status === 'COMPLETED'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-900'
                            }`}>
                              {r.statusText}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                            <span>Amount: <strong className="text-[var(--primary)]">{r.amount}</strong></span>
                            <span>{r.date}</span>
                          </div>
                          <p className="text-[11px] text-[var(--muted-foreground)] italic">{r.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Membership Info Card */}
                  <div className="p-6 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[var(--primary)]" />
                      <h4 className="font-serif font-bold text-base text-[var(--primary)]">Membership Record</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Member ID</span>
                        <span className="font-semibold text-[var(--foreground)]">{currentUser?.memberId || 'YE-2026-089'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Joined Date</span>
                        <span className="font-semibold text-[var(--foreground)]">Jan 05, 2026</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Location</span>
                        <span className="font-semibold text-[var(--foreground)]">Woreda 03, Kebele 05</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)] block">Joining Fee</span>
                        <span className="font-semibold text-emerald-800">10,000 ETB (Paid)</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* ================= TAB 2: PROFILE ================= */}
          {activeTab === 'PROFILE' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-6">
              <div className="pb-4 border-b border-[var(--border)]">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">MEMBER DOSSIER</span>
                <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">My Membership Profile</h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  Keep your personal and family links accurate for verification during bereavement assistance claims.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--muted-foreground)] mb-1">Full Name</label>
                    <div className="p-3 bg-secondary/30 rounded-xl border border-[var(--border)] font-semibold text-[var(--foreground)]">
                      {memberDisplayName}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--muted-foreground)] mb-1">Phone Number</label>
                    <div className="p-3 bg-secondary/30 rounded-xl border border-[var(--border)] font-semibold text-[var(--foreground)] flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[var(--primary)]" />
                      <span>{currentUser?.phone || '+251 911 00 11 22'}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--muted-foreground)] mb-1">Email Address</label>
                    <div className="p-3 bg-secondary/30 rounded-xl border border-[var(--border)] font-semibold text-[var(--foreground)] flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[var(--primary)]" />
                      <span>{currentUser?.email || 'selam@example.com'}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--muted-foreground)] mb-1">Residence</label>
                    <div className="p-3 bg-secondary/30 rounded-xl border border-[var(--border)] font-semibold text-[var(--foreground)] flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--primary)]" />
                      <span>Woreda 03, Kebele 05, Addis Ababa</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--muted-foreground)] mb-1">Member Status</label>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verified & In Good Standing</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--muted-foreground)] mb-1">Bylaws Agreement</label>
                    <div className="p-3 bg-secondary/30 rounded-xl border border-[var(--border)] text-xs text-[var(--foreground)] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                      <span>Accepted Membership & Financial Assistance Rules</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 3: CONTRIBUTIONS ================= */}
          {activeTab === 'CONTRIBUTIONS' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">CONTRIBUTIONS</span>
                  <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">Monthly Dues & Schedule</h3>
                </div>
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-95 transition-all shadow-sm"
                >
                  Pay Monthly Contribution (100 ETB)
                </button>
              </div>

              {/* Breakdown cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-secondary/30 border border-[var(--border)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)]">Joining Fee</span>
                  <p className="text-xl font-serif font-bold text-[var(--primary)] mt-1">10,000 ETB</p>
                  <span className="text-xs text-emerald-700 font-medium">✓ Settled on registration</span>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/30 border border-[var(--border)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)]">Monthly Contribution</span>
                  <p className="text-xl font-serif font-bold text-[var(--primary)] mt-1">100 ETB / mo</p>
                  <span className="text-xs text-[var(--muted-foreground)]">Continuous requirement</span>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/30 border border-[var(--border)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--muted-foreground)]">Late Penalty Rule</span>
                  <p className="text-xl font-serif font-bold text-rose-700 mt-1">10 ETB / mo</p>
                  <span className="text-xs text-rose-700">Per unpaid month</span>
                </div>
              </div>

              {/* Schedule list */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-base text-[var(--primary)]">Full 2026 Payment Calendar</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {monthsData.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl border border-[var(--border)] bg-card text-center text-xs">
                      <span className="font-bold block">{m.name} 2026</span>
                      <span className="text-[11px] text-[var(--muted-foreground)] block mt-0.5">{m.amount}</span>
                      <span className={`mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                        m.status === 'PAID' ? 'bg-emerald-100 text-emerald-800' : m.status === 'DUE' ? 'bg-amber-100 text-amber-900' : 'bg-stone-100 text-stone-500'
                      }`}>
                        {m.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: PAYMENT HISTORY ================= */}
          {activeTab === 'PAYMENT_HISTORY' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">TRANSACTION LEDGER</span>
                  <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">Official Payment History</h3>
                </div>
                <button
                  onClick={() => alert('Downloading official receipt statement (PDF)...')}
                  className="px-3.5 py-2 rounded-xl bg-secondary/50 border border-[var(--border)] text-xs font-medium hover:bg-secondary transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Statement
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[var(--border)] text-[var(--muted-foreground)] font-mono uppercase">
                      <th className="pb-3 font-semibold">Txn ID</th>
                      <th className="pb-3 font-semibold">Description</th>
                      <th className="pb-3 font-semibold">Category</th>
                      <th className="pb-3 font-semibold">Date</th>
                      <th className="pb-3 font-semibold">Method</th>
                      <th className="pb-3 font-semibold text-right">Amount</th>
                      <th className="pb-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {paymentHistory.map((p) => (
                      <tr key={p.id} className="hover:bg-secondary/20 transition-colors">
                        <td className="py-3.5 font-mono text-[11px] text-[var(--muted-foreground)]">{p.id}</td>
                        <td className="py-3.5 font-semibold text-[var(--foreground)]">{p.title}</td>
                        <td className="py-3.5 text-[var(--muted-foreground)]">{p.category}</td>
                        <td className="py-3.5 text-[var(--muted-foreground)]">{p.date}</td>
                        <td className="py-3.5 text-[var(--muted-foreground)]">{p.method}</td>
                        <td className="py-3.5 font-serif font-bold text-sm text-[var(--primary)] text-right">{p.amount}</td>
                        <td className="py-3.5 text-right">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= TAB 5: REQUESTS ================= */}
          {activeTab === 'REQUESTS' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">COMMUNITY SUPPORT</span>
                  <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">Bereavement & Assistance Claims</h3>
                </div>
                <button
                  onClick={() => setShowRequestModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-95 transition-all shadow-sm flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Submit New Request
                </button>
              </div>

              {/* Rules Reminder Callout */}
              <div className="p-4 rounded-2xl bg-secondary/40 border border-[var(--border)] flex items-start gap-3 text-xs text-[var(--muted-foreground)]">
                <AlertCircle className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[var(--foreground)] block">Financial Assistance Policy Rules:</span>
                  <span>
                    • Member death: <strong>25,000 ETB</strong> to family • Member's sibling death: <strong>15,000 ETB</strong> to member. Immediate eligibility with 0-day waiting period for members in good standing.
                  </span>
                </div>
              </div>

              {/* Requests List */}
              <div className="space-y-4">
                {requests.map((r) => (
                  <div key={r.id} className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[var(--border)]">
                      <div>
                        <span className="font-mono text-[10px] text-[var(--muted-foreground)]">{r.id}</span>
                        <h4 className="font-serif font-bold text-base text-[var(--primary)]">{r.type}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto ${
                        r.status === 'APPROVED' || r.status === 'COMPLETED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}>
                        {r.statusText}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase block">Beneficiary / Reason</span>
                        <span className="font-semibold text-[var(--foreground)]">{r.beneficiary}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase block">Assistance Amount</span>
                        <span className="font-serif font-bold text-sm text-[var(--primary)]">{r.amount}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase block">Date Submitted</span>
                        <span className="text-[var(--foreground)]">{r.date}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-secondary/30 text-xs text-[var(--muted-foreground)]">
                      <strong>Committee Audit Notes:</strong> {r.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 6: ANNOUNCEMENTS ================= */}
          {activeTab === 'ANNOUNCEMENTS' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-6">
              <div className="pb-4 border-b border-[var(--border)]">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">OFFICIAL DISPATCHES</span>
                <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">Announcements & Notifications</h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  Official communications sent by your Chairperson, Secretary, and Treasurer.
                </p>
              </div>

              <div className="space-y-4">
                {notifications.map((n) => (
                  <div key={n.id} className="p-5 rounded-2xl bg-card border border-[var(--border)] shadow-xs space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-primary/10 text-[var(--primary)]">
                        {n.sender} Dispatch
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {n.date}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-[var(--primary)]">{n.title}</h4>
                    <p className="text-xs sm:text-sm text-[var(--foreground)]/80 leading-relaxed">{n.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 7: ATTENDANCE ================= */}
          {activeTab === 'ATTENDANCE' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-[var(--border)] shadow-xs space-y-6">
              <div className="pb-4 border-b border-[var(--border)]">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">COMMUNITY PARTICIPATION</span>
                <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">Edir Attendance Record</h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  Under Article 7 of Yegna Edir, active participation in gatherings and funeral services is a member responsibility.
                </p>
              </div>

              <div className="space-y-3">
                {attendanceRecords.map((att, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-card border border-[var(--border)] shadow-xs flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                        <CalendarCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[var(--foreground)]">{att.event}</p>
                        <p className="text-[11px] text-[var(--muted-foreground)]">{att.date}</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      att.status === 'PRESENT' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {att.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

      </div>

      {/* ================= PAYMENT MODAL ================= */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card rounded-3xl w-full max-w-md p-6 sm:p-8 border border-[var(--border)] shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">ONLINE CONTRIBUTION</span>
                <h3 className="text-xl font-serif font-bold text-[var(--primary)]">Pay Monthly Contribution</h3>
              </div>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="p-1.5 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-secondary/40 border border-[var(--border)] flex items-center justify-between">
              <div>
                <span className="text-xs text-[var(--muted-foreground)] block">September 2026 Due</span>
                <span className="text-2xl font-serif font-bold text-[var(--primary)]">100 ETB</span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">Standard Due</span>
            </div>

            <form onSubmit={handlePaySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-2">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'TELEBIRR', label: 'Telebirr' },
                    { id: 'CBE_BIRR', label: 'CBE Birr' },
                    { id: 'BANK', label: 'Bank (CBE)' }
                  ].map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setSelectedPaymentMethod(m.id as any)}
                      className={`p-3 rounded-xl border text-center font-medium transition-all ${
                        selectedPaymentMethod === m.id
                          ? 'border-[var(--primary)] bg-primary/10 text-[var(--primary)] font-bold'
                          : 'border-[var(--border)] bg-card text-[var(--muted-foreground)] hover:bg-secondary/30'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Payer Phone / Account</label>
                <input
                  type="text"
                  defaultValue="+251 911 00 11 22"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-card text-xs"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-95 transition-all shadow-sm cursor-pointer"
              >
                Confirm Payment of 100 ETB
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= SUBMIT REQUEST MODAL ================= */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card rounded-3xl w-full max-w-lg p-6 sm:p-8 border border-[var(--border)] shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">EDIR BYLAWS BENEFIT</span>
                <h3 className="text-xl font-serif font-bold text-[var(--primary)]">Submit Assistance Request</h3>
              </div>
              <button
                onClick={() => setShowRequestModal(false)}
                className="p-1.5 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {requestSuccess ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-base text-emerald-900">Request Submitted Successfully</h4>
                <p className="text-xs text-emerald-800">
                  Your claim has been registered and forwarded to the Yegna Edir Committee for authentication.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewRequestSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold mb-1.5">Request Type</label>
                  <select
                    value={newRequestType}
                    onChange={(e) => setNewRequestType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-card text-xs font-medium"
                  >
                    <option value="DEATH_SIBLING">Death of Sibling (15,000 ETB Benefit)</option>
                    <option value="DEATH_MEMBER">Death of Member (25,000 ETB to Family)</option>
                    <option value="EQUIPMENT">Equipment Support (Tents & Chairs)</option>
                  </select>
                </div>

                <div className="p-3.5 rounded-xl bg-secondary/40 border border-[var(--border)] text-[var(--muted-foreground)] leading-relaxed">
                  {newRequestType === 'DEATH_SIBLING' && (
                    <p>Under Article 3, the member receives <strong>15,000 ETB</strong>. Verification documentation (Kebele death certificate) will be requested by the Committee.</p>
                  )}
                  {newRequestType === 'DEATH_MEMBER' && (
                    <p>Under Article 2, the registered member's family receives <strong>25,000 ETB</strong> for funeral expenses.</p>
                  )}
                  {newRequestType === 'EQUIPMENT' && (
                    <p>Community equipment (tents, chairs, utensils) handled by Inventory Officer.</p>
                  )}
                </div>

                <div>
                  <label className="block font-semibold mb-1">Details & Additional Information</label>
                  <textarea
                    rows={3}
                    placeholder="Provide names, dates, and relevant details..."
                    value={newRequestDesc}
                    onChange={(e) => setNewRequestDesc(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[var(--border)] bg-card text-xs resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold hover:opacity-95 transition-all shadow-sm cursor-pointer"
                >
                  Submit Request to Committee
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
