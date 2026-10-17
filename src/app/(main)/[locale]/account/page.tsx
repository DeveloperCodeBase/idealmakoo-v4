'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function AccountPage({ params: { locale } }: { params: { locale: string } }) {
  const currentLocale = (locale as SupportedLocale) || 'fa';
  const config = LOCALE_CONFIG[currentLocale];

  return (
    <AuthProvider>
      <CyberDashboardLayout
        locale={currentLocale}
        direction={config.direction}
        sidebarContent={
          <nav className="flex flex-col gap-2">
            <Link href={`/${currentLocale}`} className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-md">بازگشت به سایت</Link>
            <span className="text-xs text-slate-500 uppercase px-4 py-2 mt-4">حساب کاربری من</span>
            <Link href={`/${currentLocale}/account`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">پیشخوان کاربری</Link>
            <Link href={`/${currentLocale}/inquiry-list`} className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-md">استعلام‌های من</Link>
            <Link href="#" className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-md">تیکت‌های پشتیبانی</Link>
            <Link href="/admin/crm" className="px-4 py-2 text-sm text-emerald-400 hover:bg-slate-800 rounded-md mt-4 border border-emerald-900/50">ورود به پنل کارمندان</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8 border-b border-slate-700/50 pb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">پیشخوان حساب کاربری</h1>
              <p className="text-slate-400">خوش آمدید. شما به تمام امکانات پورتال دسترسی دارید.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <GlassCard variant="workspace-2d" className="p-6">
               <h3 className="text-slate-400 text-sm mb-2">پیش‌فاکتورهای منتظر تایید</h3>
               <div className="text-4xl font-bold text-cyan-400 font-mono">۲</div>
             </GlassCard>
             <GlassCard variant="workspace-2d" className="p-6">
               <h3 className="text-slate-400 text-sm mb-2">تیکت‌های باز</h3>
               <div className="text-4xl font-bold text-slate-200 font-mono">۱</div>
             </GlassCard>
             <GlassCard variant="workspace-2d" className="p-6">
               <h3 className="text-slate-400 text-sm mb-2">امتیاز وفاداری</h3>
               <div className="text-4xl font-bold text-emerald-400 font-mono">۱۴۵</div>
             </GlassCard>
          </div>

          <GlassCard variant="workspace-2d" className="p-6">
             <h3 className="font-bold text-lg mb-4 text-slate-200">آخرین فعالیت‌ها</h3>
             <ul className="space-y-4 text-sm text-slate-400">
               <li className="flex justify-between items-center py-2 border-b border-slate-700/50">
                 <span>ثبت استعلام جدید شامل ۳ قلم کالا</span>
                 <span className="text-xs font-mono">1403/09/12</span>
               </li>
               <li className="flex justify-between items-center py-2 border-b border-slate-700/50">
                 <span>درخواست پشتیبانی کیفیت (TKT-1042)</span>
                 <span className="text-xs font-mono">1403/09/10</span>
               </li>
               <li className="flex justify-between items-center py-2">
                 <span>بروزرسانی اطلاعات پروفایل حقوقی</span>
                 <span className="text-xs font-mono">1403/08/25</span>
               </li>
             </ul>
          </GlassCard>

        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
