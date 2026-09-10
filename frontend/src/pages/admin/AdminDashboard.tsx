import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { AdminOverview } from './AdminOverview';
import { UserManagement } from './UserManagement';
import { CommitteeManagement } from './CommitteeManagement';
import { RegistrationManagement } from './RegistrationManagement';
import { RolesPermissions } from './RolesPermissions';
import { EdirConfiguration } from './EdirConfiguration';
import { AuditLogs } from './AuditLogs';
import { SecurityMonitoring } from './SecurityMonitoring';
import { PlatformReports } from './PlatformReports';
import { SystemNotifications } from './SystemNotifications';

export const AdminDashboard: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('overview');

  const renderContent = () => {
    switch (currentView) {
      case 'overview':
        return <AdminOverview />;
      case 'users':
        return <UserManagement />;
      case 'registrations':
        return <RegistrationManagement />;
      case 'committee':
        return <CommitteeManagement />;
      case 'roles':
        return <RolesPermissions />;
      case 'edir-config':
        return <EdirConfiguration />;
      case 'audit-logs':
        return <AuditLogs />;
      case 'security':
        return <SecurityMonitoring />;
      case 'notifications':
        return <SystemNotifications />;
      case 'reports':
        return <PlatformReports />;
      case 'settings':
        return <EdirConfiguration />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <AdminLayout currentView={currentView} onNavigate={setCurrentView}>
      {renderContent()}
    </AdminLayout>
  );
};
