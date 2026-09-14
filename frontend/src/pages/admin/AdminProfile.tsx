import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Lock,
  Save,
  Edit,
  Camera
} from 'lucide-react';

export const AdminProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [adminData, setAdminData] = useState({
    fullName: 'Abebe Bekele',
    email: 'abebe.bekele@yegnaedir.org',
    phone: '+251 911 234567',
    address: 'Bole, Addis Ababa',
    role: 'System Administrator',
    joinDate: '2023-01-15',
    adminId: 'ADMIN-001'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSaveProfile = () => {
    console.log('Saving profile:', adminData);
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    console.log('Changing password');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-[var(--primary)]">Admin Profile</h1>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Manage your administrator account settings
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center text-3xl font-bold">
              {adminData.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center hover:opacity-90 transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-serif font-bold text-[var(--foreground)] mb-1">
              {adminData.fullName}
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-lg bg-purple-100 text-purple-700 border border-purple-200 text-xs font-medium">
                <Shield className="w-3 h-3 inline mr-1" />
                {adminData.role}
              </span>
              <span className="text-sm text-[var(--muted-foreground)]">
                ID: {adminData.adminId}
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Member since {new Date(adminData.joinDate).toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-xl transition-all text-sm font-medium flex items-center gap-2 ${
              isEditing
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-[var(--primary)] text-white hover:opacity-90'
            }`}
          >
            {isEditing ? (
              <>
                <X className="w-4 h-4" />
                Cancel
              </>
            ) : (
              <>
                <Edit className="w-4 h-4" />
                Edit Profile
              </>
            )}
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6 shadow-sm">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
          Contact Information
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[var(--muted-foreground)] mb-2 block flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </label>
            <input
              type="text"
              value={adminData.fullName}
              onChange={(e) => setAdminData({ ...adminData, fullName: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--muted-foreground)] mb-2 block flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              type="email"
              value={adminData.email}
              onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--muted-foreground)] mb-2 block flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <input
              type="tel"
              value={adminData.phone}
              onChange={(e) => setAdminData({ ...adminData, phone: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--muted-foreground)] mb-2 block flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Address
            </label>
            <input
              type="text"
              value={adminData.address}
              onChange={(e) => setAdminData({ ...adminData, address: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSaveProfile}
              className="px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-all text-sm font-medium flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Account Information */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6 shadow-sm">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4">
          Account Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-xs text-[var(--muted-foreground)]">Role</span>
            </div>
            <p className="text-sm font-semibold text-[var(--foreground)]">{adminData.role}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-xs text-[var(--muted-foreground)]">Joined</span>
            </div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {new Date(adminData.joinDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="rounded-2xl bg-card border border-[var(--border)] p-6 shadow-sm">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5 text-[var(--primary)]" />
          Security Settings
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[var(--muted-foreground)] mb-2 block">
              Current Password
            </label>
            <input
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              placeholder="Enter current password"
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--muted-foreground)] mb-2 block">
              New Password
            </label>
            <input
              type="password"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              placeholder="Enter new password"
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[var(--muted-foreground)] mb-2 block">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              placeholder="Confirm new password"
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-background focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>

          <button
            onClick={handleChangePassword}
            disabled={!passwordData.currentPassword || !passwordData.newPassword || passwordData.newPassword !== passwordData.confirmPassword}
            className="px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-medium flex items-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};
