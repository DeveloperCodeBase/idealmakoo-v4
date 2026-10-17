'use client';

import React from 'react';
import { Search } from 'lucide-react';

export interface CyberDashboardLayoutProps {
  children: React.ReactNode;
  locale: string;
  direction: 'rtl' | 'ltr';
  sidebarContent?: React.ReactNode;
}

export const CyberDashboardLayout: React.FC<CyberDashboardLayoutProps> = ({
  children,
  locale,
  direction,
  sidebarContent,
}) => {
  return (
    <div
      dir={direction}
      className="min-h-screen bg-canvas text-slate-100 flex flex-col md:flex-row font-sans"
    >
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900/80 backdrop-blur-md border-r border-slate-800 flex flex-col rtl:border-l rtl:border-r-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Ideal Makoo
          </span>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-4">
          {sidebarContent}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen max-h-screen">
        {/* Header */}
        <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 shrink-0">
          <div className="flex-1 flex items-center">
             <div className="relative w-64 max-w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="جستجوی فرمان‌ها (Ctrl+K)"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
             </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400 uppercase">{locale}</span>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#050505] relative">
            <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
            <div className="relative z-10 max-w-7xl mx-auto">
              {children}
            </div>
        </div>
      </main>
    </div>
  );
};
