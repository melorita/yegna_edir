import React, { createContext, useContext, useState } from 'react';
import { UserAccount, PrimaryActor, CommitteeRole } from '../types';
import { edirService } from '../services/edirService';

interface AuthContextType {
  currentUser: UserAccount | null;
  login: (identifier: string, role: PrimaryActor, committeeRole?: CommitteeRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

  const login = async (identifier: string, role: PrimaryActor, committeeRole?: CommitteeRole) => {
    const user = await edirService.login(identifier, role, committeeRole);
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
