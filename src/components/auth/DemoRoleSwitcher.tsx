'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { mockDemoAccounts } from '@/lib/store';
import { RoleKey } from '@/types/domain';

export const DemoRoleSwitcher: React.FC = () => {
  const { user, switchRole } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className={`bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto opacity-100 mb-2' : 'h-0 opacity-0'}`}>
        <div className="p-2 flex flex-col gap-1 max-h-60 overflow-y-auto">
          {mockDemoAccounts.map((account) => (
            <button
              key={account.id}
              onClick={() => {
                switchRole(account.role as RoleKey);
                setIsOpen(false);
              }}
              className={`text-left px-3 py-1.5 text-sm rounded ${user.id === account.id ? 'bg-cyan-900/50 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'}`}
            >
              {account.name} <span className="text-xs text-slate-500 block">{account.role}</span>
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full shadow-lg border border-slate-600 text-sm font-medium transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        نقش فعلی: {user.name}
      </button>
    </div>
  );
};
