import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LandingPage } from './pages/landing/LandingPage';
import { AuthPage } from './pages/auth/AuthPage';
import { TermsPage } from './pages/terms/TermsPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { OverviewPage } from './pages/dashboard/OverviewPage';
import { ProfilePage } from './pages/dashboard/ProfilePage';
import { ContributionsPage } from './pages/dashboard/ContributionsPage';
import { PaymentHistoryPage } from './pages/dashboard/PaymentHistoryPage';
import { RequestsPage } from './pages/dashboard/RequestsPage';
import { AttendancePage } from './pages/dashboard/AttendancePage';
import { AnnouncementsPage } from './pages/dashboard/AnnouncementsPage';

// Protected Route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authTab, setAuthTab] = useState<'REGISTER' | 'LOGIN'>('REGISTER');

  // Handle navigation from callback props
  const navigateTo = (path: string, mode?: 'REGISTER' | 'LOGIN') => {
    if (mode) setAuthTab(mode);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <LandingPage
            onNavigateToAuth={(mode) => navigateTo('/auth', mode)}
            onNavigateToTerms={() => navigateTo('/terms')}
          />
        }
      />

      {/* Auth Page */}
      <Route
        path="/auth"
        element={
          <AuthPage
            initialTab={authTab}
            onBack={() => navigateTo('/')}
            onNavigateToTerms={() => navigateTo('/terms')}
          />
        }
      />

      {/* Terms Page */}
      <Route
        path="/terms"
        element={
          <TermsPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateToAuth={(mode) => navigateTo('/auth', mode)}
          />
        }
      />

      {/* Dashboard Routes - Protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<OverviewPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="contributions" element={<ContributionsPage />} />
        <Route path="payment-history" element={<PaymentHistoryPage />} />
        <Route path="requests" element={<RequestsPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="attendance" element={<AttendancePage />} />
      </Route>

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

