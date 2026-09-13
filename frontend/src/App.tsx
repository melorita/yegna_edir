import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LandingPage } from './pages/landing/LandingPage';
import { AuthPage } from './pages/auth/AuthPage';
import { TermsPage } from './pages/terms/TermsPage';
import { MemberDashboard } from './pages/dashboard/MemberDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { MembershipPaymentPage } from './pages/payment/MembershipPaymentPage';
import { MonthlyContributionPage } from './pages/payment/MonthlyContributionPage';

const AppContent: React.FC = () => {
  const { currentUser } = useAuth();
  const [viewState, setViewState] = useState<'LANDING' | 'AUTH' | 'TERMS' | 'DASHBOARD' | 'ADMIN' | 'PAYMENT' | 'CONTRIBUTION'>(() => {
    if (window.location.pathname.startsWith('/admin')) {
      return 'ADMIN';
    }
    if (window.location.pathname === '/contribution' || window.location.hash === '#contribution') {
      return 'CONTRIBUTION';
    }
    if (window.location.pathname === '/payment' || window.location.hash === '#payment') {
      return 'PAYMENT';
    }
    if (window.location.pathname === '/terms' || window.location.hash === '#terms') {
      return 'TERMS';
    }
    if (window.location.pathname.startsWith('/dashboard') || window.location.hash === '#dashboard') {
      return 'DASHBOARD';
    }
    return 'LANDING';
  });
  const [authTab, setAuthTab] = useState<'REGISTER' | 'LOGIN'>('REGISTER');

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.startsWith('/admin')) {
        setViewState('ADMIN');
      } else if (window.location.pathname === '/contribution' || window.location.hash === '#contribution') {
        setViewState('CONTRIBUTION');
      } else if (window.location.pathname === '/payment' || window.location.hash === '#payment') {
        setViewState('PAYMENT');
      } else if (window.location.pathname === '/terms' || window.location.hash === '#terms') {
        setViewState('TERMS');
      } else if (window.location.pathname.startsWith('/dashboard') || window.location.hash === '#dashboard') {
        setViewState('DASHBOARD');
      } else if (window.location.pathname === '/auth') {
        setViewState('AUTH');
      } else {
        setViewState('LANDING');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: 'LANDING' | 'AUTH' | 'TERMS' | 'DASHBOARD' | 'ADMIN' | 'PAYMENT' | 'CONTRIBUTION') => {
    setViewState(view);
    const path =
      view === 'TERMS'
        ? '/terms'
        : view === 'DASHBOARD'
        ? '/dashboard'
        : view === 'ADMIN'
        ? '/admin'
        : view === 'PAYMENT'
        ? '/payment'
        : view === 'CONTRIBUTION'
        ? '/contribution'
        : view === 'AUTH'
        ? '/auth'
        : '/';
    try {
      window.history.pushState({}, '', path);
    } catch {
      // Ignore if not supported in test environments
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentUser || viewState === 'DASHBOARD') {
    return <MemberDashboard />;
  }

  if (viewState === 'ADMIN') {
    return <AdminDashboard />;
  }

  if (viewState === 'PAYMENT') {
    return <MembershipPaymentPage />;
  }

  if (viewState === 'CONTRIBUTION') {
    return <MonthlyContributionPage />;
  }

  if (viewState === 'AUTH') {
    return (
      <AuthPage
        initialTab={authTab}
        onBack={() => navigateTo('LANDING')}
        onNavigateToTerms={() => navigateTo('TERMS')}
      />
    );
  }

  if (viewState === 'TERMS') {
    return (
      <TermsPage
        onNavigateHome={() => navigateTo('LANDING')}
        onNavigateToAuth={(mode) => {
          setAuthTab(mode);
          navigateTo('AUTH');
        }}
      />
    );
  }

  return (
    <LandingPage
      onNavigateToAuth={(mode) => {
        setAuthTab(mode);
        navigateTo('AUTH');
      }}
      onNavigateToTerms={() => navigateTo('TERMS')}
    />
  );
};

export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

