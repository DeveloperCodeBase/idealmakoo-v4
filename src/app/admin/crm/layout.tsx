'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function AdminCrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale="fa"
        direction="rtl"
        sidebarContent={
          <nav className="flex flex-col gap-2">
            <span className="text-xs text-slate-500 uppercase px-4 py-2">فضای کاری CRM</span>
            <Link href="/admin/crm" className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-md">پیشخوان CRM</Link>
            <Link href="/admin/crm/opportunities" className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">فرصت‌های فروش</Link>
            <Link href="/admin/crm/cases" className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-md">تیکت‌ها و شکایات کیفیت</Link>
          </nav>
        }
      >
        {children}
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
