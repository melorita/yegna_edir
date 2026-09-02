import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { edirService } from '../../services/edirService';
import { PrimaryActor, CommitteeRole } from '../../types';
import { Eye, EyeOff, ShieldCheck, ArrowLeft, CheckCircle2, ScanLine, Camera, X, RefreshCw, Fingerprint } from 'lucide-react';

interface AuthPageProps {
  initialTab?: 'REGISTER' | 'LOGIN';
  onBack?: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialTab = 'REGISTER', onBack }) => {
  const { login } = useAuth();
  const [mode, setMode] = useState<'REGISTER' | 'LOGIN'>(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [faydaScan, setFaydaScan] = useState(false);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'detected'>('idle');
  const scanTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Registration Form State
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [woreda, setWoreda] = useState('');
  const [kebele, setKebele] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedBylaws, setAgreedBylaws] = useState(false);

  // Sign In Form State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<PrimaryActor>('YEGNA_MEMBER');
  const [committeeRole, setCommitteeRole] = useState<CommitteeRole | undefined>(undefined);

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Validate required fields (all except email)
    if (!firstName.trim()) {
      setStatusMessage({ type: 'error', text: 'First name is required.' });
      return;
    }
    if (!middleName.trim()) {
      setStatusMessage({ type: 'error', text: 'Middle name (Father\'s name) is required.' });
      return;
    }
    if (!lastName.trim()) {
      setStatusMessage({ type: 'error', text: 'Last name (Grandfather\'s name) is required.' });
      return;
    }
    if (!phone.trim()) {
      setStatusMessage({ type: 'error', text: 'Phone number is required.' });
      return;
    }
    if (!woreda.trim()) {
      setStatusMessage({ type: 'error', text: 'Woreda is required.' });
      return;
    }
    if (!kebele.trim()) {
      setStatusMessage({ type: 'error', text: 'Kebele is required.' });
      return;
    }
    if (!password) {
      setStatusMessage({ type: 'error', text: 'Password is required.' });
      return;
    }
    if (password.length < 6) {
      setStatusMessage({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }
    if (!confirmPassword) {
      setStatusMessage({ type: 'error', text: 'Please confirm your password.' });
      return;
    }
    if (password !== confirmPassword) {
      setStatusMessage({ type: 'error', text: 'Passwords do not match. Please re-enter.' });
      return;
    }
    if (!agreedBylaws) {
      setStatusMessage({ type: 'error', text: 'Please confirm agreement to the Edir bylaws.' });
      return;
    }

    const res = await edirService.registerMember({
      firstName,
      middleName,
      lastName,
      email,
      phone,
      woreda,
      kebele,
      woredaKebele: `Woreda ${woreda}, Kebele ${kebele}`
    });

    setStatusMessage({ type: 'success', text: res.message });
    setTimeout(() => {
      setMode('LOGIN');
      setStatusMessage(null);
    }, 2000);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!loginIdentifier.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter your phone number or email.' });
      return;
    }
    if (!loginPassword) {
      setStatusMessage({ type: 'error', text: 'Please enter your password.' });
      return;
    }

    await login(loginIdentifier, selectedRole, committeeRole);
  };

  return (
    <div className="h-screen w-full bg-[var(--background)] overflow-hidden font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 h-full w-full">

        {/* ================= LEFT HERO COLUMN (Fixed / Non-scrollable) ================= */}
        <div className="lg:col-span-6 relative bg-[#09261e] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden h-full">
          {/* Real image — more visible through the green overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-65"
            style={{ backgroundImage: `url('/edir-community.jpg')` }}
          />

          {/* Green duotone overlay — lighter so the photo shows through */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#09261e]/70 via-[#0f382c]/60 to-[#051a14]/80" />

          {/* Top Eyebrow Tag */}
          <div className="relative z-10">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[var(--accent)] uppercase block">
              OUR COMMUNITY EDIR
            </span>
          </div>

          {/* Main Serif Heading & Description */}
          <div className="relative z-10 my-auto py-8 space-y-6 max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[var(--primary-foreground)] leading-[1.25] tracking-tight">
              A tradition of standing together — now organized, transparent and always with you.
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/85 leading-relaxed font-normal">
              From monthly contributions to bereavement support and equipment requests, YegnaEdir keeps every member, official, and record in one trusted place.
            </p>
          </div>

          {/* Bottom 3 Feature Pillars */}
          <div className="relative z-10 pt-8 border-t border-emerald-800/60 grid grid-cols-3 gap-4 text-left">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">MEMBERS</p>
              <p className="text-xs text-emerald-100/90 mt-1 font-medium">One profile</p>
            </div>
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">CONTRIBUTIONS</p>
              <p className="text-xs text-emerald-100/90 mt-1 font-medium">Full history</p>
            </div>
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">OFFICIALS</p>
              <p className="text-xs text-emerald-100/90 mt-1 font-medium">Role based</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FORM COLUMN (Independently Scrollable) ================= */}
        <div className="lg:col-span-6 bg-[var(--background)] p-6 sm:p-8 lg:p-10 flex flex-col justify-start h-full overflow-y-auto">
          
          {/* Top Bar: Back Button on Left & Logo/Wordmark on Right */}
          <div className="flex items-center justify-between pb-5 mb-3 border-b border-[var(--border)]">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors px-3 py-1.5 rounded-lg hover:bg-[var(--secondary)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            {/* Logo & Wordmark on the Right */}
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={onBack}
            >
              <img src="/logo.jpg" alt="YegnaEdir Logo" className="w-8 h-8 rounded-xl object-contain shadow-xs" />
              <span className="font-serif font-bold text-xl text-[var(--primary)] tracking-tight">
                YegnaEdir
              </span>
            </div>
          </div>

          <div className="max-w-xl mx-auto w-full pt-1 pb-4">

            {faydaScan ? (
              /* ================= FAYDA DIGITAL ID SCANNER ================= */
              <div className="space-y-5">
                {/* Scanner Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">
                      FAYDA DIGITAL ID
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-[var(--primary)] font-normal tracking-tight">
                      Scan your ID
                    </h2>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      Hold your Fayda National ID card up to the camera. We'll read your details automatically.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFaydaScan(false);
                      setScanState('idle');
                      if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
                    }}
                    className="mt-1 p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] transition-all shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Camera Viewfinder */}
                <div className="relative rounded-2xl overflow-hidden bg-[var(--primary)] aspect-[4/3] w-full shadow-warm">
                  {/* Simulated camera feed background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#09261e] via-[#0f382c] to-[#051a14]" />

                  {/* Animated grid lines */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
                      backgroundSize: '32px 32px'
                    }}
                  />

                  {/* ID Card frame in centre */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[72%] aspect-[1.586/1]">
                      {/* Corner brackets */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-[var(--accent)] rounded-tl-lg" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-[var(--accent)] rounded-tr-lg" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-[var(--accent)] rounded-bl-lg" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-[var(--accent)] rounded-br-lg" />

                      {/* Scanning beam */}
                      {scanState === 'scanning' && (
                        <div
                          className="absolute left-2 right-2 h-0.5 bg-[var(--accent)] shadow-[0_0_8px_2px_oklch(0.76_0.145_78/0.6)]"
                          style={{ animation: 'scanBeam 1.8s ease-in-out infinite' }}
                        />
                      )}

                      {/* Detected checkmark */}
                      {scanState === 'detected' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-[var(--accent)]/20 rounded-full p-4 backdrop-blur-sm">
                            <CheckCircle2 className="w-12 h-12 text-[var(--accent)]" />
                          </div>
                        </div>
                      )}

                      {/* Idle centre icon */}
                      {scanState === 'idle' && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <Fingerprint className="w-16 h-16 text-[var(--accent)]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status pill at bottom of viewfinder */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                      scanState === 'detected'
                        ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200'
                        : scanState === 'scanning'
                        ? 'bg-[var(--accent)]/20 border-[var(--accent)]/40 text-amber-200'
                        : 'bg-white/10 border-white/20 text-white/70'
                    }`}>
                      {scanState === 'detected' ? '✓ ID Detected' : scanState === 'scanning' ? 'Scanning…' : 'Position your ID card'}
                    </span>
                  </div>
                </div>

                {/* Scan beam CSS animation */}
                <style>{`
                  @keyframes scanBeam {
                    0% { top: 8%; }
                    50% { top: 88%; }
                    100% { top: 8%; }
                  }
                `}</style>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setScanState('scanning');
                      if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
                      scanTimerRef.current = setTimeout(() => setScanState('detected'), 3500);
                    }}
                    disabled={scanState === 'scanning'}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-xl font-medium text-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <Camera className="w-4 h-4" />
                    {scanState === 'scanning' ? 'Scanning…' : 'Start scan'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setScanState('idle');
                      if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
                    }}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded-xl font-medium text-sm hover:bg-[var(--secondary)] transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Reset
                  </button>
                </div>

                {/* Instructions */}
                <div className="p-4 bg-[var(--secondary)] border border-[var(--border)] rounded-xl space-y-2">
                  <p className="text-xs font-semibold text-[var(--foreground)]">Tips for a good scan</p>
                  <ul className="text-xs text-[var(--muted-foreground)] space-y-1">
                    <li className="flex items-center gap-2"><ScanLine className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" /> Place your ID flat inside the frame corners</li>
                    <li className="flex items-center gap-2"><ScanLine className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" /> Make sure the card is well-lit with no glare</li>
                    <li className="flex items-center gap-2"><ScanLine className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" /> Hold steady until "ID Detected" appears</li>
                  </ul>
                </div>

                {/* Back to manual form */}
                <p className="text-center text-xs text-[var(--muted-foreground)]">
                  Prefer to fill manually?{' '}
                  <button
                    type="button"
                    onClick={() => { setFaydaScan(false); setScanState('idle'); }}
                    className="font-bold text-[var(--primary)] hover:underline"
                  >
                    Use the registration form
                  </button>
                </p>
              </div>
            ) : (
              <>
                {/* Header Text & Mode Switch */}
                <div className="mb-4 space-y-1.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">
                    {mode === 'REGISTER' ? 'MEMBER REGISTRATION' : 'MEMBER SIGN IN'}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[var(--primary)] font-normal tracking-tight">
                    {mode === 'REGISTER' ? 'Join your Edir' : 'Sign in to your Edir'}
                  </h2>
                  {mode === 'REGISTER' && (
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      Create your account to view contributions, submit requests, and receive announcements from your Edir officials.
                    </p>
                  )}
                </div>

                {/* Status Feedback Message */}
                {statusMessage && (
              <div
                className={`mb-6 p-4 rounded-xl text-xs font-medium border flex items-center gap-2.5 ${
                  statusMessage.type === 'error'
                    ? 'bg-rose-50 border-rose-200 text-rose-800'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                ) : null}
                <span>{statusMessage.text}</span>
              </div>
            )}

            {/* ================= FORM 1: REGISTER ================= */}
            {mode === 'REGISTER' ? (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                
                {/* Name Fields: First Name, Middle Name, Last Name (All 3 Required) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      First name <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Selam"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Middle name <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Abebe"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Last name <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Bekele"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Contact: Phone (Required) & Email (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Phone number <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+251 9... ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Email <span className="text-[var(--muted-foreground)] text-[11px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="selam@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Location: Woreda & Kebele (Both Required, Separate fields) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Woreda <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Woreda 03"
                      value={woreda}
                      onChange={(e) => setWoreda(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Kebele <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kebele 05"
                      value={kebele}
                      onChange={(e) => setKebele(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Passwords: Password & Confirm Password (Both Required) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Password <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="At least 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all pr-10 shadow-xs"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                      Confirm password <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        placeholder="Repeat your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all pr-10 shadow-xs"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                        tabIndex={-1}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bylaws Agreement Checkbox (Required) */}
                <div className="p-3.5 bg-[var(--secondary)] border border-[var(--border)] rounded-xl">
                  <label className="flex items-start gap-2.5 text-xs text-[var(--foreground)] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={agreedBylaws}
                      onChange={(e) => setAgreedBylaws(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-[var(--primary)] focus:ring-[var(--primary)] accent-[var(--primary)] shrink-0"
                    />
                    <span className="leading-snug">
                      I agree to the Edir bylaws and confirm that the information provided is accurate. <span className="text-[var(--primary)] font-bold">*</span>
                    </span>
                  </label>
                </div>

                {/* Create Account Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 font-medium text-sm rounded-xl shadow-sm transition-all tracking-wide mt-2"
                >
                  Create account
                </button>

                {/* Divider */}
                <div className="relative my-3">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[var(--border)]" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[var(--background)] px-3 text-[var(--muted-foreground)] font-mono text-[11px]">
                      Or
                    </span>
                  </div>
                </div>

                {/* Continue with Fayda SSO Button */}
                <button
                  type="button"
                  onClick={() => {
                    setFaydaScan(true);
                    setScanState('idle');
                  }}
                  className="w-full py-3 px-4 bg-[var(--card)] hover:bg-[var(--secondary)] border border-[var(--border)] rounded-xl font-medium text-sm text-[var(--foreground)] transition-all shadow-xs flex items-center justify-center gap-3 group hover:border-[var(--primary)]/40 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center font-bold text-xs shadow-xs">
                    ፋ
                  </div>
                  <span className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    Continue with Fayda
                  </span>
                </button>

                {/* Secretary Review Notice & Sign In Toggle */}
                <div className="text-center space-y-3 pt-3 text-xs">
                  <p className="text-[var(--muted-foreground)] flex items-center justify-center gap-1.5 text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                    <span>Your registration is reviewed by your Edir secretary before approval.</span>
                  </p>
                  <p className="text-[var(--foreground)]">
                    Already a member?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('LOGIN');
                        setStatusMessage(null);
                      }}
                      className="font-bold text-[var(--primary)] hover:underline ml-1"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              /* ================= FORM 2: SIGN IN ================= */
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                
                {/* Identifier: Phone or Email */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--foreground)] mb-1.5">
                    Phone number or Email <span className="text-[var(--primary)] font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+251 9... ... or selam@example.com"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-xs"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-[var(--foreground)]">
                      Password <span className="text-[var(--primary)] font-bold">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => alert('Please contact your Edir Secretary for password recovery assistance.')}
                      className="text-[11px] text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Enter your password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all pr-10 shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Sign In */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 font-medium text-sm rounded-xl shadow-sm transition-all tracking-wide mt-2"
                >
                  Sign in to your account
                </button>

                {/* Switch to Registration */}
                <div className="text-center pt-2 text-xs">
                  <p className="text-[var(--foreground)]">
                    Don't have an account yet?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('REGISTER');
                        setStatusMessage(null);
                      }}
                      className="font-bold text-[var(--primary)] hover:underline ml-1"
                    >
                      Join the Edir
                    </button>
                  </p>
                </div>
              </form>
            )}
            </>
            )}

          </div>

          {/* Footer note on right pane */}
          <div className="mt-auto pt-4 border-t border-[var(--border)] text-center text-xs text-[var(--muted-foreground)]">
            &copy; 2026 YegnaEdir. Preserving Ethiopian community mutual assistance.
          </div>

        </div>

      </div>
    </div>
  );
};
