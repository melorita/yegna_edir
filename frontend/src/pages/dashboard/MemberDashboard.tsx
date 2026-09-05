import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';

/**
 * MemberDashboard - Main dashboard wrapper component
 * 
 * This component now serves as a simple wrapper around the modular dashboard structure.
 * The actual dashboard pages are organized as separate components for better maintainability:
 * 
 * - OverviewPage: Welcome banner and stats
 * - ProfilePage: Member profile and settings
 * - ContributionsPage: Monthly contributions tracker
 * - PaymentHistoryPage: Payment records
 * - RequestsPage: Assistance requests
 * - AnnouncementsPage: Committee announcements
 * - AttendancePage: Attendance tracking and QR scanner
 * 
 * All navigation and routing is handled by DashboardLayout component.
 */
export const MemberDashboard: React.FC = () => {
  return (
    <BrowserRouter>
      <DashboardLayout />
    </BrowserRouter>
  );
};
