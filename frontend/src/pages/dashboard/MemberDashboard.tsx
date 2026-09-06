import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { OverviewPage } from './OverviewPage';
import { ProfilePage } from './ProfilePage';
import { ContributionsPage } from './ContributionsPage';
import { PaymentHistoryPage } from './PaymentHistoryPage';
import { RequestsPage } from './RequestsPage';
import { AttendancePage } from './AttendancePage';
import { AnnouncementsPage } from './AnnouncementsPage';

/**
 * MemberDashboard - Main dashboard component with routing
 * 
 * This component wraps the modular dashboard structure with React Router.
 * The dashboard is organized into separate page components for maintainability:
 * 
 * Routes:
 * - /dashboard → OverviewPage (Welcome banner and stats)
 * - /dashboard/profile → ProfilePage (Member profile and settings)
 * - /dashboard/contributions → ContributionsPage (Monthly contributions tracker)
 * - /dashboard/payment-history → PaymentHistoryPage (Payment records)
 * - /dashboard/requests → RequestsPage (Assistance requests)
 * - /dashboard/announcements → AnnouncementsPage (Committee announcements)
 * - /dashboard/attendance → AttendancePage (Attendance tracking and QR scanner)
 * 
 * Navigation and layout are handled by the DashboardLayout component.
 */
export const MemberDashboard: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contributions" element={<ContributionsPage />} />
          <Route path="payment-history" element={<PaymentHistoryPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="attendance" element={<AttendancePage />} />
        </Route>
        {/* Redirect any other path to dashboard overview */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
