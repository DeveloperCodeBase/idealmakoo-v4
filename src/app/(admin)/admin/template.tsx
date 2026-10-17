'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';

  const navLinkClass = (path: string) =>
    pathname.startsWith(path)
      ? "px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50"
      : "px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-md";

  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale="fa"
        direction="rtl"
        sidebarContent={
          <nav className="flex flex-col gap-2">
            <span className="text-xs text-slate-500 uppercase px-4 py-2 mt-4">مدیریت محتوا (CMS)</span>
            <Link href="/admin/pages" className={navLinkClass('/admin/pages')}>صفحات و بلوک‌ها</Link>
            <Link href="/admin/media" className={navLinkClass('/admin/media')}>کتابخانه رسانه (DAM)</Link>
            <Link href="/admin/translations" className={navLinkClass('/admin/translations')}>میزکار ترجمه ۵ زبانه</Link>
            <Link href="/admin/reviews" className={navLinkClass('/admin/reviews')}>بازبینی علمی</Link>
            <Link href="/admin/publications" className={navLinkClass('/admin/publications')}>زمان‌بندی انتشار</Link>

            <span className="text-xs text-slate-500 uppercase px-4 py-2 mt-4">عملیات و هوش مصنوعی</span>
            <Link href="/admin/crm" className={navLinkClass('/admin/crm')}>سامانه CRM</Link>
            <Link href="/admin/ai" className={navLinkClass('/admin/ai')}>استودیو هوش مصنوعی</Link>
            <Link href="/admin/monitoring" className={navLinkClass('/admin/monitoring')}>مرکز پایش (مانیتورینگ)</Link>
          </nav>
        }
      >
        {children}
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
