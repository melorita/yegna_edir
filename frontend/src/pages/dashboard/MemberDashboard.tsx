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
import {
  ChairpersonWorkspace,
  SecretaryWorkspace,
  FinanceWorkspace,
  InventoryWorkspace,
  AuditWorkspace
} from './workspace';

/**
 * MemberDashboard - Main dashboard component with routing
 * 
 * This component wraps the modular dashboard structure with React Router.
 * The dashboard is organized into separate page components for maintainability:
 * 
 * Common Member Routes:
 * - /dashboard → OverviewPage (Welcome banner and stats)
 * - /dashboard/profile → ProfilePage (Member profile and settings)
 * - /dashboard/contributions → ContributionsPage (Monthly contributions tracker)
 * - /dashboard/payment-history → PaymentHistoryPage (Payment records)
 * - /dashboard/requests → RequestsPage (Assistance requests)
 * - /dashboard/announcements → AnnouncementsPage (Committee announcements)
 * - /dashboard/attendance → AttendancePage (Attendance tracking and QR scanner)
 * 
 * Role-specific Workspace Routes:
 * - /dashboard/workspace/chairperson → ChairpersonWorkspace (Edir Management)
 * - /dashboard/workspace/secretary → SecretaryWorkspace (Secretary Workspace)
 * - /dashboard/workspace/finance → FinanceWorkspace (Treasurer Finance)
 * - /dashboard/workspace/inventory → InventoryWorkspace (Inventory Officer)
 * - /dashboard/workspace/audit → AuditWorkspace (Auditor Center)
 * 
 * Navigation and layout are handled by the DashboardLayout component.
 * Role workspaces are dynamically shown in the sidebar based on user role.
 */
export const MemberDashboard: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Common Member Pages */}
          <Route index element={<OverviewPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contributions" element={<ContributionsPage />} />
          <Route path="payment-history" element={<PaymentHistoryPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="attendance" element={<AttendancePage />} />

          {/* Role-specific Workspaces */}
          <Route path="workspace/chairperson" element={<ChairpersonWorkspace />} />
          <Route path="workspace/secretary" element={<SecretaryWorkspace />} />
          <Route path="workspace/finance" element={<FinanceWorkspace />} />
          <Route path="workspace/inventory" element={<InventoryWorkspace />} />
          <Route path="workspace/audit" element={<AuditWorkspace />} />
        </Route>
        {/* Redirect any other path to dashboard overview */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
