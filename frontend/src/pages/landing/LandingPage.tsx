import React from 'react';
import {
  User,
  CreditCard,
  ClipboardList,
  ClipboardCheck,
  Megaphone,
  ShieldCheck,
  FileText,
  Boxes,
  HeartHandshake,
  Heart,
  Users,
  CheckCircle2,
  MessageSquare,
  Banknote
} from 'lucide-react';

interface LandingPageProps {
  onNavigateToAuth: (mode: 'REGISTER' | 'LOGIN') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToAuth }) => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-white">

      {/* ================= 1. HEADER / NAVBAR ================= */}
      <header className="sticky top-0 z-40 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Wordmark */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/logo.jpg" alt="YegnaEdir Logo" className="w-8 h-8 object-contain rounded-xl" />
            <span className="text-xl font-serif font-bold text-[var(--primary)] tracking-tight">
              YegnaEdir
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/80">
            <a href="#home" className="hover:text-[var(--primary)] transition-colors">Home</a>
            <a href="#features" className="hover:text-[var(--primary)] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[var(--primary)] transition-colors">How It Works</a>
            <a href="#about" className="hover:text-[var(--primary)] transition-colors">About Our Edir</a>
            <button
              onClick={() => onNavigateToAuth('LOGIN')}
              className="hover:text-[var(--primary)] font-semibold transition-colors"
            >
              Sign In
            </button>
          </nav>

          {/* Join Button */}
          <div>
            <button
              onClick={() => onNavigateToAuth('REGISTER')}
              className="text-sm font-medium rounded-[0.75rem] px-5 py-2.5 bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 shadow-sm transition-all"
            >
              Join the Edir
            </button>
          </div>
        </div>
      </header>

      {/* ================= 2. HERO SECTION ================= */}
      <section id="home" className="pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow Label: Harvest Gold */}
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] block">
                OUR NEIGHBORHOOD EDIR
              </span>

              {/* Headline: Edir Green */}
              <h1 className="text-4xl lg:text-5xl font-serif font-normal text-[var(--primary)] leading-[1.15] tracking-tight">
                Your Edir, organized and always with you.
              </h1>

              {/* Subtitle: Deep Forest Text */}
              <p className="text-base lg:text-lg text-[var(--foreground)]/80 font-normal leading-relaxed max-w-xl">
                YegnaEdir brings our neighborhood Edir's members, contributions, announcements, requests, and records together in one trusted digital space.
              </p>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigateToAuth('REGISTER')}
                  className="rounded-[0.75rem] bg-[var(--primary)] text-[var(--primary-foreground)] px-7 py-3.5 text-sm font-medium hover:opacity-95 transition-all shadow-warm"
                >
                  Join the Edir
                </button>
                <a
                  href="#about"
                  className="rounded-[0.75rem] border border-[var(--primary)]/20 text-[var(--primary)] px-7 py-3.5 text-sm font-medium hover:bg-[var(--primary)]/5 transition-all text-center"
                >
                  Learn About Our Edir
                </a>
              </div>

              {/* 4 Checkpoint Bullets */}
              <div className="pt-4 grid grid-cols-2 gap-y-2 gap-x-6 text-sm font-normal text-[var(--foreground)]/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" strokeWidth={1.5} />
                  <span>Member profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" strokeWidth={1.5} />
                  <span>Contribution tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" strokeWidth={1.5} />
                  <span>Request & support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" strokeWidth={1.5} />
                  <span>Announcements</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Frame: Outer warm container bg-[#ede5d4] p-4 sm:p-5 rounded-[2.5rem] */}
            <div className="lg:col-span-6">
              <div className="bg-[#ede5d4] p-4 sm:p-5 rounded-[2.5rem]">
                <div className="rounded-3xl overflow-hidden relative shadow-sm bg-[#134e3a] group">
                  <img
                    src="/edir-community.jpg"
                    alt="Ethiopian Edir Assembly"
                    className="w-full h-[400px] sm:h-[460px] object-cover opacity-85 mix-blend-luminosity filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Rich Forest Green Duotone Overlay */}
                  <div className="absolute inset-0 bg-[#0f382c]/75 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09261e] via-transparent to-transparent opacity-90" />
                  
                  {/* Quote Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="font-serif italic text-base sm:text-lg leading-snug text-emerald-100/95">
                      "Edir is more than support — it is the promise that no one walks alone."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. FEATURES SECTION (Soft Cream Background) ================= */}
      <section id="features" className="py-20 bg-[var(--secondary)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] block">
              FEATURES
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--primary)] font-normal">
              Everything Our Community Needs
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] max-w-2xl font-normal">
              From everyday member services to official Edir administration, YegnaEdir brings the essential activities of our community into one trusted digital space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Near white card surfaces */}
            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mb-6">
                <User className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Member Profiles</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Every member has a clear profile with contact details, family links and Edir membership history.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mb-6">
                <CreditCard className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Contributions & Payments</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Track monthly dues, special collections and payment history with transparency for members and auditors.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mb-6">
                <ClipboardList className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Requests & Support</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Submit bereavement, equipment or hardship requests and follow their status from submission to resolution.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mb-6">
                <Megaphone className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Announcements</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Officials broadcast updates, events and reminders so members never miss important news.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Organized Leadership</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Chairpersons, secretaries, treasurers, inventory officers, and auditors have the tools they need to serve the community effectively.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mb-6">
                <FileText className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Reports & Records</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Generate summaries of contributions, requests and activities to keep the Edir accountable.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. FOR EVERY MEMBER CHECKLIST (Warm Cream Background) ================= */}
      <section className="py-24 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header — vertically centered with card grid */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] block">
                FOR EVERY MEMBER
              </span>
              <h2 className="text-3xl font-serif text-[var(--primary)] font-normal leading-snug">
                Stay close to your community
              </h2>
              <p className="text-base text-[var(--foreground)]/80 leading-relaxed font-normal">
                YegnaEdir is built for every member of the neighborhood. It keeps you connected to the people and activities that matter, without making things complicated.
              </p>
            </div>

            {/* Right Checklist Grid — 7 items, last one half-width */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {/* Row 1 */}
              <div className="col-span-1 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[var(--foreground)]">View and manage your profile</span>
              </div>
              <div className="col-span-1 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[var(--foreground)]">View contribution history</span>
              </div>

              {/* Row 2 */}
              <div className="col-span-1 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[var(--foreground)]">Make or record contributions</span>
              </div>
              <div className="col-span-1 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[var(--foreground)]">Receive announcements</span>
              </div>

              {/* Row 3 */}
              <div className="col-span-1 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[var(--foreground)]">Submit requests</span>
              </div>
              <div className="col-span-1 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[var(--foreground)]">Track request status</span>
              </div>

              {/* Row 4 — 7th card, left half only */}
              <div className="col-span-1 p-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[var(--foreground)]">Stay informed about Edir activities</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. ABOUT OUR EDIR / LEADERSHIP SECTION (Soft Cream Background) ================= */}
      <section id="about" className="py-20 bg-[var(--secondary)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] block">
              ABOUT OUR EDIR
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--primary)] font-normal">
              Serving the Community, Together
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] font-normal">
              Every Edir official is a member of the community, with additional responsibilities to help keep the Edir organized, transparent, and supportive.
            </p>
          </div>

          {/* 5 Leadership Role Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                <User className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h4 className="text-xl font-serif font-semibold text-[var(--primary)]">Chairperson</h4>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">Guides meetings and community decisions.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h4 className="text-xl font-serif font-semibold text-[var(--primary)]">Secretary</h4>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">Keeps records and member communication.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h4 className="text-xl font-serif font-semibold text-[var(--primary)]">Treasurer</h4>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">Manages contributions and finances.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h4 className="text-xl font-serif font-semibold text-[var(--primary)]">Inventory Officer</h4>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">Looks after equipment and supplies.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.08)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.75} />
              </div>
              <h4 className="text-xl font-serif font-semibold text-[var(--primary)]">Auditor</h4>
              <p className="text-sm text-[var(--muted-foreground)] mt-2">Reviews records for transparency.</p>
            </div>
          </div>

          {/* 3 Mutual Support Cards (Harvest Gold Icons) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs space-y-3">
              <HeartHandshake className="w-6 h-6 text-[var(--accent)] mx-auto mb-3" strokeWidth={1.75} />
              <p className="text-base font-medium text-[var(--foreground)]">
                Built around mutual support — the heart of every Edir.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs space-y-3">
              <Heart className="w-6 h-6 text-[var(--accent)] mx-auto mb-3" strokeWidth={1.75} />
              <p className="text-base font-medium text-[var(--foreground)]">
                Transparent contributions so every member knows where help is flowing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center shadow-xs space-y-3">
              <Users className="w-6 h-6 text-[var(--accent)] mx-auto mb-3" strokeWidth={1.75} />
              <p className="text-base font-medium text-[var(--foreground)]">
                One neighborhood, one community, one trusted digital home.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. HOW IT WORKS SECTION (Warm Cream Background) ================= */}
      <section id="how-it-works" className="py-20 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] block">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[var(--primary)] font-normal">
              Three steps to stay connected
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 text-left shadow-xs">
              <span className="text-5xl font-serif font-bold text-emerald-800/30 block mb-4">01</span>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Become a Member</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Sign up and complete your profile. Once approved, you are part of the neighborhood Edir digital space.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 text-left shadow-xs">
              <span className="text-5xl font-serif font-bold text-emerald-800/30 block mb-4">02</span>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Stay Connected</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Receive announcements, view your contributions, and keep up with community activities and events.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 text-left shadow-xs">
              <span className="text-5xl font-serif font-bold text-emerald-800/30 block mb-4">03</span>
              <h3 className="text-xl font-serif font-semibold text-[var(--primary)] mb-2">Participate and Support</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Submit requests, make contributions, and take part in the life of the Edir — all in one place.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 7. CTA CANOPY BANNER ================= */}
      <section className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-canopy py-16 px-6 sm:px-12 text-center text-white shadow-warm relative overflow-hidden">
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-[var(--primary-foreground)] leading-tight font-normal">
                Stay Connected With Your Edir
              </h2>

              <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-xl mx-auto">
                Keep your membership, contributions, announcements, requests, and community activities organized in one trusted place.
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => onNavigateToAuth('REGISTER')}
                  className="rounded-xl bg-[var(--background)] text-[var(--primary)] px-7 py-2.5 sm:py-3 text-sm font-semibold shadow-sm hover:bg-white transition-all"
                >
                  Join the Edir
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 8. FOOTER ================= */}
      <footer className="bg-[var(--background)] border-t border-[var(--border)] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted-foreground)]">
          
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-xl object-contain shadow-xs" />
            <span className="font-serif font-bold text-[var(--primary)] text-xl tracking-tight">YegnaEdir</span>
          </div>

          <p className="text-center font-normal text-[var(--muted-foreground)]">
            &copy; 2026 YegnaEdir. Built for our neighborhood Edir community.
          </p>

        </div>
      </footer>

    </div>
  );
};
