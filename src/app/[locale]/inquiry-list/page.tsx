'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function InquiryListPage({ params: { locale } }: { params: { locale: string } }) {
  const currentLocale = (locale as SupportedLocale) || 'fa';
  const config = LOCALE_CONFIG[currentLocale];

  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale={currentLocale}
        direction={config.direction}
        sidebarContent={
          <nav className="flex flex-col gap-2">
            <Link href={`/${currentLocale}`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">داشبورد (خانه)</Link>
            <Link href={`/${currentLocale}/products`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">محصولات</Link>
            <Link href={`/${currentLocale}/inquiry-list`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">فهرست استعلام فنی</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">فهرست استعلام فنی (RFQ)</h1>
            <p className="text-slate-400">کدها و مشخصات فنی مورد نیاز خود را جهت بررسی و دریافت پیش‌فاکتور ارسال نمایید.</p>
          </header>

          <GlassCard variant="workspace-2d" className="p-8 text-center text-slate-400 min-h-[300px] flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-slate-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
            <h3 className="text-xl font-medium text-slate-300 mb-2">فهرست استعلام شما خالی است</h3>
            <p className="mb-6 max-w-sm">جهت دریافت قیمت و مشاوره، اقلام مورد نیاز را از کاتالوگ محصولات به این فهرست اضافه کنید.</p>
            <Link href={`/${currentLocale}/products`}>
              <GlowingButton variant="glass">بازگشت به کاتالوگ محصولات</GlowingButton>
            </Link>
          </GlassCard>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
