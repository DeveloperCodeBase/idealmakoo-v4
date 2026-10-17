'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { RoleKey } from '@/types/domain';
import { mockDemoAccounts } from '@/lib/store';

interface AuthUser {
  id: string;
  role: RoleKey;
  email: string;
  name: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string) => void;
  logout: () => void;
  switchRole: (role: RoleKey) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    // default role for preview purposes
    setUser(mockDemoAccounts[0] as AuthUser);
  }, []);

  const login = (email: string) => {
    const found = mockDemoAccounts.find(u => u.email === email);
    if (found) setUser(found as AuthUser);
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: RoleKey) => {
    const found = mockDemoAccounts.find(u => u.role === role);
    if (found) setUser(found as AuthUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
