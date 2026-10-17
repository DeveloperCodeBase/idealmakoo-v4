'use client';

import { CyberDashboardLayout } from '@/components/ui/CyberDashboardLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { LOCALE_CONFIG, SupportedLocale } from '@/types/domain';
import { AuthProvider } from '@/contexts/AuthContext';
import { DemoRoleSwitcher } from '@/components/auth/DemoRoleSwitcher';
import Link from 'next/link';

export default function ClinicalProtocolTimerPage({ params: { locale } }: { params: { locale: string } }) {
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
            <span className="text-xs text-slate-500 uppercase px-4 py-2 mt-4">ابزارهای تخصصی</span>
            <Link href={`/${currentLocale}/tools/shade-mould-matcher`} className="px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">تطبیق شید و قالب</Link>
            <Link href={`/${currentLocale}/tools/clinical-protocol`} className="px-4 py-2 text-sm text-cyan-400 bg-cyan-950/20 rounded-md border border-cyan-900/50">تایمر پروتکل بالینی</Link>
          </nav>
        }
      >
        <div className="space-y-8 pb-20">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">تایمر هوشمند پروتکل بالینی</h1>
            <p className="text-slate-400">راهنمای گام‌به‌گام و زمان‌سنج دقیق برای استفاده از مواد دندانی ایده‌آل ماکو.</p>
          </header>

          <GlassCard variant="workspace-2d" className="max-w-2xl mx-auto p-8 text-center">
             <div className="mb-8">
                <select className="w-full bg-slate-900 border border-slate-700 p-3 rounded-xl text-slate-200 outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>اسید اچ ایده‌آل (۳۷٪) - آماده‌سازی مینا</option>
                  <option>باندینگ نسل ۵ - لایت کیور</option>
                  <option>کامپوزیت خلفی نانو - لایت کیور</option>
                </select>
             </div>

             <div className="w-48 h-48 mx-auto bg-slate-900 rounded-full border-[6px] border-emerald-500/30 flex flex-col items-center justify-center relative mb-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
               <span className="text-5xl font-mono font-bold text-emerald-400" dir="ltr">00:15</span>
               <span className="text-xs text-slate-400 mt-2">ثانیه (زمان استاندارد اچینگ)</span>
             </div>

             <div className="flex gap-4 justify-center">
               <GlowingButton variant="emerald" className="w-32">شروع (Start)</GlowingButton>
               <GlowingButton variant="glass" className="w-32">بازنشانی</GlowingButton>
             </div>

             <div className="mt-8 text-sm text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-right">
               <strong className="text-slate-200 block mb-2">نکات بالینی:</strong>
               پس از پایان 15 ثانیه، سطح را به مدت 10 ثانیه کاملاً با آب بشویید تا جایی که اثری از رنگ آبی باقی نماند. سپس سطح را به آرامی خشک کنید.
             </div>
          </GlassCard>
        </div>
        <DemoRoleSwitcher />
      </CyberDashboardLayout>
    </AuthProvider>
  );
}
