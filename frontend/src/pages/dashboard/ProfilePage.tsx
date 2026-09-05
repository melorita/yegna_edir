import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, CreditCard, Phone, Mail, Home, CalendarCheck, Save, XCircle } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth();

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
    <div className="space-y-6">
      {/* Profile Header - OUTSIDE THE CARD */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">My Profile</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Your membership information as registered with the Edir committee.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        {/* Profile Card with Avatar */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#e8e5df] text-[var(--primary)] flex items-center justify-center font-bold text-2xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1">
              <User className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase">Full Name</span>
            </div>
            <p className="text-sm font-medium text-[var(--foreground)] ml-6">{memberDisplayName}</p>
          </div>

          {/* Member ID */}
          <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase">Member ID</span>
            </div>
            <p className="text-sm font-medium text-[var(--foreground)] ml-6">{memberId}</p>
          </div>

          {/* Phone - Editable */}
          <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase">Phone</span>
            </div>
            {editMode ? (
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full ml-6 px-2 py-1 text-sm font-medium text-[var(--foreground)] bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            ) : (
              <p className="text-sm font-medium text-[var(--foreground)] ml-6">{phone}</p>
            )}
          </div>

          {/* Email - Editable */}
          <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase">Email</span>
            </div>
            {editMode ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full ml-6 px-2 py-1 text-sm font-medium text-[var(--foreground)] bg-white rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            ) : (
              <p className="text-sm font-medium text-[var(--foreground)] ml-6">{email}</p>
            )}
          </div>

          {/* Kebele */}
          <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1">
              <Home className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase">Kebele</span>
            </div>
            <p className="text-sm font-medium text-[var(--foreground)] ml-6">Kebele 08, House 214</p>
          </div>

          {/* Member Since */}
          <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-1">
              <CalendarCheck className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[10px] font-mono text-[var(--muted-foreground)] uppercase">Member Since</span>
            </div>
            <p className="text-sm font-medium text-[var(--foreground)] ml-6">March 2024</p>
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
  );
};
