/**
 * Role type definitions for YegnaEdir
 * 
 * All users are fundamentally Edir members.
 * Special roles get ONE additional workspace in the sidebar.
 */

export type UserRole = 
  | 'member'              // Regular member (no special workspace)
  | 'chairperson'         // Gets "Edir Management" workspace
  | 'secretary'           // Gets "Secretary Workspace"
  | 'treasurer'           // Gets "Finance" workspace
  | 'inventory_officer'   // Gets "Inventory" workspace
  | 'auditor';            // Gets "Audit Center" workspace

export interface RoleWorkspaceConfig {
  role: UserRole;
  workspaceLabel: string;
  workspacePath: string;
  workspaceIcon: string; // Icon name from lucide-react
}

/**
 * Maps CommitteeRole to UserRole
 */
export const committeeRoleToUserRole = (committeeRole?: string): UserRole => {
  if (!committeeRole) return 'member';
  
  switch (committeeRole) {
    case 'CHAIRPERSON':
      return 'chairperson';
    case 'SECRETARY':
      return 'secretary';
    case 'TREASURER':
      return 'treasurer';
    case 'INVENTORY_OFFICER':
      return 'inventory_officer';
    case 'AUDITOR':
      return 'auditor';
    default:
      return 'member';
  }
};

/**
 * Gets workspace configuration for a given role
 */
export const getRoleWorkspace = (role: UserRole): RoleWorkspaceConfig | null => {
  switch (role) {
    case 'chairperson':
      return {
        role: 'chairperson',
        workspaceLabel: 'Edir Management',
        workspacePath: '/dashboard/workspace/chairperson',
        workspaceIcon: 'Users'
      };
    case 'secretary':
      return {
        role: 'secretary',
        workspaceLabel: 'Secretary Workspace',
        workspacePath: '/dashboard/workspace/secretary',
        workspaceIcon: 'FileText'
      };
    case 'treasurer':
      return {
        role: 'treasurer',
        workspaceLabel: 'Finance',
        workspacePath: '/dashboard/workspace/finance',
        workspaceIcon: 'DollarSign'
      };
    case 'inventory_officer':
      return {
        role: 'inventory_officer',
        workspaceLabel: 'Inventory',
        workspacePath: '/dashboard/workspace/inventory',
        workspaceIcon: 'Package'
      };
    case 'auditor':
      return {
        role: 'auditor',
        workspaceLabel: 'Audit Center',
        workspacePath: '/dashboard/workspace/audit',
        workspaceIcon: 'ShieldCheck'
      };
    case 'member':
    default:
      return null; // Regular members have no workspace
  }
};
